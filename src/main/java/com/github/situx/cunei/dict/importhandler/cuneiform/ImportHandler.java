package com.github.situx.cunei.akkad.dict.importhandler.cuneiform;

import com.github.situx.cunei.akkad.dict.chars.cuneiform.*;
import com.github.situx.cunei.akkad.dict.utils.POSTag;
import com.github.situx.cunei.akkad.dict.utils.Transliteration;
import com.github.situx.cunei.akkad.util.enums.methods.CharTypes;
import com.github.situx.cunei.akkad.util.enums.util.Options;
import com.github.situx.cunei.akkad.util.enums.util.Tags;
import com.github.situx.cunei.akkad.dict.utils.Translation;
import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.ext.DefaultHandler2;

import java.util.Locale;
import java.util.Map;

/**
 * Created with IntelliJ IDEA.
 * User: Timo Homburg
 * Date: 06.11.13
 * Time: 17:59
 * ImportHandler for the cunei dictionaries and map format.
 */
public class ImportHandler extends DefaultHandler2 {
    private final Map<String, CuneiChar> resultmap;
    private final Map<String, String> translitToCuneiMap;
    private final Map<String, CuneiChar> logographs;
    private final Map<String, String> transcriptToCuneiMap;
    public Double lengthOfWordsInCorpus=0.;
    private StringBuilder charcollector =new StringBuilder();
    /**The CharType to use.*/
    private CharTypes chartype;
    private StringBuilder followingcollector=new StringBuilder(),languagecollector=new StringBuilder(),precedingcollector=new StringBuilder(),postagcollector=new StringBuilder();
    private String postaguri;
    /**Option to fill a dictionary or a map.*/
    private Options mapOrDict;
    private CuneiChar newChar;
    private Translation temptranslat;
    private Transliteration temptranslit;
    private boolean translation,logograph;
    private boolean transliteration,following,mapentry,preceding,postag;

    /**
     * Constructor for this class.
     * @param mapOrDict indicates if we are parsing a mapping or dictionary file
     * @param resultmap the map to put the resulting chars in
     * @param translitToCuneiMap the map to put the resulting transliterations in
     * @param chartype the language char type to use
     */
    public ImportHandler(final Options mapOrDict, final Map<String, CuneiChar> resultmap, final Map<String, String> translitToCuneiMap, final Map<String, String> transcriptToCuneiMap, final Map<String,CuneiChar> logographs, CharTypes chartype){
          this.resultmap=resultmap;
          this.mapOrDict=mapOrDict;
          this.translitToCuneiMap=translitToCuneiMap;
           this.logographs=logographs;
          this.transcriptToCuneiMap=transcriptToCuneiMap;
          this.chartype=chartype;
    }

    @Override
    public void characters(final char[] ch, final int start, final int length) throws SAXException {
        //System.out.println(new String(ch,start,length));
        if(this.transliteration){
            this.temptranslit.setTransliterationString((this.temptranslit.getTransliteration()+new String(ch, start, length)).replace(System.lineSeparator(), "").trim());
        }else if(this.following){
            this.followingcollector.append(new String(ch, start, length));
        }else if(this.preceding){
            this.precedingcollector.append(new String(ch, start, length));
        } else if(this.translation){
            this.languagecollector.append(new String(ch,start,length));
        }else if(this.postag){
            this.postagcollector.append(new String(ch,start,length));
        }else if(this.mapentry){
            this.charcollector.append(new String(ch,start,length));
        }
    }

