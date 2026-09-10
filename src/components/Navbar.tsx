import logo from "../assets/logo-text.png";
const Navbar = () => {
  return (
    // <div className="flex justify-between items-center container mx-auto text-center my-5">
    //   <img src={logo} alt="Text Logo" />

    //   <ul className="flex gap-4 font-bold">
    //     <li>
    //       <a href="">Home</a>
    //     </li>
    //     <li>
    //       <a href="">Technologies</a>
    //     </li>
    //     <li>
    //       <a href="">Projects</a>
    //     </li>
    //     <li>
    //       <a href="">About</a>
    //     </li>
    //     <li>
    //       <a href="">Contact</a>
    //     </li>
    //   </ul>
    //   <div>
    //     <button className="btn rounded-3xl border-none p-5">Sign in</button>
    //     <button className="btn btn-primary rounded-3xl p-5">Sign Up</button>
    //   </div>
    // </div>

    <div className="container mx-auto my-5 px-4">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center text-center">
        <img src={logo} alt="Text Logo" />
        <ul className="flex gap-4 font-bold">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Technologies</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <div>
          <button className="btn rounded-3xl border-none p-5">Sign in</button>
          <button className="btn btn-primary rounded-3xl p-5">Sign Up</button>
        </div>
      </div>



      {/* Mobile Navbar */}


      <div className="md:hidden flex items-center justify-between">
       
        
        <div className="text-2xl"> ☰ </div> 
        
       
        <img src={logo} alt="Text Logo" className="w-28" />
        
        
        <div className="flex gap-1">
         
          <button className="btn btn-sm rounded-3xl border-none">
         
            Sign in
          </button>
          <button className="btn btn-primary btn-sm rounded-3xl">
         
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
