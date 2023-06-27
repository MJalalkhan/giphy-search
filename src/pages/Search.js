import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import GifCards from "../components/GifCards";
import { get } from "../service/httpService/HttpService";
import BasicPagination from "../components/Pagination";
const Search = () => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const queryParams = useQuery();
  const queryParam = queryParams.get("query");
  const [gifList, setGifList] = useState([]);
  const [pages, setPages] = useState(1);
  const [limit] = useState(20);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const getDataRef = useRef(null);
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
    console.log(Math.ceil(response?.data?.pagination?.total_count / limit));
  };

  getDataRef.current = getData;
  useEffect(() => {
    getDataRef.current();
  }, [pages, queryParam]);

  useEffect(() => {}, [gifList, numberOfPages]);

  return (
    <>
      <div className="gif-container">
        {gifList.map((item) => {
          return (
            <>
              <GifCards key={item.id} id={item.id} item={item} />
            </>
          );
        })}
      </div>

      <div className="">
        {numberOfPages > 0 ? (
          <BasicPagination setPage={setPages} numberOfPages={numberOfPages} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default Search;
