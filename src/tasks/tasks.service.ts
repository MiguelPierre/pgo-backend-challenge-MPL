import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksService {

  // TODO: Add in-memory storage
  private tasks: Task[] = [];

  // TODO: Implement findAll()
  findAll(isDone?: boolean): Task[] {
    if (isDone !== undefined) {
      return this.tasks.filter(task => task.isDone === isDone);
    }
    return this.tasks;
  }

  // TODO: Implement findOne()
  findOne(id: string): Task {
    const task = this.tasks.find(t => t.id === id);
    if (!task) throw new NotFoundException(`Task with ID ${id} not found`);
    return task;
  }

  // TODO: Implement create()
  create(dto: CreateTaskDto): Task {
    const task: Task = {
      id: uuidv4(),
      title: dto.title,
      description: dto.description,
      isDone: false
    };
    this.tasks.push(task);
    return task;
  }

  // TODO: Implement delete()
  delete(id: string): void {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index === -1) throw new NotFoundException(`Task with ID ${id} not found`);
    this.tasks.splice(index, 1);
  }

  // TODO: Implement update()
  update(id: string, dto: UpdateTaskDto): Task {
    const task = this.findOne(id);
    if (dto.title !== undefined) task.title = dto.title;
    if (dto.description !== undefined) task.description = dto.description;
    if (dto.isDone !== undefined) task.isDone = dto.isDone;
    return task;
  }
}