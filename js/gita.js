var chapter, ch;
var verse_count = {
    1: 48,
    2: 73,
    3: 44,
    4: 43,
    5: 30,
    6: 48,
    7: 31,
    8: 29,
    9: 35,
    10: 43,
    11: 56,
    12: 21,
    13: 36,
    14: 28,
    15: 21,
    16: 25,
    17: 29,
    18: 79
};
var timeouts = [];

var audio_pos;
function set_audio_pos() {
    switch (chapter) {
        case 1: audio_pos = {
        1: 20.000,
        2: 45.950,
        3: 65.727,
        4: 83.911,
        5: 100.833,
        6: 117.672,
        7: 135.851,
        8: 152.628,
        9: 169.723,
        10: 187.937,
        11: 205.119,
        12: 221.423,
        13: 238.512,
        14: 255.115,
        15: 272.088,
        16: 289.306,
        17: 304.797,
        18: 322.728,
        19: 339.672,
        20: 356.528,
        21: 380.836,
        22: 391.809,
        23: 408.421,
        24: 425.548,
        25: 445.954,
        26: 462.440,
        27: 480.630,
        28: 497.706,
        29: 518.295,
        30: 534.317,
        31: 550.649,
        32: 566.395,
        33: 582.930,
        34: 600.868,
        35: 618.668,
        36: 634.740,
        37: 652.300,
        38: 669.120,
        39: 685.621,
        40: 702.107,
        41: 718.201,
        42: 735.340,
        43: 751.710,
        44: 769.924,
        45: 785.539,
        46: 801.880,
        47: 819.701,
        48: 839.234,
        49: 879.000
    }; break;
        case 2: audio_pos = {
            1: 15.000,
            2: 40.520,
            3: 59.764,
            4: 78.543,
            5: 98.985,
            6: 119.657,
            7: 141.164,
            8: 162.977,
            9: 183.410,
            10: 203.160,
            11: 219.104,
            12: 240.685,
            13: 257.641,
            14: 274.345,
            15: 293.146,
            16: 308.928,
            17: 325.342,
            18: 341.463,
            19: 358.518,
            20: 375.613,
            21: 395.193,
            22: 410.950,
            23: 429.832,
            24: 446.683,
            25: 464.046,
            26: 481.874,
            27: 499.840,
            28: 516.021,
            29: 532.174,
            30: 551.853,
            31: 568.893,
            32: 584.986,
            33: 600.571,
            34: 616.649,
            35: 633.003,
            36: 649.470,
            37: 665.600,
            38: 682.015,
            39: 697.863,
            40: 714.663,
            41: 730.980,
            42: 746.924,
            43: 763.017,
            44: 778.944,
            45: 795.315,
            46: 812.294,
            47: 828.434,
            48: 844.452,
            49: 860.475,
            50: 876.903,
            51: 892.939,
            52: 909.907,
            53: 925.331,
            54: 940.947,
            55: 959.904,
            56: 979.656,
            57: 994.977,
            58: 1011.655,
            59: 1028.719,
            60: 1044.333,
            61: 1059.971,
            62: 1075.622,
            63: 1092.950,
            64: 1110.612,
            65: 1127.592,
            66: 1144.058,
            67: 1160.056,
            68: 1175.904,
            69: 1193.009,
            70: 1210.371,
            71: 1229.527,
            72: 1245.881,
            73: 1264.065,
            74: 1298.882
        }; break;
        case 3: audio_pos = {
            1: 14.457,
            2: 40.370,
            3: 58.415,
            4: 81.848,
            5: 99.718,
            6: 117.147,
            7: 135.447,
            8: 152.746,
            9: 170.769,
            10: 188.955,
            11: 205.746,
            12: 222.595,
            13: 242.317,
            14: 261.285,
            15: 279.522,
            16: 297.247,
            17: 314.357,
            18: 331.714,
            19: 348.665,
            20: 365.340,
            21: 382.667,
            22: 398.791,
            23: 415.016,
            24: 431.778,
            25: 449.439,
            26: 466.625,
            27: 482.992,
            28: 498.869,
            29: 515.297,
            30: 531.217,
            31: 548.545,
            32: 565.974,
            33: 584.112,
            34: 600.723,
            35: 617.828,
            36: 635.591,
            37: 655.566,
            38: 675.631,
            39: 692.741,
            40: 710.286,
            41: 727.948,
            42: 745.595,
            43: 764.093,
            44: 781.937,
            45: 821.757
        }; break;
        case 4: audio_pos = {
            1: 13.250,
            2: 39.216,
            3: 57.092,
            4: 76.089,
            5: 96.929,
            6: 117.986,
            7: 135.808,
            8: 153.371,
            9: 171.624,
            10: 189.576,
            11: 207.775,
            12: 225.234,
            13: 242.518,
            14: 259.204,
            15: 275.664,
            16: 293.515,
            17: 311.293,
            18: 328.359,
            19: 344.816,
            20: 363.088,
            21: 380.227,
            22: 397.587,
            23: 414.737,
            24: 431.383,
            25: 448.664,
            26: 465.633,
            27: 483.309,
            28: 500.087,
            29: 518.327,
            30: 536.178,
            31: 553.927,
            32: 571.301,
            33: 588.858,
            34: 606.607,
            35: 623.282,
            36: 641.113,
            37: 657.756,
            38: 674.859,
            39: 690.651,
            40: 708.328,
            41: 725.174,
            42: 741.614,
            43: 759.636,
            44: 791.565
        }; break;
        case 5: audio_pos = {
            1: 14.367,
            2: 40.967,
            3: 61.608,
            4: 78.557,
            5: 96.334,
            6: 113.226,
            7: 130.300,
            8: 147.142,
            9: 164.339,
            10: 180.933,
            11: 197.674,
            12: 215.002,
            13: 231.576,
            14: 248.468,
            15: 265.250,
            16: 282.210,
            17: 299.349,
            18: 318.036,
            19: 334.658,
            20: 352.796,
            21: 370.474,
            22: 388.180,
            23: 405.167,
            24: 422.632,
            25: 440.570,
            26: 458.768,
            27: 476.648,
            28: 495.923,
            29: 514.031,
            30: 531.891,
            31: 573.852
        }; break;
        case 6: audio_pos = {
            1: 6.852,
            2: 32.174,
            3: 49.362,
            4: 66.249,
            5: 82.895,
            6: 100.615,
            7: 118.262,
            8: 136.258,
            9: 153.948,
            10: 171.175,
            11: 188.322,
            12: 204.858,
            13: 221.968,
            14: 238.846,
            15: 256.057,
            16: 273.893,
            17: 291.352,
            18: 308.133,
            19: 325.085,
            20: 342.682,
            21: 359.285,
            22: 375.385,
            23: 391.670,
            24: 409.029,
            25: 425.586,
            26: 441.498,
            27: 457.592,
            28: 473.324,
            29: 490.434,
            30: 507.471,
            31: 524.349,
            32: 541.706,
            33: 558.425,
            34: 579.134,
            35: 595.253,
            36: 615.676,
            37: 631.930,
            38: 651.911,
            39: 668.995,
            40: 686.012,
            41: 705.755,
            42: 723.490,
            43: 739.201,
            44: 755.127,
            45: 771.845,
            46: 788.501,
            47: 805.732,
            48: 822.682,
            49: 854.813
        }; break;
        case 7: audio_pos = {
            1: 11.581,
            2: 37.645,
            3: 55.480,
            4: 72.221,
            5: 88.718,
            6: 105.183,
            7: 121.339,
            8: 137.002,
            9: 153.295,
            10: 169.898,
            11: 186.964,
            12: 203.276,
            13: 220.807,
            14: 237.569,
            15: 254.447,
            16: 272.486,
            17: 288.591,
            18: 305.186,
            19: 322.757,
            20: 339.679,
            21: 357.549,
            22: 374.233,
            23: 390.511,
            24: 407.713,
            25: 424.321,
            26: 441.470,
            27: 457.168,
            28: 473.469,
            29: 491.363,
            30: 508.372,
            31: 524.437,
            32: 563.577
        }; break;
        case 8: audio_pos = {
            1: 13.656,
            2: 37.888,
            3: 53.794,
            4: 74.498,
            5: 90.892,
            6: 107.147,
            7: 124.635,
            8: 141.137,
            9: 157.254,
            10: 177.295,
            11: 196.174,
            12: 214.675,
            13: 231.320,
            14: 247.190,
            15: 263.615,
            16: 279.978,
            17: 295.849,
            18: 312.874,
            19: 329.105,
            20: 345.740,
            21: 361.671,
            22: 377.737,
            23: 394.305,
            24: 411.162,
            25: 428.295,
            26: 445.568,
            27: 462.162,
            28: 478.773,
            29: 497.416,
            30: 531.119
        }; break;
        case 9: audio_pos = {
            1: 9.858,
            2: 34.366,
            3: 50.620,
            4: 67.736,
            5: 84.497,
            6: 101.763,
            7: 118.748,
            8: 135.619,
            9: 151.783,
            10: 167.366,
            11: 183.360,
            12: 199.837,
            13: 217.125,
            14: 234.173,
            15: 251.395,
            16: 268.785,
            17: 284.617,
            18: 302.201,
            19: 319.149,
            20: 335.424,
            21: 357.086,
            22: 377.663,
            23: 395.527,
            24: 413.111,
            25: 429.404,
            26: 446.951,
            27: 463.057,
            28: 478.995,
            29: 495.905,
            30: 512.826,
            31: 529.296,
            32: 545.799,
            33: 563.257,
            34: 580.028,
            35: 596.452,
            36: 633.396
        }; break;
        case 10: audio_pos = {
            1: 2.153,
            2: 27.050,
            3: 43.449,
            4: 59.645,
            5: 77.191,
            6: 93.851,
            7: 110.903,
            8: 127.839,
            9: 144.122,
            10: 160.275,
            11: 176.500,
            12: 194.077,
            13: 212.447,
            14: 229.020,
            15: 245.028,
            16: 260.701,
            17: 277.884,
            18: 293.723,
            19: 308.723,
            20: 328.164,
            21: 343.508,
            22: 359.868,
            23: 377.257,
            24: 394.169,
            25: 410.043,
            26: 426.274,
            27: 443.224,
            28: 459.406,
            29: 476.647,
            30: 492.552,
            31: 509.155,
            32: 525.176,
            33: 541.750,
            34: 558.628,
            35: 575.477,
            36: 592.737,
            37: 608.202,
            38: 624.761,
            39: 641.262,
            40: 657.335,
            41: 673.262,
            42: 688.659,
            43: 704.621,
            44: 735.999
        }; break;
        case 11: audio_pos = {
            1: 13.526,
            2: 37.370,
            3: 53.130,
            4: 68.833,
            5: 84.434,
            6: 103.938,
            7: 120.279,
            8: 136.141,
            9: 152.657,
            10: 172.141,
            11: 186.776,
            12: 202.405,
            13: 217.716,
            14: 232.867,
            15: 248.825,
            16: 271.586,
            17: 290.670,
            18: 309.742,
            19: 327.850,
            20: 346.495,
            21: 365.188,
            22: 384.726,
            23: 404.012,
            24: 422.547,
            25: 440.628,
            26: 458.667,
            27: 477.896,
            28: 496.843,
            29: 514.793,
            30: 532.647,
            31: 551.055,
            32: 569.448,
            33: 591.762,
            34: 609.996,
            35: 628.546,
            36: 650.084,
            37: 671.767,
            38: 689.796,
            39: 706.654,
            40: 724.635,
            41: 742.952,
            42: 762.065,
            43: 781.541,
            44: 800.219,
            45: 819.032,
            46: 837.060,
            47: 855.326,
            48: 876.850,
            49: 895.377,
            50: 913.271,
            51: 934.984,
            52: 953.676,
            53: 972.685,
            54: 987.930,
            55: 1003.611,
            56: 1019.473,
            57: 1056.698
        }; break;
        case 12: audio_pos = {
            1: 6.676,
            2: 31.782,
            3: 52.594,
            4: 68.697,
            5: 84.937,
            6: 101.234,
            7: 117.493,
            8: 133.616,
            9: 148.027,
            10: 163.657,
            11: 178.939,
            12: 194.496,
            13: 211.291,
            14: 227.143,
            15: 243.200,
            16: 260.503,
            17: 276.830,
            18: 292.368,
            19: 308.216,
            20: 324.383,
            21: 341.406,
            22: 375.307
    }; break;
        case 13: audio_pos = {
            1: 15.456,
            2: 19.518,
            3: 39.706,
            4: 56.363,
            5: 72.490,
            6: 88.773,
            7: 104.463,
            8: 120.597,
            9: 136.999,
            10: 151.626,
            11: 167.219,
            12: 182.605,
            13: 199.274,
            14: 215.266,
            15: 230.492,
            16: 246.030,
            17: 261.689,
            18: 276.085,
            19: 291.396,
            20: 307.635,
            21: 322.519,
            22: 337.893,
            23: 353.199,
            24: 369.743,
            25: 384.633,
            26: 400.422,
            27: 416.588,
            28: 432.640,
            29: 447.515,
            30: 462.260,
            31: 477.260,
            32: 492.255,
            33: 508.246,
            34: 523.923,
            35: 539.482,
            36: 555.367,
            37: 592.408
        }; break;
        case 14: audio_pos = {
            1: 15.398,
            2: 41.474,
            3: 58.144,
            4: 74.377,
            5: 90.938,
            6: 106.577,
            7: 122.528,
            8: 139.684,
            9: 156.067,
            10: 172.379,
            11: 188.677,
            12: 205.235,
            13: 221.562,
            14: 237.957,
            15: 254.080,
            16: 269.093,
            17: 285.736,
            18: 302.817,
            19: 320.670,
            20: 337.325,
            21: 354.715,
            22: 374.498,
            23: 394.246,
            24: 409.847,
            25: 426.715,
            26: 444.152,
            27: 460.885,
            28: 478.244,
            29: 518.516
        }; break;
        case 15: audio_pos = {
            1: 17.641,
            2: 43.828,
            3: 65.299,
            4: 85.928,
            5: 106.043,
            6: 128.058,
            7: 145.096,
            8: 162.424,
            9: 180.764,
            10: 197.370,
            11: 215.496,
            12: 233.506,
            13: 250.746,
            14: 268.597,
            15: 287.086,
            16: 307.897,
            17: 325.268,
            18: 342.712,
            19: 360.011,
            20: 376.366,
            21: 393.898,
            22: 428.100
        }; break;
        case 16: audio_pos = {
            1: 13.090,
            2: 38.690,
            3: 56.555,
            4: 73.792,
            5: 91.177,
            6: 108.509,
            7: 126.276,
            8: 143.150,
            9: 159.168,
            10: 177.555,
            11: 195.319,
            12: 212.763,
            13: 231.168,
            14: 246.756,
            15: 263.339,
            16: 280.338,
            17: 297.443,
            18: 315.264,
            19: 333.187,
            20: 350.528,
            21: 368.336,
            22: 385.789,
            23: 403.768,
            24: 420.465,
            25: 438.330,
            26: 476.077
        }; break;
        case 17: audio_pos = {
            1: 25.236,
            2: 45.950,
            3: 65.727,
            4: 83.911,
            5: 100.833,
            6: 117.672,
            7: 135.851,
            8: 152.628,
            9: 169.723,
            10: 187.937,
            11: 205.119,
            12: 221.423,
            13: 238.512,
            14: 255.115,
            15: 272.088,
            16: 289.306,
            17: 304.797,
            18: 322.728,
            19: 339.672,
            20: 356.528,
            21: 380.836,
            22: 391.809,
            23: 408.421,
            24: 425.548,
            25: 445.954,
            26: 462.440,
            27: 480.630,
            28: 497.706,
            29: 518.295,
            30: 534.317,
            31: 550.649,
            32: 566.395,
            33: 582.930,
            34: 600.868,
            35: 618.668,
            36: 634.740,
            37: 652.300,
            38: 669.120,
            39: 685.621,
            40: 702.107,
            41: 718.201,
            42: 735.340,
            43: 751.710,
            44: 769.924,
            45: 785.539,
            46: 801.880,
            47: 819.701,
            48: 839.234,
            49: 879.000
        }; break;
        case 18: audio_pos = {
            1: 25.236,
            2: 45.950,
            3: 65.727,
            4: 83.911,
            5: 100.833,
            6: 117.672,
            7: 135.851,
            8: 152.628,
            9: 169.723,
            10: 187.937,
            11: 205.119,
            12: 221.423,
            13: 238.512,
            14: 255.115,
            15: 272.088,
            16: 289.306,
            17: 304.797,
            18: 322.728,
            19: 339.672,
            20: 356.528,
            21: 380.836,
            22: 391.809,
            23: 408.421,
            24: 425.548,
            25: 445.954,
            26: 462.440,
            27: 480.630,
            28: 497.706,
            29: 518.295,
            30: 534.317,
            31: 550.649,
            32: 566.395,
            33: 582.930,
            34: 600.868,
            35: 618.668,
            36: 634.740,
            37: 652.300,
            38: 669.120,
            39: 685.621,
            40: 702.107,
            41: 718.201,
            42: 735.340,
            43: 751.710,
            44: 769.924,
            45: 785.539,
            46: 801.880,
            47: 819.701,
            48: 839.234,
            49: 879.000
        }; break;
    }
}

