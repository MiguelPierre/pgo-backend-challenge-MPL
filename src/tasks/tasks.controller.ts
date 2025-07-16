import { Controller, Get, Post, Delete, Param, Body, Query, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  // TODO: Implement GET /tasks
  @Get()
  findAll(@Query('isDone') isDone?: string): Task[] {
    const done = isDone === 'true' ? true : isDone === 'false' ? false : undefined;
    return this.tasksService.findAll(done);
  }

  // TODO: Implement GET /tasks/:id
  @Get(':id')
  findOne(@Param('id') id: string): Task {
    return this.tasksService.findOne(id);
  }

  // TODO: Implement POST /tasks
  @Post()
  create(@Body() dto: CreateTaskDto): Task {
    return this.tasksService.create(dto);
  }

  // TODO: Implement DELETE /tasks/:id
  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.tasksService.delete(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTaskDto): Task {
    return this.tasksService.update(id, dto);
  }
}




