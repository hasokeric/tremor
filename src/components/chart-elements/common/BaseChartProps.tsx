import { ValueFormater } from '../../../lib/utils';

interface BaseChartProps {
    data: any[],
    categories: string[],
    dataKey: string,
    colors?: string[],
    valueFormater?: ValueFormater,
    startEndOnly?: boolean,
    showXAxis?: boolean,
    showYAxis?: boolean,
    yAxisWidth?: number,
    showTooltip?: boolean,
    showLegend?: boolean,
    showGridLines?: boolean,
    height?: number,
    paddingTopPixels?: number,
    paddingRightPixels?: number,
    paddingBottomPixels?: number,
    paddingLeftPixels?: number,
}

export default BaseChartProps;