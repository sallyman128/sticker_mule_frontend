import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li><Link to="/custom-stickers">Products</Link></li>
          <li><Link to="custom-stickers">Stickers</Link></li>
          <li><Link to="/custom-labels">Labels</Link></li>
          <li><Link to="products/custom-magnets">Magnets</Link></li>
          <li><Link to="/custom-buttons">Buttons</Link></li>
          <li><Link to="/custom-packaging">Packaging</Link></li>
          <li><Link to="products/custom-t-shirts">T-shirts</Link></li>
          <li><Link to="/more">More</Link></li>
        </ul>
        <ul>
          <li><Link to="/tools">Tools</Link></li>
          <li><Link to="/studio">Studio</Link></li>
          <li><Link to="/trace">Trace</Link></li>
          <li><Link to="/upscale">Upscale</Link></li>
          <li><Link to="/redraw">Redraw</Link></li>
          <li><Link to="/print">Print</Link></li>
          <li><Link to="/ship">Ship</Link></li>
        </ul>
        <ul>
          <li><Link to="/about">Company</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/press">Press</Link></li>
        </ul>
        <ul>
          <li><Link to="/about">Resources</Link></li>
          <li><Link to="/deals">Deals</Link></li>
          <li><Link to="/templates">Templates</Link></li>
          <li><Link to="/teams">Teams</Link></li>
          <li><Link to="/uses">Uses</Link></li>
          <li><Link to="/quick-order">Quick order</Link></li>
        </ul>
        <ul>
          <li><Link to="/support">Support</Link></li>
          <li><Link to="/support">Help</Link></li>
          <li><Link to="/returns">Returns</Link></li>
        </ul>
        <ul>
          <li>FlagIcon English (EN) $USD</li>
          <li>--------------</li>
          <li>
            <td><Link to="/sitemap" >Site map</Link></td>
            <td><Link to="/legal/privacy" >Privacy</Link> &amp; <Link to="/legal/terms">Terms</Link></td> 
          </li>
          <li>--------------</li>
          <li>Stimulus / Instagram / Youtube</li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
