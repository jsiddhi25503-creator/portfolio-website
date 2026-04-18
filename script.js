/* TYPING ANIMATION */

const text = ["Web Developer", "Java Developer", "Full Stack Learner"];

let count = 0;
let index = 0;

(function type() {
    if (count === text.length) {
        count = 0;
    }

    let current = text[count];
    let letter = current.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === current.length) {
        setTimeout(() => {
            index = 0;
            count++;
            setTimeout(type, 400);
        }, 1200);
    } else {
        setTimeout(type, 120);
    }
})();