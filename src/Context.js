import { createContext, useState } from "react";
const CartContext = createContext();

export function MyProvider({ children }) {
  const [userName, setUserName] = useState("USERNAME");
//   TODO 
  const [todoList, setTodoList] = useState([]);
  const [count, setCount] = useState(1);
  const [comp, setComp] = useState([]);
  const [compCount,setcompCount] = useState(1)
  return (
    <CartContext.Provider
      value={{
        userName,
        setUserName,
        todoList,
        setTodoList,
        count,
        setCount,
        comp,
        setComp,
        compCount,
        setcompCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartContext;
