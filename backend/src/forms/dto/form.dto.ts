import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  ValidateNested,
} from 'class-validator';

class Option {
  @IsNotEmpty()
  value: string;

  @IsNotEmpty()
  text: string;
}

class FormField {
  @IsNotEmpty()
  type:
    | 'email'
    | 'text'
    | 'number'
    | 'password'
    | 'select'
    | 'radio'
    | 'checkbox'
    | 'textarea';

  @IsNotEmpty()
  label: string;

  @IsNotEmpty()
  name: string;

  @IsOptional()
  placeholder?: string;

  @IsOptional()
  @IsNotEmpty()
  required?: boolean;

  @IsOptional()
  @ValidateNested({ each: true })
  options?: Option[];
}

class Section {
  @IsNotEmpty()
  sectionTitle: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FormField)
  formFields: FormField[];
}

export class Form {
  @IsNotEmpty()
  formTitle: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Section)
  sections: Section[];
}
