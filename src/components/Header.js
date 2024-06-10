import { useState, useEffect } from "react";
import LOGO from "../assets/logo.png";
import USERICON from "../assets/user-icon.png";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const navigate = useNavigate();
  const userDetails = useSelector((store) => store.user);
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

  return (
    <header className="px-32 py-6 w-screen bg-gradient-to-b from-black absolute">
      <div className="flex justify-between items-center">
        <img src={LOGO} alt="Netlfix" className="w-40 h-14"></img>
        {userDetails && (
          <div>
            <img
              src={USERICON}
              alt="User"
              className="w-8 h-8 cursor-pointer"
              onMouseEnter={handleDropDown}
            />
            {toggleDropDown && (
              <div
                className="bg-black bg-opacity-60 p-4 right-20 mt-2 text-white fixed"
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
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
