"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCultivoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_cultivo_dto_1 = require("./create-cultivo.dto");
class UpdateCultivoDto extends (0, mapped_types_1.PartialType)(create_cultivo_dto_1.CreateCultivoDto) {
}
exports.UpdateCultivoDto = UpdateCultivoDto;
