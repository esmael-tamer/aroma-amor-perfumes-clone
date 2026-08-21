const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');
let count = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Match <button or <Button over multiple lines
  const regex = /<(?:b|B)utton[\s\S]*?>/g;

  let newContent = content.replace(regex, (match) => {
    if (!match.includes('type=')) {
        return match.replace(/<(?:b|B)utton/, '$& type="button"');
    }
    return match;
  });

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Modified', file);
    count++;
  }
});
console.log('Modified', count, 'files');
