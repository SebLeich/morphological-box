/**
 * the class contains an evaluation approach
 */
class Approach {
    /**
     * the constructor creates a new instance of an evaluation approach
     */
    constructor(object) {
        this.id = object.id;
        this.name = object.name;
        this.short = object.short;
        this.origin = object.origin;
        this.sources = object.sources;
        this.attributes = object.attributes;
        this.time = object.time;
        this.authors = object.authors;
        this.procedure = [];
        this.firstIteration = object.firstIteration;
        if (object != null && typeof (object) != "undefined") {
            if (object.procedure != null && typeof (object.procedure) != "undefined") {
                this.procedure = object.procedure;
            }
        }
    }
    /**
     * the method adds the event listeners/ the dynamic content to the details view
     */
    addListeners(id) {
        if (!$("#" + id).hasClass("event-listener-added")) {
            $("#" + id).addClass("event-listener-added");
            var set = AttributeGroup.getApproachesForGroups();
            if (!jQuery.isEmptyObject(set[this.id])) {
                var c = set[this.id];
                var data = {
                    labels: [], datasets: [{
                        backgroundColor: [],
                        borderColor: [],
                        data: []
                    }]
                };
                for (var index in c) {
                    // index = id of attribute group, c[index] = list of all attribute ids within the approach and the attribute group
                    if (index === "none") {
                        var g = { name: "other", color: "grey" };
                    } else {
                        var g = attributeGroups.find(x => x.id == index);
                    }
                    data.labels.push(g.name);
                    data.datasets[0].backgroundColor.push(g.color);
                    data.datasets[0].borderColor.push(g.color2);
                    data.datasets[0].data.push(c[index].length);
                }
                $("#" + id).append("<canvas id='" + id + "-chart1' class='approach-chart'></canvas>");
                var chart1 = new Chart($("#" + id + "-chart1"), {
                    type: "pie",
                    data: data,
                    options: {
                        title: {
                            display: true,
                            text: "shares of quality characteristics"
                        },
                        legend: {
                            position: "bottom"
                        },
                        plugins: {
                            datalabels: {
                                formatter: (value, ctx) => {
                                    let sum = 0;
                                    let dataArr = ctx.chart.data.datasets[0].data;
                                    dataArr.map(data => {
                                        sum += data;
                                    });
                                    let percentage = (value*100 / sum).toFixed(0)+"%";
                                    console.log(percentage);
                                    return percentage;
                                },
                                color: '#fff',
                            }
                        }
                    }
                });
            }
        }
    }
    /**
     * the method creates the details view of the approach
     */
    generateDetailView() {
        var id = generateId();
        var html = "<div id='" + id + "' class='details-view'><div class='tag-panel'>";
        html += "<div class='tag tag-approach'>approach</div><div class='tag tag-attribute'>" + this.attributes.length + " attributes</div>";
        html += "</div><span class='headline'>" + this.name + "</span>";
        if (this.short != null && typeof (this.short) != "undefined") {
            html += "<span class='subtitle'>(" + this.short + ")</span>";
        }
        if (this.time != null && typeof (this.time) != "undefined") {
            html += "<span class='source'><i class='material-icons icon'>today</i>" + this.time + "</span>";
        }
        for (var index in this.authors) {
            html += "<span class='source'><i class='material-icons icon'>person</i>" + this.authors[index] + "</span>";
        }
        for (var index in this.sources) {
            html += "<span class='source'><i class='material-icons icon'>import_contacts</i>" + this.sources[index] + "</span>";
        }
        if (this.procedure.length > 0) {
            html += "<span class='approaches'><i class='material-icons icon'>list_alt</i>the steps of the procedure:</span>"
            for (var index in this.procedure) {
                html += this.procedure[index].generateListView();
            }
        }
        html += "</div>";
        return {
            html: html,
            id: id
        };
    }
    /**
     * the method returns all dimensions (distinct) with the count of the empirical assessable quality characteristics
     */
    static sortApproachesWithEmpiricalAssessment() {
        var output = {};
        for (var index in approaches) {
            var a = approaches[index];
            if (typeof (output[a.id]) == "undefined") output[a.id] = { "true": [], "false": [], "none": [] };
            for (var i2 in a.attributes) {
                var b = attributes.find(x => x.id == a.attributes[i2]);
                if (typeof (b) != "undefined" && b != null) {
                    if (b.isEmpiricalAssessable === true) {
                        output[a.id]["true"].push(b.id);
                    } else if (b.isEmpiricalAssessable === false) {
                        output[a.id]["false"].push(b.id);
                    } else {
                        output[a.id]["none"].push(b.id);
                    }
                } else {
                    console.log("unknown attribute reference in approach '" + a.name + "' (" + a.id + "): " + a.attributes[i2]);
                }
            }
        }
        return output;
    }
    /**
     * the function creates a datalist option of the current approach
     */
    toDatalistOption() {
        var html = "<option>[" + this.id + "] " + this.name;
        if (this.short != null) {
            html += " (" + this.short + ")";
        }
        html += "</option>";
        return html;
    }
    /**
     * the function creates a representative string of the current approach
     */
    toString() {
        if (this.short != null && typeof (this.short) != "undefined") {
            return this.short;
        } else {
            return this.name;
        }
    }
}
/**
 * the class contains an attribute of a evaluation approach
 */
