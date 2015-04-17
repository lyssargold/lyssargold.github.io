$(function () {
    $('#hist08').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Proportion of Topics Appearing in Guardian Article Published 3/20/08'
        },
        subtitle: {
            text: 'Source: The Guardian'
        },
        xAxis: {
            categories: [
                'Conflict/Violence',
                'Peace Talks',
                'Palestinians',
                'Civilians',
                'International Aid',
                'International Policy',
                'Human Rights',
                'U.S. Foreign Policy',
                'Settlements',
                'Syria/Egypt'],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Topic Proportion'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0"> </td>' +
                '<td style="padding:0"><b>{point.y:.3f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        legend:{ enabled: false},
        plotOptions: {
            column: {
                pointPadding: 0,
                borderWidth: 0,
                groupPadding: 0,
                shadow: true
            }
        },
        series: [{
            name: 'Topic',
            data: [0.0373831776, 0.0934579439, 0.0560747664, 0.046728972, 0.0280373832, 0.1355140187, 0.1822429907, 0.0514018692, 0.3271028037, 0.0420560748]
        }]
    });
});
