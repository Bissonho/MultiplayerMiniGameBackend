import { Document } from 'mongoose';

export interface IPlayer extends Document{
    readonly name: string;

    readonly score: number;
}


