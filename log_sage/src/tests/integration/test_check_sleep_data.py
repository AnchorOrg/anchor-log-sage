import unittest
import requests 
from app.config.configuration import Configuration

class TestGetSleepData(unittest.TestCase):
    def setUp(self):
        config = Configuration() 

    def test_get_sleep_data(self):
        response = get_sleep_data(self.url)
        self.assertEqual(response.status_code, 200)

if __name__ == '__main__':
    unittest.main()