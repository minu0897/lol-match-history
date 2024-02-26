import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SearchAfter from './lolmatch/SearchAfter';
import SearchPage from './lolmatch/SearchPage';
import Navigator from './lolmatch/Navigator';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <BrowserRouter>
      <Navigator/>
      <Routes>
        <Route path='/' element={<SearchPage />} />
        <Route path='/search' element={<SearchAfter />} />
      </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
