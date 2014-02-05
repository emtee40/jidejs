/**
 * A Label is used to display text and an optional graphic.
 *
 * @module jidejs/ui/control/Label
 * @extends module:jidejs/ui/control/Labeled
 */
define([
	'./../../base/Class', './../Component', './Labeled', './../Skin', './../register'
], function(Class, Component, Labeled, Skin, register) {
	/**
	 * Creates a new Label control.
	 * @memberof module:jidejs/ui/control/Label
	 * @param {object} config The configuration
	 * @constructor
	 * @alias module:jidejs/ui/control/Label
	 */
	function Label(config) {
		config = config || {};
		Labeled.call(this, config);
		this.classList.add('jide-label');
	}

	Class(Label).extends(Labeled);

	Label.Skin = Skin.create(Labeled.Skin, {
		defaultElement: 'label'
	});

    register('jide-label', Label, Labeled, [], []);

	return Label;
});