import os

import redis.asyncio as redis
from aredis_om import Migrator

REDIS_HOST = os.environ["REDIS_HOST"]
REDIS_PORT = int(os.environ["REDIS_PORT"])
REDIS_USER = os.environ["REDIS_USER"]
REDIS_PASSWORD = os.environ["REDIS_PASSWORD"]
REDIS_DB = int(os.environ["REDIS_DB"])

conn = redis.Redis(
    host=REDIS_HOST,
    port=REDIS_PORT,
    username=REDIS_USER,
    password=REDIS_PASSWORD,
    db=REDIS_DB,
    decode_responses=True,
)


async def init() -> None:
    await Migrator().run()
