import React, { useState } from "react";
import { Container } from "@mui/system";

import {
  Grid,
  Button,
  Box,
  TextField,
  useMediaQuery,
} from "@mui/material";
import "./navbar.css";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import Dropdown from "react-bootstrap/Dropdown";
import IconButton from "@mui/material/IconButton";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import logo from "../../assets/daraz.png";
import { useCart } from "react-use-cart";
import download from "../../assets/download.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSelector } from "react-redux";

const Navbar = ({getresult}) => {
  const items = useSelector((state)=>state.cart)
  const matches = useMediaQuery("(min-width:600px)");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const drawerWidth = 240;
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const {totalUniqueItems}=useCart()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuPosition, setMenuPosition] = React.useState(null);
  const [menuPosition1, setMenuPosition1] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open2 = Boolean(menuPosition);
  const handleRightClick = (event) => {
    setMenuPosition(event.currentTarget);
  };
  const handleItemClick = () => {
    setMenuPosition(null);
  };
  const open3 = Boolean(menuPosition1);
  const handleRightClick1 = (event) => {
    setMenuPosition1(event.currentTarget);
  };
  const handleItemClick1 = () => {
    setMenuPosition1(null);
  };
  function logout() {
    localStorage.clear();
    navigate("/login");
  }
  const searchHandle= async (event)=>{
  let key =event.target.value;
  if(key){

    let result = await fetch(`http://localhost:5000/api/products/search/${key}`)
    result = await result.json();
    console.log(result, "result ..........12")
    if(result){
    getresult(result);
    }
  }else{
    getresult();
  }
  }
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log(currentUser, "user........");
  return (
    <div>
      <AppBar sx={{ backgroundColor: "white" }} component="nav">
        <Container>
          <Toolbar sx={{ display: "flex", justifyContent: "" }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "",
              }}
              className="mobileLogo"
            >
              <Box m={{ xs: 1, sm: 1, md: 0 }}>
                <img src={logo} width={130} height={60} alt="" />
              </Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: "none" }, color: "black" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Container
              className="navbarDesktop"
              sx={{ p: 2, pl: 3 }}
              maxWidth="lg"
            >
              <Grid alignItems="center" container spacing={1}>
                <Grid item md={2}>
                  <Box sx={{ marginLeft: "-6rem" }}>
                    <img
                      src={logo}
                      width={200}
                      height={60}
                      alt=""
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onMouseEnter={handleClick}
                    />
                  </Box>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    sx={{
                      marginTop: "5rem",
                      marginLeft: matches ? "1rem" : "0",
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      Categories and Pets
                    </MenuItem>
                    <MenuItem
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onMouseEnter={handleRightClick}
                    >
                      Health and beauty
                    </MenuItem>
                    <MenuItem onClick={handleClose}>Mens Fashion</MenuItem>
                    <MenuItem onClick={handleClose}>
                      Categories and Pets
                    </MenuItem>
                    <MenuItem onClick={handleClose}>Health and beauty</MenuItem>
                    <MenuItem onClick={handleClose}>Mens Fashion</MenuItem>
                    <MenuItem onClick={handleClose}>Baby and Toys</MenuItem>
                    <MenuItem onClick={handleClose}>
                      Home and LifyStyle
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      Electronic Devices
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      Sports and Outdoor
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      Watches, bags and Jewellery
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      Electronic Devices
                    </MenuItem>
                  </Menu>
                  <Menu
                    id="basic-menu"
                    anchorEl={menuPosition}
                    open={open2}
                    anchorOrigin={{
                      vertical: "center",
                      horizontal: "right",
                    }}
                    onClose={() => {
                      handleRightClick();
                      handleClose();
                    }}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleItemClick}>
                      Categories and Pets
                    </MenuItem>
                    <MenuItem onClick={handleItemClick}>
                      Health and beauty
                    </MenuItem>
                    <MenuItem
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onMouseEnter={handleRightClick1}
                    >
                      Mens Fashion
                    </MenuItem>
                  </Menu>
                  <Menu
                    id="basic-menu"
                    anchorEl={menuPosition1}
                    open={open3}
                    anchorOrigin={{
                      vertical: "center",
                      horizontal: "right",
                    }}
                    onClose={() => {
                      handleRightClick1();
                      handleClose();
                      handleRightClick();
                    }}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onMouseLeave={handleItemClick1}>
                      Categories and Pets
                    </MenuItem>
                    <MenuItem onMouseLeave={handleItemClick1}>
                      Health and beauty
                    </MenuItem>
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
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="search in daraz"
                    onChange={searchHandle}
                    sx={{ width: 900, marginLeft: "4rem" }}
                  />
                  <Box
                    sx={{
                      backgroundColor: "#F57208",
                      width: "7rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <SearchIcon />
                  </Box>
                </Grid>
                <Grid item xs={1}>
                <Link className="navLink" to="/cart">
                  <ShoppingCartSharpIcon
                    sx={{
                      color: "#000000",
                      fontSize: "3rem",
                      marginLeft: "1rem",
                    }}
                  />
                  </Link>
                  <Box className='item__count'>
                  <span>{totalUniqueItems}</span>
                </Box>
                  {/* <span style={{color:"black"}}>Cart Items:{items.length}</span> */}
                </Grid>
                <Grid item md={1}>
                  <img src={download} width={200} height={50} alt="" />
                </Grid>
                <Grid item md={2}>
                  <Dropdown>
                    {currentUser ? (
                      <>
                        <Dropdown.Toggle
                          id="dropdown-basic"
                          style={{
                            marginLeft: "8rem",
                            backgroundColor: "#f57224",
                            fontSize: "1.2rem",
                          }}
                        >
                          {currentUser?.data?.name}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                      </>
                    ) : (
                      <Dropdown.Item>Login</Dropdown.Item>
                    )}
                  </Dropdown>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav" sx={{ paddingBottom: "4rem" }}>
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
              backgroundColor: "white",
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
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box mb={2}>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      sx={{ width: 100 }}
                    />
                    <SearchIcon
                      sx={{
                        backgroundColor: "#F57208",
                        width: "2rem",
                        height: "3rem",
                        borderRadius: "50%",
                        position: "absolute",
                      }}
                    />
                  </Box>
                  <ShoppingCartSharpIcon
                    sx={{
                      color: "#000000",
                      fontSize: "2rem",
                      marginBottom: "1rem",
                    }}
                    // <Link to='/cart'></Link>
                  />

                  <Dropdown>
                    {currentUser ? (
                      <>
                        {" "}
                        <Dropdown.Toggle
                          id="dropdown-basic"
                          style={{
                            fontFamily: "Times New Roman",
                            padding: "10px",
                            backgroundColor: "#f57224",
                            fontSize: "1.3rem",
                            borderRadius: "50px",
                          }}
                        >
                          {currentUser?.data?.name}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            href="/login"
                            onClick={logout}
                            style={{
                              backgroundColor: "#f57224",
                              textDecoration: "none",
                              color: "black",
                              fontFamily: "Times New Roman",
                              fontSize: "16px",
                              display: "block",
                              borderRadius: "10px",
                              padding: "10px",
                            }}
                          >
                            Logout
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </>
                    ) : (
                      <Dropdown.Item
                        href="/login"
                        style={{
                          backgroundColor: "#f57224",
                          textDecoration: "none",
                          color: "black",
                          fontFamily: "Times New Roman",
                          fontSize: "16px",
                          display: "block",
                          borderRadius: "10px",
                          padding: "10px",
                        }}
                      >
                        Login
                      </Dropdown.Item>
                    )}
                  </Dropdown>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Drawer>
      </Box>
    </div>
  );
};

export default Navbar;
