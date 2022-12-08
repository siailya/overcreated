import {Controller} from "@nestjs/common";
import {ProjectModel} from "../entities/project.model";
import {BaseCRUDController} from "../../../common/base/controller/baseCRUD.controller";
import {ProjectsAdminService} from "../services/projects.admin.service";

@Controller('api/v3/admin/portfolio/projects')
export class ProjectsAdminController extends BaseCRUDController<ProjectModel> {
    constructor(private readonly projectsService: ProjectsAdminService) {
        super(projectsService)
    }
}
