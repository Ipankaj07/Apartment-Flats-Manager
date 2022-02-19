import * as React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pageChange } from "../redux/actions/flatAction";
import { Link } from "react-router-dom";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function AppPagination() {
  const dispatch = useDispatch();

  const flats = useSelector((state) => state.allFlats.Apartment);

  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    // console.log(`value`, value);
    dispatch(pageChange(value));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="pagination-container">
      <Stack spacing={2}>
        {/* <Pagination count={10} shape="rounded" /> */}
        <Link to={`/apartment/${page == 1 ? 1 : page}`}>
          <Pagination
            count={flats.totalPages}
            variant="outlined"
            shape="rounded"
            size="large"
            // onChange={(e, value) => {
            //   console.log(value);
            // }}
            onChange={handleChange}
          />
        </Link>
      </Stack>
    </div>
  );
}

export default AppPagination;
