import { Module } from '@nestjs/common';
import { TemplateController } from './template.controller';
import { TemplateService } from './services/template.service';
import { AuthModule } from '../auth/auth.module';
import { FormController } from './form.controller';
import { FormService } from './services/form.service';

@Module({
  imports: [AuthModule],
  controllers: [TemplateController, FormController],
  providers: [TemplateService, FormService],
  exports: [],
})
export class FormsModule {}
