import { Box, Button, TextField, Typography } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
import db from "../db.json";
import { useState } from "react";

interface FormData {
  [key: string]: {
    starter: string;
    main: string;
    sweet: string;
  };
}

function Edit() {
  const [updatedDb, setUpdatedDb] = useState(db);
  const [formData, setFormData] = useState<FormData>({
    Monday: { starter: "", main: "", sweet: "" },
    Tuesday: { starter: "", main: "", sweet: "" },
    Wednesday: { starter: "", main: "", sweet: "" },
    Thursday: { starter: "", main: "", sweet: "" },
    Friday: { starter: "", main: "", sweet: "" },
  });
  const [submissionStatus, setSubmissionStatus] = useState(false);

  const handleInputChange = (day: string, mealType: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [day]: {
        ...prevState[day],
        [mealType]: value,
      },
    }));
  };

  const handleSaveChanges = () => {
    const updatedData: typeof db = { ...updatedDb };

    for (const day in formData) {
      updatedData[day as keyof typeof db].starter = formData[day].starter;
      updatedData[day as keyof typeof db].main = formData[day].main;
      updatedData[day as keyof typeof db].sweet = formData[day].sweet;
    }

    localStorage.setItem("db", JSON.stringify(updatedData));
    setUpdatedDb(updatedData);
    setSubmissionStatus(true);
  };

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
          <TextField
            multiline
            rows={2}
            label="Starter"
            value={formData.Monday.starter}
            onChange={(e) =>
              handleInputChange("Monday", "starter", e.target.value)
            }
          />
          <TextField
            multiline
            rows={2}
            label="Main"
            value={formData.Monday.main}
            onChange={(e) =>
              handleInputChange("Monday", "main", e.target.value)
            }
          />
          <TextField
            multiline
            rows={2}
            label="Sweet"
            value={formData.Monday.sweet}
            onChange={(e) =>
              handleInputChange("Monday", "sweet", e.target.value)
            }
          />
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
          <TextField
            multiline
            rows={2}
            label="Starter"
            value={formData.Tuesday.starter}
            onChange={(e) =>
              handleInputChange("Tuesday", "starter", e.target.value)
            }
          />
          <TextField
            multiline
            rows={2}
            label="Main"
            value={formData.Tuesday.main}
            onChange={(e) =>
              handleInputChange("Tuesday", "main", e.target.value)
            }
          />
          <TextField
            multiline
            rows={2}
            label="Sweet"
            value={formData.Tuesday.sweet}
            onChange={(e) =>
              handleInputChange("Tuesday", "sweet", e.target.value)
            }
          />
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
          <TextField
            multiline
            rows={2}
            label="Starter"
            value={formData.Wednesday.starter}
            onChange={(e) =>
              handleInputChange("Wednesday", "starter", e.target.value)
            }
          />
          <TextField
            multiline
            rows={2}
            label="Main"
            value={formData.Wednesday.main}
            onChange={(e) =>
              handleInputChange("Wednesday", "main", e.target.value)
            }
          />
          <TextField
            multiline
            rows={2}
            label="Sweet"
            value={formData.Wednesday.sweet}
            onChange={(e) =>
              handleInputChange("Wednesday", "sweet", e.target.value)
            }
          />
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
          <TextField
            multiline
            rows={2}
            label="Starter"
            value={formData.Thursday.starter}
            onChange={(e) =>
              handleInputChange("Thursday", "starter", e.target.value)
            }
          />
          <TextField
            multiline
            rows={2}
            label="Main"
            value={formData.Thursday.main}
            onChange={(e) =>
              handleInputChange("Thursday", "main", e.target.value)
            }
          />
          <TextField
            multiline
            rows={2}
            label="Sweet"
            value={formData.Thursday.sweet}
            onChange={(e) =>
              handleInputChange("Thursday", "sweet", e.target.value)
            }
          />
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
          <TextField
            multiline
            rows={2}
            label="Starter"
            value={formData.Friday.starter}
            onChange={(e) =>
              handleInputChange("Friday", "starter", e.target.value)
            }
          />
          <TextField
            multiline
            rows={2}
            label="Main"
            value={formData.Friday.main}
            onChange={(e) =>
              handleInputChange("Friday", "main", e.target.value)
            }
          />
          <TextField
            multiline
            rows={2}
            label="Sweet"
            value={formData.Friday.sweet}
            onChange={(e) =>
              handleInputChange("Friday", "sweet", e.target.value)
            }
          />
        </div>
      </Box>

      <Button
        sx={{ width: 215, marginTop: 2, borderRadius: 5 }}
        startIcon={<IosShareIcon />}
        variant="contained"
        onClick={handleSaveChanges}
      >
        Submit
      </Button>

      {submissionStatus && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
          }}
        >
          <Typography variant="h4" style={{ color: "#fff" }}>
            Data submitted successfully!
          </Typography>
        </div>
      )}
    </>
  );
}

export default Edit;