    @Override
    public void endElement(final String uri, final String localName, final String qName) throws SAXException {
        switch(qName){
            case Tags.TRANSLITERATION: this.transliteration=false;
                this.newChar.addTransliteration(this.temptranslit);
                break;
            case Tags.TRANSLATION: this.translation=false;
                this.newChar.addTranslation(this.languagecollector.toString().replace(System.lineSeparator(), "").trim(),this.temptranslat.getLocale());
                this.languagecollector.delete(0,languagecollector.length());
                break;
            case Tags.POSTAG: this.postag=false;
                POSTag pos=new POSTag(this.postagcollector.toString().replace(System.lineSeparator(), "").trim());
                if(this.postaguri!=null){
                    pos.setConceptURI(postaguri);
                }
                this.newChar.addPOSTag(pos);
                this.postagcollector.delete(0,postagcollector.length());
                break;
            case Tags.MAPENTRY:
            case Tags.DICTENTRY: this.mapentry=false;this.newChar.setCharacter(this.charcollector.toString().replace(System.lineSeparator(), "").trim());
                this.lengthOfWordsInCorpus+=this.newChar.length();

                if(this.newChar.getTransliterationSet().isEmpty() && this.mapOrDict==Options.FILLMAP){
                    this.temptranslit = new Transliteration(this.newChar.getCharName(),this.newChar.getCharName());
                    if(this.temptranslit.getTransliteration()!=null)
                        this.newChar.getTransliterations().put(this.temptranslit,0.0);
                }
                for(Transliteration translit:this.newChar.getTransliterationSet()){
                    this.translitToCuneiMap.put(translit.toString(),this.newChar.getCharacter());

                }

            this.resultmap.put(this.newChar.getCharacter(), this.newChar);
            System.out.println("Added character: "+this.newChar);
            break;
            default:
        }
    }





    /**
     * Reformats a string to the ATF format.
     * @param transcription the String to reformat
     * @return the reformatted String
     */

    public String reformatToASCIITranscription(final String transcription) {
        if(transcription.matches(".*[0-9].*")){
            return transcription;
        }
        String result=transcription;
        int i=0,length=0;
        if(transcription.isEmpty()){
            return "";
        }
        result=transcription.replace("!", "").replace("#","").replaceAll("\\*","");
        result=result.replace("š","sz").replace("Š","SZ").replace("ṣ","s,").replace("Ṣ","S,")
                .replace("ḫ","h").replace("Ḫ","H").replace("ĝ","g").replace("ṭ","t,").replace("Ṭ","T,");
        result=result.replace("â","a").replace("ā","a").replace("Á","A2").replace("á","a2").replace("À","A3").replace("à","a3")
                .replace("ê","e").replace("ē","e").replace("É","E2").replace("é","e2").replace("È","E3").replace("è","e3")
                .replace("î","i").replace("ī","i").replace("Í","I2").replace("í","i2").replace("Ì","I3").replace("ì","i3")
                .replace("û","u").replace("ū", "u").replace("Ú","U2").replace("ú","u2").replace("Ù","U3").replace("ù","u3");
        result=result.replace("₀", "0").replace("₁","1").replace("₂","2").replace("₃","3")
                .replace("₄","4").replace("₅","5").replace("₆","6").replace("₇","7").replace("₈","8").replace("₉","9");
        length=result.length();
        while(!(length<2) && Character.isDigit(result.toCharArray()[length-1])){
            length-=1;
        }
        for(i=0;i<length;i++){
            if(Character.isDigit(result.charAt(i))){
                result.replace(""+result.charAt(i),"");
                //result+=result.charAt(i);
            }
        }
        return result;
    }



    public String reformatToUnicodeTranscription(final String transcription) {
        System.out.println("ReformatToUnicode: "+transcription);
        String result=transcription;
        int i=0,length=0;
        result=transcription.replace("!","").replace("#","");
        result=result.replace("sz","š").replace("SZ","Š").replace("s,","ṣ").replace("S,","Ṣ").
                replace("h","ḫ").replace("H","Ḫ").replace("ĝ","g").replace("t,", "ṭ").replace("T,", "Ṭ");
        result=result.replace("a:","ā").replace("a2","á").replace("a3","à")
                .replace("e:","ē").replace("e2","é").replace("e3","è")
                .replace("i:", "ī").replace("i2,", "í").replace("i3", "ì")
                .replace("u:", "ū").replace("u2", "ú").replace("u3,","ù");
        result=result.replace("0", "₀").replace("1", "₁").replace("2", "₂").replace("3", "₃")
                .replace("4", "₄").replace("5", "₅").replace("6", "₆").replace("7", "₇").replace("8", "₈").replace("9","₉");
        length=result.length();
        while(!result.isEmpty() && Character.isDigit(result.toCharArray()[length-1])){
            length-=1;
        }
        for(i=0;i<length;i++){
            if(Character.isDigit(result.charAt(i))){
                result.replace(""+result.charAt(i),"");
                result+=result.charAt(i);
            }
        }
        System.out.println("Reformatted: "+result.toLowerCase());
        return result;
        //return result.toLowerCase();
    }


