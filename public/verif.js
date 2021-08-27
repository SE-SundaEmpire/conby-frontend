var a = document.getElementById("w"),
    b = document.getElementById("x"),
    c = document.getElementById("y"),
    d = document.getElementById("z");

a.onkeyup = function() {
    if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
        b.focus();
    }
}

b.onkeyup = function() {
    if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
        c.focus();
    } else {
        a.focus();
    }
}

c.onkeyup = function() {
    if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
        d.focus();
    } else {
        b.focus();
    }
}

d.onkeyup = function() {
    if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
        d.focus();
    } else {
        c.focus();
    }
}

let timerOn = true;
function timer(remaining) {
    var m = Math.floor(remaining/60);
    var s = remaining % 60;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    document.getElementById('countdown').innerHTML = `Time left: ${m} : ${s}`;
    remaining -= 1;
    if(remaining >= 0 && timerOn) {
        setTimeout(function() {
            timer(remaining);
        }, 1000);
        document.getElementById("resend").innerHTML = ' ';
        return;
    }
    if(!timerOn) {
        return;
    }
    document.getElementById("resend").innerHTML = 'Belum menerima kode verifikasi? <br> <span class="font-weight-bold text-color cursor" onclick="timer(10)">Kirim Ulang Kode</span>';
}
timer(10);