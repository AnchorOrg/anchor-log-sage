import json

import requests


class TogglDataRetriever:
    def __init__(self, api_token):
        self.api_token = api_token
        self.url = 'https://api.track.toggl.com/api/v9/time_entries'
        print('init end')

    def get_logged_time(self):
        response = requests.get(self.url, auth=('1971800d4d82861d8f2c1651fea4d212', 'api_token'))
        data = json.loads(response.text)
        return data
