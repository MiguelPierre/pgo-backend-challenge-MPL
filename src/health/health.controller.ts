import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  check() {
    return { status: 'Everything is up!', timestamp: new Date().toISOString() };
  }
}
