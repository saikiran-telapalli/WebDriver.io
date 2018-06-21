// function f(n){
//     console.log(n)
//     if(n>9){return 0}
//     f(n+1)
// }
//  f(1)

var i=1;
f();

function f(){

    console.log(i++);

    if(i<=10){
        f();
    }
}

