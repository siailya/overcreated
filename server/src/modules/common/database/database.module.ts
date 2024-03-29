import {TypeOrmModule} from "@nestjs/typeorm";
import {Module} from "@nestjs/common";
import {ConfigModule, ConfigService} from "@nestjs/config";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('DB_HOST'),
                port: configService.get('DB_PORT'),
                username: configService.get('DB_USERNAME'),
                password: configService.get('DB_PASSWORD'),
                database: configService.get('DB_DATABASE_NAME'),
                entities: [],
                synchronize: true,
                autoLoadEntities: true
            })
        })
    ],
    exports: [TypeOrmModule]
})
export class DatabaseModule {
}
