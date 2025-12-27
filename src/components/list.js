import React from "react";

export default function list() {
  return (
    <ul>
      <li>
        <div className="flex">
          <img src="" alt="img" width={20} height={20} />
          <div className="title">
            <h3 className="name">Persone name</h3>
            <h5 className="age">23years</h5>
          </div>
        </div>
      </li>
    </ul>
  );
}