class Attribute {
    /**
     * the constructor creates a new instance of an evaluation approach
     */
    constructor(object) {
        this.id = object.id;
        this.title = object.title;
        this.desc = object.desc;
        this.dim = object.dim;
        this.source = object.source;
        this.group = null;
        this.isEmpiricalAssessable = null;
        if (object != null && typeof (object) != "undefined") {
            if (object.group != null && typeof (object.group) != "undefined") this.group = object.group;
            if (object.isEmpiricalAssessable != null && typeof (object.isEmpiricalAssessable) != "undefined") this.isEmpiricalAssessable = object.isEmpiricalAssessable;
        }
    }
    /**
     * the method creates the details view of the attribute
     */
    generateDetailView() {
        var html = "<div class='details-view'><div class='tag-panel'>";
        var d = dimensions.find(x => x.id == this.dim);
        html += "<div class='tag tag-attribute'>attribute</div><div class='tag tag-dimension'>" + d.toString() + "</div>";
        html += "</div><span class='headline'>" + this.title + "</span>";
        if (this.desc != null && typeof (this.desc) != "undefined") {
            html += "<span class='desc'>" + this.desc + "</span>";
        }
        html += "<span class='source'><i class='material-icons icon'>import_contacts</i>" + this.source + "</span><span class='approaches'><i class='material-icons icon'>list_alt</i>the property is used in the following evaluation approaches:</span>";
        var a = approaches.filter(x => x.attributes.includes(this.id));
        for (var index in a) {
            html += "<span class='approach-suggestion approach-invoker' data-approach='" + a[index].id + "'>- " + a[index].toString() + "</span>";
        }
        html += "</div>";
        return html;
    }
    /**
     * the function checks, if the attribute has a content
     */
    get hasContent() {
        if (this.desc != null && typeof (this.desc) != "undefined") return true;
        if (this.source != null && typeof (this.source) != "undefined") return true;
        return false;
    }
    /**
     * the method returns an object which contains all attributes sorted by their empirical assessment
     */
    static sortAttributesByIsEmpiricalAssessable() {
        return {
            "true": attributes.filter(x => x.isEmpiricalAssessable == true),
            "false": attributes.filter(x => x.isEmpiricalAssessable == false),
            "none": attributes.filter(x => x.isEmpiricalAssessable == null)
        };
    }
    /**
     * the method returns the attributes characteristics within a string
     */
    toString(){
        return this.title;
    }
}
/**
 * the class contains an attribute family
 */
