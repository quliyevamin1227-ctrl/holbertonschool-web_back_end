#!/usr/bin/env python3
"""Simple helper function for pagination."""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Return the start and end indexes for a 1-indexed page."""
    start = (page - 1) * page_size
    return (start, start + page_size)
