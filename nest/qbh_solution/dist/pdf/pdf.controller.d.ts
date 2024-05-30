import { PdfService } from './pdf.service';
import { Response } from 'express';
export declare class PdfController {
    private readonly pdfService;
    constructor(pdfService: PdfService);
    getTestPdf(res: Response): Promise<void>;
}
