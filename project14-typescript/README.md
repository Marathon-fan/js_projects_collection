

Type inference 

```
let anyVar: number | string = 3;

anyVar = 'e'

```


```
let arr = [1, 2, 3, 4, 5]
arr.push('d')     // complains

```

```
let arr = [1, 2, 3, 4, 's']
arr.push('d')     

```

```
let arr: Array<number | string> = [1, 2, 3, 4]
arr.push['d']

```


// use inheritance
```
class Animal {
	do() {}
}

class Elephant extends Animal {

}

let arr1 = [new Elephant(), new Elephant()]
let arr2 = [new Elephant()]
```

// interface
```
interface IAnyInterface {
	name: string;
	lastName: string;
	age: number;
	firstName: string
};

interface IClams {
	role: string;
	'type': string;
}

interface ISuperUser extends IAnyInterface {
	claim: IClams
}

let anyObject: IAnyInterface {  // anyObject implements IAnyInterface
	firstName: 'd',
	claims: {
		role: 'dfs',
		'type': 'fsd'
	}
}
```


```
let fixedLengthArr = [2, '4'];
fixedLengthArr[0] = 'fd';

```


/////////////

type assertion

```
let anyVar: number | number[]
(anyVar as number[]).find(i => Boolean(i))
```


```
interface IFn1 {
	(arg1: string): string;
}
const fn: IFn1 = (arg) => {
	return 'fds'
}

interface IFn2 {
	(arg1: string): never;
}
const fn: IFn2 = 

```


typescript overloading
```


```


enum
```
let enum Color {Red, Blue, Green};

Color.Red

```

generics
```
class AnyClass<T, S?> {          // S is an optional value
	constructor(props: T) {

	}
}

const anyClass = new AnyClass<string>(8)   // wrong
const anyClass = new AnyClass<number>(8)   // right

```

abstract class
```

```


