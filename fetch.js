//server URL
const personApiUrl = "https://jsonplaceholder.typicode.com/users/1";

document.addEventListener('readystatechange', function (event) {
    if (document.readyState === 'interactive')
        document.getElementById('addPersonsBtn').addEventListener('click', getPersons);
        document.getElementById('sendPersonsBtn').addEventListener('click', sendData);
});

//Get persons async function to receive persons list, generate and fill table rows
async function getPersons() {
    try {
        //Get request by fetch
        let response = await fetch(personApiUrl); // GET
        if (response.ok) {
            //Converting the response to Json            
            const data = await response.json();
            console.log(data);
            //Get table element and clear
            const table = document.querySelector('table tbody');
            table.innerHTML = '';
            console.log(table.innerHTML);
            console.log(table);
            //Create new element to insert into the table
            const tr = createNode('tr'),
                nameRow = createNode('td'),
                usernameRow = createNode('td'),
                emailRow = createNode('td');
            nameRow.contentEditable = true;
            //Mapping all persons into the table
            //Insert the data into the element
            nameRow.innerHTML = data.name;
            usernameRow.innerHTML = data.username;
            emailRow.innerHTML = data.email;
            //Insert the elements into the table          
            append(tr, nameRow);
            append(tr, usernameRow);
            append(tr, emailRow);
            append(table, tr);
        }
    }
    catch (e) {
        console.log(e);
    }
}

async function sendData() {
    const tr = document.querySelector('table tbody tr');
    let person = {
        "id": 1,
        "name": "Leanne Graham",
        "username": tr.firstChild.textContent,
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      };
    let str = JSON.stringify(person);
    console.log(str); 
     let response = await fetch('https://jsonplaceholder.typicode.com/posts', 
    {
        method : 'POST',
        headers: { 'Content-Type': 'application/json'},
        body   : JSON.stringify(person)
    })
    if (response.ok) {
        console.log(response.text());
    } 
}

//Create new element by element name
function createNode(element) {
    return document.createElement(element);
}

// Append the element(el) into the parent
function append(parent, el) {
    return parent.appendChild(el);
}
