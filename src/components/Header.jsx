import SearchIcon from '../assets/search-icon.svg?react'
import CartBag from '../assets/cart-bag.svg?react'
import brandLogo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { IoIosMenu } from 'react-icons/io'


function Header() {
  return (
    <header className='bg-transparent fixed w-full'>
      <div className="container space-y-1.5">
        <div className="m-search-bar flex items-center gap-2 lg:hidden border-2 border-[var(--btn-color)] rounded-3xl h-10 p-2">
          <SearchIcon width={22} height={22} className=''/>
          <input type="search" placeholder='Type to search....' className='w-full outline-none'/>
        </div>
        <div className="main-menu flex justify-between items-center ">
          <div className="header__left flex lg:inline-block gap-2">
            <SearchIcon width={20} height={20} className='hidden lg:inline-block' />
            <CartBag width={20} height={20} className='lg:hidden'/>
          </div>
          <nav className="header__nav flex flex-1 justify-evenly items-center">
            <div className="nav__group hidden lg:flex justify-evenly ">
              <Link to="/">Home</Link>
              <Link to="/shop">shop</Link>
            </div>
            <div className="header__logo">
              <Link to="/">
                <img src={brandLogo} alt="Brand Logo" />
              </Link>
            </div>
            <div className="nav__group hidden lg:flex justify-evenly">
              <Link to="/">Categories</Link>
              <Link to="/about">About</Link>
            </div>
          </nav>
          <div className="header__right">
            <CartBag width={20} height={20} className='hidden lg:inline-block'/>
            <IoIosMenu className='lg:hidden text-2xl text-bold' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
