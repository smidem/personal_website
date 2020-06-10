import React, {Component} from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from "react-bootstrap/Container";
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Blog from './Blog';
import Resume from './Resume';
import Contact from './Contact';
import {Image} from "react-bootstrap";


export default class Navigation extends Component {
    render() {
        return (
            <Container fluid className="navbar-container">
                <Navbar bg="dark" variant="dark" sticky="top" expand="md">
                    <Navbar.Brand as={Link} to="/">
                        <Container className="brand-container">
                            <Image
                                src={require('../img/profile_photo.jpg')}
                                width="40"
                                height="40"
                                alt="Shane McGuckian"
                                roundedCircle
                            />
                            <span>
                                    Shane McGuckian
                                </span>
                        </Container>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto" as="ul">
                            <Nav.Item>
                                <Nav.Link className="navlink" as={Link} to="/about">About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="navlink" as={Link} to="/projects">Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="navlink" as={Link} to="/blog">Blog</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="navlink" as={Link} to="/resume">Resume</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="navlink" as={Link} to="/contact">Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/blog" component={Blog}/>
                    <Route path="/resume" component={Resume}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
            </Container>
        );
    }
}

