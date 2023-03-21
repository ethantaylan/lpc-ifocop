import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  StoresInformations,
  StoresInformationsProps,
} from "../stores-informations";
import { Users, UsersProps } from "../users";

export default function BasicSelect() {
  const [city, setCity] = React.useState("");
  const [coach, setCoach] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };

  const handleChange2 = (event: SelectChangeEvent) => {
    setCoach(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl className="my-3" fullWidth>
        <InputLabel id="demo-simple-select-label">Coach</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={coach}
          label="Coach"
          onChange={handleChange2}
        >
          {Users.map((user: UsersProps, index: number) => (
            <MenuItem value={index}>{user.userName}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className="my-3" fullWidth>
        <InputLabel id="demo-simple-select-label">Boutique</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="Ville"
          onChange={handleChange}
        >
          {StoresInformations.map(
            (store: StoresInformationsProps, index: number) => (
              <MenuItem value={index}>{store.city}</MenuItem>
            )
          )}
        </Select>
      </FormControl>
    </Box>
  );
}
