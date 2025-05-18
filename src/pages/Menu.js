import React, { useState } from 'react';
import { Container, Modal, Button } from 'react-bootstrap';

const menuData = {
  'Bebidas Calientes': [
    { 
      name: 'Café Americano®', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fespresso-americano_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Café negro preparado con granos arábica de alta calidad, con un sabor intenso y aromático.',
      price: 45,
      memberPrice: 40
    },
    { 
      name: 'Latte Vainilla®', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Flatte_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Espresso suave con leche al vapor y un toque de vainilla natural.',
      price: 55,
      memberPrice: 50
    },
    { 
      name: 'Café Mocha®', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fmocha_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Deliciosa combinación de espresso, leche vaporizada y chocolate.',
      price: 60,
      memberPrice: 55
    },
    { 
      name: 'Espresso®', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2023-12%2FEspresso.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Café concentrado con un sabor intenso y capa cremosa (crema) en la superficie.',
      price: 40,
      memberPrice: 35
    },
    { 
      name: 'Cafe del dia®', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2023-12%2Fcafe-del-dia.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Nuestra selección especial de café del día, pregunte por nuestra variedad actual.',
      price: 45,
      memberPrice: 40
    },
    { 
      name: 'Cappuccino®', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fcappuccino_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Espresso con leche vaporizada y una generosa capa de espuma de leche.',
      price: 55,
      memberPrice: 50
    },
    { 
      name: 'Mocha Blanco®', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fmocha-blanco_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Espresso con leche vaporizada, chocolate blanco y crema batida.',
      price: 65,
      memberPrice: 60
    },
    { 
      name: 'Chocolate Mexicano®', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fchocolate-caliente_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Chocolate caliente tradicional mexicano con canela y un toque especial.',
      price: 50,
      memberPrice: 45
    },
  ],
  'Frappuccino': [
    { 
      name: 'Mocha Frappuccino®', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fmocha.frappuccino_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Mezcla refrescante de café, leche y chocolate, coronado con crema batida.',
      price: 75,
      memberPrice: 70
    },
    { 
      name: 'Caramel Frappuccino®', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fcaramel-frappuccino_2.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Café mezclado con leche, hielo y dulce caramelo, terminado con crema batida y salsa de caramelo.',
      price: 75,
      memberPrice: 70
    },
    { 
      name: 'Mocha Blanco Frappuccino®', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fmocha-blanco-frappuccino_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Deliciosa combinación de café, leche y chocolate blanco, coronado con crema batida.',
      price: 80,
      memberPrice: 75
    },
    { 
      name: 'Espresso Frappuccino®', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fespresso-frappuccino_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Energizante combinación de espresso con leche y hielo, perfecto para días calurosos.',
      price: 70,
      memberPrice: 65
    },
    { 
      name: 'Café Frappuccino®', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2023-07%2Fcafe-frappuccino.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Café mezclado con leche y hielo para una bebida cremosa y refrescante.',
      price: 70,
      memberPrice: 65
    },
    { 
      name: 'Cookies & Cream Frappuccino®', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2023-12%2FCookies-and-cream-frappuccino.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Deliciosa mezcla de galletas Oreo® con leche y hielo, coronada con crema batida.',
      price: 85,
      memberPrice: 80
    },
    { 
      name: 'Chocolate Mexicano Frappuccino®', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2023-12%2FChocolate_Mexicano_Frapp.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Nuestra versión fría del tradicional chocolate mexicano con canela.',
      price: 75,
      memberPrice: 70
    },
    { 
      name: 'Piñacoco Yogurt Frappuccino®', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fpin%CC%83a-coco-yogurt-frappuccino_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Refrescante combinación de piña, coco y yogurt, perfecta para el verano.',
      price: 80,
      memberPrice: 75
    },
    { 
      name: 'Berry Yogurt Frappuccino®', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fberry-yogurt-frappuccino_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Mezcla de frutos rojos con yogurt cremoso, dulce y refrescante.',
      price: 80,
      memberPrice: 75
    },
    { 
      name: 'Chai cream Frappuccino®', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fchai-cream-rappuccino_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Té chai mezclado con leche y especias, versión fría y cremosa.',
      price: 75,
      memberPrice: 70
    },
    { 
      name: 'Cajeta cream Frappuccino®', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fcajeta-cream-frappuccino_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Delicioso frappé con sabor a cajeta (dulce de leche mexicano) y crema batida.',
      price: 80,
      memberPrice: 75
    },
    { 
      name: 'Vainilla cream Frappuccino®', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fvainilla-cream-frappuccino_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Clásico sabor a vainilla en una versión fría y cremosa, coronado con crema batida.',
      price: 75,
      memberPrice: 70
    },
  ],
  'Bebidas Frías': [
    { 
      name: 'Cold Brew®', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fcold-brew_0_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Café preparado en frío por 20 horas para un sabor suave y menos ácido.',
      price: 55,
      memberPrice: 50
    },
    { 
      name: 'Matcha®', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fmatcha-green-tea-latte_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Té verde matcha de alta calidad mezclado con leche al vapor.',
      price: 60,
      memberPrice: 55
    },
    { 
      name: 'Helado Shaken Lemon Black Tea', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fshaken-black-tea_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Té negro refrescante con limón y un toque de dulzura, agitado con hielo.',
      price: 50,
      memberPrice: 45
    },
    { 
      name: 'Mango Dragonfruit Refresher con Limonada', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fmango-dragonfruit-refresher_1_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Refrescante combinación de mango, fruta del dragón y limonada.',
      price: 65,
      memberPrice: 60
    },
    { 
      name: 'Pink Drink', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fpink-drink_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Refresco de fresa y açaí con leche de coco, ligero y refrescante.',
      price: 65,
      memberPrice: 60
    },
    { 
      name: 'Strawberry Acaí Refresher con Limonada', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fstrawberry-acai-refresher_1_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Mezcla de fresa y açaí con limonada, perfecta para días calurosos.',
      price: 65,
      memberPrice: 60
    },
    { 
      name: 'Mango Dragonfruit Refresher', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fmango-dragonfruit-refresher_0_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Combinación tropical de mango y fruta del dragón, refrescante y ligera.',
      price: 60,
      memberPrice: 55
    },
    // Productos sin imagen (se mantienen igual)
    { name: 'Mocha Blanco Frappuccino®', image: ''},
    { name: 'Mocha Blanco Frappuccino®', image: ''},
    { name: 'Mocha Blanco Frappuccino®', image: ''},
    { name: 'Mocha Blanco Frappuccino®', image: ''},
  ],
  'Alimentos': [
    { 
      name: 'Croissant®', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2024-01%2FCroissant-mantequilla.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Crujiente croissant de mantequilla, horneado diariamente.',
      price: 35,
      memberPrice: 30
    },
    { 
      name: 'Panini®', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2FPanini%203%20quesos_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Panini tostado con tres quesos fundidos: mozzarella, cheddar y gouda.',
      price: 65,
      memberPrice: 60
    },
    // Producto sin imagen (se mantiene igual)
    { name: 'Mocha Blanco Frappuccino®', image: ''},
  ],
  'Postres': [
    { 
      name: 'Cheesecake®', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2FCheesecake%20Brulee%20con%20Frambuesa_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Clásico cheesecake con topping de frambuesa y caramelo brulee.',
      price: 70,
      memberPrice: 65
    },
    { 
      name: 'Brownie®', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2FMuffin%20Chocochips_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Brownie de chocolate con trozos de chocolate fundente, servido caliente.',
      price: 50,
      memberPrice: 45
    },
    // Producto sin imagen (se mantiene igual)
    { name: 'Mocha Blanco Frappuccino®', image: ''},
  ],
};

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Filtramos categorías que tengan al menos un ítem con imagen
  const validCategories = Object.entries(menuData).filter(([_, items]) => 
    items.some(item => item.image)
  );

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="product-menu py-5" id="menu">
      <Container>
        <h2 className="text-center fw-bold mb-5">Conoce nuestro Menú</h2>

        {validCategories.map(([category, items]) => (
          <div key={category} className="mb-5">
            <h4 className="mb-4 fw-semibold border-bottom pb-2">{category}</h4>
            <div className="circle-product-container">
              {items.filter(item => item.image).map((item) => (
                <div 
                  key={item.name} 
                  className="circle-product"
                  onClick={() => handleItemClick(item)}
                >
                  <div className="circle-image">
                    <img src={item.image} alt={item.name} loading="lazy" />
                  </div>
                  <p className="product-name mt-2">{item.name}</p>
                  {/* Se ha eliminado el precio de aquí */}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Modal de detalles con precios */}
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedItem?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            {selectedItem && (
              <>
                <div className="modal-image-container mb-3">
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.name} 
                    className="img-fluid rounded"
                  />
                </div>
                <p className="mb-3">
                  {selectedItem.description}
                </p>
                <div className="d-flex justify-content-around">
                  <div className="text-center">
                    <h5 className="text-primary">${selectedItem.price}</h5>
                    <small className="text-muted">Precio regular</small>
                  </div>
                  {selectedItem.memberPrice && (
                    <div className="text-center">
                      <h5 className="text-success">${selectedItem.memberPrice}</h5>
                      <small className="text-muted">Precio membresía</small>
                    </div>
                  )}
                </div>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleCloseModal}>
              Añadir al carrito
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>

      {/* Estilos CSS */}
      <style>{`
        .modal-image-container {
          max-height: 300px;
          overflow: hidden;
          border-radius: 8px;
          background-color: #f8f9fa;
          padding: 10px;
        }
        
        .modal-image-container img {
          max-height: 280px;
          object-fit: contain;
          width: 100%;
        }
        
        .circle-product {
          cursor: pointer;
        }
        
        .modal-content {
          border: none;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .modal-header {
          border-bottom: none;
          padding-bottom: 0;
        }
        
        .modal-title {
          font-weight: 600;
          color: #2f4c8f;
        }
      `}</style>
    </section>
  );
};

export default Menu;