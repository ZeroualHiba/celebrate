console.log("Le script est bien chargé !");

document.addEventListener("DOMContentLoaded", function () {
    const starCount = 6;  
    let clickedStars = 0;
    let musicPlayed = false;
    let song = new Audio("img/song.mp3");

    document.addEventListener("DOMContentLoaded", function () {

        const stars = document.querySelectorAll(".star");
        const letter = document.getElementById("letter");
    
        stars.forEach(star => {
            star.addEventListener("click", function () {
                letter.classList.add("hidden");
            });
        });

    });

    

   const playButton = document.getElementById("playButton");
    let isPlaying = false;
    
    playButton.addEventListener("click", function() {
        if (isPlaying) {
            song.pause();
            playButton.textContent = "🎵 Reprendre la musique";
        } else {
            song.play();
            playButton.textContent = "⏸ Pause";
        }
        isPlaying = !isPlaying;
    });
    

    const memories = [
        { text: "Notre premier rendez-vous ❤️", img: "img/F date.jpg" },
        { text: "L'amour fraîche , 3years ago' 🥰", img: "img/2Years ago.jpg" },
        { text: "Nos marches et sunsets interminables ", img: "img/our best memories.jpg" },
        { text: "How I always see you my goofy baby ", img: "img/little cutie.jpg" },
        { text: "Chaque instant avec toi est une étoile dans mon cœur ✨", img: "img/My fav.jpg" }
    ];
    
    function showMemory(event) {
        if (!musicPlayed) {
            song.play().catch(error => console.log("Lecture automatique bloquée :", error));
            musicPlayed = true;
        }

        let index = event.target.dataset.index;
        let messageBox = document.getElementById("messageBox");
        let messageText = document.getElementById("messageText");
    
        if (memories[index]) {
            messageText.innerHTML = `<p>${memories[index].text}</p><img src="${memories[index].img}" alt="Souvenir" class="memory-image">`;
        } else {
            console.error("Index mémoire invalide :", index);
            return;
        }
    
        messageBox.classList.remove("hidden");
        event.target.style.opacity = "0.5";
        event.target.removeEventListener("click", showMemory);
    
        clickedStars++;
    
        if (clickedStars === memories.length) {
            setTimeout(() => {
                document.getElementById("finalMessage").classList.remove("hidden");
            }, 1000);
        }
    }

    function closeMessage() {
        document.getElementById("messageBox").classList.add("hidden");
    }

    window.closeMessage = closeMessage;

    window.showSecret = function () {
        document.getElementById("secretBox").classList.remove("hidden");
    };

    window.checkPassword = function () {
        let password = document.getElementById("password").value;
        if (password.toLowerCase() === "monetoile") { 
            document.getElementById("loveMessage").classList.remove("hidden");
        } else {
            alert("Essaye encore, mon amour !");
        }
    };

  // Vérifier si l'élément existe avant de l'utiliser
const starsContainer = document.getElementById("stars");
if (starsContainer) {
    starsContainer.innerHTML = '<p>✨ Clique sur une étoile !</p>';

    // Ajout des étoiles
    for (let i = 0; i < memories.length; i++) {
        let star = document.createElement("span");
        star.innerHTML = "⭐";
        star.classList.add("star");
        star.dataset.index = i;
        star.addEventListener("click", showMemory);
        starsContainer.appendChild(star);
    }
   

    console.log("Étoiles ajoutées :", starsContainer.innerHTML);
} else {
    console.error("L'élément #stars n'existe pas !");
}


if (clickedStars === memories.length) {
    setTimeout(() => {
        let finalMessage = document.getElementById("finalMessage");
        finalMessage.classList.remove("hidden");
        finalMessage.style.animation = "fadeIn 1s ease-in-out, pulse 2s infinite alternate";
    }, 1000);
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; 
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500);

const lovePhrases = [
    "Je t’aime plus que les mots ne peuvent l’exprimer ❤️",
    "Chaque seconde avec toi est un cadeau ✨",
    "Tu es ma plus belle étoile 🌟",
    "Mon amour pour toi grandit chaque jour 💖",
    "Pour toujours et à jamais, toi et moi ❤️"
];

function showLoveMessage() {
    const message = document.createElement("div");
    message.classList.add("love-message");
    message.innerText = lovePhrases[Math.floor(Math.random() * lovePhrases.length)];

    // Position aléatoire dans la page
    message.style.left = Math.random() * 90 + "vw";  
    message.style.top = Math.random() * 90 + "vh";

    document.body.appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 4000); // Supprime le message après 4 secondes
}

// Affiche un message toutes les 3 secondes
setInterval(showLoveMessage, 3000);




});
