var elamite={
 "name": "elamite",
 "header":"elamite Dictionary",
"selectType":"cell",
"show":{
"toolbar":true,
"footer":true
},
"columns":[
{"field":"script","caption":"Script","selectable":true,"sortable":true,"resizable":true,"size":"20%","style":"font-family:elamite;font-size:18px;"},
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
{"field":"pos","caption":"POSTag","selectable":true,"sortable":true,"resizable":true,"size":"20%",   render:function(record){
        result=""
        if(record.pos!=undefined && record.pos!=""){
            result+="<dialog id=\"el_"+record.transliteration+"_"+record.pos+"_dialog\"/><a href=\"javascript:openDialog('el_"+record.transliteration+"_"+record.pos+"_dialog','"+record.recid+"','"+record.transliteration+"','"+record.pos+"')\" target=\"_blank\">"
            result+=record.pos
            result+="</a>"
        }else{
            result+=record.pos
        }
        return result
}},
{"field":"ref","caption":"Reference","selectable":true,"sortable":true,"resizable":true,"size":"20%"}
]
,"records":[
{"recid":0,"concept":"","meaning":"", "ref":"gloelam","pos":"CONJ","transcription":"ak", "transliteration":"a-ak","translation":"and","script":"𒀀𒀝"},
{"recid":1,"concept":"https://www.wikidata.org/entity/Q1096","meaning":"", "ref":"gloelam","pos":"NN","transcription":"anaku", "transliteration":"a-na-ku","translation":"tin","script":"𒀀𒈾𒆪"},
{"recid":2,"concept":"","meaning":"", "ref":"stolel","pos":"RELPRO","transcription":"appa", "transliteration":"ap-pa","translation":"which","script":"𒀊𒉺"},
{"recid":3,"concept":"","meaning":"", "ref":"gloelam","pos":"NE","transcription":"akszeirgaminszusz", "transliteration":"ak-sze-ir-gam-in-szu-usz","translation":"Aksher Inshush","script":"𒀝𒊺𒅕𒃵𒅔𒋗𒍑"},
{"recid":4,"concept":"https://www.wikidata.org/entity/Q17162845","meaning":"", "ref":"elgi","pos":"RELPRO","transcription":"akka", "transliteration":"ak-ka4","translation":"who","script":"𒀝𒋡"},
{"recid":5,"concept":"","meaning":"", "ref":"gloelam","pos":"NE","transcription":"akkamen", "transliteration":"ak-ka4-me-en","translation":"Akkamen","script":"𒀝𒋡𒈨𒂗"},
{"recid":6,"concept":"https://www.wikidata.org/wiki/Q190","meaning":"", "ref":"gloelam","pos":"DET","transcription":"DINGIR", "transliteration":"DINGIR","translation":"god","script":"𒀭"},
{"recid":7,"concept":"https://www.wikidata.org/wiki/Q190","meaning":"", "ref":"gloelam","pos":"DET","transcription":"URU", "transliteration":"URU","translation":"city","script":"𒀭"},
{"recid":8,"concept":"https://www.wikidata.org/wiki/Q190","meaning":"", "ref":"gloelam","pos":"DET","transcription":"d", "transliteration":"d","translation":"god","script":"𒀭"},
{"recid":9,"concept":"","meaning":"", "ref":"gloelam","pos":"NE","transcription":"dmasztiaksir", "transliteration":"d-masz-ti-ak-sir","translation":"Mashtiaksir","script":"𒀭𒈦𒋾𒀝𒋤"},
{"recid":10,"concept":"","meaning":"", "ref":"gloelam","pos":"PRO","transcription":"annu", "transliteration":"an-nu","translation":"this","script":"𒀭𒉡"},
{"recid":11,"concept":"https://www.wikidata.org/entity/Q390973","meaning":"", "ref":"gloelam","pos":"NE","transcription":"dszala", "transliteration":"d-sza-la","translation":"Shala","script":"𒀭𒊭𒆷"},
{"recid":12,"concept":"https://www.wikidata.org/entity/Q179575","meaning":"", "ref":"elgi","pos":"NE","transcription":"duramasda", "transliteration":"d-u-ra-mas-da","translation":"Ahura Mazda","script":"𒀭𒌋𒊏𒈦𒁕"},
{"recid":13,"concept":"https://www.wikidata.org/entity/Q569107","meaning":"", "ref":"gloelam","pos":"NE","transcription":"anzan", "transliteration":"an-za-an","translation":"Anshan","script":"𒀭𒍝𒀭"},
{"recid":14,"concept":"https://www.wikidata.org/entity/Q178885","meaning":"", "ref":"gloelam","pos":"NN","transcription":"nap", "transliteration":"nap","translation":"god","script":"𒀮"},
{"recid":15,"concept":"","meaning":"", "ref":"gloelam","pos":"NE","transcription":"aszbazana", "transliteration":"asz-ba-za-na","translation":"Ashbazana","script":"𒀸𒁀𒍝𒈾"},
{"recid":16,"concept":"https://www.wikidata.org/entity/Q15807","meaning":"", "ref":"gloelam","pos":"NN","transcription":"bat", "transliteration":"ba-at","translation":"foot","script":"𒁀𒀜"},
{"recid":17,"concept":"https://www.wikidata.org/entity/Q18498","meaning":"", "ref":"gloelam","pos":"NN","transcription":"barbarrum", "transliteration":"ba-ar-ba-ar-ru-um","translation":"wolf","script":"𒁀𒅈𒁀𒅈𒊒𒌝"},
{"recid":18,"concept":"","meaning":"", "ref":"gloelam","pos":"NE","transcription":"bakabuksza", "transliteration":"ba-ka-buk-sza","translation":"Bakabuksza","script":"𒁀𒅗𒈮𒊭"},
{"recid":19,"concept":"","meaning":"", "ref":"gloelam","pos":"NE","transcription":"bakapikna", "transliteration":"ba-ka-pik-na","translation":"Bakapikna","script":"𒁀𒅗𒋝𒈾"},
{"recid":20,"concept":"https://www.wikidata.org/entity/Q3736439","meaning":"", "ref":"gloelam","pos":"NN","transcription":"basbas", "transliteration":"ba-as-ba-as","translation":"duck","script":"𒁀𒊍𒁀𒊍"},
{"recid":21,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_2922","meaning":"", "ref":"gloelam","pos":"VV","transcription":"be", "transliteration":"be","translation":"create","script":"𒁁"},
{"recid":22,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_3019","meaning":"", "ref":"gloelam","pos":"VV","transcription":"pupina", "transliteration":"pu-pi-na","translation":"fill","script":"𒁍𒉿𒈾"},
{"recid":23,"concept":"","meaning":"", "ref":"gloelam","pos":"NE","transcription":"dabat", "transliteration":"da-ba-at","translation":"Dabat","script":"𒁕𒁀𒀜"},
{"recid":24,"concept":"https://www.wikidata.org/entity/Q133346","meaning":"", "ref":"gloelam","pos":"NN","transcription":"dalari", "transliteration":"da-la-ri","translation":"border","script":"𒁕𒆷𒊑"},
{"recid":25,"concept":"https://www.wikidata.org/wiki/Q177053","meaning":"", "ref":"gloelam","pos":"DET","transcription":"DISZ", "transliteration":"DISZ","translation":"mister","script":"𒁹"},
{"recid":26,"concept":"https://www.wikidata.org/wiki/Q129165","meaning":"", "ref":"gloelam","pos":"NE","transcription":"DISZikszeiriszsza", "transliteration":"DISZ-ik-sze-ir-isz-sza2","translation":"Xerxes","script":"𒁹𒅅𒊺𒅕𒅖𒃻"},
{"recid":27,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_2756","meaning":"", "ref":"gloelam","pos":"VV","transcription":"du", "transliteration":"du","translation":"receive","script":"𒁺"},
{"recid":28,"concept":"https://www.wikidata.org/entity/Q32489","meaning":"", "ref":"gloelam","pos":"NN","transcription":"duszumya", "transliteration":"du-szu-um-ya","translation":"knife","script":"𒁺𒋗𒌝𒉿"},
{"recid":29,"concept":"","meaning":"", "ref":"gloelam","pos":"VV","transcription":"dubba", "transliteration":"du-ub-ba","translation":"trample","script":"𒁺𒌒𒁀"},
{"recid":30,"concept":"https://www.wikidata.org/entity/Q170984","meaning":"", "ref":"gloelam","pos":"NN","transcription":"men", "transliteration":"men","translation":"crown","script":"𒃞"},
{"recid":31,"concept":"","meaning":"", "ref":"gloelam","pos":"DET","transcription":"GISZ", "transliteration":"GISZ","translation":"Non-metallic object","script":"𒄑"},
{"recid":32,"concept":"","meaning":"", "ref":"gloelam","pos":"ADV","transcription":"am", "transliteration":"am","translation":"now","script":"𒄠"},
{"recid":33,"concept":"https://www.wikidata.org/wiki/Q8502","meaning":"", "ref":"gloelam","pos":"NN","transcription":"amni", "transliteration":"am-ni","translation":"mountain","script":"𒄠𒉌"},
{"recid":34,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_1161","meaning":"", "ref":"elgi","pos":"VV","transcription":"kazza", "transliteration":"kaz-za","translation":"forge","script":"𒄤𒍝"},
{"recid":35,"concept":"https://www.wikidata.org/entity/Q641406","meaning":"", "ref":"gloelam","pos":"NN","transcription":"habadana", "transliteration":"ha-ba-da-na","translation":"terrace","script":"𒄩𒁀𒁕𒈾"},
{"recid":36,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_1214","meaning":"", "ref":"elgi","pos":"VV","transcription":"hapu", "transliteration":"ha-pu","translation":"listen","script":"𒄩𒁍"},
{"recid":37,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_2695","meaning":"", "ref":"elgi","pos":"VV","transcription":"hali", "transliteration":"ha-li","translation":"decorate","script":"𒄩𒇷"},
{"recid":38,"concept":"https://www.wikidata.org/entity/Q481609","meaning":"", "ref":"gloelam","pos":"NN","transcription":"haluma", "transliteration":"ha-lu-ma","translation":"damage","script":"𒄩𒇻𒈠"},
{"recid":39,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_1765","meaning":"", "ref":"gloelam","pos":"VV","transcription":"hani", "transliteration":"ha-ni","translation":"love","script":"𒄩𒉌"},
{"recid":40,"concept":"https://www.wikidata.org/entity/Q4","meaning":"", "ref":"gloelam","pos":"NN","transcription":"halpi", "transliteration":"hal-pi","translation":"death","script":"𒄬𒉿"},
{"recid":41,"concept":"https://www.wikidata.org/entity/Q128904","meaning":"", "ref":"gloelam","pos":"NN","transcription":"haltamti", "transliteration":"hal-tam-ti","translation":"Elamite","script":"𒄬𒌓𒋾"},
{"recid":42,"concept":"","meaning":"", "ref":"gloelam","pos":"PREP","transcription":"hidaka", "transliteration":"hi-da-ka","translation":"along with","script":"𒄭𒁕𒅗"},
{"recid":43,"concept":"https://www.wikidata.org/entity/Q1347367","meaning":"", "ref":"gloelam","pos":"NN","transcription":"harmasztam", "transliteration":"har-masz-tam","translation":"ability","script":"𒄯𒈦𒌓"},
{"recid":44,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_3167","meaning":"", "ref":"gloelam","pos":"VV","transcription":"huma", "transliteration":"hu-ma","translation":"take","script":"𒄷𒈠"},
{"recid":45,"concept":"https://www.wikidata.org/entity/Q10884","meaning":"", "ref":"elgi","pos":"NN","transcription":"husa", "transliteration":"hu-sa","translation":"tree","script":"𒄷𒊓"},
{"recid":46,"concept":"https://www.wikidata.org/entity/Q4421","meaning":"", "ref":"elgi","pos":"NN","transcription":"husame", "transliteration":"hu-sa-me","translation":"forest","script":"𒄷𒊓𒈨"},
{"recid":47,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_3450","meaning":"", "ref":"gloelam","pos":"VV","transcription":"hutla", "transliteration":"hu-ut-la","translation":"send","script":"𒄷𒌓𒆷"},
{"recid":48,"concept":"https://www.wikidata.org/entity/Q36794","meaning":"", "ref":"gloelam","pos":"NN","transcription":"ikku", "transliteration":"ik-ku","translation":"door","script":"𒅅𒆪"},
{"recid":49,"concept":"https://www.wikidata.org/entity/Q43016","meaning":"", "ref":"elgi","pos":"CARD","transcription":"lim", "transliteration":"lim","translation":"1000","script":"𒅆"},
{"recid":50,"concept":"","meaning":"", "ref":"gloelam","pos":"PREP","transcription":"irpi", "transliteration":"ir-pi","translation":"previous","script":"𒅕𒉿"},
{"recid":51,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_3894","meaning":"", "ref":"elgi","pos":"VV","transcription":"kela", "transliteration":"ke-la","translation":"command","script":"𒆠𒆷"},
{"recid":52,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_1899","meaning":"", "ref":"gloelam","pos":"VV","transcription":"kiti", "transliteration":"ki-ti","translation":"keep","script":"𒆠𒋾"},
{"recid":53,"concept":"https://www.wikidata.org/entity/Q219423","meaning":"", "ref":"gloelam","pos":"NN","transcription":"kupumya", "transliteration":"ku-pu-um-ya","translation":"mural","script":"𒆪𒁍𒌝𒉿"},
{"recid":54,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_2214","meaning":"", "ref":"elgi","pos":"VV","transcription":"kuszi", "transliteration":"ku-szi","translation":"build","script":"𒆪𒅆"},
{"recid":55,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_43","meaning":"", "ref":"curelam","pos":"VV","transcription":"kuki", "transliteration":"ku-ki","translation":"guard","script":"𒆪𒆠"},
{"recid":56,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_1595","meaning":"", "ref":"curelam","pos":"VV","transcription":"kupa", "transliteration":"ku-pa","translation":"raise","script":"𒆪𒉺"},
{"recid":57,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_3185","meaning":"", "ref":"elgi","pos":"VV","transcription":"kuti", "transliteration":"ku-ti","translation":"carry","script":"𒆪𒋾"},
{"recid":58,"concept":"","meaning":"", "ref":"gloelam","pos":"ADJ","transcription":"kuttina", "transliteration":"ku-ut-ti-na","translation":"exact","script":"𒆪𒌓𒋾𒈾"},
{"recid":59,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_208","meaning":"", "ref":"elgi","pos":"VV","transcription":"kulla", "transliteration":"kul-la","translation":"pray","script":"𒆰𒆷"},
{"recid":60,"concept":"https://www.wikidata.org/entity/Q327055","meaning":"", "ref":"gloelam","pos":"NN","transcription":"kurkurrumbe", "transliteration":"kur-kur-ru-um-be","translation":"worker","script":"𒆳𒆳𒊒𒌝𒁁"},
{"recid":61,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_1857","meaning":"", "ref":"elgi","pos":"VV","transcription":"li", "transliteration":"li","translation":"give","script":"𒇷"},
{"recid":62,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_1409","meaning":"", "ref":"gloelam","pos":"VV","transcription":"lima", "transliteration":"li-ma","translation":"burn","script":"𒇷𒈠"},
{"recid":63,"concept":"https://www.wikidata.org/entity/Q26382","meaning":"", "ref":"gloelam","pos":"NN","transcription":"limitum", "transliteration":"li-mi-tum4","translation":"edge","script":"𒇷𒈪𒉏"},
{"recid":64,"concept":"https://www.wikidata.org/entity/Q54128","meaning":"", "ref":"elgi","pos":"NN","transcription":"lipa", "transliteration":"li-pa","translation":"servant","script":"𒇷𒉺"},
{"recid":65,"concept":"https://www.wikidata.org/entity/Q1099","meaning":"", "ref":"gloelam","pos":"NN","transcription":"lulu", "transliteration":"lu-lu","translation":"antimony","script":"𒇻𒇻"},
{"recid":66,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_1188","meaning":"", "ref":"gloelam","pos":"VV","transcription":"luru", "transliteration":"lu-ru","translation":"isolate","script":"𒇻𒊒"},
{"recid":67,"concept":"https://www.wikidata.org/entity/Q8441","meaning":"", "ref":"gloelam","pos":"NN","transcription":"ruh", "transliteration":"ruh","translation":"man","script":"𒈛"},
{"recid":68,"concept":"https://www.wikidata.org/entity/Q44619","meaning":"", "ref":"gloelam","pos":"NN","transcription":"madabe", "transliteration":"ma-da-be","translation":"fear","script":"𒈠𒁕𒁁"},
{"recid":69,"concept":"https://www.wikidata.org/entity/Q344","meaning":"", "ref":"gloelam","pos":"NN","transcription":"maszsza", "transliteration":"masz-sza","translation":"future","script":"𒈦𒊭"},
{"recid":70,"concept":"https://www.wikidata.org/entity/Q42586","meaning":"", "ref":"gloelam","pos":"NN","transcription":"maszkarni", "transliteration":"masz-kar-ni","translation":"elbow","script":"𒈦𒋼𒀀𒉌"},
{"recid":71,"concept":"https://www.wikidata.org/entity/Q37413","meaning":"", "ref":"elgi","pos":"CARD","transcription":"me", "transliteration":"me","translation":"100","script":"𒈨"},
{"recid":72,"concept":"","meaning":"", "ref":"gloelam","pos":"DET","transcription":"MESZ", "transliteration":"MESZ","translation":"plural marker","script":"𒈨𒌍"},
{"recid":73,"concept":"https://www.wikidata.org/entity/Q1742093","meaning":"", "ref":"gloelam","pos":"NN","transcription":"murakum", "transliteration":"mu-ra-kum","translation":"remuneration","script":"𒈬𒊏𒄣"},
{"recid":74,"concept":"https://www.wikidata.org/entity/Q2","meaning":"", "ref":"gloelam","pos":"NN","transcription":"murun", "transliteration":"mu-ru-un","translation":"earth","script":"𒈬𒊒𒌦"},
{"recid":75,"concept":"","meaning":"", "ref":"gloelam","logogram":"true","pos":"ADJ","transcription":"BIL", "transliteration":"BIL2","translation":"new","script":"𒉋"},
{"recid":76,"concept":"https://www.wikidata.org/entity/Q11634","meaning":"", "ref":"gloelam","pos":"NN","transcription":"zalman", "transliteration":"zal-man","translation":"sculpture","script":"𒉌𒌋𒌋"},
{"recid":77,"concept":"https://www.wikidata.org/entity/Q22731","meaning":"", "ref":"gloelam","logogram":"true","pos":"NN","transcription":"NA", "transliteration":"NA4","translation":"stone","script":"𒉌𒌓"},
{"recid":78,"concept":"https://www.wikidata.org/entity/Q1165897","meaning":"", "ref":"elgi","pos":"PPRO","transcription":"nu", "transliteration":"nu","translation":"you","script":"𒉡"},
{"recid":79,"concept":"https://www.wikidata.org/entity/Q7478101","meaning":"", "ref":"elgi","pos":"PPRO","transcription":"nuku", "transliteration":"nuku","translation":"we","script":"𒉡𒆪"},
{"recid":80,"concept":"https://www.wikidata.org/entity/Q427923","meaning":"", "ref":"elgi","pos":"CARD","transcription":"pi", "transliteration":"pi","translation":"10000","script":"𒉿"},
{"recid":81,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_2773","meaning":"", "ref":"elgi","pos":"VV","transcription":"peli", "transliteration":"pe-li","translation":"found","script":"𒉿𒇷"},
{"recid":82,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_2773","meaning":"10000-give", "ref":"elgi","pos":"VV","transcription":"pili", "transliteration":"pi-li","translation":"restore","script":"𒉿𒇷"},
{"recid":83,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_745","meaning":"", "ref":"elgi","pos":"VV","transcription":"pera", "transliteration":"pe-ra","translation":"read","script":"𒉿𒊏"},
{"recid":84,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_3538","meaning":"", "ref":"elgi","pos":"VV","transcription":"tallu", "transliteration":"tal-lu","translation":"write","script":"𒊑𒇻"},
{"recid":85,"concept":"","meaning":"", "ref":"gloelam","pos":"ADJ","transcription":"risza", "transliteration":"ri-sza","translation":"great","script":"𒊑𒊭"},
{"recid":86,"concept":"https://www.wikidata.org/entity/Q188830","meaning":"", "ref":"gloelam","pos":"NN","transcription":"rutu", "transliteration":"ru-tu","translation":"wife","script":"𒊒𒌅"},
{"recid":87,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_3819","meaning":"", "ref":"gloelam","pos":"VV","transcription":"sari", "transliteration":"sa-ri","translation":"destroy","script":"𒊓𒊑"},
{"recid":88,"concept":"","meaning":"", "ref":"gloelam","pos":"ADJ","transcription":"szada", "transliteration":"sza-da","translation":"happy","script":"𒊭𒁕"},
{"recid":89,"concept":"https://www.wikidata.org/entity/Q35059","meaning":"", "ref":"gloelam","pos":"NN","transcription":"szadanika", "transliteration":"sza-da-ni-ka","translation":"width","script":"𒊭𒁕𒉌𒅗"},
{"recid":90,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_1109","meaning":"", "ref":"elgi","pos":"VV","transcription":"szasa", "transliteration":"sza-sa","translation":"drown","script":"𒊭𒊓"},
{"recid":91,"concept":"https://www.wikidata.org/entity/Q18545","meaning":"", "ref":"gloelam","pos":"NN","transcription":"szebe", "transliteration":"sze-be","translation":"ball","script":"𒊺𒁁"},
{"recid":92,"concept":"https://www.wikidata.org/entity/Q35197","meaning":"", "ref":"gloelam","pos":"NN","transcription":"szuha", "transliteration":"szu-ha","translation":"mirror","script":"𒋗𒄩"},
{"recid":93,"concept":"https://www.wikidata.org/entity/Q180773","meaning":"", "ref":"gloelam","pos":"NE","transcription":"szuszunka", "transliteration":"szu-szu-un-ka4","translation":"Susa","script":"𒋗𒋗𒌦𒋡"},
{"recid":94,"concept":"","meaning":"", "ref":"gloelam","pos":"ADJ","transcription":"szutur", "transliteration":"szu-tur","translation":"just","script":"𒋗𒌉"},
{"recid":95,"concept":"https://www.wikidata.org/entity/Q16751793","meaning":"", "ref":"gloelam","pos":"ADJ","transcription":"siri", "transliteration":"si-ri","translation":"true","script":"𒋛𒊑"},
{"recid":96,"concept":"https://www.wikidata.org/entity/Q637703","meaning":"", "ref":"gloelam","pos":"NN","transcription":"siut", "transliteration":"si-ut","translation":"debris","script":"𒋛𒌓"},
{"recid":97,"concept":"https://www.wikidata.org/entity/Q82025","meaning":"", "ref":"gloelam","pos":"NN","transcription":"kaassu", "transliteration":"ka4-as-su","translation":"horn","script":"𒋡𒊍𒋢"},
{"recid":98,"concept":"https://www.wikidata.org/entity/Q25294","meaning":"", "ref":"gloelam","pos":"NN","transcription":"kasite", "transliteration":"ka4-si-te","translation":"hammer","script":"𒋡𒋛𒋼"},
{"recid":99,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_2089","meaning":"", "ref":"gloelam","pos":"VV","transcription":"sudama", "transliteration":"su-da-ma","translation":"inquire","script":"𒋢𒁕𒈠"},
{"recid":100,"concept":"","meaning":"", "ref":"gloelam","pos":"VV","transcription":"sura", "transliteration":"su-ra","translation":"mistreat","script":"𒋢𒊏"},
{"recid":101,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_1464","meaning":"", "ref":"elgi","pos":"VV","transcription":"ta", "transliteration":"ta","translation":"put","script":"𒋫"},
{"recid":102,"concept":"","meaning":"put-you", "ref":"curelam","pos":"VV","transcription":"tanu", "transliteration":"ta-nu","translation":"obey","script":"𒋫𒉡"},
{"recid":103,"concept":"https://www.wikidata.org/entity/Q3","meaning":"", "ref":"elgi","pos":"NN","transcription":"takki", "transliteration":"tak-ki","translation":"life","script":"𒋳𒆠"},
{"recid":104,"concept":"","meaning":"", "ref":"gloelam","pos":"PREP","transcription":"hazza", "transliteration":"haz-za","translation":"from","script":"𒋻𒍝"},
{"recid":105,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_3138","meaning":"", "ref":"gloelam","pos":"VV","transcription":"te", "transliteration":"te","translation":"prefer","script":"𒋼"},
{"recid":106,"concept":"https://www.wikidata.org/entity/Q45190","meaning":"", "ref":"elgi","pos":"NN","transcription":"teumbe", "transliteration":"te-um-be","translation":"cement","script":"𒋼𒌝𒁁"},
{"recid":107,"concept":"https://www.wikidata.org/entity/Q12097","meaning":"", "ref":"gloelam","pos":"NN","transcription":"sunki", "transliteration":"sun-ki","translation":"king","script":"𒌀𒆠"},
{"recid":108,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_898","meaning":"", "ref":"curelam","pos":"VV","transcription":"tuka", "transliteration":"tu-ka","translation":"feed","script":"𒌅𒅗"},
{"recid":109,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_937","meaning":"", "ref":"curelam","pos":"VV","transcription":"tuki", "transliteration":"tu-ki","translation":"choose","script":"𒌅𒆠"},
{"recid":110,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_430","meaning":"", "ref":"elgi","pos":"VV","transcription":"turu", "transliteration":"tu-ru","translation":"say","script":"𒌅𒊒"},
{"recid":111,"concept":"https://www.wikidata.org/entity/Q49404","meaning":"", "ref":"elgi","pos":"PPRO","transcription":"u", "transliteration":"u","translation":"I","script":"𒌋"},
{"recid":112,"concept":"https://www.wikidata.org/entity/Q3947","meaning":"", "ref":"gloelam","pos":"NN","transcription":"ulhi", "transliteration":"ul-hi","translation":"house","script":"𒌌𒄭"},
{"recid":113,"concept":"https://www.wikidata.org/entity/Q34095","meaning":"", "ref":"elgi","pos":"NN","transcription":"zabar", "transliteration":"za-bar","translation":"bronze","script":"𒍝𒁇"},
{"recid":114,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_546","meaning":"", "ref":"gloelam","pos":"VV","transcription":"zati", "transliteration":"za-ti","translation":"wait","script":"𒍝𒋾"},
{"recid":115,"concept":"http://lemon-model.net/lexica/uby/vn/VN_LexicalEntry_3040","meaning":"", "ref":"gloelam","pos":"VV","transcription":"zuzkama", "transliteration":"zu-uz-ka4-ma","translation":"incorporate","script":"𒍪𒊻𒋡𒈠"},
{"recid":116,"concept":"","meaning":"", "ref":"gloelam","pos":"NE","transcription":"zunkiki", "transliteration":"zu-un-ki-ki","translation":"Zunkiki","script":"𒍪𒌦𒆠𒆠"}]
}