class AttributeGroup {
    /**
     * the constructor creates a new instance of an attribute family
     */
    constructor(object) {
        this.id = object.id;
        this.name = object.name;
        this.color = object.color;
        this.color2 = object.color2;
    }
    /**
     * the method returns all attributes for the given 
     */
    static getAllAttributesForGroup(id) {
        return attributes.filter(x => x.group == id);
    }
    /**
     * the method returns all approaches for the given group
     */
    static getAllApproachesForGroup(id) {
        var output = [];
        var a = AttributeGroup.getAllAttributesForGroup(id);
        for(var index in a){
            var app = approaches.filter(x => x.attributes.includes(a[index].id));
            for(var i2 in app) if(!output.includes(app[i2].id)) output.push(app[i2].id);
        }
        return output;
    }
    /**
     * the method returns the counter of the attribute group
     */
    static getAllAttributesForAllGroups() {
        var output = [];
        for (var index in attributeGroups) {
            var g = attributeGroups[index];
            output[g.id] = AttributeGroup.getAllAttributesForGroup(g.id);
        }
        return output;
    }
    /**
     * the method returns the counter of the attribute group
     */
    static getAllApproachesForAllGroups() {
        var output = [];
        for (var index in attributeGroups) {
            var g = attributeGroups[index];
            output[g.id] = AttributeGroup.getAllApproachesForGroup(g.id);
        }
        return output;
    }
    /**
     * the method returns all approaches for all groups with the number of attributes within the group 
     */
    static getApproachesForGroups() {
        var output = {};
        for (var index in approaches) {
            var a = approaches[index]; // a = approach
            output[a.id] = {};
            for (var i2 in a.attributes) {
                var b = attributes.find(x => x.id === a.attributes[i2]); // b = attribute
                if (b.group != null && typeof (b.group) != "undefined") {
                    var g = attributeGroups.find(x => x.id == b.group);
                    if (!Array.isArray(output[a.id][g.id])) {
                        output[a.id][g.id] = [];
                    }
                    output[a.id][g.id].push(b.id);
                } else {
                    if (b.dim === 5) {
                        if (!Array.isArray(output[a.id]["none"])) {
                            output[a.id]["none"] = [];
                        }
                        output[a.id].none.push(b.id);
                    }
                }
            }
        }
        return output;
    }
}
/**
 * the class contains the main functions of the application
 */