window.onload = function () {

    ch = (chapter === 0 ? 1 : chapter);
    set_audio_pos();
     
    document.getElementById("select_chapter").getElementsByTagName('option')[ch - 1].selected = 'selected';
    add_verse(verse_count[ch]);

    if (typeof sessionStorage["sa_visible"] === "undefined") sessionStorage["sa_visible"] = "ON";
    if (typeof sessionStorage["tr_visible"] === "undefined") sessionStorage["tr_visible"] = "ON";
    if (typeof sessionStorage["en_visible"] === "undefined") sessionStorage["en_visible"] = "ON";
    if (typeof sessionStorage["au_audible"] === "undefined") sessionStorage["au_audible"] = "OFF";

    document.getElementById("sa_visible").value = sessionStorage["sa_visible"];
    document.getElementById("tr_visible").value = sessionStorage["tr_visible"];
    document.getElementById("en_visible").value = sessionStorage["en_visible"];
    document.getElementById("au_audible").value = sessionStorage["au_audible"];

    document.getElementById("sa_visible").title = "Toggle Sanskrit text. [S]-KEY";
    document.getElementById("tr_visible").title = "Toggle transliteration. [T]-KEY";
    document.getElementById("en_visible").title = "Toggle English translation. [E]-KEY";
    document.getElementById("au_audible").title = "Toggle Audio. [A]-KEY";

    if (!window.cordova) create_audio_tags(document.getElementById("au_audible").value);
};

