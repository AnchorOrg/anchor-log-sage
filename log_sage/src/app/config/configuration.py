import os

from dotenv import load_dotenv
import os
from dotenv import load_dotenv


class Configuration:
    def __init__(self, ):
        load_dotenv()
        self.username = os.getenv('USERNAME')
        self.ticktick_configuration = TickTickConfiguration()
        self.toggl_configuration = TogglConfiguration()
        self.googlefit_configuration = GoogleFitConfiguration()

class TickTickConfiguration:
    def __init__(self):
        self.client_id = os.getenv('TICKTICK_CLIENT_ID')
        self.client_secret = os.getenv('TICKTICK_CLIENT_SECRET')
        self.password = os.getenv('TICKTICK_PASSWORD')

class TogglConfiguration:
    def __init__(self):
        self.api_token = os.getenv('TOGGL_API_TOKEN')
        self.api_url  = "https://api.track.toggl.com/api/v9/me/projects"

class GoogleFitConfiguration:
    def __init__(self):
        self.client_id = os.getenv('GOOGLEFIT_CLIENT_ID')
        self.client_secret = os.getenv('GOOGLEFIT_CLIENT_SECRET')
        self.api_url = "https://www.googleapis.com/fitness/v1/users/me/sessions"