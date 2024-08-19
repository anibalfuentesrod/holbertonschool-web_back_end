#!/usr/bin/env python3
""" four parallel task 2 """
import asyncio
import time
from typing import List

task_1_async = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """function executes parallel four times and
    measures the runtime"""
    start_time = time.time()
    tasks = [task_1_async() for _ in range(4)]
    await asyncio.gather(*tasks)
    end_time = time.time()
    return end_time - start_time
