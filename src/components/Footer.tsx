import { useNavigate } from 'react-router-dom';

export function Footer() {
    const navigate = useNavigate();

    return (
        <footer className="flex justify-center items-center gap-5 self-stretch px-20 py-4 mt-44 w-full text-3xl bg-liberty-cyan max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <img
            loading="lazy"
            src="/logo2.png"
            className="shrink-0 max-w-full aspect-[0.85] scale-90 w-[133px] cursor-pointer"
            onClick={() => navigate('/')}
            />
            <div 
            className="-ms-44 flex-auto my-auto text-center underline decoration-2 font-light max-md:max-w-full cursor-pointer"
            onClick={() => navigate('/policy')}
            >
            Política de Privacidade
            </div>
        </footer>
    );
}