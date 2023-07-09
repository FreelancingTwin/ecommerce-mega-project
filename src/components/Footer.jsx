import {FaInstagram, FaTwitter, FaYoutube, FaFacebook} from 'react-icons/fa'
function Footer() {
  return (
    <div className="h-max bg-black text-white flex flex-wrap justify-between p-4 border-t border-white">

    <div className="">
      <h1 className="">Thunder Tech</h1>
      <h1 className="">Pillar no 16</h1>
      <h1 className="">Road no. 323232</h1>
      <h1 className="">Hyderabad</h1>
    </div>

    <div className="flex felx-wrap justify-center items-center gap-4 text-3xl">
      <FaInstagram className="text-pink-600"/>
      <FaTwitter className="text-blue-500"/>
      <FaFacebook className="text-blue-900"/>
      <FaYoutube className="text-red-600"/>

    </div>
    </div>
  )
}

export default Footer
