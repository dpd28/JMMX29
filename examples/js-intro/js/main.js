let x;
let y;
let z;

x = 25;
y = 'string';
z = true;

x + z;
console.log(x + z);

x + y;
console.log(x + y);

const myArray = [1, 'string', 2, 3, 4, 5, 6, 7, 8, 9];

console.log(myArray.length);

// looking at how let works and is differnt from var

{
        const x = 2;
        console.log(x);
}

// understanding objects

const fruit = {
        kind: 'orange',
        color: 'orange',
        quantity: 9,
        tasty: true,
};

const theFruits = [
        {
                kind: 'orange',
                color: 'orange',
                quantity: 9,
                tasty: true,
        },

        {
                kind: 'grapes',
                color: 'purple',
                quantity: 100,
                tasty: true,
        },

        {
                kind: 'durian',
                color: 'orange',
                quantity: 3,
                tasty: false,
        },
];
// index can be i or x

// for (let index = 0; index < array.length; index++) {
// const element = array[index];

// }

// ++ equals by one - increase by 1

for (let index = 0; index < theFruits.length; index++) {
        // const element = array[index];
        // check that we are going through the right number of things.
        // console.log(index);
        // get the kind of each fruit
        // console.log(theFruits[index].kind);

        if (theFruits[index].tasty == true) {
                // fruits is tasty so give me the name
                console.log(theFruits[index].kind);
        } else {
                // fruits are not tasty, ignore
                //  console.log('Your fruit is on mars');
                // this is a string literal
                console.log(`${theFruits[index].kind} belongs on Mars`);
        }
}
