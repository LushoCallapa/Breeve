export default function Home() {
  return (
    <div className="relative bg-[#2e211b] text-white min-h-screen flex flex-col justify-end overflow-hidden">
      <div className="z-10 p-8">
        <h1 className="text-4xl font-bold">Bienvenido a Subastas</h1>
        <p className="mt-2 text-lg opacity-90">
          Participa, oferta y gana los mejores productos.
        </p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 lg:h-full lg:top-1/2 overflow-hidden">
        <img
          src="/earth.webp"
          alt="Planeta"
          className="w-full h-full object-cover object-top opacity-60"
        /> 
      </div>
    </div>
  );
}