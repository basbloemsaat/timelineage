# content of a/conftest.py

import os
import sys
sys.path.append(os.path.join(os.path.dirname(__file__), "../etc/"))
sys.path.append(os.path.join(os.path.dirname(__file__), "../lib/"))
os.environ["TIMELINEAGE_ENV"] = "TEST"

import pytest

@pytest.fixture(scope="session")
def setup_db():
    # setup a basic state to run tests
    empty_db()


def empty_db():
    # clear the database for tests
    pass
    
