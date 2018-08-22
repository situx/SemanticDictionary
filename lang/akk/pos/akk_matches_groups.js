var akk_matches_groups={"NA":[
{
"match":/[\s\[](-ia|-i|-ka|-ki|-szu|-sza|-ni|-kunu|-kina|-szunu|-szina)(m)?[^\s]*/gm,
"matchClass":"",
"group": 2,
"description":"Case: Genitive"
},
{
"match":/[\s\[](-ni|-ka|-ki|-szu|-szi|-niati|-kunuti|-kinati|-szunuti|-szinati)(m)?[^\s]*/gm,
"matchClass":"",
"group": 2,
"description":"Case: Accusative"
},
{
"match":/[\s\[](-a|-ni|-ku|-ki|-szu|-szi|-niaszi|-kunuszi|-kinaszi|-szunuszi|-szinaszi)(m)?[^\s]*/gm,
"matchClass":"",
"group": 2,
"description":"Case: Dative"
},
{
"match":/[\s\[](-aku|-ata|-ati|-at|-anu|-atunu|-atina|-u|-a)(m)?[^\s]*/gm,
"matchClass":"",
"group": 2,
"description":"Case: Stative"
}
],
"NN":[
{
"match":/[\s\[].*((u-u|tu|at-tu)(m)?|(i-i|ti|at-ti)(m)?|(a-a|ta|at-ta)(m)?)[^\s]*/gm,
"matchClass":"",
"group": 2,
"description":"Case: Plural"
},
{
"match":/[\s\[].*(u)(m)?[^\s]*/gm,
"matchClass":"wordcase",
"group": 2,
"description":"Case: Nominative"
},
{
"match":/[\s\[].*(i)(m)?[^\s]*/gm,
"matchClass":"wordcase",
"group": 2,
"description":"Case: Genitive"
},
{
"match":/[\s\[].*(a)(m)?[^\s]*/gm,
"matchClass":"wordcase",
"group": 2,
"description":"Case: Accusative"
},
{
"match":/[\s\[](-a|-ni|-ku|-ki|-szu|-szi|-ni-a-szi|-ku-nu-szi|-ki-na-szi|-szu-nu-szi|-szi-na-szi)(m)?[^\s]*/gm,
"matchClass":"wordcase",
"group": 2,
"description":"Case: Dative"
},
{
"match":/[\s\[](-aku|-ata|-ati|-at|-anu|-atunu|-atina|-u|-a)(m)?[^\s]*/gm,
"matchClass":"wordcase",
"group": 2,
"description":"Case: Stative"
},
{
"match":/[\s\[](-ia|-i|-ka|-ki|-szu|-sza|-ni|-ku-nu|-k-ina|-szu-nu|-szi-na)(m)?[^\s]*/gm,
"matchClass":"",
"group": 2,
"description":"Case: Genitive"
},
{
"match":/[\s\[](-ni|-ka|-ki|-szu|-szi|-ni-a-ti|-ku-nu-ti|-kinati|-szu-nu-ti|-szi-na-ti)(m)?[^\s]*/gm,
"matchClass":"",
"group": 2,
"description":"Case: Accusative"
},
{
"match":/(-at|𒀜)[^\s]*/gm,
"matchClass":"",
"group": 2,
"description":"Case: Female"
},
{
"match":/[\s\[](-a|-ia|-i)[^\s]*/gm,
"matchClass":"declination",
"group": 4,
"description":"Case: Possessive First Singular"
},
{
"match":/[\s\[](-ka|-ki)[^\s]*/gm,
"matchClass":"declination",
"group": 4,
"description":"Case: Possessive Second Singular"
},
{
"match":/[\s\[](-szu)[^\s]*/gm,
"matchClass":"declination",
"group": 4,
"description":"Case: Possessive Third Singular"
},
{
"match":/[\s\[](-sza)[^\s]*/gm,
"matchClass":"declination",
"group": 4,
"description":"Case: Possessive Third Singular Female"
},
{
"match":/[\s\[](-ku-nu)[^\s]*/gm,
"matchClass":"declination",
"group": 4,
"description":"Case: Possessive Second Plural"
},
{
"match":/[\s\[](-szu-nu)[^\s]*/gm,
"matchClass":"declination",
"group": 4,
"description":"Case: Possessive Third Plural"
},
{
"match":/[\s\[](-ni|-nu)[^\s]*/gm,
"matchClass":"declination",
"group": 4,
"description":"Case: Possessive First Plural"
}
],
"VV":[
{
"match":/[\s\[](ni|nu)-|(𒉌|𒉡)[^\s]*/gm,
"matchClass":"declination",
"group": 2,
"description":"Case:  First Person Plural"
},
{
"match":/[\s\[](li|la|le|lu)-|(𒇷|𒉡|𒁳)[^\s]*/gm,
"matchClass":"tense",
"group": 2,
"description":"Tense: Past Tense"
},
{
"match":/[\s\[](i[q]?|u)-[^\s]*/gm,
"matchClass":"declination",
"group": 3,
"description":"Case:  Third Person Singular"
},
{
"match":/[\s\[](a|u)(-)?|(𒀀|𒅇)[^\s]*/gm,
"matchClass":"declination",
"group": 3,
"description":"Case:  First Person Singular"
},
{
"match":/[\s\[](ta|tu)-|(𒋫|𒋽)[^\s]*/gm,
"matchClass":"declination",
"group": 3,
"description":"Case:  Second Person Singular"
},
{
"match":/([bcdfghjklmnpqrstvwxyz])-\1[^\s]*/gm,
"matchClass":"",
"group": 4,
"description":"N-Stem"
},
{
"match":/t-t[^\s]*/gm,
"matchClass":"tense",
"group": 4,
"description":"Tense: Past Tense"
},
{
"match":/(ta|te)-|(𒁕|𒊹)[^\s]*/gm,
"matchClass":"tense",
"group": 6,
"description":"Tense: Perfect"
},
{
"match":/((.)[[\s\[]-](.)|(.)-(.))[^\s]*/gm,
"matchClass":"tense",
"group": 8,
"description":"Tense: Present/Future"
},
{
"match":/[\s\[](-i2)[^\s]*/gm,
"matchClass":"declination",
"group": 10,
"description":"Case:  Second Person Singular Female"
},
{
"match":/[\s\[](u2|𒌑)[^\s]*/gm,
"matchClass":"declination",
"group": 13,
"description":"Case:  Third Person Plural"
},
{
"match":/[\s\[](a2|𒀉)[^\s]*/gm,
"matchClass":"declination",
"group": 13,
"description":"Case:  Second Person Plural"
},
{
"match":/[\s\[]((-ia)|(-i)|(-ka)|(-ki)|(-szu)|(-sza)|(-ni)|(-ku-nu)|(-ki-na)|(-szu-nu)|(-szi-na))|((𒅀)|(𒄿)|(𒂵)|(𒄀)|(𒋗)|(𒐼)|(𒉌)|(𒅥𒈿)|(𒄀𒀝)|(𒋗𒈿)|(𒋛𒀝))[^\s]*/gm,
"matchClass":"wordcase",
"group": 14,
"description":"Case: Genitive"
},
{
"match":/[\s\[]((-ni)|(-ka)|(-ki)|(-szu)|(-szi)|(-ni-a-ti)|(-ku-nu-ti)|(-ki-na-ti)|(-szu-nu-ti)|(-szi-na-ti))|((𒉌)|(𒅗)|(𒄀)|(𒋗)|(𒋛)|(𒉌𒀀𒊹)|(𒅥𒈿𒊹)|(𒄀𒈾𒊹)|(𒋗𒈿𒊹)|(𒋛𒈾𒊹))[^\s]*/gm,
"matchClass":"wordcase",
"group": 14,
"description":"Case: Accusative"
},
{
"match":/[\s\[]((-am)|(-nim)|(-kum)|(-kim)|(-szum)|(-szim)|(-ni-a-szi[m]?)|(-ku-nu-szi[m]?)|(-ki-na-szi[m]?)|(-szu-nu-szi(m)?)|(-szi-na-szi(m)?))[^\s]*/gm,
"matchClass":"wordcase",
"group": 14,
"description":"Case: Dative"
},
{
"match":/[\s\[](-aku|-ata|-ati|-at|-anu|-atunu|-atina|-u|-a)[^\s]*/gm,
"matchClass":"wordcase",
"group": 14,
"description":"Case: Stative"
},
{
"match":/[\s\[](-mi|-ma)|(𒈪|𒈠)[^\s]*/gm,
"matchClass":"",
"group": 15,
"description":"Direct Speech"
}
]
};