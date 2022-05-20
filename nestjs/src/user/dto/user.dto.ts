import { IsNotEmpty, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'É necessário informar o ID' })
  readonly id: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'É necessário informar o nome' })
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'É necessário informar a idade' })
  @Min(18, { message: 'É necessário informar uma idade maior que 18' })
  readonly age: number;
}
