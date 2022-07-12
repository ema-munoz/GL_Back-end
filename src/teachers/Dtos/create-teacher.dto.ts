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
	// @MaxLength(10, {
	// 	message: "El número de cédula no puede tener más de 10 caracteres.",
	// }) //Maximo de 10
	// @MinLength(9, {
	// 	message: "El número de cédula no puede tener menos de 10 caracteres.",
	// }) //Minimo de 10
	readonly identityCard: number;

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
	// @MaxLength(10, {
	// 	message: "El número de telefono no puede tener más de 10 caracteres.",
	// }) //Maximo de 10
	// @MinLength(9, {
	// 	message: "El número de telofono no puede tener menos de 10 caracteres.",
	// }) //Minimo de 10
	readonly cellPhone: number;
}
