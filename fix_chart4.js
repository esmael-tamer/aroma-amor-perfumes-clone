const fs = require('fs');
let chartContent = fs.readFileSync('src/components/ui/chart.tsx', 'utf-8');

chartContent = chartContent.replace(/Omit<RechartsPrimitive\.LegendProps, "payload"> & \{ payload\?: any\[\]; hideIcon\?: boolean; nameKey\?: string; \}\n    hideIcon\?: boolean\n    nameKey\?: string\n  \}\)/g, 'Omit<RechartsPrimitive.LegendProps, "payload"> & { payload?: any[]; hideIcon?: boolean; nameKey?: string; })');
fs.writeFileSync('src/components/ui/chart.tsx', chartContent);
