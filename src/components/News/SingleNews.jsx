import { Container,Box,CardMedia,CardContent,Typography,Button } from '@mui/material';
import React from "react";
import { useParams,useLocation } from "react-router-dom";

const SingleNews = () => {

  const location = useLocation();
  const {from} = location.state;
  console.log("article",from)
  return (
    <div>
      <Container>
      <Box pt={2}>
      <CardMedia pt={2}
        component="img"
        height="200"
        // height="140"
        image={from.image?.thumbnail?.contentUrl ||
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg"}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {from?.name}
        </Typography>
        <Typography align="right" variant="caption" color="text.secondary">
        {from.datePublished.substr(0, 10)}
        </Typography>
        <Typography py={2} buttomGutter color="text.secondary">
        {from.description}
        </Typography>
        <Button 
        variant="outlined"
        fullWidth
        onClick={()=>window.open(from.url)}
        >Read More</Button>
      </CardContent>

    </Box>

      </Container>
    </div>
  );
};

export default SingleNews;