    @Override
    public void startElement(final String uri, final String localName, final String qName, final Attributes attributes) throws SAXException {
        switch(qName) {
            case Tags.MAPENTRY:
            case Tags.DICTENTRY:
                this.mapentry = true;
                this.charcollector.delete(0,charcollector.length());
                switch (chartype) {
                    case AKKADIAN:
                        this.newChar = new AkkadChar("");
                        break;
                    case HITTITE:
                        //System.out.println("Parse new HittiteChar!");
                        this.newChar = new HittiteChar("");

                        break;
                    case EGYPTIANCHAR:
                        this.newChar = new EgyptChar("");
                        break;
                    case SUMERIAN:
                        this.newChar = new SumerianChar("");
                        /*if(attributes.getValue(Tags.SLHA)!=null && !attributes.getValue(Tags.SLHA).isEmpty()){
                            ((SumerianChar)this.newChar).setSHAnumber(attributes.getValue(Tags.SLHA));
                        }*/
                        break;
                    default:
                        this.newChar = new AkkadChar("");
                }
                if(attributes.getValue(Tags.HBZL)!=null && !attributes.getValue(Tags.HBZL).isEmpty()){
                    this.newChar.setHethzlNumber(attributes.getValue(Tags.HBZL));
                }
                if(attributes.getValue(Tags.SLHA)!=null && !attributes.getValue(Tags.SLHA).isEmpty()){
                    this.newChar.setLhaNumber(attributes.getValue(Tags.SLHA));
                }
                this.newChar.setPaintInformation(attributes.getValue(Tags.GOTTSTEIN));
                if(attributes.getValue(Tags.MEZL)!=null && !attributes.getValue(Tags.MEZL).isEmpty()){
                    this.newChar.setMezlNumber(attributes.getValue(Tags.MEZL));
                }
                if(attributes.getValue(Tags.ABZL)!=null && !attributes.getValue(Tags.ABZL).isEmpty()){
                    this.newChar.setaBzlNumber(attributes.getValue(Tags.ABZL));
                }
                this.newChar.setCharName(attributes.getValue(Tags.SIGNNAME.toString()));
                this.newChar.setPhonogram(Boolean.valueOf(attributes.getValue(Tags.PHONO.toString())));
                this.newChar.setDeterminative(Boolean.valueOf(attributes.getValue(Tags.DETERMINATIVE.toString())));
                this.newChar.setLogograph(Boolean.valueOf(attributes.getValue(Tags.LOGO.toString())));
                if(attributes.getValue(Tags.CONCEPT)!=null)
                    this.newChar.setConceptURI(attributes.getValue(Tags.CONCEPT));
                if(attributes.getValue(Tags.LOGOGRAM)!=null && !attributes.getValue(Tags.LOGOGRAM).isEmpty()){
                    this.logographs.put(attributes.getValue(Tags.LOGOGRAM),this.newChar);
                }

                if(attributes.getValue(Tags.ABSOCC.toString())!=null && !attributes.getValue(Tags.ABSOCC.toString()).isEmpty())
                    this.newChar.setAbsOccurance(Double.valueOf(attributes.getValue(Tags.ABSOCC.toString())));
                //System.out.println("RelativeOccurance: "+attributes.getValue(Tags.RELOCC.toString()));
                if(attributes.getValue(Tags.RELOCC.toString()) !=null && !attributes.getValue(Tags.RELOCC.toString()).isEmpty())
                    this.newChar.setRelativeOccuranceFromDict(Double.valueOf(attributes.getValue(Tags.RELOCC.toString())));
                //System.out.println("RelativeOccurance: "+this.newChar.getRelativeOccurance());
                break;
            case Tags.TRANSLITERATION:
                this.temptranslit = new Transliteration("", "");
                //System.out.println("RelativeOccurance: "+attributes.getValue(Tags.RELOCC.toString()));
                 //System.out.println("RelativeOccurance: "+this.temptranslit.getRelativeOccurance());


                this.temptranslit.setTranscription(attributes.getValue(Tags.TRANSCRIPTION.toString())==null?"":attributes.getValue(Tags.TRANSCRIPTION.toString()));

                this.transliteration=true;break;
            case Tags.TRANSLATION:
                this.temptranslat=new Translation("", new Locale(attributes.getValue(Tags.LOCALE.toString())));
                this.translation=true;break;
            case Tags.POSTAG:
                this.postaguri=attributes.getValue("uri");
                this.postag=true;
                    break;
            default:

        }

    }


}
