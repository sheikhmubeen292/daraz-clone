import React from "react";
import { Typography, Container, Box, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  spanstyle: { color: "red", marginTop: "10px" },
  typo: { padding: "1rem" },
}));
function Loginfoam() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const classes = useStyles();
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  // console.log(currentUser.user,"user........//")
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    const user = { email, password };
    console.log(user);
    // dispatch(loginUser(user));
    try {
      const result = await axios.post(`http://localhost:5000/api/users/login`, {
        email,
        password,
      });
      if (result.data) {
        alert("User Login Successfully!");
        let localdata = localStorage.setItem(
          "currentUser",
          JSON.stringify(result.data)
        );
        navigate("/cart");
      }
    } catch (err) {
      console.log(err, "err");
      setError(true);
    }
  };
  return (
    <React.Fragment>
      <Box
        width="100vw"
        height="70vh"
        backgroundColor="#EFF0F5"
        paddingTop="50px"
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Typography
              sx={{
                fontSize: "25px",
              }}
            >
              Welcome to Daraz! Please login.
            </Typography>

            <Typography
              sx={{
                fontSize: "15px",
                opacity: "0.5",
              }}
            >
              New member?
              <span
                sx={{
                  typography: "body1",
                  "& > :not(style) + :not(style)": {
                    ml: 2,
                  },
                }}
                onClick={ProgressEvent}
              >
                <Link lassName={classes.typo} to="/register">
                  Register
                </Link>
              </span>{" "}
              here.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "65%",
                height: "300px",
                backgroundColor: "#FFFFFF",
                marginTop: "30px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "space-between",
                }}
              >
                <Box
                  sx={{
                    m: 5,
                  }}
                >
                  <Typography sx={{ fontSize: "14px" }}>
                    Phone Number or Email*
                  </Typography>
                  <TextField
                    sx={{ width: "350px" }}
                    placeholder="Enter email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    required
                  />
                  <br></br>
                  <Typography sx={{ fontSize: "14px" }}>Password*</Typography>
                  <TextField
                    placeholder="Enter password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    required
                  />

                  <Typography
                    sx={{
                      fontSize: "15px",
                      marginTop: "10px",
                      marginLeft: "60%",
                    }}
                  >
                    <span
                      sx={{
                        typography: "body1",
                        "& > :not(style) + :not(style)": {
                          // ml: 2,
                        },
                      }}
                      onClick={ProgressEvent}
                    >
                      <Link href="#">Forget Password ?</Link>
                    </span>
                  </Typography>
                </Box>

                <Box
                  sx={{
                    m: 4,
                  }}
                >
                  <Box
                    sx={{
                      "& button": { m: 2 },
                      // width: "400px",
                      fontSize: "24px",
                    }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      onClick={handleSubmit}
                      sx={{
                        backgroundColor: "#F57224",
                        width: "200px",
                      }}
                    >
                      login
                    </Button>
                  </Box>
                  {error && (
                    <Box component="span" className={classes.spanstyle}>
                      Email or Password is Incorrect!
                    </Box>
                  )}

                  <Box sx={{ "& button": { m: 2 }, fontSize: "24px" }}>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        backgroundColor: "#3B5998",
                        width: "200px",
                      }}
                    >
                      FaceBook
                    </Button>
                  </Box>

                  <Box sx={{ "& button": { m: 2 }, fontSize: "24px" }}>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        backgroundColor: "#D34836",
                        width: "200px",
                      }}
                    >
                      Google
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}
export default Loginfoam;
