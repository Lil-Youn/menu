import { Box, Fab } from "@mui/material";
import Typography from "@mui/material/Typography";
import "./App.css";
import LoginIcon from "@mui/icons-material/Login";
import { useEffect, useState } from "react";
import gifImage from "./prepping-up-dineout.gif";
import { NavLink } from "react-router-dom";

function App() {
  const [db, setDb] = useState({
    Monday: { starter: "", main: "", sweet: "" },
    Tuesday: { starter: "", main: "", sweet: "" },
    Wednesday: { starter: "", main: "", sweet: "" },
    Thursday: { starter: "", main: "", sweet: "" },
    Friday: { starter: "", main: "", sweet: "" },
  });

  useEffect(() => {
    const storedDb = localStorage.getItem("db");
    if (storedDb) {
      setDb(JSON.parse(storedDb));
    }
  }, []);
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
          width="550px"
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
        <Box
          sx={{
            marginTop: "15px",
            marginBottom: "15px",
            height: "200px",
            width: "550px",
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
              Starter: {db.Monday.starter}
            </Typography>
            <Typography variant="button" color="black">
              Main: {db.Monday.main}
            </Typography>
            <Typography variant="button" color="black">
              Sweet: {db.Monday.sweet}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: "15px",
            marginBottom: "15px",
            height: "200px",
            width: "550px",
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
              Starter: {db.Tuesday.starter}
            </Typography>
            <Typography variant="button" color="black">
              Main: {db.Tuesday.main}
            </Typography>
            <Typography variant="button" color="black">
              Sweet: {db.Tuesday.sweet}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "15px",
            marginBottom: "15px",
            height: "200px",
            width: "550px",
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
              Starter: {db.Wednesday.starter}
            </Typography>
            <Typography variant="button" color="black">
              Main: {db.Wednesday.main}
            </Typography>
            <Typography variant="button" color="black">
              Sweet: {db.Wednesday.sweet}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "15px",
            marginBottom: "15px",
            height: "200px",
            width: "550px",
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
              Starter: {db.Thursday.starter}
            </Typography>
            <Typography variant="button" color="black">
              Main: {db.Thursday.main}
            </Typography>
            <Typography variant="button" color="black">
              Sweet: {db.Thursday.sweet}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "15px",
            marginBottom: "15px",
            height: "200px",
            width: "550px",
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
              Starter: {db.Friday.starter}
            </Typography>
            <Typography variant="button" color="black">
              Main: {db.Friday.main}
            </Typography>
            <Typography variant="button" color="black">
              Sweet: {db.Friday.sweet}
            </Typography>
          </Box>
        </Box>
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
