const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace multiple type="button" attributes on button elements
  content = content.replace(/<button\s+type="button"\s+type="button"/g, '<button type="button"');
  content = content.replace(/<button\s+type="button"\s+type="submit"/g, '<button type="submit"');

  if (content !== original) {
    console.log(`Fixing duplicate types in ${filePath}`);
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

walkDir(path.join(__dirname, 'src'));
