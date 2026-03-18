const fs = require('fs');

function cleanFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let lines = content.split('\n');
  let modified = false;

  for (let i = 0; i < lines.length; i++) {
    // If this line has `<button type="button"` and the next line has `type="`
    // or if the line has `type="button"` and the NEXT line has `type="button"`
    if (lines[i].includes('<button type="button"')) {
      // Check the tag content spanning multiple lines
      let tagContent = lines[i];
      let j = i;
      while (!tagContent.includes('>') && j < lines.length - 1) {
        j++;
        tagContent += ' ' + lines[j];
      }

      // Count occurrences of `type=`
      let typeMatches = (tagContent.match(/type=/g) || []).length;
      if (typeMatches > 1) {
        // Remove the FIRST occurrence of type="button" from this tag
        lines[i] = lines[i].replace(' type="button"', '');
        modified = true;
      }
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, lines.join('\n'));
    console.log('Cleaned', filePath);
  }
}

cleanFile('src/components/admin/AdminDashboard.tsx');
cleanFile('src/components/admin/AdminLayout.tsx');
cleanFile('src/components/admin/CategoriesManager.tsx');
cleanFile('src/components/admin/ProductsManager.tsx');
cleanFile('src/components/admin/PromotionsManager.tsx');
cleanFile('src/components/admin/SettingsManager.tsx');
cleanFile('src/components/cart/CartDrawer.tsx');
cleanFile('src/components/sections/hero-section.tsx');
cleanFile('src/components/sections/products-section.tsx');
cleanFile('src/components/ui/sidebar.tsx');
