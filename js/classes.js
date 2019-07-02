/**
 * the class contains an evaluation approach
 */
class Approach {
    /**
     * the constructor creates a new instance of an evaluation approach
     */
    constructor(object){
        this.id = object.id;
        this.name = object.name;
        this.short = object.short;
        this.origin = object.origin;
        this.sources = object.sources;
        this.attributes = object.attributes;
        this.procedure = [];
        if(object != null && typeof(object) != "undefined"){
            if(object.procedure != null && typeof(object.procedure) != "undefined"){
                this.procedure = object.procedure;
            }
        }
    }
    /**
     * the method creates the details view of the approach
     */
    generateDetailView(){
        var html = "<div class='details-view'><div class='tag-panel'>";
        html += "<div class='tag tag-approach'>approach</div><div class='tag tag-attribute'>" + this.attributes.length + " attributes</div>";
        html += "</div><span class='headline'>" + this.name + "</span>";
        if(this.short != null && typeof(this.short) != "undefined"){
            html += "<span class='subtitle'>(" + this.short + ")</span>";
        }
        for(var index in this.sources){
            html += "<span class='source'><i class='material-icons icon'>import_contacts</i>" + this.sources[index] + "</span>";
        }
        if(this.procedure.length > 0){
            html += "<span class='approaches'><i class='material-icons icon'>list_alt</i>the steps of the procedure:</span>"
            for(var index in this.procedure){
                html += this.procedure[index].generateListView();
            }
        }
        html += "</div>";
        return html;
    }
    /**
     * the function creates a datalist option of the current approach
     */
    toDatalistOption(){
        var html = "<option>[" + this.id + "] " + this.name;
        if(this.short != null){
            html += " (" + this.short + ")";
        }
        html += "</option>";
        return html;
    }
    /**
     * the function creates a representative string of the current approach
     */
    toString(){
        if(this.short != null && typeof(this.short) != "undefined"){
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
    constructor(object){
        this.id = object.id;
        this.title = object.title;
        this.desc = object.desc;
        this.dim = object.dim;
        this.source = object.source;
    }
    /**
     * the method creates the details view of the attribute
     */
    generateDetailView(){
        var html = "<div class='details-view'><div class='tag-panel'>";
        var d = dimensions.find(x => x.id == this.dim);
        html += "<div class='tag tag-attribute'>attribute</div><div class='tag tag-dimension'>" + d.toString() + "</div>";
        html += "</div><span class='headline'>" + this.title + "</span><span class='desc'>" + this.desc + "</span><span class='source'><i class='material-icons icon'>import_contacts</i>" + this.source + "</span><span class='approaches'><i class='material-icons icon'>list_alt</i>the property is used in the following evaluation approaches:</span>";
        var a = approaches.filter(x => x.attributes.includes(this.id));
        for(var index in a){
            html += "<span class='approach-suggestion approach-invoker' data-approach='" + a[index].id + "'>- " + a[index].toString() + "</span>";
        }
        html += "</div>";
        return html;
    }
    /**
     * the function checks, if the attribute has a content
     */
    get hasContent(){
        if(this.desc != null && typeof(this.desc) != "undefined") return true;
        return false;
    }
}
/**
 * the class contains the main functions of the application
 */
class Builder {
    /**
     * the method adds the dynamic content listeners, e.g. for using the click listeners for the approach detail views
     */
    static addDynamicContentListeners(){
        $(".approach-invoker").each(function(){
            if(!$(this).hasClass("click-event-added")){
                $(this).addClass("click-event-added");
                $(this).click(function(){
                    Builder.clearDetails();
                    var a = approaches.find(x => x.id == $(this).data("approach"));
                    if(a != null && typeof(a) != "undefined"){
                        $("#details").append(a.generateDetailView());
                        Builder.showDetails();
                    }
                });
            }
        });
    }
    /**
     * the method clears the detail view
     */
    static clearDetails(){
        $("#details > *").not(".fixed").remove();
    }
    /**
     * the method hides the details view window
     */
    static hideDetails(){
        $("#details").hide();
    }
    /**
     * the method shows the details view
     */
    static showDetails(){
        $("#details").show();
    }
    /**
     * the method starts the application's runtime
     */
    static start(){
        $(".footer-item.dimensions .text").text(dimensions.length);
        $(".footer-item.approaches .text").text(approaches.length);
        $(".footer-item.properties .text").text(attributes.length);
        for(var index in approaches){
            $("#approaches").append(approaches[index].toDatalistOption());
        }
        for(var index in dimensions){
            var d = dimensions[index];
            var content = d.generateListView();
            $("#morph-box .body").append(content.html);
        }
        if(!$("#details-closer").hasClass("click-event-added")){
            $("#details-closer").addClass("click-event-added");
            $("#details-closer").click(function(){
                Builder.hideDetails();
            });
        }
        $(".desc-available").each(function(){
            if(!$(this).hasClass("click-event-added")){
                $(this).addClass("click-event-added");
                $(this).click(function(){
                    Builder.clearDetails();
                    var a = attributes.find(x => x.id == $(this).data("attr"));
                    if(a != null && typeof(a) != "undefined"){
                        $("#details").append(a.generateDetailView());
                        Builder.addDynamicContentListeners();
                        Builder.showDetails();
                    }
                });
            }
        });
        if(!$("#approach-filter").hasClass("keyup-event-added")){
            $("#approach-filter").addClass("keyup-event-added");
            $("#approach-filter").on("keyup", function(){
                var v = $(this).val().match(/\[(.*?)\]/);
                if(v != null){
                    var a = approaches.find(x => x.id == v[1]);
                    for(var index in attributes){
                        if(a.attributes.includes(attributes[index].id)){
                            $("[data-attr='" + attributes[index].id + "']").show();
                        } else {
                            $("[data-attr='" + attributes[index].id + "']").fadeOut(100);
                        }
                    }
                    Builder.hideDetails();
                    $("#overview-footer").hide();
                    $(".footer-item.current-approach .text").text(a.toString());
                    $(".footer-item.current-approach").data("approach", a.id);
                    $("#details-footer").show();
                } else {
                    $(".cell").show();
                    $("#details-footer").hide();
                    $("#overview-footer").show();
                }
            });   
        }
        $(".wista-nav-item").each(function(){
            if(!$(this).hasClass("click-event-added")){
                $(this).addClass("click-event-added");
                $(this).click(function(){
                    switch($(this).data("target")){
                        case "clear":
                            $("#approach-filter").val("");
                            $(".cell").show();
                            $("#details-footer").hide();
                            $("#overview-footer").show();
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
    constructor(object){
        this.id = object.id;
        this.title = object.title;
        this.desc = object.desc;
    }
    /**
     * the method generates the dimension's table row
     */
    generateListView(){
        var allAttrs = attributes.filter(x => x.dim === this.id);
        var html = "<div id='" + this.id + "' class='row'><div id='" + this.id + "' class='dimension cell'>" + this.title + "</div>";
        if(allAttrs.length == 0){
            html += "<div class='value cell placeholder'>there is no information provided yet</div>";
        } else {
            for(var index in allAttrs){
                var a = allAttrs[index];
                var classString = "value cell";
                if(a.hasContent){
                    classString += " desc-available";
                }
                html += "<div class='" + classString + "' data-attr='" + a.id + "'>" + a.title + "</div>";
            }
        }
        html += "</div>";
        return { html: html, id: this.id };
    }
    /**
     * the method creates a representative string of the current instance
     */
    toString(){
        return this.title;
    }
}
/**
 * the class contains a step of an approache's procedure
 */
class Step {
    /**
     * the constructor creates a new step
     */
    constructor(object){
        this.sequNr = object.sequNr;
        this.title = object.title;
        this.desc = object.desc;
    }
    /**
     * the method generates the step's details in a list view
     */
    generateListView(){
        var html = "<div class='step-row'><div class='cell number'>" + this.sequNr + "</div><div class='cell content'><span class='head'>" + this.title + "</span><span class='desc'>" + this.desc + "</span></div></div>";
        return html;
    }
}