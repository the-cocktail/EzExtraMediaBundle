YUI.add('ezmedia-view', function (Y) {
    "use strict";
    Y.namespace('eZMedia');

    Y.eZMedia.EzMediaView = Y.Base.create('ezmediaView', Y.eZ.FieldView, [], {
        _isFieldEmpty: function () {
            return (this.get('field').fieldValue === null);
        },

        _getName: function () {
            return Y.eZMedia.EzMediaView.NAME;
        },
    });

    Y.eZ.FieldView.registerFieldView('ezmedia', Y.eZMedia.EzMediaView);
});
