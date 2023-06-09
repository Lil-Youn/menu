import "./App.css";
import { Box, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";

import gifImage from "./prepping-up-dineout.gif";

function App() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "black",
          width: "40vw",
          height: "auto",
          zIndex: "9998",
        }}
      >
        <Box
          className="outerFrame"
          width="60vw"
          height="100%"
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
              <Typography variant="h3" color="white">
                WEEKLY MENU
              </Typography>
              <Divider
                sx={{
                  bgcolor: "secondary.light",
                  borderBottomWidth: "3px",
                  width: "100%",
                  zIndex: 9999,
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              />
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
        }}
      >
        <Box
          sx={{
            marginTop: "15px",
            marginBottom: "15px",
            height: "200px",
            width: "550px",
            bgcolor: "whitesmoke",
            alignSelf: "flex-start",
            left: "30%",
          }}
        >
          <Typography color="black">Monday</Typography>
        </Box>
        <Box
          sx={{
            marginBottom: "15px",
            height: "200px",
            width: "550px",
            bgcolor: "whitesmoke",
            alignSelf: "flex-end",
            right: "30%",
          }}
        >
          <Typography color="black">Tuesday</Typography>
        </Box>
        <Box
          sx={{
            marginBottom: "15px",
            height: "200px",
            width: "550px",
            bgcolor: "whitesmoke",
            alignSelf: "flex-start",
          }}
        >
          <Typography color="black">Wednesday</Typography>
        </Box>
        <Box
          sx={{
            marginBottom: "15px",
            height: "200px",
            width: "550px",
            bgcolor: "whitesmoke",
            alignSelf: "flex-end",
          }}
        >
          <Typography color="black">Thursday</Typography>
        </Box>
        <Box
          sx={{
            marginBottom: "15px",
            height: "200px",
            width: "550px",
            bgcolor: "whitesmoke",
            alignSelf: "flex-start",
          }}
        >
          <Typography color="black">Friday</Typography>
        </Box>
      </Box>
    </>
  );
}

export default App;
