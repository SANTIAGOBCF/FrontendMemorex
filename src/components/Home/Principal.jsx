import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ButtonGroup, Grid } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import LeftCarousel from "./LeftCarousel";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Principal = () => {
  const { token } = useSelector((state) => state.authSlice);
  return (
    <Box m={0} p={0} width={"100%"} component="main">
      <Toolbar />
      <Grid
        container
        sx={{ bgcolor: "text.primary", m: 0, p: 0 }}
        alignContent="center"
      >
        <Grid item xs={8} padding={4} alignContent="center">
          <Grid alignItems="center" item xs={12}>
            <LeftCarousel />
          </Grid>
        </Grid>

        <Grid container color="white" item xs={3} alignContent="center">
          <Typography color="white" variant="body2" gutterBottom>
            <Typography color="white" variant="h3" gutterBottom>
              ¡Bienvenido!
            </Typography>
            Esta es una página donde puedes ver acontecimientos relacionados a
            políticos o personajes públicos. Estas publicaciones son realizadas
            por la ciudadanía y tú puedes ser partícipe de ello. Memorex tiene
            como objetivo que el ciudadano no olvide. Nace ante la necesidad de
            recordar todo lo relacionado a personajes vinculados a nuestra
            política.
          </Typography>

          <Grid item xs={12} alignContent="center">
            <ButtonGroup
              color="inherit"
              aria-label="medium secondary button group"
            >
              {!token && (
                <>
                  <Link to="login" className="text-white">
                    <Button>
                      <LoginIcon />
                    </Button>
                  </Link>
                  <Link to="register" className="text-white">
                    <Button>
                      <PersonIcon />
                    </Button>
                  </Link>
                </>
              )}
            </ButtonGroup>
          </Grid>
        </Grid>
      </Grid>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
        fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
        aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis
        in cum quibusdam sed quae, accusantium et aperiam? Quod itaque
        exercitationem, at ab sequi qui modi delectus quia corrupti alias
        distinctio nostrum. Minima ex dolor modi inventore sapiente
        necessitatibus aliquam fuga et. Sed numquam quibusdam at officia
        sapiente porro maxime corrupti perspiciatis asperiores, exercitationem
        eius nostrum consequuntur iure aliquam itaque, assumenda et! Quibusdam
        temporibus beatae doloremque voluptatum doloribus
      </Typography>
      
      
    </Box>
  );
};

export default Principal;
