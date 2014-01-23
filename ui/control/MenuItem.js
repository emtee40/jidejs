/**
 * A MenuItem is displayed within a {@link module:jidejs/ui/control/Menu} or {@link module:jidejs/ui/control/ContextMenu}
 * and represents a command or action that the user can perform.
 *
 * @module jidejs/ui/control/MenuItem
 * @extends module:jidejs/ui/control/ButtonBase
 */
define([
	'./../.././Class', './../Component', './ButtonBase', './../register'
], function(Class, Component, ButtonBase, register) {
	/**
	 * Creates a new MenuItem.
	 *
	 * @memberof module:jidejs/ui/control/MenuItem
	 * @param config
	 * @constructor
	 * @alias module:jidejs/ui/control/MenuItem
	 */
	function MenuItem(config) {
		ButtonBase.call(this, config);
		this.classList.add('jide-menuitem');
	}
	Class(MenuItem).extends(ButtonBase);
    register('jide-menuitem', MenuItem, ButtonBase, [], []);
	return MenuItem;
});