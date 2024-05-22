// union type

let unionType: string | number;

unionType = "Victory";

export { unionType };

console.log(unionType);


// literal type

type NineOrTen = 9 | 10;

let time: NineOrTen;

time = 9;
time = 10;

export{time};

console.log(`It's ${time} ! `);

