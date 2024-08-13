import React from 'react'
import pdflogo from "../Img/pdflogo.png"

const Test = () => {
    const filename = "Ensuring Secure Buisness Connectivity_SOC and Managed Security Servcies Presentation ESDS_ 2023.pdf"
    return (
        <div style={{margin: '130px 0 0', cursor:'pointer'}} onClick={()=>window.open('https://docs.google.com/presentation/d/e/2PACX-1vSeAVT7KjgqAt1l33UxtNRH0Q7a9mq2oVBOOg_OJlXtsEtnCAQiAwht--Fybk096Tobl6yk6xR4VrLs/embed?start=true&loop=true&delayms=3000', '_blank')}>
            <div id='fileContainer' style={{width:'265px', padding:'5px',display: 'flex', justifyContent: 'center', backgroundColor: '#dedede', border:'2px solid black', alignItems: 'center', borderRadius:'10px',gap:'10px' }}>
                <img src={pdflogo} width="22%" alt="file" style={{transform:'scale(1.15)'}} />
                <div id='content'>
                    <p id='filename' style={{ fontWeight: 900 }}>{(filename.length > 20) ? filename.substring(0, 20) + ",,,.pdf" : filename}</p>
                    <div style={{ display: 'flex', gap: '1vw', justifyContent: 'center', fontSize: '1vw', fontWeight: 900 }}>
                        <a href="https://docs.google.com/presentation/d/e/2PACX-1vSeAVT7KjgqAt1l33UxtNRH0Q7a9mq2oVBOOg_OJlXtsEtnCAQiAwht--Fybk096Tobl6yk6xR4VrLs/embed?start=true&loop=true&delayms=3000" download={true}>Download</a>
                        <a href="https://docs.google.com/presentation/d/e/2PACX-1vSeAVT7KjgqAt1l33UxtNRH0Q7a9mq2oVBOOg_OJlXtsEtnCAQiAwht--Fybk096Tobl6yk6xR4VrLs/embed?start=true&loop=true&delayms=3000">View</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Test