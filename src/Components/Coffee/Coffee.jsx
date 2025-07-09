import React from "react"
import products from "../../assets/Coffee.js"
import { Container, Card, CardActions, CardContent, CardMedia, Button, Box, Typography} from "@mui/material"
import Grid from "@mui/material/Grid";

const Coffee = () => {
    return (
       <Box sx= {{my: '5rem'}} id="Coffee">
           <Typography variant="h5" sx={{textAlign:'center'}}>Featured coffees</Typography>
            <Grid container spacing={3} sx={{Padding:3, justifyContent: 'center'}}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.title}>
                        <Card sx={{ maxWidth: 345, textAlign: "center", padding: 2}}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={product.image}
                                alt={product.title}
                            />
                            <CardContent>
                                <Typography variant="h6">{product.title}</Typography>

                                <Typography variant="body2" color="text.secondary">
                                    {product.description}
                                </Typography>

                                <Typography variant="h6" color="primary" sx={{marginY: 1}}>
                                    ${product.price.toFixed(2)}
                                </Typography>

                                <Button variant='contained' color="secondary">
                                    Buy
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
       </Box> 
    )
}

export default Coffee