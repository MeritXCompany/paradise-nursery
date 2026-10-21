import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from '../redux/CartSlice';
import { CartIcon, CloseIcon, LeafMark, MenuIcon } from './Icons';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/plants', label: 'Plants' },
  { to: '/about', label: 'About' },
];

export default function Navbar() {
  const totalQuantity = useSelector(selectTotalQuantity);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const itemLabel = `${totalQuantity} ${totalQuantity === 1 ? 'item' : 'items'} in cart`;

  return (
    <>
      <div className="announcement-bar">
        <div className="container announcement-inner">
          <span>Complimentary delivery on orders over $75</span>
          <span className="announcement-secondary">
            Grown with patience in Portland, Oregon
          </span>
        </div>
      </div>

      <header className="site-header">
        <div className="navbar container">
          <Link to="/" className="brand" aria-label="Paradise Nursery home" onClick={closeMenu}>
            <span className="brand-mark">
              <LeafMark />
            </span>
            <span className="brand-text">
              Paradise <em>Nursery</em>
            </span>
          </Link>

          <div className="nav-actions">
            <nav
              id="primary-navigation"
              className={`nav-links${isMenuOpen ? ' is-open' : ''}`}
              aria-label="Main navigation"
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <NavLink
              to="/cart"
              className={({ isActive }) => `nav-cart${isActive ? ' is-active' : ''}`}
              onClick={closeMenu}
              aria-label={`Shopping cart, ${itemLabel}`}
            >
              <CartIcon />
              <span className="nav-cart-label">Cart</span>
              <span className="cart-count" aria-label={itemLabel} aria-live="polite">
                {totalQuantity}
              </span>
            </NavLink>

            <button
              type="button"
              className="nav-toggle"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="primary-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <button
            type="button"
            className="nav-backdrop"
            aria-label="Close navigation menu"
            tabIndex={-1}
            onClick={closeMenu}
          />
        )}
      </header>
    </>
  );
}
