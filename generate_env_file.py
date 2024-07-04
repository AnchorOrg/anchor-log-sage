import os

# Open the .env file
with open('.env', 'r') as f:
    lines = f.readlines()

# Open the .env.bak file (create it if it doesn't exist)
with open('.env.bak', 'w') as f:
    for line in lines: 
        splits = line.split('=')
        if(len(splits)> 1):
            line = line.split('=')[0] + '=\n' 
            f.write(line)
        else:
            f.write(line)
