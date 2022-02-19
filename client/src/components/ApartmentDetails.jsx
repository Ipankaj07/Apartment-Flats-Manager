import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedFlat } from "../redux/actions/flatAction";
import { useParams } from "react-router-dom";

import axios from "axios";

function ApartmentDetails({}) {
  const dispatch = useDispatch();

  const { id } = useParams();

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:2000/flat/${id}`);
    // console.log(response.data);
    dispatch(selectedFlat(response.data));
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="card-details-container">
      <Print />
    </div>
  );
}

function Print() {
  const flat = useSelector((state) => state.selectedFlat);
  // console.log("PRINT");
  // console.log(flat._id);
  const {
    _id,
    society_name,
    total_no_residents,
    flat_type,
    BHK_type,
    block_names,
    price,
    images,
    resident_details,
    flat_nos,
  } = flat;

  console.log(flat.images[0]);

  return (
    <div>
      <div className="img-div">
        <div>
          <img src={images[0]} alt=".." />
        </div>
        <div>
          {" "}
          <img src={images[1]} alt=".." />
        </div>
        <div>
          {" "}
          <img src={images[2]} alt=".." />
        </div>
        <div className="containts">
          <div className="containts-div">
            <h1> {society_name} </h1>
            <div> Available : {BHK_type[0]}</div>
            <h4>
              {" "}
              Falt No : {flat_nos[0]} to {flat_nos[flat_nos.length - 1]}{" "}
            </h4>
            <div>
              {" "}
              Block : {block_names[0]} {block_names[1]} {block_names[2]}{" "}
              {block_names[block_names.length - 1]}{" "}
            </div>
            <div> Price (in Lacs): {price}</div>
            <div> Total Residents : {total_no_residents}</div>
          </div>
          <div>
            <div>
              <h3>Top Residents Details : </h3>
              <table>
                <tr>
                  <td>&nbsp;</td>
                  <td>Name</td>
                  <td>Gender</td>
                  <td>Age</td>
                </tr>
                <tr>
                  <td>01 </td>
                  <td> {resident_details[0][0]} </td>
                  <td>{resident_details[0][1]}</td>
                  <td>{resident_details[0][2]}</td>
                </tr>
                <tr>
                  <td>02 </td>
                  <td>{resident_details[1][0]}</td>
                  <td>{resident_details[1][1]}</td>
                  <td>{resident_details[1][2]}</td>
                </tr>
                <tr>
                  <td>03 </td>
                  <td>{resident_details[2][0]}</td>
                  <td>{resident_details[2][1]}</td>
                  <td>{resident_details[2][2]}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ApartmentDetails };
