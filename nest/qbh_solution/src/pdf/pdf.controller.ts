import { Controller, Get, Res } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { Response } from 'express';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Get('test')
  async getTestPdf(@Res() res: Response) {
    const docDefinition = {
      content: [
        { text: 'This is a test PDF', style: 'header' },
        { text: 'Using pdfmake in NestJS' },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
      },
    };
    const pdfBuffer = this.pdfService.createPdf(docDefinition);
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=test.pdf',
      'Content-Length': pdfBuffer.length,
    });
    res.end(pdfBuffer);
  }
}
