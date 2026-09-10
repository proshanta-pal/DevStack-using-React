import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../../assets/logo-text.png'

const Navbar = () => {
    return (
        <div className='flex justify-between max-w-7xl mx-auto px-4 lg:px-0 py-5'>
            <GiHamburgerMenu className='block lg:hidden' />
            <img src={Logo} alt="DevStack Logo" />

            <div className='hidden lg:block'>
                <ul className='flex gap-4'>
                    <li className='text-[#d91b7e] cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>Technologies</li>
                    <li className='cursor-pointer'>Projects</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Contact</li>
                </ul>
            </div>

            <div className='flex gap-3'>
                <button className='cursor-pointer'>Sign In</button>
                <button className='text-white text-medium bg-[#d91b7e] rounded-3xl px-3 cursor-pointer shadow-md shadow-[#fbcfe8FF]'>Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;