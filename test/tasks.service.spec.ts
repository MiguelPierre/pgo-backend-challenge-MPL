import { TasksService } from '../src/tasks/tasks.service';
import { CreateTaskDto } from '../src/tasks/dto/create-task.dto';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(() => {
    service = new TasksService();
  });

  it('should create a task', () => {
    const dto: CreateTaskDto = { title: 'Test', description: 'Test desc' };
    const task = service.create(dto);
    expect(task).toHaveProperty('id');
    expect(task.title).toBe(dto.title);
    expect(task.description).toBe(dto.description);
    expect(task.isDone).toBe(false);
  });

  it('should get all tasks', () => {
    const dto: CreateTaskDto = { title: 'Task1', description: 'Desc1' };
    service.create(dto);
    const tasks = service.findAll();
    expect(tasks.length).toBe(1);
  });

  it('should throw when deleting non-existent task', () => {
    expect(() => service.delete('fake-id')).toThrow();
  });
});