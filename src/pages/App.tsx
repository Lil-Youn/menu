import LoginIcon from "@mui/icons-material/Login";
import { Box, Fab } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import { getXataClient } from "../xata";
import "./App.css";
import gifImage from "./chefs-table.gif";

function App() {
  const {
    data: menu = [],
    isLoading,
    isError,
  } = useQuery("menu", async () => {
    const xata = getXataClient();
    return xata.db["menu"].getAll();
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading posts</p>;
  }
  return (
    <>
      <div className="app-wrapper" style={{ backgroundColor: "gray" }}>
        <Box
          sx={{
            width: "100%",
            minWidth: "60vw",
            height: "auto",
            position: "relative",
            zIndex: "9998",
            display: "flex",
            justifyContent: "center",
            bgcolor: "gray",
          }}
        >
          <Box
            className="outerFrame"
            width="100%"
            height="auto"
            bgcolor="gray"
            position="relative"
          >
            <Box
              sx={{
                width: "100%",
                position: "relative",
                justifyContent: "center",
                bgcolor: "gray",
              }}
            >
              <img
                width="100%"
                height="100%"
                src={gifImage}
                alt="GIF"
                style={{
                  filter: "grayscale(100%)",
                  opacity: "0.8",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 9999,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h4"
                  color="white"
                  sx={{
                    fontSize: {
                      xs: "20px",
                      md: "65px",
                    },
                  }}
                >
                  THE
                </Typography>
                <Typography
                  variant="h3"
                  color="white"
                  sx={{
                    borderBottom: "2px solid yellow",
                    fontSize: {
                      xs: "30px",
                      md: "85px",
                    },
                  }}
                >
                  WEEKLY MENU
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          className="weekdays-container"
          sx={{
            position: "relative",
            zIndex: 9999,
            padding: "0px",
            bgcolor: "grey",
          }}
        >
          {menu.map((menu) => (
            <>
              <Box
                sx={{
                  marginTop: "15px",
                  marginBottom: "15px",
                  height: "200px",
                  width: "100%",
                  bgcolor: "whitesmoke",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  boxShadow:
                    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;",
                  marginLeft: { xs: "0px", md: "100px" },
                }}
              >
                <Typography
                  variant="h3"
                  color="black"
                  sx={{
                    flex: "1",
                    borderBottom: "2px solid yellow",
                    pb: "5px",
                    marginLeft: {
                      xs: "auto",
                      md: "20px",
                    },
                    fontSize: {
                      xs: "26px",
                      md: "60px",
                    },
                    transform: {
                      xs: "rotate(-90deg)",
                      md: "none",
                    },
                    transformOrigin: "center-left",
                  }}
                >
                  Monday
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flex: "2",
                    alignItems: {
                      xs: "center",
                      md: "center",
                    },
                    paddingRight: {
                      xs: "auto",
                      md: "20px", // Set your desired value for desktop
                    },
                  }}
                >
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 8, md: 12 }, color: "darkgray" }}
                  >
                    Starter:
                  </Typography>
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 10, md: 20 }, color: "black" }}
                  >
                    {menu.monday_starter}
                  </Typography>
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 8, md: 12 }, color: "darkgray" }}
                  >
                    Main:
                  </Typography>
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 10, md: 20 }, color: "black" }}
                  >
                    {menu.monday_main}
                  </Typography>
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 8, md: 12 }, color: "darkgray" }}
                  >
                    Sweet:
                  </Typography>
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 10, md: 20 }, color: "black" }}
                  >
                    {menu.monday_sweet}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: "15px",
                  marginBottom: "15px",
                  height: "200px",
                  width: "100%",
                  bgcolor: "whitesmoke",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  boxShadow:
                    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;",
                  marginLeft: { xs: "0px", md: "-100px" },
                }}
              >
                <Typography
                  variant="h3"
                  color="black"
                  sx={{
                    flex: "1",
                    borderBottom: "2px solid yellow",
                    pb: "5px",
                    marginLeft: {
                      xs: "auto",
                      md: "20px",
                    },
                    fontSize: {
                      xs: "26px",
                      md: "60px",
                    },
                    transform: {
                      xs: "rotate(-90deg)",
                      md: "none",
                    },
                    transformOrigin: "center-left",
                  }}
                >
                  Tuesday
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flex: "2",
                    alignItems: {
                      xs: "center",
                      md: "center",
                    },
                    paddingRight: {
                      xs: "auto",
                      md: "20px", // Set your desired value for desktop
                    },
                  }}
                >
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 8, md: 12 }, color: "darkgray" }}
                  >
                    Starter:
                  </Typography>
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 10, md: 20 }, color: "black" }}
                  >
                    {menu.tuesday_starter}
                  </Typography>
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 8, md: 12 }, color: "darkgray" }}
                  >
                    Main:
                  </Typography>
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 10, md: 20 }, color: "black" }}
                  >
                    {menu.tuesday_main}
                  </Typography>
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 8, md: 12 }, color: "darkgray" }}
                  >
                    Sweet:
                  </Typography>
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 10, md: 20 }, color: "black" }}
                  >
                    {menu.tuesday_sweet}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: "15px",
                  marginBottom: "15px",
                  height: "200px",
                  width: "100%",
                  bgcolor: "whitesmoke",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  boxShadow:
                    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;",
                  marginLeft: { xs: "0px", md: "100px" },
                }}
              >
                <Typography
                  variant="h3"
                  color="black"
                  sx={{
                    flex: "1",
                    borderBottom: "2px solid yellow",
                    pb: "5px",
                    marginLeft: {
                      xs: "auto",
                      md: "20px",
                    },
                    fontSize: {
                      xs: "26px",
                      md: "60px",
                    },
                    transform: {
                      xs: "rotate(-90deg)",
                      md: "none",
                    },
                    transformOrigin: "center-left",
                  }}
                >
                  Wednesday
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flex: "2",
                    alignItems: {
                      xs: "center",
                      md: "center",
                    },
                    paddingRight: {
                      xs: "auto",
                      md: "20px", // Set your desired value for desktop
                    },
                  }}
                >
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 8, md: 12 }, color: "darkgray" }}
                  >
                    Starter:
                  </Typography>
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 10, md: 20 }, color: "black" }}
                  >
                    {menu.wednesday_starter}
                  </Typography>
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 8, md: 12 }, color: "darkgray" }}
                  >
                    Main:
                  </Typography>
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 10, md: 20 }, color: "black" }}
                  >
                    {menu.wednesday_main}
                  </Typography>
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 8, md: 12 }, color: "darkgray" }}
                  >
                    Sweet:
                  </Typography>
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 10, md: 20 }, color: "black" }}
                  >
                    {menu.wednesday_sweet}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: "15px",
                  marginBottom: "15px",
                  height: "200px",
                  width: "100%",
                  bgcolor: "whitesmoke",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  boxShadow:
                    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;",
                  marginLeft: { xs: "0px", md: "-100px" },
                }}
              >
                <Typography
                  variant="h3"
                  color="black"
                  sx={{
                    flex: "1",
                    borderBottom: "2px solid yellow",
                    pb: "5px",
                    marginLeft: {
                      xs: "auto",
                      md: "20px",
                    },
                    fontSize: {
                      xs: "26px",
                      md: "60px",
                    },
                    transform: {
                      xs: "rotate(-90deg)",
                      md: "none",
                    },
                    transformOrigin: "center-left",
                  }}
                >
                  Thursday
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flex: "2",
                    alignItems: {
                      xs: "center",
                      md: "center",
                    },
                    paddingRight: {
                      xs: "auto",
                      md: "20px", // Set your desired value for desktop
                    },
                  }}
                >
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 8, md: 12 }, color: "darkgray" }}
                  >
                    Starter:
                  </Typography>
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 10, md: 20 }, color: "black" }}
                  >
                    {menu.thursday_starter}
                  </Typography>
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 8, md: 12 }, color: "darkgray" }}
                  >
                    Main:
                  </Typography>
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 10, md: 20 }, color: "black" }}
                  >
                    {menu.thursday_main}
                  </Typography>
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 8, md: 12 }, color: "darkgray" }}
                  >
                    Sweet:
                  </Typography>
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 10, md: 20 }, color: "black" }}
                  >
                    {menu.thursday_sweet}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: "15px",
                  marginBottom: "15px",
                  height: "200px",
                  width: "100%",
                  bgcolor: "whitesmoke",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  boxShadow:
                    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;",
                  marginLeft: { xs: "0px", md: "100px" },
                }}
              >
                <Typography
                  variant="h3"
                  color="black"
                  sx={{
                    flex: "1",
                    borderBottom: "2px solid yellow",
                    pb: "5px",
                    marginLeft: {
                      xs: "auto",
                      md: "20px",
                    },
                    fontSize: {
                      xs: "26px",
                      md: "60px",
                    },
                    transform: {
                      xs: "rotate(-90deg)",
                      md: "none",
                    },
                    transformOrigin: "center-left",
                  }}
                >
                  Friday
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flex: "2",
                    alignItems: {
                      xs: "center",
                      md: "center",
                    },
                    paddingRight: {
                      xs: "auto",
                      md: "20px", // Set your desired value for desktop
                    },
                  }}
                >
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 8, md: 12 }, color: "darkgray" }}
                  >
                    Starter
                  </Typography>
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 10, md: 20 }, color: "black" }}
                  >
                    {menu.friday_starter}
                  </Typography>
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 8, md: 12 }, color: "darkgray" }}
                  >
                    Main:
                  </Typography>
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 10, md: 20 }, color: "black" }}
                  >
                    {menu.friday_main}
                  </Typography>
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 8, md: 12 }, color: "darkgray" }}
                  >
                    Sweet:
                  </Typography>
                  <Typography
                    variant="button"
                    sx={{ fontSize: { xs: 10, md: 20 }, color: "black" }}
                  >
                    {menu.friday_sweet}
                  </Typography>
                </Box>
              </Box>
            </>
          ))}
        </Box>
      </div>
      <NavLink to="/login">
        <Fab color="primary" variant="extended" size="medium">
          <LoginIcon />
          Back to Adminpanel
        </Fab>
      </NavLink>
    </>
  );
}

export default App;
