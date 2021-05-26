import React from "react";

const Container = ({ memberList }) => {
  console.log(memberList);
  return (
    <>
      {memberList && (
        <ul>
          {memberList.map((person) => (
            <li className="ml-10">
              <div>이름 : {person.name}</div>
              <div>직업 : {person.job}</div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Container;
