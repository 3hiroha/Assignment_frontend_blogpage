import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import "./styles/content.css"




export default function Content() {
  return (
        
      <>  
      <Box marginTop={5}>
        
      <Typography variant='h4' >
           Welcome to My Website
            </Typography>
            
            <Typography variant='body1' className='bodytext' >
            
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis maiores, doloremque 
                a est quibusdam omnis minus ut reprehenderit molestias odio enim modi itaque nobis sunt, 
                eligendi voluptates fugit, architecto quasi! Lorem ipsum dolor sit amet</p>
                </Typography>


           
            
                <Typography variant='body1' className='bodytext'>
                consectetur adipisicing elit. 
                Et minima expedita quisquam inventore praesentium iure, earum impedit nemo voluptates illo nisi 
                exercitationem sint unde vero dignissimos ab voluptatum omnis! Dolor.
                </Typography>
        </Box>      

            
                
              
          
          
        <Grid container rowSpacing={2} columnSpacing={2} >
      <Grid item xs={12} md={6} sm={12}>
         <Card>
         <CardActionArea>
           <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/lizard.jpg"
            alt="react"
      
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards 1
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Grid>
      <Grid item xs={12} md={6} sm={6}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{ height: 140 }}
            image="/static/images/cards/lizard.jpg"
            
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards 2
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Grid>
      <Grid item xs={12} md={6} sm={6}>
         <Card>
         <CardActionArea>
           <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/lizard.jpg"
            alt="green iguana"
            
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards 3
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Grid>
      
      </Grid>
      
      </>  
      
      
      );
    }

   

       