import React, { useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import openContentPage from './methods/methods';
import UpdateArticles from './UpdateArticles';
import { useNavigate } from 'react-router-dom';

const Articales = ({ data }) => {
    const navigate = useNavigate();

    const [updateBtnArticle, setUpdateBtnArticle] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            // Check if the combination Ctrl+C+X+O is pressed
            if (event.ctrlKey && event.key === 'c') {
                document.addEventListener('keydown', (eventX) => {
                    if (eventX.key === 'x') {
                        document.addEventListener('keydown', (eventO) => {
                            if (eventO.key === 'o') {
                                setUpdateBtnArticle(true)
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

    const articleData = [
        {
            title: "World Bank Perspective: Private Sector Instrumental in Driving Tanzania’s Sustainable Development",
            img: "https://media.licdn.com/dms/image/D4D12AQEBD00QmrPIKQ/article-cover_image-shrink_720_1280/0/1679903709403?e=1727913600&v=beta&t=3AxS2z1mJVdO8z1bHtt60vmTXy3NIUZhgW9Jpxkrvwg",
            desc: "The recent release of the Tanzania Economic Update, a biannual report published by the World Bank, provided insights into some of the economic developments the country has undergone over the last few years. With a GDP growth above the Sub Saharan average, quantified at 4.6% in 2022, Tanzania’s economy has clearly shown resilience and recorded a modest post-pandemic recovery. A number of key matters are a priority in the short- and medium-term to maintain the country’s economic status. These include strengthening capacity to further build resilience, supporting inclusive growth through the Private Sector, and enhancing the investment climate to boost both domestic and foreign investment.In a discussion of the country’s investment climate and development outlook, members of the CEO Roundtable of Tanzania (CEOrt) and The World Bank Country Director Mr. Nathan Belete outlined recommendations for boosting business performance and maintaining national growth. This thought leadership session was one of the CEOrt’s monthly engagements for members which facilitate dialogue on various issues critical to Tanzania’s sustainable development. The discussion involved a panel discussion that included Mr. Belete, Ms Ilse Boshoff - Regional Director at KNAUF TANZANIA, Mr. Jose D. Moran - Tanzania Breweries Limited (TBL PLC) Managing Director, Mr. Theobald Sabi, FCCA - NBC Tanzania Managing Director and Mr. David Tarimo -  Country Senior Partner at PwC Tanzania and CEOrt Board Chairman. While the World Bank works predominantly with governments, Mr. Belete voiced his organisation’s belief in the business community, stating that developing countries, which have seen significant growth have moved forward with strong support from the Private Sector."
        },
        {
            title: "Chief Information Security Officer (CISO) - Responsibilities",
            img: "https://media.licdn.com/dms/image/D4D12AQHZVOshVicoyw/article-cover_image-shrink_720_1280/0/1683263894732?e=1727913600&v=beta&t=Jor_5FDG5FBOYIg36rIIZuzESPWMJ2kLsEZ-NsmXgNU",
            desc: "The Chief Information Security Officer (CISO) is a senior executive responsible for establishing and maintaining the enterprise's information security program. The CISO's primary role is to protect the organization's sensitive information, data, and systems from internal and external threats.<br/><br/>This job description provides a general overview of the responsibilities and qualifications required for the role of a Chief Information Security Officer (CISO). Specific organizations may have unique requirements and may tailor the job description accordingly."
        },
        {
            title: "Join Our Leadership Group: Insights and Advice for Driven Executives",
            img: "https://media.licdn.com/dms/image/D4D22AQEYMXdLb050zA/feedshare-shrink_800/0/1709621040104?e=1725494400&v=beta&t=v1NyB21voXa1gE1oCBYMcuLQ69csFZ3GpdO4_rY6VDM",
            desc: "Becoming a leader takes drive, passion, and innovation, but the grind doesn’t stop once you reach the C-suite. Join our leadership group and gain access to thoughts, ideas, and advice from other executives."
        },
        {
            title: "Subhakar Rudra",
            img: "https://media.licdn.com/dms/image/D5622AQGUy6WRRLsoTA/feedshare-shrink_800/0/1695960796132?e=1725494400&v=beta&t=54xrZ6PqWnitnAozMRSRPSWUQu06fCCf1S8jnMLId_A",
            desc: "🏆 We are thrilled to celebrate Subhakar Rudra from WPIL Limited as a winner of this year’s esteemed CIO100 Award: The Disruptive 100! 🌟 Your relentless dedication to reshaping the tech and business landscape is inspiring. Congratulations on this momentous win! 🏅"
        },
        {
            title: "CEO Solutions",
            img: "https://media.licdn.com/dms/image/D5610AQEvpdGSB-8erA/image-shrink_800/0/1696006811607?e=1723118400&v=beta&t=wuZQghiyyWw9n2nnw1CKVpXBn525xnZToHTNyIYsecM",
            desc: "The Vision/Traction Organizer is a great tool to help your company narrow your vision.This tool helps to map your goals on paper, simplify the planning process, and provide clarity for your vision.Download the PDF to get started: https://lnkd.in/eG5MQjyN"
        }
    ]

    var i = 0;
    return (
        <>
            <HelmetProvider>
                <Helmet><title>Bharat CXO || Post</title></Helmet>
                <div style={{ width: '70vw', margin: '130px auto -1000px' }}>
                    <h1 style={{ textAlign: 'center', marginBottom: '2vw' }} className="headingAnimation">Articles</h1>
                    {data?.map((article, index) => {
                        i += 1
                        return (
                            <div className="card mb-3 postCard block" key={index} style={{ maxWidth: '70vw' }} onClick={() => { openContentPage(article.title, article.img, article.desc); navigate('/content'); }}>
                                <div className="row g-0">
                                    {(i % 2 != 0) ? <div className="col-md-4" style={{ backgroundColor: '#aaa' }}>
                                        <img src={article.img} width="100%" className="img-fluid rounded-start ZoomImg" alt="articles" />
                                    </div> : ''}
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ fontSize: '2vw', fontWeight: '500' }}>{article.title}</h5>
                                            <p className="card-text" style={{ fontSize: '1vw' }}>{(article.desc.length >= 300) ? article.desc.substring(0, 300) + "..." : article.desc}</p>
                                        </div>
                                    </div>
                                    {(i % 2 == 0) ? <div className="col-md-4" style={{ backgroundColor: 'transparent' }}>
                                        <img src={article.img} className="img-fluid rounded-start" alt="articles" />
                                    </div> : ''}
                                </div>
                            </div>
                        )
                    })
                    }
                    {updateBtnArticle && <><br /><UpdateArticles /></>}
                </div>
            </HelmetProvider>
        </>
    )
}

export default Articales;

