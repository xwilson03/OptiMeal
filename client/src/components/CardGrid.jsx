import React from 'react';
import { Container, Stack, Box } from '@mui/material';
import Card from './Card';

const cardData = [
  { title: 'Recipe 1', content: 'Content for Recipe 1' },
  { title: 'Recipe 2', content: 'Content for Recipe 2' },
  { title: 'Recipe 3', content: 'Content for Recipe 3' },
  // ... Add more cards
];

// const [cardData, setCardData] = useState([]);

//   const handleNewData = () => {
//     const newData = { title: 'New Card', content: 'New Content' };
//     setCardData([...cardData, newData]);
//   };

const CardGrid = () => {
  return (
    <Container maxWidth="md">
      <Stack spacing={5} direction="row" justifyContent="center" padding="80px">
        {cardData.map((card, index) => (
          <Box key={index} width="30%">
            <Card title={card.title} content={card.content} />
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default CardGrid;
