import React from 'react';
import '../styles/colors.css';
import { UserCircleIcon } from '@heroicons/react/24/solid';

// Simulación de estado de login (reemplazar por lógica real de autenticación)
const isLoggedIn = false; // Cambia a true para probar el estado logueado
const userName = 'Juan';

const Navbar = () => (
  <nav className="bg-snow-white border-b border-stone-gray px-6 py-3 flex items-center justify-between w-full">
    {/* Logo */}
    <div className="flex items-center gap-2">
      <span className="font-bold text-xl text-forest-green tracking-tight">
        <a href="/" className="hover:text-forest-green pb-1 border-b-2 border-transparent hover:border-forest-green transition">DeporCanchas</a>
        </span>
    </div>
    {/* Links */}
    <div className="hidden md:flex items-center gap-6 text-main text-sm">
      <a href="/" className="hover:text-forest-green pb-1 border-b-2 border-transparent hover:border-forest-green transition">Sedes</a>
      <a href="/servicios" className="hover:text-forest-green pb-1 border-b-2 border-transparent hover:border-forest-green transition">Servicios</a>
      <a href="/membresias" className="hover:text-forest-green pb-1 border-b-2 border-transparent hover:border-forest-green transition">Membresías</a>
      <a href="/contacto" className="hover:text-forest-green pb-1 border-b-2 border-transparent hover:border-forest-green transition">Contacto</a>
    </div>
    {/* Acciones según login */}
    <div className="flex items-center gap-2">
      {!isLoggedIn ? (
        <>
          <a href="/login" className="text-forest-green font-semibold px-4 py-2 rounded hover:bg-grass-green hover:text-main transition text-sm">Iniciar Sesión</a>
          <a href="/register" className="bg-forest-green text-snow-white px-4 py-2 rounded font-semibold shadow hover:bg-main transition text-sm">Registrarse</a>
        </>
      ) : (
        <>
          <a href="/reservas" className="bg-forest-green text-snow-white px-4 py-2 rounded font-semibold shadow hover:bg-main transition text-sm">Reservar Ahora</a>
          <a href="/perfil" className="flex items-center gap-1 text-main font-semibold px-3 py-2 rounded hover:bg-grass-green transition text-sm">
            <UserCircleIcon className="w-6 h-6 text-forest-green" />
            <span className="hidden md:inline">{userName}</span>
          </a>
        </>
      )}
    </div>
  </nav>
);

export default Navbar;
