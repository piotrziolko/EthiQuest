import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  Param,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RequestWithUserPayload } from '../auth/dto/request-with-user.payload';
import { AuthGuard } from '../auth/guards/auth.guard';
import { FormService } from './services/form.service';
import { CreateFormDto } from './dto/create-form.dto';

@ApiBearerAuth()
@ApiTags('form')
@UseGuards(AuthGuard)
@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  create(
    @Body() createFormDto: CreateFormDto,
    @Request() req: RequestWithUserPayload,
  ) {
    const { user } = req;
    return this.formService.create(
      createFormDto.templateId,
      user.sub,
      createFormDto.startDate,
      createFormDto.endDate,
    );
  }

  @Get()
  findAll() {
    return this.formService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() createFormDto: CreateFormDto) {
    return this.formService.update(
      id,
      createFormDto.startDate,
      createFormDto.endDate,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formService.remove(id);
  }
}
