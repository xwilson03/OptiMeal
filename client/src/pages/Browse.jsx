import "../styles/App.css";
import Sidebar from "../components/Sidebar.jsx";
import Search from "../components/Search.jsx";
import { useState, useEffect } from 'react'
import { Card, CardActionArea, Stack, Grid } from '@mui/material';
import axios from 'axios'
import { HashLoader } from "react-spinners";



const CardGrid = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading,setLoading] = useState(true);
    const[mapLoading,setMapLoading] = useState(true);
    
    // Only need to make this request once! Removed [recipes]
    useEffect(() => {
        const getRecipes = async () =>{
            
            try {
                const response = await axios.get("/api/recipes")
                                            .then( (res) => {
                                              setLoading(false);
                                              return res.data;
                                            });
                setRecipes(response);
            }
            catch (err) {
                console.log("getRecipes failed with error: " + err);
            }
        };
        getRecipes();
        console.log(loading);
        //Clean up function
        return () => {};
    }, []);

    return (
          //Might need to unfuck this later
          
            loading ? 
              <div className="loader-container">
              <HashLoader 
             
              color={"#317196"}
              loading={loading}
              size={200}>
              </HashLoader> 
            </div>
            
            :
          
          <Grid container spacing={1} columns={4} margin="40px">
            {recipes.map((card, index) => (
                <Grid item key={index} sx={{display:'inline-block', width:"200px", height:"50px"}}>
                <Card sx={{height:"100%", backgroundColor:"#202222", textDecoration:"none"}}>
                    <CardActionArea>
                    <a style={{textDecoration:"none", color:"#ffffff", justifyContent:"center",alignContent:"center"}} href={card.sourceUrl}>
                        {card.title}
                    </a>
                    </CardActionArea>
                </Card>
                </Grid>
            ))
            }
        </Grid>
            
    );
};

function Browse() {

  return (
    <div className="Browse">
      <Stack direction="row">
        <Sidebar/>
        <Stack>
          <Search/>
            <CardGrid/>
        </Stack>
      </Stack>
    </div>
  );
};

export default Browse;
