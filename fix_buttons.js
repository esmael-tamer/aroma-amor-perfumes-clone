const fs = require('fs');

function processFile(file) {
    let content = fs.readFileSync(file, 'utf-8');

    // We only replace `<button` exactly when it has no `type=`
    let lines = content.split('\n');
    let hasChanges = false;
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];

        // Match line containing exactly "<button" but not "type="
        if (line.match(/<button(\s|>)/) && !line.includes('type=')) {
            // Is there an onClick on this line or next?
            let hasOnClick = line.includes('onClick=') || (lines[i+1] && lines[i+1].includes('onClick='));
            if (hasOnClick) {
                line = line.replace('<button', '<button type="button"');
            } else {
                line = line.replace('<button', '<button type="submit"');
            }
            lines[i] = line;
            hasChanges = true;
        }
    }

    if (hasChanges) {
        fs.writeFileSync(file, lines.join('\n'));
        console.log(`Updated ${file}`);
    }
}

processFile('src/components/admin/CategoriesManager.tsx');
processFile('src/components/admin/PromotionsManager.tsx');
processFile('src/components/admin/ProductsManager.tsx');
processFile('src/components/admin/SettingsManager.tsx');
