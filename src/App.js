import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import './App.css';
import { SzallasListPage } from './SzallasListPage';
import { SzallasSinglePage } from './SzallasSinglePage';
import { SzallasCreatePage } from './SzallasCreatePage';
import { SzallasModPage } from './SzallasModPage';
import { SzallasDeletePage } from './SzallasDeletePage';

function App() {
  return (
    <Router>
       <nav className="navbar navbar-expand-sm navbar-light bg-warning">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
           <NavLink to={`/`} className="nav-link">
              <span className="nav-link">Szállások</span>
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to={`/post`} className="nav-link">
              <span className="nav-link">Új szállás</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
          <Route path='/get-all' element={<SzallasListPage/>} />
          <Route path='/get/:szallasId' element={<SzallasSinglePage/>} />
          <Route path="/post" element={<SzallasCreatePage/>} />
          <Route path="/put/:szallasId" element={<SzallasModPage/>} />
          <Route path="/delete/:szallasId" element={<SzallasDeletePage/>} />
          <Route path='*' element={<SzallasListPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
