import { Test, TestingModule } from '@nestjs/testing';
import { AccionCorrectivaService } from './accion_correctiva.service';

describe('AccionCorrectivaService', () => {
  let service: AccionCorrectivaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccionCorrectivaService],
    }).compile();

    service = module.get<AccionCorrectivaService>(AccionCorrectivaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
