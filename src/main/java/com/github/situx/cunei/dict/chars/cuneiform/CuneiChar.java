package com.github.situx.cunei.akkad.dict.chars.cuneiform;

import com.github.situx.cunei.akkad.dict.chars.PositionableChar;
import com.github.situx.cunei.akkad.dict.utils.Transliteration;
import com.github.situx.cunei.akkad.util.enums.methods.CharTypes;
import com.github.situx.cunei.akkad.dict.importhandler.cuneiform.ImportHandler;

/**
 * Class for defining a cuneiform character/Word
 * User: Timo Homburg
 * Date: 26.10.13
 * Time: 14:30
 * Created with IntelliJ IDEA.
 */
public abstract class CuneiChar extends PositionableChar {
    private ImportHandler cuneiHandler;

    public void setLhaNumber(String lhaNumber) {
        this.lhaNumber = lhaNumber;
    }

    protected String lhaNumber;

    public String getHethzlNumber() {
        return hethzlNumber;
    }

    protected String hethzlNumber;

    protected String mezlNumber;

    public String getaBzlNumber() {
        return aBzlNumber;
    }

    public void setaBzlNumber(final String aBzlNumber) {
        this.aBzlNumber = aBzlNumber;
    }

    protected String aBzlNumber;

    public String getMezlNumber() {
        return mezlNumber;
    }

    public void setMezlNumber(final String mezlNumber) {
        this.mezlNumber = mezlNumber;
    }

    protected String cuneiutf8translit;
    /**Indicates if this character is a determinative.*/
    protected Boolean determinative;
    protected Boolean isNumberChar;
    /**Indicates if this character has a logographic interpretation.*/
    protected Boolean logograph;
    /**Indicates if this character has a phonographic interpretation.*/
    protected Boolean phonogram;
    /**Stem of this word/character.*/
    protected String stem;
    /**Indicates if this character is a sumerogram.*/
    protected Boolean sumerogram;

    /**
     * Constructor for this class.
     * @param character the character to add
     */
    public CuneiChar(final String character) {
        super(character);
        this.character=character;
        this.logograph = false;
        this.phonogram = false;
        this.mezlNumber="";
        this.aBzlNumber="";
        this.hethzlNumber="";
        this.lhaNumber="";
        this.determinative = false;
        this.sumerogram=false;
        this.cuneiutf8translit = " ";
        this.charlength= CharTypes.CUNEICHAR.getChar_length();
        this.stem="";
        this.isNumberChar=false;
        this.cuneiHandler=new ImportHandler(null,null,null,null,null,null);
    }

    @Override
    public void addTransliteration(final Transliteration transliteration) {
        String asciitransstr=this.cuneiHandler.reformatToASCIITranscription(transliteration.getTransliteration());
        Transliteration asciitrans=new Transliteration(asciitransstr,"");
        if(transliterations.keySet().contains(asciitrans)){
            return;
        }else{
            transliteration.setTransliterationString(asciitransstr);
            transliteration.setUtf8transliteration(this.cuneiHandler.reformatToUnicodeTranscription(transliteration.getTransliteration()));
        }
        if(!transliterations.keySet().contains(transliteration)){
            this.transliterations.put(transliteration,0.);
        }
        this.transliterations.put(transliteration,this.transliterations.get(transliteration)+1);
    }

    /**
     * Gets the name of this character.
     * @return the name as String
     */
    public String getCharName(){
        return this.charName;
    }

    /**
     * Sets the name of this character.
     * @param name the name of the character as String
     */
    public void setCharName(final String name) {
        this.charName=name;
    }

    /**
     * Indicates if this character is a determinative.
     * @return true if it is false otherwise
     */
    public Boolean getDeterminative(){
        return this.determinative;
    }

    /**
     * Sets if the character represents a determinative.
     * @param determinative determinative indicator
     */
    public void setDeterminative(final Boolean determinative){
        this.determinative=determinative;
    }


    public String getLhaNumber() {
        return lhaNumber;
    }

    /**
     * Indicates if this character is a logograph.
     * @return true if it is false otherwise
     */
    public Boolean getLogograph(){
        return this.logograph;
    }

    /**
     * Set if the character is a logograph.
     * @param logograph logograph indicator
     */
    public void setLogograph(final Boolean logograph){
        this.logograph=logograph;
    }

    /**
     * Sets if the character is a phonogram.
     * @param phonogram phonogram indicator
     */
    public void setPhonogram(final Boolean phonogram){
        this.phonogram=phonogram;
    }

    @Override
    public Integer length() {
        return this.character.length();
    }


    public void setHethzlNumber(String hethzlNumber) {
        this.hethzlNumber = hethzlNumber;
    }
}
