import os
import sys
import json
from PIL import Image
import deeppyer, asyncio


if os.environ.get("APPWRITE_FUNCTION_DATA", None) is None:
    sys.exit("Search query not provided")


query = os.environ["APPWRITE_FUNCTION_DATA"]
try:
    query = json.loads(query)
except Exception as e:
    sys.exit(e)



