import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import "./style.css";
const Navbar = ({ searchFilter, setSearchFilter }) => {
  return (
    <div className='container'>
      <div className='left'>
        <div className='leftContainer'>
          <div className='logo'>bookMymovie</div>
          <div className='searchContainer'>
            <div className='searchField'>
              <input
                value={searchFilter}
                onChange={(event) => setSearchFilter(event.target.value)}
                type='text'
                placeholder='Search for Movies'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='right'>
        <div className='rightContainer'>
          <div className='locationDropdown'>
            <select name='location' id='location'>
              <option value='tinsukia'>Tinsukia</option>
              <option value='tinsukia'>Dibrugarh</option>
              <option value='tinsukia'>Sibsaghar</option>
            </select>
          </div>
          <div className='signIn'>
            <Link to='/signIn' className='signInLink'>
              Sign In
            </Link>
          </div>
          <div className='sidebar'>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
