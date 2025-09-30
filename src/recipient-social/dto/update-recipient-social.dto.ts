import { PartialType } from '@nestjs/mapped-types';
import { CreateRecipientSocialDto } from './create-recipient-social.dto';

export class UpdateRecipientSocialDto extends PartialType(CreateRecipientSocialDto) {}
