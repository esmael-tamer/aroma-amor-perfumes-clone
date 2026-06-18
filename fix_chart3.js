const fs = require('fs');
let chart = fs.readFileSync('src/components/ui/chart.tsx', 'utf8');

// Fix ChartTooltipContent parameters
chart = chart.replace(/export const ChartTooltipContent = React\.forwardRef</, 'export const ChartTooltipContent = React.forwardRef<');

// Wait, the memory is:
// "provide optional generic type fallbacks like payload?: any[] and label?: any for library callback properties, and explicitly type array map parameters (e.g., item: any, index: number)."

// Let's replace the whole type definition for ChartTooltipContent
const oldTooltipContent = `export const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> &
    {
      hideLabel?: boolean
      hideIndicator?: boolean
      indicator?: "line" | "dot" | "dashed"
      nameKey?: string
      labelKey?: string
    }
>`;

const newTooltipContent = `export const ChartTooltipContent = React.forwardRef<
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
>`;

chart = chart.replace(oldTooltipContent, newTooltipContent);

// Fix payload.map in ChartTooltipContent
chart = chart.replace(/\{payload\.map\(\(item, index\) => \{/g, '{payload.map((item: any, index: number) => {');

// Fix ChartLegendContent
const oldLegendContent = `export const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean
      nameKey?: string
    }
>`;

const newLegendContent = `export const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Omit<RechartsPrimitive.LegendProps, "payload"> & {
      payload?: any[]
      hideIcon?: boolean
      nameKey?: string
    }
>`;

chart = chart.replace(oldLegendContent, newLegendContent);

// Fix payload.map in ChartLegendContent
chart = chart.replace(/\{payload\.map\(\(item\) => \{/g, '{payload.map((item: any) => {');

// One more place: in ChartLegendContent there's an `if (!payload?.length)`
// That should be fine if payload is any[].

fs.writeFileSync('src/components/ui/chart.tsx', chart, 'utf8');
