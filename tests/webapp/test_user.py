#!/usr/bin/env python3

import os
import sys
sys.path.append(os.path.join(os.path.dirname(__file__), "../etc/"))
sys.path.append(os.path.join(os.path.dirname(__file__), "../lib/"))

import pytest

from timelineage.webapp import app as tl_app

@pytest.fixture
def app():
    return tl_app

def test_user_index(client):
    res = client.get('/user')
    assert res.status_code == 200

