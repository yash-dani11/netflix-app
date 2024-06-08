import LOGO from "../assets/logo.png";

const Header = () => {
  return (
    <header className='px-32 py-6 w-screen bg-gradient-to-b from-black absolute'>
        <img src={LOGO} alt="Netlfix" className="w-40 h-14"></img>
    </header>
  )
}

export default Header