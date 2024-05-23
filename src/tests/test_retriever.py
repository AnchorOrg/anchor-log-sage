from unittest import TestCase

from app.toggl.toggl_data_retriever import TogglDataRetriever


class TestTogglDataRetriever(TestCase):
    def test_get_logged_time(self):
        TogglDataRetriever('test')
        print('test')
