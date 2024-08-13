import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Award = ({data}) => {
    const awardImg=[
        "https://media.licdn.com/dms/image/D4D22AQE2uDTjkzfRMQ/feedshare-shrink_800/0/1721202033936?e=1724889600&v=beta&t=xrGKjzMQHsp46IKoYvKabGgExYFsL4tRdWkeNuGZpBA",
        "https://media.licdn.com/dms/image/D4D22AQF55JcXGc-coA/feedshare-shrink_2048_1536/0/1720246370958?e=1724889600&v=beta&t=DWtvfE-_W1DEqP8Ebc-2Uv7dJ45PxLxj6muT2QeTT-E",
        "https://media.licdn.com/dms/image/D4D22AQFsHeiRlUwpMw/feedshare-shrink_800/0/1719189897454?e=1724889600&v=beta&t=qwyXnndeV9-qCvc7RXGcBKcqyD_qvzqpCd53okHmrys",
        "https://media.licdn.com/dms/image/D4D22AQHaoEuuqCuDqg/feedshare-shrink_1280/0/1717827554274?e=1724889600&v=beta&t=NkubquHH0IzXm0adHxQi32z3bkeiDC2tVDtj_Xu_f-U",
        "https://media.licdn.com/dms/image/D4D22AQEfJGNr-AKG1Q/feedshare-shrink_2048_1536/0/1719299890279?e=1724889600&v=beta&t=58pg_N8wV20z-_iR6SvUgKuwNp4gkadlqSIH03SJm-Y",
        "https://media.licdn.com/dms/image/D5622AQFhmM4hFUZJkw/feedshare-shrink_2048_1536/0/1720505001470?e=1724889600&v=beta&t=u-u5DSAloI-Fg-rZnk3VVfroqnKZDy5Cs1b0ID_phEo",
        "https://media.licdn.com/dms/image/D4D22AQFXlbn_u977bw/feedshare-shrink_800/0/1721025453416?e=1724889600&v=beta&t=UAr4IUZhxdDrZtyLNot9a8COxkPC1dym0YAG33TxB9I",
        "https://media.licdn.com/dms/image/D4D22AQHkosQZ746dqg/feedshare-shrink_800/0/1719818421225?e=1724889600&v=beta&t=YCNDFldO_iYR-Iu2KqbXHH6rHRDh6dtNluzqshWqn3E",
        "https://media.licdn.com/dms/image/D4D22AQGyLQLPSGAy2A/feedshare-shrink_800/0/1718609918472?e=1724889600&v=beta&t=MJYj2m5FJXe2s2F-hhUfu-MC2WBXtWazSQ8FvtRxKh8",
        "https://media.licdn.com/dms/image/D4E22AQEOMYK6DBmJ6Q/feedshare-shrink_1280/0/1721287411645?e=1724889600&v=beta&t=ZVuswC_wz72qoRE82sdkrT--ElOpIXcPauv4UbmajXQ",
        "https://media.licdn.com/dms/image/D4D22AQE4Gkp4-1HMlg/feedshare-shrink_800/0/1719043233808?e=1724889600&v=beta&t=NW60z9uanKqepxO4W1S-wMVIUEyaUzTOgiJcBH09iAc",
        "https://media.licdn.com/dms/image/D4D22AQFvbuHho5N_qw/feedshare-shrink_800/0/1719893861423?e=1724889600&v=beta&t=-pOmeQRDCPwg8n-ndPfnThYuRMr26ElXhFbLwTB2_vg",
        "https://media.licdn.com/dms/image/D4D22AQHF8I9zJ5nFog/feedshare-shrink_800/0/1717222474917?e=1724889600&v=beta&t=JBd192hejDuXI6gQlzpT-skUm2CfbwFViy2k6pd516E",
        "https://media.licdn.com/dms/image/D5622AQHp7-4qeX8t5Q/feedshare-shrink_2048_1536/0/1716438333924?e=1724889600&v=beta&t=9cTaZSy0GjuaGTedzRCHe6TuwJ849hcz1209onvym0o",
        "https://media.licdn.com/dms/image/D4D22AQGeQ6yejO-4lw/feedshare-shrink_800/0/1716277467709?e=1724889600&v=beta&t=mT3V3h1SFfGNA0jGd7Zi5yljPkAEzCTnwoQiF4zsDks",
        "https://media.licdn.com/dms/image/D4D22AQFgo35TGaSDKA/feedshare-shrink_800/0/1716208238234?e=1724889600&v=beta&t=vOeZSrsurv9ZyOXHZluRnaBDCuFhYujNwjTwQUR6q5E",
        "https://media.licdn.com/dms/image/D4D22AQFS-mZsXNqarw/feedshare-shrink_800/0/1716016435312?e=1724889600&v=beta&t=B8Xlj6oHluk3CUFUCiz-jw4NxGzi3BC5fpP8PfwXIwk",
        "https://media.licdn.com/dms/image/D4D22AQH6cv4rgEK7gg/feedshare-shrink_1280/0/1715932458534?e=1724889600&v=beta&t=_QiMMWHLCptlg9bf8AueepbhBg2Ex6bMWGPNeq1Jhu8",
        "https://media.licdn.com/dms/image/D4D22AQFfwX0sysoP3w/feedshare-shrink_800/0/1714542053866?e=1724889600&v=beta&t=jxaWmJHve-D_15TKFL7NTTC9q-1GjjQdiyc68NaEj_Y",
        "https://media.licdn.com/dms/image/D4D22AQFkj9YiyY7yRA/feedshare-shrink_2048_1536/0/1713782358691?e=1724889600&v=beta&t=8ba1ObCAIo0Wkt0oLT7D-3DRwioiSquzIJH0pGYoFyE",
        "https://media.licdn.com/dms/image/D4D22AQGfTCyDd6CQcg/feedshare-shrink_1280/0/1710566167675?e=1724889600&v=beta&t=x99DOXfMKD89DLxp5LFADL7DBvfrKKB_rVYutdcevAM",
        "https://media.licdn.com/dms/image/D5622AQFZSGHac5AXqA/feedshare-shrink_800/0/1705494562755?e=1724889600&v=beta&t=Gwios0Bi6fAldRQlQGJi44qvL4yDhzJExF3yfWB6OT0"
    ]

    return (
        <HelmetProvider>
            <Helmet><title>Bharat CXO || Awards</title></Helmet>
            <div className="Container">
                <h1 style={{textAlign:'center'}} className="headingAnimation">Award</h1>
                <div className="photo-gallery">
                    <div className="column">
                        {console.log(data)}
                        <div className="photo crd"><img src={awardImg[0]} alt="img0"/></div>
                        <div className="photo crd"><img src={awardImg[1]} alt="img1"/></div>
                        <div className="photo crd"><img src={awardImg[2]} alt="img2"/></div>
                        <div className="photo crd"><img src={awardImg[3]} alt="img3"/></div>
                        <div className="photo crd"><img src={awardImg[4]} alt="img4"/></div>
                        <div className="photo crd"><img src={awardImg[5]} alt="img5"/></div>
                        <div className="photo crd"><img src={awardImg[6]} alt="img6"/></div>
                    </div>
                    <div className="column">
                        <div className="photo crd"><img src={awardImg[7]} alt="img7"/></div>
                        <div className="photo crd"><img src={awardImg[8]} alt="img8"/></div>
                        <div className="photo crd"><img src={awardImg[9]} alt="img9"/></div>
                        <div className="photo crd"><img src={awardImg[10]} alt="img10"/></div>
                        <div className="photo crd"><img src={awardImg[11]} alt="img11"/></div>
                        <div className="photo crd"><img src={awardImg[12]} alt="img12"/></div>
                        <div className="photo crd"><img src={awardImg[13]} alt="img13"/></div>
                    </div>
                    <div className="column">
                        <div className="photo crd"><img src={awardImg[14]} alt="img14"/></div>
                        <div className="photo crd"><img src={awardImg[15]} alt="img15"/></div>
                        <div className="photo crd"><img src={awardImg[16]} alt="img16"/></div>
                        <div className="photo crd"><img src={awardImg[17]} alt="img17"/></div>
                        <div className="photo crd"><img src={awardImg[18]} alt="img18"/></div>
                        <div className="photo crd"><img src={awardImg[19]} alt="img19"/></div>
                        <div className="photo crd"><img src={awardImg[20]} alt="img20"/></div>
                        <div className="photo crd"><img src={awardImg[21]} alt="img21"/></div>
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