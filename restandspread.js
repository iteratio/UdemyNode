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
// const copiedArray = hobbies.slice();
//const copiedArray = [hobbies];
const copiedArray = [...hobbies];
console.log(copiedArray);

const toArray = (...args) => {
    return args;
}
console.log(toArray(1,2,'space',4));
