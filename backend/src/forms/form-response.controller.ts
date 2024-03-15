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
import { FormResponseService } from './services/form-response.service';
import { CreateFormResponseDto } from './dto/create-form-response.dto';

@ApiBearerAuth()
@ApiTags('form')
@UseGuards(AuthGuard)
@Controller('form')
export class FormResponseController {
  constructor(private readonly formResponseService: FormResponseService) {}

  @Post()
  create(
    @Body() createFormResponseDto: CreateFormResponseDto,
    @Request() req: RequestWithUserPayload,
  ) {
    const { user } = req;
    return this.formResponseService.create(
      createFormResponseDto.formId,
      user.sub,
    );
  }

  @Get()
  findAll() {
    return this.formResponseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formResponseService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() createFormResponseDto: CreateFormResponseDto,
  ) {
    return this.formResponseService.update(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formResponseService.remove(id);
  }
}
