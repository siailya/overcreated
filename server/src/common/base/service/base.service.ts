import {BadGatewayException, Injectable} from '@nestjs/common';
import {FindOptionsWhere, Repository} from 'typeorm';
import {IBaseService} from '../interface/IBase.service';
import {BaseModel} from '../base.model';
import {GetAllParamsDto} from "../controller/dto/getAll.params.dto";

@Injectable()
export class BaseService<M extends BaseModel> implements IBaseService<M> {
    constructor(protected readonly repository: Repository<M>) {
    }

    create(entity: M): Promise<M> {
        return this.repository.save(entity)
    }

    getAll(getAllParams: GetAllParamsDto): Promise<Array<M>> {
        // @ts-ignore
        return this.repository.find({where: {}, ...getAllParams} as FindOptionsWhere<M>);
    }

    getAllVisible(getAllParams: GetAllParamsDto): Promise<Array<M>> {
        // FIXME: isVisible нет в базовой модели,
        //  нужно вынести метод в интерфейс и реализовать в сервисах и контроллерах
        // @ts-ignore
        return this.repository.find({where: {isVisible: true}, ...getAllParams});
    }

    get(id: string): Promise<M> {
        return this.repository.findOneBy({id: id} as FindOptionsWhere<M>);
    }

    getVisible(id: string): Promise<M> {
        // FIXME: isVisible нет в базовой модели,
        //  нужно вынести метод в интерфейс и реализовать в сервисах и контроллерах
        // @ts-ignore
        return this.repository.findOne({where: {id: id, isVisible: true}});
    }

    delete(id: string): Promise<void> {
        try {
            return new Promise(resolve => {
                this.repository.delete(id).then(() => resolve)
            })
        } catch (error) {
            throw new BadGatewayException(error);
        }
    }

    update(entity: M): Promise<M> {
        return this.repository.save(entity)
    }
}
