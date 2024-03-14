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
import { CreateTemplateDto } from './dto/create-template.dto';
import { TemplateService } from './services/template.service';
import { RequestWithUserPayload } from '../auth/dto/request-with-user.payload';
import { AuthGuard } from '../auth/guards/auth.guard';

@ApiBearerAuth()
@ApiTags('template')
@UseGuards(AuthGuard)
@Controller('template')
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}

  @Post()
  create(
    @Body() createTemplateDto: CreateTemplateDto,
    @Request() req: RequestWithUserPayload,
  ) {
    const { user } = req;
    return this.templateService.create(
      createTemplateDto.name,
      createTemplateDto.data,
      user.sub,
    );
  }

  @Get()
  findAll() {
    return this.templateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.templateService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTemplateDto: CreateTemplateDto,
  ) {
    return this.templateService.update(
      id,
      updateTemplateDto.name,
      updateTemplateDto.data,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.templateService.remove(id);
  }
}
