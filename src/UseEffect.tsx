import { useEffect, useState } from "react";

function UseEffect() {
  const [test, setTest] = useState<number>(1);
  const [inEffect, setInEffect] = useState<number>(0);
  console.log("hi");
  console.log(`나는 이펙트 실행을 알려줘 ${inEffect}`);
  // useEffect(()=>{},[]) 이게 useEffect 모양이야 useEffect는 가장 먼저 실행됩니다.
  // []이부분은 의존성배열로 저안에 값이 바뀌면 useEffect가 다시 실행됩니당
  // useEffect(() => {
  //   console.log(1);
  // }, []);

  useEffect(() => {
    console.log("테스트", test);
    setInEffect((prev) => prev + 1);
  }, [test]);

  const up = () => {
    setTest((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={up} type="button">
        {test}
      </button>
    </div>
  );
}

export default UseEffect;
