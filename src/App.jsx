import { useState } from 'react'
import Nav from './components/Nav'
import Content from './components/Content'
import Contentmd from './components/Contentmd'
import Contentsm from './components/Contentsm'
import Sidebar from './components/Sidebar'
import "./App.css"
import Rightbar from './components/Rightbar'
import Box from '@mui/material/Box'
import { Container } from '@mui/system'
import Grid from '@mui/material/Grid';
import { useTheme } from '@emotion/react'
import { useMediaQuery } from '@mui/material'
import {styled} from '@mui/material/styles'

function App() {
  const theme = useTheme();
  const matchesmd = useMediaQuery('(min-width:900px)');
  const matchessm = useMediaQuery('(min-width:600px)');
  return(
    
      <>
        <Nav />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3}  md={3}> 
            <Sidebar/>
          </Grid>
          <Grid item xs={12} md={6}> 
            {/* {!matchessm && <Contentsm /> || !matchesmd && <Contentmd/> || <Content/>} */}
            <Content />
            
          </Grid>
          <Grid item xs={12} md={3}> 
            <Rightbar />
          </Grid>
          </Grid>
        
      </Container>
      
    
    </>
  )
}

export default App
