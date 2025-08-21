import React from 'react'
import NorthWestSharpIcon from '@mui/icons-material/NorthWestSharp';
import WestSharpIcon from '@mui/icons-material/WestSharp';

const WhoWe = () => {
  return (
    <div className='px-56'>
      <div className="container">
        <h2 className='sub-heading mb-5'>Who we are?</h2>
        <p className='font-bold'>A smart secured cloud based accounting solution crafted for your business.</p>
        <p className='font-medium py-3'>For those embarking on entrepreneurial journeys or managing existing businesses, the tasks of organizing finances, handling invoices, and staying compliant with tax laws can be quite daunting. If you re on the lookout for a solution that s both dynamic and efficient, your quest ends here.</p>
        <p className='font-medium'>Dotclear is India s first innovative startup dedicated to automating your accounting and compliance needs with minimal manual effort. Our comprehensive services cover everything from managing invoices and vendor relationships to ensuring tax compliance, generating financial statements, handling employee expenses and overseeing documentation and billing processes all in real time.</p>
        <div className='flex items-center justify-center gap-x-3 mt-4'>
            <button className='darkbtn text-sm py-2 px-4'>Contact us <WestSharpIcon className='text-sm'/></button>
            <button className='borderbtn text-sm py-2 px-4'>Book a Demo <NorthWestSharpIcon className="text-sm"/></button>
        </div>
        <div className='mt-10'>
          <iframe
            className="w-full h-96 border-4 border-solid border-black"
            src="https://www.youtube.com/embed/lZPO5RclZEo?si=rw9TxJO55OaH-iT1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default WhoWe
