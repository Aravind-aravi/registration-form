import React from "react";

function InputForm({ input, onChangeHandler, user }) {
  return (
    <div>
      {" "}
      {input.type !== "text-area" ? (
        <input
          type={input.type}
          value={user[input.name]}
          name={input.name}
          onChange={onChangeHandler}
          className="form-control"
          placeholder={input.placeholder}
        />
      ) : (
        <textarea
          className="form-control"
          type="text"
          name={input.name}
          value={user[input.name]}
          onChange={onChangeHandler}
          placeholder={input.placeholder}
          rows="3"
        ></textarea>
      )}
    </div>
  );
}

export default InputForm;
