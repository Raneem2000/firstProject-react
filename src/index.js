// import react from 'react';
import reactDOM from 'react-dom/client';
import App from './App';

// reactDOM.createRoot('hello world',document.getElementById('root'));
const text = reactDOM.createRoot(document.getElementById('root'));
// text.render(<h1>hello world</h1>);

text.render(<App />);