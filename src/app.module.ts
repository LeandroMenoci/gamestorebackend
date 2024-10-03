import {  Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [ProdutoModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
}
