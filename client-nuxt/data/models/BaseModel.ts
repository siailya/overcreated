export abstract class BaseModel {
    id!: string

    constructor(id: string = null as unknown as string) {
        this.id = id
    }

    public fromJSON(json: object): this {
        const unknownJson: unknown = json;
        const __metadata = Reflect.getMetadata("columns", this.constructor)

        if (unknownJson === null ||
            Array.isArray(unknownJson) ||
            typeof unknownJson !== "object") {

            return this
        }

        for (const thisProp in this) {
            if (thisProp === "api") continue

            const _propMetadata = __metadata[thisProp]
            const _propType = _propMetadata?.type
            const _propValue = (unknownJson as any)[thisProp] ?? _propMetadata?.defaultValue

            if (_propType) {
                if (Array.isArray(_propValue)) {
                    this[thisProp] = _propValue.map((item: any) => new _propType[0]().fromJSON(item)) as any
                } else if (_propValue !== undefined && _propType !== String) {
                    this[thisProp] = new _propType(_propValue)
                }
            } else {
                this[thisProp] = _propValue
            }
        }

        return this
    }

    get json() {
        const __metadata = Reflect.getMetadata("columns", this.constructor)
        const json: any = {}

        for (const thisProp in this) {
            if (thisProp === "api") continue

            const _propMetadata = __metadata[thisProp]
            const _propType = _propMetadata?.type
            const _propValue = this[thisProp]

            if (_propMetadata?.excludeFromJSON) continue

            if (_propType) {
                if (Array.isArray(_propValue)) {
                    json[thisProp] = _propValue.map((item: any) => item.json)
                } else {
                    json[thisProp] = _propValue
                }
            } else {
                json[thisProp] = _propValue
            }
        }

        return json
    }

    toJSON() {
        return this.json
    }
}
