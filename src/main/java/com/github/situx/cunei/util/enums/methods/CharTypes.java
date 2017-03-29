package com.github.situx.cunei.akkad.util.enums.methods;

import com.github.situx.cunei.akkad.dict.semdicthandler.MethodEnum;

import java.util.Arrays;
import java.util.List;
import java.util.Locale;

/**
 * Enum containing CharTypes of the given languages.
 */
public enum CharTypes implements MethodEnum {
    /**Akkadian Char.*/
    AKKADIAN("Akkadian Char","akk",2,"-", Arrays.asList(new String[]{System.lineSeparator()}),new Integer[]{0X12000,0X12399},"[A-z0-9, -]+","\uD808\uDC2D","akkadian"),
    /**Cuneiform Char.*/
    CUNEICHAR("Cuneiform Char",Locale.ENGLISH.toString(),2,"-", Arrays.asList(new String[]{System.lineSeparator()}),new Integer[0],".*","","cuneiform"),
    /**Hittite Char.*/
    HITTITE("Hittite Char","hit",2,"-", Arrays.asList(new String[]{System.lineSeparator()}),new Integer[]{0x12000,0x12399},"[A-z0-9, -]+","\uD808\uDC2D","hittite"),
    /**Language Char.*/
    LANGCHAR("Language Char",Locale.ENGLISH.toString(),1,".", Arrays.asList(new String[0]),new Integer[0],".*","","lang"),
    /**Sumerian Char.*/
    SUMERIAN("Sumerian Char","sux",2,"-", Arrays.asList(new String[]{System.lineSeparator()}),new Integer[]{0x12000,0x12399},"[A-z0-9, -]+","\uD808\uDC2D","sumerian"),
  EGYPTIANCHAR("Egyptian Char","egy",1,"(?<=\\p{Nd})", Arrays.asList(new String[]{"。","，","？","！"}),new Integer[0],".*","","egyptian");

    public String getPreviewString() {
        return previewString;
    }


    private final String previewString;

    private final List<String> stopchars;

    private Boolean initialized=false;
    private Integer char_length;
    private Integer[] unicode_ranges;
    private String legalTranslitCharsRegex;
    /**String value (name of the method).*/
    private String  locale,splitcriterion,smallstr;
    /**String value (name of the method).*/
    private String value;

    public String getLegalTranslitCharsRegex() {
        return legalTranslitCharsRegex;
    }

    public void setLegalTranslitCharsRegex(final String legalTranslitCharsRegex) {
        this.legalTranslitCharsRegex = legalTranslitCharsRegex;
    }



    public String getSmallstr() {
        return smallstr;
    }

    /**Constructor using a description parameter.*/
    private CharTypes(String value,String locale,Integer char_length,String splitcriterion,final List<String> stopchars,final Integer[] unicode_ranges,final String legalTranslitChars,final String previewString,String smallstr){
        this.value=value;
        this.locale=locale;
        this.unicode_ranges=unicode_ranges;
        this.char_length=char_length;
        this.splitcriterion=splitcriterion;
        this.stopchars=stopchars;
        this.previewString=previewString;
        this.legalTranslitCharsRegex =legalTranslitChars;
        this.smallstr=smallstr;

    }

    public Integer getChar_length() {
        return char_length;
    }


    public String getLocale() {
        return locale;
    }

    @Override
    public String getShortname() {
        return null;
    }

    public String getSplitcriterion() {
        return splitcriterion;
    }

    public List<String> getStopchars() {
        return stopchars;
    }

    @Override
    public String toString() {
        return this.value;
    }
}
