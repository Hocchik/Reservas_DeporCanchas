import React from 'react';
import '../styles/colors.css';

const Navbar = () => (
  <nav className="bg-primary text-background px-6 py-4 flex justify-between items-center">
    <span className="font-bold text-xl">ReservaDePorCanchas</span>
    <div className="space-x-4">
      <a href="/" className="hover:text-accent">Inicio</a>
      <a href="/reservas" className="hover:text-accent">Reservar</a>
      <a href="/login" className="hover:text-accent">Ingresar</a>
    </div>
  </nav>
);

export default Navbar;
