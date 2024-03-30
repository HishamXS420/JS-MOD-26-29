
function bar(){
    console.log('bar')
}
function foo(){
    console.log('foo');
    var bart = bar();
    console.log(bart);
}

var foot = foo();
console.log(foot);