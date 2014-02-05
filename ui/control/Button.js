/**
 * A Button control should be used to allow users to invoke commands and actions such as "Save" and "Update".
 *
 * It should never be used to toggle states or display a popup menu, offering more choices, since there are specialized
 * controls for those purposes: {@link module:jidejs/ui/control/ToggleButton ToggleButton} and
 * {@link module:jidejs/ui/control/PopupButton PopupButton}.
 *
 * @module jidejs/ui/control/Button
 * @extends module:jidejs/ui/control/ButtonBase
 */
define([
	'./../../base/Class', './../Component', './../Skin', './ButtonBase',
	'./../register'
], function(Class, Component, Skin, ButtonBase, register) {
		/**
		 * Creates a new Button.
		 *
		 * @example
		 * var myButton = new Button({
		 *     text: 'Save',
		 *     on: {
		 *     	action: function() {
		 *     		alert('Data was saved!');
		 *     	}
		 *     }
		 * });
		 *
		 * @memberof module:jidejs/ui/control/Button
		 * @param {object} config The Button configuration.
		 * @constructor
		 * @alias module:jidejs/ui/control/Button
		 */
		function Button(config) {
			if(!config) config = {};
			ButtonBase.call(this, config);
			this.classList.add('jide-button');
		}
		Class(Button).extends(ButtonBase);
		Button.Skin = Skin.create(ButtonBase.Skin, {
            defaultElement: 'button'
        });
		register('jide-button', Button, ButtonBase);
		return Button;
});