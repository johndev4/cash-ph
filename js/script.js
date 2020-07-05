$(document).ajaxSuccess(function() {
    update();

    //Pieces Object Event Listener
    $('.pieces').on('input', function() {
        if (this.value === ""){
            this.value = 0;
        }
        update();
    });

    $('.pieces').on('focus', function() {
        this.select();
    });


    //Menu
    $('#restore').click(function() {
        restore();
    });

    $('#save').click(function() {
        save();
    });

    $('#save-as-pdf').click(function() {

    });

    $('#exit').click(function() {
        window.history.back();
    });
    
    
    //Edit
    $('#clear').click(function() {
        $('.pieces').val(0);
        update();
    });
});


const denomination_obj = document.getElementsByClassName('denom-val-holder')
const pieces_obj = document.getElementsByClassName('pieces');
const amount_obj = document.getElementsByClassName('amount');

function update() {
    var total = 0;

    for (var i = 0; i < pieces_obj.length; i+=1){
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
    if (localStorage.length > 0){
        var arr = JSON.parse(localStorage.getItem("piecesValues"));
    } else{
        showDialogBox("Information", "There is no saved data.", 3);
    }
}

function save() {
    var arr = [];
    var notAllZero = false;
    for (var i = 0; i < pieces_obj.length; i++){
        arr.push(pieces_obj[i].value);
        if (pieces_obj[i].value != 0){
            notAllZero = true;
        }
    }
    var str = JSON.stringify(arr);

    if (notAllZero === true){
        window.localStorage.setItem("piecesValues", str);
        showDialogBox("Information", "Data succefully saved.", 3);
    } else{
        showDialogBox("Information", "All inputs are empty.", 3);
    }
}

function showDialogBox(title, info, interval) {
    $('#dialogboxLongTitle').text(title);
    $('#dialogboxInfo').text(info);
    $('#dialogbox').modal('show');
    window.setInterval(function() {
        $('#dialogbox').modal('hide');
    }, interval*1000);
}