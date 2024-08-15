#!/usr/bin/env python3
"""wait_n and alter it into a new func"""
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """spaswns task_wait.. n timesa and returns the list of delays """
    tasks = [task_wait_random(max_delay) for _ in range(n)]

    delays = await asyncio.gather(*tasks)

    return sorted(delays)
