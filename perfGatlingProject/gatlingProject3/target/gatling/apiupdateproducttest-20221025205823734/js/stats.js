var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "479",
        "ok": "479",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1070",
        "ok": "1070",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "527",
        "ok": "527",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "64",
        "ok": "64",
        "ko": "-"
    },
    "percentiles1": {
        "total": "516",
        "ok": "516",
        "ko": "-"
    },
    "percentiles2": {
        "total": "532",
        "ok": "532",
        "ko": "-"
    },
    "percentiles3": {
        "total": "573",
        "ok": "573",
        "ko": "-"
    },
    "percentiles4": {
        "total": "700",
        "ok": "700",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 99,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.786",
        "ok": "1.786",
        "ko": "-"
    }
},
contents: {
"req_updateproduct-3f23d": {
        type: "REQUEST",
        name: "UpdateProduct",
path: "UpdateProduct",
pathFormatted: "req_updateproduct-3f23d",
stats: {
    "name": "UpdateProduct",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "479",
        "ok": "479",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1070",
        "ok": "1070",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "527",
        "ok": "527",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "64",
        "ok": "64",
        "ko": "-"
    },
    "percentiles1": {
        "total": "516",
        "ok": "516",
        "ko": "-"
    },
    "percentiles2": {
        "total": "532",
        "ok": "532",
        "ko": "-"
    },
    "percentiles3": {
        "total": "573",
        "ok": "573",
        "ko": "-"
    },
    "percentiles4": {
        "total": "700",
        "ok": "700",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 99,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.786",
        "ok": "1.786",
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
