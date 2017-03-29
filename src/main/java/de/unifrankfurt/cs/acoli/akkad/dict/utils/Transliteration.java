package de.unifrankfurt.cs.acoli.akkad.dict.utils;

import java.util.TreeMap;

/**
 * Class for modelling a Transliteration.
 * User: Timo Homburg
 * Date: 13.11.13
 * Time: 17:21
 */
public class Transliteration implements Comparable<Transliteration>{
    /**Indicates if this transliteration is the transliteration of a whole word.*/
    private Boolean isWord;
    /**The transliteration as string.*/
    private String transcription;
    /**The transliteration as string.*/
    private String transliteration;

    private String utf8transliteration;

    public String getUtf8transliteration() {
        return utf8transliteration;
    }

    public void setUtf8transliteration(final String utf8transliteration) {
        this.utf8transliteration = utf8transliteration;
    }

    /**
     * Constructor for a char transliteration.
     * @param transliteration
     */
    public Transliteration(final String transliteration,final String transcription){
        this(transliteration,transcription,false);
    }

    /**
     * Constructor for transliteration.
     * @param transliteration the transliteration to create
     * @param isWord indicates if the transliteration is assigned to a word
     */
    public Transliteration(final String transliteration,final String transcription,final Boolean isWord){
        this.transliteration=transliteration;
        this.isWord=isWord;
        this.transcription=transcription;
    }

    @Override
    public int compareTo(final Transliteration o) {
            return this.transliteration.compareTo(o.transliteration);
    }

    @Override
    public boolean equals(final Object obj) {
        if(obj instanceof Transliteration)
            return this.transliteration.equals(((Transliteration)obj).transliteration);
        return false;
    }


    public String getTranscription() {
        return transcription;
    }

    public void setTranscription(final String transcription) {
        this.transcription = transcription;
    }

    public String getTransliteration() {
        return transliteration;
    }

    /**
     * Gets the transliteration String for this transliteration.
     * @return the transliteration String
     */
    public String getTransliterationString() {
        return transliteration;
    }

    /**
     * Sets the transliteration String for this transliteration.
     * @param transliteration the transliteration String to set
     */
    public void setTransliterationString(final String transliteration) {
        this.transliteration = transliteration;
    }




    @Override
    public String toString(){
        if(this.utf8transliteration!=null){
            return this.utf8transliteration;
        }
        return this.transliteration;
    }


}
