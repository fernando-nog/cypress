
const soma = () => 5 + 5;

console.log(soma(1, 4));

it('a function test...', function (){
    console.log('function', this);
});

it('an arrow test...', function (){
    console.log('Arrow', this);
});
