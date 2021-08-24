// @ts-ignore
import * as echarts from 'echarts/core';
// @ts-ignore
import {RadarChart, RadarSeriesOption} from 'echarts/charts';
// @ts-ignore
import {
    TitleComponent,
    LegendComponent,
    TooltipComponent,
    TitleComponentOption,
    LegendComponentOption,
    TooltipComponentOption
} from 'echarts/components';
// @ts-ignore
import {CanvasRenderer} from 'echarts/renderers';

type ECOption = echarts.ComposeOption<RadarSeriesOption | TitleComponentOption | LegendComponentOption | TooltipComponentOption>;

echarts.use([TitleComponent, LegendComponent, CanvasRenderer, RadarChart, TooltipComponent])

const option: ECOption = {
    legend: {
        data: ['预算分配', '实际开销'],
        top: '90%',
    },
    tooltip: {
        show: true,
    },
    radar: {
        symbol: "none",
        center: ['50%', '45%'],
        // shape: 'circle',
        indicator: [
            {name: '销售', max: 6500},
            {name: '管理', max: 16000},
            {name: '信息技术', max: 30000},
            {name: '客服', max: 38000},
            {name: '研发', max: 52000},
            {name: '市场', max: 25000}
        ]
    },
    series: [{

        itemStyle: { // 折线拐点标志的样式。
            opacity: 0,
            color : "rgba(0,0,0,0)",
        },
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',

        data: [
            {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: '预算分配',
                areaStyle: { // 单项区域填充样式
                    color: 'rgba(247,89,64,1)',
                    opacity: 1 /// 填充的颜色。[ default: "#000" ]

                },
            },
            {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: '实际开销',
                areaStyle: { // 单项区域填充样式
                    color: 'rgba(61,199,190,1)',
                    opacity: 1// 填充的颜色。[ default: "#000" ]
                }
            }
        ],
    }]
};

export {
    option,
    echarts
}

