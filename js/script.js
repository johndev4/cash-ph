$(document).ajaxComplete(function() {
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

    update();



    $('.pieces').on('input', function() {
        if (this.value === ""){
            this.value = 0;
        }
        update();
    });

    $('.pieces').on('focus', function() {
        this.select();
    });



    $('#exit').click(function() {

        document.onkeypress = function(e) {
            alert(e.keyCode);
        }

        var e = document.createEvent('KeyboardEvent');
        e.initEvent('keypress', true, true)
        e.keyCode
        document.dispatchEvent(e);
    });

    

    $('#clear').click(function() {
        $('.pieces').val(0);
        update();
    });
});