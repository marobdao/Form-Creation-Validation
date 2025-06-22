// fetch-data.js
// Asynchronously fetch and display user data from JSONPlaceholder

async function fetchUserData() {
  // 2. Define the API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // 3. Select the data container element
  const dataContainer = document.getElementById('api-data');

  try {
    // 4. Fetch data
    const response = await fetch(apiUrl);
    const users = await response.json();

    // 5. Clear loading message
    dataContainer.innerHTML = '';

    // 6. Create and append user list
    const userList = document.createElement('ul');
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      userList.appendChild(li);
    });
    dataContainer.appendChild(userList);
  } catch (error) {
    // 7. Error handling
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    console.error('Error fetching user data:', error);
  }
}

// 8. Invoke on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
