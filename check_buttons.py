import os
import re

def check_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Find all button tags
    # This regex is a bit simplistic but should catch most cases
    # It looks for <button ... >
    # We want to ensure it has type="button" or type="submit" or type="reset"

    # Iterate through all matches of <button
    # and find the closing >

    errors = []

    # Split content by <button
    parts = content.split('<button')

    # Skip the first part (before the first button)
    for i in range(1, len(parts)):
        part = parts[i]
        # Find the end of the tag
        tag_end = part.find('>')
        if tag_end == -1:
            continue

        tag_content = part[:tag_end]

        # Check if it has type attribute
        if 'type=' not in tag_content:
            # Calculate line number
            # Count newlines in all previous parts + current part up to tag start
            # This is rough estimation
            errors.append(f"Missing type in <button...>")

    if errors:
        print(f"{filepath}: {len(errors)} errors")

# Walk through src directory
for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.jsx'):
            filepath = os.path.join(root, file)
            check_file(filepath)
