// Referencias DOM
const introText = document.getElementById("intro-text");
const quizContainer = document.getElementById("quiz-container");
const questionText = document.getElementById("question-text");
const currentQIndex = document.getElementById("current-q-index");
const feedbackMessage = document.getElementById("feedback-message");
const finalProposal = document.getElementById("final-proposal");
const finalQuestion = document.getElementById("final-question");
const finalEmoji = document.getElementById("final-emoji");
const finalButtons = document.getElementById("final-buttons");
const responseMessage = document.getElementById("response-message");
const questionImage = document.querySelector("#question-image img");

let currentQuestion = 0;

// Preguntas y sus imágenes
const questions = [
    { text: "¿Sientes que podemos construir algo bonito aunque nos estemos conociendo?", img: "images/1.jpeg" },
    { text: "¿Te imaginaste que alguien tan increíble como yo aparecería tan rápido en tu vida?", img: "images/2.jpeg" },
    { text: "¿Te gusta cómo te trato… o crees que debería esforzarme aún más?", img: "images/3.jpeg" },
    { text: "¿Admitelo  este detalle lo vas a recordar por siempre 😜!!", img: "images/4.jpeg" },
    { text: "¿Te gustaría que siga sorprendiéndote o ya hice suficiente?", img: "images/5.jpeg" },
    { text: "¿Estas difrutando de tu cumple? ¿Obio conmigo aqui como no ?  ", img: "images/6.jpeg" },
    { text: "¿estaba pensando hacer algo original pero me pase cierto?", img: "images/7.jpeg" },
    { text: "¿Un tap en claro podria resolver alguno de tus problemas te animas?", img: "images/8.jpeg" },
    { text: "¿Trata respondiendo no  es la unica vez que sera buena idea 😉", img: "images/9.jpeg" },
    { text: "¿Estás lista/o para la aventura más increíble de tu vida... conmigo?", img: "images/10.jpeg" },
];

// Respuestas dinámicas
const yesResponses = [
    "¡Así me gusta! Sabía que no me ibas a fallar 😎✨",
    "¡Excelente decisión! Tu gusto mejora cada día 😉",
    "Sabía que dirías que sí… es imposible resistirse a mí 😌",
    "Muy bien… así vamos avanzando como te dije 😏💖",
    "¡Sabía que lo estabas disfrutando tanto como yo! 😌✨",
];

const noResponses = [
    "¿No? dale pa atras que te equivocaste 😎",
    "Interesante decisión… incorrecta, pero interesante 😌",
    "Jajaja dale, te dejo esa… por ahora 😏",
    "No pasa nada… todos cometemos errores 😌✨",
    "Mmm… curioso. Seguro el próximo es un sí 😉",
];

// Función para obtener respuesta aleatoria
function randomResponse(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function startSequence() {
    setTimeout(() => introText.classList.add("active"), 500);
    setTimeout(() => {
        introText.classList.remove("active");
        quizContainer.classList.remove("hidden");
        quizContainer.classList.add("active", "opacity-100");
        loadQuestion();
    }, 4000);
}

function loadQuestion() {
    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        questionText.textContent = q.text;
        currentQIndex.textContent = currentQuestion + 1;

        // Imagen
        if (q.img) {
            questionImage.src = q.img;
            questionImage.classList.remove("hidden");
        } else {
            questionImage.classList.add("hidden");
        }

        questionText.classList.remove("opacity-100");
        questionText.classList.add("opacity-0");
        setTimeout(() => {
            questionText.classList.remove("opacity-0");
            questionText.classList.add("opacity-100");
        }, 100);
    } else {
        showFinalProposal();
    }
}

function answerQuestion(isYes) {
    let message = "";
    let color = "";

    if (isYes) {
        message = randomResponse(yesResponses);
        color = "text-green-400";
    } else {
        message = randomResponse(noResponses);
        color = "text-red-400";
    }

    feedbackMessage.textContent = message;
    feedbackMessage.className = `mt-4 text-lg font-semibold h-6 text-center ${color}`;

    setTimeout(() => {
        currentQuestion++;
        feedbackMessage.textContent = "";
        loadQuestion();
    }, 1200);
}

function showFinalProposal() {
    quizContainer.classList.remove("active");

    setTimeout(() => {
        finalProposal.classList.remove("hidden");
        finalProposal.classList.add("active", "opacity-100");
        finalButtons.classList.remove("hidden");
    }, 1000);
}

function handleFinalResponse(response) {
    finalButtons.classList.add("hidden");

    if (response === "yes") {
        finalQuestion.textContent = "Sabía que dirías que sí… soy irresistible, lo sé 😎💖";
        finalQuestion.classList.remove("text-primary-pink");
        finalQuestion.classList.add("text-green-400", "bg-white/20");

        finalEmoji.textContent = "💖";
        finalEmoji.classList.remove("animate-heart-beat");
        finalEmoji.classList.add("animate-pulse-grow");

        document.body.style.background = "linear-gradient(135deg, #FF69B4 0%, #9333ea 100%)";
    } else {
        finalQuestion.textContent = "Acepto tu no… aunque sé que en tu mente dijiste sí 😉✨";
        finalQuestion.classList.remove("text-primary-pink");
        finalQuestion.classList.add("text-red-400", "bg-white/20");
        finalEmoji.textContent = "😎✨";
    }
}

// Hacer que el botón NO se mueva cuando el usuario intenta tocarlo
const noButton = document.getElementById("btn-no");

noButton.addEventListener("mouseover", () => {
    const randomX = Math.random() * 200 - 100; // rangos de movimiento
    const randomY = Math.random() * 200 - 100;

    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    noButton.style.transition = "0.3s";
});

