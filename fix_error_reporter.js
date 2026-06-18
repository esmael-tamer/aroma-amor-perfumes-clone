const fs = require('fs');
let content = fs.readFileSync('src/components/ErrorReporter.tsx', 'utf8');

// The error is: Expected 1 arguments, but got 0.
// We should provide a default object `{}`
content = content.replace(/export default function ErrorReporter\(\{ error, reset \}: ReporterProps\) \{/, 'export default function ErrorReporter({ error, reset }: ReporterProps = {}) {');

fs.writeFileSync('src/components/ErrorReporter.tsx', content, 'utf8');
console.log('ErrorReporter fixed');
