import React from 'react'
import Copyright from './Copyright';

const Footer = () => {
  return (
    <div className="mainfooter">
        <div className="fisrtfooter">
            <div className='signfooter'>
                <div className='knowfooter'>
                    BE the first to know
                </div>
                <p>Sign up for updates from mettā muse. </p>
                <p className='hidden'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam iusto commodi nesciunt veritatis dicta, enim rerum.</p>
                <div className='inputfooter'>
                    <input type="text" name="footer" id="footer" placeholder='  Enter your Email...' />
                    <button className='btnfooter'>
                        Subscribe
                    </button>
                </div>
            </div>
            <hr className='hidden2'/>
            <div className='contactfooter'>
                <div className='cusfooter'>
                    <div>
                        Contact us 
                    </div>
                    <div>
                        +91 91089 68419 <span className='hidden1'>. customercare@gmail.com</span>
                    </div>
                    <div className='media1'>
                        customercare@gmail.com
                    </div>
                </div>
                <div className='currencyfooter'>
                    <div>
                        currency
                    </div>
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt=""  className='imgfooter'/> .USD
                    </div>
                    <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                </div>
            </div>
        </div>
        <hr className='hr2'/>
        <div className='secondfooter'>
            <div>
                <ul className="mettafooter nav">
                    <h5 className='flex'>mettā muse <i class="bi bi-caret-down-fill flex1"></i></h5>
                    <li className="">
                        <a  className=''>About Us</a>
                    </li>
                    <li className="">
                        <a  className=''>Stories</a>
                    </li>
                    <li className="">
                        <a  className=''>Artisans</a>
                    </li>
                    <li className="">
                        <a  className=''>Boutiques</a>
                    </li>
                    <li className="">
                        <a  className=''>Contact Us</a>
                    </li>
                    <li className="">
                        <a  className=''>EU Compliances Docs</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="quickfooter nav">
                    <h5 className='flex'>Quick Links<i class="bi bi-caret-down-fill flex1"></i></h5>
                    <li className="">
                        <a  className=''>Orders & Shipping</a>
                    </li>
                    <li className="">
                        <a  className=''>Join/Login as a Seller</a>
                    </li>
                    <li className="">
                        <a  className=''>Payment & Pricing</a>
                    </li>
                    <li className="">
                        <a  className=''>Return & Refunds</a>
                    </li>
                    <li className="">
                        <a  className=''>FAQs</a>
                    </li>
                    <li className="">
                        <a  className=''>Privacy Policy</a>
                    </li>
                    <li className="">
                        <a  className=''>Terms & Conditions</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="followusfooter nav">
                    <h5 className='flex'>Follow Us <span className=''><i class="bi bi-caret-down-fill flex1"></i></span></h5>
                    <li>
                        <div className="circle">
                            <div>
                                <i className='bi bi-instagram'></i>
                            </div>
                            <div>
                                <i className='bi bi-linkedin'></i>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className='accepfooter'>
                    <h5>
                        mettā muse Accepts
                    </h5>
                    <div className='imagefooter'>
                        <li>
                            <img src="https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2023/04/google-pay-1680875397.jpg" alt="" />
                        </li>
                        <li>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Maestro_logo.svg/126px-Maestro_logo.svg.png" alt="" />
                        </li>
                        <li>
                            <img src="https://w7.pngwing.com/pngs/632/1015/png-transparent-paypal-logo-computer-icons-payment-paypal-blue-angle-service-thumbnail.png" alt="" />
                        </li>
                        <li>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDwq7Nu971X79BB0RjgvrlJzup5kPz10tFYqEwOOvTXZBPyATrsH0TDKC2M6QqbmH-hR4&usqp=CAU" alt="" />
                        </li>
                        <li>
                            <img src="https://developer.apple.com/news/images/og/apple-pay-og-twitter.jpg" alt="" />
                        </li>
                    </div>
                </div>
            </div>
            <div className=''></div>
        </div>
        <Copyright />
        <div className='black'></div>
    </div>
  )
}

export default Footer