class Builder {
    /**
     * the method adds the dynamic content listeners, e.g. for using the click listeners for the approach detail views
     */
    static addDynamicContentListeners() {
        $(".approach-invoker").each(function () {
            if (!$(this).hasClass("click-event-added")) {
                $(this).addClass("click-event-added");
                $(this).click(function () {
                    Builder.clearDetails();
                    var a = approaches.find(x => x.id == $(this).data("approach"));
                    if (a != null && typeof (a) != "undefined") {
                        var content = a.generateDetailView();
                        $("#details").append(content.html);
                        a.addListeners(content.id);
                        Builder.showDetails();
                    }
                });
            }
        });
    }
    /**
     * the method clears the detail view
     */
    static clearDetails() {
        $("#details > *").not(".fixed").remove();
    }
    /**
     * the method returns a set of all dimensions and the approaches, that are represented and missed within
     */
    static getApproachesWithinDimensions(){
        var temp = {};
            for(var dim in dimensions){
                var d = dimensions[dim].id;
                var at = attributes.filter(x => x.dim == d).map(x => x.id);
                temp[d] = [];
                for(var i in at){
                    var aps = approaches.filter(x => x.attributes.includes(at[i]));
                    for(var index in aps){
                        if(!temp[d].includes(aps[index].id)) temp[d].push(aps[index].id);
                    }
                }
            }
            var allApps = approaches.map(x => x.id);
            var output = {};
            for(var index in temp){
                output[index] = { contained: temp[index] };
                output[index].missed = allApps.filter(
                    function(i){
                        return temp[index].indexOf(i) < 0;
                    }
                );
            }
            return output;
    }
    /**
     * the method hides the details view window
     */
    static hideDetails() {
        $("#details").hide();
    }
    /**
     * the method shows the details view
     */
    static showDetails() {
        $("#details").show();
    }
    /**
     * the method starts the application's runtime
     */
    static start() {
        $(".footer-item.dimensions .text").text(dimensions.length);
        $(".footer-item.approaches .text").text(approaches.length);
        $(".footer-item.properties .text").text(attributes.length);
        for (var index in approaches) {
            $("#approaches").append(approaches[index].toDatalistOption());
        }
        for (var index in dimensions) {
            var d = dimensions[index];
            var content = d.generateListView();
            $("#morph-box .body").append(content.html);
        }
        for(var index in iterationSteps){
            var isNotLast = true;
            if(index == (iterationSteps.length-1)){
                isNotLast = false;
            }
            var c = iterationSteps[index].generate(isNotLast);
            $("#nick-container-content").append(c.html);
            iterationSteps[index].addListeners(c.id);
        }
        $("#nick-container-content").append("<div style='min-width: 10px;'></div>");
        var s = AttributeGroup.getAllAttributesForAllGroups();
        var data = {
            labels: [], datasets: [], borderWidth: 1
        };
        s.sort((a, b) => (a.length > b.length) ? -1 : (a.length < b.length) ? 1 : 0);
        for (var index in s) {
            if (s[index] != null && typeof (s[index]) != "undefined") {
                // index = id of attribute group, s[index] = list of all attribute ids within the attribute group
                var g = attributeGroups.find(x => x.id == index);
                if(g != null && typeof(g) != "undefined"){
                    //data.labels.push(g.name);
                    data.datasets.push({
                        label: g.name,
                        backgroundColor: g.color,
                        borderColor: g.color2,
                        data: [s[index].length],
                        borderWidth: 2
                    });
                }
            }
        }
        var t = AttributeGroup.getAllApproachesForAllGroups();
        var data2 = {
            labels: [], datasets: [], borderWidth: 1
        };
        t.sort((a, b) => (a.length > b.length) ? -1 : (a.length < b.length) ? 1 : 0);
        for(var index in t){
            var a = attributeGroups.find(x => x.id == index); // a = attribute group
            if(a != null && typeof(a) != "undefined"){
                //data2.labels.push(a.name);
                data2.datasets.push({
                    label: a.name,
                    backgroundColor: a.color,
                    borderColor: a.color2,
                    data: [t[index].length],
                    borderWidth: 2
                });
            }
        }
        var u = Attribute.sortAttributesByIsEmpiricalAssessable();
        var data4 = {
            labels: [], datasets: [], borderWidth: 1
        };
        var v = Dimension.getAllAttributesForAllDimensions();
        v.sort((a, b) => (a.length > b.length) ? -1 : (a.length < b.length) ? 1 : 0);
        for(var index in v){
            var d = dimensions.find(x => x.id == index);
            if(d != null && typeof(d) != "undefined"){
                data4.datasets.push({
                    label: d.title,
                    data: [v[index].length],
                    borderWidth: 2
                });
            }
        }
        var data3 = {
            labels: ["theoretical measurable", "empirical measurable"], datasets: [{
                backgroundColor: ["rgba(255, 174, 0, .5)", "rgba(255, 81, 0, .5)"],
                borderColor: ["rgba(255, 174, 0, 1)", "rgba(255, 81, 0, 1)"],
                data: [u["false"].length, u["true"].length]
            }], borderWidth: 1
        };
        $("#chart-cp-container-content").append("<canvas id='chart-cp-container-chart1' class='cp-chart'></canvas>");
        var chart2 = new Chart(document.getElementById("chart-cp-container-chart1"), {
            type: "bar",
            data: data,
            options: {
                title: {
                    display: true,
                    text: "total numbers of attributes within the groups"
                },
                legend: {
                    position: "bottom"
                },
                responsive: true,
                scales: {
                    min: 0,
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            precision: 0
                        }
                    }]
                }
            }
        });
        $("#chart-cp-container-content").append("<canvas id='chart-cp-container-chart2' class='cp-chart'></canvas>");
        var chart3 = new Chart(document.getElementById("chart-cp-container-chart2"), {
            type: "bar",
            data: data4,
            options: {
                title: {
                    display: true,
                    text: "number of attributes within the dimensions"
                },
                legend: {
                    position: "bottom"
                },
                responsive: true,
                scales: {
                    min: 0,
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            precision: 0
                        }
                    }]
                }
            }
        });
        $("#chart-cp-container-content").append("<canvas id='chart-cp-container-chart4' class='cp-chart'></canvas>");
        var chart5 = new Chart(document.getElementById("chart-cp-container-chart4"), {
            type: "bar",
            data: data2,
            options: {
                title: {
                    display: true,
                    text: "total numbers of approaches containing attributes of each group"
                },
                legend: {
                    position: "bottom"
                },
                responsive: true,
                scales: {
                    min: 0,
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            precision: 0
                        }
                    }]
                }
            }
        });
        $("#chart-cp-container-content").append("<canvas id='chart-cp-container-chart3' class='cp-chart'></canvas>");
        var chart4 = new Chart(document.getElementById("chart-cp-container-chart3"), {
            type: "pie",
            data: data3,
            options: {
                title: {
                    display: true,
                    text: "shares of theoretical and empirical measurable quality characteristics"
                },
                legend: {
                    position: "bottom"
                },
                plugins: {
                    datalabels: {
                        formatter: (value, ctx) => {
                            let sum = 0;
                            let dataArr = ctx.chart.data.datasets[0].data;
                            dataArr.map(data => {
                                sum += data;
                            });
                            let percentage = (value*100 / sum).toFixed(0)+"%";
                            return percentage;
                        },
                        color: '#fff',
                    }
                }
            }
        });
        if (!$("#toggle-chart-cp").hasClass("click-event-added")) {
            $("#toggle-chart-cp").addClass("click-event-added");
            $("#toggle-chart-cp").click(function () {
                $("#chart-cp-container").toggle();
                $("#nick-container").hide();
                $("#nick-detail-container").hide();
            });
        }
        if (!$("#toggle-nick").hasClass("click-event-added")) {
            $("#toggle-nick").addClass("click-event-added");
            $("#toggle-nick").click(function () {
                $("#nick-container").toggle();
                $("#chart-cp-container").hide();
                $("#nick-detail-container").hide();
            });
        }
        if (!$("#details-closer").hasClass("click-event-added")) {
            $("#details-closer").addClass("click-event-added");
            $("#details-closer").click(function () {
                Builder.hideDetails();
            });
        }
        $(".desc-available").each(function () {
            if (!$(this).hasClass("click-event-added")) {
                $(this).addClass("click-event-added");
                $(this).click(function () {
                    Builder.clearDetails();
                    var a = attributes.find(x => x.id == $(this).data("attr"));
                    if (a != null && typeof (a) != "undefined") {
                        $("#details").append(a.generateDetailView());
                        Builder.addDynamicContentListeners();
                        Builder.showDetails();
                    }
                });
            }
        });
        if (!$("#approach-filter").hasClass("keyup-event-added")) {
            $("#approach-filter").addClass("keyup-event-added");
            $("#approach-filter").on("keyup", function () {
                var v = $(this).val().match(/\[(.*?)\]/);
                if (v != null) {
                    var a = approaches.find(x => x.id == v[1]);
                    var count = 0;
                    for (var index in attributes) {
                        if (a.attributes.includes(attributes[index].id)) {
                            $("[data-attr='" + attributes[index].id + "']").show();
                            count++;
                        } else {
                            $("[data-attr='" + attributes[index].id + "']").fadeOut(100);
                        }
                    }
                    Builder.hideDetails();
                    $("#overview-footer").hide();
                    $("#chart-cp-container").hide();
                    $(".footer-item.current-approach .text").text(a.toString());
                    $(".footer-item.current-approach").data("approach", a.id);
                    $("#details-footer").show();
                    $("#details-footer .properties .text").text(count);
                } else {
                    $(".cell").show();
                    $("#details-footer").hide();
                    $("#overview-footer").show();
                }
            });
        }
        $(".wista-nav-item").each(function () {
            if (!$(this).hasClass("click-event-added")) {
                $(this).addClass("click-event-added");
                $(this).click(function () {
                    switch ($(this).data("target")) {
                        case "clear":
                            $("#approach-filter").val("");
                            $(".cell").show();
                            $("#details-footer").hide();
                            $("#overview-footer").show();
                            $("#chart-cp-container").hide();
                            $("#nick-container").hide();
                            $("#nick-detail-container").hide();
                            break;
                        case "search":
                            break;
                    }
                });
            }
        });
        this.addDynamicContentListeners();
    }
}
/**
 * the class contains an attribute's dimension
 */
