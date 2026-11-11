#!/usr/bin/env python3
"""Find schools that teach a specific topic."""


def schools_by_topic(mongo_collection, topic):
    """Return the list of schools having the given topic."""
    return list(mongo_collection.find({"topics": topic}))
