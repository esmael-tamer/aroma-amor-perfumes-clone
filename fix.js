const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = `${dir}/${file}`;
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else if (name.endsWith('.tsx') || name.endsWith('.jsx')) {
      files.push(name);
    }
  }
  return files;
}

const allFiles = getFiles('src/components');

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Let's replace `<button` with `<button type="button"` ONLY if `type=` doesn't appear before `>`
  const regex = /<button([\s\S]*?)>/g;

  content = content.replace(regex, (match, p1) => {
      if (p1.includes('type=')) {
          return match;
      }
      return `<button type="button"${p1}>`;
  });

  if (content !== original) {
      fs.writeFileSync(file, content);
      console.log(`Updated ${file}`);
  }
});
