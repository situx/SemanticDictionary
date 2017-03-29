package com.github.situx.cunei.akkad.dict.chars.cuneiform;

import com.github.situx.cunei.akkad.util.enums.methods.CharTypes;

/**
 * Created with IntelliJ IDEA.
 * User: timo
 * Date: 25.10.13
 * Time: 12:00
 * Class for modelling a hittitian cuneiform character.
 */
public class HittiteChar extends CuneiChar {

    public String getHethZLNumber() {
        return hethZLNumber;
    }

    public void setHethZLNumber(final String hethZLNumber) {
        this.hethZLNumber = hethZLNumber;
    }

    private String hethZLNumber;

    /**
     * Constructor for this class
     * @param character the cuneiform character modelled by this class.
     */
    public HittiteChar(final String character){
        super(character);
        this.hethZLNumber="";
        this.charlength= CharTypes.HITTITE.getChar_length();
    }

    @Override
    public void setRelativeOccuranceFromDict(Double occurance) {

    }


}
