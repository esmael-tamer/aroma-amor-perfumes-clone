const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // A simpler regex to catch <button tags that span multiple lines
  // Wait, let's just do a blanket replacement for <button and ensure it gets type="button"
  // ONLY if it's not a custom Button component, and only if it doesn't already have a type attribute

  const regex = /<button(?![a-zA-Z])(?![^>]*\btype=)([^>]*)>/g;

  if (regex.test(content)) {
    console.log(`Fixing multi-line buttons in ${filePath}`);
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
