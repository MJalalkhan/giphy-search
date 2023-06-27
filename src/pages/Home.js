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
  const queryParam = queryParams.get("query");
  const [searchGif, setSearchGif] = useState(queryParam?queryParam :"");
  const navigate = useNavigate();
 
  const getData = () => {
    navigate(`/search/?query=${searchGif}`);
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
