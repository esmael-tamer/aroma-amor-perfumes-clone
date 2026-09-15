const fs = require('fs');
let chartContent = fs.readFileSync('src/components/ui/chart.tsx', 'utf-8');

chartContent = chartContent.replace(/React\.ComponentProps<typeof RechartsPrimitive\.Legend> &/g, 'React.ComponentProps<typeof RechartsPrimitive.Legend> & { hideIcon?: boolean; nameKey?: string; } &');
fs.writeFileSync('src/components/ui/chart.tsx', chartContent);
