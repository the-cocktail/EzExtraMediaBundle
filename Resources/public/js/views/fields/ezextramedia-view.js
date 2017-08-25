YUI.add('ezextramedia-view', function (Y) {
    "use strict";
    Y.namespace('eZExtraMedia');

    Y.eZExtraMedia.EzExtraMediaView = Y.Base.create('ezextramediaView', Y.eZ.FieldView, [], {
        _isFieldEmpty: function () {
            return (this.get('field').fieldValue === null);
        },

        _getName: function () {
            return Y.eZExtraMedia.EzExtraMediaView.NAME;
        },
    });

    Y.eZ.FieldView.registerFieldView('ezextramedia', Y.eZExtraMedia.EzExtraMediaView);
});
