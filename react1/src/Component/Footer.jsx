import React from 'react'
import { Logo } from '../assets/assets'

const Footer = () => {
  const QuickLinks =[
    {name: "About us", path: '/about'},
    {name: "Features", path: '/features'},
    {name: "Blogs", path: '/blogs'},
    {name: "Pricing", path: '/pricing'},
    {name: "FAQ’s", path: '/faq'},
    {name: "Contact Us", path: '/contact'}
  ]
  return (
    <footer>
      <div className="container">
        <div>
          <div>
            <div>
              <img src={Logo} alt="" />
              <p>Helping small and medium size businesses in India succeed by automating t heir day to day accounting and compliance to enable them to focus on core business functions thereby driving greater business value.</p>
            </div>
            <div>
              <ul>
                {QuickLinks.map((item, id)=>(
                  <li key={id}>
                    <a href={item.path}>{item.name}</a>
                    <h6>Hello Footer</h6>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
