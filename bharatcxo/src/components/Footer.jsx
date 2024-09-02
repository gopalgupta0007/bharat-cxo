import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' style={{ position: 'relative', bottom: -1000 }}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom block'>
        <div className='me-5 d-none d-lg-block'>
          <span className='textWhiteEnter'>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/share/GrV2nQqGH81LMk4p/?mibextid=qi2Omg' target='_blank' className='me-4 text-reset'>
            <MDBIcon id="facebook-icon" fab icon="facebook-f" />
          </a>
          <a href='https://www.google.com/search?q=google+bharat+cxo' target='_blank' className='me-4 text-reset'>
            <MDBIcon fab id="google-icon" icon="google" />
          </a>
          <a href='https://www.x.com/BharatCXO' target='_blank' className='me-4 text-reset'>
            <i class="fa-brands fa-square-x-twitter" id="x-icon" icon="x"></i>
          </a>
          <a href='https://www.instagram.com/bharatcxo/?igsh=NzM4bDQwcTM1aXVk' target='_blank' className='me-4 text-reset'>
            <MDBIcon fab id="instagram-icon" icon="instagram" />
          </a>
          <a href='https://www.linkedin.com/company/bharatcxo' target='_blank' className='me-4 text-reset'>
            <MDBIcon fab id="linkedin-icon" icon="linkedin" />
          </a>
          <a href='https://www.youtube.com/@BharatCXO' target='_blank' className='me-4 text-reset'>
            <i class="fa-brands fa-youtube" id="youtube-icon" icon="youtube"></i>
          </a>
          <a href='https://api.whatsapp.com/send?phone=918928005505' target='_blank' className='me-4 text-reset'>
            <i class="fa-brands fa-whatsapp" id="whatsapp-icon" icon="whatsapp"></i>
          </a>
        </div>
      </section>

      <section className='block'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='textWhiteEnter text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Bharat CXO
              </h6>
              <p className='textWhiteEnter'>
                We honor the CEO, CIO, CTO, CHRO, CFO,COO, CXO's who shape any countries economy, Create Job opportunities & lot more
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' >Useful links</h6>
              <p>
                <a href='http://localhost:3000/about' style={{ textDecoration: 'none' }} className='text-reset textWhiteEnter'>
                  About
                </a>
              </p>
              <p>
                <a href='http://localhost:3000/post' style={{ textDecoration: 'none' }} className='text-reset textWhiteEnter'>
                  Post
                </a>
              </p>
              <p>
                <a href='#!' style={{ textDecoration: 'none' }} className='text-reset textWhiteEnter'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4 '>
              <h6 className='text-uppercase fw-bold mb-4 textWhiteEnter'>Contact</h6>
              <p className='textWhiteEnter' style={{ padding: '2px' }}>
                <MDBIcon icon="home" className="me-2" />
                <a href="https://maps.app.goo.gl/UJefQZ4c2wNHtrh36" className='textWhiteEnter' style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">Mumbai, Maharashtra</a>
              </p>
              <p className='textWhiteEnter' style={{ padding: '2px' }}>
                <MDBIcon icon="envelope" className="me-3 " />
                <a href="https://mail.google.com/mail/u/0/?fs=1&to=bharatcxo@gmail.com&su=Subject&body=Enter%20Message&tf=cm" className='textWhiteEnter' style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">bharatcxo@gmail.com</a>
              </p>
              <p className='textWhiteEnter' style={{ padding: '2px' }}>
                <MDBIcon icon="phone" className="me-3" />
                <a href="tel:8928005505" className='textWhiteEnter' style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">+91 8928005505</a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 textWhiteEnter' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright&nbsp;:&nbsp;<a className='text-reset fw-bold' href='https://bharatcxo.com/'>bharatcxo.com</a>
      </div>
    </MDBFooter>
  );
}

// "https://api.whatsapp.com/send?phone=918928005505"