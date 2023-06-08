import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { ISession } from 'src/interface/session.interface';
import { CreateSessionDto } from 'src/dto/create-session.dto';

@Injectable()
export class SessionService {
    constructor(@InjectModel('Session') private sessionModel: Model<ISession>) { }

    async createSession(createPlayerDto: CreateSessionDto): Promise<ISession> {
        const newPlayer = await new this.sessionModel(createPlayerDto);
        return newPlayer.save();
    }

    async getAllSessions(): Promise<ISession[]> {
        const playerData = await this.sessionModel.find();
        if (!playerData || playerData.length == 0) {
            throw new NotFoundException('Sessions data not found!');
        }
        return playerData;
    }

    async getLeaderboard(): Promise<any> {
        const leaderboard = await this.sessionModel.aggregate([
            // Unwind the players array to create a separate document for each player
            { $unwind: "$players" },
            // Group the players by their name and find the maximum score for each player
            {
              $group: {
                _id: "$players.name",
                maxScore: { $max: "$players.score" },
              },
            },
            // Sort the players by their maximum score in descending order
            { $sort: { maxScore: -1 } },
            {
              $project: {
                _id: 0,
                name: "$_id",
                maxScore: 1,
              },
            },
          ]);

          return leaderboard;
    }
}
