import * as React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function FlatData() {
  const flat = useSelector((state) => state);
  console.log(`flat`, flat);

  //   const flatDetails = flat.map((flat) => {
  //     const {
  //       _id,
  //       society_name,
  //       total_no_residents,
  //       flat_type,
  //       BHK_type,
  //       block_names,
  //       price,
  //       images,
  //       resident_details,
  //       flat_nos,
  //     } = flat;

  //     return (
  //       <div className="" key={_id}>
  //         <Card sx={{ maxWidth: 345 }} className="card-container">
  //           {/* <img className="card-img" src={images[0]} alt=".." /> */}
  //           <CardMedia
  //             className="card-media"
  //             component="img"
  //             alt="..."
  //             height="300"
  //             image={images[0]}
  //             title="..."
  //           />
  //           <CardContent>
  //             <Typography gutterBottom variant="h5" component="h2">
  //               {society_name}
  //             </Typography>
  //             <Typography variant="body2" color="textSecondary" component="p">
  //               {flat_nos}
  //             </Typography>
  //             <Typography variant="body2" color="textSecondary" component="p">
  //               {block_names}
  //             </Typography>
  //             <Typography
  //               variant="body2"
  //               variant="h6"
  //               color="textSecondary"
  //               component="p"
  //             >
  //               Flat (available) : {BHK_type[0]}
  //             </Typography>
  //             <Typography variant="body2" color="textSecondary" component="p">
  //               {flat_type}
  //             </Typography>
  //             <Typography
  //               variant="body2"
  //               variant="h6"
  //               color="textSecondary"
  //               component="p"
  //             >
  //               Resident (current) : {total_no_residents}
  //             </Typography>
  //             <Typography variant="body2" color="textSecondary" component="p">
  //               {resident_details}
  //             </Typography>
  //             <div className="chip-container">Price</div>
  //             <Typography
  //               variant="body2"
  //               variant="h4"
  //               color="textSecondary"
  //               component="p"
  //             >
  //               {price} Lacs
  //             </Typography>
  //           </CardContent>
  //         </Card>
  //       </div>
  //     );
  //   });

  //   return <>{flatDetails}</>;
}
