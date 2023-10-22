import "../styles/App.css";
import Sidebar from "../components/Sidebar.jsx";
import Search from "../components/Search.jsx";
import { Card, CardActionArea, Stack, Grid } from '@mui/material';
import axios from 'axios'

const cardData = await axios.get("/api/recipes")
    .then( (res) => {
        return res.data;
    });

const CardGrid = () => {
    return (
      <Grid container spacing={3} columns={4}>
        {cardData.map((card, index) => (
            <Grid item md={1} key={index}>
              <Card className="browseCard">
                <CardActionArea>
                  <a href={card.sourceUrl}>
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
