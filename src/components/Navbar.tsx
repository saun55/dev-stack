

import logo from "../assets/logo-text.png";
const Navbar = () => {
  return (

    


<div className="sticky top-0 z-50 bg-white">
  <div className="container mx-auto my-5 px-4 py-5">

    {/* Desktop Navbar */}
    <div className="hidden md:flex items-center justify-between text-center">
      <img src={logo} alt="Text Logo" />

      <ul className="flex gap-4 font-bold">
        <li><a href="">Home</a></li>
        <li><a href="">Technologies</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
      </ul>

      <div>
        <button className="btn rounded-3xl border-none p-5">
          Sign in
        </button>

        <button className="btn bg-[#D91B7E] text-white rounded-3xl p-5">
          Sign Up
        </button>
      </div>
    </div>

    {/* Mobile Navbar */}
    <div className="grid grid-cols-3 items-center md:hidden">

      <div className="text-2xl justify-self-start">
        ☰
      </div>

      <img
        src={logo}
        alt="Text Logo"
        className="w-28 justify-self-center"
      />

      <div className="flex gap-1 justify-self-end">
        <button className="btn btn-sm rounded-3xl border-none">
          Sign in
        </button>

        <button className="btn bg-[#D91B7E] text-white rounded-3xl p-5">
          Sign Up
        </button>
      </div>

    </div>

  </div>
</div>






  );
};
export default Navbar;
