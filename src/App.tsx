import React, { useCallback, useMemo, useState } from 'react';
// import { ThemeProvider } from '../component/ThemeContext'; // Import ThemeProvider
import ChildComponent from '../component/ChildComponent'; // Import ChildComponent
import Count from '../component/Count';
import ExpensiveFunction from '../component/ExpensiveFunction';


interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const App: React.FC = () => {
  const [action, setAction] = useState<string>('dosomething');
  const [num, setNum] = useState<number>(1);
  const [users, setUsers] = useState<User[]>([]); // Mảng các User


  const getData = useCallback((type: string) => {
    return fetch(`https://reqres.in/api/${type}`);
  }, []);

  const handleClick = () => {
    getData('users')
      .then((res) => res.json())
      .then((res) => {
        const users = res.data;
        setUsers(users);
      })
  }

  const number = useMemo(() => {
    return <ExpensiveFunction number={num} />
  }, [num]);



  return (
    <div>
      <h1>Welcome to the Theme App</h1>
      <Count />
      {/* <ThemeProvider>
        <ChildComponent />
      </ThemeProvider> */}
      <h1>Action: {action}</h1>
      <button onClick={() => setAction("DoSOME Thing")}>Do Something 1</button>
      <button onClick={() => setAction("DoSome Thing")}>Do Something 2</button>
      <h2>{number}</h2>
      <button onClick={() => setNum(20)}>Set Num</button>

      <h2>Data</h2>
      <button onClick={handleClick}>Get Users Data</button>
      <p>{JSON.stringify(users)}</p>
      <ChildComponent getData={getData} />
    </div>

  );
};

export default App;

