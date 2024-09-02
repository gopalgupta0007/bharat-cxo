import React from 'react'
import openContentPage from './methods/methods';

function Card({ cioData }) {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-5" style={{ margin: '0 0 -990px' }}>
                {cioData?.map((cio, index) => {
                    return (
                        <div className="col" key={index} style={{ borderColor: 'white', outline: 'none', border: 'none' }} onClick={() => { openContentPage(cio.title, cio.img, cio.desc) }} >
                            <div className="card h-100" style={{ display: 'flex' }}>
                                <img src={cio.img} className="card-img-top ZoomImg" alt="cio Image" />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ textAlign: 'justify' }}>{cio.title}</h5>
                                    <p className="card-text" style={{ textAlign: 'justify' }}>{(cio.desc.length >= 300) ? cio.desc.substring(0, 300) + "..." : cio.desc}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default Card;