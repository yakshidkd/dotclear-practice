import React from 'react'
import NorthWestSharpIcon from '@mui/icons-material/NorthWestSharp';
import WestSharpIcon from '@mui/icons-material/WestSharp';
import HomeImg from '../assets/dotclear-new-home.png';
import WhoWe from '../Component/WhoWe';
import ProductBanner from '../assets/dor-banner_svg.svg'


const Home = () => {
  return (
    <>
      <div className="say-hello px-48 pt-20">
        <div className="container">
          <div className='flex items-center justify-center flex-col'>
            <h1 className='text-[45px] capitalize font-medium text-center'>Say hello to accountant-less accounting <br/> Transforming Accounting with Automation</h1>
            <p className='py-4 font-medium text-[17px]'>Navigate the complex world of Accounting and regulatory Compliance like a pro</p>
            <div className='flex gap-x-3 mt-4'>
              <button className='darkbtn text-sm py-2 px-4'>Contact us <WestSharpIcon className='text-sm'/></button>
              <button className='borderbtn text-sm py-2 px-4'>Book a Demo <NorthWestSharpIcon className="text-sm"/></button>
            </div>
            <div className='mt-16 -m-48'>
              <img src={HomeImg} alt="" className='' />
            </div>
          </div>
        </div>
      </div>
      <div className='who-we bg-[var(--primary-light)] pt-60 pb60'>
        <WhoWe/>
      </div>
      <div className='product-feature ptb60 px-48'>
        <div className="container">
          <h1 className='sub-heading mb-5'>Product Features</h1>
          <img src={ProductBanner} alt="" className='mt-10' />
        </div>
      </div>
      <div className="client-say bg-[var(--primary-light)] ptb60">
        <div className='px-48'>
          <div className="container">
            <div>
              <h2 className='sub-heading mb-5'>What our clients says about us</h2>
              <p className='font-medium'>Welcome to Dotclear, where accounting meets innovation. Our AI-driven, cloud-based solution revolutionizes financial management, providing unmatched efficiency and ease. Trusted by a diverse range of businesses, from dynamic startups to established corporations, Dotclear simplifies compliance and enhances clarity. Read on to see how our clients have transformed their accounting processes with us..</p>
            </div>
            <div>
              <div>
                <button className='py-3'>
                  <h6 className='text-bold'>Trendikas Trading</h6>
                  <p>At Trendikas Trading Private Limited, managing our customer data…</p>
                </button>
                <button className='py-3'>
                  <h6 className='text-bold'>Trendikas Trading</h6>
                  <p>At Trendikas Trading Private Limited, managing our customer data…</p>
                </button>
                <button className='py-3'>
                  <h6 className='text-bold'>Trendikas Trading</h6>
                  <p>At Trendikas Trading Private Limited, managing our customer data…</p>
                </button>
              </div>
              <div>
                <div>
                  <p> At Trendikas Trading Private Limited, managing our customer data and ensuring compliance is crucial. Dotclear has transformed the way we handle our finances. We can store and access all client information seamlessly, making customer relationship management much easier. Creating and tracking invoices used to be a hassle, but now it’s automated and synced with our systems, saving us a lot of time. The dashboard is user-friendly and gives us a clear view of our financial health, allowing us to make informed decisions quickly. Additionally, Dotclear handles all our GST compliance needs, ensuring we meet all legal requirements without any stress. This software has truly streamlined our business operations and enhanced our efficiency</p>
                  <h4>Trendikas Trading Private Limited</h4>
                  <p>IT Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='welcome-dotclear ptb60 px-56'>
      <div className="container">
        <h2 className='sub-heading mb-5'>Welcome to Dotclear</h2>
        <p className='font-medium'>In a world where complexity clouds every corner of the business landscape, Dotclear emerges as the beacon of simplicity, the champion of clarity. We are not just software; we are the architects of a revolution, the architects of your freedom from the shackles of accounting chaos.</p>
        <p className='font-medium py-3'>At Dotclear, we understand the weight of compliance woes, the burden of manual processes, and the fog of uncertainty that shrouds your financial journey. That’s why we’ve crafted a solution that not only simplifies but transforms the way you manage your accounts.</p>
        <p className='font-medium'>Dotclear empowers start-ups to large-scale enterprises navigate the complex landscape of regulations, to streamline the tangled web of transactions, and to envision a future where accounting is not a headache but a catalyst for growth.</p>
      </div>
      </div>
    </>
  )
}

export default Home
