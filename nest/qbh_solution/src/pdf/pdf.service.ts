import PdfPrinter from 'pdfmake';
import { Injectable } from '@nestjs/common';

import { TDocumentDefinitions } from 'pdfmake/interfaces';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class PdfService {
  private readonly fonts: any;
  private readonly printer: PdfPrinter;

  constructor() {
    this.fonts = {
      Roboto: {
        normal: path.join(__dirname, '..', 'fonts', 'Roboto-Regular.ttf'),
        bold: path.join(__dirname, '..', 'fonts', 'Roboto-Bold.ttf'),
        italics: path.join(__dirname, '..', 'fonts', 'Roboto-Italic.ttf'),
        bolditalics: path.join(__dirname, '..', 'fonts', 'Roboto-BoldItalic.ttf'),
      },
    };
    this.printer = new PdfPrinter(this.fonts);
  }

  createPdf(docDefinition: TDocumentDefinitions): Buffer {
    const pdfDoc = this.printer.createPdfKitDocument(docDefinition);
    const chunks: Buffer[] = [];
    pdfDoc.on('data', (chunk) => {
      chunks.push(chunk);
    });
    pdfDoc.end();
    return Buffer.concat(chunks);
  }
}
