import React, { useEffect, useState } from "react";
import "./App.css";
import PhoneDial from "./components/PhoneDial";
import { getCountries } from "./service";
import { mapCountriesToListItems } from "./utils";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    (async () => {
      const result = await getCountries();
      setCountries(mapCountriesToListItems(result));
    })();
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      width={500}
      bgcolor="#ccc"
      alignItems="center"
      padding={10}
    >
      <Typography>Phone</Typography>
      <TextField
        type="number"
        fullWidth
        variant="outlined"
        InputProps={{
          startAdornment: (
            <Typography style={{ margin: "0px 10px" }}>
              {selectedItem.code}
            </Typography>
          ),
        }}
      />
      <Box marginTop={5}>
        <PhoneDial
          items={countries}
          filteredItems={filteredCountries}
          onSearch={(items) => {
            setFilteredCountries(items);
          }}
          onSelect={(item) => {
            console.log(item);
            setSelectedItem(item);
          }}
        />
      </Box>
    </Box>
  );
}

export default App;
