import {BaseModel} from "../../../base/base.model";
import {Column, Entity, JoinTable, ManyToMany} from "typeorm";
import {PictureModel} from "../../common/picture.model";
import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType({description: 'Project'})
@Entity({name: 'projects'})
export class ProjectModel extends BaseModel {
    @Field(type => String)
    @Column({type: 'varchar', length: 255, nullable: false})
    title!: string

    @Field()
    @Column({type: 'varchar', length: 255, nullable: false})
    slug!: string

    @Field()
    @Column({type: 'varchar', length: 7, nullable: false})
    color!: string

    @Field()
    @Column({type: 'boolean', default: false})
    isVisible: boolean

    // @Column()
    // topics: string[]
    //
    // @Column()
    // techs: string[]

    @Field()
    @Column({type: 'varchar', length: 1024, nullable: false})
    description!: string

    @Field({nullable: true})
    @Column({type: 'text', nullable: true})
    fullDescription?: string

    @Field(type => [PictureModel], {nullable: true})
    @ManyToMany(() => PictureModel)
    @JoinTable()
    pictures?: PictureModel[]

    @Field({nullable: true})
    @Column({type: 'varchar', length: 4096, nullable: true})
    link?: string

    @Field({nullable: true})
    @Column({type: 'varchar', length: 4096, nullable: true})
    github?: string

    @Field({nullable: true})
    @Column({type: 'varchar', length: 4096, nullable: true})
    behance?: string

    @Field({nullable: true})
    @Column({type: 'integer', nullable: true})
    developTime?: number
}
