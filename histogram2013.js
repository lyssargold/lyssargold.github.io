$(function () {
    $('#hist13').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Proportion of Topics Appearing in Articles Published July 2013'
        },
        subtitle: {
            text: 'Source: The New York Times, The Washington Post, USA Today, The Guardian'
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
            data: [0.05227, 0.37136,    0.07633,    0.06195,    0.06072,    0.08179,    0.0659, 0.09337,    0.07334,    0.06296]
        }]
    });
});
