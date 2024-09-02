import Carousel from "./Carousel";
import bgVideo from "../Img/videoplayback.mp4";
import Card from './Card';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Home({data}) {

  // useEffect(() => {
  //   console.log(data);
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('/getallcxodata');
  //       console.log(response.data[0]);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const cioDataMain = [{
    title: "Celebrating Excellence in IT: The Journey of Ujjal Kumar Ghatak",
    img: "https://github.com/user-attachments/assets/9a73376e-7324-4914-abb6-14ab8178c3a4",
    desc: "Ujjal Kumar Ghatak's remarkable career in Information Technology spans over 30 years, showcasing his expertise and leadership across various industries, including power, energy, and manufacturing.Ujjal's strong educational foundation includes a Doctor of Excellence in IT, a Master's in Control System Engineering from IIT Kharagpur, and a Bachelor's in Electrical Engineering from Jadavpur University.As the current CIO of Saurashtra Cement Ltd, Ujjal manages IT infrastructure and cybersecurity globally. He has also held key positions in major companies like AG&P, The Heart of Europe, Al Hamra, TATA Power, Petrofac International, and Reliance Industries.Ujjal is a master in IT strategy, consulting, and enterprise applications. His innovative approach has driven significant digital transformations in business analytics, mobility, social media, big data, and cloud technology. Ujjal excels in strategic leadership, mentoring, and fostering innovation. His vision has modernized technology and business frameworks across various organizations.Ujjal's contributions have earned him numerous accolades, including the Doctor of Excellence for his outstanding performance in IT."
  },
  {
    title: "Sanjeev Jain",
    img: "https://github.com/user-attachments/assets/319b544f-957f-410d-83f3-893d2f95e8cb",
    desc: "With over 18 years of distinguished experience in IT infrastructure setup and management, project management, networking, systems administration, and data center management, Honorable Mr. Sanjeev Jain has consistently demonstrated expertise in various domains.He has attained excellence in critical areas such as server virtualizations and the implementation of Virtual Desktop Interface (VDI). His proficiency extends to techno-commercial aspects of IT functions, including budgeting, OPEX/CAPEX reduction, execution of Annual Maintenance Contracts, and effective vendor management.He possesses robust skills in handling matters related to Enterprise License Management. His capabilities also encompass server and network management, involving the meticulous monitoring of servers and networks, as well as security management, including the implementation of anti-virus software and robust data backup strategies.An effective communicator with strong people management and leadership skills. Moreover, his wealth of experience includes a proven track record in bringing uniformity to process documentation, assessing modules, and adeptly revamping and restructuring documentation to align with evolving business requirements. Stands as a seasoned professional with a holistic skill set and a history of driving operational excellence in the IT landscape.In his role as Chief Information Officer (CIO) at Integreon, is the driving force behind strategic IT functions. Tasked with enhancing cost-effectiveness, security, and service quality, he oversees the entire IT framework of the organization. Mr. Jain excels at bridging the gap between IT and corporate strategic goals, providing both strategic and tactical planning, and coordinating the development and evaluation of information and technology systems.A key advocate for efficiency, he is committed to standardizing the company's use of technology, eliminating redundancies, and championing a unified \"One Company\" message. With a visionary approach, He consistently assesses and recommends new technologies, staying abreast of industry trends to keep the organization at the forefront of technological innovation.In his leadership capacity, Mr. Jain manages a global team of IT associates, allocating roles and responsibilities while serving as a mentor and motivator. His strategic deployment of IT resources supports projects and resolves technical issues in a timely and cost-effective manner. Additionally, he maintains close contact with IT suppliers, skillfully negotiating contracts to minimize investment requirements.His leadership embodies a commitment to driving technological excellence, fostering innovation, and aligning IT initiatives with Integreon's overarching goals. His desired skills and experience reflect a comprehensive understanding of the dynamic IT landscape and an unwavering dedication to achieving organizational success through strategic technology management."
  },
  {
    title: "Gaurav Vyas: A Trailblazer in IT Leadership",
    img: "https://github.com/user-attachments/assets/464d8ebc-e75e-42eb-8c02-72076ebca228",
    desc: "Gaurav Vyas, currently the Head of Information Technology at SPGPrints India (Stovec Industries Limited), has built a stellar career over 17 years in the IT industry. His journey began at Adani Ports and SEZ, where he earned accolades for his dedication and technical support skills. He then advanced through roles at Accel Frontline Limited, Reliance Industries Limited, and CMS Info Systems, where he managed large teams and delivered exceptional service.At Jekson Vision Pvt. Ltd., Gaurav led significant IT projects, enhancing infrastructure, cybersecurity, and ERP systems. His accomplishments in this role were recognized with several prestigious awards, including the Best CIO Award, Catalyst Award, and The World CIO 200 Award.Gaurav holds a Bachelor's degree in IT, an MBA in Information Technology, and various certifications, demonstrating his commitment to continuous learning and professional development.In his current position, Gaurav drives digital transformation at SPGPrints India, leveraging his expertise to align technology strategies with business goals. His visionary leadership and innovative approach continue to set him apart as a standout figure in the IT industry.."
  }
  ]
  return (
    <>
      <HelmetProvider>
        <Helmet><title>Bharat CXO || Home</title></Helmet>
        <div style={{ margin: '7vw 0 0' }}>
          <div className="main">
            <video src={bgVideo} autoPlay loop muted style={{ width: '100%', height: "50%", overflow: 'hidden', border: '2px solid black', position: 'relative', zIndex: -1 }}></video>
          </div>
          <hr />
          <Carousel className="block"/>
          <hr />
          {/* <Card cioData={cioDataMain} /> */}
          <Card cioData={data} />
        </div>
      </HelmetProvider>
    </>
  );
}

export default Home;
