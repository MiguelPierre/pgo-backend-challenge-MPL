import { Module } from '@nestjs/common';
import { HealthController } from './health/health.controller';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';

@Module({
  imports: [],
  controllers: [HealthController, TasksController],
  providers: [TasksService],
})
export class AppModule {}