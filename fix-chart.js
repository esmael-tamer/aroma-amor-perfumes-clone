const fs = require('fs');

let content = fs.readFileSync('src/components/ui/chart.tsx', 'utf8');

// Fix Tooltip props
content = content.replace(
    /}: React\.ComponentProps<typeof RechartsPrimitive\.Tooltip> &/,
    '}: Omit<React.ComponentProps<typeof RechartsPrimitive.Tooltip>, "payload" | "label"> & { payload?: any[]; label?: any; } &'
);

// Fix payload.map
content = content.replace(
    /payload\.map\(\(item, index\) => \(/g,
    'payload?.map((item: any, index: number) => ('
);

// Fix Legend props
content = content.replace(
    /Pick<RechartsPrimitive\.LegendProps, "payload" \| "verticalAlign"> & \{/g,
    'Omit<React.ComponentProps<typeof RechartsPrimitive.Legend>, "payload" | "verticalAlign"> & { payload?: any[]; verticalAlign?: any; } & {'
);

// Fix payload check
content = content.replace(
    /if \(!payload \|\| !payload\.length\) \{/g,
    'if (!payload || !Array.isArray(payload) || !payload.length) {'
);

fs.writeFileSync('src/components/ui/chart.tsx', content);
