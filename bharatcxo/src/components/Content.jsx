// // import React from 'react'

// // const Content = () => {
// //   // Get the modal
// //   var modal = document.getElementById("myModal");

// //   // Get the image and insert it inside the modal - use its "alt" text as a caption
// //   var img = document.getElementById("myImg");
// //   var modalImg = document.getElementById("img01");
// //   var captionText = document.getElementById("caption");
// //   img?.addEventListener('click', () => {
// //     modal.style.display = "block";
// //     modalImg.src = this.src;
// //     captionText.innerHTML = this.alt;
// //   })
// //   // Get the <span> element that closes the modal
// //   var span = document.getElementsByClassName("close")[0];

// //   // When the user clicks on <span> (x), close the modal
// //   span?.addEventListener(()=>{
// //     modal.style.display = "none";
// //   })
// //   return (
// //     <>
// //       <div id='content-Container'>
// //         <h1 style={{ textAlign: 'center' }}><b>{sessionStorage.getItem("title")}</b></h1><br />
// //         {/* <img src={sessionStorage.getItem("img")} width="50%" style={{display:'block', margin:'auto', borderRadius:'10px', boxShadow:' -50px -50px 50px rgba(255,255,255,0.2), 50px 50px 50px rgba(0,0,0,0.1)'}} alt="content Image" /><br /> */}
// //         <img id='content-img' src={sessionStorage.getItem("img")} width="30%" alt="content Image" /><br />
// //         <p style={{ fontSize: '1.2vw' }}>{sessionStorage.getItem("desc")}</p>
// //       </div>
// //       <div id="myModal" className="modal">
// //         <span className="close">&times;</span>
// //         <img className="modal-content" id="img01" />
// //         <div id="caption"></div>
// //       </div>

// //     </>
// //   )
// // }

// // export default Content


// import React, { useEffect } from 'react';

// const Content = () => {
//   useEffect(() => {
//     // Get the modal
//     const modal = document.getElementById("myModal");

//     // Get the image and insert it inside the modal - use its "alt" text as a caption
//     const img = document.getElementById("content-img");
//     const modalImg = document.getElementById("img01");
//     const captionText = document.getElementById("caption");

//     if (img) {
//       img.addEventListener('click', function () {
//         modal.style.display = "block";
//         modalImg.src = this.src;
//         captionText.innerHTML = this.alt;
//         document.body.style.overflowY = 'hidden';
//         // document.body.style.opacity = '100%';
//       });
//     }
// // if user can click outside of the popup images so that scroll are visible
//     document.addEventListener('click', function (event) {
//       if (!img.contains(event.target)) {
//         modal.style.display = "none";
//         document.body.style.overflowY = 'visible';
//       }
//     });
//     // Get the <span> element that closes the modal
//     const span = document.getElementsByClassName("close")[0];//close button
//     if (span) {
//       span.addEventListener('click', () => {
//         modal.style.display = "none";
//         document.body.style.overflowY = 'visible';
//       });
//     }

//     console.log("img =>>", sessionStorage.getItem("img"));
//     // Cleanup event listeners on component unmount
//     return () => {
//       if (img) {
//         img.removeEventListener('click', () => {
//           modal.style.display = "block";
//           modalImg.src = this.src;
//           captionText.innerHTML = this.alt;
//         });
//       }
//       if (span) {
//         span.removeEventListener('click', () => {
//           modal.style.display = "none";
//         });
//       }
//     };
//   }, []);

//   return (
//     <>
//       <div id='content-Container'>
//         <h1 style={{ textAlign: 'center' }}><b>{sessionStorage.getItem("title")}</b></h1><br />
//         <img id='content-img' src={sessionStorage.getItem("img")} width="30%" alt="content Image" /><br />
//         <p style={{ fontSize: '1.2vw' }}>{sessionStorage.getItem("desc")}</p>
//       </div>
//       <div id="myModal" className="modal">
//         <span className="close">&times;</span>
//         <img className="modal-content" id="img01" />
//         <div id="caption">{sessionStorage.getItem("title")}</div>
//       </div>
//     </>
//   );
// }

// export default Content;




// import React from 'react'

// const Content = () => {
//   // Get the modal
//   var modal = document.getElementById("myModal");

//   // Get the image and insert it inside the modal - use its "alt" text as a caption
//   var img = document.getElementById("myImg");
//   var modalImg = document.getElementById("img01");
//   var captionText = document.getElementById("caption");
//   img?.addEventListener('click', () => {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
//   })
//   // Get the <span> element that closes the modal
//   var span = document.getElementsByClassName("close")[0];

//   // When the user clicks on <span> (x), close the modal
//   span?.addEventListener(()=>{
//     modal.style.display = "none";
//   })
//   return (
//     <>
//       <div id='content-Container'>
//         <h1 style={{ textAlign: 'center' }}><b>{sessionStorage.getItem("title")}</b></h1><br />
//         {/* <img src={sessionStorage.getItem("img")} width="50%" style={{display:'block', margin:'auto', borderRadius:'10px', boxShadow:' -50px -50px 50px rgba(255,255,255,0.2), 50px 50px 50px rgba(0,0,0,0.1)'}} alt="content Image" /><br /> */}
//         <img id='content-img' src={sessionStorage.getItem("img")} width="30%" alt="content Image" /><br />
//         <p style={{ fontSize: '1.2vw' }}>{sessionStorage.getItem("desc")}</p>
//       </div>
//       <div id="myModal" className="modal">
//         <span className="close">&times;</span>
//         <img className="modal-content" id="img01" />
//         <div id="caption"></div>
//       </div>

//     </>
//   )
// }

// export default Content


import React from 'react';
// import { toggleFullScreen } from './methods/methods';


const Content = () => {

  // function showImg(src) {
  //   await window.open("https://media.licdn.com/dms/document/media/D4D1FAQEwAKjRsykO1Q/feedshare-document-pdf-analyzed/0/1722944832931?e=1723680000&v=beta&t=sdaDyzJISZpERfz-l0Ie2v_uUq_IA2UN6iZaMHkIk5U", '_blank');
  // }
  return (
    <>
      <div id='content-Container'>
        <h1 style={{ textAlign: 'center' }}><b>{sessionStorage.getItem("title")}</b></h1><br />
        {sessionStorage.getItem("src")
        ?
        <img id='content-img' src={sessionStorage.getItem("img")} onClick={()=>window.open(sessionStorage.getItem("src"), '_blank')} width="30%" alt="content Image" />
        :
        <img id='content-img' src={sessionStorage.getItem("img")} width="30%" alt="content Image" />
        }<br />
        <p style={{ fontSize: '1.2vw' }}>{sessionStorage.getItem("desc")}</p>
      </div>
    </>
  );
}

export default Content;

