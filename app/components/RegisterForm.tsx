"use client";
import React, { useState } from "react";
import users from "../data/users.json";
import "../styles/colors.css";

export default function RegisterForm({ onRegister }: { onRegister: (user: any) => void }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const exists = users.some((u) => u.email === email);
    if (exists) {
      setError("El correo ya está registrado");
      return;
    }
    const newUser = {
      id: users.length + 1,
      nombre,
      apellido,
      email,
      clave,
      rol: "usuario",
      celular: "",
      estado: "activo"
    };
    setError("");
    onRegister(newUser);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-text label-primary mb-1">Nombre</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded label-secondary focus:outline-accent"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-text label-primary mb-1">Apellido</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded label-secondary focus:outline-accent"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-text label-primary mb-1">Correo electrónico</label>
        <input
          type="email"
          className="w-full px-3 py-2 border rounded label-secondary focus:outline-accent"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-text label-primary mb-1">Contraseña</label>
        <input
          type="password"
          className="w-full px-3 py-2 border rounded label-secondary focus:outline-accent"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          required
        />
      </div>
      {error && <div className="text-danger text-sm">{error}</div>}
      <button type="submit" className="bg-primary text-background px-6 py-2 rounded font-semibold hover:bg-secondary transition w-full">
        Registrarse
      </button>
    </form>
  );
}
