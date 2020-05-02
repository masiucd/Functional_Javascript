// @ts-nocheck

const fetch = require('node-fetch');

const getFromApi = baseUrl => endPoint => fn => {
  fetch(`${baseUrl}${endPoint}`)
    .then(res => res.json())
    .then(data => fn(data))
    .catch(err => {
      console.log(err);
    });
};

const getJsonData = getFromApi('https://jsonplaceholder.typicode.com');

const getUsers = getJsonData('/users');
const getTodos = getJsonData('/todos');

getUsers(data => data.map(user => console.log(user.name, ' user ')));

getTodos(data =>
  data.slice(0, 10).map(todo => console.log(todo.title, ' todo '))
);
