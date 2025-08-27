import React from 'react'
import { Logo } from '../assets/assets'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigation } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigation();
  return (
    <header className=''>
        <div className="top-header border-b-1 border-solid border-[var(--border-color)] py-2 px-48">
            <div className='container'>
                <div className="">
                    <ul className='flex items-center justify-end gap-x-5'>
                        <li><a onClick={()=> navigate('tel: +011-40755224')}   className='text-[var(--primary)] text-xs font-bold'><CallIcon style={{ fontSize: 15}}/> 011-40755224</a></li>
                        <li><a onClick={()=> navigate('mailto: hello@dotclear.io')} className='text-[var(--primary)] text-xs font-bold'><EmailIcon style={{ fontSize: 15}}/> hello@dotclear.io</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='bottom-header py-4 px-48'>
            <div className='container'>
                <div className="flex items-center justify-between">
                    <a onClick={()=>navigate('/')} ><img  src={Logo} className='w-36' alt="" /></a>
                    <div>
                        <ul className='flex items-center gap-x-10'>
                            <li><a onClick={()=>navigate('/about')} className='font-medium'>About</a></li>
                            <li><a onClick={()=>navigate('/features')} className='font-medium'>Features</a></li>
                            <li><a onClick={()=>navigate('/blogs')} className='font-medium'>Blogs</a></li>
                            <li><a onClick={()=>navigate('/pricing')} className='font-medium'>Pricing</a></li>
                            <li><a onClick={()=>navigate('/faq')} className='font-medium'>FAQ's</a></li>
                            <li><a onClick={()=>navigate('/contact')} className='font-medium'>Contact us</a></li>
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
