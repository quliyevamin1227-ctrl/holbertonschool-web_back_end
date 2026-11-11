#!/usr/bin/env python3
"""Complex types: string and int/float to tuple."""
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple of k and the square of v as a float."""
    return (k, v ** 2)
