from selenium import webdriver
import requests

# Start a Selenium session with ChromeDriver
driver = webdriver.Chrome('/path/to/chromedriver')

# Navigate to TickTick and log in
driver.get('https://ticktick.com/sign-in')
# Fill in your login details here
# You might need to use Selenium's wait functionality to ensure the page has loaded before interacting with it

# Extract cookies from the Selenium session
cookies = driver.get_cookies()

# Start a requests session
s = requests.Session()

# Add the cookies to the requests session
for cookie in cookies:
    s.cookies.set(cookie['name'], cookie['value'])

# Make an authenticated API call to TickTick
response = s.get('https://api.ticktick.com/api/v2/habits')

# Print the response
print(response.json())