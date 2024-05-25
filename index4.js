const API_URL = "https://jsonplaceholder.typicode.com/users";

const HMLTResponse = document.querySelector("#app");
const ul= document.createDocumentFragment('ul');


fetch("${API_URL}/users")
.then((Response) => Response.json())
.then((users) => {
    users.forEach(user =>{
        let elem = document.createElement('li');
        elem.appendChild(documetn.createTextNode('${user.name} ${user.email}'));
        ul.appendChild(elem);
    }) 


    HMLTResponse.appendChild(ul);
});
