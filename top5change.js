$(function () {
    $('#5').highcharts({
        title: {
            text: 'Proportion of Topic Over Time:',
            x: -20 //centert
        },
        subtitle: {
            text: 'British/International Policy',
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
                text: 'Topic Proportion'
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
            valueSuffix: '',
            crosshairs:true,
            shared:true
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: false
                }
            }
        },
        series: [{
            name: 'British/International Policy',
            data: [0.08064,
0.08406,
0.10774,
0.07113,
0.0822,
0.07647,
0.06795,
0.08445,
0.12026,
0.07294,
0.11037,
0.08606,
0.10843,
0.08832,
0.10176,
0.05583,
0.07479,
0.07701,
0.13508,
0.16242,
0.11203,
0.11085,
0.10021,
0.12915,
0.10695,
0.09337,
0.0899,
0.09421,
0.08453,
0.12578,
0.12085,
0.06979,
0.10227,
0.09684,
0.08616,
0.05977,
0.07729,
0.0963,
0.10222,
0.06562,
0.11266,
0.10494,
0.08757,
0.1073,
0.08419,
0.07909,
0.06255,
0.10029,
0.09498,
0.1438,
0.11269,
0.0939,
0.0945,
0.10583,
0.13795,
0.10353,
0.10752,
0.12575,
0.11469,
0.1192,
0.12018,
0.11265,
0.07885,
0.13439,
0.10233,
0.12586,
0.15651,
0.09273,
0.08681,
0.17205,
0.09637,
0.12481,
0.12392,
0.1436,
0.07677,
0.12989,
0.12775,
0.09033,
0.09908,
0.09061,
0.11124,
0.07709,
0.09324,
0.07998,
0.07578,
0.10795,
0.10831,
0.09018,
0.10463,
0.09702,
0.09904,
0.11503,
0.12014,
0.13104,
0.09273,
0.07582,
0.15819,
0.10759,
0.09069,
0.0779,
0.0937,
0.11741,
0.08179,
0.08696,
0.11478,
0.07376,
0.12215,
0.08164,
0.09191,
0.14289,
0.08991,
0.09786,
0.08648,
0.0778,
0.07871,
0.09224,
0.08642,
0.07821,
0.07406,
0.07132]
        }]
    });
});