package com.github.situx.cunei.akkad.dict.utils;


import com.github.situx.cunei.akkad.util.enums.pos.POSTags;

/**
 * Created by timo on 03.07.14.
 */
public class POSTag implements Comparable<POSTag>{

    public String getConceptURI() {
        return conceptURI;
    }

    public void setConceptURI(String conceptURI) {
        this.conceptURI = conceptURI;
    }

    private POSTags postag=POSTags.NOUN;
    private String postagstr="";
    private String conceptURI="";

    /**
     * Constructor for this class.
     * @param postag the postag
     */
    public POSTag(final POSTags postag){
        this.postag=postag;
    }


    /**
     * Constructor for this class.
     * @param postag  the postag
     */
    public POSTag(final String postag){
        this.postagstr=postag;
    }

    @Override
    public int compareTo(final POSTag posTag) {
        return this.postagstr.compareTo(posTag.postagstr);
    }


    /**
     * Gets the postag type.
     * @return the postag type to get
     */
    public POSTags getPostag() {
        return postag;
    }

    /**
     * Sets the postag type.
     * @param postag the postag type to set
     */
    public void setPostag(final POSTags postag) {
        this.postag = postag;
    }

    @Override
    public String toString() {
        return this.postagstr;
    }


}
