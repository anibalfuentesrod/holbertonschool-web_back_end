#!/usr/bin/env python3
"""func that changes school topic"""


def update_topics(mongo_collection, name, topics):
    """func updates tipic"""
    return mongo_collection.update_many(
        { "name": name },
        { "$set": { "topics": topics }}
    )
