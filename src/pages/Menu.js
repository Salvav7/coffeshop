import React, { useState } from 'react';
import { Container, Modal, Button, Badge, Offcanvas, Form } from 'react-bootstrap';

// Modificamos la estructura de datos para incluir precios por tamaño
const menuData = {
  'Bebidas Calientes': [
    { 
      name: 'Café Americano', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fespresso-americano_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Café negro preparado con granos arábica de alta calidad, con un sabor intenso y aromático.',
      prices: {
        pequeño: 35,
        mediano: 45,
        grande: 55
      }
    },
    { 
      name: 'Latte Vainilla', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Flatte_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Espresso suave con leche al vapor y un toque de vainilla natural.',
      prices: {
        pequeño: 45,
        mediano: 55,
        grande: 65
      }
    },
    { 
      name: 'Café Mocha', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fmocha_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Deliciosa combinación de espresso, leche vaporizada y chocolate.',
      prices: {
        pequeño: 50,
        mediano: 60,
        grande: 70
      }
    },
    { 
      name: 'Espresso', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2023-12%2FEspresso.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Café concentrado con un sabor intenso y capa cremosa (crema) en la superficie.',
      prices: {
        pequeño: 30,
        mediano: 40,
        grande: 50
      }
    },
    { 
      name: 'Café del día', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2023-12%2Fcafe-del-dia.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Nuestra selección especial de café del día, pregunte por nuestra variedad actual.',
      prices: {
        pequeño: 35,
        mediano: 45,
        grande: 55
      }
    },
    { 
      name: 'Cappuccino', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fcappuccino_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Espresso con leche vaporizada y una generosa capa de espuma de leche.',
      prices: {
        pequeño: 45,
        mediano: 55,
        grande: 65
      }
    },
    { 
      name: 'Chocolate Mexicano', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fchocolate-caliente_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Chocolate caliente tradicional mexicano con canela y un toque especial.',
      prices: {
        pequeño: 40,
        mediano: 50,
        grande: 60
      }
    }
  ],
  'Frappuccinos': [
    { 
      name: 'Mocha Frappuccino', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fmocha.frappuccino_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Mezcla refrescante de café, leche y chocolate, coronado con crema batida.',
      prices: {
        pequeño: 65,
        mediano: 75,
        grande: 85
      }
    },
    { 
      name: 'Caramel Frappuccino', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fcaramel-frappuccino_2.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Café mezclado con leche, hielo y dulce caramelo, terminado con crema batida y salsa de caramelo.',
      prices: {
        pequeño: 65,
        mediano: 75,
        grande: 85
      }
    },
    { 
      name: 'Cookies & Cream Frappuccino', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2023-12%2FCookies-and-cream-frappuccino.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Deliciosa mezcla de galletas Oreo® con leche y hielo, coronada con crema batida.',
      prices: {
        pequeño: 70,
        mediano: 80,
        grande: 90
      }
    },
    { 
      name: 'Chocolate Mexicano Frappuccino', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2023-12%2FChocolate_Mexicano_Frapp.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Nuestra versión fría del tradicional chocolate mexicano con canela.',
      prices: {
        pequeño: 65,
        mediano: 75,
        grande: 85
      }
    },
    { 
      name: 'Piña Coco Yogurt Frappuccino', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fpin%CC%83a-coco-yogurt-frappuccino_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Refrescante combinación de piña, coco y yogurt, perfecta para el verano.',
      prices: {
        pequeño: 70,
        mediano: 80,
        grande: 90
      }
    }
  ],
  'Bebidas Frías': [
    { 
      name: 'Cold Brew', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fcold-brew_0_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Café preparado en frío por 20 horas para un sabor suave y menos ácido.',
      prices: {
        pequeño: 45,
        mediano: 55,
        grande: 65
      }
    },
    { 
      name: 'Matcha Latte', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fmatcha-green-tea-latte_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Té verde matcha de alta calidad mezclado con leche al vapor.',
      prices: {
        pequeño: 50,
        mediano: 60,
        grande: 70
      }
    },
    { 
      name: 'Mango Dragonfruit Refresher', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fmango-dragonfruit-refresher_0_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Combinación tropical de mango y fruta del dragón, refrescante y ligera.',
      prices: {
        pequeño: 50,
        mediano: 60,
        grande: 70
      }
    },
    { 
      name: 'Pink Drink', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fpink-drink_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Refresco de fresa y açaí con leche de coco, ligero y refrescante.',
      prices: {
        pequeño: 55,
        mediano: 65,
        grande: 75
      }
    }
  ],
  'Alimentos': [
    { 
      name: 'Croissant de Mantequilla', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2024-01%2FCroissant-mantequilla.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Crujiente croissant de mantequilla, horneado diariamente.',
      prices: {
        individual: 35
      }
    },
    { 
      name: 'Panini 3 Quesos', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2FPanini%203%20quesos_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Panini tostado con tres quesos fundidos: mozzarella, cheddar y gouda.',
      prices: {
        individual: 65
      }
    },
    { 
      name: 'Bagel con Queso Crema', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fbagel-queso-crema_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Bagel fresco con generosa porción de queso crema.',
      prices: {
        individual: 45
      }
    }
  ],
  'Postres': [
    { 
      name: 'Cheesecake de Frambuesa', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2FCheesecake%20Brulee%20con%20Frambuesa_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Clásico cheesecake con topping de frambuesa y caramelo brulee.',
      prices: {
        porción: 70
      }
    },
    { 
      name: 'Brownie de Chocolate', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2FMuffin%20Chocochips_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Brownie de chocolate con trozos de chocolate fundente, servido caliente.',
      prices: {
        individual: 50
      }
    },
    { 
      name: 'Muffin de Arándanos', 
      image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2FMuffin%20Arandanos_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
      description: 'Muffin esponjoso repleto de jugosos arándanos.',
      prices: {
        individual: 45
      }
    }
  ]
};

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState('mediano');
  const [showModal, setShowModal] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Filtramos categorías que tengan al menos un ítem con imagen
  const validCategories = Object.entries(menuData).filter(([_, items]) => 
    items.some(item => item.image)
  );

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setSelectedSize('mediano'); // Resetear a tamaño mediano por defecto
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddToCart = () => {
    if (selectedItem) {
      const price = selectedItem.prices[selectedSize];
      
      setCartItems(prevItems => {
        const existingItemIndex = prevItems.findIndex(
          item => item.name === selectedItem.name && item.size === selectedSize
        );
        
        if (existingItemIndex >= 0) {
          const newItems = [...prevItems];
          newItems[existingItemIndex] = {
            ...newItems[existingItemIndex],
            quantity: newItems[existingItemIndex].quantity + 1
          };
          return newItems;
        } else {
          return [
            ...prevItems,
            {
              ...selectedItem,
              size: selectedSize,
              price: price,
              quantity: 1
            }
          ];
        }
      });
      setShowModal(false);
    }
  };

  const removeFromCart = (itemName, itemSize) => {
    setCartItems(prevItems => 
      prevItems.filter(item => !(item.name === itemName && item.size === itemSize))
    );
  };

  const updateQuantity = (itemName, itemSize, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemName, itemSize);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.name === itemName && item.size === itemSize
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };

  return (
    <section className="product-menu py-5" id="menu">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold mb-0">Conoce nuestro Menú</h2>
          <Button 
            variant="outline-primary" 
            onClick={() => setShowCart(true)}
            className="position-relative"
          >
            <i className="bi bi-cart-fill me-2"></i>
            Carrito
            {cartItems.length > 0 && (
              <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </Badge>
            )}
          </Button>
        </div>

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
                  <p className="product-price text-muted">
                    ${item.prices.mediano} Mx
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Modal de detalles del producto */}
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
                
                <div className="mb-4">
                  <h5>Selecciona el tamaño:</h5>
                  <div className="d-flex justify-content-center gap-3">
                    {Object.entries(selectedItem.prices).map(([size, price]) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? "primary" : "outline-primary"}
                        onClick={() => setSelectedSize(size)}
                        className="text-capitalize"
                      >
                        {size}: ${price}
                      </Button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleAddToCart}>
              Añadir al carrito - ${selectedItem?.prices[selectedSize]}
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Offcanvas del carrito */}
        <Offcanvas show={showCart} onHide={() => setShowCart(false)} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Tu Pedido</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {cartItems.length === 0 ? (
              <div className="text-center py-4">
                <i className="bi bi-cart-x fs-1 text-muted"></i>
                <p className="mt-3">Tu carrito está vacío</p>
                <Button variant="outline-primary" onClick={() => setShowCart(false)}>
                  Ver menú
                </Button>
              </div>
            ) : (
              <>
                <div className="mb-3">
                  {cartItems.map((item) => (
                    <div key={`${item.name}-${item.size}`} className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                      <div className="d-flex align-items-center">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' }}
                          className="me-2"
                        />
                        <div>
                          <h6 className="mb-0">{item.name}</h6>
                          <small className="text-muted text-capitalize">
                            Tamaño: {item.size} - ${item.price} c/u
                          </small>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <Button 
                          variant="outline-secondary" 
                          size="sm" 
                          onClick={() => updateQuantity(item.name, item.size, item.quantity - 1)}
                        >
                          -
                        </Button>
                        <span className="mx-2">{item.quantity}</span>
                        <Button 
                          variant="outline-secondary" 
                          size="sm" 
                          onClick={() => updateQuantity(item.name, item.size, item.quantity + 1)}
                        >
                          +
                        </Button>
                        <Button 
                          variant="outline-danger" 
                          size="sm" 
                          className="ms-2" 
                          onClick={() => removeFromCart(item.name, item.size)}
                        >
                          <i className="bi bi-trash"></i>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-top pt-3">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal:</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span>IVA (16%):</span>
                    <span>${(calculateTotal() * 0.16).toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between fw-bold fs-5">
                    <span>Total:</span>
                    <span>${(calculateTotal() * 1.16).toFixed(2)}</span>
                  </div>
                  <Button variant="success" className="w-100 mt-3">
                    Proceder al pago
                  </Button>
                </div>
              </>
            )}
          </Offcanvas.Body>
        </Offcanvas>
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
          transition: transform 0.2s;
        }
        
        .circle-product:hover {
          transform: scale(1.05);
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
        
        .circle-product-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 20px;
        }
        
        .circle-image {
          width: 100%;
          padding-top: 100%;
          position: relative;
          border-radius: 50%;
          overflow: hidden;
          background-color: #f8f9fa;
        }
        
        .circle-image img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .product-name {
          font-size: 0.9rem;
          text-align: center;
          margin-bottom: 0;
          font-weight: 500;
        }
        
        .product-price {
          font-size: 0.8rem;
          text-align: center;
        }
        
        @media (max-width: 576px) {
          .circle-product-container {
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
            gap: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default Menu;