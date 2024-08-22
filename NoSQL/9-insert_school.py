#!/usr/bin/env python3
"""inserting new document in these func"""


def insert_school(mongo_collection, **kwargs):
    """inserts new docu on collection using kwargs"""

    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
