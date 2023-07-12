import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import GifCards from "../components/GifCards";
import { get } from "../service/httpService/HttpService";
import BasicPagination from "../components/Pagination";
import { Container } from "@mui/material";
import Divider from "@mui/material/Divider";


const Search = () => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const queryParams = useQuery();
  const queryParam = queryParams.get("q");
  const [gifList, setGifList] = useState<any[]>([]);
  const [pages, setPages] = useState<number>(1);
  const [limit] = useState<number>(30);
  const [loading, setLoading] = useState<boolean>();

  const [numberOfPages, setNumberOfPages] = useState<number>(0);
  const getDataRef = useRef<any>(null);

  const getData = async () => {
    setLoading(true);
    const response = await get("/search", {
      q: queryParam,
      api_key: process.env.REACT_APP_API_KEY,
      offset: (pages - 1) * limit,
      limit: limit,
    });
    response && setLoading(false);
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
        {loading ? (
          <h3 style={{ textAlign: "center" }}> Loading...</h3>
        ) : gifList.length > 0 ? (
          <>
            <div className="gif-container">
              {gifList.map((item) => (
                <GifCards key={item.id} id={item.id} item={item} />
              ))}
            </div>
            <Divider />
            <div className="pagination">
              {numberOfPages > 0 && (
                <BasicPagination
                  setPage={setPages}
                  numberOfPages={numberOfPages}
                />
              )}
            </div>
          </>
        ) : (
          <h3 style={{ textAlign: "center" }}>
            No Data Found.Please Enter Valid Name...
          </h3>
        )}
      </Container>
    </>
  );
};

export default Search;
