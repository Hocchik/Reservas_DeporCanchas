
"use client";
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';
import '../styles/colors.css';

export default function LoginPage() {
  const handleLogin = (user: any) => {
    alert(`Bienvenido, ${user.nombre}!`);
    // Aquí puedes redirigir o guardar el usuario en estado global
  };

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <section className="max-w-md mx-auto mt-12 p-8 rounded shadow bg-white">
        <h2 className="text-2xl font-bold text-primary mb-4">Iniciar sesión</h2>
        <LoginForm onLogin={handleLogin} />
        <div className="mt-4 text-center">
          <a href="/register" className="text-accent hover:underline">¿No tienes cuenta? Regístrate</a>
        </div>
      </section>
    </main>
  );
}
