import { Helmet, HelmetProvider } from 'react-helmet-async';
import openContentPage from './methods/methods';
import { useNavigate } from 'react-router-dom';
import UpdatePosts from './UpdatePosts';
import { useEffect, useState } from 'react';

function Post({ data }) {

  const navigate = useNavigate()

  const [updateBtn, setUpdateBtn] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if the combination Ctrl+C+X+O is pressed
      if (event.ctrlKey && event.key === 'c') {
        document.addEventListener('keydown', (eventX) => {
          if (eventX.key === 'x') {
            document.addEventListener('keydown', (eventO) => {
              if (eventO.key === 'o') {
                setUpdateBtn(true)
              }
            });
          }
        });
      }
    };

    // Add event listener for keydown
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const postData = [
    {
      title: "Anand Mangalam : journey of Innovation and Growth",
      img: "https://github.com/user-attachments/assets/4aaa441c-db68-4e8c-92d7-8562711e53c4",
      desc: "🚀𝐌𝐞𝐞𝐭 𝐀𝐧𝐚𝐧𝐝 𝐌𝐚𝐧𝐠𝐚𝐥𝐚𝐦 with over 33 years of expertise, Anand's visionary leadership has revolutionized the manufacturing sector through cutting-edge technology and strategic innovation. From spearheading digital transformations to mastering cybersecurity and predictive maintenance, his journey is a testament to excellence and relentless pursuit of growth.🔒Read more about Anand's remarkable achievements and how he's shaping the future of IT and manufacturing.📈💡"
    }, {
      title: "Abhinav Srivastava : Innovator, Leader, and award-winning journey",
      img: "https://github.com/user-attachments/assets/84a97d61-f7b6-4449-8977-d230303a6f88",
      desc: "Shoutout to Abhinav Srivastava! 🌟 As CIO and Head of IT GCC in Chennai, Abhinav is revolutionizing digital transformation and boosting efficiency. With projects like Piaggio's E-Commerce Platform and SAP migration to S4 HANA, he's a true tech leader.His accolades, including Lean Six Sigma Green Belt and UIPath RPA certification, showcase his dedication. Abhinav also gives back by volunteering with Teach For India and CARE.Keep shining, Abhinav! Your work inspires us all!"
    }, {
      title: "Sagar Kharbanda : Cybersecurity expert and environmentalist",
      img: "https://github.com/user-attachments/assets/6cc54ad0-80e3-4fb4-8fb1-9077942faa81",
      desc: "Meet Sagar Kharbanda a cybersecurity expert and environmentalist with a B.Techin Computer Science and certifications such as CISSP and CEH. Sagar's career has taken him across India, the US, the UK, Qatar, Dubai, Saudi Arabia, and Oman, where he has made significant contributions to IT risk management and compliance. As the former Chief Information Security Officer at Al Khalij Commercial Bank, he led critical projects, including the Qatar FIFA 2022 Cyber Security Framework Assessment. Beyond his professional achievements, Sagar is dedicated to social service and environmental sustainability, actively participating in tree plantation initiatives since 2015. An avid traveler, sports car enthusiast, pet lover, and movie buff, Sagar balances professional rigor with a commitment to making a positive impact on the planet! 🌱🌎"
    }, {
      title: "Mohit Srivastava : Navigating the complex leadscape of information security",
      img: "https://github.com/user-attachments/assets/c24735bc-6da7-4e7b-bc06-c94c22e50abf",
      desc: "Meet Mohit Srivastava, CISO and DPO at Perfios Software Solutions. With a rich background in Governance, Risk & Compliance (GRC), Mohit has fortified security across industries. His strategic leadership at Jubilant Bhartia, Jubilant Life Sciences, and DHFL Pramerica Life Insurance highlights his prowess in risk management and compliance. An MBA in Finance and certifications like CEH and CISA bolster his expertise. Outside work, Mohit is a passionate photographer and health enthusiast, advocating for a balanced life."
    }, {
      title: "Mohinee Singh : The journey from an intern to a co-founder",
      img: "https://github.com/user-attachments/assets/4f96a2ef-1b8d-4daa-96fc-8f00bb69913a",
      desc: "Mohinee Singh's journey from intern to Co-Founder and CMO of CXO Junction showcases her dedication and leadership. Starting at CyberFrat, she rose to Assistant Vice President, excelling in lead generation, branding, and digital marketing. An IIM Lucknow alumna and Women Leader Award recipient, Mohinee's blend of creativity and data-driven insights has propelled CXO Junction to the forefront of marketing tech solutions and cybersecurity innovation."
    }, {
      title: "Chetan Methur : A media professional who shapes the future",
      img: "https://github.com/user-attachments/assets/273bc9ff-64a7-4311-85e9-387694ae989e",
      desc: "🌟 𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐧𝐠 𝐭𝐡𝐞 𝐫𝐞𝐦𝐚𝐫𝐤𝐚𝐛𝐥𝐞 𝐣𝐨𝐮𝐫𝐧𝐞𝐲 𝐨𝐟 𝐂𝐡𝐞𝐭𝐚𝐧 𝐌𝐚𝐭𝐡𝐮𝐫, a media professional who shapes the future! 🎥📺 With a career spanning over three decades, Chetan has made significant contributions to the Indian media landscape and has been pivotal in mentoring the next generation of media professionals.📚 His ability to adapt to the changing dynamics of media, from traditional film production to digital media, is truly inspiring. As a member of the Advisory Panel for the Central Board of Film Certification, his insights have been instrumental in shaping the narrative of Indian cinema.👏 Chetan’s human-centric approach to leadership and his commitment to nurturing future leaders sets him apart. His journey is a testament to the power of passion, adaptability, and dedication.Join Bharatcxo in acknowledging Chetan Mathur’s incredible achievements and the positive impact he continues to make in the media industry. 🚀"
    },
    {
      title: "𝐋𝐚𝐥𝐢𝐭 𝐓𝐫𝐢𝐯𝐞𝐝𝐢'𝐬 𝐕𝐢𝐬𝐢𝐨𝐧 𝐚𝐧𝐝 𝐈𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐨𝐧",
      img: "https://github.com/user-attachments/assets/89a595c0-71f4-4f75-93b6-fee0c18df236",
      desc: "Lalit Trivedi is a top IT leader with 25 years of experience in global IT, cyber security, and digital transformation. He manages advanced data centers and leads AI and IoT projects in India and Africa, driving growth and innovation with a focus on secure and efficient tech systems."
    }
    , {
      title: " CELEBRATING EXCELLENCE IN INFORMATION  TECHNOLOGY: THE JOURNEY OF UJJAL KUMAR GHATAK",
      img: "https://github.com/user-attachments/assets/e4280f9d-87ae-4993-b568-e233fd5f4812",
      desc: "Honoring over 30 years of IT excellence with Ujjal Kumar Ghatak! From CIO roles in leading global corporations to pioneering digital transformations, his journey is a testament to the power of leadership and innovation in technology. 🌟"
    }, {
      title: " GAURAV VYAS: A TRAILBLAZER IN IT LEADERSHIP ",
      img: "https://github.com/user-attachments/assets/40bff828-23f9-4bad-82d3-9862f8d4b3cf",
      desc: "🚀 𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐧𝐠 𝐄𝐱𝐜𝐞𝐥𝐥𝐞𝐧𝐜𝐞 𝐢𝐧 𝐈𝐓 𝐋𝐞𝐚𝐝𝐞𝐫𝐬𝐡𝐢𝐩! 🚀Meet Gaurav Vyas, our trailblazing Head of Information Technology at SPGPrints India (Stovec Industries Limited). With over 17 years of industry expertise, Gaurav’s visionary leadership and dedication to innovation are transforming our IT landscape. From winning the Best CIO Award to pioneering digital transformation, his journey is an inspiring testament to perseverance and excellence. Join us in celebrating Gaurav’s outstanding contributions and his commitment to driving business success through strategic IT enablement."
    },
    {
      title: "Experienced Information Security Professional",
      img: "https://github.com/user-attachments/assets/ce094421-3c89-4cb2-ad15-31da75383473",
      desc: "🚀Shoutout to Nirav Hiradhar , CISO at CDSL Insurance Repository Ltd, for his exceptional work in information security! With 15 years of experience and roles at top firms like UTI and HDFC Bank, Nirav's expertise is unparalleled. His credentials include CISM, CEH, ITIL, and ISO 27001:2013, backed by strong academic achievements.Congrats, Nirav Hiradhar , on your continued success and well-deserved recognition!"
    },
    {
      title: "A Pillar of Innovation and Leadership in the IT sector",
      img: "https://github.com/user-attachments/assets/388cb636-87f6-4aef-9b65-8d5779f9e9d6",
      desc: "Shout out to Purvi Shah for her exceptional leadership in the IT sector! With over 17 years of experience, Purvi stands out for her innovation and strategic vision. From rising quickly at HDFC Bank to leading significant projects at Adani Realty, her journey is inspiring. During COVID-19, she showcased her entrepreneurial spirit, driving growth for SG Enterprises. Now, as CIO at Krisala Developers, Purvi's strategic thinking and ability to inspire teams make her a true role model. Her dedication to digital transformation and social causes is commendable. Purvi Shah is a beacon of excellence and inspiration."
    },
    {
      title: "FROM VISION TO REALITY: THE INSPIRING JOURNEY OF SAMBASIVA RAO GATTU IN PORT DIGITALIZATION",
      img: "https://github.com/user-attachments/assets/32b57ac2-9ec2-49e7-8049-0662db417d55",
      desc: "🌟𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐧𝐠 𝐭𝐡𝐞 𝐫𝐞𝐦𝐚𝐫𝐤𝐚𝐛𝐥𝐞 𝐣𝐨𝐮𝐫𝐧𝐞𝐲 𝐨𝐟 𝐒𝐚𝐦𝐛𝐚𝐬𝐢𝐯𝐚 𝐑𝐚𝐨 𝐆𝐚𝐭𝐭𝐮, , a true pioneer in port digital transformation! From his early beginnings to leading IT and digitalization at JSW Jaigarh Port Ltd, Sambasiva’s dedication and innovation have set new benchmarks in the industry. 🚀His commitment to excellence and his ability to seamlessly integrate technology with operations are truly inspiring. Here’s to celebrating a leader who continuously drives progress and efficiency in the port sector! 👏"
    },
    {
      title: "KALPESH DOSHI: PIONEERING CYBERSECURITY LEADERSHIP AND INNOVATION",
      img: "https://github.com/user-attachments/assets/5e5abdd4-3151-40aa-924e-b79f6f08355c",
      desc: "𝐊𝐚𝐥𝐩𝐞𝐬𝐡 𝐃𝐨𝐬𝐡𝐢, 𝒃𝒂𝒔𝒆𝒅 𝒊𝒏 𝑴𝒖𝒎𝒃𝒂𝒊, 𝑴𝒂𝒉𝒂𝒓𝒂𝒔𝒉𝒕𝒓𝒂, 𝒊𝒔 𝒂 𝒅𝒊𝒔𝒕𝒊𝒏𝒈𝒖𝒊𝒔𝒉𝒆𝒅 𝑪𝒉𝒊𝒆𝒇 𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒐𝒏 𝑺𝒆𝒄𝒖𝒓𝒊𝒕𝒚 𝑶𝒇𝒇𝒊𝒄𝒆𝒓 (𝑪𝑰𝑺𝑶) 𝒂𝒏𝒅 𝒃𝒖𝒔𝒊𝒏𝒆𝒔𝒔 𝒔𝒕𝒓𝒂𝒕𝒆𝒈𝒊𝒔𝒕. 𝑹𝒆𝒏𝒐𝒘𝒏𝒆𝒅 𝒇𝒐𝒓 𝒉𝒊𝒔 𝒆𝒙𝒑𝒆𝒓𝒕𝒊𝒔𝒆 𝒊𝒏 𝒄𝒚𝒃𝒆𝒓𝒔𝒆𝒄𝒖𝒓𝒊𝒕𝒚 𝒂𝒏𝒅 𝒆𝒏𝒕𝒆𝒓𝒑𝒓𝒊𝒔𝒆 𝒓𝒊𝒔𝒌 𝒎𝒂𝒏𝒂𝒈𝒆𝒎𝒆𝒏𝒕, 𝑫𝒐𝒔𝒉𝒊 𝒆𝒙𝒄𝒆𝒍𝒔 𝒊𝒏 𝒄𝒓𝒂𝒇𝒕𝒊𝒏𝒈 𝒆𝒇𝒇𝒆𝒄𝒕𝒊𝒗𝒆 𝒄𝒚𝒃𝒆𝒓 𝒔𝒕𝒓𝒂𝒕𝒆𝒈𝒊𝒆𝒔, 𝒆𝒏𝒔𝒖𝒓𝒊𝒏𝒈 𝒅𝒂𝒕𝒂 𝒑𝒓𝒊𝒗𝒂𝒄𝒚, 𝒂𝒏𝒅 𝒆𝒏𝒉𝒂𝒏𝒄𝒊𝒏𝒈 𝒐𝒓𝒈𝒂𝒏𝒊𝒛𝒂𝒕𝒊𝒐𝒏𝒂𝒍 𝒓𝒆𝒔𝒊𝒍𝒊𝒆𝒏𝒄𝒆. 𝑯𝒊𝒔 𝒓𝒐𝒍𝒆 𝒂𝒍𝒔𝒐 𝒊𝒏𝒄𝒍𝒖𝒅𝒆𝒔 𝒐𝒗𝒆𝒓𝒔𝒆𝒆𝒊𝒏𝒈 𝒗𝒆𝒏𝒅𝒐𝒓 𝒎𝒂𝒏𝒂𝒈𝒆𝒎𝒆𝒏𝒕 𝒂𝒏𝒅 𝒎𝒆𝒏𝒕𝒐𝒓𝒊𝒏𝒈 𝒆𝒎𝒆𝒓𝒈𝒊𝒏𝒈 𝒄𝒚𝒃𝒆𝒓𝒔𝒆𝒄𝒖𝒓𝒊𝒕𝒚 𝒑𝒓𝒐𝒇𝒆𝒔𝒔𝒊𝒐𝒏𝒂𝒍𝒔, 𝒅𝒆𝒎𝒐𝒏𝒔𝒕𝒓𝒂𝒕𝒊𝒏𝒈 𝒉𝒊𝒔 𝒄𝒐𝒎𝒎𝒊𝒕𝒎𝒆𝒏𝒕 𝒕𝒐 𝒃𝒐𝒕𝒉 𝒑𝒓𝒐𝒕𝒆𝒄𝒕𝒊𝒏𝒈 𝒅𝒊𝒈𝒊𝒕𝒂𝒍 𝒂𝒔𝒔𝒆𝒕𝒔 𝒂𝒏𝒅 𝒂𝒅𝒗𝒂𝒏𝒄𝒊𝒏𝒈 𝒕𝒉𝒆 𝒇𝒊𝒆𝒍𝒅 𝒐𝒇 𝒄𝒚𝒃𝒆𝒓𝒔𝒆𝒄𝒖𝒓𝒊𝒕𝒚. 🌟✨"
    },
    {
      title: "Rajeev Bhatia Chief Information Officer",
      img: "https://github.com/user-attachments/assets/baf17c28-d77d-4c5e-8861-b8a49c1cec1b",
      desc: "🎉 Congratulations to Rajeev Bhatia and CMS Info Systems ! 🎉We are thrilled to announce that Rajeev has been recognized as a winner of the prestigious hashtag#CIOPowerList2024 and also honored at the hashtag#7thEdition of the CIO Conclave Awards. Achieving not just one, but two awards in the last month alone, Rajeev's dedication and visionary leadership have truly set a benchmark in the industry.🏆 These accolades are a testament to the relentless pursuit of excellence by Rajeev Bhatia.Their innovative solutions and commitment to driving technological advancements continue to inspire us all.Here's to many more milestones and successes ahead!Rajeev Bhatia CMS Info Systems "
    },
    {
      title: "JAYAPRAKASH B - DRIVING EXCELLENCE: A JOURNEY THROUGH IT SHARED SERVICES LEADERSHIP",
      img: "https://github.com/user-attachments/assets/de0b5363-0fd4-415a-be43-31ad8c940ba4",
      desc: "𝐉𝐚𝐲𝐚𝐩𝐫𝐚𝐤𝐚𝐬𝐡 𝐁, 𝒂 𝒅𝒊𝒔𝒕𝒊𝒏𝒈𝒖𝒊𝒔𝒉𝒆𝒅 𝑰𝑻 𝒍𝒆𝒂𝒅𝒆𝒓, 𝒔𝒉𝒂𝒓𝒆𝒔 𝒉𝒊𝒔 𝒋𝒐𝒖𝒓𝒏𝒆𝒚 𝒕𝒉𝒓𝒐𝒖𝒈𝒉 𝑰𝑻 𝒔𝒉𝒂𝒓𝒆𝒅 𝒔𝒆𝒓𝒗𝒊𝒄𝒆𝒔 𝒍𝒆𝒂𝒅𝒆𝒓𝒔𝒉𝒊𝒑. 𝑨𝒔 𝑽𝒊𝒄𝒆 𝑷𝒓𝒆𝒔𝒊𝒅𝒆𝒏𝒕 𝒊𝒏 𝒕𝒉𝒊𝒔 𝒅𝒐𝒎𝒂𝒊𝒏, 𝒉𝒆 𝒐𝒗𝒆𝒓𝒔𝒆𝒆𝒔 𝑮𝒍𝒐𝒃𝒂𝒍 𝑪𝒂𝒑𝒂𝒃𝒊𝒍𝒊𝒕𝒚 𝑪𝒆𝒏𝒕𝒆𝒓𝒔 𝒂𝒏𝒅 𝑪𝒆𝒏𝒕𝒆𝒓𝒔 𝒐𝒇 𝑬𝒙𝒄𝒆𝒍𝒍𝒆𝒏𝒄𝒆, 𝒅𝒓𝒊𝒗𝒊𝒏𝒈 𝒊𝒏𝒏𝒐𝒗𝒂𝒕𝒊𝒐𝒏 𝒂𝒏𝒅 𝒐𝒑𝒆𝒓𝒂𝒕𝒊𝒐𝒏𝒂𝒍 𝒆𝒇𝒇𝒊𝒄𝒊𝒆𝒏𝒄𝒚. 𝑯𝒊𝒔 𝒔𝒕𝒓𝒂𝒕𝒆𝒈𝒊𝒄 𝒗𝒊𝒔𝒊𝒐𝒏 𝒔𝒉𝒂𝒑𝒆𝒔 𝒕𝒉𝒆 𝒇𝒖𝒕𝒖𝒓𝒆 𝒐𝒇 𝑰𝑻 𝑺𝒉𝒂𝒓𝒆𝒅 𝑺𝒆𝒓𝒗𝒊𝒄𝒆𝒔, 𝒎𝒂𝒌𝒊𝒏𝒈 𝒉𝒊𝒎 𝒂 𝒌𝒆𝒚 𝒊𝒏𝒇𝒍𝒖𝒆𝒏𝒄𝒆𝒓 𝒊𝒏 𝒕𝒉𝒆 𝒊𝒏𝒅𝒖𝒔𝒕𝒓𝒚. 𝑾𝒊𝒕𝒉 𝒐𝒗𝒆𝒓 28 𝒚𝒆𝒂𝒓𝒔 𝒐𝒇 𝒆𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒆, 𝑱𝒂𝒚𝒂𝒑𝒓𝒂𝒌𝒂𝒔𝒉’𝒔 𝒄𝒐𝒎𝒎𝒊𝒕𝒎𝒆𝒏𝒕 𝒕𝒐 𝒒𝒖𝒂𝒍𝒊𝒕𝒚, 𝒄𝒖𝒔𝒕𝒐𝒎𝒆𝒓 𝒗𝒂𝒍𝒖𝒆, 𝒂𝒏𝒅 𝒅𝒊𝒈𝒊𝒕𝒂𝒍 𝒕𝒓𝒂𝒏𝒔𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒐𝒏 𝒊𝒏𝒔𝒑𝒊𝒓𝒆𝒔 𝒖𝒔 𝒂𝒍𝒍. 🌟"
    },
    {
      title: "RABINARAYAN PARIDA-EXPERT IN ENTERPRISE CLOUD SOLUTIONS",
      img: "https://github.com/user-attachments/assets/d9842712-c0d4-4aa9-be00-0958f7f0dde7",
      desc: "Rabinarayan Parida, with 20 years of experience, excels in cloud technologies and enterprise application development. Skilled in Microsoft Azure and Google Cloud, he has led key roles at Brio Technologies and Infosys. His expertise and leadership make him a valuable asset in digital services and cloud solutions 🌟"
    },
    {
      title: "RAJKUMAR AYYELLA-A JOURNEY OF EXCELLANCE AND INSPIRATION",
      img: "https://github.com/user-attachments/assets/b4127221-3df9-4ffc-bd91-79f2acce9ef4",
      desc: "Rajkumar Ayyella's story is a remarkable example of how individual excellence can contribute to collective growth. As Carysil continues to innovate and expand, leaders like Jadeja will undoubtedly play a key role in shaping the future of the industry and contributing to the nation’s progress"
    },
    {
      title: "HEMANT KUMAR JOURNEY AND ACHIEVEMENTS OF HEMANT KUMAR: A SECURITY LEADER",
      img: "https://github.com/user-attachments/assets/3ee96753-3fee-4d62-a424-394007369300",
      desc: "🚀 Celebrating Hemant Kumar's Stellar Journey in Information Security! 🚀Hemant Kumar stands as a beacon in the realm of IT and cybersecurity, with a career spanning over two decades. From his foundational days at HCL Infosystems to his current role as CISO at Bajaj Auto Finance, Hemant has consistently demonstrated profound expertise and leadership.Throughout his career, Hemant has been instrumental in safeguarding critical assets for prominent organizations, driving strategic vision, and fostering innovation. His contributions have not only fortified organizational defenses but also inspired the next generation of security professionals."
    },
    {
      title: "BHASKAR RAO: A Journey of Technological Excellence in Banking",
      img: "https://github.com/user-attachments/assets/8a302737-eb94-4e76-af30-a76ad1a13632",
      desc: "𝐀 𝐋𝐞𝐚𝐝𝐢𝐧𝐠 𝐄𝐱𝐩𝐞𝐫𝐭 𝐢𝐧 𝐃𝐢𝐠𝐢𝐭𝐚𝐥 𝐁𝐚𝐧𝐤𝐢𝐧𝐠 𝐚𝐧𝐝 𝐒𝐞𝐜𝐮𝐫𝐢𝐭𝐲 🌟With over 20 years of experience, Bhaskar Rao has significantly improved digital banking and security. As CISO at The Bharat Co-operative Bank, his innovative approach and robust security measures have made him a key figure in the industry. Recognized at international conferences and awarded numerous times, Bhaskar continues to lead in information security and technology."
    },
    {
      title: " Bhavesh Trivedi: EMPOWERING BRANDS WITH STRATEGIC MARKETING EXPERTISE",
      img: "https://github.com/user-attachments/assets/a6710c1f-7da5-47c1-9d02-4347814b24f4",
      desc: "Meet Bhavesh Trivedi, a Fractional CMO with over 23 years of experience. Bhavesh excels in branding, growth marketing, and strategic consulting to help businesses boost revenue and market presence. His expertise in global marketing, SaaS, SEO, and content strategy makes him a valuable partner for any company aiming for success."
    },
    {
      title: " DHIRAJ RANKA LEADER IN CYBERSECURITY AND RISK MANAGEMENT",
      img: "https://github.com/user-attachments/assets/a4276230-2e0d-4ad7-9338-00cd1fe43bc7",
      desc: "🚀 𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐧𝐠 𝐭𝐡𝐞 𝐢𝐧𝐜𝐫𝐞𝐝𝐢𝐛𝐥𝐞 𝐣𝐨𝐮𝐫𝐧𝐞𝐲 𝐨𝐟 𝐃𝐡𝐢𝐫𝐚𝐣 𝐑𝐚𝐧𝐤𝐚 𝐢𝐧 𝐜𝐲𝐛𝐞𝐫𝐬𝐞𝐜𝐮𝐫𝐢𝐭𝐲 𝐚𝐧𝐝 𝐫𝐢𝐬𝐤 𝐦𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭! 🚀As the CISO at TATA AIG General Insurance, I'm dedicated to fortifying digital assets and leading innovative cybersecurity strategies. Grateful for the recognition, including the Bug Bounty award and certifications in BCMS and ISMS. Together, let's enhance our cyber defenses and secure our digital future!"
    },
    {
      title: " PRAKASH KUMAR: IT LEADER TRANSFORMING INDUSTRIES WITH INNOVATION",
      img: "https://github.com/user-attachments/assets/f48274e9-7b16-436f-814d-6e06664d74b1",
      desc: "Shout-out to Prakash Kumar , Head of IT at Carl Zeiss India, for his outstanding contributions to IT! With 25+ years of experience, he has driven digital transformations at BMW, Tata, and Delta Electronics. Prakash’s innovative leadership and strategic vision continue to inspire.Congrats, Prakash Kumar ! 🌟"
    },
    {
      title: " ANAND KUMAR SINHA: LEADING IT INNOVATION AND DIGITAL TRANSFORMATION WITH EXCELLENCES",
      img: "https://github.com/user-attachments/assets/c835c963-fecf-429a-ab91-55204aa3d08b",
      desc: "𝐀𝐧𝐚𝐧𝐝 𝐊𝐮𝐦𝐚𝐫 𝐒𝐢𝐧𝐡𝐚, 𝒂𝒔 𝒕𝒉𝒆 𝑪𝒉𝒊𝒆𝒇 𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒐𝒏 𝑶𝒇𝒇𝒊𝒄𝒆𝒓 (𝑪𝑰𝑶) 𝒂𝒏𝒅 𝑮𝒍𝒐𝒃𝒂𝒍 𝑯𝒆𝒂𝒅 𝒐𝒇 𝑰𝑻 𝒂𝒕 𝑩𝒊𝒓𝒍𝒂𝒔𝒐𝒇𝒕, 𝒉𝒂𝒔 𝒔𝒕𝒆𝒆𝒓𝒆𝒅 𝒈𝒓𝒐𝒖𝒏𝒅𝒃𝒓𝒆𝒂𝒌𝒊𝒏𝒈 𝒊𝒏𝒊𝒕𝒊𝒂𝒕𝒊𝒗𝒆𝒔. 𝑯𝒊𝒔 𝒔𝒕𝒓𝒂𝒕𝒆𝒈𝒊𝒄 𝒍𝒆𝒂𝒅𝒆𝒓𝒔𝒉𝒊𝒑 𝒊𝒏 𝒅𝒊𝒈𝒊𝒕𝒂𝒍 𝒕𝒓𝒂𝒏𝒔𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒐𝒏, 𝒄𝒍𝒐𝒖𝒅 𝒄𝒐𝒎𝒑𝒖𝒕𝒊𝒏𝒈, 𝒄𝒚𝒃𝒆𝒓𝒔𝒆𝒄𝒖𝒓𝒊𝒕𝒚, 𝒂𝒏𝒅 𝑰𝒐𝑻 𝒉𝒂𝒔 𝒆𝒏𝒔𝒖𝒓𝒆𝒅 𝒔𝒆𝒂𝒎𝒍𝒆𝒔𝒔 𝒐𝒑𝒆𝒓𝒂𝒕𝒊𝒐𝒏𝒔. 𝑩𝒆𝒚𝒐𝒏𝒅 𝒄𝒐𝒓𝒑𝒐𝒓𝒂𝒕𝒆 𝒓𝒐𝒍𝒆𝒔, 𝒉𝒆 𝒂𝒄𝒕𝒊𝒗𝒆𝒍𝒚 𝒎𝒆𝒏𝒕𝒐𝒓𝒔 𝒂𝒏𝒅 𝒄𝒐𝒏𝒕𝒓𝒊𝒃𝒖𝒕𝒆𝒔 𝒕𝒐 𝒈𝒍𝒐𝒃𝒂𝒍 𝒄𝒐𝒏𝒇𝒆𝒓𝒆𝒏𝒄𝒆𝒔, 𝒆𝒙𝒆𝒎𝒑𝒍𝒊𝒇𝒚𝒊𝒏𝒈 𝒄𝒐𝒎𝒎𝒖𝒏𝒊𝒕𝒚 𝒔𝒆𝒓𝒗𝒊𝒄𝒆."
    },
    {
      title: " ANAND CHAWLA THE VISIONARY INNOVATOR REVOLUTIONIZING EDUCATION IN INDIA",
      img: "https://github.com/user-attachments/assets/e9be17ec-c737-4690-bca8-335586077c1b",
      desc: "🚀 Celebrating the incredible journey of Anand Chawla, a true visionary in Ed-Tech! His innovations have transformed the learning experience for thousands of students and teachers. From e-books to innovative labs, Anand is making education future-ready. 🌟📚"
    },
    {
      title: " JAI PRAKASH SHARMA A JOURNEY OF EXCELLANCE AND INSPIRATION ",
      img: "https://github.com/user-attachments/assets/53dde769-5b32-4b83-bbf0-017dfc4c1bbb",
      desc: "Jai Prakash Sharma's journey from AOL to Info Edge is a saga of resilience, innovation, and unwavering commitment. His tireless pursuit of excellence and dedication to pushing the boundaries of technological innovation make him a true pioneer in his field. As he continues to chart new territories and inspire others with his vision, Jai Prakash Sharma remains a shining example of leadership and impact in the digital age.Jai Prakash Sharma's story is not just about personal achievement;It's about a journey fueled by passion, guided by foresight, and dedicated to shaping a brighter future for all."
    },
    {
      title: "Omkar Gupta, Leader in tech HR",
      img: "https://media.licdn.com/dms/image/D4D22AQGqs-nS_IfRpA/feedshare-shrink_800/0/1717297866891?e=1725494400&v=beta&t=ZmELit_p_1Ih1ucerXaIMlwwMCw4nbHZLCfgRKpU9l4",
      desc: "I am thrilled to share the journey of Omkar Gupta, a dynamic professional making significant strides in the tech HR landscape. With a robust background in recruitment and training, Omkar's impactful career reflects his dedication to fostering growth and innovation.From his early days as a Technical Recruiting Manager at the Pune StartUp Fest to his current role as the Tech HR Head at Syntiaro, Omkar's contributions have been truly inspiring. His initiatives, like founding the G Placement Cell, underscore his commitment to bridging the gap between education and employment.Join me in applauding Omkar Gupta for his relentless pursuit of excellence in the HR domain!"
    },
    {
      title: " BAKHSHISH SINGH Driving Business Value Through IT Leadership and Innovation ",
      img: "https://github.com/user-attachments/assets/1272b140-aaac-428d-86c3-5358520f569b",
      desc: "𝐀 𝐏𝐫𝐨𝐯𝐞𝐧 𝐋𝐞𝐚𝐝𝐞𝐫 𝐢𝐧 𝐌𝐚𝐫𝐤𝐞𝐭𝐢𝐧𝐠 𝐚𝐧𝐝 𝐈𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐨𝐧🌟Bakhshish Singh, Chief Marketing Officer at Allendevaux & Company since April 2022, brings over 14 years of marketing expertise. Renowned for his creativity and innovation, he excels in branding, digital marketing, and event management. His strategic and hands-on approach drives significant results, strong brand presence, and excellent industry relationships."
    },
    {
      title: " SUSHIL GOLE: ACCOMPLISHED LEADER IN IT GOVERNANCE AND RISK MANAGEMENT ",
      img: "https://github.com/user-attachments/assets/61bc87a9-4ab9-4fc8-8ff4-afc99072fcd3",
      desc: "  🎉 Celebrating Sushil Gole, an Accomplished Leader in IT Governance and Risk Management! 🌟 With over 18 years of expertise and numerous certifications, Sushil continues to set the bar high in the tech industry. 🚀  "
    },
    {
      title: "ADITYA GHOSH Driving Business Value Through IT Leadership and Innovation  ",
      img: " https://github.com/user-attachments/assets/775b5e31-12a7-44fd-b97d-9884cd37843e ",
      desc: "  𝐌𝐞𝐞𝐭 𝐀𝐝𝐢𝐭𝐲𝐚 𝐆𝐡𝐨𝐬𝐡, 𝐚𝐧 𝐞𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐞𝐝 𝐈𝐓 𝐥𝐞𝐚𝐝𝐞𝐫 𝐭𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐢𝐧𝐠 𝐛𝐮𝐬𝐢𝐧𝐞𝐬𝐬𝐞𝐬 𝐰𝐢𝐭𝐡 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲.🚀Aditya Ghosh is a seasoned IT leader with 30+ years of experience. He excels in IT infrastructure, cloud platforms, and machine learning. Notably, he led a project at Vodafone Idea Ltd, generating $100 million in annual revenue. Aditya holds a BE from IIT Roorkee and an Advanced Diploma in Management from AIMA.  "
    },
    {
      title: " Gokulavan Jayaraman joins Mahindra Home Finance as CISO ",
      img: " https://github.com/user-attachments/assets/174ff158-74d0-4f5d-921b-b26a8aff4c7a ",
      desc: " Gokulavan Jayaraman has joined Mahindra Home Finance as the Chief Information Security Officer (CISO).He has over 22 years of experience in BPO and KPO. For the past 17 years, he is completely involved into Certifications & Compliance at Org Level. Currently, he is responsible for LDL’s strategic decisions, implementation, monitoring, and continuous improvement on GRC.Prior to joining Mahindra Home Finance, he was working with Lumina Datamatics Limited.“I’m happy to share that I’m starting a new position as Chief Information Security Officer at Mahindra Home Finance,” he shared via LinkedIn.   "
    },
    {
      title: "SUNIL THAKUR: CHAMPIONING HR EXCELLENCE IN PHARMA INDUSTRY  ",
      img: " https://github.com/user-attachments/assets/644e0091-051a-4dd3-b551-836f87b8a5c9 ",
      desc: " Sunil, Head of HR at Abhinav Bindra Targeting Performance(ABTP), is a leader in the pharmaceutical industry, known for fostering healthy work environments. 👏 Let's celebrate Sunil's achievements and his unwavering dedication to assisting others and building strong relationships within organizations. Your passion and hard work are truly inspiring, Sunil !"
    },
    {
      title: " NITIN KUMAR A JOURNEY OF EXCELLANCE AND INSPIRATION ",
      img: "  https://github.com/user-attachments/assets/e0d2375a-9ce9-42a8-8c92-e691c7957bea",
      desc: "  Celebrating over 17 years of excellence in HR, Nitin has consistently demonstrated dedication, innovation, and strategic leadership. From his impactful roles at Infosys and CSG to his societal contributions with The Imagine Trust, Nitin's journey is truly inspiring. Keep shining and driving change, Nitin! 👏✨  "
    },
    {
      title: " Volkswagen Group Technology Solutions India appoints Kamna Sama as CTIO ",
      img: " https://github.com/user-attachments/assets/8879ceb1-6dc8-4ef7-8b82-5c943cdd27bb ",
      desc: " Kamna Sama has been appointed Chief Technology and Information Officer (CTIO) by Volkswagen Group Technology Solutions India.Sama is a member of the Confederation of Indian Industry (CII) Northern Region’s CII Regional Committee on Digital Transformation. She was previously employed by Cummins Inc. as the Head of IT for Large Businesses.She has also worked for Tata Consultancy Services (TCS) for eighteen years, holding positions as Solution Architect & Technology Consultant, Portfolio Management-Solutions & Delivery Leader for Global Pharma, and Head of Digital Practice for the Global Manufacturing Unit.Prior to this, Kamna Sama was employed by Zoom Technologies & Institute as a hardware design engineer and in the IT infrastructure services department.Sama took to her LinkedIn profile to announce her appointment. She wrote, “I am truly honoured by the opportunity to drive VWITS’s vision for future technologies and innovation. I look forward to contributing to the vibrant world of VWITS and engaging with our passionate and dynamic team.”The Volkswagen Group’s key internal technical delivery business is called Volkswagen Group Technology Solutions India. Delivering digital solutions, application development, and product innovation are the areas of expertise for VW Group Technology Solutions India.   "
    },
    {
      title: "TECH VISIONARY TRANSFORMING GLOBAL ENTERPRISES: BHARAT ANAND ",
      img: " https://github.com/user-attachments/assets/c1785894-938b-41be-ba78-574ef9e5dbd6 ",
      desc: "🌟Join us as we explore the inspiring career journey of Bharat B Anand, a visionary technology leader whose dedication to innovation, leadership, and business transformation has made a significant impact in the tech industry. Discover how his strategic insights and unwavering commitment continue to drive change and create new opportunities. 🚀   "
    },
    {
      title: " BIPIN LOKEGAONKAR A JOURNEY OF EXCELLANCE AND INSPIRATION ",
      img: " https://github.com/user-attachments/assets/01e54c09-df9c-4e79-993f-481e1dc4e9c2 ",
      desc: "Honoring Bipin Lokegaonkar's remarkable career in cybersecurity. His proactive approach and mentorship are driving our organization's success. Discover how he's contributing to the nation's growth through innovation and collaboration.   "
    },
    {
      title: "GURU PATNAIK Navigating the Complex World of Information Security",
      img: " https://github.com/user-attachments/assets/3b866f9e-3d49-4ca0-b279-c8813c3a792c ",
      desc: "𝐌𝐞𝐞𝐭 𝐆𝐮𝐫𝐮 𝐏𝐚𝐭𝐧𝐚𝐢𝐤, 𝐚 𝐥𝐞𝐚𝐝𝐞𝐫 𝐢𝐧 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐒𝐞𝐜𝐮𝐫𝐢𝐭𝐲, 𝐝𝐞𝐝𝐢𝐜𝐚𝐭𝐞𝐝 𝐭𝐨 𝐩𝐫𝐨𝐭𝐞𝐜𝐭𝐢𝐧𝐠 𝐝𝐢𝐠𝐢𝐭𝐚𝐥 𝐚𝐬𝐬𝐞𝐭𝐬 𝐚𝐧𝐝 𝐞𝐧𝐬𝐮𝐫𝐢𝐧𝐠 𝐛𝐮𝐬𝐢𝐧𝐞𝐬𝐬 𝐫𝐞𝐬𝐢𝐥𝐢𝐞𝐧𝐜𝐞.🌟Guru Patnaik, the CISO at Embibe, excels in Risk Management, Security Audits, Incident Response, and IT Governance. With a strong educational background and global experience, he leads with expertise and dedication to keep businesses secure and operations uninterrupted. His prestigious CCISO certification underscores his leadership and deep knowledge in the field.  "
    },
    {
      title: "SHABBIR BADRA: A Visionary Leader in IT Operations and Digital Transformation",
      img: " https://github.com/user-attachments/assets/5c35dce4-dca1-4cc6-821b-745098453b9b ",
      desc: "𝐏𝐢𝐨𝐧𝐞𝐞𝐫𝐢𝐧𝐠 𝐈𝐓 𝐒𝐭𝐫𝐚𝐭𝐞𝐠𝐲 𝐚𝐧𝐝 𝐈𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐨𝐧 𝐢𝐧 𝐭𝐡𝐞 𝐔𝐭𝐢𝐥𝐢𝐭𝐢𝐞𝐬 𝐒𝐞𝐜𝐭𝐨𝐫🚀With over 22 years in the utilities industry, Shabbir Badra stands out as an IT Operations Specialist, renowned for his strategic prowess and innovative solutions. His expertise in IT strategy, project implementation, business development, and process improvement drives operational efficiency and sustainable growth. Shabbir's leadership in PMO management ensures project excellence, while his focus on cybersecurity and digital transformation keeps organizations resilient and competitive."
    },
    {
      title: "VED PRAKASH PANWAR: EXPERIENCED IT LEADER DRIVING  INNOVATION AND OPERATIONAL EXCELLENCE",
      img: " https://github.com/user-attachments/assets/37f7305e-bdba-496f-8de0-4802c3cfdee5 ",
      desc: "🌟 𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐧𝐠 𝐄𝐱𝐜𝐞𝐥𝐥𝐞𝐧𝐜𝐞 𝐢𝐧 𝐈𝐓 𝐋𝐞𝐚𝐝𝐞𝐫𝐬𝐡𝐢𝐩 🌟I'm excited to share the remarkable journey of Ved Prakash Panwar, an accomplished IT leader with over 22 years of experience driving innovation and operational excellence. Ved's expertise spans across Infrastructure Management, Business Development, SQL Database Administration, and ERP Implementation. He has a proven track record in enhancing organizational efficiency and client satisfaction globally.Ved Prakash Panwar's leadership at various organizations showcases his skills in IT compliance, vendor management, strategic planning, and project management. His educational background in both IT and commerce, along with certifications like MCSE, MCDBA, and MCP, reflects his dedication to continuous learning and professional growth.Join me in celebrating Ved's contributions to the IT industry and his commitment to driving efficiency and innovation."
    },
    {
      title: "Congratulations K N PHANI RAJ ",
      img: " https://github.com/user-attachments/assets/e4cca127-2b20-44b0-a838-3ae3c8453793 ",
      desc: "Congratulations K N Phani Raj for being the Winner of CIO Accelerator X Awards 2024."
    },
    {
      title: " INNOVATING BUSINESS: THE VISIONARY LEADERSHIP OF DR. MAKARAND SAWANT, THE 'IT GURU'",
      img: " https://github.com/user-attachments/assets/7804ec73-6e53-45e6-b42b-544be06e8c48 ",
      desc: "𝑫𝒓. 𝑴𝒂𝒌𝒂𝒓𝒂𝒏𝒅 𝑺𝒂𝒘𝒂𝒏𝒕, 𝒌𝒏𝒐𝒘𝒏 𝒂𝒔 𝒕𝒉𝒆 '𝑰𝑻 𝑮𝒖𝒓𝒖', 𝒊𝒔 𝒂 𝒓𝒆𝒏𝒐𝒘𝒏𝒆𝒅 𝑰𝑻 𝒑𝒓𝒐𝒇𝒆𝒔𝒔𝒊𝒐𝒏𝒂𝒍 𝒘𝒊𝒕𝒉 25 𝒚𝒆𝒂𝒓𝒔 𝒐𝒇 𝒆𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒆. 𝑪𝒖𝒓𝒓𝒆𝒏𝒕𝒍𝒚 𝒕𝒉𝒆 𝑽𝒊𝒄𝒆 𝑷𝒓𝒆𝒔𝒊𝒅𝒆𝒏𝒕 𝒐𝒇 𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒐𝒏 𝑻𝒆𝒄𝒉𝒏𝒐𝒍𝒐𝒈𝒚 𝒂𝒕 𝑺𝒂𝒉𝒚𝒂𝒅𝒓𝒊 𝑯𝒐𝒔𝒑𝒊𝒕𝒂𝒍𝒔, 𝑷𝒖𝒏𝒆. 𝑷𝒓𝒆𝒗𝒊𝒐𝒖𝒔𝒍𝒚, 𝒉𝒆 𝒔𝒆𝒓𝒗𝒆𝒅 𝒂𝒔 𝑺𝒆𝒏𝒊𝒐𝒓 𝑮𝒆𝒏𝒆𝒓𝒂𝒍 𝑴𝒂𝒏𝒂𝒈𝒆𝒓 𝒐𝒇 𝑰𝑻 𝒂𝒕 𝑫𝒆𝒆𝒑𝒂𝒌 𝑭𝒆𝒓𝒕𝒊𝒍𝒊𝒔𝒆𝒓𝒔 𝑨𝒏𝒅 𝑷𝒆𝒕𝒓𝒐𝒄𝒉𝒆𝒎𝒊𝒄𝒂𝒍𝒔 𝑪𝒐𝒓𝒑𝒐𝒓𝒂𝒕𝒊𝒐𝒏 𝑳𝒊𝒎𝒊𝒕𝒆𝒅 (𝑫𝑭𝑷𝑪𝑳) 𝒇𝒐𝒓 14 𝒚𝒆𝒂𝒓𝒔, 𝒔𝒉𝒂𝒑𝒊𝒏𝒈 𝒕𝒉𝒆 𝒄𝒐𝒎𝒑𝒂𝒏𝒚'𝒔 𝑰𝑻 𝒔𝒕𝒓𝒂𝒕𝒆𝒈𝒚. 𝑯𝒊𝒔 𝒄𝒂𝒓𝒆𝒆𝒓 𝒂𝒍𝒔𝒐 𝒊𝒏𝒄𝒍𝒖𝒅𝒆𝒔 𝒓𝒐𝒍𝒆𝒔 𝒂𝒕 𝒗𝒂𝒓𝒊𝒐𝒖𝒔 𝒑𝒓𝒆𝒔𝒕𝒊𝒈𝒊𝒐𝒖𝒔 𝒄𝒐𝒎𝒑𝒂𝒏𝒊𝒆𝒔, 𝒔𝒉𝒐𝒘𝒄𝒂𝒔𝒊𝒏𝒈 𝒉𝒊𝒔 𝒗𝒆𝒓𝒔𝒂𝒕𝒊𝒍𝒊𝒕𝒚 𝒂𝒏𝒅 𝒆𝒙𝒑𝒆𝒓𝒕𝒊𝒔𝒆.𝑫𝒓. 𝑺𝒂𝒘𝒂𝒏𝒕 𝒉𝒐𝒍𝒅𝒔 𝒂 𝑩𝑬 𝒊𝒏 𝑪𝒐𝒎𝒑𝒖𝒕𝒆𝒓 𝑺𝒄𝒊𝒆𝒏𝒄𝒆, 𝒂𝒏 𝑰𝑻 𝑷𝒓𝒐𝒋𝒆𝒄𝒕 𝑴𝒂𝒏𝒂𝒈𝒆𝒎𝒆𝒏𝒕 𝒄𝒆𝒓𝒕𝒊𝒇𝒊𝒄𝒂𝒕𝒊𝒐𝒏 𝒇𝒓𝒐𝒎 𝑰𝑰𝑻 𝑩𝒐𝒎𝒃𝒂𝒚, 𝒂𝒏 𝑴𝑩𝑨 𝒊𝒏 𝑰𝒏𝒕𝒆𝒓𝒏𝒂𝒕𝒊𝒐𝒏𝒂𝒍 𝑩𝒖𝒔𝒊𝒏𝒆𝒔𝒔 𝒇𝒓𝒐𝒎 𝑨𝑺𝑼 𝑼𝑺𝑨, 𝑴𝑫𝑷 𝒊𝒏 𝑰𝑻 𝑺𝒕𝒓𝒂𝒕𝒆𝒈𝒚 𝒇𝒓𝒐𝒎 𝑰𝑰𝑴 𝑨𝒉𝒎𝒆𝒅𝒂𝒃𝒂𝒅 𝒂𝒏𝒅 𝒂 𝑫𝒐𝒄𝒕𝒐𝒓𝒂𝒕𝒆 𝒊𝒏 𝑴𝒂𝒏𝒂𝒈𝒆𝒎𝒆𝒏𝒕 𝑺𝒕𝒖𝒅𝒊𝒆𝒔 𝒔𝒑𝒆𝒄𝒊𝒂𝒍𝒊𝒛𝒊𝒏𝒈 𝒊𝒏 𝑰𝑻 (𝑷𝒉𝑫 𝒊𝒏 𝑨𝒏𝒂𝒍𝒚𝒕𝒊𝒄𝒔) 𝒇𝒓𝒐𝒎 𝑰𝑺𝑩𝑴. 𝑯𝒆 𝒑𝒐𝒔𝒔𝒆𝒔𝒔𝒆𝒔 𝒏𝒖𝒎𝒆𝒓𝒐𝒖𝒔 𝒄𝒆𝒓𝒕𝒊𝒇𝒊𝒄𝒂𝒕𝒊𝒐𝒏𝒔, 𝒊𝒏𝒄𝒍𝒖𝒅𝒊𝒏𝒈 𝑰𝑺𝑶, 𝑰𝑻𝑰𝑳, 𝑷𝑴𝑷 𝒂𝒏𝒅 𝑪𝑰𝑺𝑺𝑷. 𝑹𝒆𝒄𝒐𝒈𝒏𝒊𝒛𝒆𝒅 𝒘𝒊𝒕𝒉 𝒐𝒗𝒆𝒓 85 𝒂𝒘𝒂𝒓𝒅𝒔, 𝒔𝒖𝒄𝒉 𝒂𝒔 𝒕𝒉𝒆 𝑰𝒏𝒏𝒐𝒗𝒂𝒕𝒊𝒗𝒆 𝑪𝑰𝑶 𝑨𝒘𝒂𝒓𝒅 𝒂𝒏𝒅 𝒕𝒉𝒆 𝑪𝑰𝑶 𝑪𝑹𝑶𝑾𝑵 𝑫𝒊𝒈𝒊𝒕𝒂𝒍 𝑮𝒆𝒏𝒊𝒖𝒔 𝑨𝒘𝒂𝒓𝒅, 𝑫𝒓. 𝑺𝒂𝒘𝒂𝒏𝒕 𝒄𝒐𝒏𝒕𝒊𝒏𝒖𝒆𝒔 𝒕𝒐 𝒊𝒏𝒔𝒑𝒊𝒓𝒆 𝒂𝒅𝒗𝒂𝒏𝒄𝒆𝒎𝒆𝒏𝒕𝒔 𝒊𝒏 𝒕𝒆𝒄𝒉𝒏𝒐𝒍𝒐𝒈𝒚 𝒂𝒏𝒅 𝒃𝒖𝒔𝒊𝒏𝒆𝒔𝒔"
    },
    {
      title: "CELEBRATING THE ACHIEVEMENTS OF SANTOSH GUPTA: A VISIONARY IT LEADER",
      img: " https://github.com/user-attachments/assets/1f277005-d62b-4ef1-9da0-44e5b3023b09 ",
      desc: "🌟Discover the journey of Santosh Gupta, a visionary IT leader driving innovation at Zee Learn Limited. With over 24 years of experience, Santosh excels in transforming educational experiences through strategic technology implementation.Connect with Santosh Gupta on LinkedIn to explore more about his journey, insights, and contributions to the field.🚀"
    },
    {
      title: "A TRAILBLAZER IN IT LEADERSHIP AND’ INNOVATION",
      img: " https://github.com/user-attachments/assets/1184f2ea-2939-419d-9ecd-cad0c5980a42 ",
      desc: "🌟 𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐧𝐠 𝐒𝐮𝐧𝐢𝐥 𝐒𝐨𝐧𝐚𝐫𝐞: 𝐀 𝐕𝐢𝐬𝐢𝐨𝐧𝐚𝐫𝐲 𝐈𝐓 𝐋𝐞𝐚𝐝𝐞𝐫 🌟Huge shoutout to Sunil Sonare, Head of IT & Systems at ITD Cementation India Limited, for his exceptional achievements in IT leadership! With nearly two decades of expertise, Sunil has been honored with the World CIO 200 Award (2023) and the Catalyst CIO Award (2022).Sunil's contributions span across ERP implementation, IT security, and business process re-engineering, driving technological advancements and enterprise growth. His dedication to excellence and continuous learning sets new benchmarks in the industry.Kudos to Sunil for his relentless pursuit of innovation and excellence in IT! 🏆✨"
    },
    {
      title: "𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐧𝐠 𝐌𝐞𝐡𝐞𝐫𝐢𝐚𝐫 𝐏𝐚𝐭𝐞𝐥'𝐬 𝟐𝟓+ 𝐲𝐞𝐚𝐫𝐬 𝐨𝐟 𝐥𝐞𝐚𝐝𝐞𝐫𝐬𝐡𝐢𝐩 𝐢𝐧 𝐈𝐓 𝐚𝐧𝐝 𝐝𝐢𝐠𝐢𝐭𝐚𝐥 𝐭𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧!",
      img: "https://github.com/user-attachments/assets/8ef684fb-31c0-4e55-a261-cfb8ce819d86",
      desc: " As Group CIO at Jeena & Company, he drives innovation and excellence in supply chain management and customer experience. His global expertise in security and risk management shapes the future of technology. 🚀"
    },
    {
      title: "𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐧𝐠 𝐭𝐡𝐞 𝐫𝐞𝐦𝐚𝐫𝐤𝐚𝐛𝐥𝐞 𝐣𝐨𝐮𝐫𝐧𝐞𝐲 𝐨𝐟 𝐏𝐫𝐚𝐧𝐚𝐯 𝐏𝐚𝐫𝐚𝐧𝐣𝐩𝐞",
      img: "https://github.com/user-attachments/assets/25a01e83-dd37-4931-9e71-d404247c9fd1",
      desc: "🚀 𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐧𝐠 𝐭𝐡𝐞 𝐫𝐞𝐦𝐚𝐫𝐤𝐚𝐛𝐥𝐞 𝐣𝐨𝐮𝐫𝐧𝐞𝐲 𝐨𝐟 𝐏𝐫𝐚𝐧𝐚𝐯 𝐏𝐚𝐫𝐚𝐧𝐣𝐩𝐞, a leader in information security and the Chief Information Security Officer at Unity Small Finance Bank. From technical expertise to strategic leadership, Pranav Paranjpe contributions have fortified digital security across the financial sector. 🌐🔐Join us in exploring the inspiring journey of Pranav Paranjpe, CISO at Unity Small Finance Bank. With a career spanning over 18 years, Pranav Paranjpe has been a driving force in cybersecurity, leading initiatives that safeguard our digital future. His story is a testament to the power of dedication, expertise, and leadership in navigating the complexities of information security."
    }
  ]

  return (
    <>
      <HelmetProvider>
        <Helmet><title>Bharat CXO || Post</title></Helmet>
        <h1 style={{ margin: '130px 0 -7vw', textAlign: 'center' }} className="headingAnimation">Posts</h1>
        <div className="row row-cols-1 row-cols-md-2 g-4 mx-5" style={{ maxWidth: '2000px', margin: '8vw 0 -950px' }} >
          {
            data?.map((card, index) => {
              return (
                <div className="row g-2 my-1 mx-0 postCard" key={index} onClick={() => { openContentPage(card.title, card.img, card.desc, card.src); navigate(); }}>
                  <div className="col-md-4 ZohoImg" style={{ outline:'none',border:'none', padding :'0', borderRadius:'5px'}}>
                    <img src={card.img} className="img-fluid rounded-start ZoomImg" alt="postImg" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title" style={{ fontSize: '1.5vw', fontWeight: 900 }}>{card.title}</h5>
                      <p className="card-text" style={{ textAlign: 'justify', fontSize: '1.2vw' }}>{(card.desc.length >= 500) ? card.desc.substring(0, 500) + "..." : card.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
          {updateBtn&&<><br/><UpdatePosts/></>}
        </ div>
      </HelmetProvider>
    </>
  );
}

export default Post;

