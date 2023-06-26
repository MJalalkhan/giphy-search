import  React,{memo} from 'react';
import {
  Button,
  Divider,
  InputBase,
  Paper,
} from "@mui/material";



const Searchbar = ({setSearchGif,searchGif,getData}) => {
 
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
        // setSearchGif(e.target.value);
        getData();
      }}
    >
      {/* Input base contains the fewest styles possible so it's perfect for creating custom components like these */}
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
        value={searchGif}
        onChange={(e) => {
          console.log(e.target.value);
          setSearchGif(e.target.value);
        }}
      />
      <Divider sx={{ height: 28, mx: 0.5 }} orientation="vertical" />
      <Button type="submit" variant="contained" className="btn">
        Search
      </Button>
    </Paper>
  );
};
export default memo(Searchbar);