import Link from 'next/link'
import { MdOutlineSell } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
  return (
    <header className='w-full'>
        <nav className='nav'>
            <Link href='/' className='flex items-center gap-1'>
                <MdOutlineSell/>
                <p className='nav-logo'>
                    Price<span className='text-primary'>Wise</span>
                </p>
            </Link>
            <div className='flex items-center gap-10'>
                <CiSearch/>
                <CiHeart/>
                <CiUser/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
