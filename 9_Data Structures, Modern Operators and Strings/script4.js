// challege 4

// 1. recieve a list of variable name in the 'TEXT BOX'
// 2. when button pressed, it will convert the names
//      from 'uderscore_case' to 'camleCase'.
//  

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement('p'));
document.querySelector('p').innerText;
document.body.append(document.createElement("button"));


document.querySelector('button').addEventListener('click', function () {
    var txt = document.querySelector('textarea').value;
    console.log(txt);
    var rows = txt.split('\n');
    console.log(rows);
    newVars = [];
    for (var x of rows) {
        console.log(x);
        var [n1, n2] = x.toLowerCase().trim().split('_');
        console.log(n1, n2);
        n2 = n2[0].toUpperCase() + n2.slice(1);
        fullName = n1 + n2;
        console.log(fullName);
        newVars.push(fullName);
    }
    console.log(newVars);
    for (var [i,x] of newVars.entries()) {
        //console.log(i,x);
        
        console.log(`${x.padEnd(20)}${'✅'.repeat(i+1)}`);
        
    }
    
});