function create_audio_tags(onoff) {

    for (var i in audio_pos) {
        var au = document.createElement("audio");
        au.id = "gita_au_" + chapter.toString() + "-" + i.toString();
        au.src = "audio/gita" + chapter.lpad0(2) + ".mp3#t=" +  (audio_pos[i].toString()) + (typeof audio_pos[Number(i) + 1] !== "undefined" ? "," + (audio_pos[Number(i) + 1]) : "");
        au.setAttribute("data-play-from", audio_pos[i].toString());
        au.preload = "auto";
        var section_id = "gita_" + chapter.toString() + "-" + i.toString();
        var section = document.getElementById(section_id);
        if (section !== null) 
            section.appendChild(au);
     }
    
    switch_audio(onoff);
}

function switch_audio(onoff) {

    for (var i in audio_pos) {
        var au_id = "gita_au_" + chapter.toString() + "-" + i.toString();
        var au = document.getElementById(au_id);
        var section_id = "gita_" + chapter.toString() + "-" + i.toString();
        var section = document.getElementById(section_id);
        
        if (section !== null) {
            if (onoff === "ON") {
                au.setAttribute("data-autoplay", "");
                section.setAttribute("data-autoslide", Math.floor((audio_pos[Number(i) + 1] - audio_pos[i]) * 1000));
            }

            else {
                au.removeAttribute("data-autoplay");
                section.removeAttribute("data-autoslide");
            }
        }
    }

    var slideid = Reveal.getCurrentSlide().id;
    for (var t in timeouts) clearTimeout(timeouts[t]); timeouts = [];

    if (slideid.substring(0, 4) !== "link") {
        var au_id = "gita_au_" + slideid.split("_")[1];
        if (onoff === "ON" && Number(document.getElementById(slideid).getAttribute("data-autoslide")) > 1000) {
            var au = document.getElementById(au_id);
            au.load();
            au.play();
            timeouts.push(setTimeout(function () {
                Reveal.next();
            }, Number(document.getElementById(slideid).getAttribute("data-autoslide"))));
        }

        else {
            document.getElementById(au_id).pause();
        }
    }
}

