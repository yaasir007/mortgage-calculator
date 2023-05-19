import { Container } from "@mui/material"
import Grid from "@mui/material/Grid"

import Navbar from "./components/Navbar"
import SliderSelect from "./components/SliderSelect"
import TenureSelect from "./components/TenureSelect"
import Result from "./components/Result"

function App() {
  return (
    <div className="app">
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 5 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <SliderSelect />
            <TenureSelect />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App
