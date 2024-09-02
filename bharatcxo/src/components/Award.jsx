import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const Award = ({ data }) => {

    const awardImg = [
        "https://github.com/user-attachments/assets/a6406584-8a30-45e2-b950-2cc9ff8db0ed",
        "https://github.com/user-attachments/assets/cb0041d3-7659-4f68-a6f0-00cc8ef4b17f",
        "https://github.com/user-attachments/assets/f2dc0e25-38b1-413c-b197-6d465952dfbf",
        "https://github.com/user-attachments/assets/115fa579-a09f-48de-851a-b1b38c43244b",
        "https://github.com/user-attachments/assets/e9a5b674-6171-4d97-92e3-0fdfec873fc7",
        "https://github.com/user-attachments/assets/85b41e9c-8114-47b8-82c8-f9eaf8e25325",
        "https://github.com/user-attachments/assets/76b44caf-ad10-4039-9830-4c1297780ce6",
        "https://github.com/user-attachments/assets/68ddda29-2cfb-4950-a824-84393a792c66",
        "https://github.com/user-attachments/assets/a5347520-d60e-4c51-9e07-daae72bf167e",
        "https://github.com/user-attachments/assets/f29081fd-4e47-4fcb-96f2-978f53f1623f",
        "https://github.com/user-attachments/assets/2e0061c5-182d-476a-ac63-23bb3dcbdf25",
        "https://github.com/user-attachments/assets/b35e0b82-3af3-4db3-a4bb-51ac3c4a766a",
        "https://github.com/user-attachments/assets/603ea600-26d3-41a0-a531-b4bcd27840d3",
        "https://github.com/user-attachments/assets/26941f1b-82a9-4499-bc7a-d362edf282f8",
        "https://github.com/user-attachments/assets/f98f893c-ca8f-4c8c-b39e-08029132e883",
        "https://github.com/user-attachments/assets/acb8f261-fbff-4676-af23-60176a4634ec",
        "https://github.com/user-attachments/assets/76440ccd-8153-4a7b-9d6f-83cc044e8270",
        "https://github.com/user-attachments/assets/9e46f638-959e-400d-9e9f-51ee5500f6dd",
        "https://github.com/user-attachments/assets/aed603f8-6523-4d61-81b0-3235f4dd0255",
        "https://github.com/user-attachments/assets/e7207a38-4ae8-4dcb-b22c-c49035a0700a",
        "https://github.com/user-attachments/assets/12123420-d0b7-4776-a040-764d26999ed1",
        "https://github.com/user-attachments/assets/5e349c36-1024-4f8a-a3b5-17e260d56ef1"
    ]

    return (
        <HelmetProvider>
            <Helmet><title>Bharat CXO || Awards</title></Helmet>
            <div className="Container">
                <h1 style={{ textAlign: 'center' }} className="headingAnimation">Award</h1>
                <div className="photo-gallery">
                    <div className="column">
                        <div className="photo crd ZoomImg">
                            <Zoom>
                                <img
                                    // id='zoomImg'
                                    className='ZoomImg'
                                    src={awardImg[0]}
                                    alt="Zoomable"
                                    width={document.body.offsetWidth > 768 ? '60%' : '90%'}
                                />
                            </Zoom>
                        </div>
                        <div className="photo crd ZoomImg">
                            <Zoom>
                                <img
                                    // id='zoomImg'
                                    className='ZoomImg'
                                    src={awardImg[1]}
                                    alt="Zoomable"
                                    width={document.body.offsetWidth > 768 ? '60%' : '90%'}
                                />
                            </Zoom>
                        </div>
                        <div className="photo crd ZoomImg">
                            <Zoom>
                                <img
                                    // id='zoomImg'
                                    className='ZoomImg'
                                    src={awardImg[2]}
                                    alt="Zoomable"
                                    width={document.body.offsetWidth > 768 ? '60%' : '90%'}
                                />
                            </Zoom>
                        </div>
                        <div className="photo crd ZoomImg">
                            <Zoom>
                                <img
                                    // id='zoomImg'
                                    className='ZoomImg'
                                    src={awardImg[3]}
                                    alt="Zoomable"
                                    width={document.body.offsetWidth > 768 ? '60%' : '90%'}
                                />
                            </Zoom>
                        </div>
                        <div className="photo crd ZoomImg">
                            <Zoom>
                                <img
                                    // id='zoomImg'
                                    className='ZoomImg'
                                    src={awardImg[4]}
                                    alt="Zoomable"
                                    width={document.body.offsetWidth > 768 ? '60%' : '90%'}
                                />
                            </Zoom>
                        </div>
                        <div className="photo crd ZoomImg">
                            <Zoom>
                                <img
                                    // id='zoomImg'
                                    className='ZoomImg'
                                    src={awardImg[5]}
                                    alt="Zoomable"
                                    width={document.body.offsetWidth > 768 ? '60%' : '90%'}
                                />
                            </Zoom>
                        </div>
                        <div className="photo crd ZoomImg">
                            <Zoom>
                                <img
                                    // id='zoomImg'
                                    className='ZoomImg'
                                    src={awardImg[6]}
                                    alt="Zoomable"
                                    width={document.body.offsetWidth > 768 ? '60%' : '90%'}
                                />
                            </Zoom>
                        </div>
                        <div className="photo crd ZoomImg">
                            <Zoom>
                                <img
                                    // id='zoomImg'
                                    className='ZoomImg'
                                    src={awardImg[7]}
                                    alt="Zoomable"
                                    width={document.body.offsetWidth > 768 ? '60%' : '90%'}
                                />
                            </Zoom>
                        </div>
                    </div>
                    <div className="column">
                        <div className="photo crd ZoomImg">
                            <Zoom>
                                <img
                                    // id='zoomImg'
                                    className='ZoomImg'
                                    src={awardImg[8]}
                                    alt="Zoomable"
                                    width={document.body.offsetWidth > 768 ? '60%' : '90%'}
                                />
                            </Zoom>
                        </div>
                        <div className="photo crd ZoomImg">
                            <Zoom>
                                <img
                                    // id='zoomImg'
                                    className='ZoomImg'
                                    src={awardImg[9]}
                                    alt="Zoomable"
                                    width={document.body.offsetWidth > 768 ? '60%' : '90%'}
                                />
                            </Zoom>
                        </div>
                        <div className="photo crd ZoomImg">
                            <Zoom>
                                <img
                                    // id='zoomImg'
                                    className='ZoomImg'
                                    src={awardImg[10]}
                                    alt="Zoomable"
                                    width={document.body.offsetWidth > 768 ? '60%' : '90%'}
                                />
                            </Zoom>
                        </div>
                        <div className="photo crd ZoomImg">
                            <Zoom>
                                <img
                                    // id='zoomImg'
                                    className='ZoomImg'
                                    src={awardImg[11]}
                                    alt="Zoomable"
                                    width={document.body.offsetWidth > 768 ? '60%' : '90%'}
                                />
                            </Zoom>
                        </div>
                        <div className="photo crd ZoomImg">
                            <Zoom>
                                <img
                                    // id='zoomImg'
                                    className='ZoomImg'
                                    src={awardImg[12]}
                                    alt="Zoomable"
                                    width={document.body.offsetWidth > 768 ? '60%' : '90%'}
                                />
                            </Zoom>
                        </div>
                        <div className="photo crd ZoomImg">
                            <Zoom>
                                <img
                                    // id='zoomImg'
                                    className='ZoomImg'
                                    src={awardImg[13]}
                                    alt="Zoomable"
                                    width={document.body.offsetWidth > 768 ? '60%' : '90%'}
                                />
                            </Zoom>
                        </div>
                        <div className="photo crd ZoomImg">
                            <Zoom>
                                <img
                                    // id='zoomImg'
                                    className='ZoomImg'
                                    src={awardImg[14]}
                                    alt="Zoomable"
                                    width={document.body.offsetWidth > 768 ? '60%' : '90%'}
                                />
                            </Zoom>
                        </div>
                    </div>
                    <div className="column">
                        <div className="photo crd ZoomImg">
                            <Zoom>
                                <img
                                    // id='zoomImg'
                                    className='ZoomImg'
                                    src={awardImg[15]}
                                    alt="Zoomable"
                                    width={document.body.offsetWidth > 768 ? '60%' : '90%'}
                                />
                            </Zoom>
                        </div>
                        <div className="photo crd ZoomImg">
                            <Zoom>
                                <img
                                    // id='zoomImg'
                                    className='ZoomImg'
                                    src={awardImg[16]}
                                    alt="Zoomable"
                                    width={document.body.offsetWidth > 768 ? '60%' : '90%'}
                                />
                            </Zoom>
                        </div>
                        <div className="photo crd ZoomImg">
                            <Zoom>
                                <img
                                    // id='zoomImg'
                                    className='ZoomImg'
                                    src={awardImg[17]}
                                    alt="Zoomable"
                                    width={document.body.offsetWidth > 768 ? '60%' : '90%'}
                                />
                            </Zoom>
                        </div>
                        <div className="photo crd ZoomImg">
                            <Zoom>
                                <img
                                    // id='zoomImg'
                                    className='ZoomImg'
                                    src={awardImg[18]}
                                    alt="Zoomable"
                                    width={document.body.offsetWidth > 768 ? '60%' : '90%'}
                                />
                            </Zoom>
                        </div>
                        <div className="photo crd ZoomImg">
                            <Zoom>
                                <img
                                    // id='zoomImg'
                                    className='ZoomImg'
                                    src={awardImg[19]}
                                    alt="Zoomable"
                                    width={document.body.offsetWidth > 768 ? '60%' : '90%'}
                                />
                            </Zoom>
                        </div>
                        <div className="photo crd ZoomImg">
                            <Zoom>
                                <img
                                    // id='zoomImg'
                                    className='ZoomImg'
                                    src={awardImg[20]}
                                    alt="Zoomable"
                                    width={document.body.offsetWidth > 768 ? '60%' : '90%'}
                                />
                            </Zoom>
                        </div>
                        <div className="photo crd ZoomImg">
                            <Zoom>
                                <img
                                    // id='zoomImg'
                                    className='ZoomImg'
                                    src={awardImg[21]}
                                    alt="Zoomable"
                                    width={document.body.offsetWidth > 768 ? '60%' : '90%'}
                                />
                            </Zoom>
                        </div>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    )
}

export default Award
// https://www.linkedin.com/company/bharatcxo/posts/?feedView=images
    // <img src="https://media.licdn.com/dms/image/D4D22AQFXlbn_u977bw/feedshare-shrink_800/0/1721025453416?e=1724889600&v=beta&t=UAr4IUZhxdDrZtyLNot9a8COxkPC1dym0YAG33TxB9I" className='borderRed' style={{position:'relative', top:'-165px', left:'33.5%', transform:'scale(1.17)'}} width="30%" alt="award6" />
// </div> */}
