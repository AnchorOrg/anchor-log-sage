# genAI ing

from typing import List, Optional
from pydantic import BaseModel
from datetime import datetime

class Habit(BaseModel):
    id: str
    name: str
    iconRes: str
    color: str
    sortOrder: int
    status: int
    encouragement: str
    totalCheckIns: int
    createdTime: datetime
    modifiedTime: datetime
    archivedTime: datetime
    type: str
    goal: float
    step: float
    unit: str
    etag: str
    repeatRule: str
    reminders: List[str]
    recordEnable: bool
    sectionId: str
    targetDays: int
    targetStartDate: int
    completedCycles: int
    exDates: List[str]
    style: Optional[str]