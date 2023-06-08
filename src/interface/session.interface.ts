import { Document } from 'mongoose';
import { IPlayer } from './player.interface';

export interface ISession extends Document{
    name: string; 

    players: IPlayer[];
}


