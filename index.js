import data from "./data.js";
const container = document.getElementById("users-container")
console.log(data);
const users = JSON.parse(data)
console.log(users[0])

for (let i = 0; i < users.length; i++) {

    const card = document.createElement("div");
    card.innerHTML=`
    <h2>${users[i].name.first} ${users[i].name.last}</h2>
    <img src=${users[i].picture.large} alt=${users[i].name.first} ${users[i].name.last}>
    <p>${users[i].location.street.name} ${users[i].location.street.number}</p>`;
    container.appendChild(card);

}

