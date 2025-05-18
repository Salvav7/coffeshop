import React from "react";
import { Carousel, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import latteBg from "../assets/latte.jpg";
import coffe from "../assets/coff.jpg";
import pas from "../assets/postre.jpg";
import stor from "../assets/store.jpg";

const Home = () => {
  return (
    <div className="bg-white text-stone-800">
      {/* Hero Carousel */}
      <Carousel
        fade
        controls={false}
        indicators={true}
        interval={5000}
        pause="hover"
      >
        <Carousel.Item>
          <div
            className="d-block w-100"
            style={{
              height: "80vh",
              backgroundImage: `url(${coffe})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textShadow: "0 2px 4px rgba(0,0,0,0.7)",
            }}
          >
            <Container
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                maxWidth: "400px",
              }}
            >
              <h1 className="display-4 fw-bold">
                Bienvenido a Nuestra Cafetería
              </h1>
              <p className="lead mb-4">
                Un lugar donde el aroma del café fresco y un ambiente cálido te
                invitan a quedarte.
              </p>
              <Button as={Link} to="/menu" variant="dark" size="lg">
                Ver Menú
              </Button>
            </Container>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div
            className="d-block w-100"
            style={{
              height: "80vh",
              backgroundImage: `url(${latteBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textShadow: "0 2px 4px rgba(0,0,0,0.7)",
            }}
          >
            <Container
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                maxWidth: "400px",
              }}
            >
              <h1 className="display-4 fw-bold">Disfruta Nuestros Lattes</h1>
              <p className="lead mb-4">Cremosos y hechos con amor para ti.</p>
              <Button as={Link} to="/menu" variant="dark" size="lg">
                Explorar Menú
              </Button>
            </Container>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div
            className="d-block w-100"
            style={{
              height: "80vh",
              backgroundImage: `url(${pas})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textShadow: "0 2px 4px rgba(0,0,0,0.7)",
            }}
          >
            <Container
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                maxWidth: "400px",
              }}
            >
              <h1 className="display-4 fw-bold">
                Deliciosos Postres Artesanales
              </h1>
              <p className="lead mb-4">Perfectos para acompañar tu café.</p>
              <Button as={Link} to="/menu" variant="dark" size="lg">
                Ver Postres
              </Button>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>

      <section id="sobre-nosotros" class="sobre-nosotros">
        <div class="container">
          <div class="content">
            <h2>Sobre Nosotros</h2>
            <div class="underline"></div>
            <p>
              Somos una empresa comprometida con brindar soluciones tecnológicas
              eficientes para la gestión empresarial. Nuestro enfoque se centra
              en la innovación, la calidad y el acompañamiento constante a
              nuestros clientes.
            </p>
          </div>
          <div class="image-wrapper">
            <img src={stor} alt="Equipo de trabajo" />
          </div>
        </div>
      </section>

      <section class="especialidades">
  <h2 class="titulo">Nuestras Especialidades</h2>
  <div class="tarjetas">
    <article class="tarjeta">
      <div class="imagen-circular">
        <img src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2023-12%2FEspresso.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2" alt="Espresso Clásico" />
      </div>
      <h3>Espresso Clásico</h3>
      <p>Fuerte y aromático, para los verdaderos amantes del café.</p>
    </article>

    <article class="tarjeta">
      <div class="imagen-circular">
        <img src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Flatte_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2" alt="Latte Cremoso" />
      </div>
      <h3>Latte Cremoso</h3>
      <p>Suave combinación de café y leche vaporizada.</p>
    </article>

    <article class="tarjeta">
      <div class="imagen-circular">
        <img src="images/pan.jpg" alt="Pan Dulce Artesanal" />
      </div>
      <h3>Pan Dulce Artesanal</h3>
      <p>Hecho en casa cada mañana, ideal para acompañar tu bebida.</p>
    </article>
  </div>
</section>

    </div>
  );
};

export default Home;
