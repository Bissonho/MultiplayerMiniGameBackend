import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { CreatePlayerDto } from "./create-player.dto";

export class CreateSessionDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    readonly players: CreatePlayerDto[];
}