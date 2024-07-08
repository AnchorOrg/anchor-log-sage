from  app.config.configuration import Configuration

class GoogleFitnessService:
    def __init__(self, config:Configuration):
        self.config = config

    def get_sleep_data(self):
        url = self.config.googlefit_configuration.api_url
        response = requests.post(url)
        return response