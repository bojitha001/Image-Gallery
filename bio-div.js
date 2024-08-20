document.addEventListener("DOMContentLoaded", (e) => {
    const image = document.getElementsByClassName("image");
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");

    if (image[0]) {
        image[0].addEventListener("click", () => {
            modal.style.display = "block";
            modalBody.style.backgroundImage = "url('images/species\ dive.webp')";
            modalBody.innerHTML = `<h3>Species Diversity</h3>
                <p>
                Species diversity is not only based on the number of different species present in a community, but also the relative abundance of each species and the role they have in the community. For example, a community may be composed of many different species, but may only have one predator that pursues a certain prey species. When the predator's population levels are healthy, its prey's population numbers remain at a level the community can handle.
                </p>`;
        });
    }

    if (image[1]) {
        image[1].addEventListener("click", () => {
            modal.style.display = "block";
            modalBody.style.backgroundImage =
                "url('images/echo1.jpg')";
            modalBody.innerHTML = `<h3>Ecosystems Diversity</h3>
                <p>
                Ecosystem diversity refers to variability in habitats within a geographic area. Unlike genetic diversity and species diversity, ecosystem diversity considers both biological drivers and non-biological drivers of variability, like temperature and sunlight.8 Areas high in ecosystem diversity create a geographic mosaic of communities that help protect an entire area from drastic changes.
                </p>`;
        });
    }

    if (image[2]) {
        image[2].addEventListener("click", () => {
            modal.style.display = "block";
            modalBody.style.backgroundImage =
                "url('images/tropical\ echo.webp')";
            modalBody.innerHTML = `<h3>Tropical Ecosystems</h3>
                    <p>
                    The tropical rainforest ecosystem is characterized by high temperatures and humidity throughout the year, with up to 400 inchesof rainfall annually. The high temperatures and humidity are caused by their location in the tropics, where the sun’s rays are most intense. In fact, tropical rainforests are one of the most diverse ecosystems in the world, with roughly half of the world’s species found in tropical rainforests.
                    </p>`;
        });
    }

    if (image[3]) {
        image[3].addEventListener("click", () => {
            modal.style.display = "block";
            modalBody.style.backgroundImage =
                "url('images/Taiga\ echo.webp')";
            modalBody.innerHTML = `<h3>Taiga Ecosystems</h3>
                    <p>
                    The third major forest ecosystem, the taiga ecosystem includes forests in the subarctic region of the Northern Hemisphere. Found just south of the Arctic Circle, the taiga experiences low temperatures all year long with long winters and very short summers. The boreal forest is therefore made mostly of coniferous or evergreen trees that have adapted to these cold temperatures.
                    </p>`;
        });
    }

    if (image[4]) {
        image[4].addEventListener("click", () => {
            modal.style.display = "block";
            modalBody.style.backgroundImage = "url('images/shurblamd-echo.webp')";
            modalBody.innerHTML = `<h3>Shrubland Ecosystems</h3>
                    <p>
                    The shrubland ecosystem is characterized by their large amount of shrubs and similar plants. Shrubland ecosystems can be found all over the world, with unique biodiversity found in each part of the world. Each shrubland ecosystem is home to a wide diversity of plants, which in turn can support several animal, bird, and insect species. The milder temperatures make shrublands hospitable for insects and birds throughout the whole year.
                    </p>`;
        });
    }

    document
        .getElementsByClassName("close")[0]
        .addEventListener("click", (e) => {
            document.getElementById("modal").style.display = "none";
        });
});
