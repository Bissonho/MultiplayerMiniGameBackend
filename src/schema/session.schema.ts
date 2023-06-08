import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Player, PlayerSchema } from "./player.schema";
import { IPlayer } from "src/interface/player.interface";

@Schema()
export class Session extends Document {
  @Prop()
  name: string; 

  @Prop({ type: [PlayerSchema], default: [] })
  players: IPlayer[];
}

export const SessionSchema = SchemaFactory.createForClass(Session);