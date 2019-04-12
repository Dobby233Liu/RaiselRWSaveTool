DeltaruneSaveSlot = function(){
	this.lastsavedtime = new Date().valueOf();
	this.lastsavedlv = 1;

	this.slot = 1;
	this.slotMainFileName = ("filech1_" + this.slot);

	this.truename = "VESSEL";
	this.othername = new Array();
	this.othername[0] = "PLAYER";
	this.othername[1] = "PLAYER";
	this.othername[2] = "PLAYER";
	this.othername[3] = "PLAYER";
	this.othername[4] = "PLAYER";
	this.othername[5] = "PLAYER";
	this.othername[6] = "PLAYER";

	this.char = new Array();
	this.char[0] = 1;
	this.char[1] = 2;
	this.char[2] = 3;
	this.gold = 10;
	this.xp = 0;
	this.lv = 1;
	this.inv = 0;
	this.invc = 0;
	this.darkzone = 1;

	this.hp = new Array();
	this.hp[0] = 90;
	this.hp[1] = 120;
	this.hp[2] = 70;
	this.hp[3] = 70;
	this.hp[4] = 70;

	// at
	this.at = new Array();

	// df
	this.df = new Array();

	// mag
	this.mag = new Array();

	// guts
	this.guts = new Array();

	// maxhp
	this.maxhp = new Array();
	this.maxhp[0] = 90;
	this.maxhp[1] = 120;
	this.maxhp[2] = 70;
	this.maxhp[3] = 70;
	this.maxhp[4] = 70;

	this.charweapon = new Array();

	this.chararmor1 = new Array();

	this.chararmor2 = new Array();

	this.weaponstyle = new Array();

	this.itemat = new Array();
	this.itemat[0] = new Array()
	this.itemat[1] = new Array()
	this.itemat[2] = new Array()
	this.itemat[3] = new Array()
	this.itemat[4] = new Array()

	this.itemdf = new Array();

	this.itemmag = new Array();

	this.itembolts = new Array();

	this.itemgrazeamt = new Array();

	this.itemgrazesize = new Array();

	this.itemboltspeed = new Array();

	this.itemspecial = new Array();

	// size: 12
	this.spell = new Array();

	this.flag = new Array(999);

	this.plot = 0;

	this.currentroom = 13;

	this.time = 0;

	this.litem = new Array();

	this.phone = new Array();

	this.tension = 0;
	this.maxtension = 0;

	this.lweapon = 0;
	this.larmor = 0;
	this.lxp = 0;
	this.llv = 1;
	this.lgold = 100;
	this.lhp = 20;
	this.lmaxhp = 20;
	this.lat = 0;
	this.ldf = 0;
	this.lwstrength = 0;
	this.ladef = 0;

	this.item = new Array();
	this.keyitem = new Array();
	this.weapon = new Array();
	this.armor = new Array();

	this.boltspeed = 0
	this.grazeamt = 0
	this.grazesize = 0

	// this.flag[912]
	this.lang = "en";

	this.toPTString = function() {
		var tempstr = this.truename + "\n";
		var i = 0;
		while (true) {
			if (i < 6) {
				tempstr += this.othername[i] + "\n";
				i = (i + 1);
				continue;
			}
			break;
		}
		tempstr = tempstr + this.char[0] + "\n"
		tempstr = tempstr + this.char[1] + "\n"
		tempstr = tempstr + this.char[2] + "\n"
		tempstr = tempstr + this.gold + "\n"
		tempstr = tempstr + this.xp + "\n"
		tempstr = tempstr + this.lv + "\n"
		tempstr = tempstr + this.inv + "\n"
		tempstr = tempstr + this.invc + "\n"
		tempstr = tempstr + this.darkzone + "\n"
		i = 0
		while (true) {
			if (i < 4) {
				tempstr = tempstr + this.hp[i] + "\n"
				tempstr = tempstr + this.maxhp[i] + "\n"
				tempstr = tempstr + this.at[i] + "\n"
				tempstr = tempstr + this.df[i] + "\n"
				tempstr = tempstr + this.mag[i] + "\n"
				tempstr = tempstr + this.guts[i] + "\n"
				tempstr = tempstr + this.charweapon[i] + "\n"
				tempstr = tempstr + this.chararmor1[i] + "\n"
				tempstr = tempstr + this.chararmor2[i] + "\n"
				tempstr = tempstr + this.weaponstyle[i] + "\n"
				q = 0
				while (true) {
					if (q < 4) {
						tempstr = tempstr + this.itemat[i][q] + "\n"
						tempstr = tempstr + this.itemdf[i][q] + "\n"
						tempstr = tempstr + this.itemmag[i][q] + "\n"
						tempstr = tempstr + this.itembolts[i][q] + "\n"
						tempstr = tempstr + this.itemgrazeamt[i][q] + "\n"
						tempstr = tempstr + this.itemgrazesize[i][q] + "\n"
						tempstr = tempstr + this.itemboltspeed[i][q] + "\n"
						tempstr = tempstr + this.itemspecial[i][q] + "\n"
						q = (q + 1)
						continue
					}
					break
				}
				j = 0
				while (true) {
					if (j < 12) {
						tempstr = tempstr + this.spell[i][j] + "\n"
						j = (j + 1)
						continue
					}
					break
				}
				i = (i + 1)
				continue
			}
			break
		}
		tempstr = tempstr + this.boltspeed + "\n";
		tempstr = tempstr + this.grazeamt + "\n";
		tempstr = tempstr + this.grazesize + "\n";
		j = 0
		while (true) {
			if (j < 13) {
				tempstr = tempstr + this.item[j] + "\n";
				tempstr = tempstr + this.keyitem[j] + "\n";
				tempstr = tempstr + this.weapon[j]; + "\n";
				tempstr = tempstr + this.armor[j] + "\n";
				j = (j + 1)
				continue
			}
			break
		}
		tempstr = tempstr + this.tension + "\n"
		tempstr = tempstr + this.maxtension + "\n"
		tempstr = tempstr + this.lweapon + "\n"
		tempstr = tempstr + this.larmor + "\n"
		tempstr = tempstr + this.lxp + "\n"
		tempstr = tempstr + this.llv + "\n"
		tempstr = tempstr + this.lgold + "\n"
		tempstr = tempstr + this.lhp + "\n"
		tempstr = tempstr + this.lmaxhp + "\n"
		tempstr = tempstr + this.lat + "\n"
		tempstr = tempstr + this.ldf + "\n"
		tempstr = tempstr + this.lwstrength + "\n"
		tempstr = tempstr + this.ladef + "\n"
		i = 0
		while (true) {
			if (i < 8) {
				tempstr = tempstr + this.litem[i] + "\n";
				tempstr = tempstr + this.phone[i] + "\n";
				i = (i + 1)
				continue
			}
			break
		}
		i = 0
		while (true) {
			if (i < 9999) {
				tempstr = tempstr + this.flag[i] + "\n"
				i = (i + 1)
				continue
			}
			break
		}
		tempstr = tempstr + this.plot + "\n"
		tempstr = tempstr + this.currentroom + "\n"
		tempstr = tempstr + this.time;

		return tempstr;
	}
	this.toIniString = function() {
		var tempstr2 = ""
		tempstr2 = "[G" + this.slotNum + "]\n"
		tempstr2 = tempstr2 + "InitLang=\"" + this.flag[912] + "\""
		tempstr2 = tempstr2 + "Name=\"" + this.truename + "\""
		tempstr2 = tempstr2 + "Level=\"" + this.lv + "\""
		tempstr2 = tempstr2 + "Love=\"" + this.llv + "\""
		// time
		// room
		tempstr2 = tempstr2 + "Time=\"" + this.time + "\""
		tempstr2 = tempstr2 + "Room=\"" + this.currentroom + "\""
		return tempstr;
	}
	this.readPTToMe = function(pt) {
		new DeltaruneSaveRead().ptToSaveslot(pt, this);
	}
}