const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const section2A21 = mongoose.Schema(
  {
    statusofschoolbuilding: {
      type: String,
      trim: true,
    },
    noofbuildingblocks: {
      type: String,
      trim: true,
    },
    noofpuccabuilding: {
      type: String,
      trim: true,
    },
    noofpartiallypuccabuilding: {
      type: String,
      trim: true,
    },
    noofkuchchabuilding: {
      type: String,
      trim: true,
    },
    nooftent: {
      type: String,
      trim: true,
    },
    noofdilapidatedbuilding: {
      type: String,
      trim: true,
    },
    noofbuildingunderconst: {
      type: String,
      trim: true,
    },
    typeofboundarywall: {
      type: String,
      trim: true,
    },
    noofclassrooms: {
      type: String,
      trim: true,
    },
    noofpreprimaryclassroom: {
      type: String,
      trim: true,
    },
    noofprimaryclassroom: {
      type: String,
      trim: true,
    },
    noofupperprimaryclassroom: {
      type: String,
      trim: true,
    },
    noofsecondaryclassroom: {
      type: String,
      trim: true,
    },
    noofhighersecondaryclassroom: {
      type: String,
      trim: true,
    },
    noofnotinuseclassroom: {
      type: String,
      trim: true,
    },
    noofclassroomforinstructpurpose: {
      type: String,
      trim: true,
    },
    noofclassrommsunderconstruct: {
      type: String,
      trim: true,
    },
    noofclassroomdilapidated: {
      type: String,
      trim: true,
    },
    noofpuccagoodconclassroom: {
      type: String,
      trim: true,
    },
    noofpuccaminorrepairclassroom: {
      type: String,
      trim: true,
    },
    noofpuccamajorrepairclassroom: {
      type: String,
      trim: true,
    },
    noofpartialpuccagoodconclassroom: {
      type: String,
      trim: true,
    },
    noofpartialpuccaminorrepairclassroom: {
      type: String,
      trim: true,
    },
    noofpartialpuccamajorrepairclassroom: {
      type: String,
      trim: true,
    },
    noofkuchchagoodconclassroom: {
      type: String,
      trim: true,
    },
    noofkuchchaminorrepairclassroom: {
      type: String,
      trim: true,
    },
    noofkuchchamajorrepairclassroom: {
      type: String,
      trim: true,
    },
    nooftentgoodconclassroom: {
      type: String,
      trim: true,
    },
    nooftentminorrepairclassroom: {
      type: String,
      trim: true,
    },
    nooftentmajorrepairclassroom: {
      type: String,
      trim: true,
    },
    otherroomcount: {
      type: String,
      trim: true,
    },
    schooltoilet: {
      type: String,
      trim: true,
    },
    nooftoiletseatsboys: {
      type: String,
      trim: true,
    },
    nooftoiletseatsboysfuctional: {
      type: String,
      trim: true,
    },
    nooftoiletseatsgirls: {
      type: String,
      trim: true,
    },
    nooftoiletseatsgirlsfuctional: {
      type: String,
      trim: true,
    },
    nooftoiletseatstotal: {
      type: String,
      trim: true,
    },
    nooftoiletseatsfuctionaltotal: {
      type: String,
      trim: true,
    },
    nooftoiletseatsboysCWSN: {
      type: String,
      trim: true,
    },
    nooftoiletseatsboysfuctionalCWSN: {
      type: String,
      trim: true,
    },
    nooftoiletseatsgirlsCWSN: {
      type: String,
      trim: true,
    },
    nooftoiletseatsgirlsfuctionalCWSN: {
      type: String,
      trim: true,
    },
    nooftoiletseatstotalCWSN: {
      type: String,
      trim: true,
    },
    nooftoiletseatsfuctionaltotalCWSN: {
      type: String,
      trim: true,
    },
    nooftoiletseatsboystotalCWSN: {
      type: String,
      trim: true,
    },
    nooftoiletseatsboysfuctionaltotalCWSN: {
      type: String,
      trim: true,
    },
    nooftoiletseatsgirlstotalCWSN: {
      type: String,
      trim: true,
    },
    nooftoiletseatsgirlsfuctionaltotalCWSN: {
      type: String,
      trim: true,
    },
    nooftoiletseatstotalCWSNfinal: {
      type: String,
      trim: true,
    },
    nooftoiletseatsfuctionaltotalCWSNfinal: {
      type: String,
      trim: true,
    },
    noofurinalsboys: {
      type: String,
      trim: true,
    },
    noofurinalboysfuctional: {
      type: String,
      trim: true,
    },
    noofurinalgirls: {
      type: String,
      trim: true,
    },
    noofurinalgirlsfuctional: {
      type: String,
      trim: true,
    },
    noofurinaltotal: {
      type: String,
      trim: true,
    },
    noofurinalfuctionaltotal: {
      type: String,
      trim: true,
    },
    nooftoiletsrunningwatersboys: {
      type: String,
      trim: true,
    },
    nooftoiletsrunningwatergirls: {
      type: String,
      trim: true,
    },
    noofurinalrunningwaterboys: {
      type: String,
      trim: true,
    },
    noofurinalrunningwatergirls: {
      type: String,
      trim: true,
    },
    soapavailable: {
      type: String,
      trim: true,
    },
    incineratoravailingrilstoilet: {
      type: String,
      trim: true,
    },
    drinkingwater: {
      type: String,
      trim: true,
    },
    handpump: {
      type: String,
      trim: true,
    },
    handpumpfuctional: {
      type: String,
      trim: true,
    },
    protectedwell: {
      type: String,
      trim: true,
    },
    protectedwellfuctional: {
      type: String,
      trim: true,
    },
    unprotectedwell: {
      type: String,
      trim: true,
    },
    unprotectedwellfuctional: {
      type: String,
      trim: true,
    },
    tapwarter: {
      type: String,
      trim: true,
    },
    tapwarterfuctional: {
      type: String,
      trim: true,
    },
    packgedwarter: {
      type: String,
      trim: true,
    },
    packgedwarterfuctional: {
      type: String,
      trim: true,
    },
    othersourcename: {
      type: String,
      trim: true,
    },
    otherresorce: {
      type: String,
      trim: true,
    },
    otherresorcefuctional: {
      type: String,
      trim: true,
    },
    waterpurifierRO: {
      type: String,
      trim: true,
    },
    waterqualitytested: {
      type: String,
      trim: true,
    },
    rainwaterharvesting: {
      type: String,
      trim: true,
    },
    handwashfacility: {
      type: String,
      trim: true,
    },
    noofwashpoints: {
      type: String,
      trim: true,
    },
    electricityavai: {
      type: String,
      trim: true,
    },
    solarpanelavai: {
      type: String,
      trim: true,
    },
    libraryavai: {
      type: String,
      trim: true,
    },
    noofbooklibrary: {
      type: String,
      trim: true,
    },
    noofNCERTbooklibrary: {
      type: String,
      trim: true,
    },
    bookbankavai: {
      type: String,
      trim: true,
    },
    noofbookbank: {
      type: String,
      trim: true,
    },
    noofNCERTbookbank: {
      type: String,
      trim: true,
    },
    readingcorneravai: {
      type: String,
      trim: true,
    },
    noofbookreadingcorner: {
      type: String,
      trim: true,
    },
    noofNCERTbookreadingcorner: {
      type: String,
      trim: true,
    },
    fulltimelibrary: {
      type: String,
      trim: true,
    },
    schoolnewsnewspaper: {
      type: String,
      trim: true,
    },
    landavaiforexpansionofschool: {
      type: String,
      trim: true,
    },
    noofadditionalclassroom: {
      type: String,
      trim: true,
    },
    playgroundavai: {
      type: String,
      trim: true,
    },
    adequatearrangforchildpaly: {
      type: String,
      trim: true,
    },
    healthcheckup: {
      type: String,
      trim: true,
    },
    noofhealthcheckups: {
      type: String,
      trim: true,
    },
    healthcheckupheight: {
      type: String,
      trim: true,
    },
    healthcheckupweight: {
      type: String,
      trim: true,
    },
    healthcheckupeyes: {
      type: String,
      trim: true,
    },
    healthcheckupDental: {
      type: String,
      trim: true,
    },
    healthcheckupThroat: {
      type: String,
      trim: true,
    },
    healthwarmingtab: {
      type: String,
      trim: true,
    },
    healthironandfobictab: {
      type: String,
      trim: true,
    },
    annualhealthrecord: {
      type: String,
      trim: true,
    },
    thermalscanneravai: {
      type: String,
      trim: true,
    },
    rampfordisabledchild: {
      type: String,
      trim: true,
    },
    handrailavai: {
      type: String,
      trim: true,
    },
    specialeducator: {
      type: String,
      trim: true,
    },
    kitchengarden: {
      type: String,
      trim: true,
    },
    kitchenshed: {
      type: String,
      trim: true,
    },
    dustbinforcalssroom: {
      type: String,
      trim: true,
    },
    dustbintoilets: {
      type: String,
      trim: true,
    },
    dustbinforkiten: {
      type: String,
      trim: true,
    },
    furnitureforstduent: {
      type: String,
      trim: true,
    },
    noofstudenthavefurniture: {
      type: String,
      trim: true,
    },
    separateroomforhead: {
      type: String,
      trim: true,
    },
    separateroomforlibrary: {
      type: String,
      trim: true,
    },
    separateroomforassihead: {
      type: String,
      trim: true,
    },
    separateroomforgirls: {
      type: String,
      trim: true,
    },
    staffroomforteacher: {
      type: String,
      trim: true,
    },
    activityroom: {
      type: String,
      trim: true,
    },
    staffquarter: {
      type: String,
      trim: true,
    },
    tinkeringlab: {
      type: String,
      trim: true,
    },
    saniterypadvendingmachine: {
      type: String,
      trim: true,
    },
    integratedsciencelab: {
      type: String,
      trim: true,
    },
    physicslab: {
      type: String,
      trim: true,
    },
    physicsroom: {
      type: String,
      trim: true,
    },
    chemistrylab: {
      type: String,
      trim: true,
    },
    chemistryroom: {
      type: String,
      trim: true,
    },
    biologylab: {
      type: String,
      trim: true,
    },
    biologyroom: {
      type: String,
      trim: true,
    },
    mathematicslab: {
      type: String,
      trim: true,
    },
    mathematicsroom: {
      type: String,
      trim: true,
    },
    languagelab: {
      type: String,
      trim: true,
    },
    languageroom: {
      type: String,
      trim: true,
    },
    geographylab: {
      type: String,
      trim: true,
    },
    geographyroom: {
      type: String,
      trim: true,
    },
    homesciencelab: {
      type: String,
      trim: true,
    },
    homescienceroom: {
      type: String,
      trim: true,
    },
    psychologylab: {
      type: String,
      trim: true,
    },
    phychologyroom: {
      type: String,
      trim: true,
    },
    audiovisualsystem: {
      type: String,
      trim: true,
    },
    sciencekit: {
      type: String,
      trim: true,
    },
    mathkit: {
      type: String,
      trim: true,
    },
    biometrickit: {
      type: String,
      trim: true,
    },
    essentialmedicineavai: {
      type: String,
      trim: true,
    },
    firstaidavai: {
      type: String,
      trim: true,
    },
    scode: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
section2A21.plugin(toJSON);
section2A21.plugin(paginate);

const Section2A21 = mongoose.model('section2A21', section2A21);

module.exports = Section2A21;
