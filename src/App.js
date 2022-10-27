import logo from './logo.svg';
import './App.css';
import { Button, ButtonToolbar, Col, Container, Row, Toast } from "react-bootstrap";
import { useState } from "react";
import MagGlassImg from './images/icon-supervisor.svg';
import HouseImg from './images/icon-team-builder.svg';
import BulbImg from './images/icon-karma.svg';
import CalcImg from './images/icon-calculator.svg';


function App() {
  return (
      <Container fluid={true}>
          <Row className="justify-content-center mt-5 pt-5">
              <Col xs="auto"><h1 className="heading-1">Reliable, efficient delivery</h1></Col>
          </Row>
          <Row className="justify-content-center">
              <Col xs="auto"><h1 className="heading-2">Powered by Technology</h1></Col>
          </Row>
          <Row className="justify-content-center">
              <Col xs="12" md="5"><h5 className="center-text heading-3">Our Artificial Intelligence powered tools use millions of project data points
                  to ensure that your project is successful</h5></Col>
          </Row>
          <Row className="justify-content-center test-css align-items-center g-5 pt-5">
              <Col xs={12} md="3">
                  <div className="card-container bg-body rounded shadow-lg border-top border-cyan border-5" >
                      <div className="card-contents">
                          <Row className="gy-2">
                              <Col xs={12} className="heading-2">Supervisor</Col>
                              <Col xs={12} className="heading-3">Monitors activity to identify project roadblocks</Col>
                              <Col xs={12}><img src={MagGlassImg} className="float-end"/></Col>
                          </Row>
                      </div>
                  </div>
              </Col>
              <Col xs={12} md="3">
                  <Row className="justify-content-center gy-5">
                      <Col xs={12}>
                          <div className="card-container bg-body rounded shadow-lg border-top border-red border-5" >
                              <div className="card-contents">
                                  <Row className="gy-2">
                                      <Col xs={12} className="heading-2">Team Builder</Col>
                                      <Col xs={12} className="heading-3">Scans our talent network to create the optimal team for your project</Col>
                                      <Col xs={12}><img src={HouseImg} className="float-end"/></Col>
                                  </Row>
                              </div>
                          </div>
                      </Col>
                      <Col xs={12}>
                          <div className="card-container bg-body rounded shadow-lg border-top border-orange border-5" >
                              <div className="card-contents">
                                  <Row className="gy-2">
                                      <Col xs={12} className="heading-2">Karma</Col>
                                      <Col xs={12} className="heading-3">Regularly evaluates our talent to ensure quality</Col>
                                      <Col xs={12}><img src={BulbImg} className="float-end"/></Col>
                                  </Row>
                              </div>
                          </div>
                      </Col>
                  </Row>
              </Col>
              <Col xs={"12"} md="3">
                  <div className="card-container bg-body rounded shadow-lg border-top border-blue border-5" >
                      <div className="card-contents">
                          <Row className="gy-2">
                              <Col xs={12} className="heading-2">Calculator</Col>
                              <Col xs={12} className="heading-3">Uses data from past projects to provide better delivery estimates</Col>
                              <Col xs={12}><img src={CalcImg} className="float-end"/></Col>
                          </Row>
                      </div>
                  </div>
              </Col>
          </Row>
      </Container>
  );
}

export default App;
