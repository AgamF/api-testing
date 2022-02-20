const elements = {
  htmlBody: document.querySelector('body'),
  button: document.querySelector('button'),
  refreshBtn: document.getElementById('refresh')
}

const { htmlBody, button, refreshBtn } = elements;

const displayAPIdata = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then((users) => {
      for (let user of users) {
        let h3 = document.createElement('h3');
        h3.classList.add('animate__animated','animate__backInLeft')
        h3.innerText = `Name: ${user.name}, id: ${user.id}`;
        htmlBody.appendChild(h3);
      }
    });
}

button.addEventListener('click', displayAPIdata);
refreshBtn.addEventListener('click', () => window.location.reload());