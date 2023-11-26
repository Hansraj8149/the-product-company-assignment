import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [boxPosition, setBoxPosition] = useState({ left: 0, top: 0 });

  const handleMove = (direction) => {
    const moveAmount = 50;

    switch (direction) {
      case 'up':
        setBoxPosition((prevPosition) => ({ ...prevPosition, top: prevPosition.top - moveAmount }));
        break;
      case 'down':
        setBoxPosition((prevPosition) => ({ ...prevPosition, top: prevPosition.top + moveAmount }));
        break;
      case 'left':
        setBoxPosition((prevPosition) => ({ ...prevPosition, left: prevPosition.left - moveAmount }));
        break;
      case 'right':
        setBoxPosition((prevPosition) => ({ ...prevPosition, left: prevPosition.left + moveAmount }));
        break;
      default:
        break;
    }

   
  };

  return (
    <div id='root'>
      <div className='main_container'>
        <button className='horizontal' onClick={() => handleMove('up')} disabled={boxPosition.top <= 0}>
          Up
        </button>
        <div className='container'>
          <button className='vertical' onClick={() => handleMove('left')} disabled={boxPosition.left <= 0}>
            Left
          </button>
          <div className='main'>
            <div className='box' style={{ left: `${boxPosition.left}px`, top: `${boxPosition.top}px` }}></div>
          </div>
          <button className='vertical' onClick={() => handleMove('right')} disabled={boxPosition.left >=450}>
            Right
          </button>
        </div>
        <button className='horizontal' onClick={() => handleMove('down')} disabled={boxPosition.top >=450}>
          Bottom
        </button>
      </div>
    </div>
  );
};

export default App;
