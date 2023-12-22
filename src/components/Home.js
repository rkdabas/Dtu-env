import React from 'react'
import Carousel from './Slider';
import Dtu from './images/dtu.jpeg';
import Img1 from './images/banner.png';
import p1 from './images/homeImages/img02.jpg';
import p2 from './images/homeImages/img03.jpg';
import p3 from './images/homeImages/img04.jpg';
import p4 from './images/homeImages/img05.jpg';
import p5 from './images/homeImages/img06.jpg';
import p6 from './images/homeImages/img07.jpg';
import p7 from './images/homeImages/img08.jpg';
import p8 from './images/homeImages/img09.jpg';
import p9 from './images/homeImages/img10.jpg';
import p10 from './images/homeImages/img11.jpg';
import p11 from './images/homeImages/img12.jpg';
import p12 from './images/homeImages/img13.jpg';


const images=[p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12]
const Home = () => {
  return (
      <div className='flex flex-col justify-center items-center  -mt-16 max-w-5xl mx-28'>
          <div>
            <Carousel 
                images={images}
            />
              {/* <img className='absolute w-full h-full object-cover mix-blend-overlay' src={Dtu} alt='error' /> */}
              {/* <div className='flex justify-center items-center text-white h-16 text-4xl	'>Environmental Engineering</div> */}
          </div>
          <div className=' pt-2'>
              <h2 className='flex justify-center items-center hover:text-neutral-700'>About the department</h2>
              <p>The Department of Environmental Engineering offers B. Tech, M. Tech and PhD programs in Environmental Engineering. A major in Environmental Engineering and three minors in Environmental Engineering, Sustainability, and Environmental Remediation are offered for the B.Tech program. The Department also provides an opportunity for working engineers for academic upgradation by offering part-time postgraduate courses. The department also hosts international students in various programmes admitted through DASA, ICCR, and exchange from Asian, African, and European countries.</p> 
          </div>
          <div>
              <h3 className='flex justify-center items-center hover:text-neutral-700'>Salient Features</h3>
          </div>
          <ul>
              <li>●The department is actively involved in consultancy, research and development and has well-established laboratories in all areas of Environmental Engineering.</li>
              <li>●It provides technical support to NGT for cleaning the river Yamuna, NMCG for cleaning the river Ganga, CPWD for civil construction and environmental services, DJB for water and wastewater management, and many more institutions.</li>
              <li>●The faculty & students of the department have inspected intermixing and trapping of drains joining the river Yamuna.</li>
              <li>●The department undertakes and has completed performance audits of new, upcoming and existing STPs set up by DJB in Delhi.</li>
              <li>●The department is providing technical support for rehabilitating Trunk Drain-2 and Trunk Drain-5, Dwarka, Delhi.</li>
              <li>●It also provides technical support to various institutions such as The Institution of Engineers (India), the International Development Centre Foundation (IDC Foundation), Green Institute for Research and Development (GIRD).</li>
              <li>●Ministry of Jal Shakti, Govt. of India, has approved a proposal worth Rs. 416.29 crores to protect river Godavari in June  2020 based on the department's recommendation.</li>
              <li>●The department releases its e-newsletter, Paryavarnam, on World Environment Day each year, showcasing the highlights of current environmental issues and thoughts and achievements of faculty & students.</li>
              <li>●Department has set up six well-equipped laboratories:
                  <ul>
                  <li>●Water Pollution Lab</li>
                  <li>●Air & Noise Pollution Lab</li>
                  <li>●Environmental Microbiology and Bioremediation Lab</li>
                  <li>●Solid Waste Management Lab</li>
                  <li>●GIS & System Simulation Lab</li>
                  </ul>
              </li>
          </ul>
    </div>
  )
}

export default Home