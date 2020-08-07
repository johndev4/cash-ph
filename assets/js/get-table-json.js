$.getJSON("assets/json/table1.json", function (table) {
    var thead = document.createElement('thead');
    thead.setAttribute("class", "thead-custom");
    document.getElementById('table1').appendChild(thead);

    for (var i = 0; i < 3; i++) {
        var th = document.createElement('th');
        th.innerHTML = table.columns[i];
        th.setAttribute("class", "th-custom");
        thead.appendChild(th);
    }

    for (var i = 0; i < table["rows"].length; i++) {
        var tr = document.createElement('tr');
        tr.setAttribute("class", "tr-custom");
        document.getElementById('table1').appendChild(tr);

        for (var j = 0; j < table["rows"][i].length; j++) {
            var td = document.createElement('td');
            if (j == 0) {
                td.innerHTML = "<span>" + table.rows[i][j].name + "</span>";
                td.innerHTML += "\n<span class='denom-val-holder'>" + table.rows[i][j].value + "</span>";
            } else {
                td.innerHTML = table.rows[i][j];
            }
            td.setAttribute("class", "td-custom");
            tr.appendChild(td);
        }
    }
});

$.getJSON("assets/json/table2.json", function (table) {
    var thead = document.createElement('thead');
    thead.setAttribute("class", "thead-custom");
    document.getElementById('table2').appendChild(thead);

    for (var i = 0; i < 3; i++) {
        var th = document.createElement('th');
        th.innerHTML = table.columns[i];
        th.setAttribute("class", "th-custom");
        thead.appendChild(th);
    }

    for (var i = 0; i < table["rows"].length; i++) {
        var tr = document.createElement('tr');
        tr.setAttribute("class", "tr-custom");
        document.getElementById('table2').appendChild(tr);

        for (var j = 0; j < table["rows"][i].length; j++) {
            var td = document.createElement('td');
            if (j == 0) {
                td.innerHTML = "<span>" + table.rows[i][j].name + "</span>";
                td.innerHTML += "\n<span class='denom-val-holder'>" + table.rows[i][j].value + "</span>";
            } else {
                td.innerHTML = table.rows[i][j];
            }
            td.setAttribute("class", "td-custom");
            tr.appendChild(td);
        }
    }
});