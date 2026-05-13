from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


class TodoCreate(BaseModel):
    title: str
    completed: bool = False


class Todo(TodoCreate):
    id: int


app = FastAPI(title="Preboard FastAPI Practice")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

todos = [
    Todo(id=1, title="Learn FastAPI", completed=True),
    Todo(id=2, title="Connect React to API", completed=False),
]


@app.get("/todos", response_model=list[Todo])
def get_todos():
    return todos


@app.post("/todos", response_model=Todo, status_code=201)
def create_todo(todo: TodoCreate):
    new_todo = Todo(id=len(todos) + 1, **todo.model_dump())
    todos.append(new_todo)
    return new_todo
