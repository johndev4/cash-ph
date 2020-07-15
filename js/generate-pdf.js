function generatePDF(data_obj) {
    const doc = new jsPDF();
    var pdfDate = getPdfDate();

    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.setFontSize(14);
    doc.text("Cash PH", 95, 15);
    doc.autoTable({
        styles: {
            font: 'courier',
            overflow: 'hidden',
            cellWidth: 'wrap'
        },
        margin: {
            horizontal: 15,
            vertical: 25
        },

        head: [["Denomination", "Pieces", "Amount"]],
        body: data_obj.rows,
        foot: data_obj.total
    });

    doc.save("cash-ph-" + pdfDate + ".pdf");
}

function getPdfDate() {
    const date = new Date();
    var month = parseInt(date.getMonth()) + 1;
    month = (month < 10)? '0'+month : month;
    var day = date.getDate();
    var year = date.getFullYear();

    return month + '-' + day + '-' + year;
}