#!/usr/bin/env python3
"""async finc with a random delay 1-10"""
import asyncio
import random


async def wait_random(max_delay=10):
    """awaits for random number"""
    delay = random.uniform(0, max_delay)

    await asyncio.sleep(delay)

    return delay

# print(asyncio.run(wait_random()))
