<?php

namespace TheCocktail\EzExtraMediaBundle\FieldType\EzExtraMedia;

use eZ\Publish\Core\FieldType\Value as BaseValue;

class Value extends BaseValue
{
    /**
     * Text content.
     *
     * @var string
     */
    public $text;

    public function __construct($text = '')
    {
        $this->text = $text;
    }

    public function __toString()
    {
        return (string)$this->text;
    }
}
