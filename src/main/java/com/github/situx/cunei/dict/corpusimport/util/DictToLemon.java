package com.github.situx.cunei.akkad.dict.corpusimport.util;

import com.github.situx.cunei.akkad.dict.chars.LangChar;
import com.github.situx.cunei.akkad.util.enums.methods.CharTypes;
import com.hp.hpl.jena.ontology.*;
import com.hp.hpl.jena.rdf.model.Literal;
import com.hp.hpl.jena.vocabulary.XSD;
import com.github.situx.cunei.akkad.dict.chars.cuneiform.CuneiChar;

import java.util.Date;
import java.util.Map;
import java.util.UUID;

/**
 * Created by timo on 29.09.16 .
 */
public class DictToLemon {

    private CharTypes chartype;

    private OntClass lemonWord;

    private OntClass lemonLexicon;

    private ObjectProperty isFormOf;
    private OntClass lemonForm;
    private ObjectProperty isSenseOf;
    private ObjectProperty lemonReference;
    private ObjectProperty hasSense;
    private ObjectProperty lemonLexicalForm;
    private OntClass lemonReferenceClass;

    private static String NAMESPACE="https://github.com/situx/ontology/cuneiform";
    private ObjectProperty license;

    public DictToLemon(CharTypes chartypes, OntModel model, String description){
        this.chartype=chartypes;
        this.createNewLemonDictFromResource(model,description);
    }

    public OntModel createNewLemonDictFromResource(OntModel model,String description){
        this.lemonLexicon=model.createClass("http://lemon-model.net/lemon#Lexicon");
        this.lemonWord=model.createClass("http://lemon-model.net/lemon#Word");
        ObjectProperty lemonEntryProp=model.createObjectProperty("http://lemon-model.net/lemon#entry");

        license=model.createObjectProperty("http://www.linkedmodel.org/schema/vaem#hasLicenseType");
        this.lemonForm=model.createClass("http://lemon-model.net/lemon#LexicalForm");
        this.lemonReferenceClass=model.createClass("http://lemon-model.net/lemon#LemonReference");
        OntClass lemonLexicalSense=model.createClass("http://lemon-model.net/lemon#LexicalSense");
        this.lemonLexicalForm=model.createObjectProperty("http://lemon-model.net/lemon#form");

        OntClass tabletClass=model.createClass(NAMESPACE+"#Tablet");
        DatatypeProperty tabletNumberProp=model.createDatatypeProperty(NAMESPACE+"#tabletnumber");
        tabletNumberProp.addDomain(tabletClass);
        tabletNumberProp.addRange(XSD.xstring);
        ObjectProperty postag=model.createObjectProperty("http://purl.org/olia/ubyCat.owl#has_partOfSpeech");
        DatatypeProperty languageprop=model.createDatatypeProperty(NAMESPACE+"#language");
        languageprop.addDomain(tabletClass);
        languageprop.addRange(XSD.xstring);
        DatatypeProperty dialectprop=model.createDatatypeProperty(NAMESPACE+"#dialect");
        dialectprop.addDomain(tabletClass);
        dialectprop.addRange(XSD.xstring);
        DatatypeProperty epochprop=model.createDatatypeProperty(NAMESPACE+"#epoch");
        epochprop.addDomain(tabletClass);
        epochprop.addRange(XSD.xstring);
        ObjectProperty contains=model.createObjectProperty(NAMESPACE+"#contains");
        contains.addDomain(tabletClass);
        contains.addRange(lemonWord);
        this.hasSense=model.createObjectProperty("http://lemon-model.net/lemon#sense");
        hasSense.addDomain(tabletClass);
        hasSense.addRange(lemonLexicalSense);
        this.isSenseOf=model.createObjectProperty("http://lemon-model.net/lemon#isSenseOf");
        this.isFormOf=model.createObjectProperty("http://lemon-model.net/lemon#isFormOf");
        this.lemonReference=model.createObjectProperty("http://lemon-model.net/lemon#reference");
        ObjectProperty isIncludedIn=model.createObjectProperty(NAMESPACE+"#isIncludedIn");
        epochprop.addDomain(lemonWord);
        epochprop.addRange(tabletClass);
        Individual lexicon=lemonLexicon.createIndividual(NAMESPACE+"/"+chartype.getLocale());
        lexicon.addProperty(model.createDatatypeProperty("http://lemon-model.net/lemon#language"),chartype.getLocale());
        lexicon.addProperty(license,model.createOntResource("https://www.wikidata.org/wiki/Q10513445"));
        lexicon.addLiteral(model.createDatatypeProperty("http://purl.org/dc/terms/created"),model.createTypedLiteral(new Date(System.currentTimeMillis()),XSD.dateTime.toString()));
        lexicon.addLabel(chartype.getSmallstr().substring(0, 1).toUpperCase() + chartype.getSmallstr().substring(1)+" Semantic Dictionary","en");
        lexicon.addLiteral(model.createDatatypeProperty("http://purl.org/dc/terms/title"),model.createTypedLiteral(chartype.getSmallstr().substring(0, 1).toUpperCase() + chartype.getSmallstr().substring(1)+" Semantic Dictionary"));
        lexicon.addLiteral(model.createDatatypeProperty("http://www.linkedmodel.org/schema/vaem#owner"),model.createTypedLiteral("Timo Homburg"));
        if(description!=null)
            lexicon.addLiteral(model.createDatatypeProperty("http://www.linkedmodel.org/schema/vaem#description"),description);
        return model;
    }

