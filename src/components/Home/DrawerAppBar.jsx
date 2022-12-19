import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../static/img/logoMem.png";
import { ButtonGroup, Grid, Link } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import LeftCarousel from "./LeftCarousel";
import { maxWidth } from "@mui/system";

import { useSelector } from "react-redux";

const drawerWidth = 240;
const navItems = ["Publicaciones", "Personajes", "Nosotros"];

function DrawerAppBar(props) {
  const { isLogged } = useSelector((state) => state.loggedSlice);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Memorex
      </Typography>
      <Divider />

      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box bgcolor="white" sx={{ display: "flex" }}>
      <AppBar component="nav"  color="default">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <a href="http://localhost:5000/">
            <img height="45px" src={logo} alt="Volver a página principal" />
          </a>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          ></Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "black" }}>
                {item}
              </Button>
            ))}
          </Box>
          {!isLogged && (
            <Box>
              <ButtonGroup
                color="inherit"
                aria-label="medium secondary button group"
              >
                <Button>
                  <Link href="/login" underline="none">
                    <LoginIcon color="action"/>
                  </Link>
                </Button>
                <Button>
                  <Link href="/register" underline="none">
                    <PersonIcon color="action"/>
                  </Link>
                </Button>
              </ButtonGroup>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box m={0} p={0} width={1400} component="main">
        <Toolbar />
        <Grid
          container
          sx={{ bgcolor: "text.primary", m: 0,p:0 }}
          alignContent="center"
          
        >
          <Grid item xs={8} padding={4} alignContent="center">
            <Grid alignItems="center" item xs={12}  >
              <LeftCarousel />
            </Grid>
          </Grid>

          <Grid container color="white" item xs={3} alignContent="center">
            <Typography color="white" variant="body2" gutterBottom>
              <Typography color="white" variant="h3" gutterBottom>
                ¡Bienvenido!
              </Typography>
              Esta es una página donde puedes ver acontecimientos relacionados a
              políticos o personajes públicos. Estas publicaciones son
              realizadas por la ciudadanía y tú puedes ser partícipe de ello.
              Memorex tiene como objetivo que el ciudadano no olvide. Nace ante
              la necesidad de recordar todo lo relacionado a personajes
              vinculados a nuestra política.
            </Typography>
            {!isLogged && (
              <Grid item xs={12} alignContent="center">
                <ButtonGroup
                  color="inherit"
                  aria-label="medium secondary button group"
                >
                  <Button>
                    <LoginIcon />
                  </Button>
                  <Button>
                    <PersonIcon />
                  </Button>
                </ButtonGroup>
              </Grid>
            )}
          </Grid>
        </Grid>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus
          quibusdam, aliquam dolore excepturi quae. Distinctio enim at eligendi
          perferendis in cum quibusdam sed quae, accusantium et aperiam? Quod
          itaque exercitationem, at ab sequi qui modi delectus quia corrupti
          alias distinctio nostrum. Minima ex dolor modi inventore sapiente
          necessitatibus aliquam fuga et. Sed numquam quibusdam at officia
          sapiente porro maxime corrupti perspiciatis asperiores, exercitationem
          eius nostrum consequuntur iure aliquam itaque, assumenda et! Quibusdam
          temporibus beatae doloremque voluptatum doloribus
        </Typography>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
