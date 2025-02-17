let objArr=[
    {
        name: 'Ali' ,
        age: 21 ,
        gender: 'Male'
    },
    {
        name: 'Munaza',
        age: 21 ,
        gender: 'Female'
    },
    {
        name: 'Amna' ,
        age: 24 ,
        gender: 'Female'
    }
];

let names = objArr.map(person => person.name);
console.log(names);