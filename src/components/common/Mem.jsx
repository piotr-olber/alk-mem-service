import {
   Button,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   Typography,
} from "@mui/material";
import React from "react";

const Mem = () => {
   return (
    //   <Card className="mb-6" sx={{ maxWidth: 345 }}>
      <Card className="mb-6">
         <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
         />
         <CardContent>
            <Typography gutterBottom variant="h5" component="div">
               Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
               Lizards are a widespread group of squamate reptiles, with over
               6,000 species, ranging across all continents except Antarctica
            </Typography>
         </CardContent>
         <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
         </CardActions>
      </Card>
   );
};

export default Mem;
