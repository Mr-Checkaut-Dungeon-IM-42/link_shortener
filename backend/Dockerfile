FROM ghcr.io/astral-sh/uv:0.7.12-python3.13-alpine

ADD . /app/backend
WORKDIR /app/backend

ENV UV_COMPILE_BYTECODE=1
ENV UV_LINK_MODE=copy

RUN uv sync --locked

CMD ["uv", "run", "fastapi", "run", "src/main.py"]
