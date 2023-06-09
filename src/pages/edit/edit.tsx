import { Box, Button, TextField, Typography } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";

function Edit() {
  return (
    <>
      <Box>
        <Typography
          sx={{ display: "flex", justifyItems: "flex-start" }}
          variant="button"
        >
          Monday
        </Typography>
        <div
          style={{
            padding: "10px",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid gray",
            marginBottom: "10px",
          }}
        >
          <TextField multiline rows={2} label="Starter" />
          <TextField multiline rows={2} label="Main" />
          <TextField multiline rows={2} label="Sweet" />
        </div>
        <Typography
          sx={{ display: "flex", justifyItems: "flex-start" }}
          variant="button"
        >
          Tuesday
        </Typography>
        <div
          style={{
            padding: "10px",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid gray",
            marginBottom: "10px",
          }}
        >
          <TextField multiline rows={2} label="Starter" />
          <TextField multiline rows={2} label="Main" />
          <TextField multiline rows={2} label="Sweet" />
        </div>
        <Typography
          sx={{ display: "flex", justifyItems: "flex-start" }}
          variant="button"
        >
          Wednesday
        </Typography>
        <div
          style={{
            padding: "10px",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid gray",
            marginBottom: "10px",
          }}
        >
          <TextField multiline rows={2} label="Starter" />
          <TextField multiline rows={2} label="Main" />
          <TextField multiline rows={2} label="Sweet" />
        </div>
        <Typography
          sx={{ display: "flex", justifyItems: "flex-start" }}
          variant="button"
        >
          Thursday
        </Typography>
        <div
          style={{
            padding: "10px",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid gray",
            marginBottom: "10px",
          }}
        >
          <TextField multiline rows={2} label="Starter" />
          <TextField multiline rows={2} label="Main" />
          <TextField multiline rows={2} label="Sweet" />
        </div>
        <Typography
          sx={{ display: "flex", justifyItems: "flex-start" }}
          variant="button"
        >
          Friday
        </Typography>
        <div
          style={{
            padding: "10px",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid gray",
            marginBottom: "10px",
          }}
        >
          <TextField multiline rows={2} label="Starter" />
          <TextField multiline rows={2} label="Main" />
          <TextField multiline rows={2} label="Sweet" />
        </div>
      </Box>
      <Button
        sx={{ width: 215, marginTop: 2, borderRadius: 5 }}
        startIcon={<IosShareIcon />}
        variant="contained"
      >
        Submit
      </Button>
    </>
  );
}
export default Edit;
