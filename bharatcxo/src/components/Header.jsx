// import { NavLink } from 'react-router-dom';
import logo from '../Img/bharat cxo logo Main.jpg'
import { useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate();
  
  return (
    <>
      <div style={{ position: 'fixed', top: 0, zIndex: 10, backgroundColor: 'white' }}>
        <marquee behavior="right" bgcolor="red" direction="right" style={{ borderBottom: '1px solid black' }}><b>Bharat CXO</b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<b>Bharat CXO</b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; <b>Bharat CXO</b></marquee>
        <div id="header-container" style={{ width: '100%', height: '1in', borderBottom: '1px solid red', boxShadow: '0 2px 10px 10px #aaa', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', marginTop: '-10px' }}>
          <div id="logo" style={{ marginLeft: '3vw', display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/')} >
            <img src={logo} style={{ width: '65px', height: '65px' }} alt="bharat cxo" />
            <span style={{ fontSize: "5vw" }}>भारत<b>CXO</b></span>
          </div>
          <div id="bar" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'right', gap: '5vw', marginRight: '3vw' }}>
            <div style={{ cursor: 'pointer' }} className='crd' onClick={() => navigate('/')}><h1 style={{ fontSize: '2vw', marginTop: '20px' }}>Home</h1></div>
            <div style={{ cursor: 'pointer' }} className='crd' onClick={() => navigate('/post')}><h1 style={{ fontSize: '2vw', marginTop: '20px' }}>Posts</h1></div>
            <div style={{ cursor: 'pointer' }} className='crd' onClick={() => navigate('/events')}><h1 style={{ fontSize: '2vw', marginTop: '20px' }}>Events</h1></div>
            <div style={{ cursor: 'pointer' }} className='crd' onClick={() => navigate('/articles')}><h1 style={{ fontSize: '2vw', marginTop: '20px' }}>Articles</h1></div>
            <div style={{ cursor: 'pointer' }} className='crd' onClick={() => navigate('/about')}><h1 style={{ fontSize: '2vw', marginTop: '20px' }}>About</h1></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;


