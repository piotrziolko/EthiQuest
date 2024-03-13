import { Module } from '@nestjs/common';
import { TemplateController } from './template.controller';
import { TemplateService } from './services/template-service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [TemplateController],
  providers: [TemplateService],
  exports: [],
})
export class FormsModule {}
