const fs = require('fs');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/<button type="button"([^>]*?)type="button"/g, '<button type="button"$1');
  content = content.replace(/<button type="button"([^>]*?)type="submit"/g, '<button type="submit"$1');
  fs.writeFileSync(filePath, content, 'utf8');
}

processFile('src/components/admin/CategoriesManager.tsx');
