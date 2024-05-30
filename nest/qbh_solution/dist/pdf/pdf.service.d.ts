/// <reference types="node" />
import { TDocumentDefinitions } from 'pdfmake/interfaces';
export declare class PdfService {
    private readonly fonts;
    private readonly printer;
    constructor();
    createPdf(docDefinition: TDocumentDefinitions): Buffer;
}
