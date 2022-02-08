import { click } from '@testing-library/user-event/dist/click';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  
  const [click, setClick] = useState(false);  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo">
                    Baumkrafft <i className='fab fa-typo3' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/kontakt' className='nav-links' onClick={closeMobileMenu}>
                            Kontakt
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/bilder' className='nav-links' onClick={closeMobileMenu}>
                            Bilder
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default NavBar;
