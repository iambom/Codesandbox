import React, { useState } from "react";
import List from "../components/List";

const ListContainer = ({ data, setData, mode, setMode }) => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <List
      data={data}
      setData={setData}
      mode={mode}
      setMode={setMode}
      isToggle={isToggle}
      setIsToggle={setIsToggle}
    />
  );
};
export default ListContainer;
