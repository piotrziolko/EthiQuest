import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  Matches,
  Max,
  MaxLength,
  Min,
  ValidateIf,
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
  type: string;

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

  @ValidateIf((o) => o.type === 'email')
  @IsEmail()
  email?: string;

  @ValidateIf((o) => o.type === 'text')
  @MaxLength(255)
  text?: string;

  @ValidateIf((o) => o.type === 'number')
  @Min(0)
  @Max(100)
  number?: number;

  @ValidateIf((o) => o.type === 'password')
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message:
      'Hasło musi zawierać co najmniej 8 znaków, w tym jedną literę i jedną cyfrę',
  })
  password?: string;
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
