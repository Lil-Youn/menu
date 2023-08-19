import IosShareIcon from "@mui/icons-material/IosShare";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Box, Button, Fab, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getXataClient } from "../../xata";

type MenuRecord = {
  id: string;
  monday_starter: string;
  monday_main: string;
  monday_sweet: string;
  tuesday_starter: string;
  tuesday_main: string;
  tuesday_sweet: string;
  wednesday_starter: string;
  wednesday_main: string;
  wednesday_sweet: string;
  thursday_starter: string;
  thursday_main: string;
  thursday_sweet: string;
  friday_starter: string;
  friday_main: string;
  friday_sweet: string;
};

const xata = getXataClient();

const daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday"];

async function fetchMenu(): Promise<MenuRecord | null> {
  const [menuRecord] = await xata.db.menu.getMany();

  if (menuRecord) {
    return {
      ...menuRecord,
      monday_starter: menuRecord.monday_starter ?? "",
      monday_main: menuRecord.monday_main ?? "",
      monday_sweet: menuRecord.monday_sweet ?? "",
      tuesday_starter: menuRecord.tuesday_starter ?? "",
      tuesday_main: menuRecord.tuesday_main ?? "",
      tuesday_sweet: menuRecord.tuesday_sweet ?? "",
      wednesday_starter: menuRecord.wednesday_starter ?? "",
      wednesday_main: menuRecord.wednesday_main ?? "",
      wednesday_sweet: menuRecord.wednesday_sweet ?? "",
      thursday_starter: menuRecord.thursday_starter ?? "",
      thursday_main: menuRecord.thursday_main ?? "",
      thursday_sweet: menuRecord.thursday_sweet ?? "",
      friday_starter: menuRecord.friday_starter ?? "",
      friday_main: menuRecord.friday_main ?? "",
      friday_sweet: menuRecord.friday_sweet ?? "",
    };
  }

  return null;
}

function Edit() {
  const [menu, setMenu] = useState<MenuRecord | null>(null);
  const [pendingChanges, setPendingChanges] = useState<Record<string, string>>(
    {}
  );

  useEffect(() => {
    fetchMenu().then((fetchedMenu) => setMenu(fetchedMenu));
  }, []);

  const handleInputChange = (day: string, field: string, newValue: string) => {
    setPendingChanges((prevChanges) => ({
      ...prevChanges,
      [`${day}_${field}`]: newValue,
    }));
  };

  const updateField = async (day: string, field: string, newValue: string) => {
    setMenu((prevMenu) => {
      if (prevMenu) {
        return {
          ...prevMenu,
          [`${day}_${field}`]: newValue,
        };
      }
      return prevMenu;
    });
  };

  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
  const handleSaveChanges = async () => {
    try {
      for (const dayField in pendingChanges) {
        const [day, field] = dayField.split("_");
        await xata.db.menu.update("rec_cjdtq9tqdu05925101v0", {
          [`${day}_${field}`]: pendingChanges[dayField],
        });
        updateField(day, field, pendingChanges[dayField]);
      }

      toast.success("Data submitted successfully!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });

      setSubmissionStatus("success");
      setPendingChanges({});
    } catch (error) {
      console.error(error);
      toast.error("Could not submit data. Please try again.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setSubmissionStatus("error");
    }
  };

  return (
    <>
      {menu && (
        <Box>
          {daysOfWeek.map((day) => (
            <div key={day}>
              <Typography
                sx={{ display: "flex", justifyItems: "flex-start" }}
                variant="button"
              >
                {day.charAt(0).toUpperCase() + day.slice(1)}
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
                  value={
                    pendingChanges[`${day}_starter` as keyof MenuRecord] ||
                    menu[`${day}_starter` as keyof MenuRecord] ||
                    ""
                  }
                  onChange={(event) =>
                    handleInputChange(day, "starter", event.target.value)
                  }
                />
                <TextField
                  multiline
                  rows={2}
                  label="Main"
                  value={
                    pendingChanges[`${day}_main` as keyof MenuRecord] ||
                    menu[`${day}_main` as keyof MenuRecord] ||
                    ""
                  }
                  onChange={(event) =>
                    handleInputChange(day, "main", event.target.value)
                  }
                />
                <TextField
                  multiline
                  rows={2}
                  label="Sweet"
                  value={
                    pendingChanges[`${day}_sweet` as keyof MenuRecord] ||
                    menu[`${day}_sweet` as keyof MenuRecord] ||
                    ""
                  }
                  onChange={(event) =>
                    handleInputChange(day, "sweet", event.target.value)
                  }
                />
              </div>
            </div>
          ))}
        </Box>
      )}

      <Button
        sx={{ width: 215, marginTop: 0, borderRadius: 5 }}
        startIcon={<IosShareIcon />}
        variant="contained"
        onClick={handleSaveChanges}
      >
        Submit
      </Button>
      <NavLink to="/">
        <Fab
          sx={{ width: 215, marginTop: 0, borderRadius: 5 }}
          color="primary"
          variant="extended"
          size="medium"
        >
          <MenuBookIcon />
          Show Menu
        </Fab>
      </NavLink>
      {submissionStatus === "success" && (
        <ToastContainer position="bottom-right" />
      )}
      {submissionStatus === "error" && (
        <ToastContainer position="bottom-right" />
      )}
    </>
  );
}

export default Edit;
