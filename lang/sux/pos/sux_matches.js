var sux_matches={
matches: [{
"match":/[\s\[](be)[^\s]*/gm,
"matchClass":"conjunction","tag":"CONJ",
"priority":1,
"description":"Typ: Konjunktion (CONJ)<br>POSTag: CONJUNCTION<br>","value":"this<br>"
},
/*
{
"match":/[^\s]*gm,
"matchClass":"conjunction",
"priority":1,
"description":"Typ: Konjunktion (CONJ)<br>POSTag: CONJUNCTION<br>","value":"that (visible)<br>"
},
{
"match":/[^\s]*gm,
"matchClass":"conjunction",
"priority":1,
"description":"Typ: Konjunktion (CONJ)<br>POSTag: CONJUNCTION<br>","value":"that (invisible)<br>"
},*/
{
"match":/(-e-ne|[[\s\[]ne]-ne|𒂊𒉈|𒉈)[^\s]*/gm,
"matchClass":"particle","tag":"PART",
"priority":2,
"description":"Typ: Partikel (PART)<br>POSTag: PARTICLE<br>","value":"plural marker<br>"
},
{
"match":/-a(-|)[^\s]*/g,
"matchClass":"particle","tag":"PART",
"priority":2,
"description":"Typ: Partikel (locative)<br>POSTag: PARTICLE<br>","value":"at<br>"
},
{
"match":/-e(-|)[^\s]*/gm,
"matchClass":"particle","tag":"PART",
"priority":2,
"description":"Typ: Partikel (ergative or directive)<br>POSTag: PARTICLE<br>","value":"there<br>"
},
{
"match":/-Ø(-|)[^\s]*/gm,
"matchClass":"particle","tag":"PART",
"priority":2,
"description":"Typ: Partikel (absolutive)<br>POSTag: PARTICLE<br>","value":"<br>"
},
{
"match":/(-ir|-ra)(-|)[^\s]*/gm,
"matchClass":"particle","tag":"PART",
"priority":2,
"description":"Typ: Partikel (dative)<br>POSTag: PARTICLE<br>","value":"<br>"
},
{
"match":/-ak(-|)[^\s]*/gm,
"matchClass":"particle","tag":"PART",
"priority":2,
"description":"Typ: Partikel (genitive)<br>POSTag: PARTICLE<br>","value":"<br>"
},
{
"match":/-da(-|)[^\s]*/gm,
"matchClass":"particle","tag":"PART",
"priority":2,
"description":"Typ: Partikel (comitative)<br>POSTag: PARTICLE<br>","value":"<br>"
},
{
"match":/-ta(-|)[^\s]*/gm,
"matchClass":"particle","tag":"PART",
"priority":2,
"description":"Typ: Partikel (ablative-instrumental)<br>POSTag: PARTICLE<br>","value":"<br>"
},
{
"match":/-sze(-|)[^\s]*/gm,
"matchClass":"particle","tag":"PART",
"priority":2,
"description":"Typ: Partikel (terminative)<br>POSTag: PARTICLE<br>","value":"<br>"
},
{
"match":/-gin(-|)[^\s]*/gm,
"matchClass":"particle","tag":"PART",
"priority":2,
"description":"Typ: Partikel (equative)<br>POSTag: PARTICLE<br>","value":"like<br>"
},
{
"match":/(-gu|-ga|𒄖|𒂵)[^\s]*/gm,
"matchClass":"possessive","tag":"POSS",
"priority":3,
"description":"Typ: possessive (FIRST_SINGULAR)<br>POSTag: POSSESSIVE<br>","value":"my<br>"
},
{
"match":/(-zu|-za|𒍪|𒍝)[^\s]*/gm,
"matchClass":"possessive","tag":"POSS",
"priority":3,
"description":"Typ: possessive (SECOND_SINGULAR)<br>POSTag: POSSESSIVE<br>","value":"yours<br>"
},
{
"match":/(-a-ni|-a-na|𒀀𒉌|𒀀𒈾)[^\s]*/gm,
"matchClass":"possessive","tag":"POSS",
"priority":3,
"description":"Typ: possessive (THIRD_SINGULAR_MALE)<br>POSTag: POSSESSIVE<br>","value":"his<br>"
},
{
"match":/(-bi|-bi-a|-ba|𒁉|𒁉𒀀|𒁀)[^\s]*/gm,
"matchClass":"possessive","tag":"POSS",
"priority":3,
"description":"Typ: possessive (THIRD_SINGULAR_FEMALE)<br>POSTag: POSSESSIVE<br>","value":"her<br>"
},
{
"match":/(-me|𒂊)[^\s]*/gm,
"matchClass":"possessive","tag":"POSS",
"priority":3,
"description":"Typ: possessive (FIRST_PLURAL)<br>POSTag: POSSESSIVE<br>","value":"our<br>"
},
{
"match":/(-zu-ne-ne|𒍪𒉈𒉈)[^\s]*/gm,
"matchClass":"possessive","tag":"POSS",
"priority":3,
"description":"Typ: possessive (SECOND_PLURAL)<br>POSTag: POSSESSIVE<br>","value":"your<br>"
},
{
"match":/((-a)?-ne-ne|(𒀀)?𒉈𒉈)[^\s]*/gm,
"matchClass":"possessive","tag":"POSS",
"priority":3,
"description":"Typ: possessive (THIRD_PLURAL)<br>POSTag: POSSESSIVE<br>","value":"their<br>"
},
{
"match":/[\s\[](ga2-e|ge|𒂷𒂊|ge)[^\s]*/gm,
"matchClass":"pronoun","tag":"PRO",
"priority":4,
"description":"Typ: Pronomen (FIRST_SINGULAR)<br>POSTag: PRONOUN<br>","value":"I<br>"
},
{
"match":/[\s\[](za-e|ze2|𒍝𒂊|𒍢)[^\s]*/gm,
"matchClass":"pronoun","tag":"PRO",
"priority":4,
"description":"Typ: Pronomen (SECOND_SINGULAR)<br>POSTag: PRONOUN<br>","value":"you<br>"
},
{
"match":/[\s\[](e-ne|a-ne|𒂊𒉈|𒀀𒉈)[^\s]*/gm,
"matchClass":"pronoun","tag":"PRO",
"priority":4,
"description":"Typ: Pronomen (THIRD_SINGULAR)<br>POSTag: PRONOUN<br>","value":"he,him,she,her<br>"
},
{
"match":/[\s\[](me-en-de3-en)[^\s]*/gm,
"matchClass":"pronoun","tag":"PRO",
"priority":4,
"description":"Typ: Pronomen (FIRST_PLURAL)<br>POSTag: PRONOUN<br>","value":"we<br>"
},
{
"match":/[\s\[](me-en-ze2-en)[^\s]*/gm,
"matchClass":"pronoun","tag":"PRO",
"priority":4,
"description":"Typ: Pronomen (SECOND_PLURAL)<br>POSTag: PRONOUN<br>","value":"you<br>"
},
{
"match":/[\s\[](e-ne-ne|a-ne-ne|𒂊𒉈𒉈|𒀀𒉈𒉈)[^\s]*/gm,
"matchClass":"pronoun","tag":"PRO",
"priority":4,
"description":"Typ: Pronomen (THIRD_PLURAL)<br>POSTag: PRONOUN<br>","value":"they<br>"
},
/*
{
"match":/[^\s]/gm,
"matchClass":"pronoun",
"priority":4,
"description":"Typ: Pronomen<br>POSTag: PRONOUN<br>","value":"who is it<br>"
},*/
{
"match":/[\s\[]a-na-(asz|sze)?(-a3m)?[^\s]*/gm,
"matchClass":"pronoun","tag":"PRO",
"priority":4,
"description":"Typ: Pronomen<br>POSTag: PRONOUN<br>","value":"why<br>"
},
{
"match":/[\s\[](a-na-gin)[^\s]*/gm,
"matchClass":"pronoun","tag":"PRO",
"priority":4,
"description":"Typ: Pronomen<br>POSTag: PRONOUN<br>","value":"how<br>"
},
{
"match":/[\s\[]me-a|𒈨𒀀[^\s]*/gm,
"matchClass":"pronoun","tag":"PRO",
"priority":4,
"description":"Typ: Pronomen<br>POSTag: PRONOUN<br>","value":"where<br>"
},
{
"match":/[\s\[]me-sze3|𒈨𒂠[^\s]*/gm,
"matchClass":"pronoun","tag":"PRO",
"priority":4,
"description":"Typ: Pronomen<br>POSTag: PRONOUN<br>","value":"whither<br>"
},
{
"match":/[\s\[]me-ta|𒈨𒋫[^\s]*/gm,
"matchClass":"pronoun","tag":"PRO",
"priority":4,
"description":"Typ: Pronomen<br>POSTag: PRONOUN<br>","value":"whence<br>"
},
{
"match":/[\s\[](en-na-me-sze3|en-sze)[^\s]*/gm,
"matchClass":"pronoun","tag":"PRO",
"priority":4,
"description":"Typ: Pronomen<br>POSTag: PRONOUN<br>","value":"how long<br>"
},
{
"match":/[\s\[](a-ba|𒀀𒁀)[^\s]*/gm,
"matchClass":"pronoun","tag":"PRO",
"priority":4,
"description":"Typ: Pronomen<br>POSTag: PRONOUN<br>","value":"who<br>"
},
{
"match":/[\s\[](a-na|𒀀𒈾)[^\s]*/gm,
"matchClass":"pronoun","tag":"PRO",
"priority":4,
"description":"Typ: Pronomen<br>POSTag: PRONOUN<br>","value":"what<br>"
},
{
"match":/[\s\[](me|𒈨)[^\s]*/gm,
"matchClass":"pronoun","tag":"PRO",
"priority":4,
"description":"Typ: Pronomen<br>POSTag: PRONOUN<br>","value":"where<br>"
},
/*
{
"match":/[^\s]/gm,
"matchClass":"pronoun",
"priority":4,
"description":"Typ: Pronomen<br>POSTag: PRONOUN<br>","value":"when<br>"
},
*/
{
"match":/(-men|𒃞)[^\s]*/gm,
"matchClass":"pronoun","tag":"PRO",
"priority":4,
"description":"Typ: Pronomen (PRO)<br>POSTag: PRONOUN<br>","value":"first/second declination singular<br>"
},
{
"match":/((-me)?-am([0-9])?|(𒈨)?𒄠)[^\s]*/gm,
"matchClass":"pronoun","tag":"PRO",
"priority":4,
"description":"Typ: Pronomen (PRO)<br>POSTag: PRONOUN<br>","value":"third declination singular<br>"
},
{
"match":/(-menden)[^\s]*/gm,
"matchClass":"pronoun","tag":"PRO",
"priority":4,
"description":"Typ: Pronomen (PRO)<br>POSTag: PRONOUN<br>","value":"first declination plural<br>"
},
{
"match":/(-menzen)[^\s]*/gm,
"matchClass":"pronoun","tag":"PRO",
"priority":4,
"description":"Typ: Pronomen (PRO)<br>POSTag: PRONOUN<br>","value":"second declination plural<br>"
},
{
"match":/(-mesz|𒌊)[^\s]*/gm,
"matchClass":"pronoun","tag":"PRO",
"priority":4,
"description":"Typ: Pronomen (PRO)<br>POSTag: PRONOUN<br>","value":"third declination plural<br>"
},
{
"match":/[\s\[]lu2|𒇽[^\s]*/gm,
"matchClass":"relativepronoun","tag":"RELPRO",
"priority":5,
"description":"Typ: relativepronoun<br>POSTag: RELATIVEPRONOUN<br>","value":"who<br>"
},
/*
{
"match":/[^\s]/gm,
"matchClass":"relativepronoun",
"priority":5,
"description":"Typ: relativepronoun<br>POSTag: RELATIVEPRONOUN<br>","value":"which<br>"
},
*/
{
"match":/[\s\[](ki|𒆠)[^\s]*/gm,
"matchClass":"relativepronoun","tag":"RELPRO",
"priority":5,
"description":"Typ: relativepronoun<br>POSTag: RELATIVEPRONOUN<br>","value":"where<br>"
},
{
"match":/[\s\[](a-ba|𒀀𒁀)[^\s]*/gm,
"matchClass":"relativepronoun","tag":"RELPRO",
"priority":5,
"description":"Typ: relativepronoun<br>POSTag: RELATIVEPRONOUN<br>","value":"(the one) who<br>"
},
{
"match":/[\s\[](a-na|𒀀𒈾)[^\s]*/gm,
"matchClass":"relativepronoun","tag":"RELPRO",
"priority":5,
"description":"Typ: relativepronoun<br>POSTag: RELATIVEPRONOUN<br>","value":"(that) which<br>"
},
{
"match":/disz-disz+.*|[\s\[]disz[^\s]*/gm,
"matchClass":"number","tag":"NUM",
"priority":9,
"description":"Typ: Zahl (NUMBER)<br>POSTag: NUMBER<br>","value":"1<br>"
},
{
"match":/[\s\[](min)-|[\s\[]𒈫[^\s]*/gm,
"matchClass":"number","tag":"NUM",
"priority":9,
"description":"Typ: Zahl (NUMBER)<br>POSTag: NUMBER<br>","value":"2<br>"
},
{
"match":/[\s\[](esz)-|[\s\[]𒌍[^\s]*/gm,
"matchClass":"number","tag":"NUM",
"priority":9,
"description":"Typ: Zahl (NUMBER)<br>POSTag: NUMBER<br>","value":"3<br>"
},
{
"match":/[\s\[](sa-lasz)-[^\s]*/gm,
"matchClass":"number","tag":"NUM",
"priority":9,
"description":"Typ: Zahl (NUMBER)<br>POSTag: NUMBER<br>","value":"3<br>"
},
{
"match":/[\s\[](limmu)-|[\s\[]𒐼[^\s]*/gm,
"matchClass":"number","tag":"NUM",
"priority":9,
"description":"Typ: Zahl (NUMBER)<br>POSTag: NUMBER<br>","value":"4<br>"
},
{
"match":/[\s\[](i|ia)|[\s\[]𒄿|[\s\[]𒅀[^\s]*/gm,
"matchClass":"number","tag":"NUM",
"priority":9,
"description":"Typ: Zahl (NUMBER)<br>POSTag: NUMBER<br>","value":"5<br>"
},
{
"match":/[\s\[]asz|[\s\[]𒀸[^\s]*/gm,
"matchClass":"number","tag":"NUM",
"priority":9,
"description":"Typ: Zahl (NUMBER)<br>POSTag: NUMBER<br>","value":"6<br>"
},
{
"match":/[\s\[](u-min|𒌋𒈫)[^\s]*/gm,
"matchClass":"number","tag":"NUM",
"priority":9,
"description":"Typ: Zahl (NUMBER)<br>POSTag: NUMBER<br>","value":"7<br>"
},
{
"match":/[\s\[](us-su|𒊻𒋢)[^\s]*/gm,
"matchClass":"number","tag":"NUM",
"priority":9,
"description":"Typ: Zahl (NUMBER)<br>POSTag: NUMBER<br>","value":"8<br>"
},
/*
{
"match":/[^\s]/gm,
"matchClass":"number",
"priority":9,
"description":"Typ: Zahl (NUMBER)<br>POSTag: NUMBER<br>","value":"9<br>"
},
*/
{
"match":/[\s\[](u-u+.*|[\s\[]u)[^\s]*/gm,
"matchClass":"number","tag":"NUM",
"priority":9,
"description":"Typ: Zahl (NUMBER)<br>POSTag: NUMBER<br>","value":"10<br>"
},
/*
{
"match":/[^\s]/gm,
"matchClass":"number",
"priority":9,
"description":"Typ: Zahl (NUMBER)<br>POSTag: NUMBER<br>","value":"20<br>"
},
*/
{
"match":/[\s\[](u-szu|𒌋𒋗)[^\s]*/gm,
"matchClass":"number","tag":"NUM",
"priority":9,
"description":"Typ: Zahl (NUMBER)<br>POSTag: NUMBER<br>","value":"30<br>"
},
{
"match":/[\s\[](ni-min|𒉌𒈫)[^\s]*/gm,
"matchClass":"number","tag":"NUM",
"priority":9,
"description":"Typ: Zahl (NUMBER)<br>POSTag: NUMBER<br>","value":"40<br>"
},
/*
{
"match":/[^\s]/gm,
"matchClass":"number",
"priority":9,
"description":"Typ: Zahl (NUMBER)<br>POSTag: NUMBER<br>","value":"50<br>"
},
*/
{
"match":/[\s\[](geszd)[^\s]*/gm,
"matchClass":"number","tag":"NUM",
"priority":9,
"description":"Typ: Zahl (NUMBER)<br>POSTag: NUMBER<br>","value":"60<br>"
},
{
"match":/[\s\[](gesz-min|𒄑𒈫)[^\s]*/gm,
"matchClass":"number","tag":"NUM",
"priority":9,
"description":"Typ: Zahl (NUMBER)<br>POSTag: NUMBER<br>","value":"120<br>"
},
{
"match":/[\s\[](d-|𒀭|disz-|𒁹|dug-|𒂁|e-|𒂊|f-|gesz-|gisz-|𒄑|hia-|id2-|in-|𒅔|iri-|ki-|𒆠|kusz-|la-|𒆷|lu2-|𒇽|lu2mesz-|m-|mesz-|mez-|mi-|munus-|muszen-|na4-|𒈾|sig2-|sza10me-|Sza10mee-|sza10mei-|sza10mi-|szu-|ti-|tug2-|tug3-|u2-|ub-|𒌒|uru-|uruda-|urudu-|usz-|ut-|zabar-)/gm,
"matchClass":"determinative","tag":"DET",
"priority":10,
"description":"Typ: Determinativ (DET)<br>POSTag: DETERMINATIVE<br>"
},
{
"match":/[\s\[](.*[A-Z][a-z0-9-]+)(-gu|-ga|𒄖|𒂵|-zu|-za|𒍪|𒍝|-a-ni|-a-na|𒀀𒉌|𒀀𒈾|-bi|-bi-a|-ba|𒁉|𒁉𒀀|𒁀|-me|𒂊|-zu-ne-ne|𒍪𒉈𒉈|(-a)?-ne-ne|[𒀀]?𒉈𒉈)?(-a|𒀀|-e|𒂊|-[i]?r|𒅕|-ak|-ra|𒀝|-da|𒁕|-ta|𒋫|-sze|𒊺|-gin)?(-e-ne|-e)?|[\s\[](d-|𒀭|disz-|𒁹|dug-|𒂁|e-|f-|gesz-|gisz-|hia-|id2-|in-|iri-|ki-|kusz-|la-|𒆷|lu2-|𒇽|lu2mesz-|m-|mesz-|mez-|mi-|munus-|𒈾|muszen-|na4-|sig2-|sza10me-|Sza10mee-|sza10mei-|sza10mi-|szu-|ti-|tug2-|tug3-|u2-|𒌑|ub-|𒌒|uru-|𒌷|uruda-|urudu-|usz-|ut-|zabar-)(.*)(-gu|-ga|𒄖|𒂵|-zu|-za|𒍪|𒍝|-a-ni|-a-na|𒀀𒉌|𒀀𒈾|-bi|-bi-a|-ba|𒁉|𒁉𒀀|𒁀|-me|𒂊|-zu-ne-ne|𒍪𒉈𒉈|[-a]?-ne-ne|[𒀀]?𒉈𒉈)?(-a|𒀀|-e|𒂊|-[i]?r|𒅕|-ak|-ra|𒀝|-da|𒁕|-ta|𒋫|-sze|𒊺|-gin)?(-e-ne|-e)?[^\s]*/gm,
"matchClass":"namedentity","tag":"NE",
"priority":11,
"description":"Typ: Named Entity (NE)<br>POSTag: NAMEDENTITY<br>","value":"namedentity<br>"
},
{
"match":/[\s\[]((𒉡|𒆷|𒇷|bara-|𒈾|𒂵|𒄩|he-|𒐼|u[3]?-|Ø-|𒌷|𒉡𒍑)       |(nga-)|(𒈠|𒈬)|(b[ai][0-9]?-)|(𒂊|n-|b-|𒈨|e-ne-|nne-)|(𒀀|𒊏)|(𒁕)|(𒋫|𒅆)|(𒉌|e-)|(e-|n-|b-))+([a-z]+[0-9]*[-]?)+((-d|-ed)|(-[m]?en|-Ø|-me-am|-[m]?enden|-[m]?enzen|-[m]?esz|-[m]?e-ne|-e)|(-a))*[^\s]*/gm,
"matchClass":"verb","tag":"VV",
"priority":12,
"description":"Typ: Verb<br>POSTag: VERB<br>"
},
{
"match":/[\s\[]((nu-|la-|li-|bara-|na-|ga-|ha-|he-|sza-|u[3]?-|Ø-|iri-|nusz-|nu-usz-)       |(nga-)|(m[au]-)|(b[ai][0-9]?-)|(e-|n-|b-|me-|e-ne-|nne-)|(a-|ra-)|(da-)|(ta-|szi-)|(ni-|e-)|(e-|n-|b-))+([a-z]+[0-9]*[-]?)+((-d|-ed)|(-[m]?en|-Ø|-me-am|-[m]?enden|-[m]?enzen|-[m]?esz|-[m]?e-ne|-e))*[^\s]*/gm,
"matchClass":"verb","tag":"VV",
"priority":12,
"description":"Typ: Verb (PART)<br>POSTag: VERB<br>"
},
{
"match":/[\s\[]((nu-|la-|li-|bara-|na-|ga-|ha-|he-|sza-|u[3]?-|Ø-|iri-|nusz-|nu-usz-)       |(nga-)|(m[au]-)|(b[ai][0-9]?-)|(e-|n-|b-|me-|e-ne-|nne-)|(a-|ra-)|(da-)|(ta-|szi-)|(ni-|e-)|(e-|n-|b-))*([a-z]+[0-9]*[-]?)+((-d|-ed)|(-[m]?en|-Ø|-me-am|-[m]?enden|-[m]?enzen|-[m]?esz|-[m]?e-ne|-e))+[^\s]*/gm,
"matchClass":"verb","tag":"VV",
"priority":12,
"description":"Typ: Verb (PART)<br>POSTag: VERB<br>"
},
{
"match":/[\s\[]([a-z]+)(-gu|-ga|𒄖|𒂵|-zu|-za|𒍪|𒍝|-a-ni|-a-na|𒀀𒉌|𒀀𒈾|-bi|-bi-a|-ba|𒁉|𒁉𒀀|𒁀|-me|𒂊|-zu-ne-ne|𒍪𒉈𒉈|(-a)?-ne-ne|[𒀀]?𒉈𒉈)?(-a|𒀀|-e|𒂊|-[i]?r|𒅕|-ak|-ra|𒀝|-da|𒁕|-ta|𒋫|-sze|𒊺|-gin)?(-e-ne)?[^\s]*/gm,
"matchClass":"noun","tag":"NN",
"priority":14,
"description":"Typ: Nomen (NOUN)<br>POSTag: NOUN<br>"
},
{
"match":/-[n](-|)[^\s]*/gm,
"matchClass":"agent","tag":"AGENT",
"priority":16,
"description":"Typ: agent (THIRD_SINGULAR_MALE)<br>POSTag: AGENT<br>","value":"his/her<br>"
}
] 
};
