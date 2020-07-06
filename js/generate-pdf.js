function generatePDF(data_obj) {
    const doc = new jsPDF();
    const date = new Date();
    var addOnMonth = (date.getDate() < 10) ? "0" : "";
    var addOnDate = (date.getDate() < 10) ? "0" : "";
    var pdfDate = addOnMonth + date.getMonth() + "-" + addOnDate + date.getDate() + "-" + date.getFullYear();

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