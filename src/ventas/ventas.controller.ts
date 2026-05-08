import { Controller, Get, Post, Body } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { Venta } from './entities/venta.entity';

@Controller('ventas')
export class VentasController {
  constructor(private readonly ventasService: VentasService) {}

  @Post()
  crear(@Body() datos: Partial<Venta>) {
    return this.ventasService.crearVenta(datos);
  }

  @Get()
  listar() {
    return this.ventasService.obtenerTodas()
  }
}