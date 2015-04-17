$(function () {
    $('#prop3').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Key Article Topics as Compared to Social Media Mentions',
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
{
name: 'Peace Talks',
data: [0.10632,
0.1098,
0.07901,
0.08978,
0.09737,
0.0791,
0.07558,
0.06288,
0.06752,
0.07573,
0.09141,
0.06356,
0.06461,
0.05867,
0.06278,
0.04795,
0.0807,
0.04638,
0.07407,
0.05851,
0.06675,
0.10085,
0.10854,
0.10058,
0.12997,
0.12473,
0.14609,
0.07544,
0.0927,
0.08804,
0.11948,
0.16103,
0.13586,
0.17054,
0.26689,
0.16446,
0.12209,
0.09295,
0.14161,
0.14799,
0.12647,
0.10814,
0.11105,
0.23039,
0.09236,
0.07007,
0.11825,
0.078,
0.09243,
0.10204,
0.18427,
0.12485,
0.17551,
0.10066,
0.08665,
0.14376,
0.14985,
0.13923,
0.17898,
0.17228,
0.08996,
0.1406,
0.31292,
0.18428,
0.16362,
0.1022,
0.15651,
0.2667,
0.25557,
0.14544,
0.20011,
0.16524,
0.12809,
0.11652,
0.08924,
0.09306,
0.14962,
0.08154,
0.08586,
0.06935,
0.19117,
0.11777,
0.11287,
0.06501,
0.13716,
0.05193,
0.081,
0.06047,
0.09654,
0.07263,
0.09295,
0.05906,
0.08932,
0.09389,
0.12576,
0.16948,
0.10811,
0.12468,
0.20939,
0.20048,
0.23202,
0.22897,
0.37136,
0.22583,
0.2125,
0.1009,
0.23575,
0.18691,
0.20947,
0.14392,
0.16525,
0.23885,
0.1547,
0.15653,
0.07714,
0.10942,
0.15164,
0.11948,
0.06326,
0.1692]},

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