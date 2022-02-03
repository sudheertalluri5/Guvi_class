// Question: For the given JSON iterate over all for loops (for, for in, for of, forEach)

// Given data (https://gist.github.com/lavishjain36/f22260e80d01a010f437ea6610042d6f)
var object = [
    { person: "Mohan", age: 2, company: "Guvi" },
    { person: "Rohan", age: 3, company: "Guvi Geeks" },
    { person: "Raju", age: 4, company: "Guvi Geek Network" },
  ];

// for loop
console.log('FOR LOOP');
for (let index=0; index < object.length; index++){
    console.log(`Name : ${object[index].person}`);
    console.log(`Age : ${object[index].age}`);
    console.log(`Company : ${object[index].company}`);
}

// for in loop
console.log('FOR IN LOOP');
for (index in object){
    console.log(`Name : ${object[index].person}`);
    console.log(`Age : ${object[index].age}`);
    console.log(`Company : ${object[index].company}`);
}

// for of loop
console.log('FOR OF LOOP');
for (person of object){
    console.log(`Name : ${person.person}`);
    console.log(`Name : ${person.age}`);
    console.log(`Name : ${person.company}`);
}

// forEach loop
console.log('FOR EACH LOOP');
object.forEach(person => {
    console.log(`Name : ${person.person}`);
    console.log(`Name : ${person.age}`);
    console.log(`Name : ${person.company}`);
})

//END
