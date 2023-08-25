import { Button, Card, Carousel, Col, Container, Form, Nav, NavItem, Navbar, Row } from 'react-bootstrap';
import { FaPaperPlane, FaRegUser } from 'react-icons/fa6';

import CardHeader from 'react-bootstrap/esm/CardHeader';
import { FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <>
      <Container fluid>
        <Row className=" text-white justify-content-center px-5 pt-2" style={{background:'rgb(143, 23, 79)'}}>
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

      <div className='body'>

      
         <Carousel>
      <Carousel.Item>
        < img  className="w-100" src="	https://www.west-thames.ac.uk/images/T_Levels_Banner.jpg" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-100" src="https://www.west-thames.ac.uk/images/banners/examresultsday.jpg"  />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-100" src="https://www.west-thames.ac.uk/images/Multiply_Math_Banner_2023.jpg" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="w-100" src="https://www.west-thames.ac.uk/images/banners/Londons_top_clg_banner.png" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Container fluid className='mt-4'>
      <Row>
        <Col lg={7} className="p-5">
        <h4>Welcome to </h4>
        <h1 className='text-success'>West Thames College</h1>
        <p>West Thames is a coeducational day and boarding school for grades I to X. We welcome and enroll students of all faiths, races, and backgrounds, and offer various need-based scholarships each year. We have small class size which enables staff to build strong relationship with the children, know their families well and work teachers and parents together as a team for the benefit of the children in our care. Each child is fully supported at each stage of learning.<br/>

We are guided by "Parents in school" and "Teachers at Home" principle where staff, teachers, students and parents work together in a safe, caring and tolerant community to provide holistic environment with respect and dignity. This enables the students to achieve emotional, social, physical, moral and spiritual development. In this partnership, West Thames focuses on integrity in technology, skills and value to teamwork in diversified community incorporating local 
brains with global ideas. All members of the school community will model the behaviors expected from the students. In doing this, the school will be a centre of excellence at the forefront of education, community development and environment awareness.</p>

        </Col>

        <Col lg={4}className="p-5 d-flex gap-3">
          <div> 
                                  <img width='300px' src="https://www.west-thames.ac.uk/images/assets/tracy.jpg"/>
"
                                </div>
          <div>
          <h3 className="mb-2">PRINCIPAL'S MESSAGE</h3>
            <p>It is both my pleasure and privilege to welcome you to West Thames, a college with a new vision. We have successfully completed the sixth year, the most challenging<a href="#">Read More</a>
                                </p></div>

        
        </Col>
      </Row>
    </Container>
        

      </div>

      <Container fluid className='px-5'>
        <Row className='mb-3'>
          <Col lg={3} >
            <Card style={{background:'purple', fontSize:'40px',padding:'15px', width:'300px', height:'200px'}}>
              <CardHeader className='text-white'>Take a <strong>Virtual</strong> Tour</CardHeader>
            </Card>
          </Col>
          <Col lg={3}>
          <Card style={{background:'orange', fontSize:'32px',padding:'15px',width:'300px',height:'200px'}}>
              <CardHeader className='text-white'>View our current <strong>Vacancies</strong> at West Thames</CardHeader>
            </Card>
          </Col>
          <Col lg={3}>
          <Card style={{background:'green', fontSize:'35px',padding:'15px',width:'300px',height:'200px'}}>
              <CardHeader className='text-white'>Explore the  <strong>Youth Hub</strong> at West Thames</CardHeader>
            </Card>
          </Col>
          <Col lg={3}>
          <Card style={{background:'blue', fontSize:'35px',padding:'15px',width:'300px',height:'200px'}}>
              <CardHeader className='text-white'>West Thames College <strong>Nursary</strong></CardHeader>
            </Card>
          </Col>
        </Row>
      </Container>

      <div className='courses'>

      <Container fluid className="mt-3 px-5">
        <h2 style={{fontWeight:'bold'}} className=" mb-5">Popular Courses!!</h2>
        <Row className="mb-4">
        

            <Col lg={12}  className="d-flex gap-3">
          
            <Card className="col-lg-4 col-sm-12 col-xs-12">
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSoa-ft6M43toNHyuPz4f0fx36EClGI9DLCg&usqp=CAU" />
      <Card.Body>
        <Card.Title>IT Courses</Card.Title>
        <Card.Text>
          Some quick example text to build on the card.
        </Card.Text>
       
        
      </Card.Body>
            </Card>



            <Card className="col-lg-4 col-sm-12 col-xs-12">
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpbq4pIkXftXfNsMzmd1zbN4DXN4AtO1JNCw&usqp=CAU" />
      <Card.Body>
        <Card.Title>Management Courses</Card.Title>
        <Card.Text>
          Some quick example text to build on the card.
        </Card.Text>
        
        
      </Card.Body>
            </Card>

            <Card className="col-lg-4 col-sm-12 col-xs-12">
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu7xxu2cXKH-DFdqsyZJdnqC3Ue1zbUZUwNQ&usqp=CAU" />
      <Card.Body>
        <Card.Title>Journalism and Public Relation Courses

        </Card.Title>
        <Card.Text>
          Some quick example text to build on the card.
        </Card.Text>
        
        
      </Card.Body>
            </Card>

            





            </Col>
        </Row>

        <Row className="mb-4">
        

            <Col lg={12}  className="d-flex gap-3">
            
           


       


           


            <Card className="col-lg-4 col-sm-12 col-xs-12">
      <Card.Img variant="top" src="https://www.west-thames.ac.uk/images/courses/engineering.jpg" />
      <Card.Body>
        <Card.Title>Business Law</Card.Title>
        <Card.Text>
          Some quick example text to build on the card.
        </Card.Text>
       
        
      </Card.Body>
            </Card>



            <Card className="col-lg-4 col-sm-12 col-xs-12">
      <Card.Img variant="top" src="https://www.west-thames.ac.uk/images/courses/healthcare.jpg" />
      <Card.Body>
        <Card.Title>Engineering</Card.Title>
        <Card.Text>
          Some quick example text to build on the card.
        </Card.Text>
        
        
      </Card.Body>
            </Card>

            <Card className="col-lg-4 col-sm-12">
      <Card.Img variant="top" src="https://www.west-thames.ac.uk/images/courses/science.jpg" />
      <Card.Body>
        <Card.Title>Technical Courses</Card.Title>
        <Card.Text>
          Some quick example text to build on the card.
        </Card.Text>
        
        
      </Card.Body>
            </Card>

            





            </Col>
        </Row>

       


        </Container>
      </div>

      <div className='footer'>
      <Container fluid>

<footer  className='text-center text-lg-start text-muted bg-light'>
<section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' style={{background:'rgb(143, 23, 79)'}}>
<div className='me-5 d-none d-lg-block  text-white'>
  <span> <FaPaperPlane className="mx-2"/>Subscribe to our Newsletter to get connected..</span>
</div>


</section>

<section className=''>
<Container fluid className='text-center text-md-start mt-5'>
  <Row className='mt-3'>
    <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
      <h6 className='text-uppercase fw-bold mb-4'>
    
   <img src="https://www.west-thames.ac.uk/templates/wtc/images/logo.png" alt="/" width ="150px"/>
      </h6>
      <p>
      West Thames is a coeducational day and boarding school for grades I to X.
       We welcome and enroll students of all faiths, races, and backgrounds,
       and offer various need-based scholarships each year.
      </p>
    </Col>

    <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
      <h6 className='text-uppercase fw-bold mb-4'>Recent Events</h6>
      <p>
        <a href='#!' className='text-reset'>
          Award Ceremony
        </a>
      </p>
      <p>
        <a href='#!' className='text-reset'>
          Extra Activities
        </a>
      </p>
      <p>
        <a href='#!' className='text-reset'>
          Quiz Program
        </a>
      </p>
      <p>
        <a href='#!' className='text-reset'>
          Awareness
        </a>
      </p>
    </Col>

    <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
      <h6 className='text-uppercase fw-bold mb-4'>Navigation</h6>
      <p>
        <a href='#!' className='text-reset'>
          Home
        </a>
      </p>
      <p>
        <a href='#!' className='text-reset'>
          Gallery
        </a>
      </p>
      <p>
        <a href='#!' className='text-reset'>
          Calendar
        </a>
      </p>
      <p>
        <a href='#!' className='text-reset'>
        Event
        </a>
      </p>
    </Col>

    <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
      <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
      <p>
      
        Eastwest, London
      </p>
      <p>
       
        info@example.com
      </p>
      <p>
         01-4456372
      </p>
      <p>
         01-44537265
      </p>
    </Col>
  </Row>
</Container>
</section>
<hr/>

<div className='text-center p-4' >
© 2021 Copyright:
<a className='text-reset fw-bold' href='https://west.com/'>
  Westthames.com
</a>
</div>
</footer>

</Container>

      </div>
    </>
  );
};

export default HomePage;
