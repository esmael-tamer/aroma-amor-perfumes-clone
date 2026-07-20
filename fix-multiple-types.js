const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const origContent = content;
      // Handle edge cases where multiple types were added by the global regex
      // if multiple lines or other weird formatting was present.
      // e.g. <button type="button" type="submit" ... or multi-line <button type="button"\n ... type="submit"
      content = content.replace(/<(button|Button)\b([^>]*?)type="button"([^>]*?)type="submit"/gs, '<$1$2$3type="submit"');
      if (content !== origContent) {
        fs.writeFileSync(fullPath, content);
        console.log(`Cleaned up double type in ${fullPath}`);
      }
    }
  }
}

processDir('src');
