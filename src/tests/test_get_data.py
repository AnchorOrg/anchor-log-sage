# import unittest
# from unittest.mock import patch
# from get_data import get_data
#
# class TestDataFetching(unittest.TestCase):
#     @patch('get_data.requests.get')
#     def test_successful_data_fetching(self, mock_get):
#         # Mock the response from the API
#         mock_get.return_value.status_code = 200
#         mock_get.return_value.json.return_value = {
#             "data": [
#                 {"id": 1, "name": "Task 1"},
#                 {"id": 2, "name": "Task 2"}
#             ]
#         }
#
#         # Call the function with a valid token
#         token = 'c639deaefaa15b5eb1f803a06d659b17'
#         get_data(token)
#
#         # Assert that the API was called with the correct parameters
#         mock_get.assert_called_once_with(
#             "https://api.track.toggl.com/reports/api/v2/details",
#             headers={
#                 "Authorization": f"Bearer {token}",
#                 "Content-Type": "application/json"
#             },
#             params={
#                 "user_agent": "your-app-name",
#                 "workspace_id": "your-workspace-id"
#             }
#         )
#
#     @patch('get_data.requests.get')
#     def test_error_handling(self, mock_get):
#         # Mock the response from the API
#         mock_get.return_value.status_code = 404
#         mock_get.return_value.text = "Not Found"
#
#         # Call the function with an invalid token
#         token = 'invalid-token'
#         get_data(token)
#
#         # Assert that the error message is printed
#         expected_output = "Error: 404 - Not Found\n"
#         self.assertEqual(expected_output, mock_print.call_args[0][0])
#
# if __name__ == '__main__':
#     unittest.main()