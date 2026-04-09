
"use client";
import Navbar from '../components/Navbar';
import RegisterForm from '../components/RegisterForm';
import '../styles/colors.css';

export default function RegisterPage() {
  const handleRegister = (user: any) => {
    alert(`Usuario registrado: ${user.nombre} (${user.email})`);
    // Aquí puedes guardar el usuario en estado global o redirigir
  };

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <section className="max-w-md mx-auto mt-12 p-8 rounded shadow bg-white">
        <h2 className="text-2xl font-bold text-primary mb-4">Registro</h2>
        <RegisterForm onRegister={handleRegister} />
        <div className="mt-4 text-center">
          <a href="/login" className="text-accent hover:underline">¿Ya tienes cuenta? Inicia sesión</a>
        </div>
      </section>
    </main>
  );
}
