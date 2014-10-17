(function() {
	model.showAddSlot = ko.observable(true);
	model.showAddArmy = ko.observable(true);
	model.maxSpectorLimit = ko.observable(50);
    model.spectatorLimitOptions = ko.computed(function () {
        return _.range(model.maxSpectorLimit()+1);
    });
}());