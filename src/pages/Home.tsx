export default function Home() {
  return (
    <div className="relative bg-[#2e211b] text-white flex flex-col overflow-hidden" style={{ height: 'calc(100vh - 64px)' }}>
      <div className="absolute bottom-0 left-0 w-full h-1/2 lg:h-5/6 overflow-hidden">
        <img
          src="/earth.webp"
          alt="Planeta"
          className="w-full h-[300%] object-cover object-top opacity-40"
        />
      </div>
      
      <div className="relative z-10 p-8">
        <h1 className="text-6xl font-bold ml-24 font-helvetica">Breeve</h1>
        <p className="mt-4 text-2xl w-[40%] font-dmsans ml-24 mt-8">
          Comprueba el nivel de calidad del aire para, poder cuidarte y cuidar a
          los demás
        </p>
      </div>
      
      <form className="relative z-10 w-full max-w-md mx-auto mt-auto mb-30">
        <input
          type="text"
          placeholder="Busca tu ciudad"
          className="text-lg font-dmsans w-full px-4 py-3 rounded-full bg-black/20 backdrop-blur-sm text-white placeholder-white/40 placeholder:focus:opacity-0 focus:placeholder-transparent border-2 border-[#f5f5e9] focus:outline-none focus:ring-2 focus:ring-blue-400 pr-12 text-center"
        />
        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#f5f5e9]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>
        </span>
      </form>
    </div>
  );
}