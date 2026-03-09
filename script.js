/* RAIN */

const rain = document.querySelector(".rain");

for (let i = 0; i < 200; i++) {
  const drop = document.createElement("div");
  drop.classList.add("drop");

  drop.style.left = Math.random() * 100 + "vw";
  drop.style.top = Math.random() * -100 + "px";

  drop.style.animationDuration = 2 + Math.random() * 2 + "s";
  drop.style.animationDelay = Math.random() * 5 + "s";

  rain.appendChild(drop);
}

/* CARD DATA */

const thoughts = [
  { title: "Card 1", text: "The rain feels like it understands." },

  { title: "Card 2", text: "Some nights carry too many memories." },

  { title: "Card 3", text: "Silence can be louder than noise." },

  { title: "Card 4", text: "A quiet mind is sometimes the loudest." },

  { title: "Card 5", text: "The night hides things the day cannot." },

  { title: "Card 6", text: "Raindrops fall like forgotten words." },

  { title: "Card 7", text: "Not every storm is outside." },

  { title: "Card 8", text: "Sometimes sadness feels peaceful." },

  { title: "Card 9", text: "The quiet moments hold the truth." },

  { title: "Card 10", text: "And eventually the rain stops." },
];

let currentIndex = 0;

const card = document.getElementById("card");
const title = document.getElementById("title");
const text = document.getElementById("text");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateCard() {
  title.textContent = thoughts[currentIndex].title;
  text.textContent = thoughts[currentIndex].text;

  prevBtn.style.display = currentIndex === 0 ? "none" : "inline-block";
  nextBtn.style.display =
    currentIndex === thoughts.length - 1 ? "none" : "inline-block";
}

function changeCard(direction) {
  card.classList.remove("fade-in");
  card.classList.add("fade-out");

  setTimeout(() => {
    currentIndex += direction;
    updateCard();

    card.classList.remove("fade-out");
    card.classList.add("fade-in");
  }, 1000);
}

nextBtn.addEventListener("click", () => changeCard(1));
prevBtn.addEventListener("click", () => changeCard(-1));

updateCard();
