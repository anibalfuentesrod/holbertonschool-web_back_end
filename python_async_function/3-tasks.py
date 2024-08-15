#!/usr/bin/env python3
"""function that returns an sync.task"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """creates async.task frrom the wait_random function"""
    return asyncio.create_task(wait_random(max_delay))
