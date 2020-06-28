import React, { useState, useEffect } from "react";
import ListContainer from "./containers/ListContainer";
import FormContainer from "./containers/FormContainer";
import "./styles.css";

const App = () => {
  const [mode, setMode] = useState("create");
  const [data, setData] = useState({
    content: [
      {
        index: 0,
        title: "1번 퓨리오사가 장발이었다고? <매드맥스: 분노의 도로>",
        name: "Kim",
        desc:
          "2015년 개봉한 <매드맥스: 분노의 도로>는 '아쿠아 콜라' 같은 영화였다. 사막화된 미래 세계에서 물이 귀하듯, 이 영화처럼 알찬 액션 영화는 그 자체로도 청량감을 안겨줬다. 수준급의 액션과 배우들의 쿨내나는 연기, 척박한 환경에서 살아남기 위한 적이 동료로 변화하는 관계 변화까지. 관객들은 열광했고, 평단에서도 아날로그 액션의 극한을 보여준 영화에 찬사를 보냈다. 모두가 <매드맥스> 속편이 금방 나올 거라고 생각했다. 시리즈를 전담한 조지 밀러 감독 또한 속편의 아이디어가 있음을 내비쳤다."
      },
      { index: 1, title: "2번", name: "Lee", desc: "2번 detail" },
      { index: 2, title: "3번", name: "Park", desc: "3번 detail" }
    ],
    selectedID: 0
  });

  useEffect(() => {
    console.log(mode);
  });

  return (
    <div className="App">
      <h1>Hi</h1>
      {mode === "create" ? (
        <FormContainer
          data={data}
          setData={setData}
          mode={mode}
          setMode={setMode}
        />
      ) : (
        <ListContainer
          mode={mode}
          setMode={setMode}
          data={data}
          setData={setData}
        />
      )}
    </div>
  );
};

export default App;
