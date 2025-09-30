import { Module } from '@nestjs/common';
import { ResipientService } from './resipient.service';
import { ResipientController } from './resipient.controller';

@Module({
  controllers: [ResipientController],
  providers: [ResipientService],
})
export class ResipientModule {}
