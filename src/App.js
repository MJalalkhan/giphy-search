import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Searchbar from "./components/SearchBar";
import Header from "./components/Header";
import GifCards from "./components/GifCards";
import { Container } from "@mui/material";
import BasicPagination from "./components/Pagination";
import { get } from "./service/httpService/HttpService";
const App = () => {
  const [gifList, setGifList] = useState([]);
  const [pages, setPages] = useState(1);
  const [limit, setLimit] = useState(20);
  const [numberOfPages,setNumberOfPages]=useState(0);
  const [searchGif, setSearchGif] = useState("");
  const getDataRef = useRef(null);
  const getData = async () => {
    // console.log("call api here");

      const response = await get("/search", {
        q: searchGif,
        api_key: process.env.API_KEY,
        offset: (pages -1) * limit,
        limit: limit,
      });
      setGifList(response?.data?.data);
      setNumberOfPages(Math.ceil(response?.data?.pagination?.total_count / limit));
      console.log(Math.ceil(response?.data?.pagination?.total_count / limit))
  };

  getDataRef.current = getData;
  useEffect(() => {
    getDataRef.current();
  }, [pages]);

  useEffect(() => {}, [gifList,numberOfPages]);
  return (
    <div>
      <Header />
      <Container maxWidth="md">
        <Searchbar
          setSearchGif={setSearchGif}
          searchGif={searchGif}
          getData={getData}
        />
        <div className="gif-container">
          {gifList.map((item) => {
            return (
              <>
                <GifCards key={item.id} id={item.id} item={item} />
              </>
            );
          })}
        </div>
      </Container>

      <div className="">
        {
          numberOfPages > 0 ? <BasicPagination setPage={setPages} numberOfPages={numberOfPages}/>:""
        }
      </div>
    </div>
  );
};

export default App;