function switch_audio_cordova(onoff) {
    
    if (onoff === "ON") {
        play_now(document.nav.select_verse.value);
        var cur_verse_duration = Math.floor((audio_pos[Number(document.nav.select_verse.value) + 1] - audio_pos[document.nav.select_verse.value]) * 1000);
        timeouts.push(setTimeout(function () { 
            Reveal.next();
        }, cur_verse_duration)); 
    }
    
    else {
        media_gita.stop();
        for (var t in timeouts) clearTimeout(timeouts[t]); timeouts = [];
    }
}

function toggle_audio(button) {

    button.value = (button.value === "ON" ? "OFF" : "ON");
    sessionStorage[button.id] = button.value;
    button.blur();

    if (window.cordova)
        switch_audio_cordova(button.value);
    else
        switch_audio(button.value);
}

Reveal.initialize({
    controls: false,
    progress: false,
    history: true,
    center: true,
    margin: 0,

    theme: Reveal.getQueryHash().theme || 'serif', // available themes are in /css/theme
    transition: Reveal.getQueryHash().transition || 'default' // default/cube/page/concave/zoom/linear/fade/none
});

Reveal.addEventListener('ready', function (event) {
    document.getElementById("wait").style.display = "none";
    var slideid = event.currentSlide.id;
    if (slideid.substring(0, 4) === "link") {
        Reveal.right();
        return;
    }
    
    var c = 0, v = 0;
    
    var s = slideid.split("_");
    var sa = [];

    if (s.length === 2) {
        sa = s[1].split("-");
        if (sa.length === 2) {
            c = sa[0] - 1; v = sa[1] - 1;
            document.getElementById("select_chapter").getElementsByTagName('option')[c].selected = 'selected';
            document.getElementById("select_verse").getElementsByTagName('option')[v].selected = 'selected';
        }
    }    
});
 
