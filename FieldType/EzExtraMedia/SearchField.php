<?php

namespace TheCocktail\EzExtraMediaBundle\FieldType\EzExtraMedia;

use eZ\Publish\SPI\Persistence\Content\Field;
use eZ\Publish\SPI\Persistence\Content\Type\FieldDefinition;
use eZ\Publish\SPI\FieldType\Indexable;
use eZ\Publish\SPI\Search;
use TheCocktail\EzExtraMediaBundle\Search\FieldType\EzExtraMediaField;

class SearchField implements Indexable
{
    public function getIndexData(Field $field, FieldDefinition $fieldDefinition)
    {
        return array(
            new Search\Field(
                'value',
                $field->value->data,
                new EzExtraMediaField()
            ),
            new Search\Field(
                'fulltext',
                $field->value->data,
                new Search\FieldType\FullTextField()
            ),
        );
    }

    public function getIndexDefinition()
    {
        return array(
            'value' => new EzExtraMediaField(),
        );
    }

    public function getDefaultMatchField()
    {
        return 'value';
    }

    public function getDefaultSortField()
    {
        return $this->getDefaultMatchField();
    }
}
