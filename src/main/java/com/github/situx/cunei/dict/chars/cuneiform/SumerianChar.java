package com.github.situx.cunei.akkad.dict.chars.cuneiform;

import com.github.situx.cunei.akkad.util.enums.methods.CharTypes;

/**
 * Created with IntelliJ IDEA.
 * User: timo
 * Date: 25.10.13
 * Time: 12:00
 * Class for modelling a sumerian cuneiform character.
 */
public class SumerianChar extends CuneiChar {

    private String SHAnumber;

    /**
     * Constructor for this class
     * @param character the cuneiform character modelled by this class.
     */
    public SumerianChar(final String character){
        super(character);
        this.character=character;
        this.charlength= CharTypes.SUMERIAN.getChar_length();
    }

    @Override
    public void setRelativeOccuranceFromDict(Double occurance) {

    }


}
