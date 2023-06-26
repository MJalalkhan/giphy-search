// src/components/Searchbar.tsx
import { SearchOutlined } from "@mui/icons-material";
import {
  Button,
  Divider,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";
import { useState } from "react";



const Searchbar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const onSubmit=(searchTerm)=>{
    console.log(searchTerm);
  }

  return (
    // We use the Paper component since it already contains the style that we want.
    <Paper
      component="form"
      elevation={3}
      sx={{
        marginY:3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 1,
        py: 0.5,
      }}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit((e.target.value));
      }}
    >
      {/* Input base contains the fewest styles possible so it's perfect for creating custom components like these */}
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
        value={searchTerm}
        onChange={(e) => {
          console.log(e.target.value);
          setSearchTerm(e.target.value);
        }}
        {...props.inputProps}
      />
      <Divider sx={{ height: 28, mx: 0.5 }} orientation="vertical" />
      <Button type="submit" variant="contained" className="btn">
        Search
      </Button>
    </Paper>
  );
};
export default Searchbar;