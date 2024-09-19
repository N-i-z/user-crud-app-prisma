import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional({
    example: 'Jane Doe',
    description: 'The updated name of the user',
  })
  name?: string;

  @ApiPropertyOptional({
    example: 'jane.doe@example.com',
    description: 'The updated email of the user',
  })
  email?: string;

  @ApiPropertyOptional({
    example: false,
    description: 'Indicates if the user is active or not',
  })
  isActive?: boolean;
}
