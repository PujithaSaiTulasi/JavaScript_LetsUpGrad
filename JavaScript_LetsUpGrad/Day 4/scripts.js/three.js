shoppingList=['lux','colgate','vatika'];
console.log('Refrencing the shoppingList');
let shoppingBasket = shoppingList;
shoppingList.push('Yeppie Noodles');
console.log(shoppingList);
console.log(shoppingBasket); // changes reflected
console.log();

console.log('Creating a copy of shoppingList');
shoppingBasket = [...shoppingList];
shoppingList.push('Hide and Seek');
console.log(shoppingList);
console.log(shoppingBasket); //changes not reflected
console.log();

console.log('Adding new products into the shoppingBasket');
shoppingBasket = ['Cadbury',...shoppingList,'OREO'];
console.log(shoppingBasket);
