"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CultivosService = void 0;
const common_1 = require("@nestjs/common");
let CultivosService = class CultivosService {
    create(createCultivoDto) {
        return 'This action adds a new cultivo';
    }
    findAll() {
        return `This action returns all cultivos`;
    }
    findOne(id) {
        return `This action returns a #${id} cultivo`;
    }
    update(id, updateCultivoDto) {
        return `This action updates a #${id} cultivo`;
    }
    remove(id) {
        return `This action removes a #${id} cultivo`;
    }
};
exports.CultivosService = CultivosService;
exports.CultivosService = CultivosService = __decorate([
    (0, common_1.Injectable)()
], CultivosService);
