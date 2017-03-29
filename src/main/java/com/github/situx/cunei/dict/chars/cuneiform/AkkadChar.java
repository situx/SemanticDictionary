package com.github.situx.cunei.akkad.dict.chars.cuneiform;

import com.github.situx.cunei.akkad.util.enums.methods.CharTypes;

/**
 * Represents an akkadian character/word.
 */
public class AkkadChar extends CuneiChar {

    /**
     * Constructor for this class.
     * @param character the character to use
     */
    public AkkadChar(final String character){
        super(character);
        this.charlength= CharTypes.AKKADIAN.getChar_length();
    }

    @Override
    public boolean equals(final Object o) {
        if (o instanceof AkkadChar) {
            AkkadChar akkad = (AkkadChar) o;
            if (this.determinative.equals(akkad.determinative) && this.logograph.equals(akkad.logograph)
                    && this.phonogram.equals(akkad.phonogram) && this.character.equals(akkad.character)) {
                return true;
            }
        }
        return false;
    }

    @Override
    public void setRelativeOccuranceFromDict(Double occurance) {

    }

    @Override
    public String toString() {
        return this.character;
    }

}
