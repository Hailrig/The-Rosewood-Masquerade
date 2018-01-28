/*:
* @plugindesc alt menu
* @author Your mom
*
* @param BackgroundPicture
* @desc The menu Background
* @default background
*
* @help
*/

(function(){

	var background = String(PluginManager.parameters("menuFuckery")['BackgroundPicture']);

	var _Scene_Menu_Create = Scene_Menu.prototype.create;

	var _Scene_MenuBase_createBackground = Scene_MenuBase.prototype.createBackground;

	Scene_Menu.prototype.create = function() {
    	Scene_MenuBase.prototype.create.call(this);
    	this.createCommandWindow();
    	this.createGoldWindow();
    	this.createStatusWindow();

 		// this._commandWindow
		// this._goldWindow
		// this._statusWindow

		this._commandWindow.opacity = 0;
		this._goldWindow.opacity = 0;
		this._statusWindow.opacity = 0;


	};

	Scene_MenuBase.prototype.createBackground = function() {
		if (background){
    		this._backgroundSprite = new Sprite();
    		this._backgroundSprite.bitmap = ImageManager.loadPicture(background);
    		this.addChild(this._backgroundSprite);
    	} else {
    		_Scene_MenuBase_createBackground.call(this);
    	}
	};


	Window_MenuStatus.prototype.windowWidth = function() {
   		return Graphics.boxWidth;
	};

	Window_MenuStatus.prototype.windowHeight = function() {
    	return Graphics.boxHeight;
	};

	Window_MenuStatus.prototype.numVisibleRows = function() {
    	return 4;
	};

	Window_MenuStatus.prototype.maxCols = function() {
    	return 2;
	};



	Window_MenuCommand.prototype.windowWidth = function() {
    	return 240;
	};

	Window_MenuCommand.prototype.windowHeight = function() {
    	return this.fittingHeight(this.numVisibleRows());
	};

	Window_MenuCommand.prototype.numVisibleRows = function() {
    	return 8;
	};

	Window_MenuCommand.prototype.maxCols = function() {
    	return 1;
	};



	Window_Gold.prototype.windowWidth = function() {
   		return 240;
	};

	Window_Gold.prototype.windowHeight = function() {
    	return this.fittingHeight(1);
	};

	Window_Gold.prototype.numVisibleRows = function() {
    	return 1;
	};

	Window_Gold.prototype.maxCols = function() {
    	return 1;
	};



var _Scene_Item_Create = Scene_Item.prototype.create;

Scene_Item.prototype.create = function() {
    _Scene_Item_Create.call(this);
    this._actorWindow.opacity = 0;
    this._categoryWindow.opacity = 0;
    this._itemWindow.opacity = 0;
    this._helpWindow.opacity = 0;

};


})();