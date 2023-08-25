import { Button, Col, Container, Form, Nav, NavItem, Navbar, Row } from 'react-bootstrap';

import { FaHome } from "react-icons/fa"
import { FaRegUser } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
   
  
    return (
        <>
         <Container fluid>
        <Row className="bg-success text-white justify-content-center px-5 pt-2">
          <Col>
            <p className=''>Welcome to West Thames College!</p>
          </Col>
          <Col className="ms-0 text-center">
            <Nav className='float-end gap-5'>
              <NavItem>calendar</NavItem>
              <NavItem>Routine</NavItem>
              <NavItem>Notifications</NavItem>
              <NavItem>Downloads</NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>

      <Container fluid style={{ background: "#F7F7F7", paddingTop: '20px',}}>
        <Row style={{ padding: '0px 30px' }}>
          <Col lg={2}>
            <img width='150px' src='https://www.west-thames.ac.uk/templates/wtc/images/logo.png' alt='/' />
          </Col>

          <Col lg={3} sm={6}>
            <Form>
              <Form.Group className='input-group'>
                <Form.Control placeholder='search our courses...' style={{ borderRadius: '10px 0px 0px 10px' }} />
                <Button variant="success">
                  <FaSearch />
                </Button>
              </Form.Group>
            </Form>
          </Col>

          <Col lg={4} sm={4} style={{ padding: '0px 30px', }}>
            <h4>Call us: +1 44567332 </h4>
            <p style={{ color: 'grey', fontSize: '14px' }}>from 8:00 to 21:00 (Mon-Sun) </p>
          </Col>

          <Col lg={3} style={{ display: 'inline-flex', fontSize: '18px', }} className='gap-4'>
            <NavLink style={{ textDecoration: 'none', fontWeight:'bold' }} className='text-success' to='/home'><FaRegUser  /> Student Portal</NavLink>
           
            <NavLink style={{ textDecoration: 'none', fontWeight:'bold' }} className='text-success' to='/'>Logout</NavLink>
          </Col>
        </Row>

        <Row >
          <Navbar className='text-success' >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto gap-5">
                <NavLink style={{ textDecoration: 'none', fontWeight:'bold' }} className='text-success' to='/homepage'>Home</NavLink>
                <NavLink style={{ textDecoration: 'none', fontWeight:'bold' }} className='text-success' to='/error'>Admission</NavLink>
                <NavLink style={{ textDecoration: 'none', fontWeight:'bold' }} className='text-success' to='/error'>Curriculum</NavLink>
                <NavLink style={{ textDecoration: 'none', fontWeight:'bold' }} className='text-success' to='/error'>About US</NavLink>
                <NavLink style={{ textDecoration: 'none', fontWeight:'bold' }} className='text-success' to='/error'>Activities</NavLink>
                <NavLink style={{ textDecoration: 'none', fontWeight:'bold' }} className='text-success'  to='/error'>News</NavLink>
                <NavLink style={{ textDecoration: 'none', fontWeight:'bold' }} className='text-success' to='/error'>Contact</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Container>

        <div className=" text-center" style={{padding:'200px 0px'}}>
        <h4>404 Page Not Found!!</h4>
       <NavLink to='/home'> <p className="mt-4"><FaHome className="text-white bg-success  me-2"/>Return to Home page</p></NavLink>
        </div>

        </>
    )
}


export default ErrorPage;