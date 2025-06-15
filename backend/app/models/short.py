import datetime

from pydantic import BaseModel, Field, HttpUrl


class Short(BaseModel):
    id: str
    full_url: HttpUrl
    created_at: datetime.datetime = Field(
        ..., json_schema_extra={"type": "integer", "format": "int64"}
    )
    valid_for: datetime.timedelta = Field(
        ..., json_schema_extra={"type": "integer", "format": "int64"}
    )

    class Config:
        json_encoders = {
            datetime.datetime: lambda dt: int(dt.timestamp()),
            datetime.timedelta: lambda td: int(td.total_seconds()),
        }
