import React from "react";
import { Container } from "@mui/system";
import { Grid,ListItemButton, Button, Box, TextField } from "@mui/material";
// import NestedMenuItem from "material-ui-nested-menu-item";
import "./navbar.css";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import logo from '../../assets/daraz.png';
import download from '../../assets/download.png'
import { grey } from "@mui/material/colors";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const drawerWidth = 240;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [menuPosition, setMenuPosition] = React.useState(null)
  // const [MensFashion, setMensFashion] = React.useState('');

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const handleRightClick =(MouseEvent)=>{
  //        setMenuPosition(null)
  // }
  // const handleItemClick=()=>{
  //   setMenuPosition(null)
  // }
  // const handleChange = (event) => {
  //   setMensFashion(event.target.value);
  // };
  return (
    <div>
      <AppBar sx={{ backgroundColor: "transparent" }} component="nav">
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
            className="mobileLogo"
          >
            <Box m={{ xs: 1, sm: 1, md: 0 }}>
              <img src={logo} width={60} height={60} alt="" />
            </Box>
            <TextField id="outlined-basic" variant="outlined" placeholder="search in daraz" sx={{ width: 100, marginTop: "1rem", backgroundColor: grey }} />
            <Box sx={{ backgroundColor: "#F57208", width: "1rem", height: "3.2rem", marginTop: "1.3rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <SearchIcon />
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Container
            className="navbarDesktop"
            sx={{ p: 1, pl: 3, }}
            maxWidth="lg"
          >
            <Grid alignItems="center" container spacing={3}>
              <Grid item md={2} >
                <img src={logo} width={200} height={60} alt="" aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onMouseEnter={handleClick} />
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onmousel={handleClose}>Categories and Pets</MenuItem>
                  <MenuItem onClick={handleClose}>Health and beauty</MenuItem>
                  <MenuItem onClick={handleClose}>Mens Fashion</MenuItem>
                  <MenuItem onClick={handleClose}>Categories and Pets</MenuItem>
                  <MenuItem onClick={handleClose}>Health and beauty</MenuItem>
                  <MenuItem onClick={handleClose}>Mens Fashion</MenuItem>
                  {/* <Select labelId="demo-simple-select-label"id="demo-simple-select"
                    value={MensFashion}
                    label="Mens Fashion"
                    onChange={handleChange}
                    placeholder="ahsan"
                    sx={{width:"100%", }}
                  >
                    <MenuItem onClick={handleClose}>Mens Fashion</MenuItem>
                    <MenuItem onClick={handleClose}>Baby and Toys</MenuItem>
                    <MenuItem onClick={handleClose}>Home and LifyStyle</MenuItem>
                    <MenuItem onClick={handleClose}>Electronic Devices</MenuItem>
                    <MenuItem onClick={handleClose}>Sports and Outdoor</MenuItem>
                  </Select> */}
                  {/* <NestedMenuItem label="Mens Fashion" parentMenuOpen={!!menuPosition} onClick={handleItemClick}>
                  <MenuItem onClick={handleClose}>Mens Fashion</MenuItem>
                    <MenuItem onClick={handleClose}>Electronic Devices</MenuItem>
                    <MenuItem onClick={handleClose}>Sports and Outdoor</MenuItem>

                  </NestedMenuItem> */}
                  <MenuItem onClick={handleClose}>Mens Fashion</MenuItem>
                  <MenuItem onClick={handleClose}>Baby and Toys</MenuItem>
                  <MenuItem onClick={handleClose}>Home and LifyStyle</MenuItem>
                  <MenuItem onClick={handleClose}>Electronic Devices</MenuItem>
                  <MenuItem onClick={handleClose}>Sports and Outdoor</MenuItem>
                  <MenuItem onClick={handleClose}>Watches, bags and Jewellery</MenuItem>
                  <MenuItem onClick={handleClose}>Electronic Devices</MenuItem>
                </Menu>
              </Grid>
              <Grid
                container
                wrap="nowrap"
                direction="row"
                item
                sx={{
                  fontFamily: "Sansation",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "22px",
                  color: "#FFFFFF",

                }}
                xs={6}
              >
                <TextField id="outlined-basic" variant="outlined" placeholder="search in daraz" sx={{ width: 900, marginLeft: "4rem" }} />
                <Box sx={{ backgroundColor: "#F57208", width: "7rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <SearchIcon />
                </Box>

              </Grid>
              <Grid item xs={2} sx={{ color: "#000000", width: "2rem", }}>
                <ShoppingCartSharpIcon />
              </Grid>
              <Grid item md={2} >
                <img src={download} width={300} height={60} alt="" />
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ paddingBottom: "7rem" }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "50%",
              backgroundColor: "#1D1D1D",
            },
          }}
        >
          <Container sx={{ p: 1, pl: { xs: 3, sm: 10 } }} maxWidth="lg">
            <Grid alignItems="center">
              <Grid
                alignItems={"center"}
                item
                xs={2}
                sx={{ mt: 10, color: "white" }}
              >

                <ListItemButton component="a" href="#simple-list">
                  <TextField id="outlined-basic" variant="outlined" sx={{ width: 400, background: "#ffffff" }} />
                  <SearchIcon />
                </ListItemButton>
                <Button
                  sx={{
                    background:
                      "linear-gradient(95.79deg, #FF8B36 5.78%, #8F01FF 57.64%, #01E1FF 104.67%)",
                    fontFamily: "Sansation",
                    fontWeight: 600,
                    fontSize: "12px",
                    color: "#FFFFFF",
                    textTransform: "none",
                    width: 129,
                    height: 38,
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "transparent",
                      width: 3,
                      height: 58,
                      transform: "rotate(50deg)",
                      ml: -2,
                      mt: -3,
                    }}
                  ></Box>
                  <Box sx={{ ml: 2 }}><img src={download} width={150} height={60} alt="" />
                  </Box>
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Drawer>
      </Box>
    </div>
  );
};

export default Navbar;
