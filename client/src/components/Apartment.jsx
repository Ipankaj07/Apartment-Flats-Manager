import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFlats, pageChange } from "../redux/actions/flatAction";

import AppPagination from "./AppPagination";
import ApartmentCard from "./ApartmentCard";

import axios from "axios";

function Apartment({}) {
  const dispatch = useDispatch();

  const page = useSelector((state) => state.pageChange.page);
  // console.log(`page`, page);

  const fetchData = async () => {
    const response = await axios.get(
      `http://localhost:2000/flat?page=${page}&size=3`
    );
    // console.log(response.data);
    dispatch(setFlats(response.data));
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  // console.log(`flats`, flats)

  return (
    <div className="card-container">
      <div className="card-group">
        <ApartmentCard />
      </div>

      <AppPagination />
    </div>
  );
}

export { Apartment };
