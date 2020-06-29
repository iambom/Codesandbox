import React, { useState } from "react";
import List from "../components/List";

const ListContainer = ({ data, setData, mode, setMode }) => {
  const [isToggle, setIsToggle] = useState(false);

  const handleRemove = i => {
    console.log("remove function", i);
    if (window.confirm("really?")) {
      setData({
        contents: data.contents.filter(item => item.index !== i)
      });
    }
  };
  return (
    <List
      data={data}
      setData={setData}
      mode={mode}
      setMode={setMode}
      isToggle={isToggle}
      setIsToggle={setIsToggle}
      handleRemove={handleRemove}
    />
  );
};
export default ListContainer;
