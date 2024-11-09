import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logo } from '../../assets'; // Ensure this path is correct

const Menulinks = [
  {
    title: 'dashboard',
    url: '/dashboard'
  },
  {
    title: 'products',
    url: '/dashboard/products'
  },
  {
    title: 'orders',
    url: '/dashboard/orders'
  },
];

const Navbar = () => {

    const location = useLocation();
    const currentPathname = location.pathname;


  return (
    <nav className='w-full h-full border-b-2 border-main'>
      <div className='w-11/12 mx-auto flex justify-between items-center'>
        <img className='h-20 w-20 object-cover' src={logo} alt="Logo" />
        {/* menu */}
        <ul className='md:flex gap-5 items-center hidden'>
          {Menulinks?.map((dt, i) => (
            <li className={`capitalize ${currentPathname === dt.url ? 'border-b-2 border-main' : 'border-b-2 border-transparent' }`} key={i}>
              <Link to={dt.url}>{dt.title}</Link>
            </li>
          ))}
        </ul>
        <button>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