class Dimension {
    /**
     * the constructor creates a new dimension
     */
    constructor(object) {
        this.id = object.id;
        this.title = object.title;
        this.desc = object.desc;
        this.metaDimension = object.metaDimension;
    }
    /**
     * the method generates the dimension's table row
     */
    generateListView() {
        var allAttrs = attributes.filter(x => x.dim === this.id);
        var html = "<div id='" + this.id + "' class='row'><div id='" + this.id + "' class='dimension cell'>" + this.title + "</div>";
        if (allAttrs.length == 0) {
            html += "<div class='value cell placeholder'>there is no information provided yet</div>";
        } else {
            for (var index in allAttrs) {
                var a = allAttrs[index];
                var classString = "value cell";
                if (a.hasContent) {
                    classString += " desc-available";
                }
                html += "<div class='" + classString + "' data-attr='" + a.id + "'>" + a.title + "</div>";
            }
        }
        html += "</div>";
        return { html: html, id: this.id };
    }
    /**
     * the method returns all attributes for all dimensions
     */
    static getAllAttributesForAllDimensions(){
        var output = [];
        for(var index in dimensions){
            output[dimensions[index].id] = dimensions[index].getAttributes();
        }
        return output;
    }
    /**
     * the method returns all attributes within the current dimension
     */
    getAttributes(){
        return attributes.filter(x => x.dim == this.id).map(x => x.id);
    }
    /**
     * the method creates a representative string of the current instance
     */
    toString() {
        return this.title;
    }
}
/**
 * the iteration ending conditions
 */
