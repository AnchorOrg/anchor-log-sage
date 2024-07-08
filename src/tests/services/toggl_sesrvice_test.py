import unittest
from app.services.toggl_service import TogglService

# TODO: configure the test case so that I can click the play button to make it run 
class TestTogglService(unittest.TestCase):
    def setUp(self):
        self.toggl_service = TogglService()

    # get time entries from 
    def test_method_name(self):
        # Call the method you want to test
        result = self.toggl_service.method_name()

        # Assert the expected outcome
        self.assertEqual(result, expected_result)

if __name__ == '__main__':
    unittest.main()