var container = document.querySelector('.dogs');

function getImages(imgCount = 25) {
    let i = 0;
    while (i < imgCount) {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(e => {
                var img = document.createElement('img');
                img.src = `${e.message}`
                container.appendChild(img)
            })
        i++;
    }
}
getImages();
window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        getImages();
    }
})