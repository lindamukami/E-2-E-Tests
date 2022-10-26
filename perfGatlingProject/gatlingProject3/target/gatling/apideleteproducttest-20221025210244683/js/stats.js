var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "150",
        "ok": "150",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "767",
        "ok": "767",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3344",
        "ok": "3344",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2016",
        "ok": "2016",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "753",
        "ok": "753",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2028",
        "ok": "2028",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2678",
        "ok": "2678",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3232",
        "ok": "3232",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3305",
        "ok": "3305",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 27,
    "percentage": 18
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 120,
    "percentage": 80
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "30",
        "ok": "30",
        "ko": "-"
    }
},
contents: {
"req_deleteproduct-aa885": {
        type: "REQUEST",
        name: "DeleteProduct",
path: "DeleteProduct",
pathFormatted: "req_deleteproduct-aa885",
stats: {
    "name": "DeleteProduct",
    "numberOfRequests": {
        "total": "150",
        "ok": "150",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "767",
        "ok": "767",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3344",
        "ok": "3344",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2016",
        "ok": "2016",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "753",
        "ok": "753",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2028",
        "ok": "2028",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2678",
        "ok": "2678",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3232",
        "ok": "3232",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3305",
        "ok": "3305",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 27,
    "percentage": 18
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 120,
    "percentage": 80
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "30",
        "ok": "30",
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
