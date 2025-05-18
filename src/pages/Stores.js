import React, { useState } from 'react';

const stores = [
  { 
    name: 'Sucursal Centro', 
    address: 'Av. Principal 123, Centro',
    phone: '555-123-4567',
    hours: 'Lun-Vie: 7:00 AM - 10:00 PM\nSáb-Dom: 8:00 AM - 9:00 PM',
    features: ['Wi-Fi Gratis', 'Estacionamiento', 'Terraza']
  },
  { 
    name: 'Sucursal Norte', 
    address: 'Calle 45 #678, Zona Norte',
    phone: '555-234-5678',
    hours: 'Lun-Dom: 6:30 AM - 11:00 PM',
    features: ['Wi-Fi Gratis', 'Drive-thru', 'Área de trabajo']
  },
  { 
    name: 'Sucursal Sur', 
    address: 'Boulevard Sur 890, Zona Sur',
    phone: '555-345-6789',
    hours: 'Lun-Vie: 6:00 AM - 11:30 PM\nSáb-Dom: 7:00 AM - 10:30 PM',
    features: ['Wi-Fi Gratis', 'Estacionamiento', 'Salón de eventos']
  },
];

const Stores = () => {
  const [activeStore, setActiveStore] = useState(null);

  return (
    <section className="stores-section">
      <div className="stores-header">
        <h2 className="stores-title">Nuestras Tiendas</h2>
        <p className="stores-subtitle">Visítanos en cualquiera de nuestras ubicaciones</p>
      </div>
      
      <div className="stores-content">
        <div className="stores-grid">
          {stores.map((store, index) => (
            <article 
              key={index} 
              className={`store-card ${activeStore === index ? 'active' : ''}`}
              onClick={() => setActiveStore(index)}
            >
              <div className="store-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-location"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21c-4-4-8-7-8-11a8 8 0 0116 0c0 4-4 7-8 11z" />
                </svg>
              </div>
              <h3 className="store-name">{store.name}</h3>
              <p className="store-address">{store.address}</p>
              <div className="store-features">
                {store.features.slice(0, 2).map((feature, i) => (
                  <span key={i} className="feature-tag">{feature}</span>
                ))}
                {store.features.length > 2 && (
                  <span className="feature-tag">+{store.features.length - 2}</span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="map-details-container">
          <div className="map-container">
            <iframe
              title="Mapa de Tiendas"
              src="https://www.google.com/maps/d/embed?mid=1zYfXkJ6C8gJQ3M6XhV1Hn9aKX9s&hl=es"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          {activeStore !== null && (
            <div className="store-details">
              <h3>{stores[activeStore].name}</h3>
              <div className="detail-item">
                <svg className="detail-icon" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <p>{stores[activeStore].address}</p>
              </div>
              <div className="detail-item">
                <svg className="detail-icon" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <p>{stores[activeStore].phone}</p>
              </div>
              <div className="detail-item">
                <svg className="detail-icon" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                <p style={{whiteSpace: 'pre-line'}}>{stores[activeStore].hours}</p>
              </div>
              <div className="features-list">
                <h4>Servicios:</h4>
                <ul>
                  {stores[activeStore].features.map((feature, i) => (
                    <li key={i}>
                      <svg className="check-icon" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Stores;