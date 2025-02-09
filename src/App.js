import { useState } from "react";

function UserInfo() {
  const [name, setName] = useState("에밀리");
  const [age, setAge] = useState(20);

  return (
    <div>
      <h2>이름: {name}</h2>
      <h2>나이: {age}</h2>
      <p>
        <button onClick={() => setAge(age + 1)}>나이 증가</button>
      </p>
      <button onClick={() => setAge(age - 1)}>나이 감소</button>
    </div>
  );
}

export default UserInfo;
