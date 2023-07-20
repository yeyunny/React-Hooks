import { SetStateAction, useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const [isTrue, setIsTrue] = useState(false);
  const [obj, setObj] = useState({
    name: "",
    number: 0,
  });

  const plus = () => {
    //계속 count를 불러서 +1 을 해줘야한다
    setCount(count + 1);
    // setCount(()=>{}) 콜백함수로 처리하면 count를 안불러와도 된다
    // setCount((prev)=> prev+1)
  };
  // 콜백으로 연습해봐!setCount(()=>{}) 여기서 이게 콜백이야 ()=>{}
  const minus = () => {
    setCount(count - 1);
  };
  //주석 부분도 콜백으로 연습! 화면에 true false 가 바뀔거야 버튼 누르면
  const trueFalseHandler = () => {
    setIsTrue((prev) => !prev);
  };

  const input = (e: { target: { value: SetStateAction<string> } }) => {
    setValue(e.target.value);
  };

  const objHandler = (e: {
    target: {
      name: any;
      value: SetStateAction<string>;
    };
  }) => {
    setObj((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div>
      <div>
        <button onClick={minus} type="button">
          -
        </button>
        {count}
        <button onClick={plus} type="button">
          +
        </button>
      </div>

      <div>
        {isTrue ? "true" : "false"}
        <button onClick={trueFalseHandler} type="button">
          BOOLEAN
        </button>
      </div>

      <div>
        <p>{value}</p>
        <input onChange={input} type="text" />
        <button>입력</button>
      </div>

      <div>
        <p>{obj.name}</p>
        <input name="name" onChange={objHandler} type="text"></input>
        <p>{obj.number}</p>
        <input name="number" onChange={objHandler} type="number"></input>
      </div>
    </div>
  );
}

export default UseState;
