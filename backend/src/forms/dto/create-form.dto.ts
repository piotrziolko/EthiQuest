import { ApiProperty } from '@nestjs/swagger';

export class CreateFormDto {
  @ApiProperty()
  templateId: string;

  @ApiProperty()
  startDate: Date | null;

  @ApiProperty()
  endDate: Date | null;
}
