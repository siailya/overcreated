import {ApiModel} from "./common/ApiModel";
import {Column} from "../decorators/Column";
import {Entity} from "../decorators/Entity";
import {IClearable} from "./common/IClearable";


@Entity()
export class Tech extends ApiModel implements IClearable {
    api = {path: "/portfolio/techs"}

    @Column()
    title!: string

    @Column()
    slug!: string

    clear() {
        this.title = ""
        this.slug = ""
    }
}
