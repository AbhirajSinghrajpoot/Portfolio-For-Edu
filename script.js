const buttons = document.querySelectorAll('li');
const items = document.querySelectorAll('.item');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        let f = btn.getAttribute('data-filter');
        items.forEach(i => {
            i.style.display = (f === 'all' || i.classList.contains(f)) ? 'block' : 'none';
        });
    });
});

function openLightbox(src) {
    document.getElementById('lightbox').style.display = 'flex';
    let v = document.getElementById('videoPlayer');
    v.src = src; v.play();
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    const player = document.getElementById("videoPlayer");

    lightbox.style.display = "none";
    player.pause();
    player.src = "";
}

