var dt = new Date();
var thangmoi = 0;
var nammoi = 0;
var lastday = function (y, m) {
    return new Date(y, m + 1, 0).getDate();
}
document.getElementById('light').onclick = function () {
    document.body.classList.replace("dark", "light");
    document.body.classList.replace("pastel", "light");
};
document.getElementById("dark").onclick = () => {
    document.body.classList.replace("light", "dark");
    document.body.classList.replace("pastel", "dark");
}
document.getElementById("pastel").onclick = () => {
    document.body.classList.replace("light", "pastel");
    document.body.classList.replace("dark", "pastel");
}
window.onload = function () {

    thangmoi = dt.getMonth();
    nammoi = dt.getFullYear();
    document.getElementById("thang").innerHTML = "Tháng " + (thangmoi + 1) + ', ' + nammoi;
    chinh();


}

function thangtruoc() {
    thangmoi--;
    if (thangmoi < 0) { thangmoi = 11; dt = new Date(new Date().getFullYear(), thangmoi, nammoi--) }
    else dt = new Date(new Date().getFullYear(), thangmoi, new Date().getDate());
    chinh();
    document.getElementById("thang").innerHTML = "Tháng " + (thangmoi + 1) + ', ' + nammoi;
}
function thangsau() {
    thangmoi++;
    if (thangmoi > 11) { thangmoi = 0; dt = new Date(new Date().getFullYear(), thangmoi, nammoi++) }
    else dt = new Date(new Date().getFullYear(), thangmoi, new Date().getDate());
    chinh();
    document.getElementById("thang").innerHTML = "Tháng " + (thangmoi + 1) + ', ' + nammoi;
}
function baygio() {
    dt = new Date();
    thangmoi = dt.getMonth();
    nammoi = dt.getFullYear();
    chinh();
    document.getElementById("thang").innerHTML = "Tháng " + (dt.getMonth() + 1) + ', ' + dt.getFullYear();
}
function chinh() {
    var week = ["week1", "week2", "week3", "week4", "week5", "week6"];
    var iOfWeek = 0;
    var days = ["thu8", "thu2", "thu3", "thu4", "thu5", "thu6", "thu7"];
    for (var a = 0; a < 6; a++) {
        for (var b = 0; b < 7; b++) {
            document.getElementsByClassName(week[a])[0].getElementsByClassName(days[b])[0].innerHTML = '';
        }
    }
    for (var i = 1; i <= lastday(dt.getFullYear(), dt.getMonth()); i++) {
        var ngay = new Date(dt.getFullYear(), dt.getMonth(), i);
        console.log(ngay.getDate() + " ");
        document.getElementsByClassName(week[iOfWeek])[0].getElementsByClassName(days[ngay.getDay()])[0].innerHTML = i;
        document.getElementsByClassName(week[iOfWeek])[0].getElementsByClassName(days[ngay.getDay()])[0].classList.remove("today");
        document.getElementsByClassName(week[iOfWeek])[0].getElementsByClassName(days[ngay.getDay()])[0].classList.remove("todaySunday");
        if (ngay.getDate() == dt.getDate()) {
            if (dt.getDay() != 0) { document.getElementsByClassName(week[iOfWeek])[0].getElementsByClassName(days[ngay.getDay()])[0].classList.add("today") ; }
            else document.getElementsByClassName(week[iOfWeek])[0].getElementsByClassName(days[ngay.getDay()])[0].classList.add("todaySunday") ;
        }
        document.getElementsByClassName(week[iOfWeek])[0].style.visibility = "visible";
        if (ngay.getDay() == 0 && ngay.getDate() != lastday(dt.getFullYear(), dt.getMonth())) { iOfWeek++; }
    }
    for (iOfWeek++; iOfWeek < 6; iOfWeek++) {
        document.getElementsByClassName(week[iOfWeek])[0].style.visibility = "hidden";
    }
}

