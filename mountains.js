document.addEventListener("DOMContentLoaded", (e) => {
    const image = document.getElementsByClassName("image");
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");

    if (image[0]) {
        image[0].addEventListener("click", () => {
            modal.style.display = "block";
            modalBody.style.backgroundImage = "url('images/Mount-Everest1.jpg')";
            modalBody.innerHTML = `<h3>Everest</h3>
                <p>
                Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. The China–Nepal border runs across its summit point. Its elevation of 8,848.86 m was most recently established in 2020 by the Chinese and Nepali authorities.
                </p>`;
        });
    }

    if (image[1]) {
        image[1].addEventListener("click", () => {
            modal.style.display = "block";
            modalBody.style.backgroundImage =
                "url('images/k2.jpg')";
            modalBody.innerHTML = `<h3>K2</h3>
                <p>
                The second highest mountain in the world is K2. The mountain took its name from the notation used by the Great Trigonometrical Survey of British India. At the time, there wasn’t an apparent local name for the mountain, and so it stuck. K2 is also nicknamed the ‘Savage Mountain’, which is cool in a slightly Point Break, over-the-top extreme kind of way.
                </p>`;
        });
    }

    if (image[2]) {
        image[2].addEventListener("click", () => {
            modal.style.display = "block";
            modalBody.style.backgroundImage =
                "url('images/kangchenjunga.webp')";
            modalBody.innerHTML = `<h3>Kangchenjung</h3>
                    <p>
                    Kangchenjunga, also spelled Kanchenjunga, Kanchanjanghā and Khangchendzonga, is the third-highest mountain in the world. Its summit lies at 8,586 m (28,169 ft) in a section of the Himalayas, the Kangchenjunga Himal, which is bounded in the west by the Tamur River, in the north by the Lhonak River and Jongsang La, and in the east by the Teesta River.
                    </p>`;
        });
    }

    if (image[3]) {
        image[3].addEventListener("click", () => {
            modal.style.display = "block";
            modalBody.style.backgroundImage =
                "url('images/makalu.jpg')";
            modalBody.innerHTML = `<h3>Makalu</h3>
                    <p>
                    Makalu is the fifth highest mountain in the world at 8,485 metres. It is located in the Mahalangur Himalayas 19 km southeast of Mount Everest, on the China–Nepal border. One of the eight-thousanders, Makalu is an isolated peak in the shape of a four-sided pyramid. Makalu has two notable subsidiary peaks.
                    </p>`;
        });
    }

    if (image[4]) {
        image[4].addEventListener("click", () => {
            modal.style.display = "block";
            modalBody.style.backgroundImage = "url('images/nanga\ parbat.jpg')";
            modalBody.innerHTML = `<h3>Nanga Parbat</h3>
                    <p>
                    The ninth highest mountain in the world is Nanga Parbat. Like many of the other mountains, the name comes from Sanskrit, with ‘nanga’ and ‘parvata’ meaning ‘naked mountain’. The Tibetan name for the mountain ‘Diamer’, meaning “huge mountain”. Nanga Parbat truly towers over the surrounding, low-lying valleys around it in every direction.
                    </p>`;
        });
    }

    document
        .getElementsByClassName("close")[0]
        .addEventListener("click", (e) => {
            document.getElementById("modal").style.display = "none";
        });
});
