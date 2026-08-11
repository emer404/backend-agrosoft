import { Test, TestingModule } from '@nestjs/testing';
import { AccionCorrectivaController } from './accion_correctiva.controller';
import { AccionCorrectivaService } from './accion_correctiva.service';

describe('AccionCorrectivaController', () => {
  let controller: AccionCorrectivaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccionCorrectivaController],
      providers: [AccionCorrectivaService],
    }).compile();

    controller = module.get<AccionCorrectivaController>(
      AccionCorrectivaController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
