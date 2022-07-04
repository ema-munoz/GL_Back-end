import {
	IsString,
	IsNumber,
	MaxLength,
	MinLength,
	IsEmail,
	IsNotEmpty,
	IsPositive,
} from "class-validator";

export class CreateTeacherDto {
	@IsNotEmpty() //El campo no este vacio
	@IsNumber() //El campo es numerico
	@IsPositive() //El campo sea positivo
	@MaxLength(10) //Maximo de 10
	@MinLength(10) //Minimo de 10
	readonly identityCard: string;

	@IsNotEmpty() //El campo no este vacio
	@IsString() //El campo de texto
	readonly names: string;

	@IsNotEmpty() //El campo no este vacio
	@IsString() //El campo de texto
	readonly lastNames: string;

	@IsNotEmpty() //El campo no este vacio
	@IsEmail() //El campo acepta correo
	readonly institutionalMail: string;

	@IsNotEmpty() //El campo no este vacio
	@IsNumber() //El campo es numerico
	@IsPositive() //El campo sea positivo
	@MaxLength(10) //Maximo de 10
	@MinLength(10) //Minimo de 10
	readonly cellPhone: number;
}
