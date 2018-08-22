var sux_matches_groups = {
	"NE": [{
		"match": /(.)*[^\s]*/gm,
		"matchClass": "stem",
		"group": 1,
		"description": "Stem: "
	}, {
		"match": /(-gu|-ga|𒄖|𒂵)[^\s]*/gm,
		"matchClass": "declination",
		"group": 2,
		"description": "Case: Possessive First Singular"
	}, {
		"match": /(-zu|-za|𒍪|𒍝)[^\s]*/gm,
		"matchClass": "declination",
		"group": 2,
		"description": "Case: Possessive Second Singular"
	}, {
		"match": /[\s\[](-a-ni|a-na|𒀀𒉌|𒀀𒈾)[^\s]*/gm,
		"matchClass": "declination",
		"group": 2,
		"description": "Case: Possessive Third Singular"
	}, {
		"match": /(-bi|-bi-a|-ba|𒁉|𒁉𒀀|𒁀)[^\s]*/gm,
		"matchClass": "declination",
		"group": 2,
		"description": "Case: Possessive Third Singular Female"
	}, {
		"match": /[\s\[].*(-me|𒈨)[^\s]*/gm,
		"matchClass": "declination",
		"group": 2,
		"description": "Case: Possessive First Plural"
	}, {
		"match": /[\s\[].*(-zu-ne-ne|𒍪𒉈𒉈)[^\s]*/gm,
		"matchClass": "declination",
		"group": 2,
		"description": "Case: Possessive Second Plural"
	}, {
		"match": /((-a)?-ne-ne|(𒀀)?𒉈𒉈)[^\s]*/gm,
		"matchClass": "declination",
		"group": 2,
		"description": "Case: Possessive Third Plural"
	}, {
		"match": /[\s\[].*(-a|𒀀)[^\s]*/gm,
		"matchClass": "wordcase",
		"group": 4,
		"description": "Case: Locative"
	}, {
		"match": /[\s\[].*(-ra|𒊏)[^\s]*/gm,
		"matchClass": "wordcase",
		"group": 4,
		"description": "Case: Dative"
	}, {
		"match": /[\s\[].*(-ak|𒀝)[^\s]*/gm,
		"matchClass": "wordcase",
		"group": 4,
		"description": "Case: Genitive"
	}, {
		"match": /[\s\[].*(-e|𒂊)[^\s]*/gm,
		"matchClass": "wordcase",
		"group": 4,
		"description": "Case: Ergative"
	}, {
		"match": /[\s\[].*(-da|𒁕)[^\s]*/gm,
		"matchClass": "wordcase",
		"group": 4,
		"description": "Case: Comitative"
	}, {
		"match": /[\s\[].*(-sze)[^\s]*/gm,
		"matchClass": "wordcase",
		"group": 4,
		"description": "Case: Terminative"
	}, {
		"match": /[\s\[].*(-gin|𒁺)[^\s]*/gm,
		"matchClass": "wordcase",
		"group": 4,
		"description": "Case: Equative"
	}, {
		"match": /[\s\[].*(-e-ne|𒂊𒉈)[^\s]*/gm,
		"matchClass": "wordcase",
		"group": 6,
		"description": "Case: Plural"
	}],
	"NN": [{
		"match": /(.)*[^\s]*/gm,
		"matchClass": "stem",
		"group": 1,
		"description": "Stem: "
	}, {
		"match": /(-gu|-ga|𒄖|𒂵)[^\s]*/gm,
		"matchClass": "declination",
		"group": 2,
		"description": "Case: Possessive First Singular"
	}, {
		"match": /(-zu|-za|𒍪|𒍝)[^\s]*/gm,
		"matchClass": "declination",
		"group": 2,
		"description": "Case: Possessive Second Singular"
	}, {
		"match": /(-a-ni|a-na|𒀀𒉌|𒀀𒈾)[^\s]*/gm,
		"matchClass": "declination",
		"group": 2,
		"description": "Case: Possessive Third Singular"
	}, {
		"match": /(-bi|-bi-a|-ba|𒁉|𒁉𒀀|𒁀)[^\s]*/gm,
		"matchClass": "declination",
		"group": 2,
		"description": "Case: Possessive Third Singular Thing"
	}, {
		"match": /[\s\[].*(-me|𒈨)[^\s]*/gm,
		"matchClass": "declination",
		"group": 2,
		"description": "Case: Possessive First Plural"
	}, {
		"match": /[\s\[].*(-zu-ne-ne|𒍪𒉈𒉈)[^\s]*/gm,
		"matchClass": "declination",
		"group": 2,
		"description": "Case: Possessive Second Plural"
	}, {
		"match": /((-a)?-ne-ne|(𒀀)?𒉈𒉈)[^\s]*/gm,
		"matchClass": "declination",
		"group": 2,
		"description": "Case: Possessive Third Plural"
	}, {
		"match": /[\s\[].*(-a|𒀀s)[^\s]*/gm,
		"matchClass": "wordcase",
		"group": 4,
		"description": "Case: Locative"
	}, {
		"match": /[\s\[].*(-ra|𒊏)[^\s]*/gm,
		"matchClass": "wordcase",
		"group": 4,
		"description": "Case: Dative"
	}, {
		"match": /[\s\[].*(-ak|𒀝)[^\s]*/gm,
		"matchClass": "wordcase",
		"group": 4,
		"description": "Case: Genitive"
	}, {
		"match": /[\s\[].*(-e|𒂊)[^\s]*/gm,
		"matchClass": "wordcase",
		"group": 4,
		"description": "Case: Ergative"
	}, {
		"match": /[\s\[].*(-da|𒁕)[^\s]*/gm,
		"matchClass": "wordcase",
		"group": 4,
		"description": "Case: Comitative"
	}, {
		"match": /[\s\[].*(-sze)[^\s]*/gm,
		"matchClass": "wordcase",
		"group": 4,
		"description": "Case: Terminative"
	}, {
		"match": /[\s\[].*(-gin|𒁺)[^\s]*/gm,
		"matchClass": "wordcase",
		"group": 4,
		"description": "Case: Equative"
	}, {
		"match": /[\s\[].*(-e-ne|𒂊𒉈)[^\s]*/gm,
		"matchClass": "wordcase",
		"group": 5,
		"description": "Case: Plural"
	}],
	"VV": [{
		"match": /[\s\[](n(u)?-|li-|la-|𒉡|𒇷|𒆷)[^\s]*/gm,
		"matchClass": "wordcase",
		"group": 2,
		"description": "Case:  Negative"
	}, {
		"match": /[\s\[](bara-)[^\s]*/gm,
		"matchClass": "wordcase",
		"group": 2,
		"description": "Case:  Vetitive"
	}, {
		"match": /[\s\[](ha-|𒄩)[^\s]*/gm,
		"matchClass": "wordcase",
		"group": 2,
		"description": "Case:  Optative"
	}, {
		"match": /[\s\[](na-|sza-|𒈾|𒊭)[^\s]*/gm,
		"matchClass": "wordcase",
		"group": 2,
		"description": "Case:  Vetitive"
	}, {
		"match": /(mu)[^\s]*/gm,
		"matchClass": "wordcase",
		"group": 3,
		"description": "Case: Ventive"
	}, {
		"match": /[\s\[](mu-|𒈬)[^\s]*/gm,
		"matchClass": "wordcase",
		"group": 4,
		"description": "Case:  Ventive"
	}, {
		"match": /[\s\[](ba-|𒁀)[^\s]*/gm,
		"matchClass": "declination",
		"group": 5,
		"description": "Case:  Third Person Singular Mediumprefix"
	}, {
		"match": /[\s\[](-Ø|-e|𒂊)[^\s]*/gm,
		"matchClass": "declination",
		"group": 6,
		"description": "Case:  Third Person Singular"
	}, {
		"match": /[\s\[](n-)[^\s]*/gm,
		"matchClass": "declination",
		"group": 6,
		"description": "Case:  Third Person Singular"
	}, {
		"match": /[\s\[](a-|𒀀)[^\s]*/gm,
		"matchClass": "wordcase",
		"group": 7,
		"description": "Case:  Dative"
	}, {
		"match": /[\s\[](da-|di-|𒁕)[^\s]*/gm,
		"matchClass": "wordcase",
		"group": 8,
		"description": "Case:  Comitative"
	}, {
		"match": /[\s\[](ta-|-ra|𒁕)[^\s]*/gm,
		"matchClass": "wordcase",
		"group": 9,
		"description": "Case:  Ablative"
	}, {
		"match": /[\s\[](szi-|𒅆)[^\s]*/gm,
		"matchClass": "wordcase",
		"group": 9,
		"description": "Case:  Terminative"
	}, {
		"match": /[\s\[](ni-|𒉌)[^\s]*/gm,
		"matchClass": "wordcase",
		"group": 10,
		"description": "Case:  Locative"
	}, {
		"match": /[\s\[](i-|j-|𒄿)[^\s]*/gm,
		"matchClass": "wordcase",
		"group": 10,
		"description": "Case:  Directive"
	}, {
		"match": /[\s\[](-e|-n|-b)[^\s]*/gm,
		"matchClass": "tense",
		"group": 11,
		"description": "Tense: Past"
	}, {
		"match": /(.)*[^\s]*/gm,
		"matchClass": "stem",
		"group": 12,
		"description": "Stem: "
	}, {
		"match": /[\s\[](-ed|𒀉)[^\s]*/gm,
		"matchClass": "tense",
		"group": 13,
		"description": "Tense: Present/Future"
	}, {
		"match": /[\s\[](-[m]?en)[^\s]*/gm,
		"matchClass": "declination",
		"group": 15,
		"description": "Case:  First Person Singular"
	}, {
		"match": /[\s\[](-Ø|-e|𒂊)[^\s]*/gm,
		"matchClass": "declination",
		"group": 15,
		"description": "Case:  Third Person Singular"
	}, {
		"match": /[\s\[](-[m]?enden)[^\s]*/gm,
		"matchClass": "declination",
		"group": 15,
		"description": "Case:  First Person Plural"
	}, {
		"match": /[\s\[](-[m]?enzen)[^\s]*/gm,
		"matchClass": "declination",
		"group": 15,
		"description": "Case:  Second Person Plural"
	}, {
		"match": /[\s\[](-[m]?esz|-[m]?e-ne)[^\s]*/gm,
		"matchClass": "declination",
		"group": 15,
		"description": "Case:  Third Person Plural"
	}]
};