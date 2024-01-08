import { HTMLTemplate } from '../utils/ClaimingSlipTemplate'
import JsPDF from 'jspdf';
import html2canvas from 'html2canvas'
import { format } from 'date-fns';

const createPDF = async (form) => {

    const htmlString = HTMLTemplate(form);

    let iframe = document.createElement("iframe");
    iframe.style.visibility = "hidden";
    document.body.appendChild(iframe);
    let iframedoc = iframe.contentDocument || iframe.contentWindow.document;
    iframedoc.body.innerHTML = htmlString;

    let canvas = await html2canvas(iframedoc.body, {});

    let imgData = canvas.toDataURL("image/png");
    document.body.removeChild(iframe);

    const doc = new JsPDF({
        format: "a4",
        unit: "mm",
    });

    doc.addImage(imgData, "PNG", 0, 0, 220, 250);
    doc.save(`claiming_slip_${Date.now()}`);
}

export {
    createPDF
}