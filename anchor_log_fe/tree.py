import os


def read_gitignore(gitignore_path):
    with open(gitignore_path, 'r') as file:
        ignored = [line.strip() for line in file if line.strip()
                   and not line.startswith('#')]
    return ignored


def is_ignored(path, ignored_patterns):
    for pattern in ignored_patterns:
        if pattern in path:
            return True
    return False


def print_tree(startpath, ignored_patterns):
    for root, dirs, files in os.walk(startpath):
        # Exclude ignored directories
        dirs[:] = [d for d in dirs if not is_ignored(
            os.path.join(root, d), ignored_patterns)]
        # Exclude ignored files
        files = [f for f in files if not is_ignored(
            os.path.join(root, f), ignored_patterns)]
        level = root.replace(startpath, '').count(os.sep)
        indent = ' ' * 4 * level
        print(f'{indent}{os.path.basename(root)}/')
        subindent = ' ' * 4 * (level + 1)
        for f in files:
            print(f'{subindent}{f}')


if __name__ == "__main__":
    gitignore_file_path =  "C:\\Users\\lysan\\Desktop\\ins11_dev\\verita_workspace\\anchor_log\\.gitignore"
    ignored_patterns = read_gitignore(gitignore_file_path)
    print_tree(".", ignored_patterns)
