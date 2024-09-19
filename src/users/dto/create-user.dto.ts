import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'The name of the user',
    required: true,
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'The email of the user',
    required: true,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: true,
    description: 'Indicates if the user is active',
    required: false,
    default: true,
  })
  @IsOptional()
  isActive?: boolean;
}
