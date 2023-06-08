import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreatePlayerDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;

    @IsNumber()
    @IsNotEmpty()
    readonly score: number;
}