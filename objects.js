const person    =   {
    name: 'John',
    age: 30,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const hobbies = ['sports','Cooking']
// for (let hobby of hobbies) {
//     console.log(hobby);
// }
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);
hobbies.push('Programming');
console.log(hobbies);
