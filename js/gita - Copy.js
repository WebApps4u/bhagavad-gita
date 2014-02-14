var chapter;
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

var audio_pos = {
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
    48: 839.234
};

var au = document.createElement("audio");

window.onload = function () {

    document.getElementById("select_chapter").getElementsByTagName('option')[chapter - 1].selected = 'selected';
    add_verse(verse_count[chapter]);
    if (typeof document.getElementById("select_verse").getElementsByTagName('option')[verse_count[chapter] - 1] != "undefined")
        document.getElementById("select_verse").getElementsByTagName('option')[verse_count[chapter] - 1].selected = 'selected';

    if (typeof sessionStorage["sa_visible"] == "undefined") sessionStorage["sa_visible"] = "ON";
    if (typeof sessionStorage["tr_visible"] == "undefined") sessionStorage["tr_visible"] = "ON";
    if (typeof sessionStorage["en_visible"] == "undefined") sessionStorage["en_visible"] = "ON";
    if (typeof sessionStorage["au_audible"] == "undefined") sessionStorage["au_audible"] = "OFF";

    document.getElementById("sa_visible").value = sessionStorage["sa_visible"];
    document.getElementById("tr_visible").value = sessionStorage["tr_visible"];
    document.getElementById("en_visible").value = sessionStorage["en_visible"];
    document.getElementById("au_audible").value = sessionStorage["au_audible"];

    document.getElementById("sa_visible").title = "Toggle Sanskrit text. [S]-KEY";
    document.getElementById("tr_visible").title = "Toggle transliteration. [T]-KEY";
    document.getElementById("en_visible").title = "Toggle English translation. [E]-KEY";
    document.getElementById("au_audible").title = "Toggle Audio. [A]-KEY";

    au.src = "audio/gita" + chapter.toString() + ".mp3";
    au.load();

    if (document.getElementById("au_audible").value == "ON") audio_start(1);
};

var audio_on, audio_verse_no = 1, slide_verse_no = 1, do_turn_with_audio = [];
function toggle_audio(button) {

    button.value = (button.value == "ON" ? "OFF" : "ON");
    sessionStorage[button.id] = button.value;
    button.blur();
    audio_on = (button.value == "ON" ? true : false)

    if (audio_on) {
        audio_start(slide_verse_no);
    }

    else {
        au.pause();
        //for (var i in do_turn_with_audio) clearTimeout(i);
    }
}

function audio_start(verse_no) {
    au.src = "audio/gita" + chapter.toString() + ".mp3#t=" + audio_pos[verse_no].toString() + (typeof audio_pos[verse_no + 1] != "undefined" ? "," + audio_pos[verse_no + 1].toString() : "");
    au.load();
    au.play();
    //do_turn_with_audio.push(setTimeout(turn_with_audio, (audio_pos[verse_no + 1] - audio_pos[verse_no]) * 1000));
}

function turn_with_audio() {
    Reveal.right();
    audio_verse_no++;
    do_turn_with_audio = setTimeout(turn_with_audio, audio_pos[audio_verse_no] * 1000);
}

Reveal.initialize({
    controls: false,
    progress: false,
    history: true,
    center: true,
    margin: 0,

    theme: Reveal.getQueryHash().theme || 'serif', // available themes are in /css/theme
    transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none
});

Reveal.addEventListener('ready', function (event) {
    document.getElementById("wait").style.display = "none";
    var slideid = event.currentSlide.id;
    if (slideid.substring(0, 4) == "link") {
        Reveal.right();
        return;
    }
});
 
Reveal.addEventListener('slidechanged', function (event) {

    var slideid = event.currentSlide.id;

    if (Reveal.isFirstSlide()) {
        if (slideid.substring(0, 4) == "link") {
            location.href = slideid.split("_")[1] + ".html#/" + "gita_" + (chapter-1).toString() + "-" + verse_count[chapter-1];
            return;
        }
    }

    if (Reveal.isLastSlide()) {
        if (slideid.substring(0, 4) == "link") {
            location.href = slideid.split("_")[1] + ".html";
            return;
        }
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

    show_hide();

    slide_verse_no = v + 1;
    if (audio_on && audio_verse_no != slide_verse_no) {
        audio_verse_no = slide_verse_no;
        au.pause();
        audio_start(slide_verse_no);
    }

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
    button.value = (button.value == "ON" ? "OFF" : "ON");
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

        if (document.getElementById("sa_visible").value == "ON")
            document.getElementById(sa_id).style.display = "block";
        else
            document.getElementById(sa_id).style.display = "none";

        if (document.getElementById("tr_visible").value == "ON")
            document.getElementById(tr_id).style.display = "block";
        else
            document.getElementById(tr_id).style.display = "none";

        if (document.getElementById("en_visible").value == "ON")
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