import { useNavigate } from 'react-router-dom';
import '../global.css';

export function Navbar2() {
  const navigate = useNavigate();

  return (
    <div>
      <header className="navbar flex justify-between items-center p-6 md:px-16 bg-dark-navy">
        <div 
          className="flex gap-5 justify-between w-full whitespace-nowrap max-w-[1265px] md:max-w-full"
          onClick={() => navigate('/')}
        >
          <img 
            src="/logo.png" 
            alt="Liberty Logo" 
            className="shrink-0 max-w-full aspect-[2.22] w-32 md:w-48 lg:w-52 cursor-pointer" 
          />
        </div>
        <div 
          className="justify-center text-lg md:text-xl px-4 md:px-8 py-2 my-auto bg-liberty-cyan rounded-lg md:px-5 hover:bg-cyan-400 cursor-pointer"
          onClick={() => navigate('/login')}
        >
          Login
        </div>
      </header>
      <div className="shrink-0 max-w-full h-[2px] bg-liberty-cyan border border-cyan-400 border-solid w-full shadow-[0_0_6px_2px_rgba(0,255,255,0.5)]" />
    </div>
  );
}
