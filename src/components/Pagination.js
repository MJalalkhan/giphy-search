import { Pagination } from "@mui/material";
import React, { memo } from "react";

const BasicPagination = ({ setPage, numberOfPages}) => {
  const handlePage = (page) => {
    setPage(page);
    // console.log(page);
    window.scroll(0, 0);
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: 14,
          position:'sticky',
          bottom:30
        }}
      >
        <Pagination
          count={numberOfPages}
          color="primary"
          onChange={(e, val) => handlePage(val)}
          size="large"
          variant="outlined"
          shape="rounded" 
        />
      </div>
    </>
  );
};

export default memo(BasicPagination);