Reveal.addEventListener('slidechanged', function (event) {

    var slideid = event.currentSlide.id;
    
    if (slideid.substring(0, 4) === "link" && Reveal.isFirstSlide()) {
        location.href = slideid.split("_")[1] + ".html#/" + "gita_" + (ch-1).toString() + "-" + verse_count[ch-1];
        return;
    }

    if (slideid.substring(0, 4) === "link" && Reveal.isLastSlide()) {
        location.href = slideid.split("_")[1] + ".html";
        return;
    }

    var c = 0, v = 0;
    
    var s = slideid.split("_");
    var sa = [];

    if (s.length === 2) {
        sa = s[1].split("-");
        if (sa.length === 2) {
            c = sa[0] - 1; v = sa[1] - 1;
            document.getElementById("select_chapter").getElementsByTagName('option')[c].selected = 'selected';
            document.getElementById("select_verse").getElementsByTagName('option')[v].selected = 'selected';
        }
    }

    for (var t in timeouts) clearTimeout(timeouts[t]); timeouts = [];
    
    var cur_verse_duration = Math.floor((audio_pos[Number(document.nav.select_verse.value) + 1] - audio_pos[document.nav.select_verse.value]) * 1000);
    
    console.log("slidechanged: currentSlide.id = " + slideid + " / duration = " + cur_verse_duration);
    if (sessionStorage["au_audible"] === "ON" && cur_verse_duration > 1000) {
        
        if (window.cordova) 
            play_now(document.nav.select_verse.value);
        else {
            var au_id = "gita_au_" + slideid.split("_")[1];
            var au = document.getElementById(au_id);
            au.currentTime = au.getAttribute("data-play-from");
        }
        
        timeouts.push(setTimeout(function () {
            Reveal.next();
        }, cur_verse_duration));
    }

    show_hide();
});

