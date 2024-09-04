export default function openContentPage(title, img, desc, src) {
    sessionStorage.setItem("title", title)
    sessionStorage.setItem("img", img)
    sessionStorage.setItem("desc", desc)
    // navigate('/content')/
    // document.location.href=document.location.origin+"/content";
}

