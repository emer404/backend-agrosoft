"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const cats_module_1 = require("./cats/cats.module");
const typeorm_1 = require("@nestjs/typeorm");
const insumos_module_1 = require("./insumos/insumos.module");
const cultivos_module_1 = require("./cultivos/cultivos.module");
const usuarios_module_1 = require("./usuarios/usuarios.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cats_module_1.CatsModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3307,
                username: 'user_crudagro',
                password: 'agro123',
                database: 'db_crudagro',
                autoLoadEntities: true,
                synchronize: true,
            }),
            insumos_module_1.InsumosModule,
            cultivos_module_1.CultivosModule,
            usuarios_module_1.UsuariosModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
