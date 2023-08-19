import IosShareIcon from "@mui/icons-material/IosShare";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Box, Button, Fab, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
  const menu = await xata.db.menu.getMany();
  return menu;
}

function Edit() {
  const [menu, setMenu] = useState<MenuRecord | null>(null);

  useEffect(() => {
    fetchMenu().then((fetchedMenu) => setMenu(fetchedMenu));
  }, []);

  async function updateField(day: string, field: string, newValue: string) {
    await xata.db.menu.update("rec_cjdtq9tqdu05925101v0", {
      [`${day}_${field}`]: newValue,
    });

    setMenu(
      (prevMenu) =>
        ({
          ...prevMenu,
          [`${day}_${field}`]: newValue,
        } as MenuRecord)
    ); // Explicitly annotate prevMenu with MenuRecord type
  }

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
                  value={menu![`${day}_starter` as keyof MenuRecord]}
                  onChange={(event) =>
                    updateField(day, "starter", event.target.value)
                  }
                />
                <TextField
                  multiline
                  rows={2}
                  label="Main"
                  value={menu![`${day}_main` as keyof MenuRecord]}
                  onChange={(event) =>
                    updateField(day, "main", event.target.value)
                  }
                />
                <TextField
                  multiline
                  rows={2}
                  label="Sweet"
                  value={menu![`${day}_sweet` as keyof MenuRecord]}
                  onChange={(event) =>
                    updateField(day, "sweet", event.target.value)
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
    </>
  );
}

export default Edit;
