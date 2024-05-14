import { FaReact , FaList } from "react-icons/fa";
import { MdPolicy } from "react-icons/md";

export default function Navbars() {
  return (
    <div className="flex justify-between py-3 p-3 items-center w-full">
      <div className="text-3xl font-extrabold">
        <FaReact className="spinerCode"/>
      </div>

      <div className="flex items-center gap-5 text-xl">
        <FaList />
        <MdPolicy />
      </div>
    </div>
  )
}
