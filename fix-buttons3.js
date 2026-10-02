const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Use [\s\S]*? to match across newlines in the button tag
  const regex = /<button\b(?![^>]*\btype=)([\s\S]*?)>/g;

  if (regex.test(content)) {
    console.log(`Fixing buttons with newlines in ${filePath}`);
    content = content.replace(regex, '<button type="button"$1>');
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
