import {BaseModel} from "../base.model";
import {IReadController} from "./IRead.controller";
import {Get, Param} from "@nestjs/common";
import {IBaseService} from "../service/IBase.service";


export class ReadController<M extends BaseModel> implements IReadController<M> {
    constructor(private readonly IBaseService: IBaseService<M>) {}

    @Get()
    async getAll(): Promise<M[]> {
        return this.IBaseService.getAll()
    }

    @Get(':id')
    async get(@Param('id') id: string): Promise<M> {
        return this.IBaseService.get(id)
    }
}
