import { useState } from "react";
import Header from "./components/Header";
import Container from "./components/Container";

function App() {
  const [memberList, setmemberList] = useState(null);

  return (
    <div className="App">
      <Header />
      <div className="pl-10 pt-10 text-xl">초기 데이터를 이곳에 보여줘야 합니다.</div>
      <Container memberList={memberList} />
    </div>
  );
}

export default App;
