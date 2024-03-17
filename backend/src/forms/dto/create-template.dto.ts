import { ApiProperty } from '@nestjs/swagger';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Form } from './form.dto';

export class CreateTemplateDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  @ValidateNested()
  @Type(() => Form)
  data: Form;
}
