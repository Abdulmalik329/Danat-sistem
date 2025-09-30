import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResipientService } from './resipient.service';
import { CreateResipientDto } from './dto/create-resipient.dto';
import { UpdateResipientDto } from './dto/update-resipient.dto';

@Controller('resipient')
export class ResipientController {
  constructor(private readonly resipientService: ResipientService) {}

  @Post()
  create(@Body() createResipientDto: CreateResipientDto) {
    return this.resipientService.create(createResipientDto);
  }

  @Get()
  findAll() {
    return this.resipientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resipientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResipientDto: UpdateResipientDto) {
    return this.resipientService.update(+id, updateResipientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resipientService.remove(+id);
  }
}
