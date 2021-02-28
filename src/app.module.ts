import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './infrastructure/configs/mongoose-config.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({useClass: MongooseConfigService})
  ],
})
export class AppModule {}