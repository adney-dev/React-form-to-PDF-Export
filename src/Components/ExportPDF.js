import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import PDFData from "./PDFData.js";

const ExportPDF = () => {

    const exportPdf = () => {
        const input = document.getElementById("pdf-element");
        html2canvas(input).then((canvas) => {
            var imgData = canvas.toDataURL("image/png");
            var imgWidth = 210;
            var pageHeight = 295;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var pdf = new jsPDF('p', 'mm');
            var position = 0;

            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (parseInt(heightLeft) > 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            pdf.save("SLAP.pdf");
        });
    };

    return (
        <div>
            <button type="button" className="btn-reports-submit" onClick={() => exportPdf()}>
                Download PDF 
            </button>  
            <PDFData />
        </div>
    );
}

export default ExportPDF;