import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export default class SendContactMailDto {
  @IsNotEmpty({ message: 'Vous devez fournir votre prénom.' })
  @IsString({ message: 'Le prénom doit etre une chaine de caractères.' })
  firstname: string;

  @IsNotEmpty({ message: 'Vous devez fournir votre nom.' })
  @IsString({ message: 'Le nom doit etre une chaine de caractères.' })
  lastname: string;

  @IsNotEmpty({ message: 'Vous devez fournir une adresse email.' })
  @IsString({ message: "L'email doit etre une chaine de caracteres." })
  @IsEmail({}, { message: 'Entrer une adresse email valide.' })
  email: string;

  @IsNotEmpty({ message: 'Vous devez fournir un numéro de téléphone.' })
  @IsString({
    message: 'Le numéro de téléphone doit etre une chaine de caracteres.',
  })
  phone: string;

  @IsOptional()
  @IsString({
    message: 'Le sujet doit etre une chaine de caracteres.',
  })
  subject: string;

  @IsNotEmpty({ message: 'Vous devez fournir votre message.' })
  @IsString({
    message: 'Le message doit etre une chaine de caracteres.',
  })
  message: string;
}
