DeltaruneSaveRead = function(){
	this.ptToSaveslot = function(pt, ss) {
			var lpt = pt.trim().split('\n');
			console.log(lpt)
			ss.truename = lpt[0];
			var i = 1
			while (true) {
				if (i < 6) {
					ss.othername[i] = lpt[i]
					i += 1
					continue
				}
				break
			}
			i += 1
			ss.char[0] = lpt[i]
			i += 1
			ss.char[1] = lpt[i]
			i += 1
			ss.char[2] = lpt[i]
			i += 1
			ss.gold = lpt[i]
			i += 1
			ss.xp = lpt[i]
			i += 1
			ss.lv = lpt[i]
			i += 1
			ss.inv = lpt[i]
			i += 1
			ss.invc = lpt[i]
			i += 1
			ss.darkzone = lpt[i]
			i += 1
			var tmpi_chr = i;
			while (true) {
				if (i < tmpi_chr + 4) {
					ss.hp[i] = lpt[i]
					i += 1
					ss.maxhp[i] = lpt[i]
					i += 1
					ss.at[i] = lpt[i]
					i += 1
					ss.df[i] = lpt[i]
					i += 1
					ss.mag[i] = lpt[i]
					i += 1
					ss.guts[i] = lpt[i]
					i += 1
					ss.charweapon[i] = lpt[i]
					i += 1
					ss.chararmor1[i] = lpt[i]
					i += 1
					ss.chararmor2[i] = lpt[i]
					i += 1
					ss.weaponstyle[i] = lpt[i]
					i += 1
					q = 0
					while (true) {
						if (q < 4) {
							console.log(i)
							console.log(q)
							ss.itemat[i][q] = lpt[i]
							i += 1
							ss.itemdf[i][q] = lpt[i]
							i += 1
							ss.itemmag[i][q] = lpt[i]
							i += 1
							ss.itembolts[i][q] = lpt[i]
							i += 1
							ss.itemgrazeamt[i][q] = lpt[i]
							i += 1
							ss.itemgrazesize[i][q] = lpt[i]
							i += 1
							ss.itemboltspeed[i][q] = lpt[i]
							i += 1
							ss.itemspecial[i][q] = lpt[i]
							i += 1
							q = (q + 1)
							continue
						}
						break
					}
					var j = 0
					while (true) {
						if (j < 12) {
							ss.spell[i][j] = lpt[i]
							i += 1
							j = (j + 1)
							continue
						}
						break
					}

					continue
				}
				break
			}
			ss.boltspeed = lpt[i]
			i += 1
			ss.grazeamt = lpt[i]
			i += 1
			ss.grazesize = lpt[i]
			i += 1
			j = 0
			while (true) {
				if (j < 13) {
					ss.item[j] = lpt[i]
					i += 1
					ss.keyitem[j] = lpt[i]
					i += 1
					ss.weapon[j] = lpt[i]
					i += 1
					ss.armor[j] = lpt[i]
					i += 1
					j = (j + 1)
					continue
				}
				break
			}
			ss.tension = lpt[i]
			i += 1
			ss.maxtension = lpt[i]
			i += 1
			ss.lweapon = lpt[i]
			i += 1
			ss.larmor = lpt[i]
			i += 1
			ss.lxp = lpt[i]
			i += 1
			ss.llv = lpt[i]
			i += 1
			ss.lgold = lpt[i]
			i += 1
			ss.lhp = lpt[i]
			i += 1
			ss.lmaxhp = lpt[i]
			i += 1
			ss.lat = lpt[i]
			i += 1
			ss.ldf = lpt[i]
			i += 1
			ss.lwstrength = lpt[i]
			i += 1
			ss.ladef = lpt[i]
			i += 1
			var tmpi2 = i;
			while (true) {
				if (i < tmpi2 + 8) {
					ss.litem[i] = lpt[i]
					i += 1
					ss.phone[i] = lpt[i]
					i += 1

					continue
				}
				break
			}
			tmpi3 = i
			while (true) {
				if (i < tmpi3 + 9999) {
					ss.flag[i] = lpt[i]
					i += 1

					continue
				}
				break
			}
			ss.plot = lpt[i]
			i += 1
			ss.currentroom = lpt[i]
			i += 1
			ss.time = lpt[i]
			i += 1
			ss.lastsavedtime = ss.time
			ss.lastsavedlv = ss.lv
	}
}
