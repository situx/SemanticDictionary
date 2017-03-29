package com.github.situx.cunei.akkad.dict.semdicthandler;

import com.github.situx.cunei.akkad.dict.chars.LangChar;
import com.github.situx.cunei.akkad.dict.chars.cuneiform.CuneiChar;
import com.github.situx.cunei.akkad.dict.corpusimport.util.DictToLemon;
import com.github.situx.cunei.akkad.dict.importhandler.cuneiform.ImportHandler;
import com.github.situx.cunei.akkad.dict.utils.Transliteration;
import com.github.situx.cunei.akkad.util.enums.methods.CharTypes;
import com.github.situx.cunei.akkad.util.enums.util.Options;
import com.hp.hpl.jena.ontology.OntModel;
import com.hp.hpl.jena.rdf.model.ModelFactory;
import org.apache.commons.lang3.StringUtils;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.XML;
import org.xml.sax.SAXException;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.SAXParserFactory;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;

/**
 * Created by timo on 24.05.16.
 * Class to match possible concepts in nouns in recognized words of a given text.
 * LOD Cloud
 */
public class ConceptMatcher {

    private static final String ENDPOINT="";

    private static ConceptMatcher instance;

    public static ConceptMatcher getInstance() {
        if(instance==null) {
            instance=new ConceptMatcher();
        }
        return instance;
    }

    private ConceptMatcher(){
    }


    public static void createCharacterMapsJS(CharTypes chartype, Map<String,CuneiChar> dict, Map<String,CuneiChar> charmap) throws IOException {
        if (chartype.equals(CharTypes.EGYPTIANCHAR))
            return;
        try {
            java.util.Map<String, String> translitToCunei = new TreeMap<String, String>();
            for (String key : dict.keySet()) {
                for (Transliteration trans : dict.get(key).getTransliterationSet()) {
                    System.out.println("Cunei: " + key);
                    System.out.println("Translit: " + trans.getTransliteration());
                    Integer numchars = StringUtils.countMatches(trans.getTransliteration(), "-") + 1;
                    Integer numunicodechars = key.length() / 2;
                    System.out.println(numchars + " " + numunicodechars);
                    if (numchars.equals(numunicodechars)) {
                        String[] translit = trans.getTransliteration().split("-");
                        String[] script = key.codePoints()
                                .mapToObj(cp -> new String(Character.toChars(cp)))
                                .toArray(size -> new String[size]);
                        //String[] script = key.split("");
                        int i = 0;
                        for (String transs : translit) {
                            try {
                                translitToCunei.put(transs, script[i] + "");
                            } catch (StringIndexOutOfBoundsException e) {
                                e.printStackTrace();
                            }
                            i++;
                        }
                    } else if (numchars == 1 && numunicodechars > numchars) {
                        translitToCunei.put(trans.getTransliteration(), key);
                    }
                }
            }
            System.out.println(translitToCunei);
            StringBuilder result = new StringBuilder();
            StringBuilder result2 = new StringBuilder();
            result.append("<?xml version=\"1.1\"?>\n<mapentries>");
            result2.append("<?xml version=\"1.1\"?>\n<mapentries>");
            for (String translit : translitToCunei.keySet()) {
                LangChar langc = charmap.get(translitToCunei.get(translit));
                if (langc != null && langc.getPaintInformation() != null) {
                    result.append("<mapentry paint=\"").append(langc.getPaintInformation()).append("\">");
                    result2.append("<mapentry got=\"").append(langc.getPaintInformation()).append("\" ");
                } else {
                    result.append("<mapentry>\n");
                    result2.append("<mapentry");
                }
                if (langc != null && langc instanceof CuneiChar) {
                    result.append(((CuneiChar) langc).getMezlNumber() != null && !((CuneiChar) langc).getMezlNumber().trim().isEmpty() ? "<reference ref=\"https://openlibrary.org/works/OL15890317W\" title=\"Mesopotamisches Zeichenlexikon\" short=\"MeZl\">" + ((CuneiChar) langc).getMezlNumber() + "</reference>" : "");
                    result2.append(" MesZL=\""+((CuneiChar) langc).getMezlNumber()+"\"");
                    result.append(((CuneiChar) langc).getaBzlNumber() != null && !((CuneiChar) langc).getaBzlNumber().trim().isEmpty() ? "<reference ref=\"https://openlibrary.org/works/OL9899303W\" title=\"Altbabylonische Zeichenliste der sumerisch-literarischen Texte\" short=\"AbZl\">" + ((CuneiChar) langc).getaBzlNumber() + "</reference>" : "");
                    result2.append(" aBZL=\""+((CuneiChar) langc).getaBzlNumber()+"\"");
                    result.append(((CuneiChar) langc).getLhaNumber() != null && !((CuneiChar) langc).getLhaNumber().trim().isEmpty() ? "<reference ref=\"lha\" short=\"LHA\" title=\"The Deimel Numbers\">" + ((CuneiChar) langc).getLhaNumber() + "</reference>" : "");
                    result2.append(" LHA=\""+((CuneiChar) langc).getLhaNumber()+"\"");
                    result.append(((CuneiChar) langc).getHethzlNumber() != null && !((CuneiChar) langc).getHethzlNumber().trim().isEmpty() ? "<reference ref=\"hethzl\" title=\"Hethitisches Zeichenlexikon\" short=\"HethZl\">" + ((CuneiChar) langc).getHethzlNumber() + "</reference>" : "");
                    result2.append(" HethZL=\""+((CuneiChar) langc).getHethzlNumber()+"\"");
                }
                result.append("<transliteration valid=\"true\">").append(translit).append("</transliteration>\n").append(translitToCunei.get(translit)).append("</mapentry>\n");
                result2.append("><transliteration valid=\"true\">").append(translit).append("</transliteration>\n").append(translitToCunei.get(translit)).append("</mapentry>\n");
            }
            result.append("</mapentries>");
            result2.append("</mapentries>");
            FileWriter writer = new FileWriter(new File("map/" + chartype.getSmallstr() + ".xml"));
            writer.write(result2.toString());
            writer.close();
            JSONObject xmlJSONObj = XML.toJSONObject(result2.toString());
            String jsonPrettyPrintString = xmlJSONObj.toString(4);
            writer = new FileWriter(new File("map/" + chartype.getSmallstr() + ".json"));
            writer.write(jsonPrettyPrintString);
            writer.close();
            xmlJSONObj = XML.toJSONObject(result.toString());
            jsonPrettyPrintString = xmlJSONObj.toString(4);
            writer = new FileWriter(new File("js/" + chartype.getSmallstr() + "_map.js"));
            writer.write("var " + chartype.getSmallstr() + "_map=" + jsonPrettyPrintString);
            writer.close();
            ConceptMatcher.createOntModelForDictionary(chartype, "map/", "",charmap,new TreeMap<>());

        } catch (JSONException je) {
            System.out.println(je.toString());
        }
    }



