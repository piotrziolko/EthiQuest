import { Module } from '@nestjs/common';
import { TemplateController } from './template.controller';
import { TemplateService } from './services/template.service';
import { AuthModule } from '../auth/auth.module';
import { FormController } from './form.controller';
import { FormService } from './services/form.service';
import { FormResponseController } from './form-response.controller';
import { FormResponseService } from './services/form-response.service';

@Module({
  imports: [AuthModule],
  controllers: [TemplateController, FormController, FormResponseController],
  providers: [TemplateService, FormService, FormResponseService],
  exports: [],
})
export class FormsModule {}
