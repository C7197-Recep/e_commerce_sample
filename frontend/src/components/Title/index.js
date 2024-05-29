import React from 'react';
import { Container} from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css"; 
import { Link } from 'react-router-dom';

const Title = (props) => ( 
    <>
        <header className="masthead" style={{backgroundImage: `url(${props.image})`}}>
            <Container className="container">
                <div className="masthead-subheading">{props.title}</div>
                <div className="masthead-heading text-uppercase">{props.subtitle}</div>
                {props.showButton &&  
                <Link className="btn btn-primary btn-xl text-uppercase" to={`${props.Link}`}> {props.buttonText}</Link> }
            </Container>
        </header>
    </>
); 

export default Title;