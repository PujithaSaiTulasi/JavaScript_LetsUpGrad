fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(json=>console.log(json))



/*  .then(todos => {
    let output = '<h2>Lists of complted todos</h2>';
    output += '<ul>';
   todos.forEach(function(todos) {
        output += `
            <li>
                ${todos.name}
            </li>
        `;
    });
    output += '</ul>'
   console.log(output);
})
*/