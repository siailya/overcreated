import {Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards} from '@nestjs/common';
import {ProjectDto} from './dto/project.dto';
import {ProjectsService} from "./projects.service";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller('api/projects')
export class ProjectsController {
  constructor(
    private readonly projectsService: ProjectsService
  ) {
  }


  @Get('get/:id?')
  async get(
    @Param('id') id: string = null,
    @Query('onlyVisible') onlyVisible: string = 'true',
    @Query('filter') filter: string = "",
    @Query('populate') populate: string = null
  ) {
    return await this.projectsService.get(
      id,
      onlyVisible === 'true',
      filter ? filter.split(",") : [],
      populate === 'true')
  }

  @Get('getBySlug/:slug')
  async getBySlug(
    @Param('slug') slug: string = null,
    @Query('populate') populate: string = null
  ) {
    return await this.projectsService.getBySlug(slug, populate === 'true')
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async create(@Body() createProjectDto: ProjectDto) {
    return await this.projectsService.create(createProjectDto)
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete/:id')
  async delete(@Param('id') topicId: string) {
    await this.projectsService.delete(topicId)
  }

  @UseGuards(JwtAuthGuard)
  @Patch('update/:id')
  async update(@Param('id') topicId: string, @Body() projectDto: ProjectDto) {
    return await this.projectsService.update(topicId, projectDto)
  }
}
