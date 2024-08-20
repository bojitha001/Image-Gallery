document.addEventListener("DOMContentLoaded", (e) => {
    const image = document.getElementsByClassName("image");
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");

    if (image[0]) {
        image[0].addEventListener("click", () => {
            modal.style.display = "block";
            modalBody.style.backgroundImage = "url('images/africa\ desert.jpg')";
            modalBody.innerHTML = `<h3>Africa</h3>
                <p>
                Human activity has more recently come to either grow or shrink these deserts. To put human contributions into perspective, the Sahara has been growing rapidly since the 1920s covering 10% more land than it used to according to a study by National Science Foundation (NSF)-funded scientists at the University of Maryland. The modern study of desertification that we are familiar with today, which considers climate change, emerged from studying the 1980s drought in the Sahel region the most vulnerable region on the continent.
                </p>`;
        });
    }

    if (image[1]) {
        image[1].addEventListener("click", () => {
            modal.style.display = "block";
            modalBody.style.backgroundImage =
                "url('images/china\ desert.webp')";
            modalBody.innerHTML = `<h3>China</h3>
                <p>
                First on our list of how countries are fighting desertification is China. Research shows that currently 27.4% of land in China has undergone desertification, affecting about 400 million people. How is China working to tackle desertification? The nation implemented the “Great Green Wall Of China” project in 1978 to hold back the expansion of the Gobi Desert and provide timber to the local population. A quarter of all landmass is desert in China, which until recently was rapidly expanding.
                </p>`;
        });
    }

    if (image[2]) {
        image[2].addEventListener("click", () => {
            modal.style.display = "block";
            modalBody.style.backgroundImage =
                "url('images/ethiopia.png')";
            modalBody.innerHTML = `<h3>Ethiopia</h3>
                    <p>
                    Due to a decrease in forest coverage and increase in land degradation, drought and desertification are expanding and widening across the globe. Due to recurrent droughts, agricultural developments are facing serious challenges mainly in developing countries due to the dependency on natural rainfall. According to experts in the sector, for sustainable agricultural development and to increase the productivity of the sector, it needs to manage desertification by developing adaptation and mitigation measures.
                    </p>`;
        });
    }

    if (image[3]) {
        image[3].addEventListener("click", () => {
            modal.style.display = "block";
            modalBody.style.backgroundImage =
                "url('images/jordan-land-degradation-climate.webp')";
            modalBody.innerHTML = `<h3>Jordan</h3>
                    <p>
                    Jordan is at risk of rapid desertification. It receives little rainfall, with 90% of the country receiving less than 200mm a year. Deforestation, soil erosion, inappropriate land use and cultivation practices, climate change and drought all contribute to increasing desertification. Continuing desertification could have a far-reaching environmental, social and economic impact.For example, the Badia area of Jordan is the main region for livestock production and many people in Badia depend on the rangeland to make a living.
                    </p>`;
        });
    }

    if (image[4]) {
        image[4].addEventListener("click", () => {
            modal.style.display = "block";
            modalBody.style.backgroundImage = "url('images/australia.jpg')";
            modalBody.innerHTML = `<h3>Australia</h3>
                    <p>
                    Desertification in some form is estimated to have occurred over about 42% of the 5 million km(2) of arid and semiarid lands in Australia. The most common form of desertification is loss of perennial grasses from grasslands, savannas, and open woodlands, often with a replacement by inedible shrubs. Desertification continues to be a problem, especially during droughts when grazing pressures reduce ground cover, laying bare landscapes to wind and water erosion.
                    </p>`;
        });
    }

    document
        .getElementsByClassName("close")[0]
        .addEventListener("click", (e) => {
            document.getElementById("modal").style.display = "none";
        });
});
