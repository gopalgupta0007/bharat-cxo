export default function openContentPage(title, img, desc, src, navigate) {
    sessionStorage.setItem("title", title)
    sessionStorage.setItem("img", img)
    sessionStorage.setItem("desc", desc)
    sessionStorage.setItem("src", src)
    navigate('/content')
}

