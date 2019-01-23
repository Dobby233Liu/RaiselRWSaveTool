DeltaruneSaveSlot = {}

DeltaruneSaveSlot.lastsavedtime = new Date().valueOf();
DeltaruneSaveSlot.lastsavedlv = 1;

DeltaruneSaveSlot.slot = 1;
DeltaruneSaveSlot.slotMainFileName = ("filech1_" + DeltaruneSaveSlot.slot);

DeltaruneSaveSlot.truename = "VESSEL";
DeltaruneSaveSlot.othername = new Array();
DeltaruneSaveSlot.othername[0] = "PLAYER";
DeltaruneSaveSlot.othername[1] = "PLAYER";
DeltaruneSaveSlot.othername[2] = "PLAYER";
DeltaruneSaveSlot.othername[3] = "PLAYER";
DeltaruneSaveSlot.othername[4] = "PLAYER";
DeltaruneSaveSlot.othername[5] = "PLAYER";
DeltaruneSaveSlot.othername[6] = "PLAYER";

DeltaruneSaveSlot.char = new Array();
DeltaruneSaveSlot.char[0] = 1;
DeltaruneSaveSlot.char[1] = 2;
DeltaruneSaveSlot.char[2] = 3;
DeltaruneSaveSlot.gold = 10;
DeltaruneSaveSlot.xp = 0;
DeltaruneSaveSlot.lv = 1;
DeltaruneSaveSlot.inv = 0;
DeltaruneSaveSlot.invc = 0;
DeltaruneSaveSlot.darkzone = 1;

DeltaruneSaveSlot.hp = new Array();
DeltaruneSaveSlot.hp[0] = 90;
DeltaruneSaveSlot.hp[1] = 120;
DeltaruneSaveSlot.hp[2] = 70;
DeltaruneSaveSlot.hp[3] = 70;
DeltaruneSaveSlot.hp[4] = 70;

// at
DeltaruneSaveSlot.at = new Array();

// df
DeltaruneSaveSlot.df = new Array();

// mag
DeltaruneSaveSlot.mag = new Array();

// guts
DeltaruneSaveSlot.guts = new Array();

// maxhp
DeltaruneSaveSlot.maxhp = new Array();
DeltaruneSaveSlot.maxhp[0] = 90;
DeltaruneSaveSlot.maxhp[1] = 120;
DeltaruneSaveSlot.maxhp[2] = 70;
DeltaruneSaveSlot.maxhp[3] = 70;
DeltaruneSaveSlot.maxhp[4] = 70;

DeltaruneSaveSlot.charweapon = new Array();

DeltaruneSaveSlot.chararmor1 = new Array();

DeltaruneSaveSlot.chararmor2 = new Array();

DeltaruneSaveSlot.weaponstyle = new Array();

DeltaruneSaveSlot.itemat = new Array();

DeltaruneSaveSlot.itemdf = new Array();

DeltaruneSaveSlot.itemmag = new Array();

DeltaruneSaveSlot.itembolts = new Array();

DeltaruneSaveSlot.itemgrazeamt = new Array();

DeltaruneSaveSlot.itemgrazesize = new Array();

DeltaruneSaveSlot.itemboltspeed = new Array();

DeltaruneSaveSlot.itemspecial = new Array();

// size: 12
DeltaruneSaveSlot.spell = new Array();

DeltaruneSaveSlot.flag = new Array(9999);

DeltaruneSaveSlot.plot = 0;

DeltaruneSaveSlot.currentroom = 13;

DeltaruneSaveSlot.time = 0;

DeltaruneSaveSlot.litem = new Array();

DeltaruneSaveSlot.phone = new Array();

DeltaruneSaveSlot.tension = 0;
DeltaruneSaveSlot.maxtension = 0;

DeltaruneSaveSlot.lweapon = 0;
DeltaruneSaveSlot.larmor = 0;
DeltaruneSaveSlot.lxp = 0;
DeltaruneSaveSlot.llv = 1;
DeltaruneSaveSlot.lgold = 100;
DeltaruneSaveSlot.lhp = 20;
DeltaruneSaveSlot.lmaxhp = 20;
DeltaruneSaveSlot.lat = 0;
DeltaruneSaveSlot.ldf = 0;
DeltaruneSaveSlot.lwstrength = 0;
DeltaruneSaveSlot.ladef = 0;

DeltaruneSaveSlot.item = new Array();
DeltaruneSaveSlot.keyitem = new Array();
DeltaruneSaveSlot.weapon = new Array();
DeltaruneSaveSlot.armor = new Array();

DeltaruneSaveSlot.boltspeed = 0
DeltaruneSaveSlot.grazeamt = 0
DeltaruneSaveSlot.grazesize = 0

// this.flag[912]
DeltaruneSaveSlot.lang = "en";

DeltaruneSaveSlot.toPTString = function() {
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
DeltaruneSaveSlot.toIniString = function() {
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
DeltaruneSaveSlot.readPTToMe = function(pt) {
    new DeltaruneSaveRead().ptToSaveslot(pt, this);
}