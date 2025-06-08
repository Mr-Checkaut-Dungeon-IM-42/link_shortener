import fastapi

app = fastapi.FastAPI()


@app.get("/")
async def root_handler():
    return "Hello, world!"
