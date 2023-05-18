import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography"
import { Container } from '@mui/material'

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth='xl'>
        <Toolbar>
          <Typography variant="h6" component="p" sx={{ flexGrow: 1 }}>
            React Mortgage Calculator
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
