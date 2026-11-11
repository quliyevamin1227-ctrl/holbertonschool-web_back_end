#!/usr/bin/env python3
"""Provide some stats about Nginx logs stored in MongoDB."""
from pymongo import MongoClient


def log_stats(nginx_collection):
    """Print the number of logs, logs per method and status checks."""
    print("{} logs".format(nginx_collection.count_documents({})))
    print("Methods:")
    for method in ["GET", "POST", "PUT", "PATCH", "DELETE"]:
        count = nginx_collection.count_documents({"method": method})
        print("\tmethod {}: {}".format(method, count))
    status = nginx_collection.count_documents(
        {"method": "GET", "path": "/status"})
    print("{} status check".format(status))


if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    log_stats(client.logs.nginx)
