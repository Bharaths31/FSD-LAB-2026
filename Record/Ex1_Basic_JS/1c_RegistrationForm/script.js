// Auto-calculate age from DOB
document.getElementById('dob').addEventListener('change', function () {
    const dob = new Date(this.value);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    document.getElementById('age').value = age >= 0 ? age : '';
});

// Handle form submission
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const dob = document.getElementById('dob').value;
    const age = document.getElementById('age').value;
    const country = document.getElementById('country').value;
    const terms = document.getElementById('terms').checked;

    if (!fullName || !email || !dob || !country) {
        document.getElementById('message').textContent = 'Please fill all fields!';
        document.getElementById('message').style.color = 'red';
        return;
    }

    if (!terms) {
        document.getElementById('message').textContent = 'Please accept Terms & Conditions!';
        document.getElementById('message').style.color = 'red';
        return;
    }

    document.getElementById('message').textContent = 'Registration successful!';
    document.getElementById('message').style.color = 'green';

    const detailsCard = document.getElementById('detailsCard');
    detailsCard.style.display = 'block';
    document.getElementById('displayDetails').innerHTML =
        `<strong>Full Name:</strong> ${fullName}<br>` +
        `<strong>Email:</strong> ${email}<br>` +
        `<strong>Date of Birth:</strong> ${dob}<br>` +
        `<strong>Age:</strong> ${age}<br>` +
        `<strong>Country:</strong> ${country}`;
});
