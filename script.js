const button = document.getElementById("rsvpBtn");
const message = document.getElementById("message");
const effects = document.getElementById("effects");
const song = document.getElementById("birthdaySong");

window.addEventListener("load", () => {

  const card = document.querySelector(".invite-card");

  setTimeout(() => {
    card.classList.add("show-card");
  }, 3000);

});

button.addEventListener("click", () => {
  message.textContent = "მაიკოს ძალიან გაუხარდება, გელოდებით!  🎉💜";
  button.textContent = "დასტური მიღებულია ✨";

  song.currentTime = 0;
  song.play();

  flash();
  balloons();
  fireworks();
  confetti();

  setInterval(fireworks, 1200);
  setInterval(confetti, 1800);
});

function flash(){
  const f = document.createElement("div");
  f.className = "flash";
  effects.appendChild(f);
  setTimeout(()=>f.remove(),500);
}

function balloons(){
  const colors = ["#ff4fd8","#8c5cff","#00eaff","#ffe600","#ff7ab6"];

  for(let i=0;i<35;i++){
    const b = document.createElement("div");
    b.className = "balloon";
    b.style.left = Math.random()*100+"vw";
    b.style.background = colors[Math.floor(Math.random()*colors.length)];
    b.style.animationDelay = Math.random()*1.8+"s";
    effects.appendChild(b);
    setTimeout(()=>b.remove(),5000);
  }
}

function fireworks(){
  for(let i=0;i<10;i++){
    setTimeout(()=>{
      const fw = document.createElement("div");
      fw.className = "firework";
      fw.style.left = Math.random()*100+"vw";
      fw.style.top = Math.random()*70+"vh";
      effects.appendChild(fw);
      setTimeout(()=>fw.remove(),1100);
    },i*120);
  }
}

function confetti(){
  const colors = ["#ff4fd8","#00eaff","#ffe600","#ffffff","#8c5cff"];

  for(let i=0;i<80;i++){
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random()*100+"vw";
    c.style.background = colors[Math.floor(Math.random()*colors.length)];
    c.style.animationDelay = Math.random()*1.5+"s";
    effects.appendChild(c);
    setTimeout(()=>c.remove(),4000);
  }
}