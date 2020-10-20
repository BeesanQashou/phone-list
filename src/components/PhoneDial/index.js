import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useStyles from "./styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import cx from "classnames";

const PhoneDial = ({
  items = [],
  filteredItems = [],
  onSearch = () => {},
  onSelect = () => {},
}) => {
  const classes = useStyles();
  const [originalItems, setOriginalItems] = useState(items);

  useEffect(() => {
    setOriginalItems(items);
  }, [items]);

  const handleSearch = (e) => {
    const query = e.target.value;
    if (!query) {
      onSearch([]);
      return;
    }
    const filtered = originalItems.filter((item) =>
      item.value.toLowerCase().includes(query.toLowerCase())
    );
    onSearch(filtered);
  };

  const handleSelectItem = (item) => {
    onSelect(item);
    onSearch([]);
  };
  return (
    <Paper elevation={3} className={classes.root}>
      <TextField fullWidth onChange={handleSearch} />
      <Box display="flex" flexDirection="column">
        {filteredItems.map((item, index) => {
          return (
            <Box
              key={`${item.value}-${index}`}
              display="flex"
              className={cx(classes.item)}
              onClick={() => handleSelectItem(item)}
            >
              {item.leftIcon}
              <Typography>{item.lable}</Typography>
            </Box>
          );
        })}
      </Box>
    </Paper>
  );
};

export default PhoneDial;
