var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "650",
        "ok": "650",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "40750",
        "ok": "40750",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "9809",
        "ok": "9809",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "13089",
        "ok": "13089",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1744",
        "ok": "1744",
        "ko": "-"
    },
    "percentiles2": {
        "total": "19050",
        "ok": "19050",
        "ko": "-"
    },
    "percentiles3": {
        "total": "36604",
        "ok": "36604",
        "ko": "-"
    },
    "percentiles4": {
        "total": "39449",
        "ok": "39449",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 232,
    "percentage": 36
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 51,
    "percentage": 8
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 367,
    "percentage": 56
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10.656",
        "ok": "10.656",
        "ko": "-"
    }
},
contents: {
"req_1-a-----------646396859": {
        type: "REQUEST",
        name: "1-a. 로그인",
path: "1-a. 로그인",
pathFormatted: "req_1-a-----------646396859",
stats: {
    "name": "1-a. 로그인",
    "numberOfRequests": {
        "total": "325",
        "ok": "325",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "74",
        "ok": "74",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "40750",
        "ok": "40750",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "18292",
        "ok": "18292",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "14001",
        "ok": "14001",
        "ko": "-"
    },
    "percentiles1": {
        "total": "19065",
        "ok": "19065",
        "ko": "-"
    },
    "percentiles2": {
        "total": "32212",
        "ok": "32212",
        "ko": "-"
    },
    "percentiles3": {
        "total": "37896",
        "ok": "37896",
        "ko": "-"
    },
    "percentiles4": {
        "total": "40051",
        "ok": "40051",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 80,
    "percentage": 25
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 243,
    "percentage": 75
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.328",
        "ok": "5.328",
        "ko": "-"
    }
}
    },"req_1-b--------------856095635": {
        type: "REQUEST",
        name: "1-b. 비즈니스 로직",
path: "1-b. 비즈니스 로직",
pathFormatted: "req_1-b--------------856095635",
stats: {
    "name": "1-b. 비즈니스 로직",
    "numberOfRequests": {
        "total": "325",
        "ok": "325",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "13703",
        "ok": "13703",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1326",
        "ok": "1326",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1633",
        "ok": "1633",
        "ko": "-"
    },
    "percentiles1": {
        "total": "901",
        "ok": "901",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1804",
        "ok": "1804",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4303",
        "ok": "4303",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6156",
        "ok": "6156",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 152,
    "percentage": 47
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 49,
    "percentage": 15
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 124,
    "percentage": 38
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.328",
        "ok": "5.328",
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
