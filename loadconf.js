var config = {
    satd: "05.11.2019",
    netd: "06.11.2019",
    annd: "-",
    spezd: "-",
    esd: "04.11.2019",
    disd: "-"
};

//config_json = JSON.parse(config);
setconfig(config);

function setconfig(config_json) {
    for (var p in config_json) {
        var el = document.getElementById(p);
        //console.log(el);
        if (el !== null) {
            el.innerText = config_json[p];
        }
    }

}