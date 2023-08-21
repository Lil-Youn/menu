import LoginIcon from "@mui/icons-material/Login";
import { Box, Fab } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import { getXataClient } from "../xata";
import "./App.css";
import gifImage from "./prepping-up-dineout.gif";

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
      <Box
        sx={{
          width: "100%",
          height: "auto",
          zIndex: "9998",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          className="outerFrame"
          width="100%"
          height="200px"
          bgcolor="lightgray"
          position="relative"
        >
          <Box
            sx={{
              width: "100%",
              position: "relative",
              justifyContent: "center",
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
              <Typography variant="h4" color="white">
                THE
              </Typography>
              <Typography
                variant="h3"
                color="white"
                sx={{ borderBottom: "2px solid yellow" }}
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
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <Typography
                variant="h3"
                color="black"
                sx={{
                  flex: "1",
                  borderBottom: "2px solid yellow",
                  pb: "5px",
                  marginLeft: "30px",
                }}
              >
                Monday
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flex: "2",
                  alignItems: "flex-end",
                  pr: "20px",
                }}
              >
                <Typography variant="button" color="black">
                  Starter: {menu.monday_starter}
                </Typography>
                <Typography variant="button" color="black">
                  Main: {menu.monday_main}
                </Typography>
                <Typography variant="button" color="black">
                  Sweet: {menu.monday_sweet}
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
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <Typography
                variant="h3"
                color="black"
                sx={{
                  flex: "1",
                  borderBottom: "2px solid yellow",
                  pb: "5px",
                  marginLeft: "30px",
                }}
              >
                Tuesday
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flex: "2",
                  alignItems: "flex-end",
                  pr: "20px",
                }}
              >
                <Typography variant="button" color="black">
                  Starter: {menu.tuesday_starter}
                </Typography>
                <Typography variant="button" color="black">
                  Main: {menu.tuesday_main}
                </Typography>
                <Typography variant="button" color="black">
                  Sweet: {menu.tuesday_sweet}
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
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <Typography
                variant="h3"
                color="black"
                sx={{
                  flex: "1",
                  borderBottom: "2px solid yellow",
                  pb: "5px",
                  marginLeft: "30px",
                }}
              >
                Wednesday
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flex: "2",
                  alignItems: "flex-end",
                  pr: "20px",
                }}
              >
                <Typography variant="button" color="black">
                  Starter: {menu.wednesday_starter}
                </Typography>
                <Typography variant="button" color="black">
                  Main: {menu.wednesday_main}
                </Typography>
                <Typography variant="button" color="black">
                  Sweet: {menu.wednesday_sweet}
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
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <Typography
                variant="h3"
                color="black"
                sx={{
                  flex: "1",
                  borderBottom: "2px solid yellow",
                  pb: "5px",
                  marginLeft: "30px",
                }}
              >
                Thursday
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flex: "2",
                  alignItems: "flex-end",
                  pr: "20px",
                }}
              >
                <Typography variant="button" color="black">
                  Starter: {menu.thursday_starter}
                </Typography>
                <Typography variant="button" color="black">
                  Main: {menu.thursday_main}
                </Typography>
                <Typography variant="button" color="black">
                  Sweet: {menu.thursday_sweet}
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
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <Typography
                variant="h3"
                color="black"
                sx={{
                  flex: "1",
                  borderBottom: "2px solid yellow",
                  pb: "5px",
                  marginLeft: "30px",
                }}
              >
                Friday
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flex: "2",
                  alignItems: "flex-end",
                  pr: "20px",
                }}
              >
                <Typography variant="button" color="black">
                  Starter: {menu.friday_starter}
                </Typography>
                <Typography variant="button" color="black">
                  Main: {menu.friday_main}
                </Typography>
                <Typography variant="button" color="black">
                  Sweet: {menu.friday_sweet}
                </Typography>
              </Box>
            </Box>
          </>
        ))}
      </Box>
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
