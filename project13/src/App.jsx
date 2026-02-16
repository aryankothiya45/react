
// for practice of useEffect with cleanup function

// import { useState, useEffect } from 'react'
// import './App.css'

// function Time () {
//   const [text, setText] = useState('a');

//   useEffect(() => {
//     function onTimeout(){
//       console.log('⏰ ' + text);
//     }

//     console.log('🔵 Schedule "' + text + '" log');
//     const timeoutId = setTimeout(onTimeout, 3000);

//     return () => {
//       console.log('🔴 Cancel "' + text + '" log');
//       clearTimeout(timeoutId);
//     };
//   }, [text]);

//   return (
//     <>
//       <label>
//         what to log:
//         <input value={text} onChange={e => setText(e.target.value)} />
//       </label>
//       <h1>{text}</h1>
//     </>
//   );
// }

// function App() {
//   const [show, setShow] = useState(false);
//   return(
//     <>
//       <button onClick = {() => setShow(!show)}>
//         {show ? 'Unmount' : 'Mount'} the component
//       </button>
//       {show && <hr />}
//       {show && <Time />}
//     </>
//   );
// }

// export default App





//for practice of useEffect with empty dependency array

// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => { 
//       console.log('Component mounted', count);
//     if (count < 5) {
//       setCount( count + 1);
    
//       console.log('Count updated:', count);
//     }

//   },[]); 
//   console.log('Render:', count);
//   return (
//     <div>
//       <p>Count: {count}</p>
//     </div>
//   );
// };

// export default App;


