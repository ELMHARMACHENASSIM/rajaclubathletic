

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import rajaLogo from '../assets/images/logos/logoraja.png'
import { faFacebook, faInstagram, faLinkedin, faThreads, faTiktok, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import pay1 from '../assets/images/pay/ampay.png';
import pay2 from '../assets/images/pay/cmi.png';
import pay3 from '../assets/images/pay/apppay.png';
import pay4 from '../assets/images/pay/gpay.png';
import pay5 from '../assets/images/pay/mastro.png';
import pay6 from '../assets/images/pay/mcard.png';
import pay7 from '../assets/images/pay/paypal.png';
import pay8 from '../assets/images/pay/skrill.png';
import pay9 from '../assets/images/pay/visa.png';
import storApp from '../assets/images/other/store.png';
const Footer = () => {
  return (
    <footer className="w-[100%] bg-dark h-[100%] pt-[30px]">
    <div className="Mycontainer py-[30px]">
        <div className=" w-[100%] flex justify-between items-center">
            <div className="w-[200px] h-[auto] flex items-center">
                <img src={rajaLogo} alt="" className="w-[100%] h-[100%]"/>
            </div>
            <div className="w-[auto] h-[auto] flex items-center gap-[10px]">
                <h1 className="text-white font-pB text-[20px]  m-0">#DIMARAJA</h1> <span
                    className="bg-white w-[1px] h-[30px]"></span>
                <h1 className="text-white font-pB text-[20px] m-0">#FORZARAJA</h1> <span
                    className="bg-white w-[1px] h-[30px]"></span>
                <h1 className="text-white font-pB text-[20px] m-0">#T3ICHRAJA</h1>
            </div>
            <form action="" className=" flex justify-start items-start flex-col gap-[15px]">
                <div className=" h-[40px] flex justify-start items-center">
                    <input type="text" placeholder="Email" className="h-[100%] w-[300px]"/>
                    <button type="submit" className="bg-green h-[100%] px-[10px] text-white">Subscribe</button>
                </div>
                <div className="flex h-[100%] justify-start items-start gap-[20px]  text-white">
                <FontAwesomeIcon icon={faFacebook} className='text-[30px]'/>
              <FontAwesomeIcon icon={faInstagram} className='text-[30px]'/>
              <FontAwesomeIcon icon={faYoutube} className='text-[30px]'/>
              <FontAwesomeIcon icon={faTiktok} className='text-[30px]'/>
              <FontAwesomeIcon icon={faXTwitter} className='text-[30px]'/>
              <FontAwesomeIcon icon={faThreads} className='text-[30px]'/>
              <FontAwesomeIcon icon={faLinkedin} className='text-[30px]'/>
                </div>

            </form>
        </div>

        <div className="w-[100%] flex justify-between items-start">
            <div className="w-[70%] pt-[40px] flex justify-start items-start gap-[20px]">
                <div className="w-[200px]">
                    <h1 className="text-green text-[15px]">Menu</h1>
                    <hr className="bg-white border-0 h-px my-[10px] opacity-[1] " />
                    <ul className="flex justify-start items-start flex-col gap-[10px]">
                        <li><a href="" className="text-white no-underline hover:underline">Home</a></li>
                        <li><a href="" className="text-white no-underline hover:underline">News</a></li>
                        <li><a href="" className="text-white no-underline hover:underline">Tickets</a></li>
                        <li><a href="" className="text-white no-underline hover:underline">Media</a></li>
                        <li><a href="" className="text-white no-underline hover:underline">Squads</a></li>
                        <li><a href="" className="text-white no-underline hover:underline">About</a></li>
                    </ul>
                </div>
                <div className="w-[200px]">
                    <h1 className="text-green text-[15px]">Shop</h1>
                    <hr className="bg-white border-0 h-px my-[10px] opacity-[1] " />
                    <ul className="flex justify-start items-start flex-col gap-[10px]">
                        <li><a href="" className="text-white no-underline hover:underline">First Kit</a></li>
                        <li><a href="" className="text-white no-underline hover:underline">Second kit</a></li>
                        <li><a href="" className="text-white no-underline hover:underline">Third kit</a></li>
                        <li><a href="" className="text-white no-underline hover:underline">Kit 2000 - 2023</a>
                        </li>
                        <li><a href="" className="text-white no-underline hover:underline">Accessory</a></li>

                    </ul>
                </div>
                <div className="w-[200px]">
                    <h1 className="text-green text-[15px]">Squads</h1>
                    <hr className="bg-white border-0 h-px my-[10px] opacity-[1] " />
                    <ul className="flex justify-start items-start flex-col gap-[10px]">
                        <li><a href="" className="text-white no-underline hover:underline">Men&apos;s First Team</a>
                        </li>
                        <li><a href="" className="text-white no-underline hover:underline">Women&apos;s First
                                Team</a></li>
                        <li><a href="" className="text-white no-underline hover:underline">Men&apos;s Team U20</a>
                        </li>
                        <li><a href="" className="text-white no-underline hover:underline">Women&apos;s Team U20</a>
                        </li>
                        <li><a href="" className="text-white no-underline hover:underline">Men&apos;s Team U17</a>
                        </li>

                    </ul>
                </div>
                <div className="w-[200px]">
                    <h1 className="text-green text-[15px]">News</h1>
                    <hr className="bg-white border-0 h-px my-[10px] opacity-[1] " />
                    <ul className="flex justify-start items-start flex-col gap-[10px]">
                        <li><a href="" className="text-white no-underline hover:underline">First Team&apos;s
                                News</a></li>
                        <li><a href="" className="text-white no-underline hover:underline">Transfer News</a>
                        </li>
                        <li><a href="" className="text-white no-underline hover:underline">Team U20 News</a>
                        </li>
                        <li><a href="" className="text-white no-underline hover:underline">Academy News</a>
                        </li>


                    </ul>
                </div>

            </div>
            <div className="w-[30%] flex justify-start items-start flex-col gap-[20px]">
                <div className="w-[100%] pt-[40px] flex justify-start items-start gap-[20px]">
                    <div className="w-[100%]">
                        <ul className="flex justify-start items-start flex-col gap-[10px]">
                            <li><a href="" className="text-white no-underline hover:underline">Contacts</a>
                            </li>
                            <li><a href="" className="text-white no-underline hover:underline">Privacy</a></li>
                            <li><a href="" className="text-white no-underline hover:underline">Legal Notes</a>
                            </li>
                            <li><a href="" className="text-white no-underline hover:underline">Terms of use</a>
                            </li>
                            <li><a href="" className="text-white no-underline hover:underline">Cookie
                                    Settings</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[100%] flex flex-wrap gap-[10px]">
                        <img src={pay1} alt=""
                            className="w-[50px] h-[40px] object-contain"/>
                        <img src={pay2} alt=""
                            className="w-[50px] h-[40px] object-contain"/>
                        <img src={pay3} alt=""
                            className="w-[50px] h-[40px] object-contain"/>
                        <img src={pay4} alt=""
                            className="w-[50px] h-[40px] object-contain"/>
                        <img src={pay5} alt=""
                            className="w-[50px] h-[40px] object-contain"/>
                        <img src={pay6} alt=""
                            className="w-[50px] h-[40px] object-contain"/>
                        <img src={pay7} alt=""
                            className="w-[50px] h-[40px] object-contain"/>
                        <img src={pay8} alt=""
                            className="w-[50px] h-[40px] object-contain"/>
                        <img src={pay9} alt=""
                            className="w-[50px] h-[40px] object-contain"/>
                    </div>
                </div>
                <div className="h-[40px]  ">
                    <img src={storApp} alt=""
                        className="h-[100%] w-[100%] object-contain"/>
                </div>
            </div>

        </div>

        <div className="w-[100%] flex justify-center items-center gap-[1px] flex-col pt-[20px]">
            <p className="m-0 text-[#ffffff70] text-[12px]">Copyright © 2024 rajaclubathletic.ma. All rights reserved.
                Do not duplicate or redistribute in any form.</p>
            <p className="m-0 text-[#ffffff70] text-[12px]">VAT number: 01073200124</p>
            <p className="m-0 text-[#ffffff70] text-[12px]">Licenza SIAE 5330/I/5051</p>
        </div>

    </div>

</footer>
  )
}

export default Footer