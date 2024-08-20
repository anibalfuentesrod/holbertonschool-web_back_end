#!/usr/bin/env python3
"""simple func for pagination"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    func returns a tuple containing the start
    and the end indexes
    """
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)
