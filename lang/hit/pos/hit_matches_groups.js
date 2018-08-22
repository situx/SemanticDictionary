var hit_matches_groups={"CONJ":[
{
"match":/(-a[nst]|-us|-e|𒍖|𒂊)[^\s]*/gm,
"matchClass":"declination",
"group": 2,
"description":"Case:  Third Person Singular"
},
{
"match":/(-wa|𒉿)[^\s]*/gm,
"matchClass":"wordcase",
"group": 3,
"description":"Case:  Speech"
},
{
"match":/(-kan|𒃷)[^\s]*/gm,
"matchClass":"wordcase",
"group": 4,
"description":"Case:  Locative"
},
{
"match":/(-za|𒍝)[^\s]*/gm,
"matchClass":"wordcase",
"group": 5,
"description":"Case:  Reflexive"
}
],
"NA":[
{
"match":/(-m[iau]s|-m[ai]n|-m[ei]t|-m[ai](t)?|-ti[snt]|-ta(s)?|-tit|-tus|-s[ai]s|-s[ai]n|-s[ei]t|-si|-sa|-sus)[^\s]*/gm,
"matchClass":"tense",
"group": 4,
"description":"Possessive Suffix"
}
],
"NN":[
{
"match":/(-m[iau]s|-m[ai]n|-m[ei]t|-m[ai](t)?|-ti[snt]|-ta(s)?|-tit|-tus|-s[ai]s|-s[ai]n|-s[ei]t|-si|-sa|-sus)[^\s]*/gm,
"matchClass":"tense",
"group": 4,
"description":"Possessive Suffix"
}
],
"VV":[
{
"match":/(.)*[^\s]*/gm,
"matchClass":"stem",
"group": 1,
"description":"Stem: "
},
{
"match":/(-mi|-ah(-hi)?|-[hn]?un|-(a)?llu|-ha-ha-ri|-ha(-ri)?|-ha-hat(i)?|-hat(-i)?|-ha-ha-ru|-ha-ru)|(𒈪|𒀪(𒄭)?|-[hn]?un|-(a)?llu|𒄩𒄩𒊑|𒄩(𒊑)?|𒄩𒉺(𒄿)?|𒉺(𒄿)?|𒄩𒄩𒊒|𒄩𒊒)[^\s]*/gm,
"matchClass":"declination",
"group": 2,
"description":"Case:  First Person Singular"
},
{
"match":/(-[st]i|-s|-(s)?t(a)?|-i|-ti|-ta(t(i)?)?|-at(-i)?|-hut(-i)?)|(-[st]i|-s|-(s)?t(a)?|-i|-ti|-ta(t(i)?)?|at(i)?|hut(i)?)[^\s]*/gm,
"matchClass":"declination",
"group": 2,
"description":"Case:  Second Person Singular"
},
{
"match":/(-an-zi|-an-ta(-ri)?|-[ei]r|-an-tat(i)?|-an-du|-an-ta-ru)|(𒀭𒍣|𒀭𒋫(𒊑)?|𒅕|𒀭-tat(𒄿)?|𒀭𒁺|𒀭𒋫𒊒)[^\s]*/gm,
"matchClass":"declination",
"group": 2,
"description":"Case:  Third Person Plural"
},
{
"match":/(-(z)?i|-(s)?t(a)?|-(d)?u|-(t)?a-ri(-ta)?|-ta-t(i)?|-ta|-at(i)?|-(t)?a-ru)|(-(z)?i|-(s)?t(a)?|-(d)?u|-(t)?a-ri(𒋫)?|𒋫-t(𒄿)?|𒋫|𒀜(𒄿)?|-(t)?a𒊒)[^\s]*/gm,
"matchClass":"declination",
"group": 2,
"description":"Case:  Third Person Singular"
},
{
"match":/(-wen(-i)?|-wa-sta(-a-ti)?|-wa-stat)|(-wen(𒄿)?|𒉿-sta(-a𒋾)?|𒉿-stat)[^\s]*/gm,
"matchClass":"declination",
"group": 2,
"description":"Case:  First Person Plural"
},
{
"match":/(-te-ni|-du-ma(-ri)?|[t]?-t[ei]n|-du-mat(-i)?)|(𒋼𒉌|𒁺𒈠(𒊑)?|𒁷|𒁺𒆳(𒄿)?)[^\s]*/gm,
"matchClass":"declination",
"group": 2,
"description":"Case:  Second Person Plural"
},
{
"match":/(-[n]?un|-s|-t(a)?|-wen|[t]?-t[ei]n|-[ei]r)|(𒌦|𒍝|𒋫|-wen|𒁷|𒅕)[^\s]*/gm,
"matchClass":"tense",
"group": 2,
"description":"Tense: Preterite"
},
{
"match":/(-[a]?llu|-i|-t|[[\s\[]a][[\s\[]n]-du|-we-ni|-an-du)|(𒀠𒇻|𒄿|-t|[[\s\[]𒀭]𒁺|𒉿𒉌|𒀭𒁺)[^\s]*/gm,
"matchClass":"tense",
"group": 2,
"description":"Tense: Imperative"
},
{
"match":/(-mi|-si|-zi|-we-ni|-te-ni|-an-zi|-hi|-a-hi|-t(i)?|-ha-ha-ri)|(𒈪|𒅆|[[\s\[]𒀭]𒍣|𒉿𒉌|𒋼𒉌|𒀭𒍣|𒄭|𒀀𒄭|𒋾|𒄩𒄩𒊑)[^\s]*/gm,
"matchClass":"tense",
"group": 2,
"description":"Tense: Present"
}
]
};