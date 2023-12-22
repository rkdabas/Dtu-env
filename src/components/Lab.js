import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col } from "react-bootstrap";
import Img1 from './images/labimages/inst1.jpg';
import Img2 from './images/labimages/inst2.jpg';
import Img3 from './images/labimages/inst3.jpg';
import Img4 from './images/labimages/inst4.jpg';
import Img5 from './images/labimages/inst5.jpg';
import Img6 from './images/labimages/inst6.jpg';
import Img7 from './images/labimages/inst7.jpg';
import Img8 from './images/labimages/inst8.jpg';
import Img9 from './images/labimages/inst9.jpg';
import Img10 from './images/labimages/inst10.jpg';
import Img11 from './images/labimages/inst11.jpg';
import Img12 from './images/labimages/inst12.jpg';

function Lab() {
  const data = [
        { instrument: "Atomic Absorption Spectrophotometer", make: "Analytik Jena" },
        { instrument: "HPLC", make: "Shimadzu"},
        { instrument: "GC", make: "	Thermo"},
        { instrument: "Multi-parameter (pH & EC)", make: "HACH / Thermo"},
        { instrument: "BOD Monitor", make: "Lovibond"},
        { instrument: "Muffle Furnace", make: "	Yamato"},
        { instrument: "Incubators", make: "	Yamato"},
        { instrument: "Smoke Meter", make: "ABL Instruments"},
        { instrument: "Ultra Water Purification System", make: "Milli Pore"},
        { instrument: "Autoclaves", make: "	Yamato"},
        { instrument: "Double Beam UV Spectrophotometer", make: "Perklin Elmer"},
        { instrument: "Deep Freezer", make: "Blue Star"},
        { instrument: "TOC Analyzer", make: "	Analytic jena"},
        { instrument: "PC Control Voltametric", make: "	Metrohm"},
        { instrument: "Organic Elemental Analyzer", make: "EURO E/A"},
        { instrument: "Oil Content Analyzer", make: "Horiba"},
        { instrument: "Rotary Evaporator with Oil bath", make: "Yamato RE 800 & B0410"},
        { instrument: "Advance Research Microscope", make: "MOTIC Type102 M"},
        { instrument: "High Volume Sampler", make: "Envirotech Okhla"},
        { instrument: "Sound Level Meter", make: "Aimil Ltd."},
        { instrument: "Flue Gas Analyzer", make: "Land Inc."},
        { instrument: "RSPM Sampler APM 460 DXNL", make: "	Envirotech Okhla"},
        { instrument: "Bio-reactor", make: ""},
        { instrument: "Smoke density", make: "Aimil Ltd."},
        { instrument: "Particulate matter", make: "HAZ Dust"}
  ]
  return(
    <div className="max-w-5xl mx-28">
      <div className="labfrontimage">
        <h2>Academic Labs</h2>
      </div>
      <div className="labdiv">
        <Carousel fade >
          <Carousel.Item>
            <img
            className="d-block w-100"
            src={Img1}
            alt="First slide"
            />
            {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src={Img2}
            alt="Second slide"
            />

              {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src={Img3}
            alt="Third slide"
            />

              {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src={Img4}
            alt=" Fourth Slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src={Img5}
            alt=" Fifth Slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src={Img6}
            alt="Sixth Slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src={Img7}
            alt=" Seventh Slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src={Img8}
            alt=" Eighth Slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src={Img9}
            alt=" Ninth Slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src={Img10}
            alt=" tenth Slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src={Img11}
            alt=" Eleventh Slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src={Img12}
            alt=" Twelth Slide"/>
          </Carousel.Item>
        </Carousel>    
        <div className="labc1">
          <h4>Department has set up six well-equipped laboratories:</h4>
          <Row>
            <Col>1. Water Pollution</Col>
            <Col>2. Air & Noise Pollution</Col>
            <Col>3. Environmental Microbiology and Bioremediation</Col>
            <Col>4. Solid Waste Manmakement</Col>
            <Col>5. GIS & Remote Sensing</Col>
            <Col>6. System Simulation</Col>
          </Row>
        </div>
        <div className="labc2">
          <h4>Lab and Research Facilities Available in Department</h4>
          <p>"The Department of Environmental engineering focuses on the major environmental issues of our society. It covers subjects on Air, Noise, Water and Soil Quality Monitoring, Assessment and Management, Socio-Economic Aspects, Environmental Legislation, EIA, Audit, Environmental Chemistry, Environmental Ecology & Microbiology, Wastewater Engineering, Soil Mechanics, Fluid Mechanics & Hydraulics, Remote Sensing & GIS, etc."</p>
        </div>
        <div className="labc3">
          <h4>Instruments available in the Laboratory</h4>
          <table>
            <tr>
              <th>instrument</th>
              <th>make</th>
            </tr>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.instrument}</td>
                  <td>{val.make}</td>
                </tr>
              )
            })}
          </table>
        </div>
      </div>
    </div>
  )
}

export default Lab;