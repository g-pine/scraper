import Image from 'next/image'
import Link from 'next/link'
import { CiSearch } from "react-icons/ci";

// const navIcons = [
//     {src: '/public/assets/icons/search.svg', alt: 'search'},
//     {src: '/public/assets/icons/black-heart.svg', alt: 'black-heart'},
//     {src: '/public/assets/icons/user.svg', alt: 'user'}
// ]

const Navbar = () => {
  return (
    <header className='w-full'>
        <nav className='nav'>
            <Link href='/' className='flex items-center gap-1'>
                <Image
                    src='/public/assets/icons/logo.svg'
                    width={27}
                    height={27}
                    alt='logo'
                />
                <p className='nav-logo'>
                    Price<span className='text-primary'>Wise</span>
                </p>
            </Link>
            {/* <div className='flex items-center gap-5'>
                {navIcons.map((icon) => (
                    <Image
                        key={icon.alt}
                        src={icon.src}
                        alt={icon.alt}
                        width={27}
                        height={27}
                        className='object-contain'

                    />
                ))}
            </div> */}
            <div>
                <CiSearch />
            </div>
        </nav>
    </header>
  )
}

export default Navbar
