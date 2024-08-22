#!/usr/bin/env python3
"""func return list"""


def schools_by_topic(mongo_collection, topic):
    """
    fun returns lst of school with a specific
    topic
    """
    specific_topic_list = mongo_collection.find({ "topics": topic })

    return list(specific_topic_list)
