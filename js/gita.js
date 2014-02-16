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
        case 2: audio_pos = {
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
        case 3: audio_pos = {
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
        case 4: audio_pos = {
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
        case 5: audio_pos = {
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
        case 6: audio_pos = {
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
        case 7: audio_pos = {
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

    if (!window.cordova  && chapter !== 0) create_audio_tags(document.getElementById("au_audible").value);
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

    if (!window.cordova)
        switch_audio(button.value);
    else
        switch_audio_cordova(button.value);
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
    var sa = [];

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

if (window.cordova) document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    if (media_gita === null) {
        var src = "file:///android_asset/www/audio/gita" + ch.lpad0(2) + ".mp3";
        media_gita = new Media(src, onSuccess, onError);
    }
    
    if (sessionStorage["au_audible"] === "ON") play_now(document.nav.select_verse.value);
}

function play_now(verse_no) {
    console.log("play_now('" + verse_no + "') / audio_pos[verse_no] = " + audio_pos[verse_no]);
    var fn = "file:///android_asset/www/audio/gita" + ch.lpad0(2) + ".mp3";
    
    if (media_gita !== null && media_gita.src !== fn) {
        media_gita.release();
        media_gita = new Media(fn, onSuccess, onError);
    }
    
    if (media_gita === null) {
        media_gita = new Media(fn, onSuccess, onError);
    }
    
    media_gita.play();
    media_gita.seekTo(Math.floor(audio_pos[verse_no] * 1000));
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