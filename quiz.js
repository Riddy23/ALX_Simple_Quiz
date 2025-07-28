document.addEventListener('DOMContentLoaded', function() {
    function checkAnswer() {
        const correctAnswer = "4";
        const selected = document.querySelector('input[name="quiz"]:checked');
        const feedback = document.getElementById('feedback');

        if (!selected) {
            feedback.textContent = "Please select an answer before submitting.";
            return;
        }

        const userAnswer = selected.value;
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    }

    document.getElementById('submit-answer')
        .addEventListener('click', checkAnswer);
});

