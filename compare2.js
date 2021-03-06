$(function () {
    $('#prop2').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Key Article Topic as Compared to Social Media Mentions',
            x: -20 //centert
        },
        subtitle: {
            text: 'Gathered from The New York Times, The Washington Post, USA Today and The Guardian',
            x: -20
        },
        xAxis: {
            categories: ['1-2005', '2-2005', '3-2005', '4-2005', '5-2005', '6-2005', '7-2005', '8-2005', '9-2005', '10-2005', '11-2005', '12-2005',
                '1-2006', '2-2006', '3-2006', '4-2006', '5-2006', '6-2006', '7-2006', '8-2006', '9-2006', '10-2006', '11-2006', '12-2006',
                '1-2007', '2-2007', '3-2007', '4-2007', '5-2007', '6-2007', '7-2007', '8-2007', '9-2007', '10-2007', '11-2007', '12-2007',
                '1-2008', '2-2008', '3-2008', '4-2008', '5-2008', '6-2008', '7-2008', '8-2008', '9-2008', '10-2008', '11-2008', '12-2008',
                '1-2009', '2-2009', '3-2009', '4-2009', '5-2009', '6-2009', '7-2009', '8-2009', '9-2009', '10-2009', '11-2009', '12-2009',
                '1-2010', '2-2010', '3-2010', '4-2010', '5-2010', '6-2010', '7-2010', '8-2010', '9-2010', '10-2010', '11-2010', '12-2010',
                '1-2011', '2-2011', '3-2011', '4-2011', '5-2011', '6-2011', '7-2011', '8-2011', '9-2011', '10-2011', '11-2011', '12-2011',
                '1-2012', '2-2012', '3-2012', '4-2012', '5-2012', '6-2012', '7-2012', '8-2012', '9-2012', '10-2012', '11-2012', '12-2012',
                '1-2013', '2-2013', '3-2013', '4-2013', '5-2013', '6-2013', '7-2013', '8-2013', '9-2013', '10-2013', '11-2013', '12-2013',
                '1-2014', '2-2014', '3-2014', '4-2014', '5-2014', '6-2014', '7-2014', '8-2014', '9-2014', '10-2014', '11-2014', '12-2014']
        },
        yAxis: {
            title: {
                text: 'Proportion'
            },
            min: 0,
            max: 0.5,
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            eaderFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.3f} </b></td></tr>',
            footerFormat: '</table>',
            crosshairs:true,
            shared:true,
            useHTML: true
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: false
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [
{ name: 'Syria/Egypt',
data: [0.04686,
0.07166,
0.13267,
0.06951,
0.06729,
0.07893,
0.04633,
0.04901,
0.07464,
0.05606,
0.08833,
0.06203,
0.05937,
0.07121,
0.08768,
0.07638,
0.05229,
0.05416,
0.07875,
0.09336,
0.07209,
0.09577,
0.07131,
0.06515,
0.05685,
0.06624,
0.0773,
0.06317,
0.07915,
0.06849,
0.07299,
0.048,
0.07015,
0.07332,
0.05713,
0.03485,
0.05727,
0.06503,
0.04926,
0.04129,
0.05812,
0.05707,
0.05996,
0.04093,
0.07433,
0.0449,
0.05296,
0.07391,
0.07176,
0.10005,
0.06237,
0.07462,
0.0489,
0.07504,
0.07499,
0.04238,
0.05698,
0.05413,
0.07041,
0.06311,
0.08683,
0.07799,
0.04593,
0.05424,
0.07914,
0.06743,
0.06169,
0.05679,
0.06212,
0.05066,
0.06223,
0.12683,
0.10416,
0.16737,
0.10569,
0.13851,
0.09061,
0.20258,
0.05459,
0.12399,
0.14714,
0.11769,
0.16446,
0.23422,
0.22016,
0.1417,
0.12053,
0.20374,
0.15529,
0.11708,
0.08578,
0.06655,
0.0897,
0.08812,
0.10294,
0.09959,
0.06697,
0.0596,
0.05779,
0.07475,
0.07857,
0.08037,
0.06296,
0.14144,
0.07303,
0.13606,
0.05661,
0.05038,
0.07082,
0.06464,
0.07747,
0.05155,
0.05974,
0.05909,
0.06563,
0.05665,
0.0664,
0.0554,
0.07259,
0.08058]},

{name: 'Social Articles',
data: [0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0.0416666666666667,
0,
0,
0,
0.0416666666666667,
0,
0,
0,
0,
0,
0.038961038961039,
0.0909090909090909,
0,
0.0666666666666667,
0,
0,
0,
0,
0,
0,
0,
0,
0.0666666666666667,
0,
0.0149253731343284,
0.0294117647058824,
0.05,
0.0789473684210526,
0.0434782608695652,
0,
0.06,
0.1,
0.05,
0,
0.0769230769230769,
0.12,
0.111111111111111,
0.2,
0.0769230769230769,
0.0909090909090909,
0.0714285714285714,
0,
0.173076923076923,
0.117647058823529,
0.3,
0.466666666666667,
0.25,
0.111111111111111,
0.181818181818182,
0.363636363636364,
0.176470588235294,
0.2,
0.111111111111111,
0.0434782608695652,
0.153846153846154,
0.0526315789473684,
0.107692307692308,
0.0952380952380952,
0.0666666666666667,
0.130434782608696,
0.0263157894736842,
0.0454545454545455,
0.0869565217391304,
0.0833333333333333,
0.210526315789474,
0.0666666666666667,
0.0666666666666667,
0.0714285714285714,
0.115384615384615,
0.05,
0.0810810810810811,
0.0666666666666667,
0.0333333333333333,
0.037037037037037,
0,
0.0476190476190476,
0.163265306122449,
0.0675675675675676,
0,
0.0909090909090909,
0.176470588235294,
0.0625]
        }]
    });
});
