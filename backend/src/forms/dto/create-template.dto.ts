import { ApiProperty } from '@nestjs/swagger';

export class CreateTemplateDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  data: Record<string, any>;
}
