import React from "react";

const Container = ({ memberList }) => {
  return (
    <>
      <button className="p-3 border m-10 rounded-xl bg-blue-100">데이터 불러오기</button>
      {memberList && (
        <ul>
          {memberList.map((person) => {
            <div>
              <div>이름 : {person.name}</div>
              <div>직업 : {person.job}</div>
            </div>;
          })}
        </ul>
      )}
    </>
  );
};

export default Container;
