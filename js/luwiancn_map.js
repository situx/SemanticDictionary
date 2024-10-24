var luwiancn_map={
 "name": "luwiancnmap",
 "header":"luwiancn Dictionary",
"show":{
"toolbar":true,
"footer":true
},
"columns":[
{"field":"script","caption":"Script","sortable":true,"resizable":true,"size":"20%","style":"font-family:luwiancn;font-size:18px;"},
{"field":"transliteration","caption":"Transliteration","sortable":true,"resizable":true,"size":"20%"},
{"field":"charName","caption":"SignName","sortable":true,"resizable":true,"size":"20%"},
{"field":"meaning","caption":"Meaning","sortable":true,"resizable":true,"size":"20%",
    render:function(record){
        if(record.concept!=undefined && record.concept!=""){
            return "<a href=\""+record.concept+"\" target=\"_blank\">"+record.meaning+"</a>"
        }else{
            return record.meaning;
        }
}},
{"field":"got","caption":"Gottstein","sortable":true,"resizable":true,"size":"20%"},
{"field":"MesZL","caption":"MesZL","sortable":true,"resizable":true,"size":"20%"},
{"field":"aBZL","caption":"aBZL","sortable":true,"resizable":true,"size":"20%"},
{"field":"HethZL","caption":"HethZL","sortable":true,"resizable":true,"size":"20%"},
{"field":"LHA","caption":"LHA","sortable":true,"resizable":true,"size":"20%"}
]
,"records":[
{ "recid":0, "got":"a3", "charName":"A", "MesZL":"839","aBZL":"470","LHA":"579","HethZL":"364; 365","concept":"", "meaning":"", "transliteration":"A","script":"𒀀"},
{ "recid":1, "got":"a1b1c1d1", "charName":"AN", "MesZL":"10","aBZL":"9","LHA":"13","HethZL":"8","transliteration":"An","script":"𒀭"},
{ "recid":2, "got":"a4b2c2", "charName":"AR (IGI.RI)", "MesZL":"726","aBZL":"234","LHA":"451","HethZL":"289","concept":"", "meaning":"", "transliteration":"Ar","script":"𒅈"},
{ "recid":3, "got":"a1b1c1d1", "charName":"AN", "MesZL":"10","aBZL":"9","LHA":"13","HethZL":"8","concept":"https://www.wikidata.org/entity/Q178885", "meaning":"god", "transliteration":"D","script":"𒀭"},
{ "recid":4, "got":"a1b2", "charName":"GIŠ (GEŠ)", "MesZL":"469","aBZL":"160","LHA":"296","HethZL":"178","concept":"", "meaning":"", "transliteration":"GISZ","script":"𒄑"},
{ "recid":5, "got":"a2b4c2", "charName":"GUL (SÚN)", "MesZL":"682","aBZL":"343","LHA":"429","HethZL":"271","concept":"", "meaning":"", "transliteration":"Gul","script":"𒄢"},
{ "recid":6, "got":"a2b2", "charName":"GUR", "MesZL":"180","aBZL":"92","LHA":"111","HethZL":"185","concept":"", "meaning":"", "transliteration":"Gur","script":"𒄥"},
{ "recid":7, "got":"a4c2", "charName":"ḪA (KU6)", "MesZL":"856","aBZL":"475","LHA":"589","HethZL":"367","concept":"", "meaning":"", "transliteration":"Ha","script":"𒄩"},
{ "recid":8, "got":"a8b2c3d2", "charName":"IM", "MesZL":"641","aBZL":"297","LHA":"399","HethZL":"337","concept":"", "meaning":"", "transliteration":"Im","script":"𒅎"},
{ "recid":9, "got":"b1c3d2", "charName":"ḪI×BAD", "MesZL":"640","aBZL":"279","LHA":"406v1","HethZL":"355","concept":"", "meaning":"", "transliteration":"Kam","script":"𒄰"},
{ "recid":10, "got":"a2b8c1", "charName":"KAB", "MesZL":"148","aBZL":"226","LHA":"88","HethZL":"49","concept":"", "meaning":"", "transliteration":"Kap","script":"𒆏"},
{ "recid":11, "got":"a2b4c1d1", "charName":"ŠA", "MesZL":"566","aBZL":"203","LHA":"353","HethZL":"158","concept":"", "meaning":"", "transliteration":"Sza","script":"𒊭"},
{ "recid":12, "got":"a2b2c1d1", "charName":"TA", "MesZL":"248","aBZL":"123","LHA":"139","HethZL":"160","concept":"", "meaning":"", "transliteration":"Ta","script":"𒋫"},
{ "recid":13, "got":"a3b3", "charName":"URU (IRI)", "MesZL":"71","aBZL":"181","LHA":"38","HethZL":"229","concept":"https://www.wikidata.org/entity/Q515", "meaning":"city", "transliteration":"URU","script":"𒌷"},
{ "recid":14, "got":"a2b1c10", "charName":"ZI", "MesZL":"140","aBZL":"41","LHA":"84","HethZL":"33","concept":"", "meaning":"", "transliteration":"Zi","script":"𒍣"},
{ "recid":15, "got":"a3", "charName":"A", "MesZL":"839","aBZL":"470","LHA":"579","HethZL":"364; 365","concept":"", "meaning":"", "transliteration":"a","script":"𒀀"},
{ "recid":16, "got":"a3b4c1d1", "charName":"AD", "MesZL":"258","aBZL":"132","LHA":"145","HethZL":"105","concept":"", "meaning":"", "transliteration":"ad","script":"𒀜"},
{ "recid":17, "got":"a1b1c1d1", "charName":"AN", "MesZL":"10","aBZL":"9","LHA":"13","HethZL":"8","transliteration":"an","script":"𒀭"},
{ "recid":18, "got":"a2b8c1", "charName":"DA", "MesZL":"561","aBZL":"229","LHA":"335","HethZL":"214","concept":"", "meaning":"", "transliteration":"da","script":"𒁕"},
{ "recid":19, "got":"a1b2c2", "charName":"DU", "MesZL":"350","aBZL":"64, 197","LHA":"206","HethZL":"128","concept":"", "meaning":"", "transliteration":"du","script":"𒁺"},
{ "recid":20, "got":"b5", "charName":"I", "MesZL":"252","aBZL":"192","LHA":"142","HethZL":"217","concept":"", "meaning":"", "transliteration":"i","script":"𒄿"},
{ "recid":21, "got":"a2b8c7", "charName":"A2", "MesZL":"560","aBZL":"230","LHA":"334","HethZL":"215","concept":"", "meaning":"", "transliteration":"id","script":"𒀉"},
{ "recid":22, "got":"a6b2", "charName":"IB", "MesZL":"807","aBZL":"394","LHA":"535","HethZL":"44","concept":"", "meaning":"", "transliteration":"ip","script":"𒅁"},
{ "recid":23, "got":"a2b4c1", "charName":"IŠ", "MesZL":"357","aBZL":"162","LHA":"212","HethZL":"151","concept":"", "meaning":"", "transliteration":"isz","script":"𒅖"},
{ "recid":24, "got":"a1b2", "charName":"GIŠ (GEŠ)", "MesZL":"469","aBZL":"160","LHA":"296","HethZL":"178","concept":"", "meaning":"", "transliteration":"iz","script":"𒄑"},
{ "recid":25, "got":"a2b3", "charName":"KU (DÚR, TUKUL, TUŠ)", "MesZL":"808","aBZL":"415","LHA":"536","HethZL":"206","concept":"", "meaning":"", "transliteration":"ku","script":"𒆪"},
{ "recid":26, "got":"a5b7", "charName":"LA", "MesZL":"89","aBZL":"177","LHA":"55","HethZL":"95","concept":"", "meaning":"", "transliteration":"la","script":"𒆷"},
{ "recid":27, "got":"a2b4c11d1", "charName":"LI", "MesZL":"85","aBZL":"381","LHA":"59","HethZL":"343","concept":"", "meaning":"", "transliteration":"li","script":"𒇷"},
{ "recid":28, "got":"a2b3", "charName":"MA", "MesZL":"552","aBZL":"166","LHA":"342","HethZL":"208","concept":"", "meaning":"", "transliteration":"ma","script":"𒈠"},
{ "recid":29, "got":"a2b3", "charName":"MAR", "MesZL":"483","aBZL":"144","LHA":"307","HethZL":"191","concept":"", "meaning":"", "transliteration":"mar","script":"𒈥"},
{ "recid":30, "got":"a1b1", "charName":"MAŠ", "MesZL":"120","aBZL":"29","LHA":"74","HethZL":"20","concept":"", "meaning":"", "transliteration":"masz","script":"𒈦"},
{ "recid":31, "got":"b4c3d2", "charName":"NA", "MesZL":"110","aBZL":"24","LHA":"70","HethZL":"15","concept":"", "meaning":"", "transliteration":"na","script":"𒈾"},
{ "recid":32, "got":"a2c1d1", "charName":"NI", "MesZL":"380","aBZL":"261","LHA":"231","HethZL":"72","concept":"", "meaning":"", "transliteration":"ni","script":"𒉌"},
{ "recid":33, "got":"a1b1d1", "charName":"NU", "MesZL":"112","aBZL":"19","LHA":"75","HethZL":"11","concept":"", "meaning":"", "transliteration":"nu","script":"𒉡"},
{ "recid":34, "got":"a1b2", "charName":"PA", "MesZL":"464","aBZL":"143","LHA":"295","HethZL":"174","concept":"", "meaning":"", "transliteration":"pa","script":"𒉺"},
{ "recid":35, "got":"a4b2c1d1", "charName":"BI", "MesZL":"358","aBZL":"79","LHA":"214","HethZL":"153","concept":"", "meaning":"", "transliteration":"pi2","script":"𒁉"},
{ "recid":36, "got":"a4b5", "charName":"RA", "MesZL":"511","aBZL":"192","LHA":"328","HethZL":"233","concept":"", "meaning":"", "transliteration":"ra","script":"𒊏"},
{ "recid":37, "got":"a3b1c1", "charName":"RI", "MesZL":"142","aBZL":"39","LHA":"86","HethZL":"32","concept":"", "meaning":"", "transliteration":"ri","script":"𒊑"},
{ "recid":38, "got":"b2c2d2", "charName":"RU", "MesZL":"111","aBZL":"60","LHA":"68","HethZL":"43","concept":"", "meaning":"", "transliteration":"ru","script":"𒊒"},
{ "recid":39, "got":"a2b4c1d1", "charName":"ŠA", "MesZL":"566","aBZL":"203","LHA":"353","HethZL":"158","concept":"", "meaning":"", "transliteration":"sza","script":"𒊭"},
{ "recid":40, "got":"a2b2c9", "charName":"SAR", "MesZL":"541","aBZL":"385","LHA":"331e, 152iv","HethZL":"353","concept":"", "meaning":"", "transliteration":"szar","script":"𒊬"},
{ "recid":41, "got":"c10", "charName":"ŠE", "MesZL":"579","aBZL":"378","LHA":"367","HethZL":"338","concept":"", "meaning":"", "transliteration":"sze","script":"𒊺"},
{ "recid":42, "got":"a1b1c1", "charName":"IGI (ŠI, LIM)", "MesZL":"724","aBZL":"233","LHA":"449","HethZL":"288","concept":"", "meaning":"", "transliteration":"szi","script":"𒅆"},
{ "recid":43, "got":"a2b2c1d1", "charName":"TA", "MesZL":"248","aBZL":"123","LHA":"139","HethZL":"160","concept":"", "meaning":"", "transliteration":"ta","script":"𒋫"},
{ "recid":44, "got":"a1c2", "charName":"TAR", "MesZL":"9","aBZL":"231","LHA":"12","HethZL":"7","concept":"", "meaning":"", "transliteration":"tar","script":"𒋻"},
{ "recid":45, "got":"c1", "charName":"U", "MesZL":"661","aBZL":"337","LHA":"411","HethZL":"261","concept":"", "meaning":"", "transliteration":"u","script":"𒌋"},
{ "recid":46, "got":"a4b2", "charName":"Ú", "MesZL":"490","aBZL":"146","LHA":"318","HethZL":"195","concept":"", "meaning":"", "transliteration":"u2","script":"𒌑"},
{ "recid":47, "got":"a1c2d2", "charName":"UB", "MesZL":"504","aBZL":"288","LHA":"306","HethZL":"152","concept":"", "meaning":"", "transliteration":"up","script":"𒌒"},
{ "recid":48, "got":"a3b2c1", "charName":"UŠ (NITA)", "MesZL":"381","aBZL":"68","LHA":"211","HethZL":"132","concept":"", "meaning":"", "transliteration":"usz","script":"𒍑"},
{ "recid":49, "got":"a1b1c2", "charName":"PI", "MesZL":"598","aBZL":"370","LHA":"383","HethZL":"317","concept":"", "meaning":"", "transliteration":"wa","script":"𒉿"},
{ "recid":50, "got":"a1b1c2", "charName":"PI", "MesZL":"598","aBZL":"370","LHA":"383","HethZL":"317","concept":"", "meaning":"", "transliteration":"ya","script":"𒉿"},
{ "recid":51, "got":"a4", "charName":"ZA", "MesZL":"851","aBZL":"474","LHA":"586","HethZL":"366","concept":"", "meaning":"", "transliteration":"za","script":"𒍝"},
{ "recid":52, "got":"a5b1c1d1", "charName":"ZU", "MesZL":"15","aBZL":"304","LHA":"6","HethZL":"209","concept":"", "meaning":"", "transliteration":"zu","script":"𒍪"}]}