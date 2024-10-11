let hello = 'hello world';

// number | string | null | undefined

let age: number = 10;
let weight: number = 90.5;
let weight2: number = -90.5;
let weight3: number = NaN;
let weight4: number = Infinity;

// string

let firstName: string = 'Mindia';

//  is true

let istrue: boolean = true;

let empty: null = null;

let empty2: undefined = undefined;

// any

let x: any = 'hello';

x = 15;

age.toString;

// firstName.includes['hello'];

// function add(a: Number, b: Number): number {
//   return a + b;
// }

//obj

type user1 = {
  name: string;
  age: number;
  istrue: boolean;
  address: {
    city: 'tbilisi';
    adres: 'f';
  };
};

// type interface

interface IUser4 {
  name: string;
  age: number;
  istrue: boolean;
  address: {
    city: 'tbilisi';
    adres: 'f';
  };
}

//array

const user10: (number | string)[] = ['erti', 'ori', 'sami', 12, 3, 4];

const user11: number[] = [1, 2, 3, 4];

const user12: Array<string | number> = ['erti', 'ori', 'sami'];

type stringOrNumber = string | number;

let union: stringOrNumber = 5;

let union2: stringOrNumber = '5';

if (typeof union2 === 'string') {
  console.log(union2.toLowerCase());
}

type MyUser = {
  name: string;
  age: number;

  phone?: string;
};

const user19: MyUser = {
  name: 'mindia',
  age: 26,
};

const user20: MyUser = {
  name: 'igi',
  age: 18,
  phone: '555555555555555',
};

type My_User = {
  name: string;
  age: number;
};

type car = {
  name: string;
  age: number;
};

const user21: My_User = {
  name: 'mindia',
  age: 12,
};

function renderCarUser(user: car & My_User) {}

type newType = car & MyUser;

// !literal type

type direction = 'left' | 'right' | 'up' | 'down';

const myDirection: direction = 'up';

function getStatuse(status: 'succes' | 'error' | 'panding') {
  console.log(status);
}

// @ts-ignore // agnorebs aamsas es aris drobeit gamosayenebeli
const num20: number = 'ola world';

// unknown

const num99 = 'helo' as unknown as number; //naklebad gamoyenabadi

// ! const enum - obj
const enum user100 {
  name = 'minida',
  age = 30,
}

if (user100.name === 'minida') {
  console.log('hello');
}

type myinfoobj = {
  name: String;
  getMoreInfo: () => String;
};

const myOBJ: myinfoobj[] = [
  {
    name: 'mindia',
    getMoreInfo: () => {
      return 'info my';
    },
  },
];

//! utility type

//  parital

type User111 = Partial<{
  name: string;
  age: number;
  car: boolean;
}>;

const user111: User111 = {
  name: 'mindia',
  age: 12,
  car: true,
};

//! readonly

type User113 = Readonly<{
  name: string;
  age: number;
  car: boolean;
}>;

const user113: User113 = {
  name: 'ss',
  age: 12,
  car: false,
};

//! pick

type User44444 = pick<User113, 'name', 'age'>;

const user115: User44444 = {
  name: 'ss',
  age: 12,
};

//! Omit
