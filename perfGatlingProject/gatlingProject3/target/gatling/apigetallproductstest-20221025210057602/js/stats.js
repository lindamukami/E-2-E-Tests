var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "110",
        "ok": "110",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "625",
        "ok": "625",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1891",
        "ok": "1891",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1085",
        "ok": "1085",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "323",
        "ok": "323",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1056",
        "ok": "1056",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1288",
        "ok": "1288",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1739",
        "ok": "1739",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1884",
        "ok": "1884",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 31,
    "percentage": 28
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 46,
    "percentage": 42
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 33,
    "percentage": 30
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "27.5",
        "ok": "27.5",
        "ko": "-"
    }
},
contents: {
"req_getallproducts-e964d": {
        type: "REQUEST",
        name: "GetAllProducts",
path: "GetAllProducts",
pathFormatted: "req_getallproducts-e964d",
stats: {
    "name": "GetAllProducts",
    "numberOfRequests": {
        "total": "110",
        "ok": "110",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "625",
        "ok": "625",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1891",
        "ok": "1891",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1085",
        "ok": "1085",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "323",
        "ok": "323",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1056",
        "ok": "1056",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1288",
        "ok": "1288",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1739",
        "ok": "1739",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1884",
        "ok": "1884",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 31,
    "percentage": 28
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 46,
    "percentage": 42
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 33,
    "percentage": 30
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "27.5",
        "ok": "27.5",
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
