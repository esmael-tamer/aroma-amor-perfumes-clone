const fs = require('fs');

// 1. Fix src/app/admin/page.tsx
let adminPage = fs.readFileSync('src/app/admin/page.tsx', 'utf8');
adminPage = adminPage.replace(/value: stats\.pending,/g, 'value: stats.pendingOrders,');
adminPage = adminPage.replace(/stats\.delivered/g, 'stats.completedOrders');
fs.writeFileSync('src/app/admin/page.tsx', adminPage, 'utf8');

// 2. Fix src/app/layout.tsx
let layoutPage = fs.readFileSync('src/app/layout.tsx', 'utf8');
layoutPage = layoutPage.replace(/keywords: SEO_CONFIG\.keywords,/g, 'keywords: SEO_CONFIG.keywords as unknown as string[],');
fs.writeFileSync('src/app/layout.tsx', layoutPage, 'utf8');

// 3. Fix src/components/ErrorReporter.tsx
let errorReporter = fs.readFileSync('src/components/ErrorReporter.tsx', 'utf8');
errorReporter = errorReporter.replace(/export default function ErrorReporter\(\{ error, reset \}: ReporterProps\) \{/, 'export default function ErrorReporter({ error, reset }: ReporterProps = {}) {');
fs.writeFileSync('src/components/ErrorReporter.tsx', errorReporter, 'utf8');

// 4. Fix src/components/ui/chart.tsx
let chart = fs.readFileSync('src/components/ui/chart.tsx', 'utf8');
chart = chart.replace(/export const ChartTooltipContent = React\.forwardRef<\n  HTMLDivElement,\n  React\.ComponentProps<typeof RechartsPrimitive\.Tooltip> &\n    React\.ComponentProps<"div"> &\n    \{\n      hideLabel\?: boolean\n      hideIndicator\?: boolean\n      indicator\?: "line" | "dot" | "dashed"\n      nameKey\?: string\n      labelKey\?: string\n    \}\n>\(/, `export const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> &
    {
      hideLabel?: boolean
      hideIndicator?: boolean
      indicator?: "line" | "dot" | "dashed"
      nameKey?: string
      labelKey?: string
      payload?: any[]
      label?: any
    }
>(`);

chart = chart.replace(/\{payload\.map\(\(item, index\) => \{/g, '{payload.map((item: any, index: number) => {');

chart = chart.replace(/Pick<RechartsPrimitive\.LegendProps, "payload" | "verticalAlign"> & \{/, 'Pick<RechartsPrimitive.LegendProps, "verticalAlign"> & { payload?: any[];');

chart = chart.replace(/\{payload\.map\(\(item\) => \{/g, '{payload.map((item: any) => {');

fs.writeFileSync('src/components/ui/chart.tsx', chart, 'utf8');
console.log('Build errors fixed');
