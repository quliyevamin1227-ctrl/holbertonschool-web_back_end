#!/usr/bin/env python3
"""Duck typing an iterable object."""
from typing import Iterable, List, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return a list of tuples of each element and its length."""
    return [(i, len(i)) for i in lst]
