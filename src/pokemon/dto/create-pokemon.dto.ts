import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {
  @IsInt()
  @Min(1)
  @IsPositive({ message: 'Debe ser un numero positivo' })
  no: number;

  @IsString({ message: 'Debe ser un nombre valido' })
  @MinLength(1, { message: 'Debe contener al menos un caracter' })
  name: string;
}
