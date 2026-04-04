document.getElementById('interestForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect selected interests
    const checkboxes = document.querySelectorAll('input[name="interest"]:checked');
    const interests = Array.from(checkboxes).map(cb => cb.value);

    const education = document.getElementById('education').value;
    const language = document.getElementById('language').value;

    if (interests.length === 0) {
        alert('Please select at least one interest!');
        return;
    }
    if (!education) {
        alert('Please select your education level!');
        return;
    }
    if (!language) {
        alert('Please select a programming language!');
        return;
    }

    const resultCard = document.getElementById('resultCard');
    resultCard.style.display = 'block';
    document.getElementById('resultText').innerHTML =
        `<strong>Interests:</strong> ${interests.join(', ')}<br>` +
        `<strong>Education Level:</strong> ${education}<br>` +
        `<strong>Programming Language:</strong> ${language}`;
});
