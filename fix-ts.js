const fs = require('fs');

function processAdminPage() {
    let content = fs.readFileSync('src/app/admin/page.tsx', 'utf8');
    content = content.replace(/stats\.pending\b/g, 'stats.pendingOrders');
    content = content.replace(/stats\.delivered\b/g, 'stats.completedOrders');
    fs.writeFileSync('src/app/admin/page.tsx', content);
}

function processLayout() {
    let content = fs.readFileSync('src/app/layout.tsx', 'utf8');
    content = content.replace(/keywords: SEO_CONFIG\.keywords,/, 'keywords: [...SEO_CONFIG.keywords],');
    fs.writeFileSync('src/app/layout.tsx', content);
}

function processErrorReporter() {
    let content = fs.readFileSync('src/components/ErrorReporter.tsx', 'utf8');
    content = content.replace(/useRef<NodeJS\.Timeout>\(\)/, 'useRef<NodeJS.Timeout | undefined>(undefined)');
    fs.writeFileSync('src/components/ErrorReporter.tsx', content);
}

processAdminPage();
processLayout();
processErrorReporter();
