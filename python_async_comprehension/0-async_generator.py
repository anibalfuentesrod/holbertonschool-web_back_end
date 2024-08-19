#!/usr/bin/env python3
"""async generator task 0"""
import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """function waits 1 second then yield a random number(0, 10)"""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
