const receivesAFunction = (cb)=> {
    cb();
}

const cb = ()=>{
    return "called";
}

returnsANamedFunction(()=>{
    return cb();
    });


returnsAnAnonymousFunction(()=>{
        return function() {
            console.log("Anonymous");
        }
    })   