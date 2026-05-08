import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Venta } from './entities/venta.entity';

@Injectable()
export class VentasService {
  constructor(
    @InjectRepository(Venta)
    private ventaRepository: Repository<Venta>,
  ) {}

  async crearVenta(datosVenta: Partial<Venta>): Promise<Venta> {
  if (!datosVenta.ingreso_total && datosVenta.cantidad_vendida && datosVenta.precio_unitario){
    datosVenta.ingreso_total = datosVenta.cantidad_vendida * datosVenta.precio_unitario;
  }
  const nuevaVenta = this.ventaRepository.create(datosVenta);
  return await this.ventaRepository.save(nuevaVenta);
}

async obtenerTodas(): Promise<Venta[]>{
  return await this.ventaRepository.find()
}
}