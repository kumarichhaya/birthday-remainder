import React from "react";

export default function list({ info }) {
  console.log(info);
  return <ul>{iterate(info)}</ul>;
}

function iterate(data) {
  if (!data) return;
  return (
    <>
      {data.map((person, index) => {
        Old(person.Birthday);
        return (
          <li key={index}>
            <div className="flex">
              <img src={person.img} alt="img" width={90} height={90} />
              <div className="title">
                <h3 className="name">{person.name}</h3>
                <h5 className="age">{Old(person.Birthday)}</h5>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
}

// how old the person is
function Old(personAge) {
  let year = new Date(personAge).getFullYear();
  let CurrentYear = new Date().getFullYear();
  let age = CurrentYear - year;
  return age;
}
