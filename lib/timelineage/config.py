import os
import sys

sys.path.append(os.path.join(os.path.dirname(__file__), "../etc/"))
import timelineage_config

SESSION_SECRET = timelineage_config.SESSION_SECRET or ""

