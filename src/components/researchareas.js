import React from 'react'
import { Row ,Col } from 'react-bootstrap';
function Researchareas() {
    const sponsoredData=[
        {project:'Study of Ultrafine Particles', agency:'CPCB,Government',amount:'Rs. 79,92,960',investigator:'Dr. Rajeev Kumar Mishra'}
    ]
    const consultancyData=[
        {project:' TPQA job awarded to Department of Environmental Engineering, DTU for Rejuvenation of Drains in Dwarka, Delhi (2021-24)', agency:'',amount:'Rs. 75 lakhs for 3 years (approx.)',investigator:'Prof. S. K. Singh, Prof. A. K. Haritash'},
        {project:' Preliminary project report on rehabilitation of Trunk Drain-2 and Trunk Drain-5,Dwarka, Delhi(2019)', agency:'M/s Tata Projects Ltd.',amount:'Rs. 4,86,000',investigator:'Prof. S. K. Singh, Sh. Gour Anunay Ashokkumar'},
        {project:' Validation and approval of the technical scheme, hydraulic calculation, and hydraulic diagram. (2022)', agency:'M/s Suez Pvt. Ltd.',amount:'Rs. 3,54,000',investigator:'Sh. Gour Anunay Ashokkumar'},
        {project:'Validation and Approval of Structural Drawings for Disc Filter, UV Disinfection System, Odour Control System & Blower Shed (2023)', agency:'M/s Suez Pvt. Ltd',amount:'Rs. 11,92,526',investigator:'Sh. Gour Anunay Ashokkumar'}
        
    ]

    
  return (
    <div className='researchareas'>
        <div className='areas'>
            <Row>
                <Col>
                 <h4> Thrust Area of the 
Research</h4>
                 <p>Air, Noise, Water and Soil Quality Monitoring, Assessment and Management, Socio-Economic Aspects, Environmental Legislation, EIA, Audit, Environmental Chemistry, 
Environmental Ecology & Microbiology, Wastewater Engineering, Soil Mechanics, Fluid 
Mechanics & Hydraulics, Remote Sensing & GIS, etc</p>
                </Col>
                <Col>
                <h4>
                Major infrastructure related 
to Research
                </h4>
                <p>
                The Department of Environmental Engineering has well-established laboratories in the 
area of Environmental Engineering, Water Pollution, Air & Noise Pollution Control, 
Solid Waste Management, Microbiology, GIS and Remote Sensing
                </p>
                </Col>
            </Row>
        </div>
        <div className='sponsored'>
            <h4>Sponsored projects</h4>
        <table>
                    <tr>
                        <th>Title of Project</th>
                        <th>Name of the Funding Agency </th>
                        <th>Total Amount</th>
                        <th>Name of Principle Investigator</th>
                    </tr>
                    {sponsoredData.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.project}</td>
                                <td>{val.agency}</td>
                                <td>{val.amount}</td>
                                <td>{val.investigator}</td>
                            </tr>
                        )
                    })}
                </table>
        </div>
        <div className='consultancy'>
        <h4>Consultancy projects</h4>
        <table>
                    <tr>
                        <th>Title of Project</th>
                        <th>Name of the Funding Agency </th>
                        <th>Total Amount</th>
                        <th>Name of Principle Investigator</th>
                    </tr>
                    {consultancyData.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.project}</td>
                                <td>{val.agency}</td>
                                <td>{val.amount}</td>
                                <td>{val.investigator}</td>
                            </tr>
                        )
                    })}
                </table>
        </div>

    </div>
  )
}

export default Researchareas;