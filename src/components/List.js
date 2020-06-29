import React from "react";

const List = ({
  data,
  setData,
  mode,
  setMode,
  isToggle,
  setIsToggle,
  handleRemove
}) => {
  // console.log(data.selectedID);
  const showDetailToggle = index => {
    setMode("read");
    setData({
      ...data,
      selectedID: index
    });
    if (isToggle && index === data.selectedID) {
      setIsToggle(false);
    } else {
      setIsToggle(true);
    }
  };

  const editToggle = index => {
    setData({
      ...data,
      selectedID: index
    });
    setMode("update");
    setIsToggle(true);
  };

  return (
    <div>
      <button className="btn_create" onClick={() => setMode("create")}>
        Add New
      </button>
      <ul>
        <li>
          <span>Index</span>
          <span>Title</span>
          <span>Name</span>
          <span className="col_btn">Edit</span>
          <span className="col_btn">Delete</span>
        </li>
        {data.contents.map((value, i) => {
          return (
            <li
              key={value.index}
              className={`${
                value.index === data.selectedID && isToggle ? "show" : ""
              }`}
            >
              {mode === "read" ? (
                <div>
                  <div className="list">
                    <span>{value.index + 1}</span>
                    <span className="title" onClick={() => showDetailToggle(i)}>
                      {value.title}
                    </span>
                    <span>{value.name}</span>
                    <span>
                      <button
                        className="btn_edit"
                        onClick={() => editToggle(i)}
                      >
                        Edit
                      </button>
                    </span>
                    <span>
                      <button
                        className="btn_del"
                        onClick={() => handleRemove(i)}
                      >
                        Delete
                      </button>
                    </span>
                  </div>
                  <div className="detail">
                    <p>{value.desc}</p>
                  </div>
                </div>
              ) : (
                <>
                  {i === data.selectedID ? (
                    <form>
                      <div className="list">
                        <span>{value.index + 1}</span>
                        <span>
                          <input
                            type="text"
                            name="title"
                            placeholder="title"
                            value={value.title}
                          />
                        </span>
                        <span>
                          <input
                            type="text"
                            name="name"
                            placeholder="name"
                            value={value.name}
                          />
                        </span>
                        <span>
                          <button
                            className="btn_edit"
                            onClick={() => setMode("update")}
                          >
                            update
                          </button>
                        </span>
                        <span>
                          <button
                            className="btn_del"
                            onClick={() => handleRemove(i)}
                          >
                            Delete
                          </button>
                        </span>
                      </div>
                      <div className="detail">
                        <p>
                          <textarea
                            name="desc"
                            placeholder="description"
                            value={value.desc}
                          />
                        </p>
                      </div>
                    </form>
                  ) : (
                    <div>
                      <div className="list">
                        <span>{value.index + 1}</span>
                        <span
                          className="title"
                          onClick={() => showDetailToggle(i)}
                        >
                          {value.title}
                        </span>
                        <span>{value.name}</span>
                        <span>
                          <button
                            className="btn_edit"
                            onClick={() => editToggle(i)}
                          >
                            edit
                          </button>
                        </span>
                        <span>
                          <button
                            className="btn_del"
                            onClick={() => handleRemove(i)}
                          >
                            Delete
                          </button>
                        </span>
                      </div>
                      <div className="detail">
                        <p>{value.desc}</p>
                      </div>
                    </div>
                  )}
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
