import { Test, TestingModule } from '@nestjs/testing';
import { MetaEventsService } from './meta-events.service';

describe('MetaEventsService', () => {
  let service: MetaEventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetaEventsService],
    }).compile();

    service = module.get<MetaEventsService>(MetaEventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
