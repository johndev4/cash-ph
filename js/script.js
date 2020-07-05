$(document).ready(function() {

    //Menu
    $('#restore').click(function () {
        restore();
    });

    $('#save').click(function () {
        save();
    });

    $('#save-as-pdf').click(function () {
        saveAsPDF();
    });

    $('#exit').click(function () {
        window.history.back();
    });

    
    //Edit
    $('#clr').click(function () {
        $('.pieces').val(0);
        update();
    });

});

$(document).ajaxSuccess(function () {
    
    initMenuButtons();
    update();

    //Pieces Object Event Listener
    $('.pieces').on('input', function () {
        if (this.value === "") {
            this.value = 0;
        }
        update();
        initMenuButtons();
    });

    $('.pieces').on('focus', function () {
        this.select();
    });
    
});


const denomination_obj = document.getElementsByClassName('denom-val-holder');
const pieces_obj = document.getElementsByClassName('pieces');
const amount_obj = document.getElementsByClassName('amount');

function update() {
    var total = 0;

    for (var i = 0; i < pieces_obj.length; i += 1) {
        var d = denomination_obj[i].textContent;
        var p = pieces_obj[i].value;
        var amt = parseFloat(d) * parseFloat(p);

        amount_obj[i].textContent = amt.toLocaleString("en-US", {
            style: "currency",
            currency: "PHP"
        });
        total += amt;
    }

    $('#total').text(
        total.toLocaleString("en-US", {
            style: "currency",
            currency: "PHP"
        })
    );
}

function restore() {
    var arr = JSON.parse(localStorage.getItem("piecesValues"));
    for (var i = 0; i < pieces_obj.length; i++) {
        pieces_obj[i].value = arr[i];
        showDialogBox("Information", "Data restored.", 10);
    }
}

function save() {
    var arr = [];
    var notAllZero = false;
    for (var i = 0; i < pieces_obj.length; i++) {
        arr.push(pieces_obj[i].value);
        if (pieces_obj[i].value != 0) {
            notAllZero = true;
        }
    }
    var str = JSON.stringify(arr);

    if (notAllZero === true) {
        window.localStorage.setItem("piecesValues", str);
        showDialogBox("Information", "Data saved.", 10);
        $('#restore').prop('disabled', false);
    } else {
        showDialogBox("Information", "All inputs are empty.", 10);
    }
}

function saveAsPDF() {
    var data_obj = {
        denomination: new Array(),
        pieces: new Array(),
        amount: new Array()
    }
    for (var i = 0; i < pieces_obj.length; i++){
        if (pieces_obj[i].value != 0){
            data_obj.denomination.push(denomination_obj[i].textContent);
            data_obj.pieces.push(pieces_obj[i].value);
            data_obj.amount.push(amount_obj[i].textContent);
            notAllZero = true;
        }
    }
    
    window.sessionStorage.setItem("dataObj", JSON.stringify(data_obj));
    window.open("pdf_file.html", "_blank");
}


function showDialogBox(title, info, interval) {
    $('#dialogboxLongTitle').text(title);
    $('#dialogboxInfo').text(info);
    $('#dialogbox').modal('show');
    window.setInterval(function () {
        $('#dialogbox').modal('hide');
    }, interval * 1000);
}


function initMenuButtons() {
    if (window.localStorage.length == 0){
        $('#restore').prop('disabled', true);
    }

    var notAllZero = false;
    for (var i = 0; i < pieces_obj.length; i++){
        if (pieces_obj[i].value != 0){
            notAllZero = true;
        }
    }
    if (notAllZero === true) {
        $('#save-as-pdf').prop('disabled', false);
    } else{
        $('#save-as-pdf').prop('disabled', true);
    }
}