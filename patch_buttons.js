const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

walkDir('./src/components', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Add type="button" to <button> elements that don't have a type attribute
    // Be careful to only match actual <button> tags, not custom <Button> components
    // Negative lookbehind ensures we only match native lowercase <button>
    // Negative lookahead ensures we only match if there is no type= attribute
    const buttonRegex = /(?<!<[Bb]utton[^>]*?)<button\b(?![^>]*\btype=)([^>]*)>/g;

    const newContent = content.replace(buttonRegex, '<button type="button"$1>');

    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Updated ${filePath}`);
    }
  }
});
