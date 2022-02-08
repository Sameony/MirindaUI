const stars = document.querySelectorAll(".star");
const hearts = document.querySelectorAll(".heart");

stars.forEach((star) =>
    star.addEventListener("click", () => ratingChange(stars))
);
hearts.forEach((heart) =>
    heart.addEventListener("click", () => ratingChange(hearts))
);

function ratingChange(rate) {
    for (let i = 0; i < rate.length; i++) {
        rate[i].addEventListener("click", () => {
            let j = 5 * Math.floor(i / 5);
            for (; j <= i; j++) {
                if (rate[j].classList.contains("fas") === false) {
                    rate[j].classList.add("fas");
                }
            }
            for (let k = i + 1; k < rate.length && k % 5 != 0; k++) {
                if (rate[k].classList.contains("fas")) {
                    rate[k].classList.remove("fas");
                }
            }
        });
    }
}