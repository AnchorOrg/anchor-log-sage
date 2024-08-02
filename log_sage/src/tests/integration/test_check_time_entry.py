import unittest
from app.services.quantification.toggl_service import TogglService
from  app.config.configuration import Configuration

class TestTogglAPI(unittest.TestCase):
    def setUp(self):
        config = Configuration()
        self.toggl_service = TogglService(config)

    def test_get_real_data(self):
        time_entries =   self.toggl_service.list_time_entries(
            start_date="2021-01-01T00:00:00Z",
            end_date="2021-01-01T23:59:59Z",
        )
        print(time_entries)
        pass

if __name__ == '__main__':
    unittest.main()