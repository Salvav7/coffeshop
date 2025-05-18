import React from 'react';
import { MapPin, Mail, Phone, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer>
  <div className="footer-content">
    {/* Sobre Nosotros */}
    <div>
      <h2>Sobre Nosotros</h2>
      <p>
        En Café Aurora, combinamos pasión por el café con un diseño acogedor y sostenible. Disfruta cada taza con estilo y conciencia.
      </p>
    </div>

    {/* Información de Contacto */}
    <div>
      <h2>Contacto</h2>
      <ul>
        <li><MapPin style={{ height: 16, width: 16, marginRight: 8 }} /> Calle Central 123, CDMX</li>
        <li><Phone style={{ height: 16, width: 16, marginRight: 8 }} /> (55) 1234 5678</li>
        <li><Mail style={{ height: 16, width: 16, marginRight: 8 }} /> contacto@cafeaurora.com</li>
      </ul>
    </div>

    {/* Redes Sociales y Suscripción */}
    <div>
      <h2>Redes Sociales</h2>
      <div className="social-icons" style={{ marginBottom: '1.5rem' }}>
        <a href="#" aria-label="Facebook"><Facebook /></a>
        <a href="#" aria-label="Instagram"><Instagram /></a>
    
      </div>
      <h3 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>Suscríbete a nuestro boletín</h3>
      <form onSubmit={e => e.preventDefault()}>
        <input type="email" placeholder="Tu correo" required />
        <button type="submit" className="subscribe-button">Enviar</button>
      </form>
    </div>
  </div>

  {/* Derechos reservados */}
  <div className="footer-bottom">
    &copy; {new Date().getFullYear()} Café Aurora. Todos los derechos reservados.
  </div>
</footer>

  );
}
