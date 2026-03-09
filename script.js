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
  {
    title: "The First Time I Felt Like I Was Enough",
    text: `For half of my life, I always felt like I wasn’t enough.
No matter what I did, how much I gave, or how much I loved, people somehow made me feel like it still wasn’t enough. I was often the second choice, or there was always someone better they could choose instead of me.

But when you told me you loved me, something changed. For the first time, I felt complete. I felt safe, and I finally started to believe that maybe… just maybe, I was enough. 💫`,
  },

  {
    title: "The Moment I Knew I Wanted You in My Life",
    text: `At the beginning, I honestly didn’t expect anything from you. I never asked you to choose me. Yes, sometimes I said things jokingly, but I never seriously wanted you two to separate.

But when you started falling in love with me… things changed. The day you kissed me, the day you told me you loved me, something inside me became very clear. I felt like you were someone worth fighting for until the end.

From that moment, I truly wanted you in my life. More than you could probably ever imagine. ❤️`,
  },

  {
    title: "I Chose You With My Whole Heart",
    text: `I started to feel like you were mine, and I also felt like it was my responsibility to keep you happy. I wanted to take care of you. I really tried. Whatever I could do to make you happy, I did. And honestly, I would do it all again, even more if I could.

Whenever we fought, I tried to fix things. I tried to solve everything. I even changed many things in my life. I had planned to go to India after my visa, I told myself I would never fall in love, and I didn’t want to hurt my parents. But I changed all of that because I convinced myself that you were worth everything.

Every single thing.

I told myself I needed to stay loyal, be honest, and always treat you with respect. Because that’s what you deserved. ❤️`,
  },

  {
    title: "The Future I Started Building With You",
    text: `From your side, you did everything too. You made me feel secure. You were honest with me and never hid anything. That made me feel really special.

Slowly, I started imagining a future with you. Not just random thoughts, but little by little, day by day, like building something brick by brick in my heart. A future with you… just you and me.

For the first time in a long time, I felt truly safe with someone. I felt like I could share anything with you without feeling shy or holding anything back.

Even the thought of losing you used to drive me crazy. Whenever you mentioned another guy, I would panic. Not because I didn’t trust you, but because I was so scared of losing you. 💔`,
  },

  {
    title: "When Everything Started Falling Apart",
    text: `Even then, I tried to make sure everything between us stayed good. I kept trying to hold things together. But then he came into the picture.

Rey, honestly, no matter what you said, the emotional concern you had for him made me feel weak and insecure. Every day I tried to explain how I felt, and almost every day you told me you wanted to go with him.

That time was hell for me. I couldn’t sleep, I couldn’t eat. Slowly, you started avoiding me. You stopped texting like before and began ignoring my messages. Every little thing made my fear grow bigger.

I didn’t know when the moment would come where I’d hear that I had lost you. I felt scared and broken, and that same old thought came back again — that maybe I wasn’t enough.

Yes, I overthink sometimes, but I never treated you this way when he wasn’t involved. 💔`,
  },

  {
    title: "Feeling Helpless and Afraid to Lose You",
    text: `Even in all that chaos, I tried to calm myself down. I still remember when you asked me to give you some space for a while. But at the same time, almost every day you kept saying that you wanted to leave.

No matter how hard I tried, I just couldn’t stop myself. I just wanted you. I really tried not to text you, but you were so emotional during that time that I kept feeling scared. I kept thinking, maybe this very moment she told him she will go back… maybe she felt so guilty that she convinced herself to return.

Those thoughts scared me so much. I even started crying. I felt completely helpless. Completely lost.`,
  },

  {
    title: "I Just Needed One Reassuring Word",
    text: `I started to feel so distant from you, ra. Honestly, when you said you hated even seeing my name on your phone and things like that, it broke me. Again and again I felt hurt, but I still couldn’t stop myself. I just wanted you.

All I needed to hear was one thing: “Don’t worry, I’m not going anywhere. I just need some time to be normal with you.” That’s all I asked for.

I’m still not sure why you kept telling me that you had told him you would go back. You showed me some messages and said they meant you told him yes, but I didn’t understand Malayalam, ra. I really didn’t.

When you showed me that message and said it meant you agreed to go back, for a moment I truly believed it. In that moment, it felt like my whole world crashed.

I couldn’t sleep. Even when you were at work, I kept checking your last seen again and again. I just kept wishing I could undo everything somehow. 💔`,
  },

  {
    title: "The Moment I Lost Control",
    text: `The next day we had a big fight. After that fight, I felt this uncontrollable anger inside me. But honestly, it wasn’t just anger — it was helplessness, heartbreak, and so many emotions that I couldn’t handle.

In that moment, I snapped. I did something really horrible to you. Rey, I wasn’t thinking straight at all. I was completely out of my mind and didn’t stop to think about what could happen next.

I never intended for your parents to know about it. It was a stupid mistake, probably one of the biggest mistakes of my life. 💔`,
  },

  { title: "Call me", text: "please" },
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
