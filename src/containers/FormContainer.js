import React, { useState, useEffect, useCallback } from "react";
import Form from "../components/Form";

export const useInput = (initValue = null) => {
  const [value, setValue] = useState(initValue);
  const handler = useCallback(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
};

const FormContainer = ({ data, setData, mode, setMode }) => {
  // const handleUpdate = () => {};
  const handleSubmit = e => {
    e.preventDefault(); // form 태그에서 onSubmit 하면 화면이 바뀌게 되어서 그 것을 방지
    if (mode === "create") {
      console.log({ title, name, desc });
    }
  };

  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
  });

  const [title, onChangeTitle] = useInput("");
  const [name, onChangeName] = useInput("");
  const [desc, onChangeDesc] = useInput("");

  return (
    <Form
      onChangeTitle={onChangeTitle}
      onChangeName={onChangeName}
      onChangeDesc={onChangeDesc}
      handleSubmit={handleSubmit}
    />
  );
};

export default FormContainer;
