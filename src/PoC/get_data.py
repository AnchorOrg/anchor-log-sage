import requests
import json

def get_data(token):
    url = "https://api.track.toggl.com/reports/api/v2/details"
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json"
    }
    params = {
        "user_agent": "your-app-name",
        "workspace_id": "your-workspace-id"
    }

    response = requests.get(url, headers=headers, params=params)
    if response.status_code == 200:
        data = response.json()
        print(json.dumps(data, indent=4))
    else:
        print(f"Error: {response.status_code} - {response.text}")

# Replace 'your-token-key' with your actual token key
token = 'c639deaefaa15b5eb1f803a06d659b17'


get_data(token)