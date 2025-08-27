import React from 'react'
import { Logo } from '../assets/assets'
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';



const Footer = () => {
  const QuickLinks =[
    {name: "About us", path: '/about'},
    {name: "Features", path: '/features'},
    {name: "Blogs", path: '/blogs'},
    {name: "Pricing", path: '/pricing'},
    {name: "FAQ’s", path: '/faq'},
    {name: "Contact Us", path: '/contact'}
  ]
  const Gettouch =[
    {name: "tel:011-40755201", path: ' 011-40755201', infoicon: <PhoneIcon/>},
    {name: "hello@dotclear.io", path: 'mailto:hello@dotclear.io', infoicon: <MailIcon/> },
    {name: "D-58, Basement, Kalkaji, New Delhi 110019", path: '/', infoicon: <LocationOnIcon/>}
  ]
  return (
    <footer className=''>
      <div className="px-48 border-t-2 border-t-stone-50 pt-12 pb-5 border-solid">
        <div className='container'>
          <div className='grid grid-cols-12 gap-5 mt20'>
            <div className='col-span-12 md:col-span-4 lg:col-span-3'>
              <img src={Logo} alt="" className='w-60 mb-5'/>
              <p className='text-[15px] font-[600] text-justify'>Helping small and medium size businesses in India succeed by automating t heir day to day accounting and compliance to enable them to focus on core business functions thereby driving greater business value.</p>
            </div>
            <div className='col-span-12 md:col-span-4 lg:col-span-3 justify-self-center'>
              <h6 className='footerhead'>Quick Links</h6>
              <ul className='mt-6'>
                {QuickLinks.map((quickitem, id)=>(
                  <li key={id}>
                    <a className='font-[600] block py-1 text-[14px] text[var(--head-color)]' href={quickitem.path}>{quickitem.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='col-span-12 md:col-span-4 lg:col-span-3'>
              <div>
                <h6 className='footerhead'>Get in Touch</h6>
                <ul className='mt-6'>
                  {Gettouch.map((touchlink, id)=>(
                    <li key={id}>
                      <span>{touchlink.infoicon}</span>
                      <a className='font-[600] block py-1 text-[14px] text[var(--head-color)]' href={touchlink.path}>{touchlink.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-6'>
                <h6 className='footerhead'>Social Links</h6>
                <ul className='flex items-center gap-x-5 mt-3'>
                  <li><a className='footer-icon' href=""><XIcon className='p-1'/></a></li>
                  <li><a className='footer-icon' href=""><YouTubeIcon className='p-1'/></a></li>
                  <li><a className='footer-icon' href=""><LinkedInIcon className='p-1'/></a></li>
                </ul>
              </div>
            </div>
            <div className='col-span-12 md:col-span-4 lg:col-span-3'>
              <h5>Ready to transform your accounting with automation?</h5>
              <button className='bluedarkbtn'>Book a demo</button>
              <img src="https://dotclear.io/wp-content/uploads/2024/06/Frame.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer