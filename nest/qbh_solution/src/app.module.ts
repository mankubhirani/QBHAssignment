import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { PdfModule } from './pdf/pdf.module';

@Module({
  imports: [
   TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'qbhsolution',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),


    UserModule,
    PdfModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
