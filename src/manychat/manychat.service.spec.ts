import { Test, TestingModule } from '@nestjs/testing';
import { ManychatService } from './manychat.service';

describe('ManychatService', () => {
  let service: ManychatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManychatService],
    }).compile();

    service = module.get<ManychatService>(ManychatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