    public void wordCombToLemon(String word, String transliteration, String concept, String inTablet, CharTypes language, OntModel model, LangChar langchar, Map<String,String> translitMap, Map<String,CuneiChar> dictmap){
        OntClass lemonWord=model.createClass("http://lemon-model.net/lemon#Word");
        OntClass lemonForm=model.createClass("http://lemon-model.net/lemon#LexicalForm");
        ObjectProperty isFormOf=model.createObjectProperty("http://lemon-model.net/lemon#isFormOf");
        ObjectProperty lemonEntryProp=model.createObjectProperty("http://lemon-model.net/lemon#entry");
        System.out.println("Word: "+word);
        String uuid= UUID.randomUUID().toString();
        Individual curword=lemonWord.createIndividual(NAMESPACE+"/word#"+word.replace(" ","")+"_word");
        OntClass lemonLexicon=model.createClass("http://lemon-model.net/lemon#Lexicon");
        Individual lexicon=lemonLexicon.createIndividual(NAMESPACE+"/"+chartype.getLocale());
        lexicon.addProperty(license,model.createOntResource("https://www.wikidata.org/wiki/Q10513445"));
        lexicon.addProperty(lemonEntryProp,curword);
        OntClass lemonLexicalSense=model.createClass("http://lemon-model.net/lemon#LexicalSense");
        Individual cursense;
        Individual curform=lemonForm.createIndividual(NAMESPACE+"/word#"+word.replace(" ","")+"_form");
        curform.addProperty(model.createDatatypeProperty("http://lemon-model.net/lemon#writtenRep"),word);
        curform.addProperty(model.createDatatypeProperty("http://lemon-model.net/lemon#representation"),transliteration);
        Literal label = model.createLiteral( transliteration, language.getShortname() );
        curword.addLabel(transliteration,"en");
        //curword.addLiteral(model.createAnnotationProperty("http://www.w3.org/2000/01/rdf-schema#label"),label);
        label = model.createLiteral( word );

        curform.addLabel(word,"en");
        //Literal(model.createAnnotationProperty("http://www.w3.org/2000/01/rdf-schema#label"),label);
        //curword.addLabel(transliteration,language.getShortname());
        //curform.addLabel(word,language.getShortname());
        curform.addProperty(isFormOf,curword);
        curword.addProperty(this.lemonLexicalForm,curform);
        if(langchar==null) {
            langchar= dictmap.get(translitMap.get(word));
        }

        if(langchar!=null) {
            curform.addProperty(model.createDatatypeProperty("http://lemon-model.net/lemon#writtenRep"), langchar.getCharacter());
            if(langchar.getConceptURI()!=null && !langchar.getConceptURI().isEmpty()){
                System.out.println("ConceptURI: "+langchar.getConceptURI().toString());

                if(langchar.getConceptURI().contains("#")){
                    cursense=lemonLexicalSense.createIndividual(NAMESPACE+"/word#"+langchar.getConceptURI().substring(langchar.getConceptURI().lastIndexOf('#')+1).replace(" ",""));
                    cursense.addLabel(langchar.getConceptURI().substring(langchar.getConceptURI().lastIndexOf('#')+1).replace(" ","")+"_sense","en");
                }else if(langchar.getConceptURI().contains("/")) {
                    cursense = lemonLexicalSense.createIndividual(NAMESPACE+"/word#" + langchar.getConceptURI().substring(langchar.getConceptURI().lastIndexOf('/')+1).replace(" ",""));
                    cursense.addLabel(langchar.getConceptURI().substring(langchar.getConceptURI().lastIndexOf('/')+1).replace(" ","")+"_sense","en");
                }else{
                    String uuuid=UUID.randomUUID().toString();
                    cursense = lemonLexicalSense.createIndividual(NAMESPACE+"/word#" + uuuid);
                    cursense.addLabel(uuuid+"_sense",null);
                }
                curword.addProperty(hasSense,cursense);
                cursense.addProperty(isSenseOf,curword);
                cursense.addProperty(lemonReference,lemonReferenceClass.createIndividual(langchar.getConceptURI()));
                OntClass pos=model.createClass("http://purl.org/olia/ubyCat.owl#PartOfSpeech");
                System.out.println("Postags: "+langchar.getPostags());
                if(!langchar.getPostags().isEmpty()) {
                    System.out.println("Adding postag: "+langchar.getPostags().iterator().next().getConceptURI());
                    curform.addProperty(model.createObjectProperty("http://purl.org/olia/ubyCat.owl#partOfSpeech"), pos.createIndividual( langchar.getPostags().iterator().next().getConceptURI()));
                }
            }
        }
        /*if(!result.isEmpty() ) {
            if(postagger.getPosToURI().containsKey(result.iterator().next().getTag())){
                curword.addProperty(postag, model.createOntResource(postagger.getPosToURI().get(result.iterator().next().getTag())));
                POSDefinition firstresult=result.iterator().next();
                if(firstresult.getValue()!=null && firstresult.getValue().length>0){
                    curword.addProperty(model.createDatatypeProperty("http://acoli.uni-frankfurt.de/ontology/cuneiform#value"),firstresult.getValue()[0]);
                }
                if(firstresult.getVerbStem()!=null && !firstresult.getVerbStem().isEmpty()){
                    curword.addProperty(model.createDatatypeProperty("http://acoli.uni-frankfurt.de/ontology/cuneiform#stem"),firstresult.getVerbStem());
                }
                Map<Integer, String> groupresults=firstresult.getCurrentgroupResults();
                for(Integer key:result.iterator().next().getCurrentgroupResults().keySet()){
                    if(groupresults.get(key)!=null){
                        for(GroupDefinition groupdef:firstresult.getGroupconfig().get(key)){
                            Boolean matched=groupdef.getRegex().matcher(groupresults.get(key)).matches();
                            if(matched && !groupdef.getGroupCase().equals("stem")){
                                curword.addProperty(postag,model.createOntResource(groupdef.getUri()));
                            }else if(matched){
                                curword.addProperty(model.createDatatypeProperty("http://acoli.uni-frankfurt.de/ontology/cuneiform#lemma"),model.createOntResource(groupdef.getUri()));
                            }
                        }
                    }
                }
            }else{
                curword.addProperty(postag, result.iterator().next().getTag());
            }
        }
        curword.addProperty(lemonLexicalForm,ind);
        knownwords.put(word,uuid);
    }
            currentTablet.addProperty(contains,curword);
            curword.addProperty(isIncludedIn,currentTablet);
     */
    }

}
