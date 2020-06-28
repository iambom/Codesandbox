import React from "react";

const Form = ({ onChangeTitle, onChangeName, onChangeDesc, handleSubmit }) => {
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="index" />
        <p>
          <input
            type="text"
            name="title"
            placeholder="title"
            onChange={onChangeTitle}
          />
        </p>
        <p>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={onChangeName}
          />
        </p>
        <p>
          <textarea
            name="desc"
            placeholder="description"
            onChange={onChangeDesc}
          />
        </p>
        <p>
          <button type="submit">등록</button>
        </p>
      </form>
    </div>
  );
};

export default Form;
