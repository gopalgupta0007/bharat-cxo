import { useEffect, useRef } from "react";
import openContentPage from "./methods/methods";
import { useNavigate } from "react-router-dom";

function Carousel() {
    const navigate = useNavigate()
    const nextButtonRef = useRef(null);

    useEffect(() => {
        try {

            // Initialize the carousel
            const carouselElement = document.querySelector('#carouselExampleDark');
            const carousel = new window.bootstrap.Carousel(carouselElement, {
                interval: 1000, // Interval for automatic sliding
                ride: 'carousel'
            });

            // Function to click the next button
            const clickNextButton = () => {
                if (nextButtonRef.current) {
                    nextButtonRef.current.click();
                }
            };

            // Set an interval to automatically click the next button
            const intervalId = setInterval(clickNextButton, 3000); // Click every 1 second
            return () => {
                clearInterval(intervalId);
                carousel.dispose();
            };
            // Cleanup function to clear the interval and carousel when the component unmounts
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <>
            <div id="carouselExampleDark" className="carousel carousel-dark slide mb-3">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000" onClick={()=>openContentPage("TSMC shares fell 3.5% on Friday despite a bullish revenue outlook, due to persistent geopolitical concerns and overnight losses in the U.S. market.","https://cionews.co.in/wp-content/uploads/2024/07/Article-Main-Image-8-10.png","TSMC’s shares, which are listed on Taiwan and have an optimistic revenue outlook, closed the day on Friday 3.5% lower, weighed down by ongoing geopolitical worries and overnight losses on U.S. markets. The chipmaker had reported solid results. The world’s artificial intelligence boom has helped Taiwan Semiconductor Manufacturing Co. Ltd. (TSMC), a significant supplier to Apple (AAPL.O) and Nvidia (NVDA.O), as well as Asia’s most valuable listed company, weather the slowdown in pandemic-driven demand for electronics.The leading company in the chip sector reported a net profit for the second quarter on Thursday that was above market estimates. Compared to a prior estimate of an increase in the low to mid-20% range, it increased its revenue forecast for 2024 to growth of slightly beyond the mid-20% range in U.S. dollars. The tech-heavy Nasdaq saw its highest one-day decline since December 2022, while the chip industry saw its largest daily percentage decline since the panic of March 2020 connected to the pandemic. On Thursday, all three major U.S. stock indexes saw declines.The sharp declines in chip equities and the Nasdaq worry us. It’s not just a temporary issue, which we anticipate could level down over the course of the next two to three months,” stated Taipei-based vice president Allen Huang of Mega International Investment Services. “TSMC was dragged down by that trend and Trump’s comments, and its earnings did not exceed market expectations by much,” he stated. Before remarks made public this week by Republican presidential candidate Donald Trump in the United States accusing Taiwan of stealing American semiconductor technology and that the island nation should foot the bill for defense, TSMC’s stock had been rising steadily.The Taiwan dollar dropped to its lowest point since May 2016, while the country’s primary index (.TWII) finished 2.3% down on Friday. The world’s largest contract chipmaker, TSMC, saw its American Depository Receipts climb by as much as 4% earlier in the day following its earnings call. On Thursday, the stock managed to close at a minor gain of 0.4%. Although TSMC has stated time and time again that it will maintain the majority of its manufacturing, as well as research and development, in Taiwan, the company is also spending $65 billion to construct three plants in Arizona.TSMC, known as the “sacred mountain protecting the country” due to its crucial position in Taiwan’s export-driven economy, has minimal competition, despite attempts to challenge its supremacy by Intel (INTC.O.) and Samsung (005930.KS).", navigate)}>
                        <img src="https://cionews.co.in/wp-content/uploads/2024/07/Article-Main-Image-8-10.png" width="500px" height="550px" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3><b style={{ color: 'black', textShadow: '0 2px 1px white, 0 -2px 1px red' }}>TSMC shares fell 3.5% on Friday despite a bullish revenue outlook, due to persistent geopolitical concerns and overnight losses in the U.S. market.</b></h3>
                            <p style={{ color: 'black', textShadow: '0 2px 1px white, 0 -2px 1px white', letterSpacing: '0.4px' }}><b>TSMC shares fell 3.5% on Friday due to geopolitical concerns and U.S. market losses, despite strong Q2 profits and a raised 2024 revenue forecast. The Nasdaq and chip sector experienced significant declines on Thursday.</b></p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://cionews.co.in/wp-content/uploads/2024/07/Article-Main-Image-6-10.png" width="500px" height="550px" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3><b style={{ color: 'black', textShadow: '0 2px 1px white, 0 -2px 1px red' }}>The company behind ChatGPT, OpenAI, is in discussions with chip makers, such as Broadcom, to create a new AI processor.</b></h3>
                            <p style={{ color: 'white', textShadow: '0 2px 1px black, 0 -2px 1px black', letterSpacing: '0.4px' }}><b>OpenAI is exploring AI processor development with chipmakers like Broadcom to address GPU shortages. Microsoft is also hiring former Google AI chip experts to develop AI server chips.</b></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://cionews.co.in/wp-content/uploads/2024/07/Article-Main-Image-25.png" width="500px" height="550px" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3><b style={{ color: 'black', textShadow: '0 2px 1px white, 0 -2px 1px red' }}>This budget should align with the DPDPA by supporting the creation and implementation of robust cybersecurity programs to strengthen data privacy laws.</b></h3>
                            <p style={{ color: 'white', textShadow: '0 2px 1px black, 0 -2px 1px black', letterSpacing: '0.4px' }}><b>Finance Minister Nirmala Sitharaman will present the Union Budget 2024 on July 23. As the first budget of Modi 3.0 and her seventh, it will address diverse stakeholders and align with the Viksit Bharat 2047 Vision, focusing on economic initiatives and fiscal prudence.</b></p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" ref={nextButtonRef} data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Carousel;
