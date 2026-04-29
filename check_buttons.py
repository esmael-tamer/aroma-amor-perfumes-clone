import re
import os

for root, _, files in os.walk('src/components'):
    for file in files:
        if not file.endswith('.tsx'):
            continue
        path = os.path.join(root, file)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Check if there's any <button without type=
        lines = content.split('\n')
        for i, line in enumerate(lines):
            if '<button' in line and 'type=' not in line:
                # Is there a type= in the next few lines?
                full_tag = ""
                for j in range(i, min(i+5, len(lines))):
                    full_tag += lines[j]
                    if '>' in lines[j]:
                        break
                if 'type=' not in full_tag:
                    print(f"Missing type in {path}:{i+1}")
