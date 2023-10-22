import "../styles/App.css";
import Sidebar from "../components/Sidebar.jsx";
import Search from "../components/Search.jsx";
import { useState, useEffect } from 'react'
import { Card, CardActionArea, Stack, Grid } from '@mui/material';
import axios from 'axios'


const CardGrid = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const getRecipes = async () =>{
            try {
                const response = await axios.get("/api/recipes")
                                            .then( (res) => {return res.data;});
                setRecipes(response);
            }
            catch (err) {
                console.log("getRecipes failed with error: " + err);
            }
        };

        getRecipes();

        return () => {};
    }, [recipes]);

    return (
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
            ))}
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
