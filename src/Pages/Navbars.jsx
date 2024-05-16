import { FaReact , FaList } from "react-icons/fa";
import { MdPolicy } from "react-icons/md";
import { Link } from "react-router-dom"

export default function Navbars() {
  return (
    <div className="flex justify-between py-3 p-3 items-center w-full">
      <div className="text-3xl font-extrabold">
      <Link to={"/"}>
      <FaReact className="spinerCode"/>
      </Link>
      </div>

      <div className="flex items-center gap-5 text-xl">
       <Link to="/policy">
       <MdPolicy  className="cursor-pointer animate__animated animate__bounceIn"/>
       </Link>
       <Link to="/thelist">
       <FaList className="hover:cursor-pointer animate__animated animate__bounceIn"/>
       </Link>
     
      </div>
    </div>
  )
}
