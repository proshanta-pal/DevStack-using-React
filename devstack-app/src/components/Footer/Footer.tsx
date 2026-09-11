import Logo from '../../assets/logo-text.png'

const Footer = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 lg:px-0 py-5'>
            <div className='flex flex-col lg:flex-row justify-between max-w-7xl mx-auto px-4 lg:px-0 py-5 space-y-4'>
                <div className='space-y-2 flex flex-col items-center lg:items-start'>
                    <img src={Logo} alt="DevStack Logo" />
                    <p className='text-center'>Curated tools, techlogies, and resources for developers building modern software.</p>
                    
                    <div className='flex gap-4 font-medium'>
                        <span className='cursor-pointer'>Github</span>
                        <span className='cursor-pointer'>Twitter</span>
                        <span className='cursor-pointer'>LinkedIn</span>
                    </div>
                </div>

                <div className="hidden lg:flex lg:flex-col lg:justify-start">
                    <h3 className='uppercase font-semibold text-lg'>Product</h3>
                    <ul className='text-gray-400 space-y-1'>
                        <li className='cursor-pointer'>Home</li>
                        <li className='cursor-pointer'>Technologies</li>
                        <li className='cursor-pointer'>Projects</li>
                    </ul>
                </div>

                <div className="hidden lg:flex lg:flex-col lg:justify-start">
                    <h3 className='uppercase font-semibold text-lg'>Company</h3>
                    <ul className='text-gray-400 space-y-1'>
                        <li className='cursor-pointer'>About</li>
                        <li className='cursor-pointer'>Contact</li>
                        <li className='cursor-pointer'>Careers</li>
                    </ul>
                </div>

                <div className="hidden lg:flex lg:flex-col lg:justify-start">
                    <h3 className='uppercase font-semibold text-lg'>Legal</h3>
                    <ul className='text-gray-400 space-y-1'>
                        <li className='cursor-pointer'>PrivacyPolicy</li>
                        <li className='cursor-pointer'>Terms and Services</li>
                    </ul>
                </div>
                

            </div>

            <div className='flex justify-between'>
                <p className='text-md text-gray-400'>&copy;2026 DevStack. All rights reserved</p>

                <div className='flex gap-5'>
                    <span className='text-md text-gray-400 cursor-pointer'>Privacy</span>
                    <span className='text-md text-gray-400 cursor-pointer'>Terms</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;