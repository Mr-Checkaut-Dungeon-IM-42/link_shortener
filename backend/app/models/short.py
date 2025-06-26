import datetime
import random
import string

from aredis_om import Field as RedisField
from aredis_om import HashModel
from pydantic import BaseModel, ConfigDict

from app import cache

ID_LENGTH = 8
SHORT_TTL = datetime.timedelta(hours=24)


class ShortJSON(HashModel):
    class Meta:
        database = cache.conn

    id: str = RedisField(primary_key=True)
    full_url: str = RedisField()  # I guess we ain't getting the `HttpUrl` annotation
    created_at: datetime.datetime = RedisField(index=True)
    valid_for: datetime.timedelta = RedisField()

    @classmethod
    def generate_id(cls) -> str:
        # FIX: Collision-prone
        return "".join(random.choice(string.ascii_letters) for _ in range(ID_LENGTH))


class ShortResponse(ShortJSON, BaseModel):
    model_config = ConfigDict(
        json_encoders={
            datetime.datetime: lambda dt: int(dt.timestamp()),
            datetime.timedelta: lambda td: int(td.total_seconds()),
        },
    )