window.onload = startSequence;


/* -------------------------
   BOTÓN NO QUE HUYE (troll)
   ------------------------- */

// Mueve el botón a una posición aleatoria visible
function moveNoButtonByElement(btn) {
  if (!btn) return;
  // dejar un margen para que no quede pegado al borde
  const margin = 12;
  const maxX = Math.max(window.innerWidth - btn.offsetWidth - margin, margin);
  const maxY = Math.max(window.innerHeight - btn.offsetHeight - margin, margin);

  const randomX = Math.floor(Math.random() * (maxX - margin)) + margin;
  const randomY = Math.floor(Math.random() * (maxY - margin)) + margin;

  // usar position:fixed para que funcione en todo el viewport
  btn.style.position = "fixed";
  btn.style.left = `${randomX}px`;
  btn.style.top = `${randomY}px`;
  btn.style.transition = "left 0.22s ease, top 0.22s ease";
}

// Intenta "enganchar" los listeners al botón NO. Solo se añade una vez.
function attachNoButtonHandlers() {
  const btn = document.getElementById("btn-no");
  if (!btn) return false; // aún no existe
  if (btn.dataset.noListeners) return true; // ya tiene listeners

  // Handler compartido (usa el elemento actual)
  const handler = (e) => {
    // si es touch, prevenimos el click inmediato
    if (e && e.type === "touchstart") e.preventDefault();
    moveNoButtonByElement(btn);
  };

  // PC: cuando el cursor se acerca
  btn.addEventListener("mouseover", handler, { passive: true });

  // Móvil: cuando tocan (touchstart para respuesta inmediata)
  btn.addEventListener("touchstart", handler, { passive: false });

  // Evitar doble-attach
  btn.dataset.noListeners = "1";
  return true;
}
// Asegurar que el botón NO tenga los handlers, incluso si se carga tarde
(function ensureNoButtonAttached() {
  // Intentar ahora y volver a intentar unas veces si no existe aún
  if (attachNoButtonHandlers()) return;
  let tries = 0;
  const t = setInterval(() => {
    tries++;
    if (attachNoButtonHandlers() || tries > 20) clearInterval(t);
  }, 200); // intenta cada 200ms hasta 20 veces (4s)
})();

// Opcional: si la ventana cambia de tamaño, recolocar para que no quede fuera
window.addEventListener("resize", () => {
  const btn = document.getElementById("btn-no");
  if (btn && btn.style.position === "fixed") {
    // garantizar que sigue dentro
    const left = parseFloat(btn.style.left) || 0;
    const top = parseFloat(btn.style.top) || 0;
    const maxX = Math.max(window.innerWidth - btn.offsetWidth - 12, 12);
    const maxY = Math.max(window.innerHeight - btn.offsetHeight - 12, 12);
    if (left > maxX || top > maxY) moveNoButtonByElement(btn);
  }
});

let noCounter = 0; // contador de intentos “No”
const maxNoTouches = 5;

const lockContainer = document.getElementById("lock-container");
const lockBtn = document.getElementById("lock-btn");
let lockTouches = 0;

const loveProgressContainer = document.getElementById("love-progress-container");
const loveProgressBar = document.getElementById("love-progress-bar");
const loveProgressText = document.getElementById("love-progress-text");

// Modificar la función del botón NO
noButton.addEventListener("click", () => {
    // Vibración móvil
    if (navigator.vibrate) navigator.vibrate(100);

    noCounter++;
    if (noCounter >= maxNoTouches) {
        feedbackMessage.textContent = "Wow… eres persistente 🤨 pero no tanto como yo 😌";
        feedbackMessage.className = "mt-4 text-lg font-semibold h-6 text-center text-yellow-300";
        noCounter = 0; // reset
    }

    // Mover botón NO
    moveNoButtonByElement(noButton);
});

// Mostrar candado antes de final proposal
function showLockStep() {
    quizContainer.classList.add("hidden");
    lockContainer.classList.remove("hidden");
    lockContainer.classList.add("active", "opacity-100");
}

// Manejo del candado
lockBtn.addEventListener("click", () => {
    lockTouches++;
    if (lockTouches >= 3) {
        lockContainer.classList.add("hidden");
        showLoveProgress();
    }
});

// Barra de progreso del amor
function showLoveProgress() {
    loveProgressContainer.classList.remove("hidden");
    loveProgressContainer.classList.add("active", "opacity-100");

    let progress = 0;
    const messages = [
        "0% → Pensándolo…",
        "50% → No puedes resistirte, ¿verdad?",
        "100% → Sabía que dirías que sí ❤️"
    ];

    const interval = setInterval(() => {
        progress += 10;
        if (progress > 100) {
            clearInterval(interval);
            loveProgressContainer.classList.add("hidden");
            showFinalProposal(); // finalmente mostrar pregunta final
            return;
        }

        loveProgressBar.style.width = progress + "%";

        if (progress < 50) loveProgressText.textContent = messages[0];
        else if (progress < 100) loveProgressText.textContent = messages[1];
        else loveProgressText.textContent = messages[2];
    }, 300);
}

// Modificar loadQuestion para ir a candado al final
function loadQuestion() {
    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        questionText.textContent = q.text;
        currentQIndex.textContent = currentQuestion + 1;

        if (q.img) {
            questionImage.src = q.img;
            questionImage.classList.remove("hidden");
        } else {
            questionImage.classList.add("hidden");
        }

    } else {
        // En lugar de ir directo a final, mostramos candado
        showLockStep();
    }
}

