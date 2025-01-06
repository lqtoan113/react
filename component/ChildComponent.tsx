import React, { useContext, useEffect, useState } from 'react';
// import ThemeContext from './ThemeContext'; // Import ThemeContext

// const ChildComponent1: React.FC = () => {
//   const theme = useContext(ThemeContext); // Lấy giá trị từ ThemeContext

//   return (
//     <div>
//       <h2>The current theme is: {theme}</h2> {/* Hiển thị theme hiện tại */}
//     </div>
//   );
// };



interface ChildComponentProps {
  getData: (endpoint: string) => Promise<Response>;
}

const ChildComponent: React.FC<ChildComponentProps> = ({ getData }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    console.log('Child Component Mounted');
    getData('comments')
      .then((res) => res.json())
      .then((res) => {
        const comments = res.data;
        setComments(comments);
      })
      .catch((err) => console.error(err));
  }, [getData]);

  return (
    <div>
      <p>Child Component</p>
      <p>{JSON.stringify(comments)}</p>
    </div>
  );
};

export default ChildComponent;


