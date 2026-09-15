const fs = require('fs');

// Fix ErrorReporter.tsx useRef
let errRepContent = fs.readFileSync('src/components/ErrorReporter.tsx', 'utf-8');
errRepContent = errRepContent.replace(/useRef<NodeJS\.Timeout>\(\)/g, 'useRef<NodeJS.Timeout | undefined>(undefined)');
fs.writeFileSync('src/components/ErrorReporter.tsx', errRepContent);

// Fix layout.tsx TS2322 (spread readonly keywords array)
let layoutContent = fs.readFileSync('src/app/layout.tsx', 'utf-8');
layoutContent = layoutContent.replace(/keywords: SEO_CONFIG\.keywords,/g, 'keywords: [...SEO_CONFIG.keywords],');
fs.writeFileSync('src/app/layout.tsx', layoutContent);

// Fix Admin Dashboard stats property access
let adminPageContent = fs.readFileSync('src/app/admin/page.tsx', 'utf-8');
adminPageContent = adminPageContent.replace(/stats\.pending\b/g, 'stats.pendingOrders');
adminPageContent = adminPageContent.replace(/stats\.delivered\b/g, 'stats.completedOrders');
fs.writeFileSync('src/app/admin/page.tsx', adminPageContent);

// Fix chart.tsx
let chartContent = fs.readFileSync('src/components/ui/chart.tsx', 'utf-8');
// Fix missing payload/label on tooltip
chartContent = chartContent.replace(/React\.ComponentProps<typeof RechartsPrimitive\.Tooltip>/g, 'Omit<React.ComponentProps<typeof RechartsPrimitive.Tooltip>, "payload" | "label"> & { payload?: any[]; label?: any; }');
// Fix missing payload on Legend
chartContent = chartContent.replace(/Pick<RechartsPrimitive\.LegendProps, "payload" | "verticalAlign">/g, 'Omit<RechartsPrimitive.LegendProps, "payload"> & { payload?: any[] }');
chartContent = chartContent.replace(/payload\.length/g, 'payload?.length');
chartContent = chartContent.replace(/payload\.map\(\(item\) =>/g, 'payload?.map((item: any) =>');
// Fix missing param types in map
chartContent = chartContent.replace(/payload\.map\(\(item, index\)/g, 'payload?.map((item: any, index: number)');
fs.writeFileSync('src/components/ui/chart.tsx', chartContent);
