export function App() {
	return (
		<div className="flex flex-col min-h-screen bg-dark-navy">
		<header className="flex justify-between items-center p-6 px-16 bg-dark-navy">
			<div className="flex gap-5 justify-between w-full whitespace-nowrap max-w-[1265px] max-md:flex-wrap max-md:max-w-full">
				<img src="/logo.png" alt="Liberty Logo" className="shrink-0 max-w-full aspect-[2.22] w-[205px] cursor-pointer"/>
			</div>
			<div className="justify-center text-xl px-8 py-2 my-auto bg-liberty-cyan rounded-lg max-md:px-5 hover:bg-cyan-400 cursor-pointer">
				Login
			</div>
		</header>
		<main className="flex flex-col items-center justify-center flex-grow text-center">
			<img
			loading="lazy"
			src="/polygon.png"
			className="mt-36 aspect-[0.93] fill-cyan-400 w-[25px] max-md:mt-10"
			/>
			<div className="mt-7 text-white">SEJA BEM-VINDO</div>
			<div className="shrink-0 mt-5 max-w-full h-px bg-liberty-cyan border border-cyan-400 border-solid w-[542px]" />
			<div className="mt-7 text-3xl text-white">SOMOS A LIBERTY</div>
		</main>
		<footer className="flex justify-center items-center gap-5 self-stretch px-20 py-8 mt-44 w-full text-3xl bg-liberty-cyan max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
			<img
			loading="lazy"
			src="/logo2.png"
			className="shrink-0 max-w-full aspect-[0.85] scale-90 w-[133px] cursor-pointer"
			/>
			<div className="-ms-44 flex-auto my-auto text-center underline decoration-2 font-light max-md:max-w-full cursor-pointer">
			Política de Privacidade
			</div>
		</footer>
		</div>
	);
}
