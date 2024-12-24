//your code here


// Initial API URL
const apiURL = 'https://randomuser.me/api/';

// Reference to the HTML elements
const userImage = document.getElementById('user-image');
const userName = document.getElementById('user-name');
const additionalInfoText = document.getElementById('additional-info-text');
const getUserButton = document.getElementById('getUser');
const ageButton = document.getElementById('age-btn');
const emailButton = document.getElementById('email-btn');
const phoneButton = document.getElementById('phone-btn');

// Variable to hold user data
let currentUser = {};

// Fetch a random user from the API and display their basic info
function fetchUser() {
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            currentUser = data.results[0];
            displayUserInfo(currentUser);
        })
        .catch(error => console.error('Error fetching user:', error));
}

// Display the user’s photo and full name
function displayUserInfo(user) {
    userImage.src = user.picture.large; // Use large picture
    userName.textContent = `${user.name.first} ${user.name.last}`;
    additionalInfoText.textContent = 'Click a button to see additional info.';
}

// Handle button clicks for showing additional information
function displayAdditionalInfo(attribute) {
    switch (attribute) {
        case 'age':
            additionalInfoText.textContent = `Age: ${currentUser.dob.age}`;
            break;
        case 'email':
            additionalInfoText.textContent = `Email: ${currentUser.email}`;
            break;
        case 'phone':
            additionalInfoText.textContent = `Phone: ${currentUser.phone}`;
            break;
        default:
            additionalInfoText.textContent = 'Click a button to see additional info.';
    }
}

// Set up event listeners for the buttons
ageButton.addEventListener('click', () => displayAdditionalInfo('age'));
emailButton.addEventListener('click', () => displayAdditionalInfo('email'));
phoneButton.addEventListener('click', () => displayAdditionalInfo('phone'));

// Event listener for the "Get New User" button
getUserButton.addEventListener('click', fetchUser);

// Initial user fetch when the page loads
fetchUser();
