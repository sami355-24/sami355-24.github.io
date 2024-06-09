var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "43530",
        "ok": "22336",
        "ko": "21194"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "5",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "28264",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "3946",
        "ok": "6189",
        "ko": "1582"
    },
    "standardDeviation": {
        "total": "4566",
        "ok": "4744",
        "ko": "2865"
    },
    "percentiles1": {
        "total": "2392",
        "ok": "3875",
        "ko": "2"
    },
    "percentiles2": {
        "total": "6662",
        "ok": "9458",
        "ko": "2095"
    },
    "percentiles3": {
        "total": "12800",
        "ok": "15140",
        "ko": "7931"
    },
    "percentiles4": {
        "total": "19169",
        "ok": "21553",
        "ko": "9878"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 380,
    "percentage": 1
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 93,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 21863,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 21194,
    "percentage": 49
},
    "meanNumberOfRequestsPerSecond": {
        "total": "530.854",
        "ok": "272.39",
        "ko": "258.463"
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
        "total": "43530",
        "ok": "22336",
        "ko": "21194"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "5",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "28264",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "3946",
        "ok": "6189",
        "ko": "1582"
    },
    "standardDeviation": {
        "total": "4566",
        "ok": "4744",
        "ko": "2865"
    },
    "percentiles1": {
        "total": "2393",
        "ok": "3876",
        "ko": "2"
    },
    "percentiles2": {
        "total": "6660",
        "ok": "9458",
        "ko": "2095"
    },
    "percentiles3": {
        "total": "12798",
        "ok": "15140",
        "ko": "7931"
    },
    "percentiles4": {
        "total": "19162",
        "ok": "21553",
        "ko": "9878"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 380,
    "percentage": 1
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 93,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 21863,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 21194,
    "percentage": 49
},
    "meanNumberOfRequestsPerSecond": {
        "total": "530.854",
        "ok": "272.39",
        "ko": "258.463"
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
