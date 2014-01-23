define(function() { return '<div>\n    <template id="Labeled">\n        <span pseudo="x-graphic" class="jide-labeled-graphic" bind="content: component.graphic"></span>\n        <span pseudo="x-text" class="jide-labeled-text" bind="\n            content: component.text,\n            css: {\n                \'jide-labeled-content-display-top\': component.contentDisplay === \'top\',\n                \'jide-labeled-content-display-right\': component.contentDisplay === \'right\',\n                \'jide-labeled-content-display-bottom\': component.contentDisplay === \'bottom\',\n                \'jide-labeled-content-display-left\': component.contentDisplay === \'left\'\n            },\n            style: {\n                \'margin-left\': (component.contentDisplay === \'left\' ? component.graphicTextGap : 0)+\'px\',\n                \'margin-top\': (component.contentDisplay === \'top\' ? component.graphicTextGap : 0)+\'px\',\n                \'margin-bottom\': (component.contentDisplay === \'bottom\' ? component.graphicTextGap : 0)+\'px\',\n                \'margin-right\': (component.contentDisplay === \'right\' ? component.graphicTextGap : 0)+\'px\'\n            }\n        "></span>\n    </template>\n\n    <template id="ButtonBase" bind="\n        attr: {\n            \'disabled\': !component.enabled\n        },\n        css: {\n            \'jide-is-disabled\': !component.enabled,\n            \'jide-state-disabled\': !component.enabled\n        }\n    ">\n        <span pseudo="x-graphic" class="jide-labeled-graphic" bind="content: component.graphic"></span>\n        <span pseudo="x-text" class="jide-labeled-text" bind="\n            content: component.text,\n            css: {\n                \'jide-labeled-content-display-top\': component.contentDisplay === \'top\',\n                \'jide-labeled-content-display-right\': component.contentDisplay === \'right\',\n                \'jide-labeled-content-display-bottom\': component.contentDisplay === \'bottom\',\n                \'jide-labeled-content-display-left\': component.contentDisplay === \'left\'\n            },\n            style: {\n                \'margin-left\': (component.contentDisplay === \'left\' ? component.graphicTextGap : 0)+\'px\',\n                \'margin-top\': (component.contentDisplay === \'top\' ? component.graphicTextGap : 0)+\'px\',\n                \'margin-bottom\': (component.contentDisplay === \'bottom\' ? component.graphicTextGap : 0)+\'px\',\n                \'margin-right\': (component.contentDisplay === \'right\' ? component.graphicTextGap : 0)+\'px\'\n            }\n        "></span>\n    </template>\n\n    <template id="CheckBox" bind="\n        on: {\n            \'action\': handleAction.bind($item)\n        },\n        css: {\n            \'jide-state-selected\': component.selected,\n            \'jide-state-indeterminate\': component.indeterminate\n        }\n    ">\n        <svg pseudo="x-mark" viewBox="0 0 100 100">\n            <path pseudo="x-mark-check" d="M 10 45 L 40 80 L 90 0" class="jide-checkbox-check"/>\n            <path pseudo="x-mark-indeterminate" d="M 10 50 L 90 50" class="jide-checkbox-indeterminate"/>\n        </svg>\n        <span pseudo="x-graphic" class="jide-labeled-graphic" bind="content: component.graphic"></span>\n        <span pseudo="x-text" class="jide-labeled-text" bind="content: component.text"></span>\n    </template>\n\n    <template id="ChoiceBox">\n        <span pseudo="x-label" class="jide-choicebox-label" bind="\n            content: component.converter(component.selectedItem)\n        "></span>\n        <span pseudo="x-dropdown" class="jide-choicebox-button">&#x25bc;</span>\n    </template>\n\n    <template id="ComboBoxBase">\n        <input pseudo="x-textfield" type="text">\n        <div pseudo="x-dropdown"></div>\n    </template>\n\n    <template id="TitledPane" bind="\n        css: {\n            \'jide-titledpane-animated\': component.animated,\n            \'is-expanded\': expanded,\n            \'is-collapsible\': component.collapsible\n        }\n    ">\n        <header pseudo="x-header" class="jide-titledpane-title" bind="\n            content: component.title,\n            on: {\n                click: toggleExpanded\n            }\n        "></header>\n        <section pseudo="x-content" class="jide-titledpane-content" bind="\n            content: component.content,\n            style: {\n                height: height\n            }\n        "></section>\n    </template>\n\n    <template id="Accordion" bind="\n        foreach: component.children,\n        on: {\n            \'change:expanded\': handleExpandedChanged\n        }\n    "></template>\n</div>'; });