export function Welcome() {
    return (
        <main className="flex flex-col items-center justify-center flex-grow text-center mt-5 px-4">
            <img
            loading="lazy"
            src="/polygon.png"
            className="mt-36 aspect-[0.93] fill-cyan-400 w-[25px] max-md:mt-10"
            />
            <div className="mt-7 text-white text-2xl md:text-3xl">SEJA BEM-VINDO</div>
            <div className="shrink-0 mt-5 max-w-full h-px bg-liberty-cyan border border-cyan-400 border-solid w-[80%] md:w-[60%] lg:w-[542px]" />
            <div className="mt-7 text-2xl md:text-3xl text-white">SOMOS A LIBERTY</div>
        </main>
    );
}