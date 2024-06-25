import { useNavigate } from 'react-router-dom';

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="flex flex-col md:flex-row justify-between items-center gap-5 self-stretch px-5 md:px-20 py-8 md:py-4 mt-10 md:mt-44 w-full text-3xl bg-liberty-cyan">
      <img
        loading="lazy"
        src="/logo2.png"
        className="hidden md:block shrink-0 max-w-full aspect-[0.85] scale-90 w-[133px] cursor-pointer mb-4 md:mb-0 -me-40"
        onClick={() => navigate('/')}
      />
      <div 
        className="flex-auto my-auto text-center underline decoration-2 font-light cursor-pointer md:flex md:justify-center"
        onClick={() => navigate('/policy')}
      >
        Política de Privacidade
      </div>
    </footer>
  );
}