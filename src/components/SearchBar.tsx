import React, { FC, memo, useEffect, FormEvent, ChangeEvent} from 'react';
import {
  Button,
  Divider,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from 'react-router-dom';

interface SearchbarProps {
  setSearchGif: React.Dispatch<React.SetStateAction<string>>;
  searchGif: string;
  getData: () => void;
}

const Searchbar: FC<SearchbarProps> = ({ setSearchGif, searchGif, getData }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchGif.length > 0) {
        getData();
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchGif, getData]);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getData();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchGif(e.target.value);
    if(e.target.value === "") {
      setSearchGif("")
      navigate("/");
    }
  };
  const handleResetSearch = () => {
    console.log('Reset search')
    if(searchGif !== "") {
      setSearchGif("")
      navigate("/");
    }
  };

  return (
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
      onSubmit={handleFormSubmit}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
        value={searchGif}
        onChange={handleInputChange}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleResetSearch}>
        <ClearIcon />
      </IconButton>
      <Divider sx={{ height: 28, mx: 0.5 }} orientation="vertical" />
      <Button type="submit" variant="contained" className="btn">
        Search
      </Button>
    </Paper>
  );
};

export default memo(Searchbar);
