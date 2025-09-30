import { Injectable } from '@nestjs/common';
import { CreateResipientDto } from './dto/create-resipient.dto';
import { UpdateResipientDto } from './dto/update-resipient.dto';

@Injectable()
export class ResipientService {
  create(createResipientDto: CreateResipientDto) {
    return 'This action adds a new resipient';
  }

  findAll() {
    return `This action returns all resipient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resipient`;
  }

  update(id: number, updateResipientDto: UpdateResipientDto) {
    return `This action updates a #${id} resipient`;
  }

  remove(id: number) {
    return `This action removes a #${id} resipient`;
  }
}
