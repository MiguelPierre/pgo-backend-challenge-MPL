# 🧪 Prueba Técnica Backend

Desarrollo de una pequeña API REST para gestionar tareas (ToDo List).

### Incluyendo:

- Rutas en el controlador:
  - `GET /tasks`: devuelve todas las tareas
  - `POST /tasks`: crea una nueva tarea
  - `GET /tasks/:id`: devuelve una tarea por su ID
  - `DELETE /tasks/:id`: borrar una tarea por su ID
- Servicio que gestione la lógica (almacenamiento en memoria)
- Cada tarea tiene:
  - `id`: string o number
  - `title`: string
  - `description`: string
  - `isDone`: boolean

---

### 🧠 Extras:

- Validaciones con `class-validator`
- Uso de DTOs
- Filtro: `GET /tasks?isDone=true`
- Control de errores por ejemplo, al intentar borrar una tarea que no existe, se devuelve un mensaje claro indicando que la tarea no fue encontrada
- Implementación de un método update que permite modificar los campos title, description e isDone de una tarea existente.
- Persistencia en un array simulado (sin base de datos)
- Tests unitarios básicos

---
