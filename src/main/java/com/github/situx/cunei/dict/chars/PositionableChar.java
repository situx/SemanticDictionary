package com.github.situx.cunei.akkad.dict.chars;

import com.github.situx.cunei.akkad.dict.utils.Transliteration;

import java.util.Map;
import java.util.Set;
import java.util.TreeMap;
import java.util.TreeSet;

/**
 * Represents a character that is positionable i.e. has middle/single/end/beginning occurances.
 */
public abstract class PositionableChar extends LangChar{

    /**Indicates if this character occurs at the beginning of a word.*/
    protected Boolean beginningCharacter;
    /**The transliterations of this char/word.*/
    protected Map<Transliteration,Integer> begintransliterations;
    /**Indicates if this character occurs at the end of a word.*/
    protected Boolean endingCharacter;
    protected Map<Transliteration,Integer> endtransliterations;
    /**Indicates if this character occurs in the middle of a word.*/
    protected Boolean middleCharacter;
    /**Amounts of the middle begin, single and end occurances of this character.*/
    protected Double middleoccurance, beginoccurance, endoccurance, singleoccurance;
    /**Map of middle transliterations.*/
    protected Map<Transliteration,Integer> middletransliterations;
    /**
     * The positions on which this char has been seen.
     */
    protected Set<Integer> positions;
    /**Indicates if this characters also exists as a single word.*/
    protected Boolean singleCharacter;
    protected Map<Transliteration,Integer> singletransliterations;

    /**
     * Constructor for this class.
     * @param character the character
     */
    public PositionableChar(final String character) {
        super(character);
        this.singletransliterations = new TreeMap<>();
        this.endtransliterations = new TreeMap<>();
        this.middletransliterations = new TreeMap<>();
        this.begintransliterations = new TreeMap<>();
        this.positions = new TreeSet<>();
        this.beginoccurance = 0.;
        this.middleoccurance = 0.;
        this.endoccurance = 0.;
        this.singleoccurance = 0.;
        this.beginningCharacter = false;
        this.endingCharacter = false;
        this.middleCharacter = false;
        this.singleCharacter = false;
    }

}
