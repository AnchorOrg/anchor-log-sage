# Desciprtion
- Responsibilities
  - Reduce time of retrospecting past
  - provide data-driven insights on how to improve the usage status of one's time.

# Development
## Setup 
- example of the launch.json 
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Run all tests",
            "type": "debugpy",
            "request": "launch",
            "module": "unittest", 
            "cwd": "${workspaceFolder}/src/",
            "args": [
                "discover",
                "-p",
                "*_test.py"
            ]
        },
        {
            "name": "TestConfiguration.test_init",
            "type": "debugpy",
            "request": "launch",
            "module": "unittest",
            "cwd": "${workspaceFolder}/src/",
            "envFile": "${workspaceFolder}/.env",
            "python": "${workspaceFolder}/venv/Scripts/python.exe",
            "args": [
                "tests.config.configuration_test"
            ]
        },
    ]
}
```
- command to run at the root of this project to start all unit test
```shell
python -m unittest discover -s "src" -p "*_test.py"
```
# Resources
- [Project panel](https://lysander086.notion.site/Log-Sage-d849bda5f98446ad91e31ff6d7f33795?pvs=4)
## Development documenatations
- https://engineering.toggl.com/docs/

 