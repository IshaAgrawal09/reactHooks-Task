import React, { useState } from "react";
import CartContext from "../Context";
import { useContext } from "react";
import "./Todo.css";
const Todo = () => {
  const {
    todoList,
    setTodoList,
    count,
    setCount,
    comp,
    // setComp,
    // compCount,
    // setcompCount,
  } = useContext(CartContext);
  const [data, setData] = useState("");
  const [button, setButton] = useState("ADD");
  const [editData, setEditData] = useState(false);
  const [editDataIndex, seteditDataIndex] = useState(0);

  // ADD FUNCTIONALITY
  const add = () => {
    setButton("ADD");
    if (data !== "") {
      if (editData) {
        setTodoList([
          ...todoList.filter((item, index) => {
            if (index == editDataIndex) {
              item.data = data;

              return item;
            }
            return item;
          }),
        ]);
        setEditData(false);
      } else {
        setTodoList([
          ...todoList,
          {
            id: count,
            data: data,
            status: "incomplete",
          },
        ]);
        setCount(count + 1);
      }

      setData("");
    }
  };

  //  EDIT FUNCTIONALITY
  const edit = (event) => {
    todoList.filter((item, index) => {
      if (index == event.currentTarget.id) {
        setData(item.data);
        setButton("UPDATE");
        setEditData(true);
        seteditDataIndex(index);
      }
    });
  };

  // DELETE FUNCTIONALITY
  const remove = (event) => {
    setTodoList(
      todoList.filter((item, index) => {
        return index != event.currentTarget.id;
      })
    );
  };

  // CHECKED FUNCTIONALITY
  const checked = (event) => {
    // debugger;
    setTodoList(
      todoList.filter((item, index) => {
        if (event.currentTarget.id == index) {
          item.status = "Complete";
          return item;
        }
        return item;
      })
    );
  };

  const checkedComp = (event) => {
    setTodoList(
      todoList.filter((item, index) => {
        if (event.currentTarget.id == index) {
          item.status = "incomplete";
          return item;
        }
        return item;
      })
    );
  };

  console.log(todoList);
  return (
    <div className="container">
      <h2>TODO LIST</h2>
      <h3>Add Item</h3>
      <p>
        <input
          id="new-task"
          type="text"
          value={data}
          onChange={(event) => setData(event.target.value)}
        />
        <button id="add" onClick={add}>
          {button}
        </button>
      </p>

      <h3>Todo</h3>
      <ul id="incomplete-tasks">
        {todoList.map((item, index) => {
          return item.status == "incomplete" ? (
            <li key={index}>
              <input
                className="check"
                id={index}
                type="checkbox"
                onClick={checked}
              />
              <label>{item.data}</label>
              <input type="text" />
              <button id={index} className="edit" onClick={edit}>
                Edit
              </button>
              <button id={index} className="delete" onClick={remove}>
                Delete
              </button>
            </li>
          ) : null;
        })}
      </ul>

      <h3>Completed</h3>
      <ul id="completed-tasks">
        {todoList.map((item, index) => {
          return item.status == "Complete" ? (
            <li key={index}>
              <input type="checkbox" checked id={index} onClick={checkedComp} />
              <label>{item.data}</label>
              <input type="text" />
              <button className="edit" onClick={edit}>
                Edit
              </button>
              <button className="delete" onClick={remove}>
                Delete
              </button>
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
};

export default Todo;
