                    console.log('------------- # 4')


function sum(a,b) { 
return a+b;
}

console.log(sum(1, 5));


function subtraction(a,b) { 
    return a-b;
    }
    
console.log(subtraction (5, 1));


function multiplication(a,b) { 
    return a*b;
    }
    
console.log(multiplication(5, 5));

function division (a,b) { 
    return a/b;
    }
    
console.log(division(5, 5));

                            console.log('------------- # 5')

function sumTo(n){ 

for (let i = 1; i<= n; i++) {
    console.log (i);
    }

} 

console.log(sumTo(5));


function minTo(n) {
    
    for (let i = n; i>=1; i-- ) {
        console.log (i);
    }
}

console.log(minTo(5));


                        console.log('------------- # 7')
function pow(x,n) {
    return 3**2;
}

console.log (pow(3,2));

                        console.log('------------- # 8')
function isBigger(s, f) {

    let result; 

    // if (s > f) {
    //     result = valid();
    // }

    // else  {
    //     result = invalid();
    // }
    // return result;

    // return (s > f) ? valid() : invalid ();
}

function valid () {
    return true;
}

function invalid () {
    return false;
}

console.log (isBigger(5, -1));
console.log (isBigger(-1, 5));



                        console.log('------------- # 9')
function isSmaller(w,q) {
    if (w < q) {
        result = valid ();
    }

    else  {
        result = invalid ();
    }
     return result;

    // return (w < q) ? valid():invalid();
}

console.log (isSmaller(5,-1));
console.log (isSmaller(-1, 5));


