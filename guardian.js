$(function () {
    $('#guard').highcharts({
        title: {
            text: 'Monthly Social Media Mentions in Guardian Articles',
            x: -20 //centert
        },
        subtitle: {
            text: 'Source: Guardian Archives',
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
                text: 'Article Counts'
            },
            min: 0,
            max: 60,
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
            name: 'Total Articles',
            data: [4,
            4,
            5,
            2,
            6,
            0,
            3,
            2,
            3,
            3,
            10,
            3,
            8,
            1,
            6,
            2,
            3,
            6,
            7,
            4,
            5,
            3,
            9,
            13,
            9,
            12,
            1,
            5,
            8,
            6,
            7,
            2,
            2,
            8,
            13,
            6,
            12,
            1,
            10,
            3,
            13,
            3,
            12,
            2,
            10,
            1,
            9,
            14,
            35,
            5,
            12,
            6,
            17,
            4,
            9,
            2,
            17,
            19,
            15,
            14,
            9,
            13,
            38,
            21,
            11,
            18,
            17,
            14,
            21,
            7,
            6,
            7,
            15,
            6,
            6,
            6,
            12,
            5,
            9,
            6,
            27,
            14,
            12,
            7,
            10,
            2,
            6,
            7,
            9,
            7,
            6,
            9,
            15,
            6,
            33,
            9,
            16,
            12,
            18,
            2,
            9,
            9,
            13,
            5,
            5,
            2,
            11,
            10,
            8,
            3,
            8,
            12,
            9,
            8,
            25,
            28,
            5,
            1,
            4,
            3]
        }, {
            name: 'Social Articles',
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
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
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
            1,
            1,
            1,
            1,
            0,
            0,
            2,
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            2,
            0,
            0,
            0,
            8,
            4,
            5,
            6,
            5,
            1,
            4,
            3,
            3,
            2,
            1,
            0,
            2,
            0,
            6,
            2,
            2,
            2,
            1,
            0,
            1,
            0,
            4,
            0,
            1,
            0,
            2,
            1,
            1,
            1,
            0,
            0,
            0,
            1,
            6,
            3,
            0,
            0,
            2,
            0]
        }]
    });
});
