// challege 4

// 1. recieve a list of variable name in the 'TEXT BOX'
// 2. when button pressed, it will convert the names
//      from 'uderscore_case' to 'camleCase'.
//  

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));


document.querySelector('button').addEventListener('click', function () {
    var txt = document.querySelector('textarea').value;
    console.log(txt);
    var rows = txt.split('\n');
    console.log(rows);
    
    for (var x of rows) {
        var [n1, n2] = x.toLowerCase().trim().split('_');
        n2 = n2[0].toUpperCase() + n2.slice(1);
        fullName = n1 + n2;
        console.log(fullName);
    }
});