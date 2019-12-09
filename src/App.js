import React from 'react';
import './App.css';
import { Button, Container, Row, Card, Col } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Container fluid={true} style={{ height: '100vh' }}>
        <Row>    
          <Card className='mx-auto'>
            <Row>           
          <Col>       
              <Row>
                <Button variant='primary'>Sound 1</Button>
                <Button variant='primary'>Sound 2</Button>
                <Button variant='primary'>Sound 3</Button>
              </Row>
              <Row>
                <Button variant='primary'>Sound 4</Button>
                <Button variant='primary'>Sound 5</Button>
                <Button variant='primary'>Sound 6</Button>
              </Row>
              <Row>
                <Button variant='primary'>Sound 7</Button>
                <Button variant='primary'>Sound 8</Button>
                <Button variant='primary'>Sound 9</Button>
              </Row> 
              </Col>
              <Col>
              Hello</Col>  
              </Row>       
          </Card>  
          </Row>      
      </Container>
    </div>
  );
}

export default App;