class IterationCondition {
    /**
     * the constructor creates a new instance of an ending condition
     */
    constructor(object){
        this.title = object.title;
        this.type = object.type;
        this.exec = object.exec;
        this.overwrittenBy = object.overwrittenBy;
    }
    /**
     * the method creates the string representation of the instance
     */
    toString(){
        return this.title + " (" + this.type + ")";
    }
}
/**
 * an iteration step according to Nickerson's taxonomy development approach
 */
class IterationStep {
    /**
     * the constructor creates a new instance of an iteration step
     */
    constructor(object){
        this.fnr = object.fnr;
        this.source = object.source;
        this.title = object.title;
        this.desc = object.desc;
        this.provider = object.provider;
        this.contentProvider = object.contentProvider;
        this.subtitle = object.subtitle;
    }
    /**
     * the method adds the steps click listeners
     */
    addListeners(id){
        var instance = this;
        if(typeof(instance.contentProvider) != "undefined"){
            if(!$("#" + id).hasClass("click-event-added")){
                $("#" + id).addClass("click-event-added");
                $("#" + id).click(function(){
                    $("#nick-detail-container-content").empty();
                    $("#nick-detail-container").show();
                    $("#nick-container").hide();
                    var content = instance.contentProvider();
                    for(var index in content) $("#nick-detail-container-content").append("<div class='iteration-step-preview' style='overflow-y: auto;'>" + content[index] + "</div>");
                });
            }
        }
    }
    /**
     * the method generates the html code of the iteration step
     */
    generate(isNotLast){
        var id = generateId();
        var html = "<div id='" + id + "' class='iteration-step-preview'><div class='headline'><span class='number'>" + this.fnr + ".</span>" + this.title + "</div>";
        if(this.subtitle != null && typeof(this.subtitle) != "undefined") html += "<div class='subtitle'>&bdquo;" + this.subtitle + "&ldquo;</div>";
        if(isNotLast) html += "<i class='material-icons next-arrow'>arrow_forward</i>";
        html += "<div class='desc'>" + this.desc + "</div><div class='option-content'>";
        if(typeof(this.provider) != "undefined"){
            var o = this.provider();
            for(var index in o){
                html += "<div class='option'>" + o[index].toString() + "</div>";
            }
        } else {
            if(typeof(this.contentProvider) != "undefined"){
                var content = this.contentProvider();
                for(var index in content) html += content[index];
            }
        }
        html += "</div></div>";
        return { html: html, id: id };
    }
}
/**
 * the class contains a step of an approache's procedure
 */
class Step {
    /**
     * the constructor creates a new step
     */
    constructor(object) {
        this.sequNr = object.sequNr;
        this.title = object.title;
        this.desc = object.desc;
    }
    /**
     * the method generates the step's details in a list view
     */
    generateListView() {
        var html = "<div class='step-row'><div class='cell number'>" + this.sequNr + "</div><div class='cell content'><span class='head'>" + this.title + "</span><span class='desc'>" + this.desc + "</span></div></div>";
        return html;
    }
}
/**
 * the attribute stores all generated id's
 */
var generatedIDs = [];
/**
 * the method generates a new unique id
 */
function generateId() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 12; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
    if (generatedIDs.includes(text)) {
        generateId();
    } else {
        generatedIDs.push(text);
        return text;
    }
}