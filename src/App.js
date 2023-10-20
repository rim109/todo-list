// import logo from './logo.svg';
// import './App.css';
// import { useState } from "react";

// function App() {
//   //REACT WAY
//   const [todos,setTodos] = useState({});

//   //STATE 변화하는 값
//   //REACT  -> STATE가 변할때마다 화면을 다시 그린다.
//   //["할일1","할일2"]
//   return (
//     //jsx(js->HTML)
//     <div className="App">
//       <h1>TODO LIST</h1>
//       <div>
//         <input />
//         <button>ADD</button>
//       </div>
//       {/*DRY DON'T REPEAT YOURSELF*/}

//       {todos.map((todo,index) => (
//         <div key={index}>
//           <input type = "checkbox" />
//           <span>{todo}</span>
//           <button>DEL</button>
//       </div>
//       ))}
//     </div>
//   );
// }

// export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import { useState } from "react";

// function App() {
//   // react way
//   const [inputValue, setInputValue] = useState("개구리");
//   const [todos, setTodos] = useState(["할일 1", "할일 2"]);
//   // state 변화하는 값
//   // React -> state가 변할때마다 화면을 다시 그린다.
//   // ["할일 1", "할일 2"];

//   return (
//     // JSX (JS -> HTML)
//     <div className="App">
//       <h1>TODO LIST</h1>
//       <div>
//         <input 
//         //input의 제어권을 React(JS)가 가지고 있을 수 있도록, state 값을 주입했다.
//         value={inputValue} 
//         //input의 값이 변하는 이벤트가 발생했을 때, 제어권을 가진 React(JS)의 state값을 변경한다.
//         onChange={(e) => {
//           setInputValue(e.target.value);
//         }}
//       />
//         <button onClick={() = {
//           SetTodos ([...todos,inputValue]);
//         }}>ADD</button>
//       </div>
//       {/* DRY Don't Repeat Yourself */}
//       {todos.map((todo, index) => (
//         <div key={index}>
//           <input type="checkbox" />
//           <span>{todo}</span>
//           <button>DEL</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

import { v4 as uuid } from "uuid";
import "./App.css";
import { useState } from "react";

// camelcase -> 띄어씌기가 필요한 곳에 대문자로 표시한다
// ex) background-color -> backgroundColor
//     font-size -> fontSize
function App() {
  // react way
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState(
    Array.from({ length: todos.length }, () => false)
  );
  // state 변화하는 값, 임시 값
  // React -> state가 변할때마다 화면을 다시 그린다.
  // ["할일 1", "할일 2"];
return (
    // JSX (JS -> HTML)
    <div className="App">
      <h1>TODO LIST</h1>
      <div>
        {/* () => {} */}
        <input
          // Input의 제어권을 React(JS)가 가지고 있을 수 있게, state값을 주입했다.
          value={inputValue}
          // Input의 값이 변하는 이벤트가 발생했을 때, 제어권을 가진 React(JS)의 state값을 변경한다.
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            // spread 연산자
            setTodos([...todos, inputValue]);
            setInputValue("");
          }}
        >
          ADD
        </button>
      </div>
      {/* DRY Don't Repeat Yourself */}
      {/* [할일 1, 할일 2]  */}
{todos.map((todo, index) => (
        <div key={index}>
          <input
            type="checkbox"
            value={doneTodos[index]}
            onChange={(e) => {
              const nextDoneTodos = doneTodos.map((isDone, idx) =>
                idx === index ? e.target.checked : isDone
              );
              setDoneTodos(nextDoneTodos);
            }}
          />
          <span>{todo}</span>
          <button>DEL</button>
        </div>
      ))}
    </div>
  );
}

export default App;

