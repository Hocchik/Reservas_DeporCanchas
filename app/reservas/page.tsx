import Navbar from '../components/Navbar';
import '../styles/colors.css';

export default function Reservas() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <section className="max-w-2xl mx-auto mt-12 p-8 rounded shadow bg-white">
        <h2 className="text-2xl font-bold text-primary mb-4">Reserva tu cancha</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-text mb-1">Tipo de cancha</label>
            <select className="w-full px-3 py-2 border rounded focus:outline-accent">
              <option>Fútbol</option>
              <option>Vóley</option>
            </select>
          </div>
          <div>
            <label className="block text-text mb-1">Fecha</label>
            <input type="date" className="w-full px-3 py-2 border rounded focus:outline-accent" />
          </div>
          <div>
            <label className="block text-text mb-1">Hora</label>
            <input type="time" className="w-full px-3 py-2 border rounded focus:outline-accent" />
          </div>
          <button type="submit" className="bg-primary text-background px-6 py-2 rounded font-semibold hover:bg-secondary transition">Buscar disponibilidad</button>
        </form>
      </section>
    </main>
  );
}
