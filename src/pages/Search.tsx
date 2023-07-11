import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import GifCards from "../components/GifCards";
import { get } from "../service/httpService/HttpService";
import BasicPagination from "../components/Pagination";
import { Container } from "@mui/material";
import Divider from '@mui/material/Divider';


const Search = () => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const queryParams = useQuery();
  const queryParam = queryParams.get("q");
  const [gifList, setGifList] = useState<any[]>([]);
  const [pages, setPages] = useState<number>(1);
  const [limit] = useState<number>(30);
  const [numberOfPages, setNumberOfPages] = useState<number>(0);
  const getDataRef = useRef<any>(null);

  const getData = async () => {
    const response = await get("/search", {
      q: queryParam,
      api_key: process.env.REACT_APP_API_KEY,
      offset: (pages - 1) * limit,
      limit: limit,
    });

    setGifList(response?.data?.data);
    setNumberOfPages(
      Math.ceil(response?.data?.pagination?.total_count / limit)
    );
  };

  getDataRef.current = getData;

  useEffect(() => {
    getDataRef.current();
  }, [pages, queryParam]);

  useEffect(() => {}, [gifList, numberOfPages]);

  return (
    <>
      <Container>
      {gifList.length > 0 && (
        <>
          <div className="gif-container">
            {gifList.map((item) => (
              <GifCards key={item.id} id={item.id} item={item} />
            ))}
          </div>
          <Divider />
          <div className="pagination">
            {numberOfPages > 0 && (
              <BasicPagination setPage={setPages} numberOfPages={numberOfPages} />
            )}
          </div>
          </>
      )}
      </Container>
    </>
  );
  
};

export default Search;
