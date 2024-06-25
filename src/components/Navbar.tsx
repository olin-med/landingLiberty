import { useNavigate } from "react-router-dom";

export function Navbar() {
const navigate = useNavigate();

  return (
    <div>
      <header className="flex justify-between items-center p-6 px-16 bg-dark-navy">
        <div 
        className="flex gap-5 justify-between w-full whitespace-nowrap max-w-[1265px] max-md:flex-wrap max-md:max-w-full"
        onClick={() => navigate('/')}
        >
          <img src="/logo.png" alt="Liberty Logo" className="shrink-0 max-w-full aspect-[2.22] w-[205px] cursor-pointer" />
        </div>
        <div className="justify-center text-xl px-8 py-2 my-auto bg-liberty-cyan rounded-lg max-md:px-5 hover:bg-cyan-400 cursor-pointer">
          Login
        </div>
      </header>
      <div className="shrink-0 max-w-full h-[2px] bg-liberty-cyan border border-cyan-400 border-solid w-full shadow-[0_0_6px_2px_rgba(0,255,255,0.5)]" />
    </div>
    
    
  );
}
