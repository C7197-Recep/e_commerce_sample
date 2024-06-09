import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import Title from '../../components/Title';
import image from '../../assets/img/header-bg.jpg';

import image1 from '../../assets/img/1.jpg';
import image2 from '../../assets/img/2.jpg';
import image3 from '../../assets/img/3.jpg';
import image4 from '../../assets/img/4.jpg';
import image5 from '../../assets/img/5.jpg';
import image6 from '../../assets/img/6.jpg';

import teamimage1 from '../../assets/img/team1.jpg';
import teamimage2 from '../../assets/img/team2.jpg';
import teamimage3 from '../../assets/img/team3.jpg';

import facebook from '../../assets/img/facebook.svg';
import google from '../../assets/img/google.svg';
import ibm from '../../assets/img/ibm.svg';
import microsoft from '../../assets/img/microsoft.svg';

const products = [
  { id: 1, img: image1, heading: "Smart Gadgets", subheading: "Watches" },
  { id: 2, img: image2, heading: "Sports", subheading: "Sport Shoes" },
  { id: 3, img: image3, heading: "Cars", subheading: "Electric Vehicles" },
  { id: 4, img: image4, heading: "Kitchen", subheading: "Food" },
  { id: 5, img: image5, heading: "Tech", subheading: "Computers" },
  { id: 6, img: image6, heading: "Data", subheading: "Hardware" },
];

const ProductsList = () => (
  <>
    {products.map(product => (
      <Col lg={4} sm={6} className="mb-4" key={product.id}>
        <div className="portfolio-item">
          <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
            </div>
            <Image className="img-fluid" src={product.img} alt="..." />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">{product.heading}</div>
            <div className="portfolio-caption-subheading text-muted">{product.subheading}</div>
          </div>
        </div>
      </Col>
    ))}
  </>
);

const Home = () => (
  <>
    <Title
      title='Welcome To The Best E-Commerce Website'
      subtitle="ONLINE GADGET STORE"
      buttonText="START SHOPPING"
      Link="/register"
      showButton={true}
      image={image}
    />

    <Container className="page-section mt-4" id="services">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Services</h2>
        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      <Row className="text-center">
        <Col md={4}>
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="my-3">E-Commerce</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </Col>
        <Col md={4}>
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="my-3">Responsive Design</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </Col>
        <Col md={4}>
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="my-3">Web Security</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </Col>
      </Row>
    </Container>

    <Container className="page-section bg-light mt-4" id="portfolio">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Portfolio</h2>
        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      <Row>
        <ProductsList />
      </Row>
    </Container>

    <section className="page-section bg-light" id="team">
      <Container>
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        <Row>
          <Col lg={4} className="mb-4">
            <div className="team-member">
              <Image className="mx-auto rounded-circle" src={teamimage1} alt="..." />
              <h4>Parveen Anand</h4>
              <p className="text-muted">Lead Designer</p>
              <Button className="btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i className="fa fa-twitter"></i></Button>
              <Button className="btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="fa fa-facebook-f"></i></Button>
              <Button className="btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i className="fa fa-linkedin"></i></Button>
            </div>
          </Col>
          <Col lg={4} className="mb-4">
            <div className="team-member">
              <Image className="mx-auto rounded-circle" src={teamimage2} alt="..." />
              <h4>Diana Petersen</h4>
              <p className="text-muted">Lead Marketer</p>
              <Button className="btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i className="fa fa-twitter"></i></Button>
              <Button className="btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i className="fa fa-facebook-f"></i></Button>
              <Button className="btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i className="fa fa-linkedin"></i></Button>
            </div>
          </Col>
          <Col lg={4} className="mb-4">
            <div className="team-member">
              <Image className="mx-auto rounded-circle" src={teamimage3} alt="..." />
              <h4>Larry Parker</h4>
              <p className="text-muted">Lead Developer</p>
              <Button className="btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fa fa-twitter"></i></Button>
              <Button className="btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fa fa-facebook-f"></i></Button>
              <Button className="btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fa fa-linkedin"></i></Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={8} className="mx-auto text-center">
            <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
          </Col>
        </Row>
      </Container>
    </section>

    <div className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={3} sm={6} className="my-3">
            <a href="#!"><Image className="img-fluid img-brand d-block mx-auto" src={microsoft} alt="Microsoft Logo" aria-label="Microsoft Logo" /></a>
          </Col>
          <Col md={3} sm={6} className="my-3">
            <a href="#!"><Image className="img-fluid img-brand d-block mx-auto" src={google} alt="Google Logo" aria-label="Google Logo" /></a>
          </Col>
          <Col md={3} sm={6} className="my-3">
            <a href="#!"><Image className="img-fluid img-brand d-block mx-auto" src={facebook} alt="Facebook Logo" aria-label="Facebook Logo" /></a>
          </Col>
          <Col md={3} sm={6} className="my-3">
            <a href="#!"><Image className="img-fluid img-brand d-block mx-auto" src={ibm} alt="IBM Logo" aria-label="IBM Logo" /></a>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Home;
