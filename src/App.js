import { useEffect, useState } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const memberList = useSelector((state) => state.memberReducer.memberList);

  const fetchData = () => {
    dispatch({ type: "REQUEST_FETCH" });
  };

  return (
    <div className="App">
      <Header />
      <div className="pl-10 pt-10 text-xl">초기 데이터를 이곳에 보여줘야 합니다.</div>
      <button className="p-3 border m-10 rounded-xl bg-blue-100" onClick={fetchData}>
        데이터 불러오기
      </button>
      <Container memberList={memberList} />
    </div>
  );
}

export default App;
