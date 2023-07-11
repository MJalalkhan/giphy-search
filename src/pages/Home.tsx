import React, { useState } from "react";
import Searchbar from "../components/SearchBar";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";

const Home = () => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const queryParams = useQuery();
  const queryParam = queryParams.get("q");
  const [searchGif, setSearchGif] = useState<string>(queryParam ? queryParam : "");
  const navigate = useNavigate();

  const getData = () => {
    if (searchGif !== "") {
      navigate(`/search/?q=${searchGif}`);
    } else {
      alert("Please enter a gif name");
    }
  };

  return (
    <div>
      <Header />
      <Container maxWidth="md">
        <Searchbar
          setSearchGif={setSearchGif}
          searchGif={searchGif}
          getData={getData}
        />
      </Container>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
