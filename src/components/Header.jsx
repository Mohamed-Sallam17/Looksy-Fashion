import SearchIcon from '../assets/search-icon.svg?react'
import CartBag from '../assets/cart-bag.svg?react'
import brandLogo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { IoIosArrowDown, IoIosMenu } from 'react-icons/io'
import { useGetCategoriesQuery } from '../rtk/slices/products-slice'

function Header() {
  const { data: categoriesResponse, isError, isLoading } = useGetCategoriesQuery();
        if(isLoading){
            return <h4>جاري تحميل المنتجات ....</h4>
        }
        if(isError){
            return <h4>حدث خطأ: {isError.message}</h4>
        }
        
  return (
    <header className='bg-transparent w-full z-50 backdrop-blur-xl'>
      <div className="container space-y-1.5">
        <div className="m-search-bar flex items-center gap-2 lg:hidden border-2 border-[var(--btn-color)] rounded-3xl h-10 p-2">
          <SearchIcon width={22} height={22} className=''/>
          <input type="search" placeholder='Type to search....' className='w-full outline-none'/>
        </div>
        <div className="main-menu flex justify-between items-center ">
          <div className="header__left flex items-center lg:inline-block gap-2">
            <SearchIcon width={20} height={20} className='hidden lg:inline-block' />
            <CartBag width={20} height={20} className='lg:hidden'/>
          </div>
          <nav className="header__nav flex flex-1 justify-evenly items-center">
            <div className="nav__group hidden lg:flex justify-evenly ">
              <Link to="/" className='py-2'>Home</Link>
              <Link to="/shop" className='py-2'>shop</Link>
            </div>
            <div className="header__logo">
              <Link to="/">
                <img src={brandLogo} alt="Brand Logo" />
              </Link>
            </div>
            <div className="nav__group hidden lg:flex justify-evenly">
              <div className='flex items-center gap-0.5 cat-menu relative group py-2'>
                <Link to="/" className='flex items-center gap-0.5'>
                  <span>Categories</span>
                  <IoIosArrowDown />
                </Link>
                <div className="sub-menu lg:absolute lg:w-max z-50 top-full left-0 hidden group-hover:block pt-4">
                  <ul className='bg-white p-4 grid grid-cols-2 gap-2 shadow-lg rounded-md border border-gray-100'>
                    {
                      categoriesResponse?.map((category) => (
                        <li className='mb-2 p-1 hover:bg-gray-50 rounded transition-colors' key={category.slug}>
                          <Link to={`/category/${category.slug}`} className='text-gray-700 hover:text-[var(--hover-color)] block text-sm'>
                            {category.name}
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>

              <Link to="/about" className='py-2'>About</Link>
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