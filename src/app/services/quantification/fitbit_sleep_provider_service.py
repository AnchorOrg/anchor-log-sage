import requests
# todo: write a nuclear test case to use the request module. 
from abc import ABC, abstractmethod
from app.config.configuration import Configuration
from app.services.interfaces.sleep_data_provider_service import ISleepDataProviderService

class FitbitSleepDataSource(ISleepDataProviderService):
    def __init__(self, config: Configuration):
        self.config = config

    # ingz: refactoring the interface with the below 3 doc. 
    # https://dev.fitbit.com/build/reference/web-api/sleep/get-sleep-log-list/
    # https://dev.fitbit.com/build/reference/web-api/sleep/get-sleep-log-by-date-range/
    # https://dev.fitbit.com/build/reference/web-api/sleep/gopeet-sleep-log-by-date/
    def get_sleep_data(self, date):
        headers = {'Authorization': 'Bearer ' + self.access_token}
        response = requests.get(f'https://api.fitbit.com/1.2/user/-/sleep/date/{date}.json', headers=headers)
        return response.json()