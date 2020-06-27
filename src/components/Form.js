import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form>
        <input type="hidden" name="index" />
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <input type="text" name="name" placeholder="name" />
        </p>
        <p>
          <textarea name="desc" placeholder="description" />
        </p>
        <p>
          <button type="submit">등록</button>
        </p>
      </form>
    </div>
  );
};

export default Form;
