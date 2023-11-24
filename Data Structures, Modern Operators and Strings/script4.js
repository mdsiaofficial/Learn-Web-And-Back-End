var nameOfVariables = [];
var box = document.getElementById('text-box-id');
console.log(box);

// var nameOfVariables[0] = document.querySelector('inp').val

document.body.append(document.createElement('textarea'));

document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
    var text = document.querySelector('textarea').value;
    var rows = text.split('\n');

    for (var [i, row] of rows.entries()) {
        var [first, second] = row.toLowerCase().trim().split('_');
        var output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    }

})