input = document.getElementById('display').value;

document.getElementById('btn-1').addEventListener('click', function () {
    input = document.getElementById('display');
    input.value += '1';
});
document.getElementById('btn-2').addEventListener('click', function () {
    input = document.getElementById('display');
    input.value += '2';
});
document.getElementById('btn-3').addEventListener('click', function () {
    input = document.getElementById('display');
    input.value += '3';
});
document.getElementById('btn-4').addEventListener('click', function () {
    input = document.getElementById('display');
    input.value += '4';
});
document.getElementById('btn-5').addEventListener('click', function () {
    input = document.getElementById('display');
    input.value += '5';
});
document.getElementById('btn-6').addEventListener('click', function () {
    input = document.getElementById('display');
    input.value += '6';
});
document.getElementById('btn-7').addEventListener('click', function () {
    input = document.getElementById('display');
    input.value += '7';
});
document.getElementById('btn-8').addEventListener('click', function () {
    input = document.getElementById('display');
    input.value += '8';
});
document.getElementById('btn-9').addEventListener('click', function () {
    input = document.getElementById('display');
    input.value += '9';
});
document.getElementById('btn-0').addEventListener('click', function () {
    input = document.getElementById('display');
    input.value += '0';
});
document.getElementById('btn-00').addEventListener('click', function () {
    input = document.getElementById('display');
    input.value += '00';
});
document.getElementById('btn-plus').addEventListener('click', function () {
    let input = document.getElementById('display');
    let val = input.value;
    let lastChar = val.charAt(val.length - 1);
    if (['-', '+', '*', '/'].includes(lastChar)) {
        input.value = val.slice(0, -1) + '+';
    } else {
        input.value += '+'
    }
});
document.getElementById('btn-minus').addEventListener('click', function () {
    let input = document.getElementById('display');
    let val = input.value;
    let lastChar = val.charAt(val.length - 1);
    if (['-', '+', '*', '/'].includes(lastChar)) {
        input.value = val.slice(0, -1) + '-';
    } else {
        input.value += '-';
    }
});

document.getElementById('btn-multiply').addEventListener('click', function () {
    let input = document.getElementById('display');
    let val = input.value;
    let lastChar = val.charAt(val.length - 1);
    if (['-', '+', '*', '/'].includes(lastChar)) {
        input.value = val.slice(0, -1) + '*';
    } else {
        input.value += '*';
    }
});
document.getElementById('btn-divide').addEventListener('click', function () {
    let input = document.getElementById('display');
    let val = input.value;
    let lastChar = val.charAt(val.length - 1);
    if (['-', '+', '*', '/'].includes(lastChar)) {
        input.value = val.slice(0, -1) + '/';
    } else {
        input.value += '/';
    }
});
document.getElementById('btn-clear').addEventListener('click', function () {
    document.getElementById('display').value = "";
});
document.getElementById('btn-delete').addEventListener('click', function () {
    let input = document.getElementById('display');
    input.value = input.value.slice(0, -1);
});
document.getElementById('btn-equals').addEventListener('click', function () {
    let ans = eval(document.getElementById('display').value);
    document.getElementById('display').value = ans;
});

