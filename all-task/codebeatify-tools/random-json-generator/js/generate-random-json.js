
window.bridges["generate-random-json"] = function(){
    var bridge = function() {
        var options = this.options.get();

        var maxDepth = +(options["depth"]);
        var elementsPerBranch = +(options["max-elements"]);
        var englishStrings = options["english-strings"];
        var randomStrings = options["random-strings"];
        var maxStringLength = +(options["max-string-length"]);
        var satisfyDepth = options["always-max-elements"]

        if (englishStrings) {
            var stringType = "english";
        }
        else {
            var stringType = "random";
        }

        if (isNaN(maxDepth)) {
            this.output.showNegativeBadge("Can't generate", "Depth is not a valid number.");
            return "";
        }

        if (isNaN(elementsPerBranch)) {
            this.output.showNegativeBadge("Can't generate", "Elements per depth level is not a valid number.");
            return "";
        }

        if (maxDepth < 0) {
            this.output.showNegativeBadge("Can't generate", "Depth is negative.");
            return "";
        }

        if (elementsPerBranch < 0) {
            this.output.showNegativeBadge("Can't generate", "Elements per depth level is negative.");
            return "";
        }

        if (stringType == "string") {
            if (isNaN(maxStringLength)) {
                this.output.showNegativeBadge("Can't generate", "Max string length is not a number.");
                return "";
            }
            if (maxStringLength < 0) {
                this.output.showNegativeBadge("Can't generate", "Max string length is negative.");
                return "";
            }
        }

        var possibleElements = [];
        if (options["booleans"]) {
            possibleElements.push("booleans");
        }
        if (options["numbers"]) {
            possibleElements.push("numbers");
        }
        if (options["strings"]) {
            possibleElements.push("strings");
        }
        if (options["arrays"]) {
            possibleElements.push("arrays");
        }
        if (options["objects"]) {
            possibleElements.push("objects");
        }

        if (!options['arrays'] && !options['objects']) {
            if (maxDepth > 0) {
                this.output.showWarningBadge("Can't generate", "To generate depth, you need to allow to generate arrays and/or objects.");
                return "";
            }
        }

        if (!options['booleans'] && !options['numbers'] && !options['strings']) {
            this.output.showWarningBadge("Can't generate", "Neither booleans, nor numbers, nor strings selected. There is nothing to generate.");
            return "";
        }

        var generator = new RandomJsonGenerator({
            maxDepth : maxDepth,
            satisfyDepth : satisfyDepth, 
            elementsPerBranch : elementsPerBranch,
            stringType : stringType,
            maxStringLength : maxStringLength,
            possibleElements : possibleElements
        });

        var formatting = null;
        if (options["formatting-none"])
            formatting = 0;
        else if (options["formatting-tabs"])
            formatting = "\t";
        else if (options["formatting-spaces"]) 
            formatting = 2;

        var json = generator.generate();
        console.log(json);
        $('.randomjson').val(JSON.stringify(json, 0, formatting))
        var editor = $('.randomjson').data('ace').editor.ace
        $('.randomjson').ace({ lang: 'json' })
        editor.setValue(JSON.stringify(json, 0, formatting))
        editor.commands.removeCommand('find');
        
        return JSON.stringify(json, 0, formatting);
    }

    


    return {
        converter: bridge,
        config: {}
    }

}
