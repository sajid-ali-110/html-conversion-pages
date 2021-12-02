var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    exportEnabled: false,
    theme: "light1", // "light1", "light2", "dark1", "dark2"
    title: {
        text: "Overall population",
        fontWeight: "normal",
    },
    width: 330,

    dataPointMaxWidth: 90,
    axisY: {
        title: "Adjusted annual rate of decline in FVC (mL/year)",
        reversed: true,
        tickThickness: 0,
        tickLength: 0,
        gridColor: "white"
    },
    axisX: {
        title: "axisX Title",
        titleWrap: false,

    },
    axisX2: {

        lineThickness: 0,
        tickThickness: 40,
        labelAngle: 0,
        tickLength: 0,
        gridColor: "white",
        labelFontSize: 18,
        labelFontWeight: "bold",
        labelTextAlign: "center"
    },
    data: [{
        type: "column",
        axisXType: "secondary",
        yValueFormatString: "#,##0 meters",
        indexLabelFontSize: 18,

        dataPoints: [
            { y: 700, label: "Nintedanib n=332", indexLabel: "\u2193 -187" },
            { y: 3000, label: "Placebo      n=332", indexLabel: "\u2193 -432" },


        ]
    }]
});
chart.render();

//chart 2

var chart = new CanvasJS.Chart("chartContainer2", {
    animationEnabled: true,
    exportEnabled: false,
    theme: "light1",
    title: {
        text: "UIP-like fibrotic pattern on HRCT",
        titleFontWeight: "bold"
    },
    width: 330,

    dataPointMaxWidth: 90,
    axisY: {
        reversed: true,
        tickThickness: 0,
        tickLength: 0,
        gridColor: "white"
    },
    axisX: {
        title: "axisX Title",
        titleWrap: false,

    },
    axisX2: {

        lineThickness: 0,
        tickThickness: 40,
        labelAngle: 0,
        tickLength: 0,
        gridColor: "white",
        labelFontSize: 18,
        labelFontWeight: "bold",
        labelTextAlign: "center"
    },
    data: [{
        type: "column",
        axisXType: "secondary",
        yValueFormatString: "#,##0 meters",
        indexLabelFontSize: 18,

        dataPoints: [
            { y: 700, label: "Nintedanib n=332", indexLabel: "\u2193 -187" },
            { y: 3000, label: "Placebo      n=332", indexLabel: "\u2193 -432" },


        ]
    }]
});
chart.render();

//chart 3

var chart = new CanvasJS.Chart("chartContainer3", {
    animationEnabled: true,
    exportEnabled: false,
    theme: "light1", // "light1", "light2", "dark1", "dark2"
    title: {
        text: "Other fibrotic pattern on HRCT",
        titleFontWeight: "bold"
    },
    width: 330,

    dataPointMaxWidth: 90,
    axisY: {
        reversed: true,
        tickThickness: 0,
        tickLength: 0,
        gridColor: "white"
    },
    axisX: {
        title: "axisX Title",
        titleWrap: false,

    },
    axisX2: {

        lineThickness: 0,
        tickThickness: 40,
        labelAngle: 0,
        tickLength: 0,
        gridColor: "white",
        labelFontSize: 18,
        labelFontWeight: "bold",
        labelTextAlign: "center"
    },
    data: [{
        type: "column",
        axisXType: "secondary",
        yValueFormatString: "#,##0 meters",
        indexLabelFontSize: 18,

        dataPoints: [
            { y: 700, label: "Nintedanib n=332", indexLabel: "\u2193 -187" },
            { y: 3000, label: "Placebo      n=332", indexLabel: "\u2193 -432" },


        ]
    }]
});
chart.render();


//chart 4

var chart = new CanvasJS.Chart("chartContainer4", {
    animationEnabled: true,
    exportEnabled: false,
    theme: "light1",
    title: {
        // text: "Other fibrotic pattern on HRCT"
    },
    width: 330,

    dataPointMaxWidth: 90,
    axisY: {

        title: "Adjusted mean absolute change in K-BILD total score from baseline",
        labelTextAlign: "center",
        reversed: true,
        tickThickness: 0,
        tickLength: 0,
        gridColor: "white"
    },
    axisX: {
        title: "axisX Title",
        titleWrap: false,

    },
    axisX2: {

        lineThickness: 0,
        tickThickness: 40,
        labelAngle: 0,
        tickLength: 0,
        gridColor: "white",
        labelFontSize: 18,
        labelFontWeight: "bold",
        labelTextAlign: "center"
    },
    data: [{
        type: "column",
        axisXType: "secondary",
        yValueFormatString: 0,
        indexLabelFontSize: 18,

        dataPoints: [
            { y: -700, label: "Nintedanib", indexLabel: "187" },
            { y: 1000, label: "Placebo", indexLabel: "–0.79" },


        ]
    }]

});
chart.render();