import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose';
import {ServeStaticModule} from '@nestjs/serve-static';
import {join} from 'path';
import configuration from "../config/configuration";
import {ApiController} from './api/api.controller';
import {TopicsModule} from "./topics/topics.module";
import {AuthService} from "./auth/auth.service";
import {JwtModule} from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, process.env.CLIENT_DIST),
      exclude: ['/api*'],
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    TopicsModule,
    JwtModule.register({secret: process.env.SECRET_KEY, signOptions: {expiresIn: process.env.JWT_EXPIRE}})
  ],
  providers: [AuthService],
  controllers: [ApiController],
})
export class AppModule {
}
