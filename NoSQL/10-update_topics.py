#!/usr/bin/env python3
"""Change the topics of a school document."""


def update_topics(mongo_collection, name, topics):
    """Set the topics of every school document with the given name."""
    mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})
