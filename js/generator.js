define("dataBuilding", [], function() {
	var e = {},
		t = {},
		n = {},
		r = {
			sizeOf: e,
			encoder: t,
			decoder: n,
			computeChecksum: function(e) {
				while (e.length % 4 !== 0) e.push(0);
				var t = 0;
				for (var n = 0, r = e.length; n < r; n += 4) t += (e[n] << 24) + (e[n + 1] << 16) + (e[n + 2] << 8) + e[n + 3];
				return t %= Math.pow(2, 32), t
			},
			decodeULONG: function(e) {
				var t = e.split ? e.split("").map(function(e) {
						return e.charCodeAt(0)
					}) : e,
					n = (t[0] << 24) + (t[1] << 16) + (t[2] << 8) + t[3];
				return n < 0 && (n += Math.pow(2, 32)), n
			}
		};
	return function() {
			for (var r = 1; r <= 4; r++)(function(i) {
				t["PADDING" + i] = function(t) {
					return (new Array(i + 1)).join(0).split("").map(function(e) {
						return 0
					})
				}, n["PADDING" + i] = function(t) {
					return 0
				}, e["PADDING" + i] = function(e) {
					return i
				}
			})(r)
		}(), t.BYTE = function(t) {
			return [t]
		}, n.BYTE = function(t) {
			return t[0]
		}, e.BYTE = function() {
			return 1
		}, t.CHAR = function(t) {
			return [t.charCodeAt(0)]
		}, n.CHAR = function(t) {
			return String.fromCharCode(t[0])
		}, e.CHAR = function() {
			return 1
		}, t.CHARARRAY = function(t) {
			return t.split("").map(function(e) {
				return e.charCodeAt(0)
			})
		}, n.CHARARRAY = function(t) {
			return t.map(function(e) {
				return String.fromCharCode(e)
			}).join("")
		}, e.CHARARRAY = function(e) {
			return e.length
		}, t.USHORT = function(t) {
			return [t >> 8 & 255, t & 255]
		}, n.USHORT = function(t) {
			return (t[0] << 8) + t[1]
		}, e.USHORT = function() {
			return 2
		}, t.SHORT = function(t) {
			var n = 32768;
			return t >= n && (t = -(2 * n - t)), [t >> 8 & 255, t & 255]
		}, n.SHORT = function(t) {
			var n = 32768,
				t = (t[0] << 8) + t[1];
			return t > n && (t -= 2 * n), t
		}, e.SHORT = function() {
			return 2
		}, t.UINT24 = function(t) {
			return [t >> 16 & 255, t >> 8 & 255, t & 255]
		}, n.UINT24 = function(t) {
			return (t[0] << 16) + (t[1] << 8) + t[2]
		}, e.UINT24 = function() {
			return 3
		}, t.ULONG = function(t) {
			return [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, t & 255]
		}, n.ULONG = function(t) {
			return (t[0] << 24) + (t[1] << 16) + (t[2] << 8) + t[3]
		}, e.ULONG = function() {
			return 4
		}, t.LONG = function(t) {
			var n = 2147483648;
			return t >= n && (t = -(2 * n - t)), [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, t & 255]
		}, n.LONG = function(t) {
			var n = 2147483648,
				t = (t[0] << 24) + (t[1] << 16) + (t[2] << 8) + t[3];
			return t > n && (t -= 2 * n), t
		}, e.LONG = function() {
			return 4
		}, t.LONGDATETIME = function(t) {
			return [0, 0, 0, 0, 0, 0, 0, 0]
		}, n.LONGDATETIME = function(t) {
			return 0
		}, e.LONGDATETIME = function() {
			return 4
		}, t.FIXED = t.ULONG, n.FIXED = n.ULONG, e.FIXED = e.ULONG, t.FWORD = t.SHORT, n.FWORD = n.SHORT, e.FWORD = e.SHORT, t.UFWORD = t.USHORT, n.UFWORD = n.USHORT, e.UFWORD = e.USHORT, t.OFFSET = t.USHORT, n.OFFSET = n.USHORT, e.OFFSET = e.USHORT, t.NUMBER = function(t) {
			if (-107 <= t && t <= 107) return [t + 139];
			if (108 <= t && t <= 1131) {
				var n = t - 108,
					r = n >> 8 & 255,
					i = n - (r << 8);
				return [r + 247, i]
			}
			if (-1131 <= t && t <= -108) {
				var n = -t - 108,
					r = n >> 8 & 255,
					i = n - (r << 8);
				return [r + 251, i]
			}
			return -32768 <= t && t <= 32767 ? [28, t >> 8 & 255, t & 255] : [29, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, t & 255]
		}, n.NUMBER = function(t) {
			var n = t.splice(0, 1)[0];
			if (n === 28) {
				var r = t.splice(0, 1)[0],
					i = t.splice(0, 1)[0];
				return r << 8 | i
			}
			if (n === 29) {
				var r = t.splice(0, 1)[0],
					i = t.splice(0, 1)[0],
					s = t.splice(0, 1)[0],
					o = t.splice(0, 1)[0];
				return r << 8 | i
			}
			if (n >= 32 && n <= 246) return n - 139;
			if (n >= 247 && n <= 250) {
				var r = t.splice(0, 1)[0];
				return (n - 247 << 8) + r + 108
			}
			if (n >= 251 && n <= 254) {
				var r = t.splice(0, 1)[0];
				return -(n - 251 << 8) - r - 108
			}
		}, e.NUMBER = function(e) {
			return t.NUMBER(e).length
		}, t.OPERAND = function(n, r) {
			var i = t.BYTE(n);
			return r !== undefined && i.concat(BYTE(r)), i
		}, t.DICTINSTRUCTION = function(t) {
			var n = [];
			return t.forEach(function(e) {
				n = n.concat(e)
			}), n
		}, t.GlyphID = t.USHORT, n.GlyphID = n.USHORT, e.GlyphID = e.USHORT, t.Offset = t.USHORT, n.Offset = n.USHORT, e.Offset = e.USHORT, t.Card8 = t.BYTE, n.Card8 = n.BYTE, e.Card8 = e.BYTE, t.Card16 = t.USHORT, n.Card16 = n.USHORT, e.Card16 = e.USHORT, t.SID = t.USHORT, n.SID = n.USHORT, e.SID = e.USHORT, t.OffSize = t.BYTE, n.OffSize = n.BYTE, e.OffSize = e.BYTE, t.OffsetX = [undefined, t.BYTE, t.USHORT, t.UINT24, t.ULONG], n.OffsetX = [undefined, n.BYTE, n.USHORT, n.UINT24, n.ULONG], e.OffsetX = [undefined, e.BYTE, e.USHORT, e.UINT24, e.ULONG], t.BOOLEAN = function(e) {
			return e ? [1] : [0]
		}, n.BOOLEAN = function(e) {
			return !!e[0]
		}, e.BOOLEAN = function() {
			return 1
		}, t.NUMBERS = function(e) {
			var n = [];
			return e.forEach(function(e) {
				n = n.concat(t.NUMBER(e))
			}), n
		}, n.NUMBERS = function(e) {
			var t = [];
			while (e.length > 0) t.push(n.NUMBER(e));
			return t
		}, e.NUMBERS = function(e) {
			return e.length
		},
		function(e, t, n) {
			var r = [
				["version", "NUMBER", [0]],
				["Notice", "NUMBER", [1]],
				["Copyright", "NUMBER", [12, 0]],
				["FullName", "NUMBER", [2]],
				["FamilyName", "NUMBER", [3]],
				["Weight", "NUMBER", [4]],
				["isFixedPitch", "BOOLEAN", [12, 1]],
				["ItalicAngle", "NUMBER", [12, 2]],
				["UnderlinePosition", "NUMBER", [12, 3]],
				["UnderlineThickness", "NUMBER", [12, 4]],
				["PaintType", "NUMBER", [12, 5]],
				["CharstringType", "NUMBER", [12, 6]],
				["FontMatrix", "NUMBERS", [12, 7]],
				["UniqueID", "NUMBER", [13]],
				["FontBBox", "NUMBERS", [5]],
				["StrokeWidth", "NUMBER", [12, 8]],
				["XUID", "NUMBERS", [14]],
				["charset", "NUMBER", [15]],
				["Encoding", "NUMBER", [16]],
				["CharStrings", "NUMBER", [17]],
				["Private", "NUMBERS", [18]],
				["SyntheticBase", "NUMBER", [12, 20]],
				["PostScript", "NUMBER", [12, 21]],
				["BaseFontName", "NUMBER" [12, 22]],
				["BaseFontBlend", "NUMBER", [12, 23]],
				["ROS", "NUMBERS", [12, 30]],
				["CIDFontVersion", "NUMBER", [12, 31]],
				["CIDFontRevision", "NUMBER", [12, 32]],
				["CIDFontType", "NUMBER", [12, 33]],
				["CIDCount", "NUMBER", [12, 34]],
				["UIDBase", "NUMBER", [12, 35]],
				["FDArray", "NUMBER", [12, 36]],
				["FDSelect", "NUMBER", [12, 37]],
				["FontName", "NUMBER", [12, 38]],
				["BlueValues", "NUMBERS", [6]],
				["OtherBlues", "NUMBERS", [7]],
				["FamilyBlues", "NUMBERS", [8]],
				["FamilyOtherBlues", "NUMBERS", [9]],
				["BlueScale", "NUMBER", [12, 9]],
				["BlueShift", "NUMBER", [12, 10]],
				["BlueFuzz", "NUMBER", [12, 11]],
				["StdHW", "NUMBER", [10]],
				["StdVW", "NUMBER", [11]],
				["StemSnapH", "NUMBER", [12, 12]],
				["StemSnapV", "NUMBER", [12, 13]],
				["ForceBold", "BOOLEAN", [12, 14]],
				["LanguageGroup", "NUMBER", [12, 17]],
				["ExpansionFactor", "NUMBER", [12, 18]],
				["initialRandomSeed", "NUMBER", [12, 19]],
				["Subrs", "NUMBER", [19]],
				["defaultWidthX", "NUMBER", [20]],
				["nominalWidthX", "NUMBER", [21]]
			];
			e.CFF = {}, t.CFF = {}, n.CFF = {}, r.forEach(function(r) {
				e.CFF[r[0]] = function(t) {
					return e[r[1]](t).concat(r[2])
				}, t.CFF[r[0]] = function(e) {
					return e.splice(-r[2].length, r[2].length), t[r[1]](e)
				}, n.CFF[r[0]] = function(e) {
					return n[r[1]](e) + r[2].length
				}
			}), e.types = r.map(function(e) {
				return e[0]
			}), t.types = e.types
		}(t, n, e), t.LITERAL = function(t) {
			return t
		}, n.LITERAL = t.LITERAL, e.LITERAL = function(e) {
			return e.toData ? e.toData().length : e.length
		}, r
}), define("nodeBuilder", [], function() {
	return typeof document !== undefined ? {
		create: function(e) {
			return document.createElement(e)
		}
	} : {
		create: function(e) {
			return {
				localName: e.toLowerCase(),
				attributes: {},
				children: [],
				appendChild: function(e) {
					children.push(e)
				},
				setAttribute: function(e, t) {
					attributes[e] = t
				},
				getAttribute: function(e) {
					return attributes[e]
				},
				toString: function() {
					var e = this.attributes,
						t = Object.keys(e);
					return "<" + this.localName + function() {
						var n = t.map(function(t) {
							return t + '="' + e[t] + '"'
						});
						return n.join(" ")
					}() + ">" + children.map(function(e) {
						return e.toString()
					}).join("") + "</" + this.localName + ">"
				},
				valueOf: function() {
					return this.toString()
				}
			}
		}
	}
}), define("makeStructy", ["nodeBuilder"], function(e) {
	return function(n, r) {
		if (!n || !r) throw "nope";
		return r.name = n, r.toJSON = function() {
			return this.map(function(e) {
				return e.toJSON()
			})
		}, r.toHTML = function() {
			var t = this,
				n = e.create("div");
			return n.setAttribute("class", this.name), typeof this[0] == "number" ? n.innerHTML = this.join(",") : this.forEach(function(t) {
				if (t.toHTML) n.appendChild(t.toHTML());
				else {
					var r = e.create("div");
					r.setAttribute("class", "value"), r.innerHTML = t, n.appendChild(r)
				}
			}), n
		}, r.toData = function(e, t) {
			e = e || 0;
			var r = [],
				i;
			return this.forEach(function(s) {
				if (!s.toData) {
					r.push(s);
					return
				}
				i = s.toData(e, t), r = r.concat(i), t && t.addMapping(e, {
					name: n,
					length: i.length,
					structure: s.toJSON()
				}), e += i.length
			}), r
		}, r.toString = function() {
			return JSON.stringify(this.toJSON(), !1, 2)
		}, r
	}
}), define("struct", ["dataBuilding", "nodeBuilder", "makeStructy"], function(e, t, n) {
	var r = e.encoder,
		i = e.decoder,
		s = e.sizeOf,
		o = function(e, t) {
			t || (t = e, e = ""), this.name = e, this.definition = t
		};
	return o.prototype = {
		setName: function(e) {
			this.name = e
		},
		fill: function(e) {
			this.bindFields(this.definition);
			var t = this;
			e && Object.keys(e).forEach(function(n) {
				t.fields[n] && (t[n] = e[n])
			})
		},
		bindFields: function(e) {
			this.fields = {}, this.values = {}, this.descriptions = {};
			var t = this;
			e.forEach(function(e) {
				(function(e, s, o) {
					t.fields[e] = s, t.descriptions[e] = o, Object.defineProperty(t, e, {
						get: function() {
							if (t.values[e] === undefined) throw "Cannot find a value bound for " + e;
							var n = t.values[e];
							return s.indexOf("CFF.") === 0 ? (n.slice && (n = n.slice()), i.CFF[s.replace("CFF.", "")](n)) : i[s](n)
						},
						set: function(i) {
							s.indexOf("CFF.") === 0 ? t.values[e] = r.CFF[s.replace("CFF.", "")](i) : (s === "LITERAL" && !i.toData && n(e, i), t.values[e] = r[s](i))
						}
					});
					if (s === "PADDING1" || s === "PADDING2" || s === "PADDING3" || s === "PADDING4") t[e] = 0
				})(e[0], e[1], e[2])
			})
		},
		use: function(e) {
			var t = Object.keys(this.fields).filter(function(t) {
				return e.indexOf(t) === -1
			});
			this.unset(t)
		},
		unset: function(e) {
			var t = this;
			e.forEach(function(e) {
				delete t.fields[e], delete t.values[e]
			})
		},
		offset: function(e) {
			var t = 0,
				n = Object.keys(this.fields);
			for (var r = 0, i = n.length; r < i; r++) {
				var s = n[r];
				if (s === e) return t;
				t += this.sizeOf(s)
			}
			return 0
		},
		sizeOf: function(e) {
			var t = this,
				n = 0,
				r = e ? [e] : Object.keys(this.fields);
			return r.forEach(function(e) {
				var r = t.values[e] ? t[e] : !1,
					i = t.fields[e];
				i.indexOf("CFF.") === 0 ? n += s.CFF[i.replace("CFF.", "")](r) : n += s[t.fields[e]](r)
			}), n
		},
		parse: function(e) {
			this.values = {};
			if (!e) return !1;
			if (!(typeof e == "string" || e instanceof Int8Array)) return !1;
			typeof e == "string" && (e = e.split("").map(function(e) {
				return e.charCodeAt(0)
			}))
		},
		finalise: function() {},
		valueOf: function() {
			return this.toString()
		},
		toJSON: function() {
			var e = this,
				t = {},
				n = Object.keys(this.fields);
			return n.forEach(function(n) {
				var r = e[n];
				r instanceof Array ? r[0].toJSON ? t[n] = r.toJSON() : t[n] = r.slice() : r.toJSON ? t[n] = r.toJSON() : t[n] = r.toString()
			}), t
		},
		toString: function() {
			return JSON.stringify(this.toJSON(), !1, 2)
		},
		toHTML: function() {
			var e = this,
				n = t.create("div"),
				r = Object.keys(this.fields);
			return n.setAttribute("class", this.name), r.forEach(function(r) {
				if (e[r].toHTML) n.appendChild(e[r].toHTML());
				else {
					var i = t.create("div");
					i.setAttribute("class", r), i.setAttribute("data-type", e.fields[r]), i.innerHTML = e[r], n.appendChild(i)
				}
			}), n
		},
		toData: function(e, t) {
			e = e || 0;
			var n = this,
				r = [],
				i;
			return Object.keys(this.fields).forEach(function(s) {
				n.fields[s] === "LITERAL" ? n.values[s].toData ? i = n.values[s].toData(e, t) : i = n.values[s] : i = n.values[s], t && t.addMapping(e, {
					length: i.length,
					name: (n.name ? n.name : "") + ":" + s,
					value: n[s],
					description: n.descriptions[s]
				}), e += i.length, r = r.concat(i)
			}), r
		}
	}, o
}), define("asHex", [], function() {
	return function(t) {
		return t = t.toString(16).toUpperCase(), t.length === 1 && (t = "0" + t), t
	}
}), define("CFFHeader", ["struct"], function(e) {
	var t = function(e) {
		this.parse(e) || (e = e || {}, e.length = 4, this.fill(e), this.setName("CFFHeader"))
	};
	return t.prototype = new e("CFF header", [
		["major", "Card8", "major version"],
		["minor", "Card8", "minor version"],
		["length", "Card8", "header length in bytes"],
		["offSize", "OffSize", "how many bytes for an offset value?"]
	]), t
}), define("INDEX", ["struct", "dataBuilding"], function(e, t) {
	var n = function(e) {
		this.items = [], this.parse(e) || (e = e || {}, e.count = 0, this.fill(e))
	};
	return n.prototype = new e("CFF INDEX", [
		["count", "Card16", "number of stored items"],
		["offSize", "OffSize", "how many bytes do offset values use in this index"],
		["offset", "LITERAL", "depending on offSize, this is actually BYTE[], USHORT[], UINT24[] or ULONG[]. Note that offsets are relative to the byte *before* the data block, so the first offset is (almost always) 1, not 0."],
		["data", "LITERAL", "the data block for this index"]
	]), n.prototype.addItem = function(e) {
		this.items.push(e), this.count++, this.finalise()
	}, n.prototype.toJSON = function() {
		return this.count === 0 ? {
			count: 0
		} : e.prototype.toJSON.call(this)
	}, n.prototype.toHTML = function() {
		return this.count === 0 && this.unset(["offSize", "offset", "data"]), e.prototype.toHTML.call(this)
	}, n.prototype.toData = function(t, n) {
		return this.count === 0 ? [0, 0] : e.prototype.toData.call(this, t, n)
	}, n.prototype.sizeOf = function(t) {
		return this.count === 0 ? 2 : e.prototype.sizeOf.call(this, t)
	}, n.prototype.finalise = function() {
		var e = this;
		if (this.count === 0) return;
		var n = [];
		this.items.forEach(function(e) {
			e.toData ? n = n.concat(e.toData()) : e instanceof Array ? n = n.concat(e) : n.push(e)
		}), this.data = n;
		var r = Math.max(1, n.length),
			i = 1 + Math.floor(Math.log(r) / Math.log(2)) / 8 | 0,
			s = t.encoder.OffsetX[i],
			o = 1,
			u = [],
			a = !1;
		this.offSize = i, this.items.forEach(function(e) {
			a = s(o), o += (e.toData ? e.toData() : e).length, u = u.concat(a)
		}), u = u.concat(s(o)), this.offset = u
	}, n
}), define("NameIndex", ["INDEX", "dataBuilding"], function(e, t) {
	var n = t.encoder.CHARARRAY,
		r = function(t) {
			e.call(this);
			var r = this;
			t.forEach(function(e) {
				r.addItem(n(e))
			}), this.setName("NameIndex")
		};
	return r.prototype = Object.create(e.prototype), r
}), define("StringIndex", ["INDEX", "dataBuilding"], function(e, t) {
	var n = t.encoder.CHARARRAY,
		r = function(t) {
			e.call(this), this.setName("StringIndex");
			var r = this;
			t.forEach(function(e) {
				r.addItem(n(e))
			}), this.strings = t
		};
	return r.prototype = Object.create(e.prototype), r.prototype.getStringId = function(e) {
		return 391 + this.strings.indexOf(e)
	}, r
}), define("DICT", ["struct", "dataBuilding"], function(e, t) {
	var n = t.encoder.types.map(function(e) {
			return [e, "CFF." + e, e]
		}),
		r = function(e) {
			this.parse(e) || (e = e || {}, this.usedFields = Object.keys(e), this.fill(e), this.finalise())
		};
	return r.prototype = new e("CFF DICT", n), r.prototype.finalise = function() {
		this.use(this.usedFields)
	}, r
}), define("TopDictIndex", ["INDEX", "DICT"], function(e, t) {
	var n = function(n) {
		e.call(this), this.setName("TopDictIndex"), this.topdict = new t(n), this.addItem(this.topdict)
	};
	return n.prototype = Object.create(e.prototype), n.prototype.set = function(e, t) {
		this.topdict[e] = t
	}, n
}), define("SubroutineIndex", ["struct", "INDEX"], function(e, t) {
	var n = function(e) {
		t.call(this, e), this.setName("SubroutineIndex")
	};
	return n.prototype = Object.create(t.prototype), n
}), define("Charset", ["struct", "dataBuilding"], function(e, t) {
	var n = function(e, n) {
		var r = [];
		this.parse(n) || (n = n || {}, n.format = 0, n.letters = n.letters || [], this.fill(n), n.letters.forEach(function(n) {
			var i = e.getStringId(n),
				s = t.encoder.USHORT(i);
			r = r.concat(s)
		}), this.glyphs = r, this.setName("Charset"))
	};
	return n.prototype = new e("CFF charset", [
		["format", "BYTE", ""],
		["glyphs", "LITERAL", "actually a USHORT[]."]
	]), n
}), define("Encoding", ["struct", "dataBuilding"], function(e, t) {
	var n = function(e) {
		var t = [];
		if (!this.parse(e)) {
			e = e || {}, e.format = 0;
			var t = e.letters.map(function(e, t) {
				return t + 1
			});
			e.nCodes = t.length, e.codes = t, this.fill(e), this.setName("Encoding")
		}
	};
	return n.prototype = new e("CFF Encoding", [
		["format", "BYTE", "encoding format"],
		["nCodes", "BYTE", "..."],
		["codes", "LITERAL", ""]
	]), n
}), define("CharStringIndex", ["INDEX", "dataBuilding"], function(e, t) {
	var n = t.encoder.CHARARRAY,
		r = function(n, r) {
			var i = this;
			e.call(this), this.setName("CharStringIndex"), this.addItem(t.encoder.OPERAND(14)), n.forEach(function(e, r) {
				r < n.length - 1 && i.addItem(t.encoder.OPERAND(14))
			}), this.addItem(r), this.finalise()
		};
	return r.prototype = Object.create(e.prototype), r
}), define("PrivateDict", ["DICT"], function(e) {
	var t = function(t) {
		e.call(this, t), this.setName("PrivateDict")
	};
	return t.prototype = Object.create(e.prototype), t
}), define("tables/CFF_", ["struct", "dataBuilding", "asHex", "CFFHeader", "NameIndex", "StringIndex", "TopDictIndex", "SubroutineIndex", "Charset", "Encoding", "CharStringIndex", "PrivateDict"], function(e, t, n, r, i, s, o, u, a, f, l, c) {
	function h(e, t, n, r, i, s) {
		var o, u, a, f, l, c, h, p, d, v = s.sizeOf();
		l = c = h = p = -1, o = u = a = f = 0;
		while (o !== l && u !== c && a !== h && f !== p) l = o, c = u, h = a, p = f, d = e + t.sizeOf(), o = d, u = o + n.sizeOf(), a = u + r.sizeOf(), f = a + i.sizeOf(), t.set("charset", o), t.set("Encoding", u), t.set("CharStrings", a), t.set("Private", [v, f]), t.finalise()
	}
	var p = function(e) {
		if (!this.parse(e)) {
			e = e || {}, this.fill(e), this.header = new r({
				major: 1,
				minor: 0,
				offSize: 1
			});
			var t = new i([e.postscriptName]);
			this["name index"] = t;
			var n = new s([e.fontVersion, e.fontName, e.fontFamily].concat(e.letters));
			this["string index"] = n;
			var p = new u({
				count: 0
			});
			this["global subroutines"] = p;
			var d = new a(n, e);
			this.charset = d;
			var v = new f(e);
			this.encoding = v;
			var m = new l(e.letters, e.charString);
			this["charstring index"] = m;
			var g = new c({
				BlueValues: [0, 0],
				FamilyBlues: [0, 0],
				StdHW: 10,
				StdVW: 10,
				defaultWidthX: e.xMax,
				nominalWidthX: e.xMax
			});
			this["private dict"] = g;
			var y = new o({
				version: n.getStringId(e.fontVersion),
				FullName: n.getStringId(e.fontName),
				FamilyName: n.getStringId(e.fontFamily),
				Weight: 389,
				UniqueID: 1,
				FontBBox: [e.xMin, e.yMin, e.xMax, e.yMax],
				charset: 0,
				Encoding: 0,
				CharStrings: 0,
				Private: [0, 0]
			});
			this["top dict index"] = y;
			var b = this.header.sizeOf() + t.sizeOf() + n.sizeOf() + p.sizeOf();
			h(b, y, d, v, m, g)
		}
	};
	return p.prototype = new e("CFF ", [
		["header", "LITERAL", "the CFF header"],
		["name index", "LITERAL", "the name index for this font"],
		["top dict index", "LITERAL", "the global font dict"],
		["string index", "LITERAL", "the strings used in this font (there are 390 by-spec strings already)"],
		["global subroutines", "LITERAL", "the global subroutines that all charstrings can use"],
		["charset", "LITERAL", "the font's character set"],
		["encoding", "LITERAL", "the encoding information for this font"],
		["charstring index", "LITERAL", "the charstring definition for all encoded glyphs"],
		["private dict", "LITERAL", "the private dicts; each dict maps a partial font."]
	]), p
}), define("EncodingRecord", ["struct"], function(e) {
	var t = function(e) {
		this.parse(e) || (e = e || {}, this.fill(e))
	};
	return t.prototype = new e("EncodingRecord", [
		["platformID", "USHORT", "Platform ID"],
		["encodingID", "USHORT", "Platform-specific encoding ID"],
		["offset", "ULONG", "Byte offset from beginning of table to the subtable for this encoding"]
	]), t
}), define("format.0", ["struct"], function(e) {
	var t = function(e) {
		this.parse(e) || (e = e || {}, e.format = 0, this.fill(e))
	};
	return t.prototype = new e("cmap format 0", [
		["format", "USHORT", "subtable format"]
	]), t
}), define("format.2", ["struct"], function(e) {
	var t = function(e) {
		this.parse(e) || (e = e || {}, e.format = 2, this.fill(e))
	};
	return t.prototype = new e("cmap format 2", [
		["format", "USHORT", "subtable format"]
	]), t
}), define("Segment", ["struct"], function(e) {
	var t = function(e) {
		this.parse(e) || (e = e || {}, this.fill(e))
	};
	return t.prototype = new e("Segment", [
		["end", "USHORT", "end code for this segment"],
		["start", "USHORT", "start code for this segment"],
		["delta", "SHORT", "delta to ensure continuous sequence wrt previous segments"],
		["offset", "USHORT", "Offsets into glyphIdArray"],
		["glyphId", "USHORT", "Glyph index"]
	]), t
}), define("Segments", ["Segment", "dataBuilding"], function(e, t) {
	var n = t.encoder,
		r = n.USHORT(65535),
		i = function() {
			this.data = []
		};
	return i.prototype = {
		addSegment: function(t) {
			var n = this.data.length + 1;
			this.data.push(new e({
				end: t,
				start: t,
				delta: -(t - n),
				offset: 0,
				glyphId: n
			}))
		},
		finalise: function() {
			var t = new e({
				end: 65535,
				start: 65535,
				delta: 1,
				offset: 0
			});
			t.unset(["glyphId"]), this.data.push(t)
		}
	}, i
}), define("format.4", ["struct", "Segments"], function(e, t) {
	var n = function(e) {
		this.parse(e) || (e = e || {}, e.language = 0, this.fill(e), this.build(e))
	};
	return n.prototype = new e("cmap format 4", [
		["format", "USHORT", "format 4 subtable"],
		["length", "USHORT", "table length in bytes"],
		["language", "USHORT", "language"],
		["segCountX2", "USHORT", "2x segment count"],
		["searchRange", "USHORT", "search range: 2 * (2^floor(log2(segCount)))"],
		["entrySelector", "USHORT", "entry selector: log2(searchRange/2)"],
		["rangeShift", "USHORT", "range shift: 2x segment count - search range"],
		["endCount", "LITERAL", "the endcounts for each segment in this subtable"],
		["reservedPad", "PADDING2", "a 'reserve padding' value"],
		["startCount", "LITERAL", "the startcounts for each segment in this subtable"],
		["idDelta", "LITERAL", ""],
		["idRangeOffset", "LITERAL", ""],
		["glyphIdArray", "LITERAL", ""]
	]), n.prototype.build = function(e) {
		var n = new t,
			r = e.letters.map(function(e) {
				return e.charCodeAt(0)
			});
		r.forEach(function(e) {
			n.addSegment(e)
		}), n.finalise();
		var i = n.data.length;
		this.segCountX2 = i * 2, this.searchRange = 2 * Math.pow(2, Math.floor(Math.log(i) / Math.log(2))), this.entrySelector = Math.log(this.searchRange / 2) / Math.log(2), this.rangeShift = this.segCountX2 - this.searchRange;
		var s = [],
			o = [],
			u = [],
			a = [],
			f = [];
		n.data.forEach(function(e) {
			s = s.concat(e.values.end), o = o.concat(e.values.start), u = u.concat(e.values.delta), a = a.concat(e.values.offset), e.values.glyphId && (f = f.concat(e.values.glyphId))
		}), this.endCount = s, this.startCount = o, this.idDelta = u, this.idRangeOffset = a, this.glyphIdArray = f;
		var l = ["endCount", "startCount", "idDelta", "idRangeOffset", "glyphIdArray"];
		[s, o, u, a, f].forEach(function(e, t) {
			e.toData = function(n, r) {
				return r && (n = n || 0, r.addMapping(n, {
					name: "cmap format4:" + l[t],
					length: e.length
				})), e
			}, e.toJSON = function() {
				return {
					data: e.slice()
				}
			}, e.toString = function() {
				return JSON.stringify(e, !1, 2)
			}
		});
		var c = 16,
			h = s.length + o.length + u.length + a.length + f.length;
		this.length = c + h
	}, n
}), define("format.6", ["struct"], function(e) {
	var t = function(e) {
		this.parse(e) || (e = e || {}, e.format = 6, this.fill(e))
	};
	return t.prototype = new e("cmap format 6", [
		["format", "USHORT", "subtable format"]
	]), t
}), define("format.8", ["struct"], function(e) {
	var t = function(e) {
		this.parse(e) || (e = e || {}, e.format = 8, this.fill(e))
	};
	return t.prototype = new e("cmap format 8", [
		["format", "USHORT", "subtable format"]
	]), t
}), define("format.10", ["struct"], function(e) {
	var t = function(e) {
		this.parse(e) || (e = e || {}, e.format = 10, this.fill(e))
	};
	return t.prototype = new e("cmap format 10", [
		["format", "USHORT", "subtable format"]
	]), t
}), define("format.12", ["struct"], function(e) {
	var t = function(e) {
		this.parse(e) || (e = e || {}, e.format = 12, this.fill(e))
	};
	return t.prototype = new e("cmap format 12", [
		["format", "USHORT", "subtable format"]
	]), t
}), define("format.13", ["struct"], function(e) {
	var t = function(e) {
		this.parse(e) || (e = e || {}, e.format = 13, this.fill(e))
	};
	return t.prototype = new e("cmap format 13", [
		["format", "USHORT", "subtable format"]
	]), t
}), define("format.14", ["struct"], function(e) {
	var t = function(e) {
		this.parse(e) || (e = e || {}, e.format = 14, this.fill(e))
	};
	return t.prototype = new e("cmap format 14", [
		["format", "USHORT", "subtable format"]
	]), t
}), define("subtables", ["format.0", "format.2", "format.4", "format.6", "format.8", "format.10", "format.12", "format.13", "format.14"], function(e, t, n, r, i, s, o, u, a) {
	return {
		0: e,
		2: t,
		4: n,
		6: r,
		8: i,
		10: s,
		12: o,
		13: u,
		14: a
	}
}), define("tables/cmap", ["struct", "EncodingRecord", "subtables"], function(e, t, n) {
	var r = function(e) {
		this.tables = [], this.parse(e) || (e = e || {}, this.fill(e), this.numTables = 0)
	};
	return r.prototype = new e("cmap table", [
		["version", "USHORT", "cmap table version"],
		["numTables", "USHORT", "number of subtables"],
		["encodingRecords", "LITERAL", "array[numTables] of encoding records"],
		["subTables", "LITERAL", "the set of character map subtables"]
	]), r.prototype.addTable = function(e) {
		var t = new n[e.format](e);
		this.tables.push(t), this.numTables = this.numTables + 1
	}, r.prototype.finalise = function() {
		var e = [],
			n = 4 + this.numTables * 8;
		for (var r = 0; r < this.numTables; r++) e.push(new t({
			platformID: 3,
			encodingID: 1,
			offset: n
		})), n += this.tables[r].length;
		this.subTables = this.tables, this.encodingRecords = e
	}, r
}), define("tables/head", ["struct"], function(e) {
	var t = function(e) {
		this.parse(e) || (e = e || {}, e.version = e.version || 65536, e.fontRevision = e.fontRevision || 65536, e.checkSumAdjustment = e.checkSumAdjustment || 0, e.magicNumber = 1594834165, e.created = e.created || 0, e.modified = e.modified || 0, e.flags = e.flags || 0, e.macStyle = e.macStyle || 0, e.lowestRecPPEM = e.lowestRecPPEM || 8, e.fontDirectionHint = 2, e.indexToLocFormat = e.indexToLocFormat || 0, e.glyphDataFormat = e.glyphDataFormat || 0, this.fill(e))
	};
	return t.prototype = new e("head table", [
		["version", "FIXED", "table version (should be 0x00010000)"],
		["fontRevision", "FIXED", "font reversion number"],
		["checkSumAdjustment", "ULONG", "0xB1B0AFBA minus (ULONG sum of the entire font, computed with this value set to 0)"],
		["magicNumber", "ULONG", "OpenType magic number, used to verify this is, in fact, an OpenType font. Must be 0x5F0F3CF5"],
		["flags", "USHORT", "flags (see http://www.microsoft.com/typography/otspec/head.htm)"],
		["unitsPerEM", "USHORT", "how big is our quad, in font units"],
		["created", "LONGDATETIME", "date created (seconds since 1904. often mistakenly seconds since 1970)"],
		["modified", "LONGDATETIME", "date modified (seconds since 1904. often mistakenly seconds since 1970)"],
		["xMin", "SHORT", "global xMin"],
		["yMin", "SHORT", "global yMin"],
		["xMax", "SHORT", "global xMax"],
		["yMax", "SHORT", "global yMax"],
		["macStyle", "USHORT", "font style, according to old Apple mac rules"],
		["lowestRecPPEM", "USHORT", "smallest readable size in pixels."],
		["fontDirectionHint", "SHORT", "deprecated value (font direction hint). should be 0x0002"],
		["indexToLocFormat", "SHORT", "offset datatype (0 means SHORT, 1 means LONG)"],
		["glyphDataFormat", "SHORT", "glyph data format. default value = 0"]
	]), t
}), define("tables/hhea", ["struct"], function(e) {
	var t = function(e) {
		this.parse(e) || (e = e || {}, e.version = e.version || 65536, e.LineGap = e.LineGap || 0, e.minLeftSideBearing = e.minLeftSideBearing || 0, e.minRightSideBearing = e.minRightSideBearing || 0, e.caretSlopeRise = e.caretSlopeRise || 0, e.caretSlopeRun = e.caretSlopeRun || 0, e.caretOffset = e.caretOffset || 0, e.metricDataFormat = e.metricDataFormat || 0, this.fill(e))
	};
	return t.prototype = new e("hhea table", [
		["version", "FIXED", "Table version (must be 0x00010000"],
		["Ascender", "FWORD", "Typographic ascender"],
		["Descender", "FWORD", "Typographic descender"],
		["LineGap", "FWORD", "Typographic line gap"],
		["advanceWidthMax", "UFWORD", "Maximum advance width value in 'hmtx' table."],
		["minLeftSideBearing", "FWORD", "Minimum left sidebearing value in 'hmtx' table."],
		["minRightSideBearing", "FWORD", "Minimum right sidebearing value; calculated as Min(aw - lsb - (xMax - xMin))."],
		["xMaxExtent", "FWORD", "Max(lsb + (xMax - xMin))"],
		["caretSlopeRise", "SHORT", "Used to calculate the slope of the cursor (rise/run); 1 for vertical."],
		["caretSlopeRun", "SHORT", "0 for vertical."],
		["caretOffset", "SHORT", "The amount by which a slanted highlight on a glyph needs to be shifted to produce the best appearance. Set to 0 for non-slanted fonts"],
		["_reserved1", "PADDING2", "reserved; must be 0"],
		["_reserved2", "PADDING2", "reserved; must be 0"],
		["_reserved3", "PADDING2", "reserved; must be 0"],
		["_reserved4", "PADDING2", "reserved; must be 0"],
		["metricDataFormat", "SHORT", "metricDataFormat, 0 for current format"],
		["numberOfHMetrics", "USHORT", "number of hMetric entries."]
	]), t
}), define("LongHorMetric", ["struct"], function(e) {
	var t = function(e) {
		this.parse(e) || (e = e || {}, this.fill(e))
	};
	return t.prototype = new e("LongHorMetric", [
		["advanceWidth", "USHORT", ""],
		["lsb", "SHORT", ""]
	]), t
}), define("tables/hmtx", ["struct", "LongHorMetric"], function(e, t) {
	var n = function(e, t) {
		this.parse(e) || (this.fill({}), this.build(e, t))
	};
	return n.prototype = new e("hmtx table", [
		["hMetrics", "LITERAL", "the array of horizontal metrics for the glyphs in this font"]
	]), n.prototype.build = function(e, n) {
		var r = [];
		for (var i = 0; i < n - 1; i++) r.push(new t({
			advanceWidth: 0,
			lsb: 0
		}));
		r.push(new t({
			advanceWidth: e.xMax - e.xMin,
			lsb: e.xMin
		})), this.hMetrics = r
	}, n
}), define("tables/maxp", ["struct"], function(e) {
	var t = function(e) {
		if (!this.parse(e)) {
			e = e || {}, this.fill(e);
			if (e.version === 20480) {
				var t = ["version", "numGlyphs"],
					n = Object.keys(this.fields).filter(function(e) {
						return t.indexOf(e) === -1
					});
				this.unset(n)
			}
		}
	};
	return t.prototype = new e("maxp table", [
		["version", "FIXED", "table version. For CFF this must be 0.5, for TTF it must be 1.0"],
		["numGlyphs", "USHORT", "number of glyphs in the font"],
		["maxPoints", "USHORT", "Maximum points in a non-composite glyph"],
		["maxContours", "USHORT", "Maximum contours in a non-composite glyph"],
		["maxCompositePoints", "USHORT", "Maximum points in a composite glyph"],
		["maxCompositeContours", "USHORT", "Maximum contours in a composite glyph"],
		["maxZones", "USHORT", "1 if instructions do not use the twilight zone (Z0), or 2 if instructions do use Z0; should be set to 2 in most cases."],
		["maxTwilightPoints", "USHORT", "Maximum points used in Z0"],
		["maxStorage", "USHORT", "Number of Storage Area locations"],
		["maxFunctionDefs", "USHORT", "Number of FDEFs"],
		["maxInstructionDefs", "USHORT", "Number of IDEFs"],
		["maxStackElements", "USHORT", "Maximum stack depth (including Font and CVT programs, and glyph instructions"],
		["maxSizeOfInstructions", "USHORT", "Maximum byte count for glyph instructions"],
		["maxComponentElements", "USHORT", "Maximum number of components referenced at “top level” for any composite glyph."],
		["maxComponentDepth", "USHORT", "Maximum levels of recursion; 1 for simple components."]
	]), t
}), define("atou", [], function() {
	var e = String.fromCharCode(0);
	return function(r) {
		var i = r.split(""),
			s = [];
		return i.forEach(function(t) {
			s.push(e), s.push(t)
		}), s.join("")
	}
}), define("NameRecord", ["struct"], function(e) {
	var t = function(e) {
		this.parse(e) || (e = e || {}, this.fill(e))
	};
	return t.prototype = new e("NameRecord", [
		["platform", "USHORT", "which platform?"],
		["encoding", "USHORT", "which platform-specific encoding?"],
		["language", "USHORT", "which platform-specific language"],
		["recordID", "USHORT", "See the 'Name IDs' section on http://www.microsoft.com/typography/otspec/name.htm for details"],
		["length", "USHORT", "the length of this string"],
		["offset", "USHORT", "offset for this string in the string heap"]
	]), t
}), define("StringRecord", ["struct", "atou"], function(e, t) {
	var n = function(e) {
		this.parse(e) || (e = e || {}, this.fill(e))
	};
	return n.prototype = new e("StringRecord", [
		["string", "CHARARRAY", "The string to be encoded"]
	]), n
}), define("NameRecords", ["struct", "NameRecord", "StringRecord"], function(e, t, n) {
	var r = function(e) {
		this.records = [], this.strings = [], this.offset = 0, this.strings.toJSON = function() {
			return this.map(function(e) {
				return e.values.string.map(function(e) {
					return String.fromCharCode(e)
				}).join("")
			})
		}, this.parse(e) || (e = e || {}, this.fill(e))
	};
	return r.prototype = new e("NameRecords", [
		["Name Records", "LITERAL", "The list of name records for this font."],
		["Strings", "LITERAL", "The strings used by the preceding name records."]
	]), r.prototype.addRecord = function(e, r, i, s, o) {
		var u = r.length,
			a = new t({
				platform: i,
				encoding: s,
				language: o,
				recordID: e,
				length: u,
				offset: this.offset
			});
		this.records.push(a), this.strings.push(new n({
			string: r
		})), this.offset += u
	}, r.prototype.finalise = function() {
		this.records.sort(function(e, t) {
			var n = e.platform - t.platform;
			return n !== 0 ? n : e.recordID - t.recordID
		}), this["Name Records"] = this.records, this.Strings = this.strings
	}, r
}), define("tables/name", ["struct", "atou", "dataBuilding", "NameRecords"], function(e, t, n, r) {
	var i = function(e) {
		this.strings = {}, this.parse(e) || (e = e || {}, e.format = e.format || 0, this.fill(e), this.setStrings(e))
	};
	return i.prototype = new e("name table", [
		["format", "USHORT", "<name> table format"],
		["count", "USHORT", "Number of name records in this table"],
		["stringOffset", "OFFSET", "offset to the string data, relative to the table start"],
		["NameRecords", "LITERAL", "The name record metadata"],
		["StringData", "LITERAL", "The actual strings that describe this font"]
	]), i.prototype.buildDataStructure = function(e) {
		var n = new r,
			e = this.strings,
			i, s, o;
		return Object.keys(e).forEach(function(r) {
			o = parseInt(r, 10), i = e[r], n.addRecord(o, i, 1, 0, 0), s = t(i), n.addRecord(o, s, 3, 1, 1033)
		}), n.finalise(), {
			nameRecords: n.records,
			nameRecordLength: n.offset,
			nameStrings: n.strings
		}
	}, i.prototype.set = function(e, t) {
		t !== undefined ? this.strings["" + e] = t : delete this.strings["" + e]
	}, i.prototype.setStrings = function(e) {
		this.set(1, e.fontFamily), this.set(2, e.subFamily), e.minimal || (e.copyright !== undefined && this.set(0, e.copyright), e.identifier !== undefined && this.set(3, e.identifier), e.fontName !== undefined && this.set(4, e.fontName), e.fontVersion !== undefined && this.set(5, e.fontVersion), e.postscriptName !== undefined && this.set(6, e.postscriptName), e.trademark !== undefined && this.set(7, e.trademark), e.license !== undefined && this.set(13, e.license), this.set(19, "~")), this.finalise()
	}, i.prototype.finalise = function() {
		var e = this.buildDataStructure();
		this.count = e.nameRecords.length, this.NameRecords = e.nameRecords, this.StringData = e.nameStrings, this.stringOffset = this.offset("StringData")
	}, i
}), define("tables/OS_2", ["struct"], function(e) {
	var t = function(e) {
		this.parse(e) || (e = e || {}, e.xAvgCharWidth = e.xAvgCharWidth || 0, e.usWeightClass = e.usWeightClass || 400, e.usWidthClass = e.usWidthClass || 1, e.sFamilyClass = e.sFamilyClass || 0, e.fsType = e.fsType || 0, e.fsSelection = e.fsSelection || 64, e.ySubscriptXSize = e.ySubscriptXSize || 0, e.ySubscriptYSize = e.ySubscriptYSize || 0, e.ySubscriptXOffset = e.ySubscriptXOffset || 0, e.ySubscriptYOffset = e.ySubscriptYOffset || 0, e.ySuperscriptXSize = e.ySuperscriptXSize || 0, e.ySuperscriptYSize = e.ySuperscriptYSize || 0, e.ySuperscriptXOffset = e.ySuperscriptXOffset || 0, e.ySuperscriptYOffset = e.ySuperscriptYOffset || 0, e.yStrikeoutSize = e.yStrikeoutSize || 0, e.yStrikeoutPosition = e.yStrikeoutPosition || 0, e.bFamilyType = e.bFamilyType || 0, e.bSerifStyle = e.bSerifStyle || 0, e.bWeight = e.bWeight || 0, e.bProportion = e.bProportion || 0, e.bContrast = e.bContrast || 0, e.bStrokeVariation = e.bStrokeVariation || 0, e.bArmStyle = e.bArmStyle || 0, e.bLetterform = e.bLetterform || 0, e.bMidline = e.bMidline || 0, e.bXHeight = e.bXHeight || 0, e.ulUnicodeRange1 = e.ulUnicodeRange1 || 0, e.ulUnicodeRange2 = e.ulUnicodeRange2 || 0, e.ulUnicodeRange3 = e.ulUnicodeRange3 || 0, e.ulUnicodeRange4 = e.ulUnicodeRange4 || 0, e.ulCodePageRange1 = e.ulCodePageRange1 || 0, e.ulCodePageRange2 = e.ulCodePageRange2 || 0, e.sxHeight = e.sxHeight || 0, e.sCapHeight = e.sCapHeight || 0, e.usDefaultChar = e.usDefaultChar || 0, this.fill(e), e.version < 2 && this.unset(["sxHeight", "sCapHeight", "usDefaultChar", "usBreakChar", "usMaxContext"]))
	};
	return t.prototype = new e("OS/2 table", [
		["version", "USHORT", "OS/2 table version"],
		["xAvgCharWidth", "SHORT", "xAvgCharWidth"],
		["usWeightClass", "USHORT", "usWeightClass"],
		["usWidthClass", "USHORT", "usWidthClass"],
		["fsType", "USHORT", "this value defines embedding/install properties. 0 = no restrictions"],
		["ySubscriptXSize", "SHORT", ""],
		["ySubscriptYSize", "SHORT", ""],
		["ySubscriptXOffset", "SHORT", ""],
		["ySubscriptYOffset", "SHORT", ""],
		["ySuperscriptXSize", "SHORT", ""],
		["ySuperscriptYSize", "SHORT", ""],
		["ySuperscriptXOffset", "SHORT", ""],
		["ySuperscriptYOffset", "SHORT", ""],
		["yStrikeoutSize", "SHORT", ""],
		["yStrikeoutPosition", "SHORT", ""],
		["sFamilyClass", "SHORT", "a standard font has font classification 0 (meaning subfamily 'Regular')"],
		["bFamilyType", "BYTE", ""],
		["bSerifStyle", "BYTE", ""],
		["bWeight", "BYTE", ""],
		["bProportion", "BYTE", ""],
		["bContrast", "BYTE", ""],
		["bStrokeVariation", "BYTE", ""],
		["bArmStyle", "BYTE", ""],
		["bLetterform", "BYTE", ""],
		["bMidline", "BYTE", ""],
		["bXHeight", "BYTE", ""],
		["ulUnicodeRange1", "ULONG", ""],
		["ulUnicodeRange2", "ULONG", ""],
		["ulUnicodeRange3", "ULONG", ""],
		["ulUnicodeRange4", "ULONG", ""],
		["achVendID", "CHARARRAY", "vendor id (http://www.microsoft.com/typography/links/vendorlist.aspx for the 'real' list)"],
		["fsSelection", "USHORT", "font selection flag: bit 6 (lsb=0) is high, to indicate 'regular font'."],
		["usFirstCharIndex", "USHORT", "first character to be in this font."],
		["usLastCharIndex", "USHORT", "last character to be in this font."],
		["sTypoAscender", "SHORT", "typographic ascender"],
		["sTypoDescender", "SHORT", "typographic descender"],
		["sTypoLineGap", "SHORT", "line gap"],
		["usWinAscent", "USHORT", "usWinAscent"],
		["usWinDescent", "USHORT", "usWinDescent"],
		["ulCodePageRange1", "ULONG", ""],
		["ulCodePageRange2", "ULONG", ""],
		["sxHeight", "SHORT", ""],
		["sCapHeight", "SHORT", ""],
		["usDefaultChar", "USHORT", ""],
		["usBreakChar", "USHORT", ""],
		["usMaxContext", "USHORT", ""]
	]), t
}), define("tables/post", ["struct"], function(e) {
	var t = function(e) {
		this.parse(e) || (e = e || {}, e.version = e.version || 196608, e.italicAngle = e.italicAngle || 0, e.underlinePosition = e.underlinePosition || 0, e.underlineThickness = e.underlineThickness || 0, e.isFixedPitch = e.isFixedPitch || 1, e.minMemType42 = e.minMemType42 || 0, e.maxMemType42 = e.maxMemType42 || 0, e.minMemType1 = e.minMemType1 || 0, e.maxMemType1 = e.maxMemType1 || 0, this.fill(e))
	};
	return t.prototype = new e("post table", [
		["version", "FIXED", "post table format"],
		["italicAngle", "FIXED", ""],
		["underlinePosition", "FWORD", ""],
		["underlineThickness", "FWORD", ""],
		["isFixedPitch", "ULONG", ""],
		["minMemType42", "ULONG", ""],
		["maxMemType42", "ULONG", ""],
		["minMemType1", "ULONG", ""],
		["maxMemType1", "ULONG", ""]
	]), t
}), define("ScriptRecord", ["struct"], function(e) {
	var t = function(e) {
		this.parse(e) || (e = e || {}, e.ScriptTag = e.ScriptTag || "DFLT", this.fill(e))
	};
	return t.prototype = new e("ScriptRecord", [
		["ScriptTag", "CHARARRAY", "script name ('DFLT' for the default script)"],
		["Offset", "OFFSET", "Offset to the associated ScriptTable (offset from the start of the ScriptList)"]
	]), t
}), define("ScriptTable", ["struct"], function(e) {
	var t = function(e) {
		this.langsystables = [];
		if (!this.parse(e)) {
			e = e || {}, e.defaultLangSys = 4;
			var t = e.LangSysTables;
			delete e.LangSysTables, this.fill(e), t && (this.langsystables = t)
		}
	};
	return t.prototype = new e("ScriptTable", [
		["defaultLangSys", "OFFSET", "the langsys record to use in absence of a specific language, from start of script table"],
		["LangSysCount", "USHORT", "how many language systam tables are used?"],
		["LangSysTables", "LITERAL", "the collection of LangSys objects"]
	]), t.prototype.finalise = function(e) {
		this.LangSysCount = this.langsystables.length - 1;
		var t = [];
		this.langsystables.forEach(function(e, n) {
			e.finalise(), t.push(e)
		}), this.LangSysTables = t
	}, t
}), define("ScriptList", ["struct", "ScriptRecord", "ScriptTable"], function(e, t, n) {
	var r = function(e) {
		this.pairs = [], this.parse(e) || (e = e || {}, this.fill(e))
	};
	r.prototype = new e("ScriptList", [
		["ScriptCount", "USHORT", "Number of ScriptRecords"],
		["ScriptRecords", "LITERAL", "Array of ScriptRecords, listed alphabetically by ScriptTag"],
		["ScriptTables", "LITERAL", "The ScriptTables in this script list"]
	]), r.prototype.addScript = function(e) {
		var r = new t({
			ScriptTag: e.ScriptTag ? e.ScriptTag : "DFLT"
		});
		delete e.ScriptTag;
		var i = new n(e);
		return this.pairs.push({
			record: r,
			table: i,
			finalise: function(e, t) {
				this.table.finalise(), this.record.Offset = 2 + e * 6 + t
			}
		}), i
	};
	var i = function(e, t) {
		var n = function(e) {
				return e.toData()
			},
			r = function(e) {
				return e.map(n).join("")
			},
			i, s, o;
		for (var i = 0, u = e.length; i < u; i++) {
			s = r(e[i].langsystables), o = r(t.langsystables);
			if (s == o) return !0
		}
		return !1
	};
	return r.prototype.finalise = function() {
		var e = this.pairs.length;
		this.ScriptCount = e, this.pairs.sort(function(e, t) {
			return e.record.ScriptTag < t.record.ScriptTag ? -1 : 1
		});
		var t = [],
			n = [],
			r = 0,
			s = 0;
		this.pairs.forEach(function(o, u) {
			if (i(n, o.table)) {
				o.finalise(e, r), t.push(o.record);
				return
			}
			r = s, o.finalise(e, s), t.push(o.record), n.push(o.table), s += o.table.toData().length
		}), this.ScriptRecords = t, this.ScriptTables = n
	}, r
}), define("FeatureRecord", ["struct"], function(e) {
	var t = function(e) {
		this.parse(e) || (e = e || {}, this.fill(e))
	};
	return t.prototype = new e("FeatureRecord", [
		["FeatureTag", "CHARARRAY", "The feature name (4 characters)"],
		["Offset", "OFFSET", "Offset to Feature table, from beginning of FeatureList"]
	]), t
}), define("FeatureTable", ["struct", "dataBuilding"], function(e, t) {
	var n = function(e) {
		this.lookups = [], this.parse(e) || (e = e || {}, this.lookups = e.lookups, delete e.lookups, this.fill(e))
	};
	return n.prototype = new e("FeatureTable", [
		["FeatureParams", "PADDING2", "reserved"],
		["LookupCount", "USHORT", "The number of lookups used in this feature"],
		["LookupListIndex", "LITERAL", "USHORT[lookupcount] of indices in the lookup list"]
	]), n.prototype.finalise = function(e) {
		this.LookupCount = this.lookups.length;
		var n = [];
		this.lookups.forEach(function(e) {
			n = n.concat(t.encoder.OFFSET(e.lookupListIndex))
		}), this.LookupListIndex = n, this.featureListIndex = e
	}, n
}), define("FeatureList", ["struct", "FeatureRecord", "FeatureTable"], function(e, t, n) {
	var r = function(e) {
		this.pairs = [], this.parse(e) || (e = e || {}, this.fill(e))
	};
	return r.prototype = new e("FeatureList", [
		["FeatureCount", "USHORT", "Number of features in this feature list"],
		["FeatureRecords", "LITERAL", "Array of FeatureRecords; zero-based (first feature has FeatureIndex = 0), listed alphabetically by FeatureTag"],
		["FeatureTables", "LITERAL", "the list of feature tables"]
	]), r.prototype.addFeature = function(e) {
		var r = new t({
			FeatureTag: e.FeatureTag
		});
		delete e.FeatureTag;
		var i = new n(e);
		return this.pairs.push({
			record: r,
			table: i,
			finalise: function(e, t, n) {
				this.table.finalise(t), this.record.Offset = 2 + e * 6 + n
			}
		}), i
	}, r.prototype.finalise = function() {
		var e = this.pairs.length;
		this.FeatureCount = e, this.pairs.sort(function(e, t) {
			return e.record.FeatureTag < t.record.FeatureTag ? -1 : 1
		});
		var t = [],
			n = [],
			r = 0;
		this.pairs.forEach(function(i, s) {
			i.finalise(e, s, r), t.push(i.record), n.push(i.table), r += i.table.toData().length
		}), this.FeatureRecords = t, this.FeatureTables = n
	}, r
}), define("CoverageFormat", ["struct", "dataBuilding"], function(e, t) {
	var n = function(e) {
		this.parse(glyphs) || (e = {
			CoverageFormat: 1,
			GlyphCount: e.length,
			GlyphArray: function() {
				var n = [];
				e.forEach(function(e) {
					n = n.concat(t.encoder.GlyphID(e))
				})
			}()
		}, this.fill(e))
	};
	n.prototype = new e("Coverage format 1", [
		["CoverageFormat", "USHORT", "format 1"],
		["GlyphCount", "USHORT", "number of glyphs"],
		["GlyphArray", "LITERAL", "array of glyphs covered by this table"]
	]);
	var r = function(e) {
		this.parse(e) || (e = e || {}, e.CoverageFormat = 2, this.fill(e))
	};
	r.prototype = new e("RangeRecord", [
		["Start", "GlyphID", "First GlyphID in the range"],
		["End", "GlyphID", "Last GlyphID in the range"],
		["StartCoverageIndex", "USHORT", "Coverage Index of first GlyphID in range"]
	]);
	var i = function(e) {
		this.parse(e) || (e = {
			CoverageFormat: 2,
			RangeCount: e.length,
			RangeRecords: e.map(function(e, t) {
				return new r({
					Start: e,
					End: e,
					StartCoverageIndex: t
				})
			})
		}, this.fill(e))
	};
	return i.prototype = new e("Coverage format 2", [
		["CoverageFormat", "USHORT", "format 1"],
		["RangeCount", "USHORT", "number of ranges"],
		["RangeRecords", "LITERAL", "array of range records covered by this table"]
	]), {
		1: n,
		2: i
	}
}), define("LigatureTable", ["struct", "dataBuilding"], function(e, t) {
	var n = function(e) {
		this.parse(e) || (e = e || {}, e.Components = e.Components || [], e.CompCount = 1 + e.Components.length, this.fill(e))
	};
	return n.prototype = new e("LigatureTable", [
		["LigGlyph", "GlyphID", "our target 'to show' ligature glyph"],
		["CompCount", "USHORT", "Number of components (=glyphs) involved in this ligature"],
		["Components", "LITERAL", "GlyphID[compcount-1], list all the component glyphids in sequence, except for the first (which comes from the coverage table)"]
	]), n.prototype.finalise = function() {
		var e = [];
		this.Components.forEach(function(n) {
			e = e.concat(t.encoder.GlyphID(n))
		}), this.Components = e
	}, n
}), define("LigatureSet", ["struct", "dataBuilding", "LigatureTable"], function(e, t, n) {
	var r = function(e) {
		this.tables = [], this.parse(e) || (e = e || {}, this.LigatureCount = 0, this.fill(e))
	};
	return r.prototype = new e("LigatureSet", [
		["LigatureCount", "USHORT", "Number of Ligature tables in this set"],
		["LigatureOffsets", "LITERAL", "Array of USHORT offsets to Ligature tables, from beginning of the LigatureSet; assumed ordered by preference"],
		["Ligatures", "LITERAL", ""]
	]), r.prototype.addLigatureTable = function(e) {
		var t = new n(e);
		return this.tables.push(t), t
	}, r.prototype.finalise = function() {
		var e = [],
			n = [];
		this.LigatureCount = this.tables.length, this.tables.forEach(function(t) {
			n.push(e.length), t.finalise(), e.push(t)
		}), this.Ligatures = e, n = n.map(function(e) {
			return e + 2 + 2 * n.length
		});
		var r = [];
		n.forEach(function(e) {
			r = r.concat(t.encoder.USHORT(e))
		}), this.LigatureOffsets = r
	}, r
}), define("LookupType4", ["struct", "dataBuilding", "CoverageFormat", "LigatureSet"], function(e, t, n, r) {
	var i = function(e) {
		this.coveragetables = [], this.ligaturesets = [], this.parse(e) || (e = e || {}, e.SubstFormat = 1, this.fill(e))
	};
	return i.prototype = new e("GSUB Lookup type 4", [
		["SubstFormat", "USHORT", "lookup type 4 must be format 1"],
		["CoverageOffset", "OFFSET", "Offset to Coverage table, from beginning of Substitution table"],
		["LigSetCount", "USHORT", "Number of ligature sets"],
		["LigatureSetOffsets", "LITERAL", "Array of offsets to LigatureSet tables, from beginning of Substitution table; assumed ordered by Coverage Index"],
		["CoverageTables", "LITERAL", ""],
		["LigatureSetTables", "LITERAL", ""]
	]), i.prototype.addCoverage = function(e) {
		var t = 2,
			r = new n[t](e);
		return this.coveragetables.push(r), r
	}, i.prototype.addLigatureSet = function(e) {
		var t = new r(e);
		return this.ligaturesets.push(t), t
	}, i.prototype.finalise = function() {
		this.LigSetCount = this.ligaturesets.length, this.CoverageOffset = 6 + 2 * this.LigSetCount;
		var e = [];
		this.coveragetables.forEach(function(t) {
			e.push(t)
		}), this.CoverageTables = e;
		var n = this.CoverageOffset + e.toData().length,
			r = [],
			i = [];
		this.ligaturesets.forEach(function(e) {
			e.finalise(), i.push(e), r = r.concat(t.encoder.USHORT(n)), n += e.toData().length
		}), this.LigatureSetTables = i, this.LigatureSetOffsets = r
	}, i
}), define("lookups", ["LookupType4"], function(e) {
	return {
		4: e
	}
}), define("LookupTable", ["struct", "lookups", "dataBuilding"], function(e, t, n) {
	var r = function(e) {
		this.tables = [], this.parse(e) || (e = e || {}, e.LookupFlag = e.LookupFlag || 0, this.fill(e), (this.LookupFlag & 16) !== 16 && this.unset(["MarkFilteringSet"]))
	};
	return r.prototype = new e("LookupTable", [
		["LookupType", "USHORT", "defined in the GSUB and GPOS tables"],
		["LookupFlag", "USHORT", "lookup qualifiers (see 'LookupFlag bit enumeration' in the 'Common Table Formats' docs)"],
		["SubTableCount", "USHORT", "the number of subtables (=actual lookup objects) for this lookup"],
		["SubtableOffsets", "LITERAL", "Array of offsets to SubTables-from beginning of Lookup table"],
		["MarkFilteringSet", "USHORT", "Index (base 0) into GDEF mark glyph sets structure. This field is only present if bit UseMarkFilteringSet of lookup flags is set."],
		["SubTables", "LITERAL", "the array of subtables"]
	]), r.prototype.addSubTable = function(e) {
		var n = new t[this.LookupType](e);
		return this.tables.push(n), n
	}, r.prototype.finalise = function(e) {
		this.SubTableCount = this.tables.length;
		var t = [],
			r = [],
			i = 6 + this.tables.length * 2;
		this.tables.forEach(function(e) {
			e.finalise(), t.push(e), r = r.concat(n.encoder.USHORT(i)), i += e.toData().length
		}), this.SubtableOffsets = r, this.SubTables = t, this.lookupListIndex = e
	}, r
}), define("LookupList", ["struct", "LookupTable", "dataBuilding"], function(e, t, n) {
	var r = function(e) {
		this.tables = [], this.parse(e) || (e = e || {}, this.fill(e))
	};
	return r.prototype = new e("LookupList", [
		["LookupCount", "USHORT", "number of lookups in the list"],
		["LookupOffsets", "LITERAL", "Array of offsets to the Lookup tables, from beginning of LookupList"],
		["LookupTables", "LITERAL", "the list of lookups"]
	]), r.prototype.addLookup = function(e) {
		var n = new t(e);
		return this.tables.push(n), n
	}, r.prototype.finalise = function() {
		this.LookupCount = this.tables.length;
		var e = [],
			t = [],
			r = 2 + this.tables.length * 2;
		this.tables.forEach(function(i, s) {
			t = t.concat(n.encoder.USHORT(r)), i.finalise(s), e.push(i), r += i.toData().length
		}), this.LookupOffsets = t, this.LookupTables = e
	}, r
}), define("LangSysTable", ["struct", "dataBuilding"], function(e, t) {
	var n = function(e) {
		this.features = [];
		if (!this.parse(e)) {
			e = e || {}, e.ReqFeatureIndex = e.ReqFeatureIndex || 65535;
			var t = e.features;
			delete e.features, this.fill(e), t && (this.features = t, this.FeatureCount = t.length)
		}
	};
	return n.prototype = new e("LangSysTable", [
		["LookupOrder", "PADDING2", "reserved value. Because why not"],
		["ReqFeatureIndex", "USHORT", "the one required feature that must always be enabled, or 0xFFFF if there are none"],
		["FeatureCount", "USHORT", "Number of FeatureIndex values for this language system, excluding the required one"],
		["FeatureIndex", "LITERAL", "The indices of all the features that should be used, from the feature list (USHORT[featurecount])"]
	]), n.prototype.finalise = function() {
		var e = [];
		this.features.forEach(function(n, r) {
			e = e.concat(t.encoder.USHORT(r))
		}), this.FeatureIndex = e
	}, n
}), define("tables/GSUB", ["struct", "ScriptList", "FeatureList", "LookupList", "LangSysTable"], function(e, t, n, r, i) {
	var s = function(e) {
		this.scripts = new t, this.features = new n, this.lookups = new r, this.parse(e) || (e = e || {}, e.version = e.version || 65536, e.ScriptListOffset = 10, this.fill(e))
	};
	return s.prototype = new e("GSUB table", [
		["version", "FIXED", "Version of the GSUB table; initially set to 0x00010000"],
		["ScriptListOffset", "OFFSET", "Offset to ScriptList table, from beginning of GSUB table"],
		["FeatureListOffset", "OFFSET", "Offset to FeatureList table, from beginning of GSUB table"],
		["LookupListOffset", "OFFSET", "Offset to LookupList table, from beginning of GSUB table"],
		["ScriptList", "LITERAL", "the ScriptList object for this table"],
		["FeatureList", "LITERAL", "the FeatureList object for this table"],
		["LookupList", "LITERAL", "the LookupList object for this table"]
	]), s.prototype.addScript = function(e) {
		return this.scripts.addScript(e)
	}, s.prototype.addFeature = function(e) {
		return this.features.addFeature(e)
	}, s.prototype.addLookup = function(e) {
		return this.lookups.addLookup(e)
	}, s.prototype.makeLangSys = function(e) {
		return new i(e)
	}, s.prototype.finalise = function() {
		this.lookups.finalise(), this.LookupList = this.lookups, this.features.finalise(), this.FeatureList = this.features, this.scripts.finalise(), this.ScriptList = this.scripts, this.FeatureListOffset = this.ScriptListOffset + this.ScriptList.toData().length, this.LookupListOffset = this.FeatureListOffset + this.FeatureList.toData().length
	}, s
}), define("tables/GPOS", ["struct"], function(e) {
	var t = function(e) {
		this.parse(e) || (e = e || {}, this.fill(e))
	};
	return t.prototype = new e("GPOS table", []), t
}), define("tables/GDEF", ["struct"], function(e) {
	var t = function(e) {
		this.parse(e) || (e = e || {}, this.fill(e))
	};
	return t.prototype = new e("GDEF table", []), t
}), define("tables/JSTF", ["struct"], function(e) {
	var t = function(e) {
		this.parse(e) || (e = e || {}, this.fill(e))
	};
	return t.prototype = new e("JSTF table", []), t
}), define("tables/BASE", ["struct"], function(e) {
	var t = function(e) {
		this.parse(e) || (e = e || {}, this.fill(e))
	};
	return t.prototype = new e("BASE table", []), t
}), define("tables", ["tables/CFF_", "tables/cmap", "tables/head", "tables/hhea", "tables/hmtx", "tables/maxp", "tables/name", "tables/OS_2", "tables/post", "tables/GSUB", "tables/GPOS", "tables/GDEF", "tables/JSTF", "tables/BASE"], function(e, t, n, r, i, s, o, u, a, f, l, c, h, p) {
	return {
		CFF: e,
		cmap: t,
		head: n,
		hhea: r,
		hmtx: i,
		maxp: s,
		name: o,
		OS_2: u,
		post: a,
		GSUB: f,
		GPOS: l,
		GDEF: c,
		JSTF: h,
		BASE: p
	}
}), define("SFNTHeader", ["struct"], function(e) {
	return function(t) {
		var n = function(e) {
			this.parse(e) || (e = e || {}, this.fill(e))
		};
		return n.prototype = new e("SFNT header", [
			["version", t === "CFF" ? "CHARARRAY" : "FIXED", "either 0x0001000 for TTF, or 'OTTO' for CFF"],
			["numTables", "USHORT", "number of tables in this font"],
			["searchRange", "USHORT", "(Maximum power of 2 <= numTables) x 16"],
			["entrySelector", "USHORT", "Log2(maximum power of 2 <= numTables)"],
			["rangeShift", "USHORT", "NumTables x 16-searchRange"]
		]), n
	}
}), define("DirectoryEntry", ["struct"], function(e) {
	var t = function(e) {
		this.parse(e) || (e = e || {}, this.fill(e))
	};
	return t.prototype = new e("DirectoryEntry", [
		["tag", "CHARARRAY", "4-byte identifier"],
		["checkSum", "ULONG", "sum-as-ULONGs for this table"],
		["offset", "ULONG", "offset to this table from the beginning of the file"],
		["length", "ULONG", "length of the table (without padding) in bytes"]
	]), t
}), define("Mapper", [], function() {
	var e = function() {
		this.mappings = []
	};
	return e.prototype = {
		reset: function() {
			this.mappings = []
		},
		addMapping: function(t, n) {
			var r = {
				name: n.name || "",
				start: t,
				end: t + n.length,
				type: n.type || "",
				description: n.description || "",
				value: n.value !== undefined ? n.value instanceof Array ? "<structured>" : n.value : !1,
				structure: n.structure || !1
			};
			return this.mappings.push(r), r
		},
		find: function(e) {
			return this.mappings.filter(function(t) {
				return t.name === e
			})[0]
		},
		last: function() {
			return this.mappings[this.mappings.length - 1]
		},
		sort: function() {
			this.mappings.sort(function(e, t) {
				var n = e.start - t.start;
				return n === 0 ? t.end - e.end : n
			})
		}
	}, e
}), define("SFNT", ["dataBuilding", "tables", "SFNTHeader", "DirectoryEntry", "Mapper", "nodeBuilder"], function(e, t, n, r, i, s) {
	var o = n("CFF"),
		u = function(e) {
			this.stub = {
				BASE: t.BASE,
				"CFF ": t.CFF,
				GDEF: t.GDEF,
				GPOS: t.GPOS,
				GSUB: t.GSUB,
				JSTF: t.JSTF,
				"OS/2": t.OS_2,
				cmap: t.cmap,
				head: t.head,
				hhea: t.hhea,
				hmtx: t.hmtx,
				maxp: t.maxp,
				name: t.name,
				post: t.post
			}, this.header = new o, this.fontStructs = !1
		};
	return u.prototype = {
		toString: function() {
			return JSON.stringify(this.toJSON(), !1, 2)
		},
		toJSON: function() {
			var e = this,
				t = {};
			return Object.keys(this.stub).forEach(function(n) {
				e.stub[n].toJSON && (t[n] = e.stub[n].toJSON())
			}), t
		},
		toHTML: function() {
			this.fontStructs || this.toData();
			var e = this,
				t = s.create("div"),
				n = this.stub,
				r = this.fontStructs.directory,
				i;
			t.setAttribute("class", "SFNT"), t.appendChild(this.header.toHTML());
			var o = s.create("div");
			o.setAttribute("class", "Directory"), i = Object.keys(r), i.forEach(function(e) {
				o.appendChild(r[e].toHTML())
			}), t.appendChild(o);
			var u = s.create("div");
			return u.setAttribute("class", "Tables"), i = Object.keys(n), i.forEach(function(e) {
				n[e].toHTML && u.appendChild(n[e].toHTML())
			}), t.appendChild(u), t
		},
		toData: function() {
			var t = this,
				n = {},
				i = {};
			Object.keys(this.stub).forEach(function(s) {
				if (t.stub[s].toData) {
					var o = new r;
					n[s] = o, o.tag = s, i[s] = t.stub[s].toData(), o.length = i[s].length;
					while (i[s].length % 4 !== 0) i[s].push(0);
					o.checkSum = e.computeChecksum(i[s])
				}
			});
			var s = this.header;
			s.version = "OTTO";
			var o = function(e) {
					return Math.log(e) / Math.log(2) | 0
				},
				u = Object.keys(n).length;
			s.numTables = u;
			var a = Math.pow(2, o(u)),
				f = 16 * a;
			s.searchRange = f, s.entrySelector = o(a), s.rangeShift = u * 16 - f;
			var l = s.toData(),
				c = Object.keys(n).sort(),
				h = {},
				p = l.length + s.numTables * 16,
				d = [],
				v = function(t) {
					var n = ["head", "hhea", "maxp", "OS/2", "name", "cmap", "post", "CFF "],
						r = t.filter(function(e) {
							return n.indexOf(e) === -1
						}),
						i = n.concat(r);
					return i
				}(c);
			v.forEach(function(e) {
				i[e] && (h[e] = p + d.length, d = d.concat(i[e]))
			});
			var m = [];
			c.forEach(function(e) {
				n[e] && (n[e].offset = h[e], m = m.concat(n[e].toData()))
			});
			var g = l.concat(m).concat(d),
				y = e.computeChecksum(g),
				b = 2981146554 - y;
			return this.stub.head.checkSumAdjustment = b, this.fontStructs = {
				header: s,
				directoryOrder: c,
				directory: n,
				tableOrder: v
			}, g.slice(0, h.head + 8).concat(e.encoder.ULONG(b)).concat(g.slice(h.head + 12))
		},
		getMapper: function() {
			if (this.fontStructs === !1) return !1;
			var e = new i,
				t = this,
				n = 0,
				r = 0;
			return this.fontStructs.header.toData(n, e), n = e.last().end, e.addMapping(r, {
				name: "SFNT header",
				length: n - r,
				structure: t.fontStructs.header.toJSON()
			}), this.fontStructs.directoryOrder.forEach(function(i) {
				r = n, t.fontStructs.directory[i].toData(n, e), n = e.last().end, e.addMapping(r, {
					name: i + " directory",
					length: n - r,
					structure: t.fontStructs.directory[i].toJSON()
				})
			}), this.fontStructs.tableOrder.forEach(function(i) {
				r = n, t.stub[i].toData(n, e), n = e.last().end, e.addMapping(r, {
					name: i + " table",
					length: n - r,
					structure: t.stub[i].toJSON()
				});
				while (n % 4 !== 0) n++
			}), e.sort(), e
		}
	}, u
}), define("convertOutline", ["dataBuilding"], function(e) {
	var t = e.encoder.NUMBER,
		n = e.encoder.OPERAND;
	return function(r) {
		var i = r.outline,
			s = i.match(/[MmLlCcZz]\s*([\-\d]+\s*)*/g).map(function(e) {
				return e.trim()
			}),
			o = 99999999,
			u = -99999999,
			a = o,
			f = u,
			l = 0,
			c = 0,
			h = !1,
			p = !1,
			d = 0,
			v = 0,
			m = [],
			g = !1,
			y = function(e, t) {
				e < o && (o = e), t < a && (a = t), e > u && (u = e), t > f && (f = t)
			};
		s.forEach(function(e) {
			var r = e.substring(0, 1),
				i = e.substring(1).trim().split(/\s+/).map(function(e) {
					return parseInt(e)
				});
			if (r === r.toUpperCase()) {
				r = r.toLowerCase();
				if (r === "m") i[0] -= l, l += i[0], i[1] -= c, c += i[1], y(l, c);
				else if (r === "l")
					for (d = 0, v = i.length; d < v; d += 2) i[d + 0] -= l, l += i[d + 0], i[d + 1] -= c, c += i[d + 1], y(l, c);
				else if (r === "c")
					for (d = 0, v = i.length; d < v; d += 6) h = l + i[d + 2], p = c + i[d + 3], i[d + 0] -= l, i[d + 1] -= c, i[d + 2] -= l, i[d + 3] -= c, i[d + 4] -= l, l += i[d + 4], i[d + 5] -= c, c += i[d + 5], y(l, c)
			}
			if (r === "m") m = m.concat(t(i[0]).concat(t(i[1])).concat(n(21)));
			else if (r === "l")
				for (d = 0, v = i.length; d < v; d += 2) m = m.concat(t(i[d]).concat(t(i[d + 1])).concat(n(5)));
			else if (r === "c")
				for (d = 0, v = i.length; d < v; d += 6) m = m.concat(t(i[d + 0]).concat(t(i[d + 1])).concat(t(i[d + 2])).concat(t(i[d + 3])).concat(t(i[d + 4])).concat(t(i[d + 5])).concat(n(8)));
			else {
				if (r !== "z") throw "op " + r + " not supported at this time.";
				m = m.concat(n(14)), g = !0
			}
		}), g || (m = m.concat(n(14))), r.xMin = o, r.yMin = a, r.xMax = u, r.yMax = f, u != r.xMax && (m = t(r.xMax - u).concat(m)), r.charString = m
	}
}), define("formGlobals", ["convertOutline"], function(e) {
	return function(t) {
		var n = "~".charCodeAt(0),
			r = {
				outline: t.outline || "",
				vendorId: " =) ",
				fontFamily: t.fontFamily || "Custom",
				subFamily: t.subFamily || "Regular",
				fontName: t.fontName || "Custom Glyph Font",
				postscriptName: t.postscriptName || "customfont",
				fontVersion: t.fontVersion || "Version 1.0",
				copyright: t.copyright || "License-free",
				trademark: t.trademark || "Trademark-free",
				license: t.license || "License-free",
				glyphName: t.glyphName || "~",
				glyphCode: n,
				quadSize: t.quadSize || 1024,
				label: t.label || !1,
				identifier: t.identifier || "-",
				minimal: t.minimal !== "undefined" ? t.minimal : !1,
				compliant: t.compliant !== "undefined" ? t.compliant : !0,
				letters: function(e, t) {
					var n = ["~"];
					return e.label && (n = [], e.label.split("").forEach(function(e) {
						n.indexOf(e) === -1 && n.push(e)
					}), n.push(String.fromCharCode(t)), n.sort()), n
				}(t, n)
			};
		return e(r), r
	}
}), define("asChars", [], function() {
	return function(t) {
		return String.fromCharCode(t)
	}
}), define("asGlyphIDs", ["dataBuilding"], function(e) {
	var t = e.encoder.GlyphID;
	return function(n) {
		return t(n.charCodeAt(0))
	}
}), define("addLabelSubstitution", [], function() {
	return function(t, n) {
		var r = n.letters.slice();
		r.splice(0, 1), r.splice(r.length - 1, 1);
		var i = t.GSUB.addLookup({
				LookupType: 4
			}),
			s = i.addSubTable();
		s.addCoverage([n.letters.indexOf(n.label[0]) + 1]);
		var o = s.addLigatureSet(),
			u = o.addLigatureTable({
				LigGlyph: n.letters.length,
				Components: n.label.split("").slice(1).map(function(e) {
					return n.letters.indexOf(e) + 1
				})
			}),
			a = t.GSUB.addFeature({
				FeatureTag: "liga",
				lookups: [i]
			}),
			f = t.GSUB.makeLangSys({
				features: [a]
			});
		t.GSUB.addScript({
			ScriptTag: "DFLT",
			LangSysTables: [f]
		}), t.GSUB.addScript({
			ScriptTag: "latn",
			LangSysTables: [f]
		}), t.GSUB.finalise()
	}
}), define("builder", ["SFNT", "formGlobals", "asChars", "asGlyphIDs", "addLabelSubstitution"], function(e, t, n, r, i) {
	return {
		build: function(n) {
			var r = new e,
				s = r.stub,
				o = t(n);
			return s.head = new s.head({
				unitsPerEM: o.quadSize,
				xMin: o.xMin,
				yMin: o.yMin,
				xMax: o.xMax,
				yMax: o.yMax
			}), s.hhea = new s.hhea({
				Ascender: o.quadSize + o.yMin,
				Descender: -(o.quadSize - o.yMax),
				advanceWidthMax: o.xMax - o.xMin,
				xMaxExtent: o.xMax - o.xMin,
				numberOfHMetrics: o.letters ? 1 + o.letters.length : 2
			}), s.hmtx = new s.hmtx(o, s.hhea.numberOfHMetrics), s.maxp = new s.maxp({
				version: 20480,
				numGlyphs: o.letters ? 1 + o.letters.length : 2
			}), s.name = new s.name(o), s["OS/2"] = new s["OS/2"]({
				version: 3,
				ulUnicodeRange1: 1,
				achVendID: o.vendorId,
				usFirstCharIndex: o.label ? o.letters[0].charCodeAt(0) : o.glyphCode,
				usLastCharIndex: o.glyphCode,
				sTypoAscender: o.yMax,
				sTypoDescender: o.yMin,
				sTypoLineGap: o.quadSize - o.yMax + o.yMin,
				usWinAscent: o.quadSize + o.yMin,
				usWinDescent: o.quadSize - o.yMax,
				ulCodePageRange1: 1,
				usBreakChar: o.glyphCode,
				usMaxContext: o.label !== !1 ? o.label.length : 0
			}), s.post = new s.post, s.cmap = new s.cmap({
				version: 0
			}), s.cmap.addTable({
				format: 4,
				letters: o.letters
			}), s.cmap.finalise(), s["CFF "] = new s["CFF "](o), o.label && (s.GSUB = new s.GSUB(o), i(s, o)), r
		}
	}
}), define("toWOFF", ["struct", "dataBuilding"], function(e, t) {
	return function(r) {
		var i = r.toData(),
			s = r.header.numTables,
			o = function(e) {
				this.parse(e) || (e = e || {}, e.signature = "wOFF", e.majorVersion = 1, e.minorVersion = 0, e.metaOffset = 0, e.metaLength = 0, e.metaOrigLength = 0, e.privOffset = 0, e.privLength = 0, e.length = 0, this.fill(e))
			};
		o.prototype = new e("wOFF format", [
			["signature", "CHARARRAY", "this has to be the string 'wOFF'..."],
			["flavour", "CHARARRAY", "The sfnt version of the wrapped font"],
			["length", "ULONG", "Total size of the WOFF file (placeholder, we compute this later)."],
			["numTables", "USHORT", "Number of entries in the directory of font tables."],
			["reserved", "PADDING2", "this must be set to zero"],
			["totalSfntSize", "ULONG", "Total size needed for the uncompressed original font"],
			["majorVersion", "USHORT", "Major version of the WOFF file (1 in this case)."],
			["minorVersion", "USHORT", "Minor version of the WOFF file (0 in this case)."],
			["metaOffset", "ULONG", "Offset to metadata block, from beginning of WOFF file. We don't use one"],
			["metaLength", "ULONG", "Length of compressed metadata block. This is obviously 0"],
			["metaOrigLength", "ULONG", "Uncompressed size of metadata block. Also 0, of course."],
			["privOffset", "ULONG", "Offset to private data block, from beginning of WOFF file. We don't use one"],
			["privLength", "ULONG", "Length of private data block. Also obviously 0"]
		]);
		var u = new o({
				flavour: "OTTO",
				numTables: s,
				totalSfntSize: i.length
			}),
			a = [],
			f = [],
			l = u.length + s * 20,
			c, h = function(e) {
				this.parse(e) || (e = e || {}, this.fill(e))
			};
		h.prototype = new e("wOFF dictionary entry", [
			["tag", "LITERAL", "tag name"],
			["offset", "ULONG", "Offset to the data, from beginning of WOFF file"],
			["compLength", "LITERAL", "length of the compressed data table"],
			["origLength", "LITERAL", "length of the original uncompressed data table"],
			["origChecksum", "LITERAL", "orginal table checksum"]
		]);
		for (var p = 0, d = s, v, m; p < d; p++) {
			v = i.slice(12 + p * 16, 12 + (p + 1) * 16);
			var m = new h({
				tag: v.slice(0, 4),
				offset: l + f.length,
				compLength: v.slice(12, 16),
				origLength: v.slice(12, 16),
				origChecksum: v.slice(4, 8)
			});
			a = a.concat(m.toData());
			var g = t.decodeULONG(v.slice(8, 12)),
				y = t.decodeULONG(v.slice(12, 16)),
				b = i.slice(g, g + y);
			f = f.concat(b);
			while (f.length % 4 !== 0) f.push(0)
		}
		return c = u.toData().concat(a).concat(f), u.length = c.length, u.toData().concat(a).concat(f)
	}
}), define("buildTables", ["toWOFF", "asHex", "asChars"], function(e, t, n) {
	return function(i, s, o, u, a, f, l) {
		function p(e, t) {
			t = t || 16;
			var n = 0,
				r = h("table"),
				i = h("tr"),
				s = h("th");
			s.style.border = "none", i.appendChild(s);
			for (var o = 0; o < t; o++) {
				var u = h("th");
				u.innerHTML = o.toString(16).toUpperCase(), i.appendChild(u)
			}
			r.appendChild(i);
			for (var o = 0, a = e.length; o * t < a; o++) {
				var f = h("tr"),
					l = h("td");
				l.innerHTML = "0x" + (o * 16 | 0).toString(16).toUpperCase(), l.style.background = "rgba(100,180,220,0.3)", l.style.textAlign = "right", f.appendChild(l);
				var c = e.slice(t * o, t * (o + 1)),
					p = function(e, t) {
						var r = h("td");
						r.classList.add("b"), e !== "—" && r.classList.add("p" + t), r.classList.add("c" + n++), r.innerHTML = e, f.appendChild(r)
					};
				for (var d = 0, v = Math.min(c.length, t); d < v; d++) p(c[d], d + t * o);
				var m = 16 - c.length;
				m > 0 && (new Array(m + 1)).join("—").split("").forEach(p), r.appendChild(f)
			}
			var g = h("tr"),
				s = h("th");
			s.style.border = "none", g.appendChild(s);
			for (var o = 0; o < t; o++) {
				var u = h("th");
				u.innerHTML = o.toString(16).toUpperCase(), g.appendChild(u)
			}
			return r.appendChild(g), r
		}

		function d(t, r, i, s, o) {
			c.classList.add("tables"), f || c.appendChild(p(r)), l || c.appendChild(p(i));
			if (s) {
				var u = h("div");
				u.classList.add("downloads");
				var a = h("span");
				a.innerHTML = s, u.appendChild(a);
				if (o) {
					var d = h("a");
					d.innerHTML = "download as opentype font", d.download = "customfont.otf", d.href = "data:application/octet-stream;base64," + btoa(i.join("")), u.appendChild(d), d = h("a"), d.innerHTML = "download as WOFF version", d.download = "customfont.woff", d.href = "data:application/octet-stream;base64," + btoa(e(t).map(n).join("")), u.appendChild(d)
				}
				c.appendChild(u)
			}
		}
		var c = document.querySelector(o),
			h = function(e) {
				return document.createElement(e)
			},
			v = i.toData(),
			m = v.map(t),
			g = v.map(n);
		d(i, m, g, u, a)
	}
}), define("addStyleSheet", ["asChars", "toWOFF"], function(e, t) {
	return function(r, i, s) {
		i = i || "custom font";
		var o = "font/opentype",
			u = "data:" + o + ";base64," + btoa(r.toData().map(e).join("")),
			a = "application/font-woff",
			f = "data:" + a + ";base64," + btoa(t(r).map(e).join("")),
			l = ["@font-face {\n  font-family: '" + i + "';", "  src: url('" + u + "') format('opentype'),", "       url('" + f + "') format('woff');", "}"].join("\n"),
			c = ["", "." + s + " {", "  font-family: '" + i + "';", "  -webkit-font-feature-settings: 'liga';", "  -moz-font-feature-settings: 'liga=1';", "  -moz-font-feature-settings: 'liga';", "  -ms-font-feature-settings: 'liga' 1;", "  -o-font-feature-settings: 'liga';", "  font-feature-settings: 'liga';", "}"].join("\n");
		l += c;
		var h = document.createElement("style");
		h.innerHTML = l, document.head.appendChild(h)
	}
}), define("getColor", [], function() {
	function n(e, t, n) {
		return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
	}

	function r(e) {
		return e = (255 * e | 0).toString(16), e.length === 1 && (e = "0" + e), e
	}

	function i(i) {
		var s = i / 10,
			o = t < .5 ? t * (1 + e) : t + e - t * e,
			u = 2 * t - o,
			a = n(u, o, s + 1 / 3),
			f = n(u, o, s),
			c = n(u, o, s - 1 / 3);
		return "#" + r(a) + r(f) + r(c)
	}
	var e = .8,
		t = .8,
		s = [];
	for (var o = 0; o < 255; o++) s.push(i(o));
	return s
}), define("addMappings", ["getColor"], function(e) {
	function t(e, t) {
		var n = [];
		for (var r = e.start - t, i = e.end - t; r < i; r++) n.push(".c" + r);
		return n.join(",")
	}
	var n = !1,
		r = function(t, n, r) {
			t.style.background = e[r];
			var i = n.name.replace(/\.+/g, ".").replace(/\.\[/g, "["),
				s = n.value;
			s && s.replace && (s = s.replace(/\u0000/g, " 0x00 "));
			var o = n.description,
				u = n.start + "-" + (n.end - 1),
				a = n.start.toString(16).toUpperCase() + "-" + (n.end - 1).toString(16).toUpperCase();
			t.title = ["field name: " + i, o ? "explanation: " + o : "", s !== undefined ? "value: " + s : "", "hex position: " + a, "dec position: " + u].join("\n")
		},
		i = function(e) {
			e.setAttribute("data-background", e.style.background)
		},
		s = function(e, t) {
			e.style.background = e.getAttribute("data-background"), e.removeAttribute("title")
		},
		o = function(e) {
			e.eventListeners || (e.eventListeners = {
				evtNames: [],
				add: function(t, n) {
					if (!this[t]) {
						var r = [];
						r.first = function() {
							return this[0]
						}, r.last = function() {
							return this[this.length - 1]
						}, this[t] = r, this.evtNames.push(t)
					}
					e.addEventListener(t, n, !1), this[t].push(n)
				},
				remove: function(t, n) {
					e.removeEventListener(t, n, !1), this[t].splice(this[t].indexOf(n), 1), this[t].length === 0 && this.evtNames.splice(this.evtNames.indexOf(t), 1)
				},
				cleanup: function() {
					var t = this;
					["mouseover", "mouseout"].forEach(function(n) {
						var r = t[n];
						r.sort(function(e, t) {
							return e = e.mapping, t = t.mapping, t.end - t.start - (e.end - e.start)
						});
						if (r.length > 2) {
							var i = r.first(),
								s = r.last(),
								o, u;
							for (o = r.length - 2; o > 0; o--) u = r[o], e.removeEventListener(n, u), r.splice(o, 1)
						}
					})
				}
			}, e.simulateEvent = function(t) {
				var n = e.eventListeners[t] || [];
				n.forEach(function(e) {
					e()
				})
			})
		},
		u = function(e, t, n) {
			o(t), i(t);
			var u = function f(t) {
				for (var i = 0, s = e.length; i < s; i++) r(e[i], n, f.idx)
			};
			u.mapping = n, t.eventListeners.add("mouseover", u), u.idx = t.eventListeners.mouseover.indexOf(u);
			var a = function(n) {
				e.forEach(function(e) {
					s(e)
				})
			};
			a.mapping = n, t.eventListeners.add("mouseout", a)
		};
	return function(n, r, i) {
		i = typeof i == "undefined" ? 0 : i, n = typeof n == "string" ? document.querySelector(n) : n, r.forEach(function(e) {
			var r = t(e, i);
			if (r) {
				var s = n.querySelectorAll(r),
					o = Array.prototype.slice.call(s),
					a = function(t) {
						u(o, t, e)
					};
				o.forEach(a)
			}
		})
	}
}), require(["builder", "buildTables", "addStyleSheet", "addMappings","convertOutline"], function(e, t, n, r) {
	svglist=[]
	codepointlist=[]
	charnamelist=[]
	$('.codebutton').each(function(i, obj) {
		paleo=paleoCodageToSVG($(this).text());
		console.log(paleo)
		svglist.push(paleo)
	});
	$('.codepoint').each(function(i, obj) {
		codepointlist.push($(this).text())
	});
	$('.transliteration').each(function(i, obj) {
		charnamelist.push($(this).text())
	});
	console.log(svglist)
	console.log(codepointlist)
	console.log(charnamelist)
	s = "M -102 675 L 122 675 L 10 460 M 10 0 L 10 450 M 47 825 L 272 825 L 160 610 M 160 150 L 160 600 M 197 825 L 422 825 L 310 610 M 310 150 L 310 600 M 347 825 L 572 825 L 460 610 M 460 150 L 460 600";
	s = s.replace(/\s+/g, " ")
	var o = {
			outline: s,
			label: "custom",
			minimal: !1
		},
		u = e.build(o);
	for(svg in svglist){
		s=svglist[svg].replace(/\s+/g, " ")
		console.log("SVG: "+u.getMapper().convertOutline(s))
	}

	var i = -120,
		s = "M -102 675 L 122 675 L 10 460 M 10 0 L 10 450 M 47 825 L 272 825 L 160 610 M 160 150 L 160 600 M 197 825 L 422 825 L 310 610 M 310 150 L 310 600 M 347 825 L 572 825 L 460 610 M 460 150 L 460 600";
	s = s.replace(/\s+/g, " "), document.getElementById("svg").innerHTML = s;
	var o = {
			outline: s,
			label: "custom",
			minimal: !1
		},
		u = e.build(o);
	n(u, "customfont", "custom");
	var a = u.getMapper(),
		f = !0;
	t(u, window, "#tables", "The byte layout views for our small, custom font.", f), r("#tables", a.mappings), t(u.stub["CFF "], window, "#CFF-table", "The byte layout views for our CFF table, specifically."), r("#CFF-table", a.mappings, a.find("CFF  table").start), t(u.stub["CFF "].header, window, "#cffheader", !1, !1, !1, !0), t(u.stub["CFF "]["name index"], window, "#cffname", !1, !1, !1, !0), t(u.stub["CFF "]["top dict index"], window, "#cfftopdict", !1, !1, !1, !0), t(u.stub["CFF "]["string index"], window, "#cffstring", !1, !1, !1, !0), t(u.stub["CFF "]["global subroutines"], window, "#cffgsubr", !1, !1, !1, !0), t(u.stub["CFF "].charset, window, "#cffcharset", !1, !1, !1, !0), t(u.stub["CFF "].encoding, window, "#cffencoding", !1, !1, !1, !0), t(u.stub["CFF "]["charstring index"], window, "#cffcharstring", !1, !1, !1, !0), t(u.stub["CFF "]["private dict"], window, "#cffprivate", !1, !1, !1, !0);
	var l = u.toHTML();
	document.getElementById("sfntstructure").appendChild(l)
}), define("main", function() {});
