import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Mule-Icon</Link>
          </li>
          <li>
            <Link to="/custom-stickers">Products</Link>
          </li>
          <li>
            <Link to="/tools">Tools</Link>
          </li>
          <li>
            <Link to="/samples">Samples</Link>
          </li>
          <li>
            <Link to="/deals">Deals</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/cart">Cart-Icon</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
