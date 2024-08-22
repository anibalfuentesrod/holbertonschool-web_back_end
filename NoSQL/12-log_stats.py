#!/usr/bin/env python3
"""log stats from MongoDB"""
from pymongo import MongoClient


def log_stats():
    """function that provides stats about Nginx logs stored in MongoDB."""
    client = MongoClient('mongodb://127.0.0.1:27017')
    nginx_collection = client.logs.nginx

    # count total number of logs
    log_count = nginx_collection.count_documents({})
    print(f"{log_count} logs")

    # count by HTTP methods
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    print("Methods:")
    for method in methods:
        method_count = nginx_collection.count_documents({"method": method})
        print(f"\tmethod {method}: {method_count}")

    # count the number of GET requests with path /status
    status_check = nginx_collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{status_check} status check")

if __name__ == "__main__":
    log_stats()