document.onkeydown = function (evt) {
    evt = evt || window.event;
    switch (evt.keyCode) {
        case 67: document.nav.select_chapter.focus(); break;
        case 86: document.nav.select_verse.focus(); break;
        case 83: toggle(document.getElementById("sa_visible")); break;
        case 69: toggle(document.getElementById("en_visible")); break;
        case 84: toggle(document.getElementById("tr_visible")); break;
        case 65: toggle_audio(document.getElementById("au_audible")); break;
        //default: alert(evt.keyCode); break;
    }
};

function toggle(button) {
    button.value = (button.value === "ON" ? "OFF" : "ON");
    sessionStorage[button.id] = button.value;
    button.blur();
    show_hide();
}

function show_hide() {

    var slide = Reveal.getCurrentSlide();
    var slideid = slide.id;
    var s = slideid.split("_");

    if (s.length === 2) {
        var sa_id = "gita_sa_" + s[1];
        var tr_id = "gita_tr_" + s[1];
        var en_id = "gita_en_" + s[1];

        if (document.getElementById("sa_visible").value === "ON")
            document.getElementById(sa_id).style.display = "block";
        else
            document.getElementById(sa_id).style.display = "none";

        if (document.getElementById("tr_visible").value === "ON")
            document.getElementById(tr_id).style.display = "block";
        else
            document.getElementById(tr_id).style.display = "none";

        if (document.getElementById("en_visible").value === "ON")
            document.getElementById(en_id).style.display = "block";
        else
            document.getElementById(en_id).style.display = "none";

        // force redraw
        Reveal.configure();
    }
}

