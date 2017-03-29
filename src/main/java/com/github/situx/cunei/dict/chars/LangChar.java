package com.github.situx.cunei.akkad.dict.chars;


import com.github.situx.cunei.akkad.dict.utils.POSTag;
import com.github.situx.cunei.akkad.dict.utils.Translation;
import com.github.situx.cunei.akkad.dict.utils.Transliteration;
import com.github.situx.cunei.akkad.util.enums.methods.CharTypes;

import java.util.*;

/**
 * Interface for modelling a class for chars/words of a language.
 */
public abstract class LangChar implements Comparable<LangChar>{
    /**The character as String.*/
    protected String character;
    /**The length of the character as Integer.*/
    protected Integer charlength;
    /**Left and right accessor variety.*/
    protected Double leftaccessorvariety,rightaccessorvariety;
    /**The meaning of this character.*/
    protected String meaning;
    /**The occurances of this character.*/
    protected Double occurances;
    /**A set of postags associated with this character.*/
    protected Set<POSTag> postags;
    /**Map of transliterations to translations and their occurances.*/
    protected Map<String,Map<Translation,Integer>> translations;
    /**Map of transliterations to occurances.*/
    protected Map<Transliteration,Double> transliterations;

    protected String paintInformation;

    protected String charName;

    public void setConceptURI(String conceptURI) {
        this.conceptURI = conceptURI;
    }

    private String conceptURI;

    protected Boolean isWord;

    public Set<POSTag> getPostags() {
        return postags;
    }



    public String getCharName() {

        return charName;
    }



    public void setCharName(final String charName) {
        this.charName = charName;
    }

    public String getPaintInformation() {
        return paintInformation;
    }

    public void setPaintInformation(final String paintInformation) {
        this.paintInformation = paintInformation;
    }

    public String getConceptURI() {
        return conceptURI;
    }

    /**
     * Constructor for this class.
     * @param character the character to set
     */
    public LangChar(String character){
        this.character=character;
        this.translations=new TreeMap<>();
        this.transliterations=new TreeMap<>();
        this.postags=new TreeSet<>();
        this.occurances=1.;
        this.isWord=false;
        this.meaning="";
        this.conceptURI="";

        this.leftaccessorvariety=0.;
        this.rightaccessorvariety=0.;
        this.occurances=0.;
        this.charlength= CharTypes.LANGCHAR.getChar_length();

    }

    /**Gets the occurances of this word/char in the corpusimport.*/
    public void addOccurance(){
        this.occurances++;
    }

    /**
     * Adds a postag to the set of postags.
     * @param posTag  the postag to add
     */
    public void addPOSTag(final POSTag posTag){
        this.postags.add(posTag);
    }



    /**Adds an element to the set of translations.
     * @param translation the translation to add
     * @param locale the locale of the language of the translation
     * Example: Wörterbuch DE_de*/
    public void addTranslation(final String translation,final Locale locale){
        Translation translation1=new Translation(translation,locale);
        if(!this.translations.containsKey(locale.toString())){
           this.translations.put(locale.toString(),new TreeMap<>());
        }
        if(!this.translations.get(locale.toString()).containsKey(translation1)){
            this.translations.get(locale.toString()).put(translation1, 0);
        }
        this.translations.get(locale.toString()).put(translation1,this.translations.get(locale.toString()).get(translation1)+1);
    }

    /**Adds a transliteration to the Set of transliterations.
     * @param transliteration the transliteration to add*/
    public void addTransliteration(final Transliteration transliteration){
        if(!transliterations.keySet().contains(transliteration)){
            this.transliterations.put(transliteration, 0.);
        }
        this.transliterations.put(transliteration,this.transliterations.get(transliteration)+1);
    }



    @Override
    public int compareTo(final LangChar langChar) {
        int comp=this.length().compareTo(langChar.length());
        if(comp==0){
            return ((Integer)this.getOccurances().intValue()).compareTo(langChar.getOccurances().intValue())*-1;
        }
        return comp*-1;
    }

    @Override
    public boolean equals(final Object obj) {
        return obj instanceof LangChar && this.character.equals(((LangChar) obj).character);
    }

    /**Gets the given character.
     * @return the character as String*/
    public String getCharacter(){
        return this.character;
    }

    /**Sets the character.
     * @param character the character to set
     */
    public void setCharacter(final String character){
        this.character = character;
    }



    /**Gets the occurances of this word/char in the corpusimport.
     *
     * @return the occurances as Double
     */
    public Double getOccurances(){
        return this.occurances;
    }



    /**Gets the set of transliterations.
     *
     * @return the set of transliterations
     */
    public Set<Transliteration> getTransliterationSet(){
        return this.transliterations.keySet();
    }

    /**Gets the map of transliterations.
     *
     * @return  the map of transliterations
     */
    public Map<Transliteration,Double> getTransliterations(){
        return this.transliterations;
    }

    /**Gets the length of this char/word.
     *
     * @return the length as Integer
     */
    public Integer length(){
        return this.character.length();
    }

    /**Sets the occurances of this word/char in the corpusimport.
     * @param occurance the occurances to set
     */
    public void setAbsOccurance(final Double occurance){
        this.occurances =occurance;
    }

    /**Gets the occurances of this word/char in the corpusimport.
     * @param occurance the relative occurance to set
     */
    public abstract void setRelativeOccuranceFromDict(final Double occurance);



    @Override
    public String toString(){
        return this.character;
    }


}
