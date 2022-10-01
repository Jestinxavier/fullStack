import React from "react";
import { Grid, Container, AppBar, Typography, Grow,styled } from "@mui/material";
import meories from "./images/memories.png";
import Posts from './components/Posts/Posts'
import Forms from './components/form/Form'
// import useStyle from './styles'

function App() {
  // const classess = useStyle()
  return (
    <Container maxWidth="lg">
      <AppBar  sx={{display:"flex",justifyContent:"center",flexDirection: "row", alignItems: "center",borderRadius:4}} position="static" color="inherit">
        <Typography varient="h2" sx={{fontSize:30,marginRight:10,color: "#12e7f1",}} align="center">
          Meories
        </Typography>
        <img  src={meories} alt="memories" sx={{marginLeft:10}} height={60} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItem="streatch"
            spacing="3"
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Forms />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
