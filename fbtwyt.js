$(function () {
    $('#tot').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Total Social Media Mentions Per Publication'
        },
        subtitle: {
            text: 'Between 2005 and 2014'
        },
        xAxis: {
            categories: [
                'Facebook',
                'Twitter/Tweet',
                'YouTube',
                '@mention'],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Mentions'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0"> {series.name}: </td>' +
                '<td style="padding:0"><b>{point.y} </b></td></tr>',
            footerFormat: '</table>',
            useHTML: true
        },
        legend:{ enabled: true},
        plotOptions: {
            column: {
                pointPadding: 1,
                borderWidth: 1,
                groupPadding: 1,
                shadow: true
            }
        },
        series: [{
            name: 'The New York Times',
            data: [9, 15, 5, 7]
        },
        {
            name: 'The Washington Post',
            data: [12, 14, 6, 0]
        },
        {
            name: 'USA Today',
            data: [11, 17, 9, 7]
        },
        {
            name: 'The Guardian',
            data: [46, 132, 22, 109]
        }]
    });
});
