import React from "react";
import List from "./list";
import "./board.css";

// const Info = [
//   {
//     img: "",
//     name: "Prerna",
//     Birthday: "",
//   },
//   {
//     img: "",
//     name: "Harsimran",
//     Birthday: "",
//   },
//   {
//     img: "",
//     name: "",
//     Birthday: "",
//   },
//   {
//     img: "",
//     name: "",
//     Birthday: "",
//   },
//   {
//     img: "",
//     name: "",
//     Birthday: "",
//   },
//   {
//     img: "",
//     name: "",
//     Birthday: "",
//   },
// ];

export default function board() {
  return (
    <main id="site-main">
      <h1 className="text-dark title">Birthday Remainder</h1>
      <List></List>
      <div className="board"></div>
    </main>
  );
}
