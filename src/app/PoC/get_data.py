import requests
from base64 import b64encode

data = requests.get('https://api.track.toggl.com/api/v9/me/time_entries', headers={'content-type': 'application/json', 'Authorization' : 'Basic %s' %  b64encode(b"<email>:<password>").decode("ascii")})
print(data.json())