const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let result = '';
  let modified = false;

  for (let i = 0; i < content.length; i++) {
    if (content.substring(i, i + 7) === '<button') {
      let j = i + 7;
      let tagContent = '';
      let hasType = false;

      while (j < content.length && content[j] !== '>') {
        tagContent += content[j];
        if (content.substring(j, j + 5) === 'type=') {
          hasType = true;
        }
        j++;
      }

      if (!hasType) {
        // Insert type="button"
        // Also handling the case where it might be `<button>` vs `<button className...>`
        // Let's just insert it right after `<button`
        result += '<button type="button"' + tagContent + '>';
        modified = true;
      } else {
        result += '<button' + tagContent + '>';
      }
      i = j; // skip ahead to the end of the tag
    } else {
      result += content[i];
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, result);
    console.log(`Updated ${filePath}`);
  }
}

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.jsx')) {
      processFile(fullPath);
    }
  }
}

traverse(path.join(__dirname, 'src', 'components'));
