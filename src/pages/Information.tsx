import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Definición de la clase de sombra personalizada
const customShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.9), 5px 5px 10px 0 rgba(0, 0, 0, 0.9)";

export default function Information() {
  const [fondosOrder, setFondosOrder] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [clickedImage, setClickedImage] = useState<number | null>(null);
  const [zoomPos, setZoomPos] = useState<{ x: number; y: number } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const fondos = [
    { id: 1, src: "/information/fondo1.png", titulo: "OZONO TROPOSFÉRICO", simbolo: "O₃", descripcion: "Se forma con el sol + humo de autos e industrias. Irrita la garganta, da tos y empeora el asma en días de calor." },
    { id: 2, src: "/information/fondo2.png", titulo: "DIÓXIDO DE NITRÓGENO", simbolo: "NO₂", descripcion: `Viene del tráfico (autos y buses).\n Daña los pulmones, provoca ataques de asma y afecta al corazón.` },
    { id: 3, src: "/information/fondo3.png", titulo: "MERCURIO", simbolo: "", descripcion: "Sale de la minería, carbón y basura quemada.\nAfecta al cerebro y a los riñones; en embarazadas daña al bebé." },
    { id: 4, src: "/information/fondo4.png", titulo: "DIÓXIDO DE AZUFRE", simbolo: "SO₂", descripcion: "Sale al quemar carbón o petróleo\n" },
    { id: 5, src: "/information/fondo5.png", titulo: "MONÓXIDO DE CARBONO", simbolo: "CO", descripcion: "Sale de combustiones mal hechas (autos, incendios, estufas).\nQuita el oxígeno de la sangre, genera mareos, cansancio y hasta la muerte en altas dosis." },
    { id: 6, src: "/information/fondo6.png", titulo: "BENCENO", simbolo: "", descripcion: "Está en la gasolina, solventes y humo de incendios.\n Daña la sangre y puede causar cáncer (leucemia)." },
    { id: 7, src: "/information/fondo7.png", titulo: "HUMO DE TRANSPORTE", simbolo: "Diesel y Gasolina", descripcion: "Mezcla de gases y polvillo del escape.\n Puede causar cáncer de pulmón y enfermedades del corazón." },
    { id: 8, src: "/information/fondo8.png", titulo: "DIOXIDO DE CARBONO", simbolo: "C0₂", descripcion: "No es tóxico en ciudades, pero calienta el planeta.\nMás calor = más incendios, alergias y enfermedades." },
    { id: 9, src: "/information/fondo9.png", titulo: "HUMO DE INCENDIOS", simbolo: "", descripcion: "Mezcla peligrosa de gases y partículas.\n Provoca tos, bronquitis, infecciones y ansiedad por el humo." },
  ];

  const handleImageClick = (clickedIdx: number, e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();

    if (containerRect) {
      setZoomPos({
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top + rect.height / 2
      });
    }

    setClickedImage(clickedIdx);

    setTimeout(() => {
      const newOrder = [...fondosOrder];
      const idx = newOrder.indexOf(clickedIdx);
      newOrder.splice(idx, 1);
      newOrder.push(newOrder.shift()!);
      newOrder.unshift(clickedIdx);
      setFondosOrder(newOrder);
      setClickedImage(null);
      setZoomPos(null);
    }, 800);
  };

  const currentIndex = fondosOrder[0];
  const visibleThumbnails = fondosOrder.slice(1, 5);

  return (
    <div ref={containerRef} className="relative text-[#f5f5e9] overflow-hidden h-[calc(100vh-65px)]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
      
      {/* Fondo actual */}
      <motion.div
        key={fondos[currentIndex].id}
        initial={{ scale: 1, opacity: 1 }}
        animate={clickedImage !== null ? { scale: 0.8, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "linear" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${fondos[currentIndex].src}')` }}
      />

      {/* Imagen zoom */}
      {clickedImage !== null && zoomPos && (
        <motion.div
          key={"zoom-" + fondos[clickedImage].id}
          initial={{ scale: 0, x: zoomPos.x - window.innerWidth / 2, y: zoomPos.y - window.innerHeight / 2, opacity: 0.7 }}
          animate={{ scale: 1, x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "linear" }}
          className="absolute inset-0 bg-cover bg-center z-10"
          style={{ backgroundImage: `url('${fondos[clickedImage].src}')` }}
        />
      )}

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/40 z-20"></div>

      {/* Contenido */}
      <div className="relative z-30 flex h-full">
        <div className="w-[30%] flex flex-col justify-center px-8">
          <div className="max-w-4xl">
            <div className="text-md mb-2 font-dmsans">{fondos[currentIndex].simbolo}</div>
            <h1 className="text-7xl font-bold mb-2">{fondos[currentIndex].titulo}</h1>
            <p className="text-lg">{fondos[currentIndex].descripcion}</p>
          </div>
        </div>

        {/* Miniaturas */}
        <div className="w-[70%] flex items-end justify-center pb-8 overflow-hidden relative">
          <motion.div className="flex gap-4">
            {visibleThumbnails.map((idx) => (
              <AnimatePresence key={idx}>
                {clickedImage === idx ? (
                  <motion.img
                    key={fondos[idx].id}
                    src={fondos[idx].src}
                    alt={`Imagen ${fondos[idx].id}`}
                    className="w-[200px] h-[250px] object-cover rounded-lg cursor-pointer"
                    style={{ boxShadow: customShadow }} // Sombra personalizada
                    initial={{ y: 0, opacity: 1 }}
                    animate={{ y: 200, opacity: 0 }}
                    exit={{ y: 200, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "linear" }}
                  />
                ) : (
                  <motion.img
                    key={fondos[idx].id}
                    src={fondos[idx].src}
                    alt={`Imagen ${fondos[idx].id}`}
                    className="w-[200px] h-[250px] object-cover rounded-lg cursor-pointer"
                    style={{ boxShadow: customShadow }} // Sombra personalizada
                    animate={{ x: 0 }}
                    transition={{ duration: 0.6, ease: "linear" }}
                    onClick={(e) => handleImageClick(idx, e)}
                  />
                )}
              </AnimatePresence>
            ))}

            {/* Miniatura entrante */}
            {clickedImage !== null && fondosOrder.length > 5 && (
              <motion.img
                key={"new-" + fondos[fondosOrder[5]].id}
                src={fondos[fondosOrder[5]].src}
                alt={`Imagen ${fondos[fondosOrder[5]].id}`}
                className="w-[200px] h-[250px] object-cover rounded-lg cursor-pointer"
                style={{ boxShadow: customShadow }} // Sombra personalizada
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "linear" }}
                onClick={(e) => handleImageClick(fondosOrder[5], e)}
              />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}