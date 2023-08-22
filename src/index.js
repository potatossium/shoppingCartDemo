import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 设置移动端适配: vw为视口宽度，750则是整个视口宽度为 750 rem
document.documentElement.style.fontSize = 100/750 + 'vw'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
