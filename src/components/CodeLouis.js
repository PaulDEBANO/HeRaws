import "./styles.css";
import { useState } from "react";

export default function App() {
  let elems = ["test1", "test2", "test3"];
  let [checked, setChecked] = useState([]);
  const handleCheck = (el) => {
    if (el.target.checked) {
      setChecked((old) => [...old, { name: el.target.id, value: 0 }]);
    } else {
      setChecked((old) => old.filter((x) => x.name !== el.target.id));
    }
  };
  const addElem = (el) => {
    setChecked((old) => {
      old[el.target.id].value++;
      return old;
    });
  };
  return (
    <>
      {elems.map((el) => {
        return (
          <div key={el}>
            <input type="checkbox" name={el} id={el} onChange={handleCheck} />
            <label htmlFor={el}>{el}</label>
          </div>
        );
      })}
      {[...checked].map((el, index) => (
        <div style={{ display: "flex" }}>
          {el.name}
          <input type="button" id={index} onClick={addElem} value={el.value} />
        </div>
      ))}
    </>
  );
}