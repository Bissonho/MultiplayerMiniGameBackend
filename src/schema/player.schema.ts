import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Player {
    @Prop()
    name: string;

    @Prop()
    score: number;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);