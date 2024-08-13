import React from 'react'
import { useNavigate } from 'react-router-dom';
import openContentPage from './methods/methods';

const Tescomheros = () => {
    const navigate = useNavigate()
    const tescomHRData = [
        {
            title: "Bhavesh Patil: A Visionary Leader in IT and Telecom",
            img: "https://media.licdn.com/dms/image/D4D22AQEyi9dY6hWUHg/feedshare-shrink_800/0/1719054294457?e=1724284800&v=beta&t=m8cWvqJLUdVlRBNsS19Wp3CYRfxjt_6dBlhX1aiQZ-U",
            desc: "Bhavesh Patil, a 21-year-old entrepreneur from Kalyan, is making waves in the IT and telecom industry with his innovative approach and visionary leadership. As the COO of TESCOM Business Solutions, he is committed to leveraging technology to empower businesses and drive growth. With a strong passion for business and a background in Information Technology, Bhavesh has overcome challenges and achieved milestones, building a loyal customer base and a talented team. His story is an inspiration to aspiring entrepreneurs, highlighting the importance of vision, adaptability, and customer-centricity in driving business success.\n\n 🚀 Excited to share 𝐁𝐡𝐚𝐯𝐞𝐬𝐡 𝐏𝐚𝐭𝐢𝐥 journey as the Co-Founder of TESCOM Business Solutions LLP ! we're dedicated to driving innovation and growth in the IT and telecom sector.From network connectivity and cybersecurity to data center & cloud solutions, Iot & mobility, and unified communications, His goal is to empower businesses to thrive in the digital age.🚀Passionate about leveraging technology to create value and drive business success. "
        },
        {
            title: "Aditya Ramashankar Yadav is a trailblazing co-founder of Tescom.",
            img: "https://github.com/user-attachments/assets/71b392e1-a031-47c5-9faa-68e851d9116d",
            desc: "Aditya Yadav is a visionary entrepreneur who co-founded Tescom. He has a strong background in computer science and graphic design and is passionate about innovation. He is a proactive and forward-thinking individual who is always looking for new challenges and opportunities. Aditya is committed to continuous learning and is an exemplary leader who is shaping the future of technology. He inspires his team to embrace innovation and push boundaries to achieve new heights. His relentless pursuit of excellence has made Tescom a leader in its field. "
        },
        {
            title: "Shrutika Gamre is the Co-Founder of TESCOM Business Solutions.",
            img: "https://media.licdn.com/dms/image/D4D22AQGVhGa5ra_FUA/feedshare-shrink_800/0/1719044259994?e=1724284800&v=beta&t=vcLLET91j8YJ_bQcNn0ua0ZNs386U8tosMLKu3nk5QE",
            desc: "Shrutika Gamre, Co-Founder of TESCOM Business Solutions, started her career in HR and rose to become a Human Resources Manager. In 2023, she co-founded TESCOM, a company offering Colocation, Cloud Services, Network, Security, and Data Center solutions. A visionary leader, Shrutika is committed to excellence and growth, inspiring young professionals and entrepreneurs with her dedication and mindset. Celebrating the inspiring journey of Shrutika Gamre, a visionary leader and co-founder of TESCOM Business Solutions. Her dedication and innovation are paving the way for a brighter future in the business world.In the ever-evolving world of business and technology, Shrutika Gamre stands out as a beacon of inspiration and leadership. Starting her journey with a strong academic foundation in Commerce and Human Resources, Shrutika quickly made her mark in the professional world. From honing her skills in human resources to co-founding TESCOM Business Solutions, her path is marked by passion, hard work, and strategic growth.Shrutika's contributions go beyond business success; they significantly impact national growth by fostering innovation in cloud and data center services. Her story serves as a testament to what determination and vision can achieve, inspiring young professionals and entrepreneurs alike.As we look forward, Shrutika's commitment to excellence ensures that TESCOM will continue to lead in the industry, driving exceptional value for clients and contributing to broader economic development. Let's draw inspiration from Shrutika Gamre and strive to make a difference in our respective fields. "
        },
        {
            title: "Mamta Thakur A Journey of Determination and Growth in the Telecalling Industry.",
            img: "https://github.com/user-attachments/assets/fb5be70d-9a4d-44d8-b40d-de9484e1694f",
            desc: "Mamta Thakur is a dedicated professional whose career reflects hard work, resilience, and a drive for excellence. She started her career as a caller at Club Resales and through hard work and dedication rose to become co-founder of TESCOM Business Solutions. She is an inspiration to others. "
        }
    ]

    const pravinBossData = {
        title: "PRAVIN KUMAR PUJARI\nINNOVATION AND GROWTH : A GLIMPSE INTO PRAVIN KUMAR PUJARI'S LEADERSHIP",
        img: "https://media.licdn.com/dms/image/D4D22AQESvjIuhf7VIw/feedshare-shrink_1280/0/1716279903575?e=1724889600&v=beta&t=rTBGfAN7cAebfli1SHI28bFNWbnvwDaQP_of50yGN-0",
        desc: "🚀 𝑰𝒏𝒏𝒐𝒗𝒂𝒕𝒊𝒐𝒏 𝒂𝒏𝒅 𝑮𝒓𝒐𝒘𝒕𝒉: A Glimpse into Pravin Kumar Pujari’s Leadership 🚀We are excited to share an insightful look at Pravin Kumar Pujari, the visionary behind Tescom. Driven by a passion for addressing specific market needs, Pravin's entrepreneurial spirit and strategic thinking have propelled him to the forefront of the tech industry.𝐈𝐧 𝐭𝐡𝐢𝐬 𝐛𝐥𝐨𝐠, we explore Pravin's views on the future of technology in business leadership, his diverse approach to tech leadership, and his strategies for encouraging innovation and growth. Pravin's journey highlights his resilience and problem-solving skills as he navigates challenges like securing funding, building a talented team, and keeping up with the latest technology trends.𝑱𝒐𝒊𝒏 𝒖𝒔 in celebrating his dedication to driving technological innovation and his commitment to nurturing teamwork and talent development.📖 Read the full blog to gain valuable insights and lessons for aspiring tech entrepreneurs and leaders."
    }
    return (
        <> <br />
            <div class="card mb-3 crd" style={{maxWidth:'80%', margin:'auto', backgroundColor:'#99ffc2'}} onClick={()=>{openContentPage(pravinBossData.title+pravinBossData.subTitle,pravinBossData.img, pravinBossData.desc, navigate)}}>
                <div class="row g-0">
                    <div class="col-md-4" style={{display:'flex', justifyContent:'center'}}>
                        <img src={pravinBossData.img} width="65%" class="img-fluid rounded-start" alt="pravin kumar pujari"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h1 class="card-title">{pravinBossData.title}</h1>
                            <h4 class="card-title">{pravinBossData.subTitle}</h4>
                            <p class="card-text">{pravinBossData.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }} >
                    <div className="card mb-3 crd" style={{ maxWidth: '50%', height: '50vh', margin: '10px', backgroundColor: '#ffbfbf' }} onClick={() => { openContentPage(tescomHRData[0].title, tescomHRData[0].img, tescomHRData[0].desc, navigate) }} >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={tescomHRData[0].img} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 className="card-title">{tescomHRData[0].title}</h1>
                                    <p className="card-text">{(tescomHRData[0].desc.length >= 600) ? tescomHRData[0].desc.substring(0, 600) + "..." : tescomHRData[0].desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 crd" style={{ maxWidth: '50%', height: '50vh', margin: '10px', backgroundColor: '#abd2ff' }} onClick={() => { openContentPage(tescomHRData[1].title, tescomHRData[1].img, tescomHRData[1].desc, navigate) }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={tescomHRData[1].img} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 className="card-title">{tescomHRData[1].title}</h1>
                                    <p className="card-text">{(tescomHRData[1].desc.length >= 400) ? tescomHRData[1].desc.substring(0, 400) + "..." : tescomHRData[1].desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
                    <div className="card mb-3 crd" style={{ maxWidth: '50%', height: '50vh', margin: '10px', backgroundColor: '#ffe0c4' }} onClick={() => { openContentPage(tescomHRData[2].title, tescomHRData[2].img, tescomHRData[2].desc, navigate) }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={tescomHRData[2].img} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 className="card-title">{tescomHRData[2].title}</h1>
                                    <p className="card-text">{(tescomHRData[2].desc.length >= 400) ? tescomHRData[2].desc.substring(0, 400) + "..." : tescomHRData[2].desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 crd" style={{ maxWidth: '50%', height: '50vh', margin: '10px', backgroundColor: '#fff3c4' }} onClick={() => { openContentPage(tescomHRData[3].title, tescomHRData[3].img, tescomHRData[3].desc, navigate) }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={tescomHRData[3].img} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 className="card-title">{tescomHRData[3].title}</h1>
                                    <p className="card-text">{(tescomHRData[3].desc.length >= 400) ? tescomHRData[3].desc.substring(0, 400) + "..." : tescomHRData[3].desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </>
    )
}

export default Tescomheros