import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const customShadow =
  "0 15px 25px -5px rgba(0, 0, 0, 0.9), 5px 10px 15px rgba(0, 0, 0, 0.7)";

export default function Information() {
  const [fondosOrder, setFondosOrder] = useState<number[]>([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);
  const [clickedImage, setClickedImage] = useState<number | null>(null);
  const [zoomPos, setZoomPos] = useState<{ x: number; y: number } | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const fondos = [
    {
      id: 1,
      src: "/information/fondo1.png",
      titulo: "OZONO TROPOSFÉRICO",
      simbolo: "O₃",
      descripcion:
        "Se forma con el sol + humo de autos e industrias. Irrita la garganta, da tos y empeora el asma en días de calor.",
    },
    {
      id: 2,
      src: "/information/fondo2.png",
      titulo: "DIÓXIDO DE NITRÓGENO",
      simbolo: "NO₂",
      descripcion:
        "Viene del tráfico (autos y buses). Daña los pulmones, provoca ataques de asma y afecta al corazón.",
    },
    {
      id: 3,
      src: "/information/fondo3.png",
      titulo: "MERCURIO",
      simbolo: "",
      descripcion:
        "Sale de la minería, carbón y basura quemada. Afecta al cerebro y a los riñones; en embarazadas daña al bebé.",
    },
    {
      id: 4,
      src: "/information/fondo4.png",
      titulo: "DIÓXIDO DE AZUFRE",
      simbolo: "SO₂",
      descripcion: "Sale al quemar carbón o petróleo.",
    },
    {
      id: 5,
      src: "/information/fondo5.png",
      titulo: "MONÓXIDO DE CARBONO",
      simbolo: "CO",
      descripcion:
        "Sale de combustiones mal hechas. Quita el oxígeno de la sangre, genera mareos, cansancio y hasta la muerte en altas dosis.",
    },
    {
      id: 6,
      src: "/information/fondo6.png",
      titulo: "BENCENO",
      simbolo: "",
      descripcion:
        "Está en la gasolina, solventes y humo de incendios. Daña la sangre y puede causar cáncer (leucemia).",
    },
    {
      id: 7,
      src: "/information/fondo7.png",
      titulo: "HUMO DE TRANSPORTE",
      simbolo: "Diesel y Gasolina",
      descripcion:
        "Mezcla de gases y polvillo del escape. Puede causar cáncer de pulmón y enfermedades del corazón.",
    },
    {
      id: 8,
      src: "/information/fondo8.png",
      titulo: "DIOXIDO DE CARBONO",
      simbolo: "CO₂",
      descripcion:
        "No es tóxico en ciudades, pero calienta el planeta. Más calor = más incendios, alergias y enfermedades.",
    },
    {
      id: 9,
      src: "/information/fondo9.png",
      titulo: "HUMO DE INCENDIOS",
      simbolo: "",
      descripcion:
        "Mezcla peligrosa de gases y partículas. Provoca tos, bronquitis, infecciones y ansiedad por el humo.",
    },
  ];

  // Manejo del redimensionamiento para determinar si es móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Carrusel automático en móvil (cada 3 segundos)
  useEffect(() => {
    if (!isMobile || fondosOrder.length === 0) {
      return;
    }

    const autoScroll = setInterval(() => {
      setFondosOrder((prevOrder) => {
        const newOrder = [...prevOrder.slice(1), prevOrder[0]];
        return newOrder;
      });
    }, 3000);

    return () => clearInterval(autoScroll);
  }, [isMobile, fondosOrder.length]);

  const handleImageClick = (
    clickedIdx: number,
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();

    if (containerRect) {
      setZoomPos({
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top + rect.height / 2,
      });
    }

    setClickedImage(clickedIdx);

    const currentPos = fondosOrder.indexOf(clickedIdx);
    const newOrder: number[] = [clickedIdx];
    for (let i = 1; i < fondosOrder.length; i++) {
      const nextPos = (currentPos + i) % fondosOrder.length;
      newOrder.push(fondosOrder[nextPos]);
    }
    setFondosOrder(newOrder);

    setTimeout(() => {
      setClickedImage(null);
      setZoomPos(null);
    }, 1200);
  };

  const currentIndex = fondosOrder[0];
  const visibleThumbnails = fondosOrder.slice(1, 5);

  return (
    <>
      <div
        ref={containerRef}
        className="relative text-[#f5f5e9] overflow-hidden h-[calc(100vh-69px)]"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        {/* Fondo principal */}
        <AnimatePresence mode="wait">
          {clickedImage === null || isMobile ? (
            <motion.div
              key={fondos[currentIndex].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${fondos[currentIndex].src}')` }}
            />
          ) : (
            zoomPos && (
              <motion.div
                key={"zoom-" + fondos[clickedImage].id}
                initial={{
                  scale: 0.1,
                  x: zoomPos.x - window.innerWidth / 2,
                  y: zoomPos.y - (window.innerHeight - 65) / 2,
                  opacity: 0.2,
                }}
                animate={{
                  scale: 1,
                  x: 0,
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${fondos[clickedImage].src}')`,
                }}
              />
            )
          )}
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/40 z-20"></div>

        <div className="relative z-30 flex flex-col lg:flex-row h-full pt-8 lg:pt-16">
          <div className="w-full lg:w-[40%] flex flex-col justify-center px-6 lg:pl-12 mt-20 lg:mt-0">
            <div className="max-w-4xl">
              <div className="text-sm lg:text-xl mb-2 font-dmsans">
                {fondos[currentIndex].simbolo}
              </div>
              <h1 className="text-4xl lg:text-8xl font-bold mb-2">
                {fondos[currentIndex].titulo}
              </h1>
              <p className="text-xl lg:text-lg">{fondos[currentIndex].descripcion}</p>
            </div>
          </div>

          {/* Carrusel - SOLO visible en desktop */}
          <div className="hidden lg:flex w-[60%] items-end justify-center pl-4 pb-24 overflow-hidden relative">
            <div className="flex gap-4">
              <AnimatePresence mode="popLayout">
                {visibleThumbnails.map((idx) => (
                  <motion.img
                    key={fondos[idx].id}
                    src={fondos[idx].src}
                    alt={`Imagen ${fondos[idx].id}`}
                    className="w-[200px] h-[300px] object-cover rounded-lg cursor-pointer"
                    style={{ boxShadow: customShadow }}
                    layout
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -200 }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.05 }}
                    onClick={(e) => handleImageClick(idx, e)}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-[#f5f5e9]">
        <p className="text-start text-xl lg:text-2xl xl:text-3xl font-helvetica font-bold p-4 lg:p-8 text-[#06243a]">
          La Noticia mas relevante
        </p>
      </div>
      <div
        className="w-full h-96 lg:h-140 bg-cover bg-center relative"
        style={{ backgroundImage: `url('/noticias/noticia1.png')` }}
      >
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 lg:mb-16 w-[90%] lg:w-[80%] bg-black/50 text-white p-4 lg:p-12 rounded-2xl lg:rounded-3xl">
          <h3 className="text-base lg:text-2xl mb-3 lg:mb-8 underline">
            Estudio encuentra incremento de casos de neumonía en la Amazonía
            boliviana asociados al aumento de deforestación por quema de árboles
          </h3>
          <p className="text-xs lg:text-sm">
            Un estudio en la Amazonía boliviana halló que por cada 1 % de
            aumento en la deforestación (por quema de árboles), los casos de
            neumonía se incrementan en un 20 %.
          </p>
        </div>
      </div>
      
      <div className="bg-[#f5f5e9]">
        <p className="text-start text-xl lg:text-2xl xl:text-3xl font-helvetica font-bold p-4 lg:p-8 text-[#06243a]">
          ¿Sabías que?
        </p>

        <div className="flex flex-col lg:flex-row gap-4 px-4 lg:px-8 pb-4 lg:pb-8">
          <div className="relative w-full lg:w-1/2 rounded-lg overflow-hidden text-[#f5f5e9] p-4 lg:p-8 lg:mx-24">
            <div
              className="absolute inset-0 bg-cover bg-center filter brightness-30"
              style={{ backgroundImage: `url('/noticias/noticia2.png')` }}
            ></div>
            <div className="relative p-4 lg:p-10 text-base lg:text-2xl">
              En la Amazonía boliviana, se reportó un incremento de casos de
              neumonía en poblaciones expuestas al humo de incendios forestales.
            </div>
          </div>

          <div className="relative w-full lg:w-1/2 rounded-lg overflow-hidden text-[#f5f5e9] p-4 lg:p-8 lg:mx-24">
            <div
              className="absolute inset-0 bg-cover bg-center filter brightness-30"
              style={{ backgroundImage: `url('/noticias/noticia3.png')` }}
            ></div>
            <div className="relative p-4 lg:p-10 text-base lg:text-2xl">
              En el ranking mundial de calidad del aire para 2024, Bolivia está
              en la posición 98 de 138 países evaluados.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}