import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SessionSchema } from './schema/session.schema';
import { SessionService } from './service/player/session.service';
import { SessionController } from './controller/player/session.controller';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://pbissonho:paulo1234@cluster0.f0puqtd.mongodb.net/?retryWrites=true&w=majority?directConnection=true",  {
  }, ),
  MongooseModule.forFeature([{ name: 'Session', schema: SessionSchema }])],
  
  controllers: [SessionController],
  providers: [SessionService],
})
export class AppModule {}


