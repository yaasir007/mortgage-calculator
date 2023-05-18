import { Container } from "@mui/material";

import Navbar from "./components/Navbar";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import Result from "./components/Result";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Container maxWidth="md" sx={{mt: 5}}>
        <SliderSelect />
        <TenureSelect />
        <Result />
      </Container>
    </div>
  );
}

export default App;
