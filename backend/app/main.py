import datetime
from contextlib import asynccontextmanager

import fastapi
from pydantic import HttpUrl

from app import cache
from app.models.short import SHORT_TTL, ShortJSON, ShortResponse


@asynccontextmanager
async def lifespan(app: fastapi.FastAPI):
    await on_startup(app)
    yield
    await on_shutdown(app)


async def on_startup(app: fastapi.FastAPI):
    await cache.init()


async def on_shutdown(app: fastapi.FastAPI):
    pass


app = fastapi.FastAPI(lifespan=lifespan)


@app.get(
    "/user/url/new",
    summary="Create a new shortened URL (Short)",
    description="Creates a new Short with random ID",
    status_code=fastapi.status.HTTP_201_CREATED,
    response_model=ShortResponse,
    responses={
        "201": {"description": "URL shortened successfully"},
    },
)
async def create_new_short(url: HttpUrl) -> ShortJSON:
    new_short = ShortJSON(
        full_url=str(url),
        id=ShortJSON.generate_id(),
        created_at=datetime.datetime.now(),
        valid_for=SHORT_TTL,
    )
    await new_short.save()
    return new_short


@app.get(
    "/user/url/list",
    summary="Get all user Shorts",
    description="Retrieves all currently valid Short objects created by the user",
    # response_model=list[ShortResponse],
    responses={
        "200": {"description": "Success"},
        "401": {"description": "Invalid permissions"},
    },
)
async def get_user_shorts() -> list[ShortJSON]:
    # FIX: like literally what the hell do you even return
    all_shorts = list(await ShortJSON.find().all() or [])
    return all_shorts  # type: ignore
