function myfun() {
    isl = document.getElementById('isl').Value;
    eng = document.getElementById('eng').Value;
    c = document.getElementById('c').value;
    calculus = document.getElementById('calculus').value;
    total = document.getElementById('total').value;
    var txt1 = eval(parseFloat(document.stdinfo.isl.value) + parseFloat(document.stdinfo.eng.value) +
        parseFloat(document.stdinfo.c.value) + parseFloat(document.stdinfo.calculus.value));
    document.getElementById("total").innerHTML = txt1;
    var txt2 = eval(parseFloat(txt1 * 100) / 400);
    message.innerHTML = txt1;
    document.getElementById("demoper").innerHTML = txt2.toFixed(2) + "%";
    message = document.getElementById(result);

}