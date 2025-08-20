const answerInput = document.getElementById('answer-input');
const riddleText = document.getElementById('riddle-text');
const title = document.getElementById('title');
let riddleIndex = 0;
const riddles = [
    { question: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?", answer: "an echo" },
    { question: "The more you take, the more you leave behind. What am I?", answer: "footsteps" },
    { question: "I’m tall when I’m young, and I’m short when I’m old. What am I?", answer: "a candle" }
];

answerInput.addEventListener('input', () => {
    const userAnswer = answerInput.value.trim().toLowerCase();
    if (userAnswer === riddles[riddleIndex].answer.toLowerCase()) {
        riddleIndex++;
        if (riddleIndex < riddles.length) {
            riddleText.textContent = riddles[riddleIndex].question;
            answerInput.value = '';
        } else {
            showFinalMessage();
        }
    }
});

function showFinalMessage() {
    // Hide the input field after the last answer
    answerInput.style.display = 'none';
    
    // Display the final message
    riddleText.textContent = 'Telegram: @JNVOSS';
    
    const message = document.createElement('p');
    message.textContent = '';
    document.body.appendChild(message);
}


