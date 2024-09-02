import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const Content = () => {
  return (
    <>
      <div id='content-Container'>
        <h1 style={{ textAlign: 'center' }}><b>{sessionStorage.getItem("title")}</b></h1><br />
        <Zoom>
          <img
            id='zoomImg'
            className='ZoomImg'
            style={{position:'relative', left:document.body.offsetWidth > 768 ? '20%' : '5%'}}
            src={sessionStorage.getItem('img')}
            alt="Zoomable"
            width={document.body.offsetWidth > 768 ? '60%' : '90%'}
          />
        </Zoom><br />
        <p style={{ fontSize: document.body.offsetWidth > 768 ? '1.2vw' : '4vw' }}>{sessionStorage.getItem("desc")}</p>
      </div>
    </>
  );
}

export default Content;
