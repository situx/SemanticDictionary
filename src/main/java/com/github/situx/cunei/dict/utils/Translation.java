package com.github.situx.cunei.akkad.dict.utils;

import java.util.Locale;

/**
 * Represents as translation.
 */
public class Translation implements Comparable<Translation> {
    /**The locale of this Translation.*/
    private Locale locale;
    /**The occurance of this translation.*/
    private Integer occurance;
    /**The translation string.*/
    private String translation;

    /**
     * Constructor for this class.
     * @param translation the translation String
     * @param locale the locale of the translation
     */
    public Translation(final String translation,final Locale locale){
         this.translation=translation;
        this.locale=locale;

    }

    @Override
    public int compareTo(final Translation translation) {
        return this.translation.compareTo(translation.translation);
    }

    /**
     * Gets the locale.
     * @return the locale
     */
    public Locale getLocale() {
        return locale;
    }

    /**
     * Sets the locale of this translation.
     * @param locale the locale of the translation
     */
    public void setLocale(final Locale locale) {
        this.locale = locale;
    }

    /**
     * Gets the occurance of this translation.
     * @return the occurance as Integer
     */
    public Integer getOccurance() {
        return occurance;
    }

    /**
     * Sets the occurance of the translation.
     * @param occurance the occurance to set
     */
    public void setOccurance(final Integer occurance) {
        this.occurance = occurance;
    }

    /**
     * Gets the translation String.
     * @return the translation String
     */
    public String getTranslation() {
        return translation;
    }

    /**
     * Sets the translation String.
     * @param translation the translation String
     */
    public void setTranslation(final String translation) {
        this.translation = translation;
    }

    @Override
    public String toString() {
        return this.translation;
    }


}
