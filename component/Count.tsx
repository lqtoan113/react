import React, { useState, useEffect } from 'react';
const Counter: React.FC = () => {


  const [count, setCount] = useState<number>(0);
  // const [action, setAction] = useState<string>('');


  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log('Count has changed', count);
  }, [count]);

  // useEffect(() => {
  //   console.log(`Action changed ${action}`);
  //   fetch(`https://reqres.in/api/${action}`)
  //     .then((res) => res.json())
  //     .then((data) => console.log({ data }))
  //     .catch((err) => console.log({ err }));
  // }, [action]);

  return (
    <div>
      <h1>Yoy clicked {count} times</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
      {/* <button onClick={() => setAction('users')}>Get User</button>
      <button onClick={() => setAction('comments')}>Get Comment</button> */}
    </div>
  );
};

export default Counter;

