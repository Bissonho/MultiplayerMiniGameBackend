import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateSessionDto } from 'src/dto/create-session.dto';
import { SessionService } from 'src/service/player/session.service';

@Controller('session')
export class SessionController {
    constructor(private readonly sessionService: SessionService) { }

    @Post()
    async createSession(@Res() response, @Body() createPlayerDto: CreateSessionDto) {
        const session = await this.sessionService.createSession(createPlayerDto);
        return response.status(HttpStatus.CREATED).json({
            message: 'Session has been created successfully',
            session,
        });
    }

    
    @Get()
    async getSessions(@Res() response) {
        const sessions = await this.sessionService.getAllSessions();
            return response.status(HttpStatus.OK).json({
                message: 'All sessions data found successfully',
                sessions,
            });
    }

    @Get('leaderboard')
    async getLeaderboard(@Res() response) {
        const players = await this.sessionService.getLeaderboard();
            return response.status(HttpStatus.OK).json({
                message: 'Leaderboard data found successfully',
                players,
            });
    }
}
