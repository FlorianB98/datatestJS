var header = document.querySelector('header');
var section = document.querySelector('section');


window.onload = function () {

    $.get("data.json", function (data) {
        // console.log(data);

        console.log(data[0].name)
        bewChild(data)

    });
}

function bewChild(data){
    var myH2 = document.createElement('h2');
    myH2.textContent = data[0].currencies[0].name;
    header.appendChild(myH2);
}