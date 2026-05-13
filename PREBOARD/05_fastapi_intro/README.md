# 05 - FastAPI Introduction

## Done When Goal

Build a FastAPI app with one GET route, one POST route, Pydantic models, CORS, and `/docs`.

## Run It

```bash
cd PREBOARD/05_fastapi_intro
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

Open these URLs:

- API docs: <http://127.0.0.1:8000/docs>
- GET route: <http://127.0.0.1:8000/todos>

Use `/docs` to test the POST `/todos` route with this JSON:

```json
{
  "title": "Practice POST requests",
  "completed": false
}
```
