$(function () {
    $('#avg').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Average Social Media Mentions Per Publication'
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
                text: 'Average Mentions'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0"> {series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.3f} </b></td></tr>',
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
            data: [0.0160142348754448, 0.0266903914590747, 0.00889679715302491, 0.0124555160142349]
        },
        {
            name: 'The Washington Post',
            data: [0.0226415094339623, 0.0264150943396226, 0.0113207547169811, 0]
        },
        {
            name: 'USA Today',
            data: [0.0146276595744681, 0.0226063829787234, 0.011968085106383, 0.00930851063829787]
        },
        {
            name: 'The Guardian',
            data: [0.0422794117647059, 0.121323529411765, 0.0202205882352941, 0.100183823529412]
        }]
    });
});
