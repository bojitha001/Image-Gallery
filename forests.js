document.addEventListener("DOMContentLoaded", (e) => {
    const image = document.getElementsByClassName("image");
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");

    if (image[0]) {
        image[0].addEventListener("click", () => {
            modal.style.display = "block";
            modalBody.style.backgroundImage = "url('images/Amazon.jpg')";
            modalBody.innerHTML = `<h3>Amazon</h3>
                <p>
                The Amazon rainforest, covering much of northwestern Brazil and extending into Colombia, Peru and other South American countries, is the world’s largest tropical rainforest, famed for its biodiversity. It’s crisscrossed by thousands of rivers, including the powerful Amazon. River towns, with 19th-century architecture from rubber-boom days, include Brazil’s Manaus and Belém and Peru’s Iquitos and Puerto Maldonado.
                </p>`;
        });
    }

    if (image[1]) {
        image[1].addEventListener("click", () => {
            modal.style.display = "block";
            modalBody.style.backgroundImage =
                "url('images/congo_jungle_ctt.jpg')";
            modalBody.innerHTML = `<h3>Congo</h3>
                <p>
                The Congolian rainforest is the world's second-largest tropical forest, after the Amazon rainforest. It covers over 500,000,000 acres (2,000,000 km2) across six countries and contains a quarter of the world's remaining tropical forest. The Congolian forests cover southeastern Cameroon, Gabon, Republic of the Congo, the northern and central Democratic Republic of the Congo, and portions of southern and central Africa.
                </p>`;
        });
    }

    if (image[2]) {
        image[2].addEventListener("click", () => {
            modal.style.display = "block";
            modalBody.style.backgroundImage =
                "url('images/511418-daintree-cape-tribulation.avif')";
            modalBody.innerHTML = `<h3>Daintree</h3>
                    <p>
                    The Daintree Rainforest, also known as the Daintree, is a region on the northeastern coast of Queensland, Australia, about 105 km (65 mi), by road, north of the city of Cairns. Whilst the terms "Daintree Rainforest" and "the Daintree" are not officially defined, it is generally accepted and understood that they refer to the area from the Daintree River north to Cooktown, and from the coastline west to the Great Dividing Range.
                    </p>`;
        });
    }

    if (image[3]) {
        image[3].addEventListener("click", () => {
            modal.style.display = "block";
            modalBody.style.backgroundImage =
                "url('images/roots-mangrove-trees-Tha-Pom-Khlong-Song.webp')";
            modalBody.innerHTML = `<h3>Mangroves</h3>
                    <p>
                    Mangrove forests are productive wetlands that occur in coastal intertidal zones. Mangrove forests grow mainly at tropical and subtropical latitudes because mangroves cannot withstand freezing temperatures. There are about 80 different species of mangroves, all of which grow in areas with low-oxygen soil, where slow-moving waters allow fine sediments to accumulate.
                    </p>`;
        });
    }

    if (image[4]) {
        image[4].addEventListener("click", () => {
            modal.style.display = "block";
            modalBody.style.backgroundImage = "url('images/Sinharaja.jpg')";
            modalBody.innerHTML = `<h3>Sinharaja</h3>
                    <p>
                    Located in south-west Sri Lanka, Sinharaja is the country's last viable area of primary tropical rainforest. More than 60% of the trees are endemic and many of them are considered rare. There is much endemic wildlife, especially birds, but the reserve is also home to over 50% of Sri Lanka's endemic species of mammals and butterflies, as well as many kinds of insects, reptiles and rare amphibians.
                    </p>`;
        });
    }

    document
        .getElementsByClassName("close")[0]
        .addEventListener("click", (e) => {
            document.getElementById("modal").style.display = "none";
        });
});
