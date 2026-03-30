import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <section className="max-w-2xl mx-auto mt-12 p-8 rounded shadow bg-white">
        <h1 className="text-3xl font-bold text-primary mb-4">Reserva tu cancha fácil y rápido</h1>
        <p className="text-lg text-text mb-6">Consulta disponibilidad, reserva y paga online. ¡Sin llamadas ni WhatsApp!</p>
        <a href="/reservas" className="bg-accent text-background px-6 py-3 rounded font-semibold hover:bg-secondary transition">Reservar ahora</a>
      </section>
    </main>
  );
}
