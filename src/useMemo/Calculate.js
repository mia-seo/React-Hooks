import React, { useMemo, useState } from "react";

const hardCalculate = (number) => {
  console.log("어려운 계산!");
  // 생각하는 시간
  return number + 10000;
};

const easyCalculate = (number) => {
  console.log("짱 쉬운 계산!");
  return number + 1;
};

function Calculate() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  // App 컴포넌트가 렌더링 될 때마다 hardCalculate 함수를 반복실행
  // const hardSum = hardCalculate(hardNumber);
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);
  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {hardSum}</span>

      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span> + 1 = {easySum}</span>
    </div>
  );
}

export default Calculate;
