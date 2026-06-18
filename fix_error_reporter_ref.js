const fs = require('fs');
let content = fs.readFileSync('src/components/ErrorReporter.tsx', 'utf8');

content = content.replace(/const pollRef = useRef<NodeJS\.Timeout>\(\);/, 'const pollRef = useRef<NodeJS.Timeout | null>(null);');

fs.writeFileSync('src/components/ErrorReporter.tsx', content, 'utf8');
console.log('ErrorReporter ref fixed');
