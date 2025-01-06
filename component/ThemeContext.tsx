// import React, { createContext, ReactNode, useEffect, useState } from 'react';

// // Tạo Context với giá trị mặc định là 'light'
// const ThemeContext = createContext<string>('light');

// // Chỉ định type cho props, bao gồm cả children
// interface ThemeProviderProps {
//   children: ReactNode;
// }

// export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
//   const [theme, setTheme] = useState('light'); // State cho theme

//   useEffect(() => {
//     console.log('Theme has changed');
//   }, [theme]);

//   const toggleTheme = () => {
//     // Chuyển đổi theme giữa 'light' và 'dark'
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     // Cung cấp giá trị theme cho các component con
//     <ThemeContext.Provider value={theme}>
//       {children} {/* Render các component con bên trong ThemeProvider */}
//       <button onClick={toggleTheme}>Toggle Theme</button>

//     </ThemeContext.Provider>
//   );
// };

// export default ThemeContext;

