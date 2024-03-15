import { ApiProperty } from '@nestjs/swagger';

export class CreateFormResponseDto {
  @ApiProperty()
  formId: string;
}
