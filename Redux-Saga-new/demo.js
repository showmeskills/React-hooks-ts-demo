function * helloGenerator(){
    yield "the first generator";
    yield "the second generator";
    yield "the third generator";
    return "wow";
}
const result = helloGenerator();
//next() will 返回yield 和 return value, 当没有值的时候返回undefined
console.log(result.next());//{value: 'the first generator', done: false}
console.log(result.next());//{value: 'the second generator', done: false}
console.log(result.next());//{value: 'the third generator', done: false}
console.log(result.next());//{value: 'wow', done: true}
console.log(result.next());//{value: undefined, done: true}

const result2 = helloGenerator();
//Using for of loop to get the value of yield, 但是不会获得return value
for(const interator of result2){
    console.log(interator)
    // the first generator
    // the second generator
    // the third generator
}

