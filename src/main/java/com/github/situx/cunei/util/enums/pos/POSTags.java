package com.github.situx.cunei.akkad.util.enums.pos;

/**
 * Word Enum.
 */
public enum POSTags {


    AGENT("AGENT","http://purl.org/olia/olia.owl#Agent"),
    ADJECTIVE("ADJ","http://purl.org/olia/olia.owl#Adjective"),
    ADVERB("ADV","http://purl.org/olia/olia.owl#Adverb"),
    DETERMINATIVE("DET","http://purl.org/olia/olia.owl#Determiner"),
    CONJUNCTION("CONJ","http://purl.org/olia/olia.owl#Conjunction"),
    INDEFINITEPRONOUN("INDPRO","http://purl.org/olia/olia.owl#IndefinitePronoun"),
    DEMONSTRATIVEPRONOUN("DEMPRO","http://purl.org/olia/olia.owl#DemonstrativePronoun"),
    MODALPREFIX("MOD","http://purl.org/olia/olia.owl#Modal"),
    NOUN("NN","http://purl.org/olia/olia.owl#Noun"),
    NOUNORADJ("NA","http://purl.org/olia/olia.owl#NounOrAdjective"),
    NAMEDENTITY("NE","http://purl.org/olia/olia.owl#NamedEntity"),
    NUMBER("CARD","http://purl.org/olia/olia.owl#Cardinal"),
    PARTICLE("PART","http://purl.org/olia/olia.owl#Particle"),
    RELATIVEPRONOUN("RELPRO","http://purl.org/olia/olia.owl#RelativePronoun"),
    POSSESSIVE("POSS","http://purl.org/olia/olia.owl#Possessive"),
    PRECATIVE("PRE","http://purl.org/olia/olia.owl#Precative"),
    POSTPOSITION("POSTPOS","http://purl.org/olia/olia.owl#Postposition"),
    PRONOUN("PRO","http://purl.org/olia/olia.owl#Pronoun"),
    UNKNOWN("UNKNOWN","http://purl.org/olia/olia.owl#Unknown"),
    VERB("VV","http://purl.org/olia/olia.owl#Verb"),
    SUBJECT("SUBJECT","http://purl.org/olia/olia.owl#Subject"),
    OBJECT("OBJ","http://purl.org/olia/olia.owl#Object"),
    PREPOSITION("PREP","http://purl.org/olia/olia.owl#Preposition");

    private String tagdesc;

    private String uri;

    public String getUri() {
        return uri;
    }

    private POSTags(String tagdesc, String uri){
        this.tagdesc=tagdesc;
        this.uri=uri;

    }

    @Override
    public String toString() {
        return this.tagdesc;
    }
}