    public static OntModel createOntModelForDictionary(CharTypes chartype,String path,String comment,Map<String,CuneiChar> dictmap,Map<String,String> translitmap) throws IOException {
        OntModel model= ModelFactory.createOntologyModel();
        DictToLemon dtoL=new DictToLemon(chartype,model,comment);
        model=dtoL.createNewLemonDictFromResource(model,comment);
        int terms=0;
        for(LangChar word:dictmap.values()){
            dtoL.wordCombToLemon(word.getCharacter(),word.getTransliterationSet().iterator().next().toString(),word.getConceptURI(),null,chartype,model,word,translitmap,dictmap);
            terms++;
        }
        System.out.println(terms+" recognized");
        StringWriter strw=new StringWriter();
        model.write(strw,"TTL");
        FileWriter writer=new FileWriter(new File(path+chartype.getSmallstr()+".ttl"));
        writer.write(strw.toString().replace("@en","@"+chartype.getLocale()));
        writer.close();
        return model;
    }


    public static void generateDictionaryExports(CharTypes chartype,Map<String,String> translitmap,Map<String,CuneiChar> dictmap) throws IOException {
        try {
            String dictionary = new String(Files.readAllBytes(Paths.get("dict/" + chartype.getSmallstr() + ".xml")));
            String temp = dictionary.split("</comment>")[0].split("</license>")[1];
            String comment = temp.substring(temp.indexOf('>') + 1);
            System.out.println(comment);
            JSONObject xmlJSONObj = XML.toJSONObject(dictionary);
            String jsonPrettyPrintString = xmlJSONObj.toString(4);
            //System.out.println(jsonPrettyPrintString);
            FileWriter writer = new FileWriter(new File("dict/" + chartype.getSmallstr() + ".json"));
            writer.write(jsonPrettyPrintString);
            writer.close();
            writer = new FileWriter(new File("js/" + chartype.getSmallstr() + ".js"));
            writer.write("var " + chartype.getSmallstr() + "=" + jsonPrettyPrintString);
            writer.close();
            ConceptMatcher.createOntModelForDictionary(chartype, "dict/", comment,dictmap,translitmap);
        } catch (JSONException je) {
            System.out.println(je.toString());
        }
    }

    public static void main(String[] args) throws IOException, ParserConfigurationException, SAXException {
        CharTypes[] chartypes=new CharTypes[]{CharTypes.AKKADIAN,CharTypes.EGYPTIANCHAR,CharTypes.HITTITE,CharTypes.SUMERIAN};
        for(CharTypes chartype:chartypes) {
            Map<String,CuneiChar> dictmap=new TreeMap<>();
            Map<String,String> translitmap=new TreeMap<>();
            Map<String,CuneiChar> charactermap=new TreeMap<>();
            ImportHandler imp=new ImportHandler(Options.FILLDICTIONARY,dictmap,translitmap,new TreeMap<>(),new TreeMap<>(),chartype);
            SAXParserFactory.newInstance().newSAXParser().parse("dict/"+chartype.getSmallstr()+".xml",imp);
            imp=new ImportHandler(Options.FILLMAP,charactermap,new TreeMap<>(),new TreeMap<>(),new TreeMap<>(),chartype);
            SAXParserFactory.newInstance().newSAXParser().parse("map/"+chartype.getSmallstr()+".xml",imp);
            System.out.println("CharType: "+chartype.getLocale()+" - "+chartype.getSmallstr());
            ConceptMatcher.generateDictionaryExports(chartype,translitmap,dictmap);
            System.out.println("CharType: "+chartype.getLocale()+" - "+chartype.getSmallstr());
            ConceptMatcher.createCharacterMapsJS(chartype,dictmap,charactermap);
        }

    }
}
