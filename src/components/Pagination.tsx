import { Pagination } from "@mui/material";
import React, { FC, memo } from "react";

interface BasicPaginationProps {
  setPage: (page: number) => void;
  numberOfPages: number;
}

const BasicPagination: FC<BasicPaginationProps> = ({ setPage, numberOfPages }) => {
  const handlePage = (page: number) => {
    setPage(page);
    // console.log(page);
    window.scroll(0, 0);
  };

  return (
    <>
      <div className="pagination">
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
