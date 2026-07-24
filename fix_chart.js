const fs = require('fs');

let content = fs.readFileSync('src/components/ui/chart.tsx', 'utf8');

// Fix ChartTooltipContent signature
content = content.replace(
`function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
}: React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
  React.ComponentProps<"div"> & {
    hideLabel?: boolean
    hideIndicator?: boolean
    indicator?: "line" | "dot" | "dashed"
    nameKey?: string
    labelKey?: string
  }) {`,
`const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean
      hideIndicator?: boolean
      indicator?: "line" | "dot" | "dashed"
      nameKey?: string
      labelKey?: string
      payload?: any[]
      label?: any
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref
  ) => {`);

// Add closing `)` for ChartTooltipContent
// We find the exact function close right before const ChartLegend
content = content.replace(
`      </div>
    </div>
  )
}

const ChartLegend = RechartsPrimitive.Legend`,
`      </div>
    </div>
  )
})

const ChartLegend = RechartsPrimitive.Legend`);


// Fix item, index types in Tooltip
content = content.replace(/payload\.map\(\(item, index\) => \{/g, 'payload?.map((item: any, index: number) => {');

// Fix ChartLegendContent signature
content = content.replace(
`function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey,
}: React.ComponentProps<"div"> &
  Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
    hideIcon?: boolean
    nameKey?: string
  }) {`,
`const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Omit<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      payload?: any[]
      verticalAlign?: any
      hideIcon?: boolean
      nameKey?: string
    }
>(
  (
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
    ref
  ) => {`);

// Add closing `)` for ChartLegendContent
// We find the exact file end
content = content.replace(
`        </div>
      ))}
    </div>
  )
}

function getPayloadConfigFromPayload(`,
`        </div>
      ))}
    </div>
  )
})

function getPayloadConfigFromPayload(`);


// Fix item types in Legend
content = content.replace(/payload\.filter\(\(item\) =>/g, '(payload || []).filter((item: any) =>');
content = content.replace(/payload\.map\(\(item\) => \{/g, '(payload || []).map((item: any) => {');

fs.writeFileSync('src/components/ui/chart.tsx', content);
