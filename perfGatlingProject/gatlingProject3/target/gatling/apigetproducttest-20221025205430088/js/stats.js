var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "65",
        "ok": "65",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "551",
        "ok": "551",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1457",
        "ok": "1457",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1203",
        "ok": "1203",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "304",
        "ok": "304",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1355",
        "ok": "1355",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1361",
        "ok": "1361",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1452",
        "ok": "1452",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1457",
        "ok": "1457",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 12,
    "percentage": 18
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 49,
    "percentage": 75
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.25",
        "ok": "16.25",
        "ko": "-"
    }
},
contents: {
"req_getsingleproduc-92164": {
        type: "REQUEST",
        name: "GetSingleProduct",
path: "GetSingleProduct",
pathFormatted: "req_getsingleproduc-92164",
stats: {
    "name": "GetSingleProduct",
    "numberOfRequests": {
        "total": "65",
        "ok": "65",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "551",
        "ok": "551",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1457",
        "ok": "1457",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1203",
        "ok": "1203",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "304",
        "ok": "304",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1355",
        "ok": "1355",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1361",
        "ok": "1361",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1452",
        "ok": "1452",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1457",
        "ok": "1457",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 12,
    "percentage": 18
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 49,
    "percentage": 75
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.25",
        "ok": "16.25",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
