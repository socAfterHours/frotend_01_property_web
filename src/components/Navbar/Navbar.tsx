import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseFlag } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="navbar bg-[#EAEEF3]">
      <div className="flex-1">
      
        <a href="/"  className="btn btn-ghost normal-case text-xl text-[#152C36]">
        <FontAwesomeIcon icon={faHouseFlag} className='text-[#03628C] mr-2'/>
        LOGO</a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-square btn-ghost text-[#596C75]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content text-[#152C36] bg-[#EAEEF3] rounded-box w-52"
          >
            <li>
              <a href="/" className="justify-between hover:bg-[#6CA3BB] hover:text-[#EAEEF3] hover:font-bold focus:bg-[#03628C] focus:text-[#fff]">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a href="/" className="justify-between hover:bg-[#6CA3BB] hover:text-[#EAEEF3] hover:font-bold focus:bg-[#03628C] focus:text-[#fff]" >Settings</a>
            </li>
            <li>
              <a href="/" className="justify-between hover:bg-[#6CA3BB] hover:text-[#EAEEF3] hover:font-bold focus:bg-[#03628C] focus:text-[#fff]" >Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
