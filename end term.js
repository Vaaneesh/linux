var n =prompt();
var i=n;
var fib=[];
fib[0]=0;
fib[1]=1;
console.log(fib[1]);
for (i=2;i<=n;i++){
    fib[i]=fib[i-2]+fib[i-1];
    console.log(fib[i]);
}