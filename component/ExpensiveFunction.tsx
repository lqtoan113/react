import React from 'react';

interface ExpensiveFunctionProps {
  number: number;
}

const ExpensiveFunction: React.FC<ExpensiveFunctionProps> = ({ number }) => {
  console.log('Bắt đầu');

  console.log('Kết thúc');

  return (
    <div>
      <h2>Expensive Function</h2>
      <p>Kết quả: {number * number}</p>
    </div>
  );
};

export default ExpensiveFunction;
