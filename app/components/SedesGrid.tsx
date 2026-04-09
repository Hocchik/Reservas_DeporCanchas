import React from 'react';

interface Sede {
  nombre: string;
  descripcion: string;
  deportes: string[];
  libres: number;
  imagen: string;
}

const sedes: Sede[] = [
  {
    nombre: 'Campus Miraflores',
    descripcion: 'Ubicación céntrica con iluminación LED de alta potencia para juegos nocturnos.',
    deportes: ['Fútbol', 'Tenis', 'Padel'],
    libres: 5,
    imagen: '/Clubterrazas_Miraflores.jpg',
  },
  {
    nombre: 'Campus Surco',
    descripcion: 'Amplias instalaciones con zona de descanso y cafetería para después del partido.',
    deportes: ['Fútbol', 'Padel'],
    libres: 4,
    imagen: '/futbol-plaza-santiago-surcopeg.jpeg',
  },
  {
    nombre: 'Campus Los Olivos',
    descripcion: 'Canchas de césped sintético de última generación y gran ambiente comunitario.',
    deportes: ['Fútbol', 'Tenis'],
    libres: 6,
    imagen: '/Canchas_de_futbol_los_olivos.png',
  },
];

export default function SedesGrid() {
  return (
    <section id="sedes" className="bg-snow-white py-16 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-forest-green mb-2">Nuestras Sedes</h2>
        <div className="h-1 w-16 bg-forest-green rounded mb-8"></div>
        <div className="grid md:grid-cols-3 gap-8">
          {sedes.map((sede) => (
            <div key={sede.nombre} className="bg-snow-white border border-stone-gray rounded-xl shadow-sm p-6 flex flex-col hover:shadow-lg transition">
              <img src={sede.imagen} alt={sede.nombre} className="rounded-lg mb-4 h-40 object-cover" />
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-grass-green text-main text-xs px-2 py-1 rounded font-semibold">{sede.libres} CANCHAS LIBRES</span>
              </div>
              <h3 className="font-bold text-lg text-main mb-1">{sede.nombre}</h3>
              <p className="text-sm text-main mb-2">{sede.descripcion}</p>
              <div className="flex gap-2 mb-4">
                {sede.deportes.map((dep) => {
                  let colorClass = '';
                  if (dep === 'Fútbol') colorClass = 'bg-forest-green text-snow-white';
                  else if (dep === 'Tenis') colorClass = 'bg-grass-green text-main';
                  else if (dep === 'Padel') colorClass = 'bg-accent text-main';
                  else colorClass = 'bg-stone-gray text-main';
                  return (
                    <span
                      key={dep}
                      className={`text-xs px-2 py-1 rounded font-semibold shadow-sm ${colorClass}`}
                    >
                      {dep}
                    </span>
                  );
                })}
              </div>
              <a href="/reservas" className="mt-auto border border-forest-green text-forest-green px-4 py-2 rounded font-semibold hover:bg-grass-green hover:text-main transition">Reservar Aquí</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
