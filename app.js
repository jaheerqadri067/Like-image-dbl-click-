//INSTAGARAM LIKE FEATURE ACTIVITY
let image = document.querySelector(".like-photo");
let heart = document.querySelector("#like");

image.addEventListener("dblclick", () => {
    heart.style.opacity = 1
    heart.style.transform = "scale(3.4)";

    setTimeout(() => {
        heart.style.transform = "scale(3)";
    }, 300)

    setTimeout(() => {
        heart.style.transform = "scale(3.4)";
    }, 450)

    setTimeout(() => {
        heart.style.opacity = 0;
    }, 900);

    setTimeout(() => {
        heart.style.transform = "scale(0)";
    }, 1100);
});
