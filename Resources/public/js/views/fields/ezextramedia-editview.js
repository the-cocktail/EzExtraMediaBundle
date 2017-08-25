YUI.add('ezextramedia-editview', function (Y) {
    "use strict";
    Y.namespace('eZExtraMedia');

    var L = Y.Lang,
        FIELDTYPE_IDENTIFIER = 'ezextramedia';

    Y.eZExtraMedia.EzExtraMediaEditView = Y.Base.create('ezextramediaEditView', Y.eZ.FieldEditView, [], {
        events: {
            '.ezextramedia-input-ui input': {
                'blur': 'validate',
                'valuechange': 'validate'
            }
        },

        validate: function () {
            var validity = this._getInputValidity(),
                config = this._variables();

            if ( validity.valueMissing ) {
                this.set('errorStatus', 'This field is required');
            } else {
                this.set('errorStatus', false);
            }
        },

        _variables: function () {
            var def = this.get('fieldDefinition');

            return {
                "isRequired": def.isRequired
            };
        },

        _getInputValidity: function () {
            return this.get('container').one('.ezextramedia-input-ui input').get('validity');
        },

        _getFieldValue: function () {
            return this.get('container').one('.ezextramedia-input-ui input').get('value');
        }
    });

    Y.eZ.FieldEditView.registerFieldEditView(
        FIELDTYPE_IDENTIFIER, Y.eZExtraMedia.EzExtraMediaEditView
    );
});
