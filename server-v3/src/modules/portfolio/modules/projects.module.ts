import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProjectModel} from "../entities/project.model";
import {PictureModel} from "../../common/picture.model";
import {ProjectsService} from "../services/projects.service";
import {ProjectsResolver} from "../resolvers/projects.resolver";
import {ProjectsController} from "../controllers/projects.controller";
import {ProjectsAdminController} from "../controllers/projects.admin.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([ProjectModel, PictureModel]),
    ],
    exports: [TypeOrmModule],
    providers: [ProjectsService, ProjectsResolver],
    controllers: [ProjectsController, ProjectsAdminController]
})
export class ProjectsModule {
}