function chapter_change() {
    add_verse(verse_count[document.nav.select_chapter.value]);

    location.href = "chapter" + document.nav.select_chapter.value + ".html";
    document.nav.select_chapter.blur();
}

function verse_change() {
    var verseid = "gita_" + document.nav.select_chapter.value + "-" + document.nav.select_verse.value;
    location.href = "#/" + verseid;
    document.nav.select_verse.blur();
}

function add_verse(count) {
    var select_verse = document.getElementById("select_verse");
    select_verse.innerHTML = "";
    for (var i = 1; i <= count; i++) {
        var option = document.createElement("option");
        option.text = i;
        select_verse.add(option);
    }
}

var media_gita = null;

if (window.cordova) { 
    document.addEventListener("deviceready", onDeviceReady, false);
    document.addEventListener("pause", onPause, false);
    document.addEventListener("resume", onResume, false);
    document.addEventListener("menubutton", onMenu, false);
}

function onMenu() {
    var event = document.createEvent('MouseEvents');;
    event.initMouseEvent('mousedown', true, true, window);
    document.getElementById("select_chapter").dispatchEvent(event);
}

function onPause() {
    if (sessionStorage["au_audible"] === "ON") {
        document.getElementById("au_audible").value = "OFF";
        switch_audio_cordova("OFF");
        for (var t in timeouts) clearTimeout(timeouts[t]); timeouts = [];
    }
}

function onResume() {
    document.getElementById("au_audible").value = sessionStorage["au_audible"];
    switch_audio_cordova(sessionStorage["au_audible"]);
    var cur_verse_duration = Math.floor((audio_pos[Number(document.nav.select_verse.value) + 1] - audio_pos[document.nav.select_verse.value]) * 1000);
    
    timeouts.push(setTimeout(function () { 
        Reveal.next();
    }, cur_verse_duration));
}

var now_playing;
function onDeviceReady() {
    if (media_gita === null) {
        var src = "file:///android_asset/www/audio/gita" + ch.lpad0(2) + ".mp3";
        console.log("playing " + src);
        now_playing = src;
        media_gita = new Media(src, onSuccess, onError, mediaStatus);
    }
    
    if (sessionStorage["au_audible"] === "ON") {
        play_now(document.nav.select_verse.value);
        var cur_verse_duration = Math.floor((audio_pos[Number(document.nav.select_verse.value) + 1] - audio_pos[document.nav.select_verse.value]) * 1000);
        timeouts.push(setTimeout(function () { 
            Reveal.next();
        }, cur_verse_duration + 500));    
    }
}

function play_now(verse_no) {
    var fn = "file:///android_asset/www/audio/gita" + ch.lpad0(2) + ".mp3";
    console.log("play_now('" + verse_no + "') / file = " + fn + " / audio_pos[verse_no] = " + audio_pos[verse_no]);
    
    if (media_gita !== null && now_playing !== fn) {
        media_gita.release();
        now_playing = fn;
        media_gita = new Media(fn, onSuccess, onError, mediaStatus);
    }
    
    if (media_gita === null) {
        now_playing = fn;
        media_gita = new Media(fn, onSuccess, onError, mediaStatus);
    }

    media_gita.play();
    
    setTimeout(function () {
       media_gita.seekTo(Math.floor(audio_pos[verse_no] * 1000)); 
    }, 500);
    
}

function mediaStatus(status) {
    switch(status){
        case Media.MEDIA_NONE: console.log(now_playing + " Status: MEDIA_NONE"); break;
        case Media.MEDIA_STARTING: console.log(now_playing + " Status: MEDIA_STARTING"); break;
        case Media.MEDIA_RUNNING: console.log(now_playing + " Status: MEDIA_RUNNING"); break;
        case Media.MEDIA_PAUSED: console.log(now_playing + " Status: MEDIA_PAUSED"); break;
        case Media.MEDIA_STOPPED: console.log(now_playing + " Status: MEDIA_STOPPED"); break;
        default: console.log(now_playing + " Status: UNKNOWN = " + status); break;
    }
}

function onSuccess() {
    console.log("Media object created");
}

function onError(error) {
    console.log("Error creating Media object. code: " + error.code + " message: " + error.message);
}

String.prototype.lpad = function(padString, length) {
    var str = this.toString();
    while (str.length < length)
        str = padString + str;
    return str;
};

String.prototype.lpad0 = function(length) {
    var str = this.toString();
    return str.lpad("0", length);
};

Number.prototype.lpad = function(padString, length) {
    var str = this.toString();
    return str.lpad(padString, length);
};

Number.prototype.lpad0 = function(length) {
    var str = this.toString();
    return str.lpad("0", length);
};