var data_obj = JSON.parse(window.sessionStorage.getItem("dataObj"));
window.sessionStorage.clear();

for (var i = 0; i < data_obj.denomination.length; i++){
    var tr = document.createElement('tr');

    for (var j = 0; j < 3; j++){
        var td = document.createElement('td');

        if (j == 0){
            td.textContent = data_obj.denomination[i];
        } else if (j == 1){
            td.textContent = data_obj.pieces[i];
        } else if (j == 2){
            td.textContent = data_obj.amount[i];
        }
        
        tr.appendChild(td);
    }

    document.getElementsByTagName('table')[0].appendChild(tr);
}


var tr = document.createElement('tr');

for (var i = 0; i < 3; i++){
    var td = document.createElement('td');
    td.style = "border-top: 0.5px solid #000000";

    if (i == 1){
        td.textContent = "Total:";
    } else if (i == 2){
        td.textContent = data_obj.total;
    }

    tr.append(td);
}

document.getElementsByTagName('table')[0].appendChild(tr);

var printDate = date.getMonth() + "-" + date.getDate() + "-" + date.getFullYear();
var doc = new jsPDF();
doc.fromHTML(document.getElementById('pdf'), 15, 15);
doc.save("cash-ph-" + printDate + ".pdf");
setInterval(function() {
    window.close();
}, 1);