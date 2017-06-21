var luwiancn={
 "name": "luwiancn",
 "header":"luwiancn Dictionary",
"selectType":"cell",
"show":{
"toolbar":true,
"footer":true
},
"columns":[
{"field":"script","caption":"Script","selectable":true,"sortable":true,"resizable":true,"size":"20%","style":"font-family:luwiancn"},
{"field":"transliteration","caption":"Transliteration","selectable":true,"sortable":true,"resizable":true,"size":"20%",},
{"field":"transcription","caption":"Transcription","selectable":true,"sortable":true,"resizable":true,"size":"20%"},
{"field":"translation","caption":"Translation","selectable":true,"sortable":true,"resizable":true,"size":"20%",
    render:function(record){
        result=""
        if(record.concept!=undefined && record.concept!=""){
            result+="<a href=\""+record.concept+"\" target=\"_blank\">"
            result+=record.translation
            if(record.meaning!=undefined && record.meaning!=""){
                    result+=" ("+record.meaning+")"
            }
            result+="</a>"
        }else{
            result=record.translation
             if(record.meaning!=undefined && record.meaning!=""){
                 result+=" ("+record.meaning+")"
             }
        }
        return result
}},
{"field":"pos","caption":"POSTag","selectable":true,"sortable":true,"resizable":true,"size":"20%"},
{"field":"ref","caption":"Reference","selectable":true,"sortable":true,"resizable":true,"size":"20%"}
]
,"records":[
{"recid":0,"concept":"https://www.wikidata.org/entity/Q178885","meaning":"", "ref":"luvlex","pos":"DET","transcription":"D", "transliteration":"D","translation":"god","script":"𒀭"},
{"recid":1,"concept":"","meaning":"", "ref":"luvlex","pos":"NE","transcription":"DAlauwaima", "transliteration":"D-A-la-u-wa-i-ma","translation":"Alauwaima","script":"𒀭𒀀𒆷𒌋𒉿𒄿𒈠"},
{"recid":2,"concept":"","meaning":"", "ref":"luvlex","pos":"NE","transcription":"DAtaliya", "transliteration":"D-A-ta-li-ya","translation":"Antaliya","script":"𒀭𒀀𒋫𒇷𒉿"},
{"recid":3,"concept":"","meaning":"", "ref":"luvlex","pos":"NE","transcription":"DGulza", "transliteration":"D-Gul-za","translation":"Gulza","script":"𒀭𒄢𒍝"},
{"recid":4,"concept":"","meaning":"", "ref":"luvlex","pos":"NE","transcription":"DGurnuwala", "transliteration":"D-Gur-nu-u-wa-la","translation":"Gurnuwala","script":"𒀭𒄥𒉡𒌋𒉿𒆷"},
{"recid":5,"concept":"https://www.wikidata.org/entity/Q774158","meaning":"", "ref":"luvlex","pos":"NE","transcription":"DKamruszepa", "transliteration":"D-Kam-ru-sze-pa","translation":"Kamrushepa","script":"𒀭𒄰𒊒𒊺𒉺"},
{"recid":6,"concept":"https://www.wikidata.org/entity/Q676297","meaning":"", "ref":"luvlex","pos":"NE","transcription":"DArma", "transliteration":"D-Ar-ma","translation":"Arma","script":"𒀭𒅈𒈠"},
{"recid":7,"concept":"https://www.wikidata.org/entity/Q21996165","meaning":"", "ref":"luvlex","pos":"NE","transcription":"DImmarni", "transliteration":"D-Im-mar-ni","translation":"Immarni","script":"𒀭𒅎𒈥𒉌"},
{"recid":8,"concept":"https://www.wikidata.org/entity/Q15332388","meaning":"", "ref":"luvlex","pos":"PREP","transcription":"annaan", "transliteration":"an-na-a-an","translation":"below","script":"𒀭𒈾𒀀𒀭"},
{"recid":9,"concept":"https://www.wikidata.org/entity/Q204776","meaning":"", "ref":"luvlex","pos":"NN","transcription":"GISZkuppiisz", "transliteration":"GISZ-ku-up-pi2-isz","translation":"bench","script":"𒄑𒆪𒌒𒁉𒅖"},
{"recid":10,"concept":"https://www.wikidata.org/entity/Q679","meaning":"", "ref":"luvlex","pos":"NN","transcription":"ipatarma", "transliteration":"i-pa-tar-ma","translation":"west","script":"𒄿𒉺𒋻𒈠"},
{"recid":11,"concept":"https://www.wikidata.org/entity/Q930164","meaning":"", "ref":"luvlex","pos":"NN","transcription":"kukupalatar", "transliteration":"ku-ku-pa-la-a-tar","translation":"conspiracy","script":"𒆪𒆪𒉺𒆷𒀀𒋻"},
{"recid":12,"concept":"https://www.wikidata.org/entity/Q3328976","meaning":"", "ref":"luvlex","pos":"NN","transcription":"kula", "transliteration":"ku-u-la","translation":"link","script":"𒆪𒌋𒆷"},
{"recid":13,"concept":"https://www.wikidata.org/entity/Q160108","meaning":"", "ref":"luvlex","pos":"NN","transcription":"lalpi", "transliteration":"la-al-pi2","translation":"eyelash","script":"𒆷𒀠𒁉"},
{"recid":14,"concept":"","meaning":"", "ref":"luvlex","pos":"PREP","transcription":"szarra", "transliteration":"szar-ra","translation":"on","script":"𒊬𒊏"},
{"recid":15,"concept":"","meaning":"", "ref":"luvlex","pos":"PREP","transcription":"szarri", "transliteration":"szar-ri","translation":"above","script":"𒊬𒊑"},
{"recid":16,"concept":"https://www.wikidata.org/entity/Q515","meaning":"", "ref":"luvlex","pos":"DET","transcription":"URU", "transliteration":"URU","translation":"city","script":"𒌷"},
{"recid":17,"concept":"https://www.wikidata.org/entity/Q557517","meaning":"", "ref":"luvlex","pos":"NE","transcription":"URUAankuwa", "transliteration":"URU-A-an-ku-wa","translation":"Ankuwa","script":"𒌷𒀀𒀭𒆪𒉿"},
{"recid":18,"concept":"","meaning":"", "ref":"luvlex","pos":"NE","transcription":"URUAnzura", "transliteration":"URU-An-zu-ra","translation":"Anzura","script":"𒌷𒀭𒍪𒊏"},
{"recid":19,"concept":"","meaning":"", "ref":"luvlex","pos":"NE","transcription":"URUGurszamaszsza", "transliteration":"URU-Gur-sza-masz-sza","translation":"Gursha Masha","script":"𒌷𒄥𒊭𒈦𒊭"},
{"recid":20,"concept":"https://www.wikidata.org/entity/Q181007","meaning":"", "ref":"luvlex","pos":"NE","transcription":"URUHaddusza", "transliteration":"URU-Ha-ad-du-sza","translation":"Hattusa","script":"𒌷𒄩𒀜𒁺𒊭"},
{"recid":21,"concept":"","meaning":"", "ref":"luvlex","pos":"NE","transcription":"URUImralla", "transliteration":"URU-Im-ra-al-la","translation":"Imrala","script":"𒌷𒅎𒊏𒀠𒆷"},
{"recid":22,"concept":"","meaning":"", "ref":"luvlex","pos":"NE","transcription":"URUKaplauiya", "transliteration":"URU-Kap-la-u2-i-ya","translation":"Kaplawiya","script":"𒌷𒆏𒆷𒌑𒄿𒉿"},
{"recid":23,"concept":"","meaning":"", "ref":"luvlex","pos":"NE","transcription":"URUSzapiidduwa", "transliteration":"URU-Sza-pi2-id-du-wa","translation":"Shapiduwa","script":"𒌷𒊭𒁉𒀉𒁺𒉿"},
{"recid":24,"concept":"","meaning":"", "ref":"luvlex","pos":"NE","transcription":"URUTakuszna", "transliteration":"URU-Ta-ku-usz-na","translation":"Takushna","script":"𒌷𒋫𒆪𒍑𒈾"},
{"recid":25,"concept":"","meaning":"", "ref":"luvlex","pos":"NE","transcription":"URUTauriszizza", "transliteration":"URU-Ta-u2-ri-szi-iz-za","translation":"Taurisa","script":"𒌷𒋫𒌑𒊑𒅆𒄑𒍝"},
{"recid":26,"concept":"","meaning":"", "ref":"luvlex","pos":"NE","transcription":"URUZippalanda", "transliteration":"URU-Zi-ip-pa-la-an-da","translation":"Ziplanda","script":"𒌷𒍣𒅁𒉺𒆷𒀭𒁕"}]
}