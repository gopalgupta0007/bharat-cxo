import { Helmet, HelmetProvider } from "react-helmet-async";

function About() {
  return (
    <>
      <HelmetProvider>
        <Helmet><title>Bharat CXO || About</title></Helmet>
        <div id="about-container" style={{ margin: '130px 0 -1000px' }}>
          <div id="about-sub-container" idontknow="hellow" style={{ textAlign: 'center', margin: '0 10vw' }}>
            <h1 className="headingAnimation">About BharatCXO</h1>
            <p style={{ fontSize: '20px' }}>Bharat CXO is a dynamic and innovative media company dedicated to serving the Indian CXO community across the globe. With a commitment to delivering high-quality content and fostering meaningful connections, we specialize in producing online and offline magazines, conducting insightful interviews, and organizing impactful events.</p>
            <br />
            <h1 className="headingAnimation">Mission</h1>
            <p style={{ fontSize: '20px' }}>At Bharat CXO, we believe in the power of leadership, collaboration, and cutting-edge technology to propel organizations to new heights. Our mission is to empower CXOs with the knowledge, connections, and resources they need to lead their organizations with confidence and agility in an ever-evolving business landscape.
              Join us as we explore the stories of dynamic leaders, share thought-provoking content, and foster a community of forward-thinking professionals committed to shaping the future of business in India. </p>
            <br />
            <h1 className="headingAnimation">Vision</h1>
            <p style={{ fontSize: '20px' }}>Our vision is to be the foremost platform that empowers and connects Indian CXOs globally, providing them with valuable insights, networking opportunities, and a platform to share their experiences and expertise.</p>
            <br />
            <h1 className="headingAnimation">Awards And Recognitions</h1>
            <p style={{ fontSize: '20px' }}>Bharat CXO recognizes and celebrates excellence in leadership through prestigious awards. Our awards programs aim to recognize and honour leaders who have demonstrated exceptional leadership qualities, innovation, and impact in their respective fields. These accolades serve as a testament to the outstanding contributions of individuals and organizations.</p>
            <br />
            <h1 className="headingAnimation">Our Services</h1>
            <ul style={{ fontSize: '18px' }}>
              <li>Bharat CXO proudly presents "CXO Samvaad" a premier publication available both online and offline.</li>
              <li>CXO Samvaad is a premier business magazine features insightful interviews with C-level executives, IT leaders, and professionals in the rapidly evolving landscape of emerging technologies.</li>
              <li>We provide insightful content that delves into their startup and business journeys, entrepreneurship, and more, providing a comprehensive perspective on their experiences and expertise.</li>
            </ul>
            <hr />
            <img src="https://media.licdn.com/dms/image/D4D03AQGQYmxozyuavg/profile-displayphoto-shrink_800_800/0/1696520189343?e=1727308800&v=beta&t=pzbygwt9CyilISHfGHKvmiVaDbXK5YwTWaxiTB8GOxU" width="200px" height="200px" style={{ border: '3px dashed black', borderRadius: '20px' }} alt="Vivek Bhattacharya" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: 'fit-content', backgroundImage: 'linear-gradient(45deg, #807c71,#544e38)', margin: 'auto', padding: '0.5vw 0.5vw', borderRadius: '20px', position: 'relative', bottom: '30px', border: '3px double #555' }}>
                <h5 style={{ textAlign: 'center', color: 'white', textShadow: '0 0 1px red' }}><b><u>Founder</u></b></h5>
                <h4 style={{ textAlign: 'center', color: 'white', textShadow: '0 0 1px red' }}>Vivek Bhattacharya</h4>
              </div>
            </div>
          </div>
        </div >
      </HelmetProvider>
    </>
  );
}

export default About;
