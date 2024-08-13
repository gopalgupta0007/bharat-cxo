const mongoose = require("mongoose");
const CXO = require("../models/cxoModels");
require('dotenv').config("Bharat cxo/backend/.env");

const Connection = () => {
    mongoose.connect(process.env.DB, {})
        .then(() => {
            console.log("DB connected")
            // Sample data to insert
            // const sampleData = new CXO(
            //     {
            //         "home": [
            //             {
            //                 "title": "Celebrating Excellence in IT: The Journey of Ujjal Kumar Ghatak",
            //                 "desc": "Ujjal Kumar Ghatak's remarkable career in Information Technology spans over 30 years, showcasing his expertise and leadership across various industries, including power, energy, and manufacturing.Ujjal's strong educational foundation includes a Doctor of Excellence in IT, a Master's in Control System Engineering from IIT Kharagpur, and a Bachelor's in Electrical Engineering from Jadavpur University.As the current CIO of Saurashtra Cement Ltd, Ujjal manages IT infrastructure and cybersecurity globally. He has also held key positions in major companies like AG&P, The Heart of Europe, Al Hamra, TATA Power, Petrofac International, and Reliance Industries.Ujjal is a master in IT strategy, consulting, and enterprise applications. His innovative approach has driven significant digital transformations in business analytics, mobility, social media, big data, and cloud technology. Ujjal excels in strategic leadership, mentoring, and fostering innovation. His vision has modernized technology and business frameworks across various organizations.Ujjal's contributions have earned him numerous accolades, including the Doctor of Excellence for his outstanding performance in IT.",
            //                 "img": "https://github.com/user-attachments/assets/9a73376e-7324-4914-abb6-14ab8178c3a4"
            //             },
            //             {
            //                 "title": "Sanjeev Jain",
            //                 "desc": "With over 18 years of distinguished experience in IT infrastructure setup and management, project management, networking, systems administration, and data center management, Honorable Mr. Sanjeev Jain has consistently demonstrated expertise in various domains.He has attained excellence in critical areas such as server virtualizations and the implementation of Virtual Desktop Interface (VDI). His proficiency extends to techno-commercial aspects of IT functions, including budgeting, OPEX/CAPEX reduction, execution of Annual Maintenance Contracts, and effective vendor management.He possesses robust skills in handling matters related to Enterprise License Management. His capabilities also encompass server and network management, involving the meticulous monitoring of servers and networks, as well as security management, including the implementation of anti-virus software and robust data backup strategies.An effective communicator with strong people management and leadership skills. Moreover, his wealth of experience includes a proven track record in bringing uniformity to process documentation, assessing modules, and adeptly revamping and restructuring documentation to align with evolving business requirements. Stands as a seasoned professional with a holistic skill set and a history of driving operational excellence in the IT landscape.In his role as Chief Information Officer (CIO) at Integreon, is the driving force behind strategic IT functions. Tasked with enhancing cost-effectiveness, security, and service quality, he oversees the entire IT framework of the organization. Mr. Jain excels at bridging the gap between IT and corporate strategic goals, providing both strategic and tactical planning, and coordinating the development and evaluation of information and technology systems.A key advocate for efficiency, he is committed to standardizing the company use of technology, eliminating redundancies, and championing a unified One Company message. With a visionary approach, He consistently assesses and recommends new technologies, staying abreast of industry trends to keep the organization at the forefront of technological innovation.In his leadership capacity, Mr. Jain manages a global team of IT associates, allocating roles and responsibilities while serving as a mentor and motivator. His strategic deployment of IT resources supports projects and resolves technical issues in a timely and cost-effective manner. Additionally, he maintains close contact with IT suppliers, skillfully negotiating contracts to minimize investment requirements.His leadership embodies a commitment to driving technological excellence, fostering innovation, and aligning IT initiatives with Integreon overarching goals. His desired skills and experience reflect a comprehensive understanding of the dynamic IT landscape and an unwavering dedication to achieving organizational success through strategic technology management.",
            //                 "img": "https://github.com/user-attachments/assets/319b544f-957f-410d-83f3-893d2f95e8cb"
            //             },
            //             {
            //                 "title": "Gaurav Vyas: A Trailblazer in IT Leadership",
            //                 "desc": "Gaurav Vyas, currently the Head of Information Technology at SPGPrints India (Stovec Industries Limited), has built a stellar career over 17 years in the IT industry. His journey began at Adani Ports and SEZ, where he earned accolades for his dedication and technical support skills. He then advanced through roles at Accel Frontline Limited, Reliance Industries Limited, and CMS Info Systems, where he managed large teams and delivered exceptional service.At Jekson Vision Pvt. Ltd., Gaurav led significant IT projects, enhancing infrastructure, cybersecurity, and ERP systems. His accomplishments in this role were recognized with several prestigious awards, including the Best CIO Award, Catalyst Award, and The World CIO 200 Award.Gaurav holds a Bachelor's degree in IT, an MBA in Information Technology, and various certifications, demonstrating his commitment to continuous learning and professional development.In his current position, Gaurav drives digital transformation at SPGPrints India, leveraging his expertise to align technology strategies with business goals. His visionary leadership and innovative approach continue to set him apart as a standout figure in the IT industry..",
            //                 "img": "https://github.com/user-attachments/assets/464d8ebc-e75e-42eb-8c02-72076ebca228"
            //             }
            //         ],
            //         "posts": [
            //             {
            //                 "title": "Neeraj Rathi : A Leader Empowering India's Growth",
            //                 "desc": "In today's fast-paced business world, where technology and innovation are key, Neeraj Rathi shines as a beacon of inspiration. His leadership and commitment to nation-building are truly remarkable, making a significant impact on India's growth and development.💡 With over two decades of experience, Neeraj has consistently demonstrated excellence in various sectors, from IT to digital transformation. His journey teaches us that true leadership is about making a meaningful impact on society and empowering the next generation of leaders.👏 Let's honor Neeraj Rathi's contributions and draw inspiration from his unwavering dedication to driving progress and innovation!",
            //                 "img": "https://github.com/user-attachments/assets/6298b1a2-6d96-49d0-8ba4-11b18772ea0f",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQHONC2MKD-JBA/feedshare-document-pdf-analyzed/0/1722948217243?e=1723680000&v=beta&t=rW3jOkOxWhLMTSjFPSOufPFCrsS2WYxnxuKvWg0-6Ts"
            //             },{
            //                 "title": "Rahul Mergu : Journey and contributions to national growth",
            //                 "desc": "🚀 Honored to spotlight Rahul Mergu's incredible journey from a small town to a beacon of national growth and innovation! 🌟 His relentless pursuit of excellence and visionary leadership in technology is a true inspiration. Rahul's dedication to fostering innovation and sustainable development is shaping a brighter future for all. 👏🌍",
            //                 "img": "https://github.com/user-attachments/assets/c945b24d-f2c0-4353-bec1-1dfa5d7c2742",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQHisbTrA45uhQ/feedshare-document-pdf-analyzed/0/1722861791788?e=1723680000&v=beta&t=F78ldpSRUsUcqMm2SjejFZiSkwyNGdcxA9tU3OlaUII"
            //             },
            //             {
            //                 "title": "Riju Raj : Honoring a Visionary Leader!",
            //                 "desc": "In the rapidly evolving world of technology and leadership, Riju Raj stands out as a beacon of inspiration. His journey from bridging technology and business to driving national growth is nothing short of remarkable. As the CTO at HyFun Foods, his strategic vision and relentless pursuit of excellence have led to transformative achievements.💡 Riju Raj's story is a powerful reminder of what can be achieved through dedication, innovation, and a commitment to continuous improvement. From mentoring future leaders to advocating for emerging technologies, his contributions have had a profound impact on organizations and the nation. Let's celebrate his extraordinary achievements and draw inspiration from his visionary leadership! 🚀 ",
            //                 "img": "https://github.com/user-attachments/assets/d517fc76-5683-4190-9e32-db01fb478b1a",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQE8o7FhUuwOsA/feedshare-document-pdf-analyzed/0/1722846815621?e=1723680000&v=beta&t=26KAyvq5faecnY7bHZD0TWMTJu98qWyau9wOm__5viQ"
            //             }, {
            //                 "title": "Sagar Kharbanda : Cybersecurity expert and environmentalist",
            //                 "desc": "Meet Sagar Kharbanda a cybersecurity expert and environmentalist with a B.Techin Computer Science and certifications such as CISSP and CEH. Sagar's career has taken him across India, the US, the UK, Qatar, Dubai, Saudi Arabia, and Oman, where he has made significant contributions to IT risk management and compliance. As the former Chief Information Security Officer at Al Khalij Commercial Bank, he led critical projects, including the Qatar FIFA 2022 Cyber Security Framework Assessment. Beyond his professional achievements, Sagar is dedicated to social service and environmental sustainability, actively participating in tree plantation initiatives since 2015. An avid traveler, sports car enthusiast, pet lover, and movie buff, Sagar balances professional rigor with a commitment to making a positive impact on the planet! 🌱🌎",
            //                 "img": "https://github.com/user-attachments/assets/6cc54ad0-80e3-4fb4-8fb1-9077942faa81",
            //                 "src": "https://media.licdn.com/dms/document/media/D561FAQGJuzqHDKcGZw/feedshare-document-pdf-analyzed/0/1722503334501?e=1723680000&v=beta&t=W7yMMSeWDvavDX42_6Daz4tFJaBn_9UrzcyKRivEWZI"
            //             }, {
            //                 "title": "Amit Potnis : pioneering Excellence in Technology",
            //                 "desc": "In the dynamic world of digital transformation, Amit Potnis stands as a beacon of excellence. As the Group CIO at Times Network, his visionary leadership has driven impactful IT initiatives and inspired countless professionals.🌟 From mentorship and continuous learning to groundbreaking advancements in ERP and strategic solutions, Amit's journey is a testament to resilience, dedication, and the relentless pursuit of excellence. 🔐 Let's continue to learn and be inspired by his incredible achievements in the tech industry!",
            //                 "img": "https://github.com/user-attachments/assets/455db490-8395-4c81-9f11-4179df2cc2e2",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQGmHL46k55n1Q/feedshare-document-pdf-analyzed/0/1722686533287?e=1723680000&v=beta&t=YXCn-wAZj-eyBLk00O_GL7ZafWGxxmqJOw2X40feb54"
            //             }, {
            //                 "title": "Anand Mangalam : journey of Innovation and Growth",
            //                 "desc": "🚀𝐌𝐞𝐞𝐭 𝐀𝐧𝐚𝐧𝐝 𝐌𝐚𝐧𝐠𝐚𝐥𝐚𝐦 with over 33 years of expertise, Anand's visionary leadership has revolutionized the manufacturing sector through cutting-edge technology and strategic innovation. From spearheading digital transformations to mastering cybersecurity and predictive maintenance, his journey is a testament to excellence and relentless pursuit of growth.🔒Read more about Anand's remarkable achievements and how he's shaping the future of IT and manufacturing.📈💡",
            //                 "img": "https://github.com/user-attachments/assets/896fb208-8276-4d03-9294-4198caf0e08d",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQGOPOUwMVKb5A/feedshare-document-pdf-analyzed/0/1722596823015?e=1723680000&v=beta&t=lLQmjL3D_Thn2uU4tSaVJF-z1O8KJtAg7Xl6OhW6jrk"
            //             }, {
            //                 "title": "Abhinav Srivastava : Innovator, Leader, and Award-Winning Journey",
            //                 "desc": "Shoutout to Abhinav Srivastava! 🌟 As CIO and Head of IT GCC in Chennai, Abhinav is revolutionizing digital transformation and boosting efficiency. With projects like Piaggio's E-Commerce Platform and SAP migration to S4 HANA, he's a true tech leader. His accolades, including Lean Six Sigma Green Belt and UIPath RPA certification, showcase his dedication. Abhinav also gives back by volunteering with Teach For India and CARE.",
            //                 "img": "https://github.com/user-attachments/assets/bf908767-1733-4f8d-83a8-2f5835e62c85",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQGtIzDg-9XGHw/feedshare-document-pdf-analyzed/0/1722515238883?e=1723680000&v=beta&t=ahN2TT2hF0iH-j6_wEyAAtfDy3aC41wxhaxR2wMWAbI"
            //             }, {
            //                 "title": "Dr. Sandeep Bhandari : A Journey of Inspiration And Impact",
            //                 "desc": "🚀𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐧𝐠 𝐭𝐡𝐞 𝐢𝐧𝐜𝐫𝐞𝐝𝐢𝐛𝐥𝐞 𝐣𝐨𝐮𝐫𝐧𝐞𝐲 𝐨𝐟 𝐃𝐫. 𝐒𝐚𝐧𝐝𝐞𝐞𝐩 𝐁𝐡𝐚𝐧𝐝𝐚𝐫𝐢, a visionary leader in IT transformation and security. His contributions to digital innovation and data security are truly inspiring! It’s an honor to share the story of Dr. Sandeep Bhandari, Associate Director - IT & Networks at NTT DATA. With a career spanning esteemed organizations like IBM, HCL Technologies, Coforge, and more, Dr. Bhandari has consistently demonstrated leadership, innovation, and a commitment to excellence in IT. His expertise in digital transformation, IT infrastructure optimization, and information security has made a significant impact in the industry. Dr. Bhandari's journey is a testament to the power of visionary leadership and continuous learning. Let's celebrate his achievements and the inspiration he provides to us all! 🌐🔐",
            //                 "img": "https://github.com/user-attachments/assets/1106bc5f-9e1b-4604-911c-93dca9421d2b",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQG-9fBmlG-brQ/feedshare-document-pdf-analyzed/0/1722418587769?e=1723680000&v=beta&t=DnZq9XQNAQiv983lMS-YCK8luxaE_qeZHMcxn_fr1Qs"
            //             }, {
            //                 "title": "Lalit Kumar Sharma : A Trailblazer IT Leadership",
            //                 "desc": "A true trailblazer in IT leadership! From his early career days to leading IT operations at Daiichi Sankyo India Pharma Pvt. Ltd., Lalit's dedication, adaptability, and continuous learning have driven substantial contributions to national and global growth. His leadership in technology and pharmaceutical research sets a high bar for aspiring professionals. Congratulations, Lalit, on your exceptional achievements and visionary leadership! 🚀👏",
            //                 "img": "https://github.com/user-attachments/assets/ea4e0796-7bca-4fec-bdb4-7f66a26c893e",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQG93Tx1RCOSKg/feedshare-document-pdf-analyzed/0/1722250880789?e=1723680000&v=beta&t=886iawaTYV1RUG47ViV8mDQltcz1S9tELNcvVobkSpE"
            //             }, {
            //                 "title": "Harsh Jha : Tech Leader Driving Innovation And Continous Learning Journey",
            //                 "desc": "Heartly Congrats to Harsh Jha , Group Head of Technology at Nuvama Group! With 20+ years of experience, Harsh has been a driving force in tech innovation and operational excellence. From early coding days to leading transformative projects at Edelweiss, his journey is truly inspiring. His leadership has positioned Nuvama as a leader in wealth management technology.",
            //                 "img": "https://github.com/user-attachments/assets/c2b5755c-78f8-419f-b9b5-81685d006f94",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQFO0nZHnIackw/feedshare-document-pdf-analyzed/0/1722242018452?e=1723680000&v=beta&t=vzlAlTaHb_G0rr_Y8fN-bonKzCkJ1wpY6uspjvLJT0s"
            //             }, {
            //                 "title": "Girish Koppar : Leading the Future of Healthcare",
            //                 "desc": "𝐆𝐢𝐫𝐢𝐬𝐡 𝐊𝐨𝐩𝐩𝐚𝐫, 𝑷𝑴𝑷, 𝑪𝑯𝑪𝑰𝑶, 𝒔𝒆𝒓𝒗𝒆𝒔 𝒂𝒔 𝒕𝒉𝒆 𝑮𝒆𝒏𝒆𝒓𝒂𝒍 𝑴𝒂𝒏𝒂𝒈𝒆𝒓 𝒐𝒇 𝑰𝑻 𝒂𝒕 𝑾𝒐𝒄𝒌𝒉𝒂𝒓𝒅𝒕 𝑯𝒐𝒔𝒑𝒊𝒕𝒂𝒍𝒔 𝒊𝒏 𝑴𝒖𝒎𝒃𝒂𝒊, 𝑴𝒂𝒉𝒂𝒓𝒂𝒔𝒉𝒕𝒓𝒂, 𝑰𝒏𝒅𝒊𝒂. 𝑾𝒊𝒕𝒉 𝒐𝒗𝒆𝒓 30 𝒚𝒆𝒂𝒓𝒔 𝒐𝒇 𝒆𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒆 𝒊𝒏 𝒕𝒉𝒆 𝑻𝒆𝒙𝒕𝒊𝒍𝒆, 𝑴𝒂𝒏𝒖𝒇𝒂𝒄𝒕𝒖𝒓𝒊𝒏𝒈, 𝒂𝒏𝒅 𝑯𝒆𝒂𝒍𝒕𝒉𝒄𝒂𝒓𝒆 𝒔𝒆𝒄𝒕𝒐𝒓𝒔, 𝑲𝒐𝒑𝒑𝒂𝒓 𝒉𝒂𝒔 𝒆𝒂𝒓𝒏𝒆𝒅 𝒏𝒖𝒎𝒆𝒓𝒐𝒖𝒔 𝒑𝒓𝒆𝒔𝒕𝒊𝒈𝒊𝒐𝒖𝒔 𝒂𝒘𝒂𝒓𝒅𝒔, 𝒊𝒏𝒄𝒍𝒖𝒅𝒊𝒏𝒈 𝒕𝒉𝒆 𝑪𝒍𝒐𝒖𝒅 𝑪𝒉𝒂𝒎𝒑𝒊𝒐𝒏 𝒂𝒏𝒅 𝑯𝒆𝒂𝒍𝒕𝒉𝒄𝒂𝒓𝒆 𝒂𝒏𝒅 𝑷𝒉𝒂𝒓𝒎𝒂 𝑰𝒄𝒐𝒏 𝒊𝒏 2023. 𝑯𝒊𝒔 𝒍𝒆𝒂𝒅𝒆𝒓𝒔𝒉𝒊𝒑 𝒂𝒏𝒅 𝒆𝒙𝒑𝒆𝒓𝒕𝒊𝒔𝒆 𝒅𝒓𝒊𝒗𝒆 𝒕𝒉𝒆 𝒊𝒏𝒕𝒆𝒈𝒓𝒂𝒕𝒊𝒐𝒏 𝒐𝒇 𝒊𝒏𝒏𝒐𝒗𝒂𝒕𝒊𝒗𝒆 𝑰𝑻 𝒔𝒐𝒍𝒖𝒕𝒊𝒐𝒏𝒔, 𝒆𝒏𝒉𝒂𝒏𝒄𝒊𝒏𝒈 𝒑𝒂𝒕𝒊𝒆𝒏𝒕 𝒄𝒂𝒓𝒆 𝒂𝒏𝒅 𝒐𝒑𝒆𝒓𝒂𝒕𝒊𝒐𝒏𝒂𝒍 𝒆𝒇𝒇𝒊𝒄𝒊𝒆𝒏𝒄𝒚. 𝑨𝒔 𝒕𝒉𝒆 𝑺𝒆𝒄𝒓𝒆𝒕𝒂𝒓𝒚 𝒂𝒏𝒅 𝑷𝒓𝒊𝒏𝒄𝒊𝒑𝒂𝒍 𝑭𝒐𝒖𝒏𝒅𝒆𝒓 𝒐𝒇 𝒕𝒉𝒆 𝑯𝒐𝒔𝒑𝒊𝒕𝒂𝒍 𝑻𝒆𝒄𝒉𝒏𝒐𝒍𝒐𝒈𝒚 𝑨𝒔𝒔𝒐𝒄𝒊𝒂𝒕𝒊𝒐𝒏 𝒂𝒏𝒅 𝒂 𝑩𝒐𝒂𝒓𝒅 𝑴𝒆𝒎𝒃𝒆𝒓 𝒐𝒇 𝑪𝑯𝑰𝑴𝑬 𝑰𝒏𝒅𝒊𝒂 𝑪𝒉𝒂𝒑𝒕𝒆𝒓, 𝑲𝒐𝒑𝒑𝒂𝒓 𝒊𝒔 𝒄𝒐𝒎𝒎𝒊𝒕𝒕𝒆𝒅 𝒕𝒐 𝒂𝒅𝒗𝒂𝒏𝒄𝒊𝒏𝒈 𝒉𝒆𝒂𝒍𝒕𝒉𝒄𝒂𝒓𝒆 𝒕𝒆𝒄𝒉𝒏𝒐𝒍𝒐𝒈𝒚 𝒕𝒉𝒓𝒐𝒖𝒈𝒉 𝒄𝒐𝒍𝒍𝒂𝒃𝒐𝒓𝒂𝒕𝒊𝒐𝒏 𝒂𝒏𝒅 𝒌𝒏𝒐𝒘𝒍𝒆𝒅𝒈𝒆-𝒔𝒉𝒂𝒓𝒊𝒏𝒈. 𝑨𝒅𝒅𝒊𝒕𝒊𝒐𝒏𝒂𝒍𝒍𝒚, 𝒉𝒆 𝒎𝒆𝒏𝒕𝒐𝒓𝒔 𝒇𝒖𝒕𝒖𝒓𝒆 𝒉𝒆𝒂𝒍𝒕𝒉𝒄𝒂𝒓𝒆 𝑰𝑻 𝒑𝒓𝒐𝒇𝒆𝒔𝒔𝒊𝒐𝒏𝒂𝒍𝒔 𝒂𝒔 𝒂 𝒗𝒊𝒔𝒊𝒕𝒊𝒏𝒈 𝒇𝒂𝒄𝒖𝒍𝒕𝒚 𝒎𝒆𝒎𝒃𝒆𝒓 𝒇𝒐𝒓 𝑴𝑯𝑨 𝒑𝒓𝒐𝒈𝒓𝒂𝒎𝒔 𝒂𝒕 𝑻𝒂𝒕𝒂 𝑰𝒏𝒔𝒕𝒊𝒕𝒖𝒕𝒆 𝒐𝒇 𝑺𝒐𝒄𝒊𝒂𝒍 𝑺𝒄𝒊𝒆𝒏𝒄𝒆𝒔 (𝑻𝑰𝑺𝑺), 𝑴𝒖𝒎𝒃𝒂𝒊, 𝒆𝒏𝒔𝒖𝒓𝒊𝒏𝒈 𝒕𝒉𝒂𝒕 𝑾𝒐𝒄𝒌𝒉𝒂𝒓𝒅𝒕 𝑯𝒐𝒔𝒑𝒊𝒕𝒂𝒍𝒔 𝒓𝒆𝒎𝒂𝒊𝒏 𝒂𝒕 𝒕𝒉𝒆 𝒇𝒐𝒓𝒆𝒇𝒓𝒐𝒏𝒕 𝒐𝒇 𝒉𝒆𝒂𝒍𝒕𝒉𝒄𝒂𝒓𝒆 𝒕𝒆𝒄𝒉𝒏𝒐𝒍𝒐𝒈𝒚 𝒊𝒏𝒏𝒐𝒗𝒂𝒕𝒊𝒐𝒏.",
            //                 "img": "https://github.com/user-attachments/assets/ac69edd9-77ac-4278-a1ca-9b1e55a21c88",
            //                 "src": "https://media.licdn.com/dms/document/media/D4E1FAQFsaOxqt207kA/feedshare-document-pdf-analyzed/0/1722250600036?e=1723680000&v=beta&t=S-5_g_gyHwbt-qMJmHTLOhtAwPQQV2He4V-8TuI4FZ0"
            //             }, {
            //                 "title": "Sanjay Kushal : Leading The Charge In Cyber Security",
            //                 "desc": "🚀 𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐧𝐠 𝐒𝐚𝐧𝐣𝐚𝐲 𝐊𝐚𝐮𝐬𝐡𝐚𝐥, the Global CISO at Orbit Techsol, for his exemplary leadership in cybersecurity. His relentless pursuit of knowledge, strategic vision, and dedication to protecting digital assets set a high standard in the industry. 🌟🔐",
            //                 "img": "https://github.com/user-attachments/assets/4112e9e7-c1e5-4a46-9439-f7a451eabc71",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQFtB-sCcASVvA/feedshare-document-pdf-analyzed/0/1722318113954?e=1723680000&v=beta&t=kwbCqHCGXqHMDRwGS5WGLsEbspMhtd6X4Ebt4xheJjQ"
            //             },
            //             {
            //                 "title": "Mohit Srivastava : Navigating the complex leadscape of information security",
            //                 "desc": "Meet Mohit Srivastava, CISO and DPO at Perfios Software Solutions. With a rich background in Governance, Risk & Compliance (GRC), Mohit has fortified security across industries. His strategic leadership at Jubilant Bhartia, Jubilant Life Sciences, and DHFL Pramerica Life Insurance highlights his prowess in risk management and compliance. An MBA in Finance and certifications like CEH and CISA bolster his expertise. Outside work, Mohit is a passionate photographer and health enthusiast, advocating for a balanced life.",
            //                 "img": "https://github.com/user-attachments/assets/c24735bc-6da7-4e7b-bc06-c94c22e50abf",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQHKxDyd7xk46Q/feedshare-document-pdf-analyzed/0/1722305595732?e=1723680000&v=beta&t=iL9nKkqV1c9cRcSx8Ottn5fwvPsi-FYLDWFekMfaZKA"
            //             }, {
            //                 "title": "𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐧𝐠 𝐭𝐡𝐞 𝐫𝐞𝐦𝐚𝐫𝐤𝐚𝐛𝐥𝐞 𝐣𝐨𝐮𝐫𝐧𝐞𝐲 𝐨𝐟 𝐃𝐫. 𝐕𝐢𝐬𝐡𝐚𝐝 𝐑𝐚𝐡𝐚𝐧𝐠𝐝𝐚𝐥𝐞, 𝐏𝐡.𝐃.,",
            //                 "desc": "A true visionary and innovator in the technology sector. His leadership and relentless pursuit of excellence have not only advanced the IT landscape but have also made substantial contributions to national growth and industry advancement. 🌟Dr. Rahangdale's strategic insights and pioneering projects, like Project Trident, exemplify his dedication to pushing the boundaries of technological innovation. His legacy is an inspiration for aspiring leaders and a catalyst for national progress.",
            //                 "img": "https://github.com/user-attachments/assets/4c61f4d4-ffd5-42ef-aaf4-414f83dc962d",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQFipiV5bsTGQQ/feedshare-document-pdf-analyzed/0/1722338043158?e=1723680000&v=beta&t=4ROMdH6yxti7JF_ItWoHbS-TSRPZ_pNM_2n4WjK0Ujs"
            //             },
            //             {
            //                 "title": "Mohinee Singh : The journey from an intern to a co-founder",
            //                 "desc": "Mohinee Singh's journey from intern to Co-Founder and CMO of CXO Junction showcases her dedication and leadership. Starting at CyberFrat, she rose to Assistant Vice President, excelling in lead generation, branding, and digital marketing. An IIM Lucknow alumna and Women Leader Award recipient, Mohinee's blend of creativity and data-driven insights has propelled CXO Junction to the forefront of marketing tech solutions and cybersecurity innovation.",
            //                 "img": "https://github.com/user-attachments/assets/4f96a2ef-1b8d-4daa-96fc-8f00bb69913a",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQGSGjNVoP3mOg/feedshare-document-pdf-analyzed/0/1722422353531?e=1723680000&v=beta&t=DB3DRdRqaR1tOJuDLcFEpUZALQrBKN6WDsbOKUz-L-k"
            //             },
            //             {
            //                 "title": "Chetan Methur : A media professional who shapes the future",
            //                 "desc": "🌟 𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐧𝐠 𝐭𝐡𝐞 𝐫𝐞𝐦𝐚𝐫𝐤𝐚𝐛𝐥𝐞 𝐣𝐨𝐮𝐫𝐧𝐞𝐲 𝐨𝐟 𝐂𝐡𝐞𝐭𝐚𝐧 𝐌𝐚𝐭𝐡𝐮𝐫, a media professional who shapes the future! 🎥📺 With a career spanning over three decades, Chetan has made significant contributions to the Indian media landscape and has been pivotal in mentoring the next generation of media professionals.📚 His ability to adapt to the changing dynamics of media, from traditional film production to digital media, is truly inspiring. As a member of the Advisory Panel for the Central Board of Film Certification, his insights have been instrumental in shaping the narrative of Indian cinema.👏 Chetan’s human-centric approach to leadership and his commitment to nurturing future leaders sets him apart. His journey is a testament to the power of passion, adaptability, and dedication.Join Bharatcxo in acknowledging Chetan Mathur’s incredible achievements and the positive impact he continues to make in the media industry. 🚀",
            //                 "img": "https://github.com/user-attachments/assets/273bc9ff-64a7-4311-85e9-387694ae989e",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQFKAedx3640eA/feedshare-document-pdf-analyzed/0/1722586278109?e=1723680000&v=beta&t=aQEZxvPj8_e-Zu40oWUnIsF5GF7X6-NSCtdZZo0GwAo"
            //             },
            //             {
            //                 "title": "𝐋𝐚𝐥𝐢𝐭 𝐓𝐫𝐢𝐯𝐞𝐝𝐢'𝐬 𝐕𝐢𝐬𝐢𝐨𝐧 𝐚𝐧𝐝 𝐈𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐨𝐧",
            //                 "desc": "Lalit Trivedi is a top IT leader with 25 years of experience in global IT, cyber security, and digital transformation. He manages advanced data centers and leads AI and IoT projects in India and Africa, driving growth and innovation with a focus on secure and efficient tech systems.",
            //                 "img": "https://github.com/user-attachments/assets/89a595c0-71f4-4f75-93b6-fee0c18df236",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQHd33rTfcU0xA/feedshare-document-pdf-analyzed/0/1718509737698?e=1723680000&v=beta&t=L03YR_hweie6rOrN3qySyWR0XSueKfFW37hR2DbN2uk"
            //             },
            //             {
            //                 "title": " CELEBRATING EXCELLENCE IN INFORMATION  TECHNOLOGY: THE JOURNEY OF UJJAL KUMAR GHATAK",
            //                 "desc": "Honoring over 30 years of IT excellence with Ujjal Kumar Ghatak! From CIO roles in leading global corporations to pioneering digital transformations, his journey is a testament to the power of leadership and innovation in technology. 🌟",
            //                 "img": "https://github.com/user-attachments/assets/e4280f9d-87ae-4993-b568-e233fd5f4812",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQEP2IsuKmBwnw/feedshare-document-pdf-analyzed/0/1720787049042?e=1723680000&v=beta&t=ydPJbImOkOE32oounBwSQSHW97-yPvJm9EYkvmyhPl0"
            //             },
            //             {
            //                 "title": " GAURAV VYAS: A TRAILBLAZER IN IT LEADERSHIP ",
            //                 "desc": "🚀 𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐧𝐠 𝐄𝐱𝐜𝐞𝐥𝐥𝐞𝐧𝐜𝐞 𝐢𝐧 𝐈𝐓 𝐋𝐞𝐚𝐝𝐞𝐫𝐬𝐡𝐢𝐩! 🚀Meet Gaurav Vyas, our trailblazing Head of Information Technology at SPGPrints India (Stovec Industries Limited). With over 17 years of industry expertise, Gaurav’s visionary leadership and dedication to innovation are transforming our IT landscape. From winning the Best CIO Award to pioneering digital transformation, his journey is an inspiring testament to perseverance and excellence. Join us in celebrating Gaurav’s outstanding contributions and his commitment to driving business success through strategic IT enablement.",
            //                 "img": "https://github.com/user-attachments/assets/40bff828-23f9-4bad-82d3-9862f8d4b3cf",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQEdv3akftB_Eg/feedshare-document-pdf-analyzed/0/1720611487606?e=1723680000&v=beta&t=8PEj_cYdcdehQP1n-SF6YcTfonipTbEn-gkwQqt6fXc"
            //             },
            //             {
            //                 "title": "Experienced Information Security Professional",
            //                 "desc": "🚀Shoutout to Nirav Hiradhar , CISO at CDSL Insurance Repository Ltd, for his exceptional work in information security! With 15 years of experience and roles at top firms like UTI and HDFC Bank, Nirav's expertise is unparalleled. His credentials include CISM, CEH, ITIL, and ISO 27001:2013, backed by strong academic achievements.Congrats, Nirav Hiradhar , on your continued success and well-deserved recognition!",
            //                 "img": "https://github.com/user-attachments/assets/ce094421-3c89-4cb2-ad15-31da75383473",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQG2blt74p29kg/feedshare-document-pdf-analyzed/0/1721638064364?e=1723680000&v=beta&t=hz-FmCHsiy5j9SpJf3eMnefAr3ITGj3U1pM-FMY__8g"
            //             },
            //             {
            //                 "title": "A Pillar of Innovation and Leadership in the IT sector",
            //                 "desc": "Shout out to Purvi Shah for her exceptional leadership in the IT sector! With over 17 years of experience, Purvi stands out for her innovation and strategic vision. From rising quickly at HDFC Bank to leading significant projects at Adani Realty, her journey is inspiring. During COVID-19, she showcased her entrepreneurial spirit, driving growth for SG Enterprises. Now, as CIO at Krisala Developers, Purvi's strategic thinking and ability to inspire teams make her a true role model. Her dedication to digital transformation and social causes is commendable. Purvi Shah is a beacon of excellence and inspiration.",
            //                 "img": "https://github.com/user-attachments/assets/388cb636-87f6-4aef-9b65-8d5779f9e9d6",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQHtoLzVAW4K9Q/feedshare-document-pdf-analyzed/0/1721462713135?e=1723680000&v=beta&t=5XDJnY_WgLtor23UU-_Ews4LuQoOD2ULGFIKcEPYihI"
            //             },
            //             {
            //                 "title": "FROM VISION TO REALITY: THE INSPIRING JOURNEY OF SAMBASIVA RAO GATTU IN PORT DIGITALIZATION",
            //                 "desc": "🌟𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐧𝐠 𝐭𝐡𝐞 𝐫𝐞𝐦𝐚𝐫𝐤𝐚𝐛𝐥𝐞 𝐣𝐨𝐮𝐫𝐧𝐞𝐲 𝐨𝐟 𝐒𝐚𝐦𝐛𝐚𝐬𝐢𝐯𝐚 𝐑𝐚𝐨 𝐆𝐚𝐭𝐭𝐮, , a true pioneer in port digital transformation! From his early beginnings to leading IT and digitalization at JSW Jaigarh Port Ltd, Sambasiva’s dedication and innovation have set new benchmarks in the industry. 🚀His commitment to excellence and his ability to seamlessly integrate technology with operations are truly inspiring. Here’s to celebrating a leader who continuously drives progress and efficiency in the port sector! 👏",
            //                 "img": "https://github.com/user-attachments/assets/32b57ac2-9ec2-49e7-8049-0662db417d55",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQEfktFrgdbimQ/feedshare-document-pdf-analyzed/0/1721640973576?e=1723680000&v=beta&t=ehuuaO3U_ner-VZPBYgMLpnjS0NAcb2HykG_d5bl3kc"
            //             },
            //             {
            //                 "title": "KALPESH DOSHI: PIONEERING CYBERSECURITY LEADERSHIP AND INNOVATION",
            //                 "desc": "𝐊𝐚𝐥𝐩𝐞𝐬𝐡 𝐃𝐨𝐬𝐡𝐢, 𝒃𝒂𝒔𝒆𝒅 𝒊𝒏 𝑴𝒖𝒎𝒃𝒂𝒊, 𝑴𝒂𝒉𝒂𝒓𝒂𝒔𝒉𝒕𝒓𝒂, 𝒊𝒔 𝒂 𝒅𝒊𝒔𝒕𝒊𝒏𝒈𝒖𝒊𝒔𝒉𝒆𝒅 𝑪𝒉𝒊𝒆𝒇 𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒐𝒏 𝑺𝒆𝒄𝒖𝒓𝒊𝒕𝒚 𝑶𝒇𝒇𝒊𝒄𝒆𝒓 (𝑪𝑰𝑺𝑶) 𝒂𝒏𝒅 𝒃𝒖𝒔𝒊𝒏𝒆𝒔𝒔 𝒔𝒕𝒓𝒂𝒕𝒆𝒈𝒊𝒔𝒕. 𝑹𝒆𝒏𝒐𝒘𝒏𝒆𝒅 𝒇𝒐𝒓 𝒉𝒊𝒔 𝒆𝒙𝒑𝒆𝒓𝒕𝒊𝒔𝒆 𝒊𝒏 𝒄𝒚𝒃𝒆𝒓𝒔𝒆𝒄𝒖𝒓𝒊𝒕𝒚 𝒂𝒏𝒅 𝒆𝒏𝒕𝒆𝒓𝒑𝒓𝒊𝒔𝒆 𝒓𝒊𝒔𝒌 𝒎𝒂𝒏𝒂𝒈𝒆𝒎𝒆𝒏𝒕, 𝑫𝒐𝒔𝒉𝒊 𝒆𝒙𝒄𝒆𝒍𝒔 𝒊𝒏 𝒄𝒓𝒂𝒇𝒕𝒊𝒏𝒈 𝒆𝒇𝒇𝒆𝒄𝒕𝒊𝒗𝒆 𝒄𝒚𝒃𝒆𝒓 𝒔𝒕𝒓𝒂𝒕𝒆𝒈𝒊𝒆𝒔, 𝒆𝒏𝒔𝒖𝒓𝒊𝒏𝒈 𝒅𝒂𝒕𝒂 𝒑𝒓𝒊𝒗𝒂𝒄𝒚, 𝒂𝒏𝒅 𝒆𝒏𝒉𝒂𝒏𝒄𝒊𝒏𝒈 𝒐𝒓𝒈𝒂𝒏𝒊𝒛𝒂𝒕𝒊𝒐𝒏𝒂𝒍 𝒓𝒆𝒔𝒊𝒍𝒊𝒆𝒏𝒄𝒆. 𝑯𝒊𝒔 𝒓𝒐𝒍𝒆 𝒂𝒍𝒔𝒐 𝒊𝒏𝒄𝒍𝒖𝒅𝒆𝒔 𝒐𝒗𝒆𝒓𝒔𝒆𝒆𝒊𝒏𝒈 𝒗𝒆𝒏𝒅𝒐𝒓 𝒎𝒂𝒏𝒂𝒈𝒆𝒎𝒆𝒏𝒕 𝒂𝒏𝒅 𝒎𝒆𝒏𝒕𝒐𝒓𝒊𝒏𝒈 𝒆𝒎𝒆𝒓𝒈𝒊𝒏𝒈 𝒄𝒚𝒃𝒆𝒓𝒔𝒆𝒄𝒖𝒓𝒊𝒕𝒚 𝒑𝒓𝒐𝒇𝒆𝒔𝒔𝒊𝒐𝒏𝒂𝒍𝒔, 𝒅𝒆𝒎𝒐𝒏𝒔𝒕𝒓𝒂𝒕𝒊𝒏𝒈 𝒉𝒊𝒔 𝒄𝒐𝒎𝒎𝒊𝒕𝒎𝒆𝒏𝒕 𝒕𝒐 𝒃𝒐𝒕𝒉 𝒑𝒓𝒐𝒕𝒆𝒄𝒕𝒊𝒏𝒈 𝒅𝒊𝒈𝒊𝒕𝒂𝒍 𝒂𝒔𝒔𝒆𝒕𝒔 𝒂𝒏𝒅 𝒂𝒅𝒗𝒂𝒏𝒄𝒊𝒏𝒈 𝒕𝒉𝒆 𝒇𝒊𝒆𝒍𝒅 𝒐𝒇 𝒄𝒚𝒃𝒆𝒓𝒔𝒆𝒄𝒖𝒓𝒊𝒕𝒚. 🌟✨",
            //                 "img": "https://github.com/user-attachments/assets/5e5abdd4-3151-40aa-924e-b79f6f08355c",
            //                 "src": "https://www.linkedin.com/posts/bharatcxo_kalpesh-doshi-activity-7220458568372629504--Ml4?utm_source=share&utm_medium=member_desktop"
            //             },
            //             {
            //                 "title": "Rajeev Bhatia Chief Information Officer",
            //                 "desc": "🎉 Congratulations to Rajeev Bhatia and CMS Info Systems ! 🎉We are thrilled to announce that Rajeev has been recognized as a winner of the prestigious hashtag#CIOPowerList2024 and also honored at the hashtag#7thEdition of the CIO Conclave Awards. Achieving not just one, but two awards in the last month alone, Rajeev's dedication and visionary leadership have truly set a benchmark in the industry.🏆 These accolades are a testament to the relentless pursuit of excellence by Rajeev Bhatia.Their innovative solutions and commitment to driving technological advancements continue to inspire us all.Here's to many more milestones and successes ahead!Rajeev Bhatia CMS Info Systems ",
            //                 "img": "https://github.com/user-attachments/assets/baf17c28-d77d-4c5e-8861-b8a49c1cec1b",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQFNA7O4pdIB7A/feedshare-document-pdf-analyzed/0/1722512657321?e=1723680000&v=beta&t=6u082CEJqywBqjyzMWU3rfPxEn2YpwqdoVJ8lY0emYs"
            //             },
            //             {
            //                 "title": "JAYAPRAKASH B - DRIVING EXCELLENCE: A JOURNEY THROUGH IT SHARED SERVICES LEADERSHIP",
            //                 "desc": "𝐉𝐚𝐲𝐚𝐩𝐫𝐚𝐤𝐚𝐬𝐡 𝐁, 𝒂 𝒅𝒊𝒔𝒕𝒊𝒏𝒈𝒖𝒊𝒔𝒉𝒆𝒅 𝑰𝑻 𝒍𝒆𝒂𝒅𝒆𝒓, 𝒔𝒉𝒂𝒓𝒆𝒔 𝒉𝒊𝒔 𝒋𝒐𝒖𝒓𝒏𝒆𝒚 𝒕𝒉𝒓𝒐𝒖𝒈𝒉 𝑰𝑻 𝒔𝒉𝒂𝒓𝒆𝒅 𝒔𝒆𝒓𝒗𝒊𝒄𝒆𝒔 𝒍𝒆𝒂𝒅𝒆𝒓𝒔𝒉𝒊𝒑. 𝑨𝒔 𝑽𝒊𝒄𝒆 𝑷𝒓𝒆𝒔𝒊𝒅𝒆𝒏𝒕 𝒊𝒏 𝒕𝒉𝒊𝒔 𝒅𝒐𝒎𝒂𝒊𝒏, 𝒉𝒆 𝒐𝒗𝒆𝒓𝒔𝒆𝒆𝒔 𝑮𝒍𝒐𝒃𝒂𝒍 𝑪𝒂𝒑𝒂𝒃𝒊𝒍𝒊𝒕𝒚 𝑪𝒆𝒏𝒕𝒆𝒓𝒔 𝒂𝒏𝒅 𝑪𝒆𝒏𝒕𝒆𝒓𝒔 𝒐𝒇 𝑬𝒙𝒄𝒆𝒍𝒍𝒆𝒏𝒄𝒆, 𝒅𝒓𝒊𝒗𝒊𝒏𝒈 𝒊𝒏𝒏𝒐𝒗𝒂𝒕𝒊𝒐𝒏 𝒂𝒏𝒅 𝒐𝒑𝒆𝒓𝒂𝒕𝒊𝒐𝒏𝒂𝒍 𝒆𝒇𝒇𝒊𝒄𝒊𝒆𝒏𝒄𝒚. 𝑯𝒊𝒔 𝒔𝒕𝒓𝒂𝒕𝒆𝒈𝒊𝒄 𝒗𝒊𝒔𝒊𝒐𝒏 𝒔𝒉𝒂𝒑𝒆𝒔 𝒕𝒉𝒆 𝒇𝒖𝒕𝒖𝒓𝒆 𝒐𝒇 𝑰𝑻 𝑺𝒉𝒂𝒓𝒆𝒅 𝑺𝒆𝒓𝒗𝒊𝒄𝒆𝒔, 𝒎𝒂𝒌𝒊𝒏𝒈 𝒉𝒊𝒎 𝒂 𝒌𝒆𝒚 𝒊𝒏𝒇𝒍𝒖𝒆𝒏𝒄𝒆𝒓 𝒊𝒏 𝒕𝒉𝒆 𝒊𝒏𝒅𝒖𝒔𝒕𝒓𝒚. 𝑾𝒊𝒕𝒉 𝒐𝒗𝒆𝒓 28 𝒚𝒆𝒂𝒓𝒔 𝒐𝒇 𝒆𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒆, 𝑱𝒂𝒚𝒂𝒑𝒓𝒂𝒌𝒂𝒔𝒉’𝒔 𝒄𝒐𝒎𝒎𝒊𝒕𝒎𝒆𝒏𝒕 𝒕𝒐 𝒒𝒖𝒂𝒍𝒊𝒕𝒚, 𝒄𝒖𝒔𝒕𝒐𝒎𝒆𝒓 𝒗𝒂𝒍𝒖𝒆, 𝒂𝒏𝒅 𝒅𝒊𝒈𝒊𝒕𝒂𝒍 𝒕𝒓𝒂𝒏𝒔𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒐𝒏 𝒊𝒏𝒔𝒑𝒊𝒓𝒆𝒔 𝒖𝒔 𝒂𝒍𝒍. 🌟",
            //                 "img": "https://github.com/user-attachments/assets/de0b5363-0fd4-415a-be43-31ad8c940ba4",
            //                 "src": "https://media.licdn.com/dms/document/media/D4E1FAQGNKrV81_d6vQ/feedshare-document-pdf-analyzed/0/1721386672819?e=1723680000&v=beta&t=N82O-Z-3LtOuzODEct9oyCzziNS4jINXLXNkWk-fqac"
            //             },
            //             {
            //                 "title": "RABINARAYAN PARIDA-EXPERT IN ENTERPRISE CLOUD SOLUTIONS",
            //                 "desc": "Rabinarayan Parida, with 20 years of experience, excels in cloud technologies and enterprise application development. Skilled in Microsoft Azure and Google Cloud, he has led key roles at Brio Technologies and Infosys. His expertise and leadership make him a valuable asset in digital services and cloud solutions 🌟",
            //                 "img": "https://github.com/user-attachments/assets/d9842712-c0d4-4aa9-be00-0958f7f0dde7",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQFxA2WodRLtpg/feedshare-document-pdf-analyzed/0/1721531571253?e=1723680000&v=beta&t=_zIusQLtd9CDJKI1acFTcP_LGNIcELwhscyxfCeIJSM"
            //             },
            //             {
            //                 "title": "RAJKUMAR AYYELLA-A JOURNEY OF EXCELLANCE AND INSPIRATION",
            //                 "desc": "Rajkumar Ayyella's story is a remarkable example of how individual excellence can contribute to collective growth. As Carysil continues to innovate and expand, leaders like Jadeja will undoubtedly play a key role in shaping the future of the industry and contributing to the nation’s progress",
            //                 "img": "https://github.com/user-attachments/assets/b4127221-3df9-4ffc-bd91-79f2acce9ef4",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQGm_0hsJVxDHg/feedshare-document-pdf-analyzed/0/1721489768082?e=1723680000&v=beta&t=SWpDDmWv_sxGp8kX0HOTpj6bIWNknpZ3On2im2sbQ7M"
            //             },
            //             {
            //                 "title": "HEMANT KUMAR JOURNEY AND ACHIEVEMENTS OF HEMANT KUMAR: A SECURITY LEADER",
            //                 "desc": "🚀 Celebrating Hemant Kumar's Stellar Journey in Information Security! 🚀Hemant Kumar stands as a beacon in the realm of IT and cybersecurity, with a career spanning over two decades. From his foundational days at HCL Infosystems to his current role as CISO at Bajaj Auto Finance, Hemant has consistently demonstrated profound expertise and leadership.Throughout his career, Hemant has been instrumental in safeguarding critical assets for prominent organizations, driving strategic vision, and fostering innovation. His contributions have not only fortified organizational defenses but also inspired the next generation of security professionals.",
            //                 "img": "https://github.com/user-attachments/assets/3ee96753-3fee-4d62-a424-394007369300",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQGcVgJ_tVf43A/feedshare-document-pdf-analyzed/0/1721376920674?e=1723680000&v=beta&t=G91IyvPpJLaxPcym8z0n7CfTtSiVlymnI9Fnc36OG_U"
            //             },
            //             {
            //                 "title": "BHASKAR RAO: A Journey of Technological Excellence in Banking",
            //                 "desc": "𝐀 𝐋𝐞𝐚𝐝𝐢𝐧𝐠 𝐄𝐱𝐩𝐞𝐫𝐭 𝐢𝐧 𝐃𝐢𝐠𝐢𝐭𝐚𝐥 𝐁𝐚𝐧𝐤𝐢𝐧𝐠 𝐚𝐧𝐝 𝐒𝐞𝐜𝐮𝐫𝐢𝐭𝐲 🌟With over 20 years of experience, Bhaskar Rao has significantly improved digital banking and security. As CISO at The Bharat Co-operative Bank, his innovative approach and robust security measures have made him a key figure in the industry. Recognized at international conferences and awarded numerous times, Bhaskar continues to lead in information security and technology.",
            //                 "img": "https://github.com/user-attachments/assets/8a302737-eb94-4e76-af30-a76ad1a13632",
            //                 "src": "https://media.licdn.com/dms/document/media/D561FAQGmvSLU-_1C4w/feedshare-document-pdf-analyzed/0/1721303766324?e=1723680000&v=beta&t=LgllRAsmIHhsv6NSDNthWZc-N3nmFm4bZcV6y20tm8k"
            //             },
            //             {
            //                 "title": " Bhavesh Trivedi: EMPOWERING BRANDS WITH STRATEGIC MARKETING EXPERTISE",
            //                 "desc": "Meet Bhavesh Trivedi, a Fractional CMO with over 23 years of experience. Bhavesh excels in branding, growth marketing, and strategic consulting to help businesses boost revenue and market presence. His expertise in global marketing, SaaS, SEO, and content strategy makes him a valuable partner for any company aiming for success.",
            //                 "img": "https://github.com/user-attachments/assets/a6710c1f-7da5-47c1-9d02-4347814b24f4",
            //                 "src": "https://media.licdn.com/dms/document/media/D561FAQFwji8toAHbHQ/feedshare-document-pdf-analyzed/0/1721284694841?e=1723680000&v=beta&t=VF5g_rD6RQzxRxeL8hJuf0J-3LMzQ-qyxyL8Gcjo16w"
            //             },
            //             {
            //                 "title": " DHIRAJ RANKA LEADER IN CYBERSECURITY AND RISK MANAGEMENT",
            //                 "desc": "🚀 𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐧𝐠 𝐭𝐡𝐞 𝐢𝐧𝐜𝐫𝐞𝐝𝐢𝐛𝐥𝐞 𝐣𝐨𝐮𝐫𝐧𝐞𝐲 𝐨𝐟 𝐃𝐡𝐢𝐫𝐚𝐣 𝐑𝐚𝐧𝐤𝐚 𝐢𝐧 𝐜𝐲𝐛𝐞𝐫𝐬𝐞𝐜𝐮𝐫𝐢𝐭𝐲 𝐚𝐧𝐝 𝐫𝐢𝐬𝐤 𝐦𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭! 🚀As the CISO at TATA AIG General Insurance, I'm dedicated to fortifying digital assets and leading innovative cybersecurity strategies. Grateful for the recognition, including the Bug Bounty award and certifications in BCMS and ISMS. Together, let's enhance our cyber defenses and secure our digital future!",
            //                 "img": "https://github.com/user-attachments/assets/a4276230-2e0d-4ad7-9338-00cd1fe43bc7",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQHl5K_Km4OBHw/feedshare-document-pdf-analyzed/0/1721190719529?e=1723680000&v=beta&t=RVrprvheHMYJGDTrJlA1g5f5-iL0xPtD2oAIjFKmdhA"
            //             },
            //             {
            //                 "title": " PRAKASH KUMAR: IT LEADER TRANSFORMING INDUSTRIES WITH INNOVATION",
            //                 "desc": "Shout-out to Prakash Kumar , Head of IT at Carl Zeiss India, for his outstanding contributions to IT! With 25+ years of experience, he has driven digital transformations at BMW, Tata, and Delta Electronics. Prakash’s innovative leadership and strategic vision continue to inspire.Congrats, Prakash Kumar ! 🌟",
            //                 "img": "https://github.com/user-attachments/assets/f48274e9-7b16-436f-814d-6e06664d74b1",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQHlkcIhMjsx_Q/feedshare-document-pdf-analyzed/0/1721041600307?e=1723680000&v=beta&t=nkJIeJYzAM4OCPcGvDKgauIH5VfuGcwzhvOm0Ed2KM8"
            //             },
            //             {
            //                 "title": " ANAND KUMAR SINHA: LEADING IT INNOVATION AND DIGITAL TRANSFORMATION WITH EXCELLENCES",
            //                 "desc": "𝐀𝐧𝐚𝐧𝐝 𝐊𝐮𝐦𝐚𝐫 𝐒𝐢𝐧𝐡𝐚, 𝒂𝒔 𝒕𝒉𝒆 𝑪𝒉𝒊𝒆𝒇 𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒐𝒏 𝑶𝒇𝒇𝒊𝒄𝒆𝒓 (𝑪𝑰𝑶) 𝒂𝒏𝒅 𝑮𝒍𝒐𝒃𝒂𝒍 𝑯𝒆𝒂𝒅 𝒐𝒇 𝑰𝑻 𝒂𝒕 𝑩𝒊𝒓𝒍𝒂𝒔𝒐𝒇𝒕, 𝒉𝒂𝒔 𝒔𝒕𝒆𝒆𝒓𝒆𝒅 𝒈𝒓𝒐𝒖𝒏𝒅𝒃𝒓𝒆𝒂𝒌𝒊𝒏𝒈 𝒊𝒏𝒊𝒕𝒊𝒂𝒕𝒊𝒗𝒆𝒔. 𝑯𝒊𝒔 𝒔𝒕𝒓𝒂𝒕𝒆𝒈𝒊𝒄 𝒍𝒆𝒂𝒅𝒆𝒓𝒔𝒉𝒊𝒑 𝒊𝒏 𝒅𝒊𝒈𝒊𝒕𝒂𝒍 𝒕𝒓𝒂𝒏𝒔𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒐𝒏, 𝒄𝒍𝒐𝒖𝒅 𝒄𝒐𝒎𝒑𝒖𝒕𝒊𝒏𝒈, 𝒄𝒚𝒃𝒆𝒓𝒔𝒆𝒄𝒖𝒓𝒊𝒕𝒚, 𝒂𝒏𝒅 𝑰𝒐𝑻 𝒉𝒂𝒔 𝒆𝒏𝒔𝒖𝒓𝒆𝒅 𝒔𝒆𝒂𝒎𝒍𝒆𝒔𝒔 𝒐𝒑𝒆𝒓𝒂𝒕𝒊𝒐𝒏𝒔. 𝑩𝒆𝒚𝒐𝒏𝒅 𝒄𝒐𝒓𝒑𝒐𝒓𝒂𝒕𝒆 𝒓𝒐𝒍𝒆𝒔, 𝒉𝒆 𝒂𝒄𝒕𝒊𝒗𝒆𝒍𝒚 𝒎𝒆𝒏𝒕𝒐𝒓𝒔 𝒂𝒏𝒅 𝒄𝒐𝒏𝒕𝒓𝒊𝒃𝒖𝒕𝒆𝒔 𝒕𝒐 𝒈𝒍𝒐𝒃𝒂𝒍 𝒄𝒐𝒏𝒇𝒆𝒓𝒆𝒏𝒄𝒆𝒔, 𝒆𝒙𝒆𝒎𝒑𝒍𝒊𝒇𝒚𝒊𝒏𝒈 𝒄𝒐𝒎𝒎𝒖𝒏𝒊𝒕𝒚 𝒔𝒆𝒓𝒗𝒊𝒄𝒆.",
            //                 "img": "https://github.com/user-attachments/assets/c835c963-fecf-429a-ab91-55204aa3d08b",
            //                 "src": "https://media.licdn.com/dms/document/media/D4E1FAQHsczdqFN_rzw/feedshare-document-pdf-analyzed/0/1720881933321?e=1723680000&v=beta&t=PcSApJbMC2Ey3uj1kS2IpZaW8s2aGrX4rJJr-2hrXbE"
            //             },
            //             {
            //                 "title": " ANAND CHAWLA THE VISIONARY INNOVATOR REVOLUTIONIZING EDUCATION IN INDIA",
            //                 "desc": "🚀 Celebrating the incredible journey of Anand Chawla, a true visionary in Ed-Tech! His innovations have transformed the learning experience for thousands of students and teachers. From e-books to innovative labs, Anand is making education future-ready. 🌟📚",
            //                 "img": "https://github.com/user-attachments/assets/e9be17ec-c737-4690-bca8-335586077c1b",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQFNSfjt6SpcJQ/feedshare-document-pdf-analyzed/0/1721106786346?e=1723680000&v=beta&t=NoMwhm4zrzgAzHzU93-COukVI5TqXbPLSoGrTgH7_ZQ"
            //             },
            //             {
            //                 "title": " JAI PRAKASH SHARMA A JOURNEY OF EXCELLANCE AND INSPIRATION ",
            //                 "desc": "Jai Prakash Sharma's journey from AOL to Info Edge is a saga of resilience, innovation, and unwavering commitment. His tireless pursuit of excellence and dedication to pushing the boundaries of technological innovation make him a true pioneer in his field. As he continues to chart new territories and inspire others with his vision, Jai Prakash Sharma remains a shining example of leadership and impact in the digital age.Jai Prakash Sharma's story is not just about personal achievement;It's about a journey fueled by passion, guided by foresight, and dedicated to shaping a brighter future for all.",
            //                 "img": "https://github.com/user-attachments/assets/53dde769-5b32-4b83-bbf0-017dfc4c1bbb",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQEf1T5cdB4v5g/feedshare-document-pdf-analyzed/0/1721038989717?e=1723680000&v=beta&t=hh-Yvhhe1TVMNduk5YNv_gL2kF1uiq3VjQPOfe75CmU"
            //             },
            //             {
            //                 "title": "Omkar Gupta, Leader in tech HR",
            //                 "desc": "I am thrilled to share the journey of Omkar Gupta, a dynamic professional making significant strides in the tech HR landscape. With a robust background in recruitment and training, Omkar's impactful career reflects his dedication to fostering growth and innovation.From his early days as a Technical Recruiting Manager at the Pune StartUp Fest to his current role as the Tech HR Head at Syntiaro, Omkar's contributions have been truly inspiring. His initiatives, like founding the G Placement Cell, underscore his commitment to bridging the gap between education and employment.Join me in applauding Omkar Gupta for his relentless pursuit of excellence in the HR domain!",
            //                 "img": "https://media.licdn.com/dms/image/D4D22AQGqs-nS_IfRpA/feedshare-shrink_800/0/1717297866891?e=1725494400&v=beta&t=ZmELit_p_1Ih1ucerXaIMlwwMCw4nbHZLCfgRKpU9l4",
            //                 "src": ""
            //             },
            //             {
            //                 "title": " BAKHSHISH SINGH Driving Business Value Through IT Leadership and Innovation ",
            //                 "desc": "𝐀 𝐏𝐫𝐨𝐯𝐞𝐧 𝐋𝐞𝐚𝐝𝐞𝐫 𝐢𝐧 𝐌𝐚𝐫𝐤𝐞𝐭𝐢𝐧𝐠 𝐚𝐧𝐝 𝐈𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐨𝐧🌟Bakhshish Singh, Chief Marketing Officer at Allendevaux & Company since April 2022, brings over 14 years of marketing expertise. Renowned for his creativity and innovation, he excels in branding, digital marketing, and event management. His strategic and hands-on approach drives significant results, strong brand presence, and excellent industry relationships.",
            //                 "img": "https://github.com/user-attachments/assets/1272b140-aaac-428d-86c3-5358520f569b",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQEjuulmVkm8Kg/feedshare-document-pdf-analyzed/0/1720696638155?e=1723680000&v=beta&t=PtHCoiXd5B4E3TpIZoH0XpoS6oP92O3_08wJNthnOY0"
            //             },
            //             {
            //                 "title": " SUSHIL GOLE: ACCOMPLISHED LEADER IN IT GOVERNANCE AND RISK MANAGEMENT ",
            //                 "desc": "🎉 Celebrating Sushil Gole, an Accomplished Leader in IT Governance and Risk Management! 🌟 With over 18 years of expertise and numerous certifications, Sushil continues to set the bar high in the tech industry. 🚀  ",
            //                 "img": "https://github.com/user-attachments/assets/61bc87a9-4ab9-4fc8-8ff4-afc99072fcd3",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQG0Od72TydY-A/feedshare-document-pdf-analyzed/0/1720625068020?e=1723680000&v=beta&t=c_Hmn8An-kzAjLtIlNqj5ljo_xLOTc8PxeqnTPlZtcw"
            //             },
            //             {
            //                 "title": "ADITYA GHOSH Driving Business Value Through IT Leadership and Innovation  ",
            //                 "desc": "  𝐌𝐞𝐞𝐭 𝐀𝐝𝐢𝐭𝐲𝐚 𝐆𝐡𝐨𝐬𝐡, 𝐚𝐧 𝐞𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐞𝐝 𝐈𝐓 𝐥𝐞𝐚𝐝𝐞𝐫 𝐭𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐢𝐧𝐠 𝐛𝐮𝐬𝐢𝐧𝐞𝐬𝐬𝐞𝐬 𝐰𝐢𝐭𝐡 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲.🚀Aditya Ghosh is a seasoned IT leader with 30+ years of experience. He excels in IT infrastructure, cloud platforms, and machine learning. Notably, he led a project at Vodafone Idea Ltd, generating $100 million in annual revenue. Aditya holds a BE from IIT Roorkee and an Advanced Diploma in Management from AIMA.  ",
            //                 "img": " https://github.com/user-attachments/assets/775b5e31-12a7-44fd-b97d-9884cd37843e",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQGIhuCkPbkhPw/feedshare-document-pdf-analyzed/0/1720432828019?e=1723680000&v=beta&t=icUzv6gmdSkQGAh3wEG0uop8nPurLopqv3mXjKYHU0A"
            //             },
            //             {
            //                 "title": " Gokulavan Jayaraman joins Mahindra Home Finance as CISO ",
            //                 "desc": " Gokulavan Jayaraman has joined Mahindra Home Finance as the Chief Information Security Officer (CISO).He has over 22 years of experience in BPO and KPO. For the past 17 years, he is completely involved into Certifications & Compliance at Org Level. Currently, he is responsible for LDL’s strategic decisions, implementation, monitoring, and continuous improvement on GRC.Prior to joining Mahindra Home Finance, he was working with Lumina Datamatics Limited.“I’m happy to share that I’m starting a new position as Chief Information Security Officer at Mahindra Home Finance,” he shared via LinkedIn.   ",
            //                 "img": " https://github.com/user-attachments/assets/174ff158-74d0-4f5d-921b-b26a8aff4c7a ",
            //                 "src": ""
            //             },
            //             {
            //                 "title": "SUNIL THAKUR: CHAMPIONING HR EXCELLENCE IN PHARMA INDUSTRY  ",
            //                 "desc": " Sunil, Head of HR at Abhinav Bindra Targeting Performance(ABTP), is a leader in the pharmaceutical industry, known for fostering healthy work environments. 👏 Let's celebrate Sunil's achievements and his unwavering dedication to assisting others and building strong relationships within organizations. Your passion and hard work are truly inspiring, Sunil !",
            //                 "img": " https://github.com/user-attachments/assets/644e0091-051a-4dd3-b551-836f87b8a5c9 ",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQEXc3gV_L6Bgw/feedshare-document-pdf-analyzed/0/1720938687255?e=1723680000&v=beta&t=7owAjQHqChmiwVyPzp41zzRlEdp19iEwF3q7mL7YwJg"
            //             },
            //             {
            //                 "title": " NITIN KUMAR A JOURNEY OF EXCELLANCE AND INSPIRATION ",
            //                 "desc": "  Celebrating over 17 years of excellence in HR, Nitin has consistently demonstrated dedication, innovation, and strategic leadership. From his impactful roles at Infosys and CSG to his societal contributions with The Imagine Trust, Nitin's journey is truly inspiring. Keep shining and driving change, Nitin! 👏✨  ",
            //                 "img": " https://github.com/user-attachments/assets/e0d2375a-9ce9-42a8-8c92-e691c7957bea",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQFPOK51k7hrww/feedshare-document-pdf-analyzed/0/1720085009653?e=1723680000&v=beta&t=Jv4dirrJ2DFr2SWzos6idD3w8LJlxa3819U0XIsQssU"
            //             },
            //             {
            //                 "title": "Shaleen Suri : Redefining IT Operations with Innovation and Leadership",
            //                 "desc": "𝐒𝐡𝐚𝐥𝐞𝐞𝐧 𝐒𝐮𝐫𝐢, 𝑯𝒆𝒂𝒅 𝒐𝒇 𝑰𝑻 𝑶𝒑𝒆𝒓𝒂𝒕𝒊𝒐𝒏𝒔 𝒂𝒕 𝑴𝒐𝒕𝒕 𝑴𝒂𝒄𝑫𝒐𝒏𝒂𝒍𝒅 𝒊𝒏 𝑪𝒉𝒆𝒏𝒏𝒂𝒊, 𝑻𝒂𝒎𝒊𝒍 𝑵𝒂𝒅𝒖, 𝑰𝒏𝒅𝒊𝒂, 𝒊𝒔 𝒂 𝒃𝒆𝒂𝒄𝒐𝒏 𝒐𝒇 𝒆𝒙𝒄𝒆𝒍𝒍𝒆𝒏𝒄𝒆. 𝑯𝒊𝒔 𝒋𝒐𝒖𝒓𝒏𝒆𝒚 𝒔𝒑𝒂𝒏𝒔 𝒎𝒊𝒍𝒊𝒕𝒂𝒓𝒚 𝒗𝒂𝒍𝒐𝒓 𝒂𝒏𝒅 𝒄𝒐𝒓𝒑𝒐𝒓𝒂𝒕𝒆 𝒂𝒄𝒖𝒎𝒆𝒏, 𝒍𝒆𝒂𝒗𝒊𝒏𝒈 𝒂𝒏 𝒊𝒏𝒅𝒆𝒍𝒊𝒃𝒍𝒆 𝒎𝒂𝒓𝒌 𝒐𝒏 𝒈𝒍𝒐𝒃𝒂𝒍 𝒑𝒓𝒐𝒋𝒆𝒄𝒕𝒔. 𝑯𝒆𝒓𝒆’𝒔 𝒘𝒉𝒚 𝑺𝒉𝒂𝒍𝒆𝒆𝒏 𝒊𝒏𝒔𝒑𝒊𝒓𝒆𝒔 𝒖𝒔:𝐒𝐭𝐫𝐚𝐭𝐞𝐠𝐢𝐜 𝐕𝐢𝐬𝐢𝐨𝐧: 𝑺𝒉𝒂𝒍𝒆𝒆𝒏 𝒃𝒓𝒊𝒅𝒈𝒆𝒔 𝒎𝒊𝒍𝒊𝒕𝒂𝒓𝒚 𝒑𝒓𝒆𝒄𝒊𝒔𝒊𝒐𝒏 𝒘𝒊𝒕𝒉 𝒄𝒐𝒓𝒑𝒐𝒓𝒂𝒕𝒆 𝒂𝒈𝒊𝒍𝒊𝒕𝒚. 𝑯𝒊𝒔 𝒍𝒆𝒂𝒅𝒆𝒓𝒔𝒉𝒊𝒑 𝒅𝒓𝒊𝒗𝒆𝒔 𝒐𝒑𝒆𝒓𝒂𝒕𝒊𝒐𝒏𝒂𝒍 𝒆𝒙𝒄𝒆𝒍𝒍𝒆𝒏𝒄𝒆 𝒂𝒏𝒅 𝒄𝒖𝒔𝒕𝒐𝒎𝒆𝒓 𝒔𝒂𝒕𝒊𝒔𝒇𝒂𝒄𝒕𝒊𝒐𝒏.𝐂𝐫𝐨𝐬𝐬-𝐅𝐮𝐧𝐜𝐭𝐢𝐨𝐧𝐚𝐥 𝐃𝐲𝐧𝐚𝐦𝐨: 𝑳𝒆𝒂𝒅𝒊𝒏𝒈 𝒅𝒊𝒗𝒆𝒓𝒔𝒆 𝒕𝒆𝒂𝒎𝒔, 𝑺𝒉𝒂𝒍𝒆𝒆𝒏 𝒇𝒐𝒔𝒕𝒆𝒓𝒔 𝒄𝒐𝒍𝒍𝒂𝒃𝒐𝒓𝒂𝒕𝒊𝒐𝒏. 𝑯𝒊𝒔 𝒆𝒇𝒇𝒆𝒄𝒕𝒊𝒗𝒆 𝒄𝒐𝒎𝒎𝒖𝒏𝒊𝒄𝒂𝒕𝒊𝒐𝒏 𝒖𝒏𝒊𝒕𝒆𝒔 𝒔𝒕𝒂𝒌𝒆𝒉𝒐𝒍𝒅𝒆𝒓𝒔 𝒕𝒐𝒘𝒂𝒓𝒅 𝒄𝒐𝒎𝒎𝒐𝒏 𝒈𝒐𝒂𝒍𝒔.𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐎𝐝𝐲𝐬𝐬𝐞𝐲: 𝑭𝒓𝒐𝒎 𝑬𝒍𝒆𝒄𝒕𝒓𝒐𝒏𝒊𝒄𝒔 𝒂𝒏𝒅 𝑪𝒐𝒎𝒎𝒖𝒏𝒊𝒄𝒂𝒕𝒊𝒐𝒏 𝑬𝒏𝒈𝒊𝒏𝒆𝒆𝒓𝒊𝒏𝒈 𝒕𝒐 𝑨𝒆𝒓𝒐𝒏𝒂𝒖𝒕𝒊𝒄𝒂𝒍 𝑬𝒏𝒈𝒊𝒏𝒆𝒆𝒓𝒊𝒏𝒈 𝒂𝒏𝒅 𝑺𝒐𝒇𝒕𝒘𝒂𝒓𝒆 𝑺𝒚𝒔𝒕𝒆𝒎𝒔, 𝑺𝒉𝒂𝒍𝒆𝒆𝒏’𝒔 𝒅𝒊𝒗𝒆𝒓𝒔𝒆 𝒃𝒂𝒄𝒌𝒈𝒓𝒐𝒖𝒏𝒅 𝒆𝒒𝒖𝒊𝒑𝒔 𝒉𝒊𝒎 𝒇𝒐𝒓 𝒎𝒖𝒍𝒕𝒊𝒇𝒂𝒄𝒆𝒕𝒆𝒅 𝒆𝒏𝒅𝒆𝒂𝒗𝒐𝒓𝒔.𝐎𝐩𝐞𝐫𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐈𝐦𝐩𝐚𝐜𝐭: 𝑨𝒔 𝑯𝒆𝒂𝒅 𝒐𝒇 𝑰𝑻 𝑶𝒑𝒆𝒓𝒂𝒕𝒊𝒐𝒏𝒔, 𝑺𝒉𝒂𝒍𝒆𝒆𝒏 𝒓𝒆𝒅𝒆𝒇𝒊𝒏𝒆𝒔 𝒔𝒕𝒂𝒏𝒅𝒂𝒓𝒅𝒔. 𝑪𝒐𝒏𝒏𝒆𝒄𝒕 𝒘𝒊𝒕𝒉 𝒉𝒊𝒎 𝒐𝒏 𝑳𝒊𝒏𝒌𝒆𝒅𝑰𝒏 𝒂𝒏𝒅 𝒍𝒆𝒂𝒓𝒏 𝒇𝒓𝒐𝒎 𝒉𝒊𝒔 𝒓𝒆𝒎𝒂𝒓𝒌𝒂𝒃𝒍𝒆 𝒋𝒐𝒖𝒓𝒏𝒆𝒚. 🚀",
            //                 "img": "https://github.com/user-attachments/assets/6e5a1eda-40d1-43b4-8a27-c0e4d6d197e7",
            //                 "src": "https://media.licdn.com/dms/document/media/D4E1FAQHgdWZWig1K7g/feedshare-document-pdf-analyzed/0/1719042473686?e=1723680000&v=beta&t=FX356-PRH-lui2Xpsw98uF-ANGbhqgGm8HyEVnPihfA"
            //             }, {
            //                 "title": " Volkswagen Group Technology Solutions India appoints Kamna Sama as CTIO ",
            //                 "desc": " Kamna Sama has been appointed Chief Technology and Information Officer (CTIO) by Volkswagen Group Technology Solutions India.Sama is a member of the Confederation of Indian Industry (CII) Northern Region’s CII Regional Committee on Digital Transformation. She was previously employed by Cummins Inc. as the Head of IT for Large Businesses.She has also worked for Tata Consultancy Services (TCS) for eighteen years, holding positions as Solution Architect & Technology Consultant, Portfolio Management-Solutions & Delivery Leader for Global Pharma, and Head of Digital Practice for the Global Manufacturing Unit.Prior to this, Kamna Sama was employed by Zoom Technologies & Institute as a hardware design engineer and in the IT infrastructure services department.Sama took to her LinkedIn profile to announce her appointment. She wrote, “I am truly honoured by the opportunity to drive VWITS’s vision for future technologies and innovation. I look forward to contributing to the vibrant world of VWITS and engaging with our passionate and dynamic team.”The Volkswagen Group’s key internal technical delivery business is called Volkswagen Group Technology Solutions India. Delivering digital solutions, application development, and product innovation are the areas of expertise for VW Group Technology Solutions India.   ",
            //                 "img": " https://github.com/user-attachments/assets/8879ceb1-6dc8-4ef7-8b82-5c943cdd27bb ",
            //                 "src": ""
            //             },
            //             {
            //                 "title": "TECH VISIONARY TRANSFORMING GLOBAL ENTERPRISES: BHARAT ANAND ",
            //                 "desc": "🌟Join us as we explore the inspiring career journey of Bharat B Anand, a visionary technology leader whose dedication to innovation, leadership, and business transformation has made a significant impact in the tech industry. Discover how his strategic insights and unwavering commitment continue to drive change and create new opportunities. 🚀   ",
            //                 "img": " https://github.com/user-attachments/assets/c1785894-938b-41be-ba78-574ef9e5dbd6 ",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQF5URmIy6xBcg/feedshare-document-pdf-analyzed/0/1719922767546?e=1723680000&v=beta&t=mPhd6hXQE9IbVCDU_MyDBG5YGNRHV-y6PthnvtkHEXU"
            //             },
            //             {
            //                 "title": " BIPIN LOKEGAONKAR A JOURNEY OF EXCELLANCE AND INSPIRATION ",
            //                 "desc": "Honoring Bipin Lokegaonkar's remarkable career in cybersecurity. His proactive approach and mentorship are driving our organization's success. Discover how he's contributing to the nation's growth through innovation and collaboration.   ",
            //                 "img": " https://github.com/user-attachments/assets/01e54c09-df9c-4e79-993f-481e1dc4e9c2 ",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQGC_6kVtmpTyA/feedshare-document-pdf-analyzed/0/1720022450281?e=1723680000&v=beta&t=nzBuyxOXgPMi_pU-RyYNqARXUIGreP9jYpaQI8g4dgQ"
            //             },
            //             {
            //                 "title": "GURU PATNAIK Navigating the Complex World of Information Security",
            //                 "desc": "𝐌𝐞𝐞𝐭 𝐆𝐮𝐫𝐮 𝐏𝐚𝐭𝐧𝐚𝐢𝐤, 𝐚 𝐥𝐞𝐚𝐝𝐞𝐫 𝐢𝐧 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐒𝐞𝐜𝐮𝐫𝐢𝐭𝐲, 𝐝𝐞𝐝𝐢𝐜𝐚𝐭𝐞𝐝 𝐭𝐨 𝐩𝐫𝐨𝐭𝐞𝐜𝐭𝐢𝐧𝐠 𝐝𝐢𝐠𝐢𝐭𝐚𝐥 𝐚𝐬𝐬𝐞𝐭𝐬 𝐚𝐧𝐝 𝐞𝐧𝐬𝐮𝐫𝐢𝐧𝐠 𝐛𝐮𝐬𝐢𝐧𝐞𝐬𝐬 𝐫𝐞𝐬𝐢𝐥𝐢𝐞𝐧𝐜𝐞.🌟Guru Patnaik, the CISO at Embibe, excels in Risk Management, Security Audits, Incident Response, and IT Governance. With a strong educational background and global experience, he leads with expertise and dedication to keep businesses secure and operations uninterrupted. His prestigious CCISO certification underscores his leadership and deep knowledge in the field.  ",
            //                 "img": " https://github.com/user-attachments/assets/3b866f9e-3d49-4ca0-b279-c8813c3a792c ",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQEdcQC6xCt9tw/feedshare-document-pdf-analyzed/0/1719819684769?e=1723680000&v=beta&t=BzuycJOKc4yKSrpjzu8Vy_a8FtNTvdNZSF6V08N65bA"
            //             },
            //             {
            //                 "title": "SHABBIR BADRA: A Visionary Leader in IT Operations and Digital Transformation",
            //                 "desc": "𝐏𝐢𝐨𝐧𝐞𝐞𝐫𝐢𝐧𝐠 𝐈𝐓 𝐒𝐭𝐫𝐚𝐭𝐞𝐠𝐲 𝐚𝐧𝐝 𝐈𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐨𝐧 𝐢𝐧 𝐭𝐡𝐞 𝐔𝐭𝐢𝐥𝐢𝐭𝐢𝐞𝐬 𝐒𝐞𝐜𝐭𝐨𝐫🚀With over 22 years in the utilities industry, Shabbir Badra stands out as an IT Operations Specialist, renowned for his strategic prowess and innovative solutions. His expertise in IT strategy, project implementation, business development, and process improvement drives operational efficiency and sustainable growth. Shabbir's leadership in PMO management ensures project excellence, while his focus on cybersecurity and digital transformation keeps organizations resilient and competitive.",
            //                 "img": " https://github.com/user-attachments/assets/5c35dce4-dca1-4cc6-821b-745098453b9b ",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQHzErmoqAal7g/feedshare-document-pdf-analyzed/0/1719734224022?e=1723680000&v=beta&t=3eBzGFC6eTwglgj_ZhEgqcfq-A4dQvq9NfEgJ4ylFWI"
            //             },
            //             {
            //                 "title": "VED PRAKASH PANWAR: EXPERIENCED IT LEADER DRIVING  INNOVATION AND OPERATIONAL EXCELLENCE",
            //                 "desc": "🌟 𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐧𝐠 𝐄𝐱𝐜𝐞𝐥𝐥𝐞𝐧𝐜𝐞 𝐢𝐧 𝐈𝐓 𝐋𝐞𝐚𝐝𝐞𝐫𝐬𝐡𝐢𝐩 🌟I'm excited to share the remarkable journey of Ved Prakash Panwar, an accomplished IT leader with over 22 years of experience driving innovation and operational excellence. Ved's expertise spans across Infrastructure Management, Business Development, SQL Database Administration, and ERP Implementation. He has a proven track record in enhancing organizational efficiency and client satisfaction globally.Ved Prakash Panwar's leadership at various organizations showcases his skills in IT compliance, vendor management, strategic planning, and project management. His educational background in both IT and commerce, along with certifications like MCSE, MCDBA, and MCP, reflects his dedication to continuous learning and professional growth.Join me in celebrating Ved's contributions to the IT industry and his commitment to driving efficiency and innovation.",
            //                 "img": " https://github.com/user-attachments/assets/37f7305e-bdba-496f-8de0-4802c3cfdee5 ",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQGBbURjrCGy2g/feedshare-document-pdf-analyzed/0/1719730249853?e=1723680000&v=beta&t=uG6Q0VtMWCHiJBox_RcLEhqtFa8GPfZP5lKScKBjp7w"
            //             },
            //             {
            //                 "title": "Congratulations K N PHANI RAJ ",
            //                 "desc": "Congratulations K N Phani Raj for being the Winner of CIO Accelerator X Awards 2024.",
            //                 "img": " https://github.com/user-attachments/assets/e4cca127-2b20-44b0-a838-3ae3c8453793 ",
            //                 "src": ""
            //             },
            //             {
            //                 "title": " INNOVATING BUSINESS: THE VISIONARY LEADERSHIP OF DR. MAKARAND SAWANT, THE 'IT GURU'",
            //                 "desc": "𝑫𝒓. 𝑴𝒂𝒌𝒂𝒓𝒂𝒏𝒅 𝑺𝒂𝒘𝒂𝒏𝒕, 𝒌𝒏𝒐𝒘𝒏 𝒂𝒔 𝒕𝒉𝒆 '𝑰𝑻 𝑮𝒖𝒓𝒖', 𝒊𝒔 𝒂 𝒓𝒆𝒏𝒐𝒘𝒏𝒆𝒅 𝑰𝑻 𝒑𝒓𝒐𝒇𝒆𝒔𝒔𝒊𝒐𝒏𝒂𝒍 𝒘𝒊𝒕𝒉 25 𝒚𝒆𝒂𝒓𝒔 𝒐𝒇 𝒆𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒆. 𝑪𝒖𝒓𝒓𝒆𝒏𝒕𝒍𝒚 𝒕𝒉𝒆 𝑽𝒊𝒄𝒆 𝑷𝒓𝒆𝒔𝒊𝒅𝒆𝒏𝒕 𝒐𝒇 𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒐𝒏 𝑻𝒆𝒄𝒉𝒏𝒐𝒍𝒐𝒈𝒚 𝒂𝒕 𝑺𝒂𝒉𝒚𝒂𝒅𝒓𝒊 𝑯𝒐𝒔𝒑𝒊𝒕𝒂𝒍𝒔, 𝑷𝒖𝒏𝒆. 𝑷𝒓𝒆𝒗𝒊𝒐𝒖𝒔𝒍𝒚, 𝒉𝒆 𝒔𝒆𝒓𝒗𝒆𝒅 𝒂𝒔 𝑺𝒆𝒏𝒊𝒐𝒓 𝑮𝒆𝒏𝒆𝒓𝒂𝒍 𝑴𝒂𝒏𝒂𝒈𝒆𝒓 𝒐𝒇 𝑰𝑻 𝒂𝒕 𝑫𝒆𝒆𝒑𝒂𝒌 𝑭𝒆𝒓𝒕𝒊𝒍𝒊𝒔𝒆𝒓𝒔 𝑨𝒏𝒅 𝑷𝒆𝒕𝒓𝒐𝒄𝒉𝒆𝒎𝒊𝒄𝒂𝒍𝒔 𝑪𝒐𝒓𝒑𝒐𝒓𝒂𝒕𝒊𝒐𝒏 𝑳𝒊𝒎𝒊𝒕𝒆𝒅 (𝑫𝑭𝑷𝑪𝑳) 𝒇𝒐𝒓 14 𝒚𝒆𝒂𝒓𝒔, 𝒔𝒉𝒂𝒑𝒊𝒏𝒈 𝒕𝒉𝒆 𝒄𝒐𝒎𝒑𝒂𝒏𝒚'𝒔 𝑰𝑻 𝒔𝒕𝒓𝒂𝒕𝒆𝒈𝒚. 𝑯𝒊𝒔 𝒄𝒂𝒓𝒆𝒆𝒓 𝒂𝒍𝒔𝒐 𝒊𝒏𝒄𝒍𝒖𝒅𝒆𝒔 𝒓𝒐𝒍𝒆𝒔 𝒂𝒕 𝒗𝒂𝒓𝒊𝒐𝒖𝒔 𝒑𝒓𝒆𝒔𝒕𝒊𝒈𝒊𝒐𝒖𝒔 𝒄𝒐𝒎𝒑𝒂𝒏𝒊𝒆𝒔, 𝒔𝒉𝒐𝒘𝒄𝒂𝒔𝒊𝒏𝒈 𝒉𝒊𝒔 𝒗𝒆𝒓𝒔𝒂𝒕𝒊𝒍𝒊𝒕𝒚 𝒂𝒏𝒅 𝒆𝒙𝒑𝒆𝒓𝒕𝒊𝒔𝒆.𝑫𝒓. 𝑺𝒂𝒘𝒂𝒏𝒕 𝒉𝒐𝒍𝒅𝒔 𝒂 𝑩𝑬 𝒊𝒏 𝑪𝒐𝒎𝒑𝒖𝒕𝒆𝒓 𝑺𝒄𝒊𝒆𝒏𝒄𝒆, 𝒂𝒏 𝑰𝑻 𝑷𝒓𝒐𝒋𝒆𝒄𝒕 𝑴𝒂𝒏𝒂𝒈𝒆𝒎𝒆𝒏𝒕 𝒄𝒆𝒓𝒕𝒊𝒇𝒊𝒄𝒂𝒕𝒊𝒐𝒏 𝒇𝒓𝒐𝒎 𝑰𝑰𝑻 𝑩𝒐𝒎𝒃𝒂𝒚, 𝒂𝒏 𝑴𝑩𝑨 𝒊𝒏 𝑰𝒏𝒕𝒆𝒓𝒏𝒂𝒕𝒊𝒐𝒏𝒂𝒍 𝑩𝒖𝒔𝒊𝒏𝒆𝒔𝒔 𝒇𝒓𝒐𝒎 𝑨𝑺𝑼 𝑼𝑺𝑨, 𝑴𝑫𝑷 𝒊𝒏 𝑰𝑻 𝑺𝒕𝒓𝒂𝒕𝒆𝒈𝒚 𝒇𝒓𝒐𝒎 𝑰𝑰𝑴 𝑨𝒉𝒎𝒆𝒅𝒂𝒃𝒂𝒅 𝒂𝒏𝒅 𝒂 𝑫𝒐𝒄𝒕𝒐𝒓𝒂𝒕𝒆 𝒊𝒏 𝑴𝒂𝒏𝒂𝒈𝒆𝒎𝒆𝒏𝒕 𝑺𝒕𝒖𝒅𝒊𝒆𝒔 𝒔𝒑𝒆𝒄𝒊𝒂𝒍𝒊𝒛𝒊𝒏𝒈 𝒊𝒏 𝑰𝑻 (𝑷𝒉𝑫 𝒊𝒏 𝑨𝒏𝒂𝒍𝒚𝒕𝒊𝒄𝒔) 𝒇𝒓𝒐𝒎 𝑰𝑺𝑩𝑴. 𝑯𝒆 𝒑𝒐𝒔𝒔𝒆𝒔𝒔𝒆𝒔 𝒏𝒖𝒎𝒆𝒓𝒐𝒖𝒔 𝒄𝒆𝒓𝒕𝒊𝒇𝒊𝒄𝒂𝒕𝒊𝒐𝒏𝒔, 𝒊𝒏𝒄𝒍𝒖𝒅𝒊𝒏𝒈 𝑰𝑺𝑶, 𝑰𝑻𝑰𝑳, 𝑷𝑴𝑷 𝒂𝒏𝒅 𝑪𝑰𝑺𝑺𝑷. 𝑹𝒆𝒄𝒐𝒈𝒏𝒊𝒛𝒆𝒅 𝒘𝒊𝒕𝒉 𝒐𝒗𝒆𝒓 85 𝒂𝒘𝒂𝒓𝒅𝒔, 𝒔𝒖𝒄𝒉 𝒂𝒔 𝒕𝒉𝒆 𝑰𝒏𝒏𝒐𝒗𝒂𝒕𝒊𝒗𝒆 𝑪𝑰𝑶 𝑨𝒘𝒂𝒓𝒅 𝒂𝒏𝒅 𝒕𝒉𝒆 𝑪𝑰𝑶 𝑪𝑹𝑶𝑾𝑵 𝑫𝒊𝒈𝒊𝒕𝒂𝒍 𝑮𝒆𝒏𝒊𝒖𝒔 𝑨𝒘𝒂𝒓𝒅, 𝑫𝒓. 𝑺𝒂𝒘𝒂𝒏𝒕 𝒄𝒐𝒏𝒕𝒊𝒏𝒖𝒆𝒔 𝒕𝒐 𝒊𝒏𝒔𝒑𝒊𝒓𝒆 𝒂𝒅𝒗𝒂𝒏𝒄𝒆𝒎𝒆𝒏𝒕𝒔 𝒊𝒏 𝒕𝒆𝒄𝒉𝒏𝒐𝒍𝒐𝒈𝒚 𝒂𝒏𝒅 𝒃𝒖𝒔𝒊𝒏𝒆𝒔𝒔",
            //                 "img": " https://github.com/user-attachments/assets/7804ec73-6e53-45e6-b42b-544be06e8c48 ",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQEmuePJeVG1xg/feedshare-document-pdf-analyzed/0/1722424565875?e=1723680000&v=beta&t=mz0OdaCkdcdUEPFTC7DIO5LzjdvMJbkHqnfPXBPicSQ"
            //             },
            //             {
            //                 "title": "CELEBRATING THE ACHIEVEMENTS OF SANTOSH GUPTA: A VISIONARY IT LEADER",
            //                 "desc": "🌟Discover the journey of Santosh Gupta, a visionary IT leader driving innovation at Zee Learn Limited. With over 24 years of experience, Santosh excels in transforming educational experiences through strategic technology implementation.Connect with Santosh Gupta on LinkedIn to explore more about his journey, insights, and contributions to the field.🚀",
            //                 "img": " https://github.com/user-attachments/assets/1f277005-d62b-4ef1-9da0-44e5b3023b09 ",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQH0oi9QbVOM_g/feedshare-document-pdf-analyzed/0/1719661839420?e=1723680000&v=beta&t=DyeitY7y9s9P0mB5LBBqqSwFwPwfgytUolXUjtve5_Q"
            //             },
            //             {
            //                 "title": "A TRAILBLAZER IN IT LEADERSHIP AND’ INNOVATION",
            //                 "desc": "🌟 𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐧𝐠 𝐒𝐮𝐧𝐢𝐥 𝐒𝐨𝐧𝐚𝐫𝐞: 𝐀 𝐕𝐢𝐬𝐢𝐨𝐧𝐚𝐫𝐲 𝐈𝐓 𝐋𝐞𝐚𝐝𝐞𝐫 🌟Huge shoutout to Sunil Sonare, Head of IT & Systems at ITD Cementation India Limited, for his exceptional achievements in IT leadership! With nearly two decades of expertise, Sunil has been honored with the World CIO 200 Award (2023) and the Catalyst CIO Award (2022).Sunil's contributions span across ERP implementation, IT security, and business process re-engineering, driving technological advancements and enterprise growth. His dedication to excellence and continuous learning sets new benchmarks in the industry.Kudos to Sunil for his relentless pursuit of innovation and excellence in IT! 🏆✨",
            //                 "img": " https://github.com/user-attachments/assets/1184f2ea-2939-419d-9ecd-cad0c5980a42 ",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQEwvTDmGZtjZA/feedshare-document-pdf-analyzed/0/1719647252135?e=1723680000&v=beta&t=hdHSk5q-zZ9vwQyt6AGBni1VvHzxfp4KU3DJkX-NMe0"
            //             },
            //             {
            //                 "title": "𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐧𝐠 𝐌𝐞𝐡𝐞𝐫𝐢𝐚𝐫 𝐏𝐚𝐭𝐞𝐥'𝐬 𝟐𝟓+ 𝐲𝐞𝐚𝐫𝐬 𝐨𝐟 𝐥𝐞𝐚𝐝𝐞𝐫𝐬𝐡𝐢𝐩 𝐢𝐧 𝐈𝐓 𝐚𝐧𝐝 𝐝𝐢𝐠𝐢𝐭𝐚𝐥 𝐭𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧!",
            //                 "desc": " As Group CIO at Jeena & Company, he drives innovation and excellence in supply chain management and customer experience. His global expertise in security and risk management shapes the future of technology. 🚀",
            //                 "img": "https://github.com/user-attachments/assets/8ef684fb-31c0-4e55-a261-cfb8ce819d86",
            //                 "src": ""
            //             },
            //             {
            //                 "title": "𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐧𝐠 𝐭𝐡𝐞 𝐫𝐞𝐦𝐚𝐫𝐤𝐚𝐛𝐥𝐞 𝐣𝐨𝐮𝐫𝐧𝐞𝐲 𝐨𝐟 𝐏𝐫𝐚𝐧𝐚𝐯 𝐏𝐚𝐫𝐚𝐧𝐣𝐩𝐞",
            //                 "desc": "🚀 𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐧𝐠 𝐭𝐡𝐞 𝐫𝐞𝐦𝐚𝐫𝐤𝐚𝐛𝐥𝐞 𝐣𝐨𝐮𝐫𝐧𝐞𝐲 𝐨𝐟 𝐏𝐫𝐚𝐧𝐚𝐯 𝐏𝐚𝐫𝐚𝐧𝐣𝐩𝐞, a leader in information security and the Chief Information Security Officer at Unity Small Finance Bank. From technical expertise to strategic leadership, Pranav Paranjpe contributions have fortified digital security across the financial sector. 🌐🔐Join us in exploring the inspiring journey of Pranav Paranjpe, CISO at Unity Small Finance Bank. With a career spanning over 18 years, Pranav Paranjpe has been a driving force in cybersecurity, leading initiatives that safeguard our digital future. His story is a testament to the power of dedication, expertise, and leadership in navigating the complexities of information security.",
            //                 "img": "https://github.com/user-attachments/assets/25a01e83-dd37-4931-9e71-d404247c9fd1",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQH3ev_Aa5T2Rw/feedshare-document-pdf-analyzed/0/1722414453209?e=1723680000&v=beta&t=-31Tcj-GU8d-2R7m-qLvpk5T9DYF_q2d3NH-QW1miGo"
            //             },
            //             {
            //                 "title": "𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐧𝐠 𝐑𝐞𝐧𝐧𝐞𝐲 𝐀𝐥𝐞𝐱 𝐕𝐚𝐫𝐠𝐡𝐞𝐬𝐞 : A Pillar of cybersecurity leadership and national growth",
            //                 "desc": "🎉𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐧𝐠 𝐑𝐞𝐧𝐧𝐞𝐲 𝐀𝐥𝐞𝐱 𝐕𝐚𝐫𝐠𝐡𝐞𝐬𝐞, a true pillar of cybersecurity leadership and national growth! 🌟 With a robust foundation in engineering and management, Renney’s journey is marked by relentless dedication and a passion for security. His extensive experience and innovative approaches have made significant contributions to the industry and the nation.👏 Renney’s commitment to nurturing future leaders and fostering a culture of continuous learning sets him apart. His vision for a secure digital future and human-centric leadership is truly inspiring. 🌐Let’s acknowledge his remarkable achievements and the impact he continues to make in the cybersecurity landscape. 🚀",
            //                 "img": "https://github.com/user-attachments/assets/47ee68f6-f442-4c25-b805-530a305dee07)",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQHCAk8qvLUUQQ/feedshare-document-pdf-analyzed/0/1722577586362?e=1723680000&v=beta&t=W5lRC0T8wHTFp9HoCmP7xb8Q1i9t5A0JdV4368-cAPM"
            //             },
            //             {
            //                 "title": "𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐧𝐠 𝐭𝐡𝐞 𝐫𝐞𝐦𝐚𝐫𝐤𝐚𝐛𝐥𝐞 𝐣𝐨𝐮𝐫𝐧𝐞𝐲 𝐨𝐟 𝐒𝐊𝐈 (𝐒𝐞𝐧𝐭𝐡𝐢𝐥 𝐊𝐮𝐦𝐚𝐫 𝐈𝐲𝐲𝐚𝐩𝐩𝐚𝐧)",
            //                 "desc": "🎉🌟𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐧𝐠 𝐭𝐡𝐞 𝐫𝐞𝐦𝐚𝐫𝐤𝐚𝐛𝐥𝐞 𝐣𝐨𝐮𝐫𝐧𝐞𝐲 𝐨𝐟 𝐒𝐊𝐈 (𝐒𝐞𝐧𝐭𝐡𝐢𝐥 𝐊𝐮𝐦𝐚𝐫 𝐈𝐲𝐲𝐚𝐩𝐩𝐚𝐧) in the cybersecurity realm. From a university rank holder to one of India’s top 40-under-40 leaders in 2024, his story is a testament to relentless dedication, innovation, and significant contributions to national growth.SKI's expertise in governance, risk management, and compliance, coupled with his commitment to diversity and mentorship, has made a profound impact on the industry. His leadership and passion for continuous learning inspire us all to achieve excellence. 🚀 Join me in recognizing SKI’s incredible achievements and the positive change he brings to the cybersecurity landscape.",
            //                 "img": "https://github.com/user-attachments/assets/5b395b1d-4d0b-45be-9d45-08a19cacb6d4",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQF8tWmpomGxkQ/feedshare-document-pdf-analyzed/0/1722517912523?e=1723680000&v=beta&t=J2wWxvkwOZv5QbctkZshyVg740-cpDUGyVa0nZQ4YrE"
            //             },
            //             {
            //                 "title": "Dr. Ankoor Dasguupta",
            //                 "desc": "Celebrating Dr. Ankoor Dasguupta Remarkable Journey and Contributions to National Growth.We are thrilled to highlight the incredible journey of 𝐃𝐫. 𝐀𝐧𝐤𝐨𝐨𝐫 𝐃𝐚𝐬𝐠𝐮𝐮𝐩𝐭𝐚, a visionary leader whose contributions to marketing, advertising, and media have significantly impacted the industry and beyond. With 24 years of extensive cross-functional experience, Dr. Ankoor Dasguupta is a beacon of innovation, empathy, and continuous learning.𝐃𝐫. 𝐀𝐧𝐤𝐨𝐨𝐫 𝐃𝐚𝐬𝐠𝐮𝐮𝐩𝐭𝐚'𝐬 leadership and expertise extend across various esteemed institutions and organizations. As a President’s Select Member of Leaders Excellence (MLE) at Harvard Square, a mentor and advisory at the Indian Institute of Film Training & Digital Marketing (IFTDM), and a member of the International CMO Council, his influence is far-reaching. His involvement with top business schools, including the University of Delhi and MICA, showcases his commitment to nurturing future leaders.Recognized as a 𝐓𝐨𝐩 𝐕𝐨𝐢𝐜𝐞 on LinkedIn and an ICF Level 2 Coach (PCC), 𝐃𝐫. 𝐀𝐧𝐤𝐨𝐨𝐫 𝐃𝐚𝐬𝐠𝐮𝐮𝐩𝐭𝐚'𝐬 insights and thought leadership inspire many. His dedication to social impact and kaizen is reflected in his numerous accolades, including the prestigious DR. A.P.J. ABDUL KALAM INSPIRATION AWARD 2024 and the Man of Excellence 2024 by the Indian Achievers’ Award.𝐃𝐫. 𝐀𝐧𝐤𝐨𝐨𝐫 𝐃𝐚𝐬𝐠𝐮𝐮𝐩𝐭𝐚'𝐬 contributions are a testament to his belief in the power of energy and continuous improvement. His work on blending art with algorithms, as highlighted in his articles and interviews, is pioneering the future of marketing and media.𝐉𝐨𝐢𝐧 𝐮𝐬 in celebrating Dr. Ankoor Dasguupta's remarkable achievements and his unwavering commitment to driving positive change and national growth.",
            //                 "img": "https://github.com/user-attachments/assets/bf19f44f-0588-4551-822d-f27e60ca8e83",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQFF0fumg734rg/feedshare-document-pdf-analyzed/0/1722040667029?e=1723680000&v=beta&t=vyhgWTtUVuszI7R2vQkYd59RcpyS6jbfnFBENRjWcS8"
            //             },
            //             {
            //                 "title": "𝐀𝐬𝐡𝐢𝐬𝐡 𝐒𝐡𝐫𝐢𝐯𝐚𝐬𝐭𝐚𝐯𝐚 : A Journey of Excellence in Technology And Business Leadership",
            //                 "desc": "𝐀𝐬𝐡𝐢𝐬𝐡 𝐒𝐡𝐫𝐢𝐯𝐚𝐬𝐭𝐚𝐯𝐚, 𝒊𝒔 𝒂 𝒅𝒊𝒔𝒕𝒊𝒏𝒈𝒖𝒊𝒔𝒉𝒆𝒅 𝒍𝒆𝒂𝒅𝒆𝒓 𝒊𝒏 𝒕𝒆𝒄𝒉𝒏𝒐𝒍𝒐𝒈𝒚 𝒂𝒏𝒅 𝒃𝒖𝒔𝒊𝒏𝒆𝒔𝒔, 𝒌𝒏𝒐𝒘𝒏 𝒇𝒐𝒓 𝒉𝒊𝒔 𝒓𝒐𝒍𝒆𝒔 𝒂𝒔 𝑩𝒖𝒔𝒊𝒏𝒆𝒔𝒔 𝑯𝒆𝒂𝒅, 𝑪𝑻𝑶, 𝑪𝑰𝑶, 𝒂𝒏𝒅 𝑪𝑫𝑶. 𝑾𝒊𝒕𝒉 𝒂 𝒄𝒂𝒓𝒆𝒆𝒓 𝒎𝒂𝒓𝒌𝒆𝒅 𝒃𝒚 𝒂𝒄𝒄𝒐𝒍𝒂𝒅𝒆𝒔 𝒔𝒖𝒄𝒉 𝒂𝒔 𝑷𝒂𝒚𝒎𝒆𝒏𝒕 𝑷𝒓𝒐𝒇𝒆𝒔𝒔𝒊𝒐𝒏𝒂𝒍 𝒊𝒏 2023 𝒂𝒏𝒅 𝑨𝑰 𝑰𝒄𝒐𝒏 𝒊𝒏 2022, 𝒉𝒆 𝒉𝒂𝒔 𝒅𝒆𝒎𝒐𝒏𝒔𝒕𝒓𝒂𝒕𝒆𝒅 𝒂𝒏 𝒊𝒏𝒏𝒐𝒗𝒂𝒕𝒊𝒗𝒆 𝒂𝒑𝒑𝒓𝒐𝒂𝒄𝒉 𝒂𝒏𝒅 𝒄𝒐𝒎𝒎𝒊𝒕𝒎𝒆𝒏𝒕 𝒕𝒐 𝒆𝒙𝒄𝒆𝒍𝒍𝒆𝒏𝒄𝒆. 𝑪𝒖𝒓𝒓𝒆𝒏𝒕𝒍𝒚, 𝒂𝒔 𝒕𝒉𝒆 𝑩𝒖𝒔𝒊𝒏𝒆𝒔𝒔 𝑯𝒆𝒂𝒅 𝒐𝒇 𝑫𝒊𝒈𝒊𝒕𝒂𝒍 𝑬𝒏𝒈𝒊𝒏𝒆𝒆𝒓𝒊𝒏𝒈 𝒂𝒕 𝑭𝒊𝒏𝒂𝒏𝒄𝒊𝒂𝒍 𝑺𝒐𝒇𝒕𝒘𝒂𝒓𝒆 & 𝑺𝒚𝒔𝒕𝒆𝒎𝒔 𝑷𝒓𝒊𝒗𝒂𝒕𝒆 𝑳𝒊𝒎𝒊𝒕𝒆𝒅 (𝑭𝑺𝑺), 𝒉𝒆 𝒎𝒂𝒏𝒂𝒈𝒆𝒔 𝒂 𝒅𝒊𝒗𝒆𝒓𝒔𝒆 𝒑𝒐𝒓𝒕𝒇𝒐𝒍𝒊𝒐 𝒐𝒇 𝒑𝒂𝒚𝒎𝒆𝒏𝒕 𝒕𝒆𝒄𝒉𝒏𝒐𝒍𝒐𝒈𝒊𝒆𝒔 𝒂𝒏𝒅 𝒍𝒆𝒂𝒅𝒔 𝒊𝒏𝒊𝒕𝒊𝒂𝒕𝒊𝒗𝒆𝒔 𝒇𝒐𝒓 𝒎𝒊𝒈𝒓𝒂𝒕𝒊𝒏𝒈 𝒂𝒑𝒑𝒍𝒊𝒄𝒂𝒕𝒊𝒐𝒏𝒔 𝒕𝒐 𝒎𝒖𝒍𝒕𝒊-𝒄𝒍𝒐𝒖𝒅 𝒑𝒍𝒂𝒕𝒇𝒐𝒓𝒎𝒔 𝒂𝒏𝒅 𝒎𝒊𝒄𝒓𝒐𝒔𝒆𝒓𝒗𝒊𝒄𝒆 𝒂𝒓𝒄𝒉𝒊𝒕𝒆𝒄𝒕𝒖𝒓𝒆𝒔. 𝑯𝒊𝒔 𝒆𝒅𝒖𝒄𝒂𝒕𝒊𝒐𝒏𝒂𝒍 𝒃𝒂𝒄𝒌𝒈𝒓𝒐𝒖𝒏𝒅 𝒊𝒏𝒄𝒍𝒖𝒅𝒆𝒔 𝒂 𝑩𝒂𝒄𝒉𝒆𝒍𝒐𝒓 𝒐𝒇 𝑬𝒏𝒈𝒊𝒏𝒆𝒆𝒓𝒊𝒏𝒈 𝒊𝒏 𝑴𝒆𝒄𝒉𝒂𝒏𝒊𝒄𝒂𝒍 𝑬𝒏𝒈𝒊𝒏𝒆𝒆𝒓𝒊𝒏𝒈 𝒇𝒓𝒐𝒎 𝑹𝒂𝒏𝒊 𝑫𝒖𝒓𝒈𝒂𝒗𝒂𝒕𝒊 𝑽𝒊𝒔𝒉𝒘𝒂𝒗𝒊𝒅𝒚𝒂𝒍𝒂𝒚𝒂, 𝑱𝒂𝒃𝒂𝒍𝒑𝒖𝒓, 𝒂𝒏𝒅 𝒎𝒖𝒍𝒕𝒊𝒑𝒍𝒆 𝒄𝒆𝒓𝒕𝒊𝒇𝒊𝒄𝒂𝒕𝒊𝒐𝒏𝒔, 𝒊𝒏𝒄𝒍𝒖𝒅𝒊𝒏𝒈 𝑨𝑾𝑺 𝑪𝒆𝒓𝒕𝒊𝒇𝒊𝒆𝒅 𝑺𝒐𝒍𝒖𝒕𝒊𝒐𝒏𝒔 𝑨𝒓𝒄𝒉𝒊𝒕𝒆𝒄𝒕 - 𝑨𝒔𝒔𝒐𝒄𝒊𝒂𝒕𝒆. 𝑨𝒔𝒉𝒊𝒔𝒉'𝒔 𝒆𝒙𝒑𝒆𝒓𝒕𝒊𝒔𝒆 𝒊𝒏 𝒕𝒆𝒄𝒉𝒏𝒐𝒍𝒐𝒈𝒚 𝒗𝒊𝒔𝒊𝒐𝒏, 𝑰𝑻 𝒊𝒏𝒇𝒓𝒂𝒔𝒕𝒓𝒖𝒄𝒕𝒖𝒓𝒆 𝒅𝒆𝒗𝒆𝒍𝒐𝒑𝒎𝒆𝒏𝒕, 𝒃𝒖𝒔𝒊𝒏𝒆𝒔𝒔 𝒓𝒆𝒆𝒏𝒈𝒊𝒏𝒆𝒆𝒓𝒊𝒏𝒈, 𝒂𝒏𝒅 𝒂𝒅𝒗𝒂𝒏𝒄𝒆𝒅 𝒕𝒆𝒄𝒉𝒏𝒐𝒍𝒐𝒈𝒊𝒆𝒔 𝒍𝒊𝒌𝒆 𝑨𝑰 𝒂𝒏𝒅 𝒃𝒍𝒐𝒄𝒌𝒄𝒉𝒂𝒊𝒏 𝒖𝒏𝒅𝒆𝒓𝒔𝒄𝒐𝒓𝒆𝒔 𝒉𝒊𝒔 𝒔𝒕𝒓𝒂𝒕𝒆𝒈𝒊𝒄 𝒂𝒄𝒖𝒎𝒆𝒏 𝒂𝒏𝒅 𝒗𝒊𝒔𝒊𝒐𝒏𝒂𝒓𝒚 𝒕𝒉𝒊𝒏𝒌𝒊𝒏𝒈, 𝒔𝒆𝒕𝒕𝒊𝒏𝒈 𝒃𝒆𝒏𝒄𝒉𝒎𝒂𝒓𝒌𝒔 𝒂𝒏𝒅 𝒊𝒏𝒔𝒑𝒊𝒓𝒊𝒏𝒈 𝒑𝒓𝒐𝒇𝒆𝒔𝒔𝒊𝒐𝒏𝒂𝒍𝒔 𝒊𝒏 𝒕𝒉𝒆 𝒕𝒆𝒄𝒉 𝒊𝒏𝒅𝒖𝒔𝒕𝒓𝒚.",
            //                 "img": "https://github.com/user-attachments/assets/f32464e7-44f0-4aa8-a4e2-289d4833cb1d",
            //                 "src": "https://media.licdn.com/dms/document/media/D4E1FAQFoi9FdmiJHCA/feedshare-document-pdf-analyzed/0/1721993684357?e=1723680000&v=beta&t=7HeFgs_Tz9k5pM8PDZdgZwrzgKxZtgHAbkqAbtzUnKU"
            //             },
            //             {
            //                 "title": "Saloni Vijay : Navigating the Future of cybersecurity",
            //                 "desc": "Saloni Vijay, with 23 years of experience, is a standout leader in cybersecurity as the CISO and Head-IT at _VOIS India, a Vodafone Group company. Her visionary leadership in IT security, risk management, and operations drives innovation and efficiency. Saloni’s strategic approach has optimized processes, reduced vulnerabilities, and ensured compliance with industry standards. Her dedication to excellence and ability to foresee market opportunities have significantly enhanced business performance. Saloni continues to inspire with her commitment to advancing the cybersecurity landscape.",
            //                 "img": "https://github.com/user-attachments/assets/d01b39d7-4960-4e0f-b399-1350881ac10c",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQFk6vgE7NA5qw/feedshare-document-pdf-analyzed/0/1721982950988?e=1723680000&v=beta&t=RK8i0TnmgJJYPDvWwcaHq1y8Wfu5_ZZxzRwsghaEYqA"
            //             },
            //             {
            //                 "title": "𝐃𝐮𝐫𝐠𝐞𝐬𝐡 𝐆𝐮𝐩𝐭𝐚 : Leading Today, Shping Tomorrow",
            //                 "desc": "𝐃𝐮𝐫𝐠𝐞𝐬𝐡 𝐆𝐮𝐩𝐭𝐚, 𝒕𝒉𝒆 𝑨𝒔𝒔𝒊𝒔𝒕𝒂𝒏𝒕 𝑽𝒊𝒄𝒆 𝑷𝒓𝒆𝒔𝒊𝒅𝒆𝒏𝒕 𝒐𝒇 𝑰𝑻 𝑺𝒆𝒄𝒖𝒓𝒊𝒕𝒚 𝒂𝒕 𝑺𝑴𝑭𝑮 𝑰𝒏𝒅𝒊𝒂 𝑪𝒓𝒆𝒅𝒊𝒕, 𝒊𝒔 𝒂 𝒅𝒊𝒔𝒕𝒊𝒏𝒈𝒖𝒊𝒔𝒉𝒆𝒅 𝒍𝒆𝒂𝒅𝒆𝒓 𝒊𝒏 𝒕𝒉𝒆 𝒇𝒊𝒆𝒍𝒅 𝒐𝒇 𝒄𝒚𝒃𝒆𝒓𝒔𝒆𝒄𝒖𝒓𝒊𝒕𝒚 𝒘𝒊𝒕𝒉 𝒐𝒗𝒆𝒓 𝒂 𝒅𝒆𝒄𝒂𝒅𝒆 𝒐𝒇 𝒆𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒆. 𝑯𝒊𝒔 𝒆𝒙𝒑𝒆𝒓𝒕𝒊𝒔𝒆 𝒊𝒏 𝑰𝒏𝒅𝒖𝒔𝒕𝒓𝒚 4.0 𝒕𝒆𝒄𝒉𝒏𝒐𝒍𝒐𝒈𝒊𝒆𝒔, 𝒊𝒏𝒄𝒍𝒖𝒅𝒊𝒏𝒈 𝒂𝒖𝒕𝒐𝒎𝒂𝒕𝒊𝒐𝒏, 𝑨𝑰, 𝒂𝒏𝒅 𝒎𝒂𝒄𝒉𝒊𝒏𝒆 𝒍𝒆𝒂𝒓𝒏𝒊𝒏𝒈, 𝒉𝒂𝒔 𝒆𝒏𝒂𝒃𝒍𝒆𝒅 𝒉𝒊𝒎 𝒕𝒐 𝒄𝒓𝒂𝒇𝒕 𝒊𝒏𝒏𝒐𝒗𝒂𝒕𝒊𝒗𝒆 𝑰𝑻 𝒔𝒕𝒓𝒂𝒕𝒆𝒈𝒊𝒆𝒔 𝒕𝒉𝒂𝒕 𝒅𝒓𝒊𝒗𝒆 𝒔𝒊𝒈𝒏𝒊𝒇𝒊𝒄𝒂𝒏𝒕 𝒃𝒖𝒔𝒊𝒏𝒆𝒔𝒔 𝒈𝒓𝒐𝒘𝒕𝒉. 𝑫𝒖𝒓𝒈𝒆𝒔𝒉’𝒔 𝒄𝒂𝒓𝒆𝒆𝒓, 𝒘𝒉𝒊𝒄𝒉 𝒃𝒆𝒈𝒂𝒏 𝒂𝒔 𝒂 𝒄𝒚𝒃𝒆𝒓𝒔𝒆𝒄𝒖𝒓𝒊𝒕𝒚 𝒕𝒓𝒂𝒊𝒏𝒆𝒓, 𝒉𝒂𝒔 𝒆𝒗𝒐𝒍𝒗𝒆𝒅 𝒕𝒉𝒓𝒐𝒖𝒈𝒉 𝒌𝒆𝒚 𝒓𝒐𝒍𝒆𝒔 𝒂𝒕 𝑫𝒆𝒍𝒐𝒊𝒕𝒕𝒆, 𝑲𝒐𝒕𝒂𝒌 𝑴𝒂𝒉𝒊𝒏𝒅𝒓𝒂 𝑩𝒂𝒏𝒌, 𝒂𝒏𝒅 𝑵𝒆𝒕𝒘𝒐𝒓𝒌 𝑰𝒏𝒕𝒆𝒍𝒍𝒊𝒈𝒆𝒏𝒄𝒆, 𝒔𝒉𝒐𝒘𝒄𝒂𝒔𝒊𝒏𝒈 𝒉𝒊𝒔 𝒂𝒃𝒊𝒍𝒊𝒕𝒚 𝒕𝒐 𝒎𝒂𝒏𝒂𝒈𝒆 𝒄𝒐𝒎𝒑𝒍𝒆𝒙 𝒔𝒆𝒄𝒖𝒓𝒊𝒕𝒚 𝒂𝒏𝒅 𝒓𝒊𝒔𝒌 𝒄𝒉𝒂𝒍𝒍𝒆𝒏𝒈𝒆𝒔. 𝑪𝒖𝒓𝒓𝒆𝒏𝒕𝒍𝒚 𝒑𝒖𝒓𝒔𝒖𝒊𝒏𝒈 𝒂𝒏 𝑬𝒙𝒆𝒄𝒖𝒕𝒊𝒗𝒆 𝑴𝑩𝑨 𝒊𝒏 𝑫𝒂𝒕𝒂 𝑺𝒄𝒊𝒆𝒏𝒄𝒆, 𝑨𝑰, 𝒂𝒏𝒅 𝑨𝒏𝒂𝒍𝒚𝒕𝒊𝒄𝒔, 𝑫𝒖𝒓𝒈𝒆𝒔𝒉 𝒄𝒐𝒏𝒕𝒊𝒏𝒖𝒆𝒔 𝒕𝒐 𝒃𝒓𝒊𝒅𝒈𝒆 𝒕𝒉𝒆 𝒈𝒂𝒑 𝒃𝒆𝒕𝒘𝒆𝒆𝒏 𝒕𝒆𝒄𝒉𝒏𝒐𝒍𝒐𝒈𝒚 𝒂𝒏𝒅 𝒎𝒂𝒏𝒂𝒈𝒆𝒎𝒆𝒏𝒕, 𝒔𝒆𝒕𝒕𝒊𝒏𝒈 𝒂 𝒉𝒊𝒈𝒉 𝒔𝒕𝒂𝒏𝒅𝒂𝒓𝒅 𝒇𝒐𝒓 𝒍𝒆𝒂𝒅𝒆𝒓𝒔𝒉𝒊𝒑 𝒊𝒏 𝑰𝑻 𝒔𝒆𝒄𝒖𝒓𝒊𝒕𝒚.",
            //                 "img": "https://github.com/user-attachments/assets/db472648-0599-4ef3-aec5-00f7930ce619",
            //                 "src": "https://media.licdn.com/dms/document/media/D4E1FAQEP9lNxYbSFWQ/feedshare-document-pdf-analyzed/0/1721911010819?e=1723680000&v=beta&t=fJmAOl4WkiuiGlRfKDGMiV9PpRNTSjo_A9a9K9EJbCk"
            //             },
            //             {
            //                 "title": "Rajeev Kumar : A Journey Through cybersecurity Excellence",
            //                 "desc": "🚀 Meet Rajeev Kumar, a cybersecurity visionary leading the charge at NTT Global Data Centers !With a career spanning key roles at Reliance Jio and Softcell Technologies, Rajeev excels in strategic alliances and pioneering solutions. His relentless pursuit of excellence and continuous learning has made a significant impact in the industry. 🌐🔒",
            //                 "img": "https://github.com/user-attachments/assets/9860d9d3-4b9a-4c93-a471-09ffe7d06962",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQE2dDMLFxLHPw/feedshare-document-pdf-analyzed/0/1721905426098?e=1723680000&v=beta&t=YQoM8MsuiHGVcfumBJW5QGv0UMz00Rs4laUb9uft21Q"
            //             },
            //             {
            //                 "title": "Raisa Kazi : Exploring the world of Brand Management with Raisa Kazi",
            //                 "desc": "𝐌𝐞𝐞𝐭 Raisa Kazi 🌟, With 18+ years in marketing, Raisa has delivered award-winning campaigns across sectors like Food-Tech and Fintech. Now exploring blockchain and crypto in Health tech, she's a true innovator. From her start at MAK Media to leading roles at TinyOwl, 5nance.com, and 5paisa, Raisa's journey is inspiring. She holds an MBA from SP Jain and a degree from Bhavan's, showcasing her commitment to continuous learning.",
            //                 "img": "https://github.com/user-attachments/assets/2a3099c9-84a9-4b60-927c-9651b78f5ffc",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQHflGlg3wdlVA/feedshare-document-pdf-analyzed/0/1721836345035?e=1723680000&v=beta&t=U9oJxqXXc8w21zrKmHnFxnE2sennKgp-Wgw0s-HBbDQ"
            //             },
            //             {
            //                 "title": "Captain Rahul Sharma : A Transformative Leader in HR",
            //                 "desc": "🚀 Shoutout to Capt. Rahul Sharma! 🎖️ With over 30 years of stellar HR leadership, he's revolutionized sectors like BFSI, IT, and Hospitality. From strategic HR transformation to fostering high-performance cultures, his journey from an Indian Army Captain to a globally recognized HR strategist is inspiring. 🌟Keep shining, Capt. Rahul Sharma 🌟 ",
            //                 "img": "https://github.com/user-attachments/assets/d2943ef6-1f97-4e8d-b5b9-c35310a10ad0",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQFOQCsKMlnWlA/feedshare-document-pdf-analyzed/0/1721803064494?e=1723680000&v=beta&t=MDgJIJ-8ycq73foV7jsT-bQ8MYPeOPxZ0tTzIT5R5ro"
            //             },
            //             {
            //                 "title": "𝗥𝗮𝗵𝘂𝗹 𝗞𝗮𝘄𝘁𝗵𝗮𝗻𝗸𝗮𝗿 : The Visinary Leader in IT And Cybersecurity",
            //                 "desc": "🌟 𝗖𝗲𝗹𝗲𝗯𝗿𝗮𝘁𝗶𝗻𝗴 𝘁𝗵𝗲 𝗿𝗲𝗺𝗮𝗿𝗸𝗮𝗯𝗹𝗲 𝗮𝗰𝗵𝗶𝗲𝘃𝗲𝗺𝗲𝗻𝘁𝘀 𝗼𝗳 𝗥𝗮𝗵𝘂𝗹 𝗞𝗮𝘄𝘁𝗵𝗮𝗻𝗸𝗮𝗿, an inspiring leader in IT and cybersecurity. His innovative vision and dedication have propelled digital transformation and robust cybersecurity strategies across industries. Proud to see such exemplary leadership making a significant impact! 🚀 ",
            //                 "img": "https://github.com/user-attachments/assets/b323a89c-45d8-494b-9bff-81402cd9f421",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQEfTITQh8F8vw/feedshare-document-pdf-analyzed/0/1721735747792?e=1723680000&v=beta&t=B7ReAYYHXZb66OhEn9rBwN-6MCiILjSnjFFg-J1XXt4"
            //             },
            //             {
            //                 "title": "𝐊𝐮𝐬𝐡𝐚𝐥 𝐉𝐚𝐝𝐡𝐚𝐯's : 𝒋𝒐𝒖𝒓𝒏𝒆𝒚 𝒊𝒏 𝒄𝒚𝒃𝒆𝒓𝒔𝒆𝒄𝒖𝒓𝒊𝒕𝒚 Leadership",
            //                 "desc": "𝐊𝐮𝐬𝐡𝐚𝐥 𝐉𝐚𝐝𝐡𝐚𝐯'𝐬 𝒋𝒐𝒖𝒓𝒏𝒆𝒚 𝒊𝒏 𝒄𝒚𝒃𝒆𝒓𝒔𝒆𝒄𝒖𝒓𝒊𝒕𝒚 𝒊𝒔 𝒂 𝒕𝒆𝒔𝒕𝒂𝒎𝒆𝒏𝒕 𝒕𝒐 𝒅𝒆𝒅𝒊𝒄𝒂𝒕𝒊𝒐𝒏, 𝒆𝒙𝒑𝒆𝒓𝒕𝒊𝒔𝒆, 𝒂𝒏𝒅 𝒗𝒊𝒔𝒊𝒐𝒏𝒂𝒓𝒚 𝒍𝒆𝒂𝒅𝒆𝒓𝒔𝒉𝒊𝒑. 𝑨𝒔 𝒕𝒉𝒆 𝑭𝒐𝒖𝒏𝒅𝒆𝒓, 𝑪𝒉𝒊𝒆𝒇 𝑴𝒆𝒏𝒕𝒐𝒓, 𝒂𝒏𝒅 𝑬𝒗𝒂𝒏𝒈𝒆𝒍𝒊𝒔𝒕 𝒂𝒕 𝑪𝒚𝒃𝒆𝒓𝑾𝒐𝒌𝒆𝒔 𝑨𝒄𝒂𝒅𝒆𝒎𝒚, 𝒂𝒏𝒅 𝑴𝒂𝒏𝒂𝒈𝒊𝒏𝒈 𝑷𝒂𝒓𝒕𝒏𝒆𝒓 𝒂𝒕 𝑺𝒆𝒄𝒖𝒓𝒊𝒔𝒕𝒊 𝑪𝒐𝒏𝒔𝒖𝒍𝒕𝒊𝒏𝒈, 𝒉𝒆 𝒉𝒂𝒔 𝒔𝒊𝒈𝒏𝒊𝒇𝒊𝒄𝒂𝒏𝒕𝒍𝒚 𝒊𝒏𝒇𝒍𝒖𝒆𝒏𝒄𝒆𝒅 𝒄𝒚𝒃𝒆𝒓𝒔𝒆𝒄𝒖𝒓𝒊𝒕𝒚 𝒆𝒅𝒖𝒄𝒂𝒕𝒊𝒐𝒏 𝒂𝒏𝒅 𝒃𝒖𝒔𝒊𝒏𝒆𝒔𝒔 𝒓𝒆𝒔𝒊𝒍𝒊𝒆𝒏𝒄𝒆. 𝑾𝒊𝒕𝒉 𝒐𝒗𝒆𝒓 17 𝒚𝒆𝒂𝒓𝒔 𝒐𝒇 𝒆𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒆, 𝑲𝒖𝒔𝒉𝒂𝒍'𝒔 𝒔𝒕𝒓𝒂𝒕𝒆𝒈𝒊𝒄 𝒗𝒊𝒔𝒊𝒐𝒏 𝒂𝒏𝒅 𝒉𝒂𝒏𝒅𝒔-𝒐𝒏 𝒂𝒑𝒑𝒓𝒐𝒂𝒄𝒉 𝒉𝒂𝒗𝒆 𝒇𝒐𝒓𝒕𝒊𝒇𝒊𝒆𝒅 𝒅𝒆𝒇𝒆𝒏𝒔𝒆𝒔 𝒊𝒏 𝒕𝒉𝒆 𝑩𝑭𝑺𝑰 𝒔𝒆𝒄𝒕𝒐𝒓, 𝒆𝒂𝒓𝒏𝒊𝒏𝒈 𝒉𝒊𝒎 𝒏𝒖𝒎𝒆𝒓𝒐𝒖𝒔 𝒑𝒓𝒆𝒔𝒕𝒊𝒈𝒊𝒐𝒖𝒔 𝒂𝒘𝒂𝒓𝒅𝒔, 𝒊𝒏𝒄𝒍𝒖𝒅𝒊𝒏𝒈 𝑪𝑰𝑺𝑶 𝒐𝒇 𝒕𝒉𝒆 𝒀𝒆𝒂𝒓 2022. 𝑯𝒊𝒔 𝒅𝒆𝒆𝒑 𝒕𝒆𝒄𝒉𝒏𝒊𝒄𝒂𝒍 𝒌𝒏𝒐𝒘𝒍𝒆𝒅𝒈𝒆 𝒂𝒏𝒅 𝒂𝒃𝒊𝒍𝒊𝒕𝒚 𝒕𝒐 𝒏𝒂𝒗𝒊𝒈𝒂𝒕𝒆 𝒄𝒐𝒎𝒑𝒍𝒆𝒙 𝒓𝒆𝒈𝒖𝒍𝒂𝒕𝒐𝒓𝒚 𝒍𝒂𝒏𝒅𝒔𝒄𝒂𝒑𝒆𝒔 𝒉𝒂𝒗𝒆 𝒆𝒏𝒉𝒂𝒏𝒄𝒆𝒅 𝒐𝒓𝒈𝒂𝒏𝒊𝒛𝒂𝒕𝒊𝒐𝒏𝒂𝒍 𝒓𝒆𝒔𝒊𝒍𝒊𝒆𝒏𝒄𝒆 𝒂𝒈𝒂𝒊𝒏𝒔𝒕 𝒄𝒚𝒃𝒆𝒓 𝒕𝒉𝒓𝒆𝒂𝒕𝒔. 𝑲𝒖𝒔𝒉𝒂𝒍'𝒔 𝒆𝒅𝒖𝒄𝒂𝒕𝒊𝒐𝒏𝒂𝒍 𝒇𝒐𝒖𝒏𝒅𝒂𝒕𝒊𝒐𝒏 𝒊𝒏 𝒆𝒍𝒆𝒄𝒕𝒓𝒐𝒏𝒊𝒄𝒔 𝒆𝒏𝒈𝒊𝒏𝒆𝒆𝒓𝒊𝒏𝒈 𝒂𝒏𝒅 𝒉𝒊𝒔 𝒖𝒏𝒘𝒂𝒗𝒆𝒓𝒊𝒏𝒈 𝒄𝒐𝒎𝒎𝒊𝒕𝒎𝒆𝒏𝒕 𝒕𝒐 𝒂𝒅𝒗𝒂𝒏𝒄𝒊𝒏𝒈 𝒄𝒚𝒃𝒆𝒓𝒔𝒆𝒄𝒖𝒓𝒊𝒕𝒚 𝒑𝒓𝒂𝒄𝒕𝒊𝒄𝒆𝒔 𝒎𝒂𝒌𝒆 𝒉𝒊𝒎 𝒂 𝒓𝒆𝒔𝒑𝒆𝒄𝒕𝒆𝒅 𝒍𝒆𝒂𝒅𝒆𝒓 𝒂𝒏𝒅 𝒊𝒏𝒇𝒍𝒖𝒆𝒏𝒄𝒆𝒓 𝒊𝒏 𝒕𝒉𝒆 𝒊𝒏𝒅𝒖𝒔𝒕𝒓𝒚, 𝒊𝒏𝒔𝒑𝒊𝒓𝒊𝒏𝒈 𝒎𝒂𝒏𝒚 𝒘𝒊𝒕𝒉 𝒉𝒊𝒔 𝒆𝒙𝒄𝒆𝒑𝒕𝒊𝒐𝒏𝒂𝒍 𝒄𝒐𝒏𝒕𝒓𝒊𝒃𝒖𝒕𝒊𝒐𝒏𝒔.",
            //                 "img": "https://github.com/user-attachments/assets/4835ac08-9947-4cd7-a428-77d862a6bc8e",
            //                 "src": "https://media.licdn.com/dms/document/media/D4E1FAQFHeyie4ZaLkA/feedshare-document-pdf-analyzed/0/1721722278907?e=1723680000&v=beta&t=gl0ZAGOD_sIsIuWAYVcUKIzQW9gVGCM89E81-U_h0Zk"
            //             },
            //             {
            //                 "title": "🚀Sandip Sharma’s Inspiring Journey in Data Analytics and Technology Leadership 📊🌟",
            //                 "desc": "Join us in celebrating Sandip Sharma, Co-Founder & CTO of ScatterPie Analytics. From humble beginnings in network management to leading data initiatives at top firms, Sandip’s career is a testament to innovation and leadership in data analytics and enterprise BI. Dive into his journey and discover how he’s shaping the future of technology.🚀",
            //                 "img": "https://github.com/user-attachments/assets/d2aff0bc-f09b-4901-9449-aaeca2236027",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQHphlcaotMRVQ/feedshare-document-pdf-analyzed/0/1719574704748?e=1723680000&v=beta&t=Asb3OUMOvSPvqwj8jibhOZineam8B34jH4rX8Q6Uy6M"
            //             },
            //             {
            //                 "title": "Sanjay Kumar Tripathi : Navigating the IT Landscape",
            //                 "desc": "🌟Discover the inspiring journey of Sanjay Kumar Tripathi, a seasoned IT strategist and leader with over two decades of global experience. From driving digital transformation at Bestseller India to pioneering innovations in varied industry verticals, Sanjay's career is a testament to excellence and relentless pursuit of innovation.💡🚀 Join us in celebrating Sanjay's contributions to the IT domain. His expertise and leadership continue to shape the future of digital transformation.",
            //                 "img": "https://github.com/user-attachments/assets/4756bd65-56e4-4d36-acf5-ad9500be4c3b",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQHCxEc1d9a-JQ/feedshare-document-pdf-analyzed/0/1719551290173?e=1723680000&v=beta&t=PpsbJ86h5MwhkAjGXD9QNm6H62I39A4lrMJ-oCZK54U"
            //             },
            //             {
            //                 "title": "Dheeraj Chawla : 𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐧𝐠 𝐓𝐰𝐨 𝐃𝐞𝐜𝐚𝐝𝐞𝐬 𝐨𝐟 𝐋𝐞𝐚𝐝𝐞𝐫𝐬𝐡𝐢𝐩 𝐚𝐧𝐝 𝐈𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐨𝐧",
            //                 "desc": "🎉🚀I'm excited to share the incredible journey of Dheeraj Chawla, a dynamic leader who has been instrumental in driving growth and innovation for over 22 years at Shib Dass & Sons Pvt. Ltd. in Delhi, India. With an MBA in Marketing & Administration and International Business Relations, along with a distinguished academic background, Dheeraj's strategic vision and leadership have significantly contributed to the company's success.His diverse experience, spanning over two decades, includes pivotal roles as Chief Marketing Officer and Chief Information Officer. Dheeraj's tenure at Shib Dass & Sons is marked by numerous accolades, including the CIO500 Accelerator X Award, Leadership Excellence Award, and Hybrid Cloud & Marketing Award, among others.Beyond his professional achievements, Dheeraj is a motivational speaker, passionate mentor, and lifelong learner. His profound interactions have left a lasting impact, showcasing his commitment to healing and transforming lives.Join me in celebrating Dheeraj's remarkable journey and continued success! 🌟👨‍💼",
            //                 "img": "https://github.com/user-attachments/assets/85139d0d-fdd4-401a-8d89-f985b180718c",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQFLS3jRbzHW_w/feedshare-document-pdf-analyzed/0/1719484540825?e=1723680000&v=beta&t=RhqMPblYJvgm42-al-_gMiJSUN5-GaaIF6tuJHr3qgw"
            //             },
            //             {
            //                 "title": "Celebrating Rahul Raman: A Decade of Leadership and Innovation in IT",
            //                 "desc": "Rahul Raman’s journey in the IT sector is a testament to dedication and innovation. From his early days at IndiaMART to his current role as CTO of India Index, Rahul's leadership has driven significant advancements in technology and engineering management. His commitment to social responsibility through initiatives like the Hope Education Welfare Society highlights his dedication to making a positive impact beyond the tech industry. Join us in celebrating his remarkable achievements and contributions to India's IT growth.",
            //                 "img": "https://github.com/user-attachments/assets/c3788a6c-3022-4702-844f-082b104f420c",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQF5JxS8xmrvAA/feedshare-document-pdf-analyzed/0/1719466394581?e=1723680000&v=beta&t=GDJRDJTNcZrJ8dt3QUsWBqDHGnl1JMbWj1_CdFmHsXk"
            //             },
            //             {
            //                 "title": "🌟 𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐧𝐠 𝐓𝐮𝐬𝐡𝐚𝐫 𝐑𝐚𝐭𝐡𝐨𝐝: 𝐓𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐯𝐞 𝐂𝐄𝐎 𝐨𝐟 𝐒𝐞𝐞 & 𝐑𝐞𝐜𝐫𝐮𝐢𝐭 🌟🚀",
            //                 "desc": "Tushar Rathod, CEO of See & Recruit, leads with vision and passion, driving INR 100Cr in salary negotiations annually. With offices in Mumbai, Bengaluru, Gurugram, and Dubai, See & Recruit is a powerhouse in talent acquisition.📈 Under Tushar's leadership, the firm has placed over 1,000 careers and serves clients globally. His exceptional networking skills and innovative strategies have made See & Recruit a trusted name in Real Estate and Financial Services recruitment.👫 Founded with his wife, Phalguni Rathod, their synergistic leadership fosters a work-life balance with no overtime and fun monthly events, creating a thriving work environment.🌟 Cheers to Tushar Rathod for his remarkable leadership and contributions to the industry! 🌟",
            //                 "img": "https://github.com/user-attachments/assets/1b3c0a6e-5c60-422f-a004-26b266299038",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQErQJGawR4KgA/feedshare-document-pdf-analyzed/0/1719385156085?e=1723680000&v=beta&t=5KFD0pg-SLdEJo4y-_tP2u11Xxh9jL0Pt4lKKRfJa6s"
            //             },
            //             {
            //                 "title": "Celebrate with us the extraordinary journey and contributions of Satyavrat.",
            //                 "desc": "Along with professional success, his story is one of making a significant impact on a larger scale. We have many more years of innovation, leadership, and national advancement ahead of us, all under the guidance of Satyavrat Mishra.",
            //                 "img": "https://github.com/user-attachments/assets/06c7491b-ae25-4212-b092-564b2b8b9769",
            //                 "src": "https://media.licdn.com/dms/document/media/D561FAQG0b_xDCzHhuA/feedshare-document-pdf-analyzed/0/1719317070903?e=1723680000&v=beta&t=hKvMv0MRkzH9M3hCkMJHtNaTL-7e2TtOa9EWAilL708"
            //             },
            //             {
            //                 "title": "🌟𝐃𝐫𝐢𝐯𝐢𝐧𝐠 𝐑𝐞𝐧𝐞𝐰𝐚𝐛𝐥𝐞 𝐄𝐧𝐞𝐫𝐠𝐲 𝐈𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐨𝐧𝐬 𝐀𝐜𝐫𝐨𝐬𝐬 𝐁𝐨𝐫𝐝𝐞𝐫𝐬",
            //                 "desc": "🌍I'm thrilled to highlight the incredible journey of Jaideep Pathria, the visionary Founder and CEO of Green World Renewable Energy. With over 26 years of experience in leadership roles, Jaideep has been instrumental in expanding his company’s reach both in the United States and India. His expertise spans the entire spectrum of solar services, from engineering design to installation and maintenance, for residential, commercial, and utility customers. 🌞🔧Jaideep's educational background in Geology and Earth Sciences, coupled with his diploma in computer web development, has equipped him with a unique blend of scientific and technical skills. This powerful combination has driven his success in the renewable energy sector, making significant contributions to sustainability and technological advancements. 🌱💡Let's celebrate Jaideep's remarkable achievements and his dedication to creating a greener future! 🌿💪",
            //                 "img": "https://github.com/user-attachments/assets/f48596a7-587e-4044-a250-3a9c351ef701",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQFzbz9WF5qKHQ/feedshare-document-pdf-analyzed/0/1719309705568?e=1723680000&v=beta&t=TrzRjAElnDGAH6Vw9b23sZd5dr6UIKB3yjmveXPqjsY"
            //             }, {
            //                 "title": "Ankit Majethia : A Visionary in Branding and Marketing",
            //                 "desc": "Meet Ankit Majethia, a branding and marketing visionary with 20+ years of experience. As Founder and Chief Strategist of Hangover Media, he leads a talented team to create award-winning campaigns. Ankit's passion for startups is evident through his podcast, The Branding Circle, where he shares insights to help entrepreneurs grow.",
            //                 "img": "https://github.com/user-attachments/assets/7db8cec9-2add-4db1-b218-66a59f323529",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQGINNVvXDYi8g/feedshare-document-pdf-analyzed/0/1719227011495?e=1723680000&v=beta&t=kp_6-FYfn6ymrhBES5LlrqM6i15bVFdZnL_jAlNmxYg"
            //             }, {
            //                 "title": "𝐕𝐞𝐧𝐮𝐠𝐨𝐩𝐚𝐥 𝐑𝐚𝐨 𝐏𝐞𝐧𝐝𝐲𝐚𝐥𝐚: 𝐀 𝐒𝐲𝐦𝐩𝐡𝐨𝐧𝐲 𝐨𝐟 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫𝐢𝐧𝐠 𝐚𝐧𝐝 𝐋𝐞𝐚𝐝𝐞𝐫𝐬𝐡𝐢𝐩",
            //                 "desc": "Let me introduce you to Venugopal Rao Pendyala, an innovative genius, who with finesse and excellence, employs engineered work structures and administrative management ideas to seamlessly fit together. From these and many more achievements in the current career that has lasted over three decades, it is evident that Venugopal has made a strong imprint in the manufacturing and automotive industries. The testimonial of his career path from a Production Engineer to the Chief Executive Officer of Autoline Industries reveals a determined and focused chap. It is a personal and exciting projection of a leader with a passion for his profession and a strong desire to learn and grow professionally all his working life 🏆💼",
            //                 "img": "https://github.com/user-attachments/assets/3f9daad4-2bd1-48ce-9302-c028e4ef5932",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQELPtTKVi0Kyg/feedshare-document-pdf-analyzed/0/1719297926183?e=1723680000&v=beta&t=HfASfTJJl-DiI2MNIpCmyibWQBY_uzPFEP9EX5mlBsM"
            //             }, {
            //                 "title": "Harddik K Patil : A Visionary Leader Transforming Healthcare And Consulting",
            //                 "desc": "Revolutionizing healthcare with visionary leadership! 🌟 Meet Harddik K Patel, the dynamic CEO of Quali5Care, driving innovation and accessibility in healthcare. Harddik K Patel, Founder and CEO of Quali5Care, transitioned from a successful banking career to healthcare, launching HealWell24 and Quali5Care. His visionary leadership is transforming healthcare consulting, making quality care affordable and accessible. Join us in celebrating his inspiring journey and impactful contributions.",
            //                 "img": "https://github.com/user-attachments/assets/df2d409b-40fb-463e-a474-c95225e079d7",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQGsrRbrt0SNLw/feedshare-document-pdf-analyzed/0/1718687452971?e=1723680000&v=beta&t=F3no35vJvV3XnbE-ZlWN0sSUxFUELFv4qLF_gnOqVZE"
            //             }, {
            //                 "title": "Abhishek Desai: Leading the Way in AI at Algobrain",
            //                 "desc": "Abhishek Desai, Founder and CTO of Algobrain AI, is making big waves in technology. With a strong background in computer engineering, he now leads projects in AI, machine learning, and more. His goal is to create smart, ethical AI solutions that help people and businesses. Follow us to learn about inspiring leaders like Abhishek!",
            //                 "img": "https://github.com/user-attachments/assets/f15ec39e-1b92-4a31-a016-754367f8c4a0",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQEjmtFOZNhHuQ/feedshare-document-pdf-analyzed/0/1719056822538?e=1723680000&v=beta&t=vpselj-0MsOo8jmp5UkAzdd0PFKzRsXpTniyqOeaeYI"
            //             }, {
            //                 "title": "Shradha Jain: The Trailblazing Corporate Lawyer Empowering India's Future",
            //                 "desc": "Step into the world of Shradha Jain, a pioneering force in India's corporate law landscape. With an impressive educational pedigree from Jindal Global Law School, Columbia University, and the University of Mumbai, Shradha stands at the forefront of legal innovation and excellence. Her expertise spans end-to-end financing, entity incorporation, and intricate transactional documents, driving substantial growth in India's corporate sector. Guiding tech startups and navigating cross-border contracts, Shradha's impact is profound and far-reaching. As Of Counsel at White Summers Caffee & James, LLP, she epitomizes leadership and dedication, inspiring the next generation of legal professionals. Discover how Shradha Jain is shaping the future of corporate law in India.",
            //                 "img": "https://github.com/user-attachments/assets/6f21a4f6-6445-43d6-b6b8-e31185c52675",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQEERhFtGeJyzQ/feedshare-document-pdf-analyzed/0/1718255939273?e=1723680000&v=beta&t=bVnrnCM5_8eAvhsqJcxTMtNrA7vteQtucmznKfHaWPw"
            //             }, {
            //                 "title": "Mayur Tanna : Cleebrating the Journey and Achivements Of Mayur Tanna",
            //                 "desc": "🌟 𝐋𝐞𝐚𝐝𝐞𝐫𝐬𝐡𝐢𝐩 𝐚𝐧𝐝 𝐈𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐨𝐧 𝐢𝐧 𝐀𝐜𝐭𝐢𝐨𝐧: Mayur Tanna’s career path from software engineer to Group CIO at TransformHub is a testament to his unwavering commitment to excellence. With pivotal roles at Accenture, Deloitte, and now TransformHub, Mayur has consistently driven digital transformation and business growth. His expertise in executive management, strategic partnerships, and customer-centric solutions continues to shape the future of tech. Follow Mayur’s journey for insights into leadership and innovation in action",
            //                 "img": "https://github.com/user-attachments/assets/c0f587d7-cc0e-4077-a386-01439a2e516b",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQFGdKvWKZOEHg/feedshare-document-pdf-analyzed/0/1718971435359?e=1723680000&v=beta&t=whyu3uGW14dqD530A8ac8cGMV5lpiNXAywdGZOM5vws"
            //             }, {
            //                 "title": "Piyush Kothari : A Trailblazer in Wealth Management And Financial Strategy",
            //                 "desc": "Piyush Kothari 𝘪𝘴 𝘢 𝘭𝘦𝘢𝘥𝘪𝘯𝘨 𝘦𝘯𝘵𝘳𝘦𝘱𝘳𝘦𝘯𝘦𝘶𝘳 𝘢𝘯𝘥 𝘪𝘯𝘷𝘦𝘴𝘵𝘰𝘳 𝘪𝘯 𝘸𝘦𝘢𝘭𝘵𝘩 𝘮𝘢𝘯𝘢𝘨𝘦𝘮𝘦𝘯𝘵, 𝘬𝘯𝘰𝘸𝘯 𝘧𝘰𝘳 𝘧𝘰𝘶𝘯𝘥𝘪𝘯𝘨 𝘞𝘢𝘵𝘦𝘳𝘧𝘳𝘰𝘯𝘵 𝘊𝘢𝘱𝘪𝘵𝘢𝘭 𝘪𝘯 𝘔𝘶𝘮𝘣𝘢𝘪. 𝘞𝘪𝘵𝘩 𝘰𝘷𝘦𝘳 12 𝘺𝘦𝘢𝘳𝘴 𝘰𝘧 𝘦𝘹𝘱𝘦𝘳𝘪𝘦𝘯𝘤𝘦 𝘢𝘵 𝘪𝘯𝘴𝘵𝘪𝘵𝘶𝘵𝘪𝘰𝘯𝘴 𝘭𝘪𝘬𝘦 𝘐𝘊𝘐𝘊𝘐 𝘉𝘢𝘯𝘬, 𝘏𝘋𝘍𝘊 𝘉𝘢𝘯𝘬, 𝘢𝘯𝘥 𝘊𝘦𝘯𝘵𝘳𝘶𝘮, 𝘩𝘦 𝘦𝘹𝘤𝘦𝘭𝘴 𝘪𝘯 𝘮𝘢𝘯𝘢𝘨𝘪𝘯𝘨 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘉𝘢𝘯𝘬𝘪𝘯𝘨 𝘧𝘰𝘳 𝘶𝘭𝘵𝘳𝘢-𝘩𝘪𝘨𝘩 𝘯𝘦𝘵 𝘸𝘰𝘳𝘵𝘩 𝘤𝘭𝘪𝘦𝘯𝘵𝘴 𝘨𝘭𝘰𝘣𝘢𝘭𝘭𝘺. 𝘐𝘥𝘦𝘯𝘵𝘪𝘧𝘺𝘪𝘯𝘨 𝘢 𝘨𝘢𝘱 𝘪𝘯 𝘢𝘥𝘷𝘪𝘴𝘰𝘳𝘺 𝘴𝘦𝘳𝘷𝘪𝘤𝘦𝘴 𝘧𝘰𝘳 𝘐𝘯𝘥𝘪𝘢𝘯 𝘏𝘪𝘨𝘩 𝘕𝘦𝘵 𝘞𝘰𝘳𝘵𝘩 𝘐𝘯𝘥𝘪𝘷𝘪𝘥𝘶𝘢𝘭𝘴 (𝘏𝘕𝘐𝘴), 𝘩𝘦 𝘦𝘴𝘵𝘢𝘣𝘭𝘪𝘴𝘩𝘦𝘥 𝘞𝘢𝘵𝘦𝘳𝘧𝘳𝘰𝘯𝘵 𝘊𝘢𝘱𝘪𝘵𝘢𝘭 𝘵𝘰 𝘱𝘳𝘰𝘷𝘪𝘥𝘦 𝘵𝘢𝘪𝘭𝘰𝘳𝘦𝘥 𝘪𝘯𝘷𝘦𝘴𝘵𝘮𝘦𝘯𝘵 𝘴𝘰𝘭𝘶𝘵𝘪𝘰𝘯𝘴 𝘸𝘪𝘵𝘩 𝘢 𝘵𝘳𝘢𝘯𝘴𝘱𝘢𝘳𝘦𝘯𝘵, 𝘤𝘭𝘪𝘦𝘯𝘵-𝘤𝘦𝘯𝘵𝘳𝘪𝘤 𝘢𝘱𝘱𝘳𝘰𝘢𝘤𝘩. 𝘗𝘪𝘺𝘶𝘴𝘩 𝘩𝘰𝘭𝘥𝘴 𝘢 𝘉𝘢𝘤𝘩𝘦𝘭𝘰𝘳'𝘴 𝘪𝘯 𝘉𝘪𝘰𝘵𝘦𝘤𝘩𝘯𝘰𝘭𝘰𝘨𝘺, 𝘢𝘯 𝘔𝘉𝘈 𝘪𝘯 𝘔𝘢𝘯𝘢𝘨𝘦𝘮𝘦𝘯𝘵, 𝘢𝘯𝘥 𝘗𝘰𝘴𝘵 𝘎𝘳𝘢𝘥𝘶𝘢𝘵𝘦 𝘋𝘪𝘱𝘭𝘰𝘮𝘢𝘴 𝘪𝘯 𝘐𝘯𝘵𝘦𝘭𝘭𝘦𝘤𝘵𝘶𝘢𝘭 𝘗𝘳𝘰𝘱𝘦𝘳𝘵𝘺 𝘙𝘪𝘨𝘩𝘵𝘴 𝘢𝘯𝘥 𝘊𝘶𝘴𝘵𝘰𝘮𝘦𝘳 𝘙𝘦𝘭𝘢𝘵𝘪𝘰𝘯𝘴𝘩𝘪𝘱 𝘔𝘢𝘯𝘢𝘨𝘦𝘮𝘦𝘯𝘵. 𝘏𝘪𝘴 𝘵𝘩𝘰𝘶𝘨𝘩𝘵 𝘭𝘦𝘢𝘥𝘦𝘳𝘴𝘩𝘪𝘱 𝘪𝘯 𝘞𝘦𝘢𝘭𝘵𝘩 𝘔𝘢𝘯𝘢𝘨𝘦𝘮𝘦𝘯𝘵, 𝘍𝘪𝘯𝘵𝘦𝘤𝘩, 𝘋𝘪𝘨𝘪𝘵𝘢𝘭𝘪𝘻𝘢𝘵𝘪𝘰𝘯, 𝘢𝘯𝘥 𝘍𝘪𝘯𝘢𝘯𝘤𝘪𝘢𝘭 𝘐𝘯𝘤𝘭𝘶𝘴𝘪𝘰𝘯, 𝘴𝘩𝘢𝘳𝘦𝘥 𝘢𝘵 𝘱𝘳𝘦𝘴𝘵𝘪𝘨𝘪𝘰𝘶𝘴 𝘧𝘰𝘳𝘶𝘮𝘴, 𝘤𝘰𝘯𝘵𝘪𝘯𝘶𝘦𝘴 𝘵𝘰 𝘴𝘩𝘢𝘱𝘦 𝘵𝘩𝘦𝘴𝘦 𝘴𝘦𝘤𝘵𝘰𝘳𝘴.",
            //                 "img": "https://github.com/user-attachments/assets/853b2a11-113d-46ad-9529-e048780ae0b6",
            //                 "src": "https://media.licdn.com/dms/document/media/D4E1FAQGG--AK9HjRGw/feedshare-document-pdf-analyzed/0/1718600822262?e=1723680000&v=beta&t=9F-Oeo3p0TwaHmrn5NlkduDLN37PVFmfUxmeUffdDOU"
            //             }, {
            //                 "title": "Laxminarayan Sahu : Navigating the World of Cybersecurity",
            //                 "desc": "Meet Laxminarayan Sahu, a cybersecurity leader with extensive experience in IT security and management. As the Chief Information Security Officer at the Metropolitan Stock Exchange of India Ltd., Laxminarayan excels in protecting critical data and ensuring a secure trading environment. With an impressive educational background and numerous certifications, his dedication to cybersecurity is truly inspiring.",
            //                 "img": "https://github.com/user-attachments/assets/688b49e7-ee7a-4024-a79e-dbc9e19efadb",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQGU-RMXpNNlrA/feedshare-document-pdf-analyzed/0/1718880056380?e=1723680000&v=beta&t=5l1VFr8ajFweuUq5CU9m5XZ5TQvH7_sjqHlJhRgcbF4"
            //             }, {
            //                 "title": "𝐒𝐡𝐰𝐞𝐭𝐚 𝐒𝐫𝐢𝐯𝐚𝐬𝐭𝐚𝐯𝐚 𝐢𝐬 𝐚 𝐭𝐫𝐚𝐢𝐥𝐛𝐥𝐚𝐳𝐞𝐫 𝐢𝐧 𝐝𝐢𝐠𝐢𝐭𝐚𝐥 𝐭𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 🌟",
            //                 "desc": "Meet Shweta Srivastava, a digital transformation expert with over 23 years of expertise! 🎉 Shweta has had a substantial impact on IT strategy, customer experience, and cybersecurity. Her amazing list of achievements includes Next100 CIO, Innovative CIO, and Champion 'Tech Woman' of the Year. Shweta's leadership and strategic vision have propelled multiple successful IT initiatives, making her a valuable asset in the IT industry. Shweta has a PGDM in IT from IMT Ghaziabad and many certifications, including Prince2 and ITIL. Her expertise in project management, cloud computing, and business process automation make her an adaptable leader. Shweta's focus to connecting IT with business goals, as well as her passion for innovation, continue to drive her success.",
            //                 "img": "https://github.com/user-attachments/assets/638fefb2-f51b-46dd-9ad2-206efa4a2fa6",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQFHjcnQy5CjfQ/feedshare-document-pdf-analyzed/0/1718857569519?e=1723680000&v=beta&t=7BE6g0YcLq5fEB0nrEEjLDmteAasspN0R5VLRYTsliU"
            //             }, {
            //                 "title": "Akshay Upadhyay : A Visionary Leader Driving IT Innovation And Excellence",
            //                 "desc": "A visionary leader in IT innovation: Akshay Upadhyay, the driving force behind digital transformation at SBICAP Trustee Company Limited. Akshay Upadhyay, Chief Information Officer at SBICAP Trustee Company Limited, is a standout leader in the IT sector with over 18 years of hands-on experience. Starting his career at Micron Systems, he honed his skills in hardware and network troubleshooting, later showcasing his leadership at PCS Technologies Limited and Magna InfoTech Pvt Ltd. At Mahindra Finance, Akshay led significant technological advancements, integrating cutting-edge technologies and developing critical business applications. Now at SBICAP, he continues to drive digital transformation, enhancing operational efficiency and customer experiences through innovative technologies like mobile solutions, Blockchain, AI, IoT, and chatbots. Akshay's commitment to leveraging technology for business growth has earned him the Digital Transformation Leader Award (CIO) by Governance Now in October 2023. His journey is truly inspiring, setting industry standards and motivating future leaders in the field.",
            //                 "img": "https://github.com/user-attachments/assets/1b68b128-5ad9-48a9-ad3a-81432586d937",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQFFLrKi6tKO7g/feedshare-document-pdf-analyzed/0/1718790402561?e=1723680000&v=beta&t=tHqB6man8uR0atv6RAslhPzXXb6RH1iV08wuJ59UniI"
            //             }, {
            //                 "title": "Prashant Pandey : The inspiring Journey of Prashant Pandey, CTO Extraordinaire",
            //                 "desc": "🌟 Celebrating the remarkable journey of Prashant Pandey! From pioneering digital strategies to leading transformative projects, Prashant's expertise and leadership in the tech industry are truly inspiring. 🚀",
            //                 "img": "https://github.com/user-attachments/assets/f029de33-d631-4539-a741-26928e67e13d",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQHikzhW1unuaA/feedshare-document-pdf-analyzed/0/1718366619550?e=1723680000&v=beta&t=UBv9lt0jKJIbg6XOIJk3zlaosgK0dNhYF8agXfWQlJo"
            //             }, {
            //                 "title": "𝑲𝒖𝒎𝒂𝒓𝒆𝒔𝒂𝒏 M : Leading IT Transformation Unichem Labs",
            //                 "desc": "𝑲𝒖𝒎𝒂𝒓𝒆𝒔𝒂𝒏 𝑴 𝒉𝒂𝒔 𝒃𝒖𝒊𝒍𝒕 𝒂𝒏 𝒊𝒍𝒍𝒖𝒔𝒕𝒓𝒊𝒐𝒖𝒔 𝒄𝒂𝒓𝒆𝒆𝒓 𝒊𝒏 𝑰𝑻 𝒂𝒏𝒅 𝒄𝒚𝒃𝒆𝒓𝒔𝒆𝒄𝒖𝒓𝒊𝒕𝒚 𝒐𝒗𝒆𝒓 𝒎𝒐𝒓𝒆 𝒕𝒉𝒂𝒏 20 𝒚𝒆𝒂𝒓𝒔. 𝑯𝒆 𝒄𝒖𝒓𝒓𝒆𝒏𝒕𝒍𝒚 𝒔𝒆𝒓𝒗𝒆𝒔 𝒂𝒔 𝒕𝒉𝒆 𝑯𝒆𝒂𝒅 𝒐𝒇 𝑰𝑻 𝒂𝒏𝒅 𝑪𝑰𝑺𝑶 𝒂𝒕 𝑼𝒏𝒊𝒄𝒉𝒆𝒎 𝑳𝒂𝒃𝒐𝒓𝒂𝒕𝒐𝒓𝒊𝒆𝒔 𝑳𝒊𝒎𝒊𝒕𝒆𝒅, 𝒂 𝒍𝒆𝒂𝒅𝒊𝒏𝒈 𝒑𝒉𝒂𝒓𝒎𝒂𝒄𝒆𝒖𝒕𝒊𝒄𝒂𝒍 𝒄𝒐𝒎𝒑𝒂𝒏𝒚 𝒊𝒏 𝑴𝒖𝒎𝒃𝒂𝒊, 𝑴𝒂𝒉𝒂𝒓𝒂𝒔𝒉𝒕𝒓𝒂, 𝑰𝒏𝒅𝒊𝒂. 𝑺𝒊𝒏𝒄𝒆 𝒋𝒐𝒊𝒏𝒊𝒏𝒈 𝑼𝒏𝒊𝒄𝒉𝒆𝒎 𝑳𝒂𝒃𝒔 𝒊𝒏 𝑨𝒖𝒈𝒖𝒔𝒕 2018, 𝑲𝒖𝒎𝒂𝒓𝒆𝒔𝒂𝒏 𝒉𝒂𝒔 𝒑𝒍𝒂𝒚𝒆𝒅 𝒂 𝒄𝒓𝒖𝒄𝒊𝒂𝒍 𝒓𝒐𝒍𝒆 𝒊𝒏 𝒅𝒓𝒊𝒗𝒊𝒏𝒈 𝒅𝒊𝒈𝒊𝒕𝒂𝒍 𝒕𝒓𝒂𝒏𝒔𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒐𝒏 𝒂𝒏𝒅 𝒐𝒑𝒕𝒊𝒎𝒊𝒛𝒊𝒏𝒈 𝒃𝒖𝒔𝒊𝒏𝒆𝒔𝒔 𝒑𝒓𝒐𝒄𝒆𝒔𝒔𝒆𝒔. 𝑷𝒓𝒊𝒐𝒓 𝒕𝒐 𝒕𝒉𝒊𝒔, 𝒉𝒆 𝒘𝒂𝒔 𝒕𝒉𝒆 𝑰𝑻 𝑯𝒆𝒂𝒅 (𝑨𝑴𝑬𝑨) 𝒂𝒕 𝑪𝒆𝒏𝒕𝒓𝒊𝒆𝒏𝒕 𝑷𝒉𝒂𝒓𝒎𝒂𝒄𝒆𝒖𝒕𝒊𝒄𝒂𝒍𝒔 𝒊𝒏 𝑮𝒖𝒓𝒈𝒂𝒐𝒏 𝒇𝒓𝒐𝒎 𝑱𝒖𝒏𝒆 2010 𝒕𝒐 𝑱𝒖𝒍𝒚 2018, 𝒂𝒏𝒅 𝒃𝒆𝒇𝒐𝒓𝒆 𝒕𝒉𝒂𝒕, 𝒉𝒆 𝒔𝒑𝒆𝒏𝒕 𝒕𝒆𝒏 𝒚𝒆𝒂𝒓𝒔 𝒂𝒔 𝒂𝒏 𝑰𝑻 𝑴𝒂𝒏𝒂𝒈𝒆𝒓 𝒂𝒕 𝑫𝒂𝒏𝒊𝒔𝒄𝒐 𝑰𝒏𝒅𝒊𝒂. 𝑲𝒖𝒎𝒂𝒓𝒆𝒔𝒂𝒏 𝑴 𝒉𝒂𝒔 𝒂 𝒕𝒓𝒂𝒄𝒌 𝒓𝒆𝒄𝒐𝒓𝒅 𝒐𝒇 𝒔𝒊𝒈𝒏𝒊𝒇𝒊𝒄𝒂𝒏𝒕 𝒂𝒄𝒉𝒊𝒆𝒗𝒆𝒎𝒆𝒏𝒕𝒔 𝒊𝒏 𝑰𝑻 𝒂𝒏𝒅 𝒄𝒚𝒃𝒆𝒓𝒔𝒆𝒄𝒖𝒓𝒊𝒕𝒚. 𝑨𝒕 𝑼𝒏𝒊𝒄𝒉𝒆𝒎 𝑳𝒂𝒃𝒔, 𝒉𝒆 𝒉𝒂𝒔 𝒔𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒊𝒎𝒑𝒍𝒆𝒎𝒆𝒏𝒕𝒆𝒅 𝑺𝑨𝑷, 𝑬𝑹𝑷, 𝒂𝒏𝒅 𝑰𝑻 𝒊𝒏𝒇𝒓𝒂𝒔𝒕𝒓𝒖𝒄𝒕𝒖𝒓𝒆 𝒔𝒐𝒍𝒖𝒕𝒊𝒐𝒏𝒔 𝒕𝒉𝒂𝒕 𝒉𝒂𝒗𝒆 𝒆𝒏𝒉𝒂𝒏𝒄𝒆𝒅 𝒐𝒓𝒈𝒂𝒏𝒊𝒛𝒂𝒕𝒊𝒐𝒏𝒂𝒍 𝒆𝒇𝒇𝒊𝒄𝒊𝒆𝒏𝒄𝒚, 𝒑𝒓𝒐𝒅𝒖𝒄𝒕𝒊𝒗𝒊𝒕𝒚, 𝒂𝒏𝒅 𝒄𝒐𝒎𝒑𝒍𝒊𝒂𝒏𝒄𝒆. 𝑯𝒊𝒔 𝒑𝒓𝒐𝒇𝒆𝒔𝒔𝒊𝒐𝒏𝒂𝒍 𝒄𝒓𝒆𝒅𝒆𝒏𝒕𝒊𝒂𝒍𝒔 𝒊𝒏𝒄𝒍𝒖𝒅𝒆 𝑰𝑻𝑰𝑳 𝒂𝒏𝒅 𝑪𝑰𝑺𝑺𝑷 𝒄𝒆𝒓𝒕𝒊𝒇𝒊𝒄𝒂𝒕𝒊𝒐𝒏𝒔, 𝒘𝒉𝒊𝒄𝒉 𝒖𝒏𝒅𝒆𝒓𝒔𝒄𝒐𝒓𝒆 𝒉𝒊𝒔 𝒆𝒙𝒑𝒆𝒓𝒕𝒊𝒔𝒆 𝒂𝒏𝒅 𝒅𝒆𝒅𝒊𝒄𝒂𝒕𝒊𝒐𝒏 𝒕𝒐 𝒕𝒉𝒆 𝒇𝒊𝒆𝒍𝒅. 𝑯𝒆 𝒆𝒂𝒓𝒏𝒆𝒅 𝒕𝒉𝒆 𝑪𝑰𝑺𝑺𝑷 𝒄𝒆𝒓𝒕𝒊𝒇𝒊𝒄𝒂𝒕𝒊𝒐𝒏 𝒇𝒓𝒐𝒎 (𝑰𝑺𝑪)2 𝒊𝒏 𝑫𝒆𝒄𝒆𝒎𝒃𝒆𝒓 2022 𝒂𝒏𝒅 𝒇𝒓𝒐𝒎 𝑺𝒊𝒎𝒑𝒍𝒊𝒍𝒆𝒂𝒓𝒏 𝒊𝒏 𝑶𝒄𝒕𝒐𝒃𝒆𝒓 2016. 𝑲𝒖𝒎𝒂𝒓𝒆𝒔𝒂𝒏 𝒉𝒂𝒔 𝒓𝒆𝒄𝒆𝒊𝒗𝒆𝒅 𝒏𝒖𝒎𝒆𝒓𝒐𝒖𝒔 𝒑𝒓𝒆𝒔𝒕𝒊𝒈𝒊𝒐𝒖𝒔 𝒂𝒘𝒂𝒓𝒅𝒔, 𝒊𝒏𝒄𝒍𝒖𝒅𝒊𝒏𝒈 𝒕𝒉𝒆 𝑪𝑰𝑶𝑽𝑰𝑫19 𝑰𝑪𝑶𝑵, 𝑫𝒂𝒕𝒂 𝑪𝒆𝒏𝒕𝒆𝒓 & 𝑰𝑻 𝑰𝒏𝒇𝒓𝒂𝒔𝒕𝒓𝒖𝒄𝒕𝒖𝒓𝒆 𝑰𝑪𝑶𝑵, 𝒂𝒏𝒅 𝑭𝒖𝒕𝒖𝒓𝒊𝒔𝒕𝒊𝒄 𝑪𝑰𝑶 100, 𝒓𝒆𝒄𝒐𝒈𝒏𝒊𝒛𝒊𝒏𝒈 𝒉𝒊𝒔 𝒐𝒖𝒕𝒔𝒕𝒂𝒏𝒅𝒊𝒏𝒈 𝒄𝒐𝒏𝒕𝒓𝒊𝒃𝒖𝒕𝒊𝒐𝒏𝒔 𝒕𝒐 𝑰𝑻 𝒂𝒏𝒅 𝒄𝒚𝒃𝒆𝒓𝒔𝒆𝒄𝒖𝒓𝒊𝒕𝒚.",
            //                 "img": "https://github.com/user-attachments/assets/bcd279d0-d93d-448d-a4c1-d8baa5f0ff70",
            //                 "src": "https://media.licdn.com/dms/document/media/D4E1FAQG3TcV8BAwMSw/feedshare-document-pdf-analyzed/0/1718429539422?e=1723680000&v=beta&t=eHKo0y2ynCK7S2KYQs2n8E_OV1Z8zleNaFdo0824_90"
            //             }, {
            //                 "title": "𝐂𝐡𝐚𝐢𝐭𝐬𝐢 𝐀𝐡𝐮𝐣𝐚 : Making Sustainability Mainstream : The Journey of Chaitsi Ahuja",
            //                 "desc": "Excited to share the inspiring journey of Chaitsi Ahuja, founder of Brown Living, India's first plastic-free and chemical-free online marketplace. With a mission to make sustainable living accessible, Chaitsi has supported over 2,000 artisans and saved 260,000 kilograms of plastic from landfills and oceans. Her blend of corporate expertise and passion for sustainability is driving real change. Let's embrace eco-friendly choices and work towards a sustainable future. ",
            //                 "img": "https://github.com/user-attachments/assets/8868592f-1518-4892-83bc-303c2fcfeb85",
            //                 "src": "https://media.licdn.com/dms/document/media/D4D1FAQGHZ7_F81-2Kw/feedshare-document-pdf-analyzed/0/1718181710942?e=1723680000&v=beta&t=olzfg2I5gJUrbOWP4-DmcGvjj8hTgbAspURMgZd5pPw"
            //             }
            //         ],
            //         "events": [
            //             "https://media.licdn.com/dms/image/D4D22AQE2uDTjkzfRMQ/feedshare-shrink_800/0/1721202033936?e=1724889600&v=beta&t=xrGKjzMQHsp46IKoYvKabGgExYFsL4tRdWkeNuGZpBA",
            //             "https://media.licdn.com/dms/image/D4D22AQF55JcXGc-coA/feedshare-shrink_2048_1536/0/1720246370958?e=1724889600&v=beta&t=DWtvfE-_W1DEqP8Ebc-2Uv7dJ45PxLxj6muT2QeTT-E",
            //             "https://media.licdn.com/dms/image/D4D22AQFsHeiRlUwpMw/feedshare-shrink_800/0/1719189897454?e=1724889600&v=beta&t=qwyXnndeV9-qCvc7RXGcBKcqyD_qvzqpCd53okHmrys",
            //             "https://media.licdn.com/dms/image/D4D22AQHaoEuuqCuDqg/feedshare-shrink_1280/0/1717827554274?e=1724889600&v=beta&t=NkubquHH0IzXm0adHxQi32z3bkeiDC2tVDtj_Xu_f-U",
            //             "https://media.licdn.com/dms/image/D4D22AQEfJGNr-AKG1Q/feedshare-shrink_2048_1536/0/1719299890279?e=1724889600&v=beta&t=58pg_N8wV20z-_iR6SvUgKuwNp4gkadlqSIH03SJm-Y",
            //             "https://media.licdn.com/dms/image/D5622AQFhmM4hFUZJkw/feedshare-shrink_2048_1536/0/1720505001470?e=1724889600&v=beta&t=u-u5DSAloI-Fg-rZnk3VVfroqnKZDy5Cs1b0ID_phEo",
            //             "https://media.licdn.com/dms/image/D4D22AQFXlbn_u977bw/feedshare-shrink_800/0/1721025453416?e=1724889600&v=beta&t=UAr4IUZhxdDrZtyLNot9a8COxkPC1dym0YAG33TxB9I",
            //             "https://media.licdn.com/dms/image/D4D22AQHkosQZ746dqg/feedshare-shrink_800/0/1719818421225?e=1724889600&v=beta&t=YCNDFldO_iYR-Iu2KqbXHH6rHRDh6dtNluzqshWqn3E",
            //             "https://media.licdn.com/dms/image/D4D22AQGyLQLPSGAy2A/feedshare-shrink_800/0/1718609918472?e=1724889600&v=beta&t=MJYj2m5FJXe2s2F-hhUfu-MC2WBXtWazSQ8FvtRxKh8",
            //             "https://media.licdn.com/dms/image/D4E22AQEOMYK6DBmJ6Q/feedshare-shrink_1280/0/1721287411645?e=1724889600&v=beta&t=ZVuswC_wz72qoRE82sdkrT--ElOpIXcPauv4UbmajXQ",
            //             "https://media.licdn.com/dms/image/D4D22AQE4Gkp4-1HMlg/feedshare-shrink_800/0/1719043233808?e=1724889600&v=beta&t=NW60z9uanKqepxO4W1S-wMVIUEyaUzTOgiJcBH09iAc",
            //             "https://media.licdn.com/dms/image/D4D22AQFvbuHho5N_qw/feedshare-shrink_800/0/1719893861423?e=1724889600&v=beta&t=-pOmeQRDCPwg8n-ndPfnThYuRMr26ElXhFbLwTB2_vg",
            //             "https://media.licdn.com/dms/image/D4D22AQHF8I9zJ5nFog/feedshare-shrink_800/0/1717222474917?e=1724889600&v=beta&t=JBd192hejDuXI6gQlzpT-skUm2CfbwFViy2k6pd516E",
            //             "https://media.licdn.com/dms/image/D5622AQHp7-4qeX8t5Q/feedshare-shrink_2048_1536/0/1716438333924?e=1724889600&v=beta&t=9cTaZSy0GjuaGTedzRCHe6TuwJ849hcz1209onvym0o",
            //             "https://media.licdn.com/dms/image/D4D22AQGeQ6yejO-4lw/feedshare-shrink_800/0/1716277467709?e=1724889600&v=beta&t=mT3V3h1SFfGNA0jGd7Zi5yljPkAEzCTnwoQiF4zsDks",
            //             "https://media.licdn.com/dms/image/D4D22AQFgo35TGaSDKA/feedshare-shrink_800/0/1716208238234?e=1724889600&v=beta&t=vOeZSrsurv9ZyOXHZluRnaBDCuFhYujNwjTwQUR6q5E",
            //             "https://media.licdn.com/dms/image/D4D22AQFS-mZsXNqarw/feedshare-shrink_800/0/1716016435312?e=1724889600&v=beta&t=B8Xlj6oHluk3CUFUCiz-jw4NxGzi3BC5fpP8PfwXIwk",
            //             "https://media.licdn.com/dms/image/D4D22AQH6cv4rgEK7gg/feedshare-shrink_1280/0/1715932458534?e=1724889600&v=beta&t=_QiMMWHLCptlg9bf8AueepbhBg2Ex6bMWGPNeq1Jhu8",
            //             "https://media.licdn.com/dms/image/D4D22AQFfwX0sysoP3w/feedshare-shrink_800/0/1714542053866?e=1724889600&v=beta&t=jxaWmJHve-D_15TKFL7NTTC9q-1GjjQdiyc68NaEj_Y",
            //             "https://media.licdn.com/dms/image/D4D22AQFkj9YiyY7yRA/feedshare-shrink_2048_1536/0/1713782358691?e=1724889600&v=beta&t=8ba1ObCAIo0Wkt0oLT7D-3DRwioiSquzIJH0pGYoFyE",
            //             "https://media.licdn.com/dms/image/D4D22AQGfTCyDd6CQcg/feedshare-shrink_1280/0/1710566167675?e=1724889600&v=beta&t=x99DOXfMKD89DLxp5LFADL7DBvfrKKB_rVYutdcevAM",
            //             "https://media.licdn.com/dms/image/D5622AQFZSGHac5AXqA/feedshare-shrink_800/0/1705494562755?e=1724889600&v=beta&t=Gwios0Bi6fAldRQlQGJi44qvL4yDhzJExF3yfWB6OT0"
            //         ],
            //         "articles": [
            //             {
            //                 "title": "World Bank Perspective: Private Sector Instrumental in Driving Tanzania’s Sustainable Development",
            //                 "desc": "The recent release of the Tanzania Economic Update, a biannual report published by the World Bank, provided insights into some of the economic developments the country has undergone over the last few years. With a GDP growth above the Sub Saharan average, quantified at 4.6% in 2022, Tanzania’s economy has clearly shown resilience and recorded a modest post-pandemic recovery. A number of key matters are a priority in the short- and medium-term to maintain the country’s economic status. These include strengthening capacity to further build resilience, supporting inclusive growth through the Private Sector, and enhancing the investment climate to boost both domestic and foreign investment.In a discussion of the country’s investment climate and development outlook, members of the CEO Roundtable of Tanzania (CEOrt) and The World Bank Country Director Mr. Nathan Belete outlined recommendations for boosting business performance and maintaining national growth. This thought leadership session was one of the CEOrt’s monthly engagements for members which facilitate dialogue on various issues critical to Tanzania’s sustainable development. The discussion involved a panel discussion that included Mr. Belete, Ms Ilse Boshoff - Regional Director at KNAUF TANZANIA, Mr. Jose D. Moran - Tanzania Breweries Limited (TBL PLC) Managing Director, Mr. Theobald Sabi, FCCA - NBC Tanzania Managing Director and Mr. David Tarimo -  Country Senior Partner at PwC Tanzania and CEOrt Board Chairman. While the World Bank works predominantly with governments, Mr. Belete voiced his organisation’s belief in the business community, stating that developing countries, which have seen significant growth have moved forward with strong support from the Private Sector.",
            //                 "img": "https://media.licdn.com/dms/image/D4D12AQEBD00QmrPIKQ/article-cover_image-shrink_720_1280/0/1679903709403?e=1727913600&v=beta&t=3AxS2z1mJVdO8z1bHtt60vmTXy3NIUZhgW9Jpxkrvwg"
            //             },
            //             {
            //                 "title": "Chief Information Security Officer (CISO) - Responsibilities",
            //                 "desc": "The Chief Information Security Officer (CISO) is a senior executive responsible for establishing and maintaining the enterprise's information security program. The CISO's primary role is to protect the organization's sensitive information, data, and systems from internal and external threats.<br/><br/>This job description provides a general overview of the responsibilities and qualifications required for the role of a Chief Information Security Officer (CISO). Specific organizations may have unique requirements and may tailor the job description accordingly.",
            //                 "img": "https://media.licdn.com/dms/image/D4D12AQHZVOshVicoyw/article-cover_image-shrink_720_1280/0/1683263894732?e=1727913600&v=beta&t=Jor_5FDG5FBOYIg36rIIZuzESPWMJ2kLsEZ-NsmXgNU"
            //             },
            //             {
            //                 "title": "Join Our Leadership Group: Insights and Advice for Driven Executives",
            //                 "desc": "Becoming a leader takes drive, passion, and innovation, but the grind doesn’t stop once you reach the C-suite. Join our leadership group and gain access to thoughts, ideas, and advice from other executives.",
            //                 "img": "https://media.licdn.com/dms/image/D4D22AQEYMXdLb050zA/feedshare-shrink_800/0/1709621040104?e=1725494400&v=beta&t=v1NyB21voXa1gE1oCBYMcuLQ69csFZ3GpdO4_rY6VDM"
            //             },
            //             {
            //                 "title": "Subhakar Rudra",
            //                 "desc": "🏆 We are thrilled to celebrate Subhakar Rudra from WPIL Limited as a winner of this year’s esteemed CIO100 Award: The Disruptive 100! 🌟 Your relentless dedication to reshaping the tech and business landscape is inspiring. Congratulations on this momentous win! 🏅",
            //                 "img": "https://media.licdn.com/dms/image/D5622AQGUy6WRRLsoTA/feedshare-shrink_800/0/1695960796132?e=1725494400&v=beta&t=54xrZ6PqWnitnAozMRSRPSWUQu06fCCf1S8jnMLId_A"
            //             },
            //             {
            //                 "title": "CEO Solutions",
            //                 "desc": "The Vision/Traction Organizer is a great tool to help your company narrow your vision.This tool helps to map your goals on paper, simplify the planning process, and provide clarity for your vision.Download the PDF to get started: https://lnkd.in/eG5MQjyN",
            //                 "img": "https://media.licdn.com/dms/image/D5610AQEvpdGSB-8erA/image-shrink_800/0/1696006811607?e=1723118400&v=beta&t=wuZQghiyyWw9n2nnw1CKVpXBn525xnZToHTNyIYsecM"
            //             }
            //         ]
            //     }
            // );

            // // // Save sample data to the database
            // return sampleData.save();
        })
        .catch(err => console.error(err))
}

module.exports = Connection;