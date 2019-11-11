// const TABLE = "table";

// var new_config = {
//     head: ["Fach", "Partner", "Übungsnr", "Deadline", "gemacht (x)"],
//     data: {
//         satd: {
//             name: "SATS",
//             due: "12. Nov 2019, 17:00  ",
//             partner: "Lukas",
//             nr: "4",
//             done: ""
//         },
//         netd: {
//             name: "Network Security",
//             due: "13. Nov 2019, 08:00  ",
//             partner: "Lukas",
//             nr: "2",
//             done: "x"
//         },
//         disd: {
//             name: "Display",
//             due: "20. Nov 2019, 07:55  ",
//             partner: "Clemens",
//             nr: "2",
//             done: "wip"
//         },
//         esd: {
//             name: "Modellierung (ES)",
//             due: "11. Nov 2019, 12:00  ",
//             partner: "Lukas",
//             nr: "2",
//             done: "x"
//         },
//         spezd: {
//             name: "Spezielle Algo",
//             due: "18. Nov 2019, 12:00  ",
//             partner: "Andreas",
//             nr: "1",
//             done: ""
//         }
//     }
//     // spezd: "-",
//     // esd: "11. Nov 2019, 12:00  ",
//     // disd: "20. Nov 2019, 07:55 "
// };
// var config = {
//     satd: "12. Nov 2019, 17:00  ",
//     netd: "13. Nov 2019, 08:00  ",
//     spezd: "-",
//     esd: "11. Nov 2019, 12:00  ",
//     disd: "20. Nov 2019, 07:55 "
// };

//config_json = JSON.parse(config);
//setconfig(config);
var date = new Date();
setconfig_new(new_config);


function createDataRowElement() {
    return document.createElement("TR");
}
//creates a table row 
// isHeader : true -> TH-Rows will be created
function createRow(isHeader) {
    return isHeader === true ? document.createElement("TH") : document.createElement("TD");
}

function appendDataSet(data) {
    var tr = createDataRowElement();
    var el = null;
    for (d_set in data) {
        el = createRow(false);
        if (d_set === "due") {
            var due = new Date(data[d_set]);
            console.log(due);
            if (date.getTime() > due.getTime()) {
                //deadline is over: red
                el.classList += " " + PAST_DEADLINE;
            } else if (date.getDate() <= due.getDate()) {
                var daysleft = Math.floor((due - date) / (1000 * 60 * 60 * 24));
                console.log("days left:" + daysleft);
                if (daysleft < DAYS_LEFT) {
                    //deadline is near: yellow
                    el.classList += " " + DUE_NEAR;
                } else {
                    //deadline is not near : green
                    el.classList += " " + DUE_NOT_NEAR;
                }
            }
        }
        el.innerText = data[d_set];
        //     if (el !== null) {
        //         el.innerText = config_json[p];
        //     }
        tr.appendChild(el);
    }
    return tr;
}


function setconfig(config_json) {
    for (var p in config_json) {
        var el = document.getElementById(p);
        //console.log(el);
        if (el !== null) {
            el.innerText = config_json[p];
        }
    }

}

function setconfig_new(config_json) {

    //print header
    var table = document.getElementById(TABLE);
    var tr = createDataRowElement();
    var el = null;
    for (var headname in config_json.head) {
        el = createRow(true);
        el.innerText = config_json.head[headname];
        tr.appendChild(el);
    }
    table.appendChild(tr);
    //print tr with dataset
    var data_set = null;
    for (var dataset in config_json.data) {
        //returns a tr element
        the_data_set = appendDataSet(config_json.data[dataset]);
        table.appendChild(the_data_set);
    }

}