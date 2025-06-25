// var = punoroy bebohar kora
// let = block scope


//----closere------

function router (){
    let count = 0;
   
   return  function inner (){
        count ++;
        console.log(count)
    }
}

const fn =router()
fn()
fn()