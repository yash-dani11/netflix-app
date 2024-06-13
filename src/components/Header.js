import { useState, useEffect } from "react";
import LOGO from "../assets/logo.png";
import USERICON from "../assets/user-icon.png";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearchView } from "../redux/searchSlice";
const Header = () => {
  const headerView = useSelector((store)=>store.header?.view);
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const navigate = useNavigate();
  const userDetails = useSelector((store) => store.user);
  const viewSearch = useSelector((store)=>store.search?.viewSearch);
  
  const userName = userDetails?.displayName;
  const handleSignOut = () => {
    signOut(auth);
    setToggleDropDown(false);
  };
  const handleDropDown = () => {
    setToggleDropDown((prev) => !prev);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return ()=> unsubscribe();
    
  }, []);
  const toggleSearch = ()=>{
    dispatch(toggleSearchView());
  }
  return <>{ headerView && <header className="px-32 py-6 w-screen bg-gradient-to-b from-black absolute z-20">
  <div className="flex flex-col sm:flex-row justify-between items-center">
    <img src={LOGO} alt="Netlfix" className="w-40 h-14"></img>
    {userDetails && (
      <><div className="flex w-40 items-center">
      <button className="p-2 m-2 rounded-md text-white absolute top-5 left-6 sm:right-36 sm:left-auto" onClick={toggleSearch}>{viewSearch?"Browse":<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" role="img" ><path fillRule="evenodd" clipRule="evenodd" d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z" fill="currentColor"></path></svg>}</button>
      <img
        src={USERICON}
        alt="User"
        className="w-8 h-8 cursor-pointer mx-16 absolute top-8 -right-10 sm:right-0"
        onMouseEnter={handleDropDown}
      />
    </div>
    {toggleDropDown && (
      <div
        className="bg-black bg-opacity-60 p-4 sm:right-4 mt-10 right-0 sm:mt-40 text-white absolute"
        onMouseLeave={handleDropDown}
      >
        <ul className="list-none text-center">
          <li className="border-b border-gray-600">{userName}</li>
          <li>
            <button className="text-xs" onClick={handleSignOut}>
              Sign Out of Netflix
            </button>
          </li>
        </ul>
      </div>
    )}</>
    )}
  </div>
</header>}</>
  
};

export default Header;
