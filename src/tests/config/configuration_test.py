import unittest

from dotenv import load_dotenv

from app.config.configuration import Configuration


class TestConfiguration(unittest.TestCase):

    def setUp(self):
        load_dotenv()

    def test_init(self):
        # Create an instance of Configuration
        config = Configuration()

        self.assertIsNotNone(config.toggl_configuration)


if __name__ == '__main__':
    unittest.main()
