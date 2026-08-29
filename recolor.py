import os
import re

def replace_color(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.jsx') or file.endswith('.css'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Replace specific tailwind prefixes
                for prefix in ['bg-', 'text-', 'border-', 'shadow-', 'ring-', 'hover:bg-', 'hover:text-', 'hover:border-', 'hover:shadow-', 'hover:ring-', 'from-', 'to-', 'via-', 'fill-']:
                    content = content.replace(f'{prefix}blue', f'{prefix}red')
                
                # Also replace exact custom ones
                content = content.replace('text-blue', 'text-red')
                content = content.replace('bg-blue', 'bg-red')
                content = content.replace('border-blue', 'border-red')
                
                # In CSS
                content = content.replace('--color-blue', '--color-red')
                
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)

if __name__ == '__main__':
    replace_color('src')
