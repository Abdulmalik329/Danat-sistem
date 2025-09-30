import { PartialType } from '@nestjs/mapped-types';
import { CreateResipientDto } from './create-resipient.dto';

export class UpdateResipientDto extends PartialType(CreateResipientDto) {}
