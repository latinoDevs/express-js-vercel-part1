import { Test, TestingModule } from '@nestjs/testing';
import { SlacjService } from './slacj.service';

describe('SlacjService', () => {
  let service: SlacjService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SlacjService],
    }).compile();

    service = module.get<SlacjService>(SlacjService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
