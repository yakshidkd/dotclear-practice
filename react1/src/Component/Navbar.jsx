import React from 'react'
import { Logo } from '../assets/assets'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigation } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigation();
  return (
    <header className=''>
        <div className="top-header border-b-1 border-solid border-[var(--border-color)] py-3 px-24">
            <div className='container'>
                <div className="">
                    <ul className='flex items-center justify-end gap-x-3'>
                        <li><a onClick={()=> navigate('tel: +91 8765432101')}   className='text-[var(--primary)] font-medium'><CallIcon/> +91 8765432101</a></li>
                        <li><a onClick={()=> navigate('mailto: abc@gmail.com')} className='text-[var(--primary)] font-medium'><EmailIcon/> abc@gmail.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='bottom-header py-4 px-24'>
            <div className='container'>
                <div className="flex items-center justify-between">
                    <a onClick={()=>navigate('/')} ><img  src={Logo} className='w-36' alt="" /></a>
                    <div>
                        <ul className='flex items-center gap-x-8'>
                            <li><a onClick={()=>navigate('/about')} className='font-bold'>About</a></li>
                            <li><a onClick={()=>navigate('/features')} className='font-bold'>Features</a></li>
                            <li><a onClick={()=>navigate('/blogs')} className='font-bold'>Blogs</a></li>
                            <li><a onClick={()=>navigate('/pricing')} className='font-bold'>Pricing</a></li>
                            <li><a onClick={()=>navigate('/faq')} className='font-bold'>FAQ's</a></li>
                            <li><a onClick={()=>navigate('/contact')} className='font-bold'>Contact us</a></li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <button onClick={()=>navigate('/')} className='darkbtn'>Book a Demo</button>
                        <button onClick={()=>navigate('/')} className='darkbtn'>Sign in</button>
                        <button onClick={()=>navigate('/')} className='borderbtn'>Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar
