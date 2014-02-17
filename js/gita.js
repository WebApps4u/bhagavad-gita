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
        case 9: audio_pos = {
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
        case 10: audio_pos = {
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
        case 11: audio_pos = {
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
        case 12: audio_pos = {
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
        case 13: audio_pos = {
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
        case 14: audio_pos = {
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
        case 15: audio_pos = {
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
        case 16: audio_pos = {
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
    if (onoff === "ON")
        play_now(document.nav.select_verse.value);
    else
        media_gita.stop();
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
    
    if (sessionStorage["au_audible"] === "ON") play_now(document.nav.select_verse.value);
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