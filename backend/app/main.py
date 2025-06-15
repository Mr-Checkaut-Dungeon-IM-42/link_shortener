import datetime

import fastapi
from pydantic import HttpUrl

from app.models.short import Short

app = fastapi.FastAPI()


@app.get(
    "/user/url/new",
    summary="Create a new shortened URL (Short)",
    description="Creates a new Short with random ID",
    status_code=fastapi.status.HTTP_201_CREATED,
    responses={
        "201": {"description": "URL shortened successfully"},
    },
)
async def create_new_short(url: HttpUrl) -> Short:
    return Short(
        full_url=url,
        id="sample_id",
        created_at=datetime.datetime.now(),
        valid_for=datetime.timedelta(hours=24),
    )


@app.get(
    "/user/url/list",
    summary="Get all user Shorts",
    description="Retrieves all currently valid Short objects created by the user",
    responses={
        "200": {"description": "Success"},
        "401": {"description": "Invalid permissions"},
    },
)
async def get_user_shorts() -> list[Short]:
    return []
