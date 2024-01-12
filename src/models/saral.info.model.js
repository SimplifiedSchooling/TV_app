const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const saralSchema = new mongoose.Schema(
  {
    scode: {
      type: String,
      required: true,
      unique: true,
    },
    anganwadicenteradj: {
      type: String,
      required: true,
      trim: true,
    },
    noofanganwadinear: {
      type: Number,
      required: true,
      trim: true,
    },
    noofsevika: {
      type: Number,
      required: true,
      trim: true,
    },
    agewiseboy: {
      type: Number,
      required: true,
      trim: true,
    },
    agewisegirl: {
      type: Number,
      required: true,
      trim: true,
    },
    balwadicenter: {
      type: Number,
      required: true,
      trim: true,
    },
    recognizbalwadi: {
      type: Number,
      required: true,
      trim: true,
    },
    recognitiondate: {
      type: String,
      required: true,
      trim: true,
    },
    noofteacher: {
      type: Number,
      required: true,
      trim: true,
    },
    eodeputyvisit: {
      type: Number,
      required: true,
      trim: true,
    },
    eovisit: {
      type: Number,
      required: true,
      trim: true,
    },
    dodeputyvisit: {
      type: Number,
      required: true,
      trim: true,
    },
    ddvisits: {
      type: Number,
      required: true,
      trim: true,
    },
    dvisitno: {
      type: Number,
      required: true,
      trim: true,
    },
    zmdvisits: {
      type: Number,
      required: true,
      trim: true,
    },
    mdminspno: {
      type: Number,
      required: true,
      trim: true,
    },
    internalaudit: {
      type: Number,
      required: true,
      trim: true,
    },
    externalaudit: {
      type: Number,
      required: true,
      trim: true,
    },
    localauditb: {
      type: Number,
      required: true,
      trim: true,
    },
    auditorauditbgen: {
      type: Number,
      required: true,
      trim: true,
    },

    boarddisplay: {
      type: Number,
      required: true,
      trim: true,
    },
    socialaudit: {
      type: String,
      required: true,
      trim: true,
    },
    grantssa: {
      type: String,
      required: true,
      trim: true,
    },
    spillapril: {
      type: Number,
      required: true,
      trim: true,
    },
    expenditurers: {
      type: Number,
      required: true,
      trim: true,
    },
    sdevelopgrant: {
      type: String,
      required: true,
      trim: true,
    },
    smaintenancegrant: {
      type: String,
      required: true,
      trim: true,
    },
    tlmgrant: {
      type: String,
      required: true,
      trim: true,
    },
    fundscwsn: {
      type: String,
      required: true,
      trim: true,
    },
    grantcontingency: {
      type: String,
      required: true,
      trim: true,
    },
    contingengrantob: {
      type: Number,
      required: true,
      trim: true,
    },
    modelschool1: {
      type: Number,
      required: true,
      trim: true,
    },
    sbpgadoptscheme: {
      type: Number,
      required: true,
      trim: true,
    },
    hostelallowance: {
      type: Number,
      required: true,
      trim: true,
    },
    publiccontribut: {
      type: Number,
      required: true,
      trim: true,
    },
    attendallowance: {
      type: Number,
      required: true,
      trim: true,
    },
    examfeerefund: {
      type: Number,
      required: true,
      trim: true,
    },
    csr: {
      type: Number,
      required: true,
      trim: true,
    },
    shetkiallowance: {
      type: Number,
      required: true,
      trim: true,
    },
    idmifund: {
      type: Number,
      required: true,
      trim: true,
    },
    maintenancegrant: {
      type: String,
      required: true,
      trim: true,
    },
    buildingrant: {
      type: String,
      required: true,
      trim: true,
    },
    pariposhan: {
      type: String,
      required: true,
      trim: true,
    },
    buildingrent: {
      type: Number,
      required: true,
      trim: true,
    },
    othergrant: {
      type: String,
      required: true,
      trim: true,
    },
    childenroll: {
      type: Number,
      required: true,
      trim: true,
    },
    nostuadmissionquota: {
      type: Number,
      required: true,
      trim: true,
    },
    nobookfiction: {
      type: Number,
      required: true,
      trim: true,
    },
    nobooknonfiction: {
      type: Number,
      required: true,
      trim: true,
    },
    magazine: {
      type: String,
      required: true,
      trim: true,
    },
    jsmagazine: {
      type: Number,
      required: true,
      trim: true,
    },
    rbook: {
      type: String,
      required: true,
      trim: true,
    },
    tobaccoinside: {
      type: String,
      required: true,
      trim: true,
    },
    smokingarea: {
      type: String,
      required: true,
      trim: true,
    },
    infotobacco: {
      type: String,
      required: true,
      trim: true,
    },
    cotpa: {
      type: String,
      required: true,
      trim: true,
    },
    tobaccoinsideper: {
      type: String,
      required: true,
      trim: true,
    },
    signage: {
      type: String,
      required: true,
      trim: true,
    },
    controltobacco: {
      type: String,
      required: true,
      trim: true,
    },
    intiativetobacco: {
      type: String,
      required: true,
      trim: true,
    },
    statenodaloff: {
      type: String,
      required: true,
      trim: true,
    },
    antitobacco: {
      type: String,
      required: true,
      trim: true,
    },
    controltobaccocommite: {
      type: String,
      required: true,
      trim: true,
    },
    meetreport: {
      type: String,
      required: true,
      trim: true,
    },
    tobaccofreeschool: {
      type: String,
      required: true,
      trim: true,
    },
    tobaccoyard: {
      type: String,
      required: true,
      trim: true,
    },
    tfet: {
      type: String,
      required: true,
      trim: true,
    },
    evidencetobacco: {
      type: String,
      required: true,
      trim: true,
    },
    totallaptop: {
      type: Number,
      required: true,
      trim: true,
    },
    totalprinter: {
      type: Number,
      required: true,
      trim: true,
    },
    totalprinterfun: {
      type: Number,
      required: true,
      trim: true,
    },
    laptopteacpurp: {
      type: String,
      required: true,
      trim: true,
    },
    complearnpurp: {
      type: String,
      required: true,
      trim: true,
    },
    computeradminpurp: {
      type: String,
      required: true,
      trim: true,
    },
    schoolnetwork: {
      type: String,
      required: true,
      trim: true,
    },
    bandwidth: {
      type: String,
      required: true,
      trim: true,
    },
    serviceprovider: {
      type: String,
      required: true,
      trim: true,
    },
    campusplan: {
      type: String,
      required: true,
      trim: true,
    },
    englishkit: {
      type: String,
      required: true,
      trim: true,
    },
    geographickit: {
      type: String,
      required: true,
      trim: true,
    },
    braillebooks: {
      type: String,
      required: true,
      trim: true,
    },
    largeprint: {
      type: String,
      required: true,
      trim: true,
    },
    noofutensils: {
      type: Number,
      required: true,
      trim: true,
    },
    statusofutensils: {
      type: String,
      required: true,
      trim: true,
    },
    utensilsfrom: {
      type: String,
      required: true,
      trim: true,
    },
    noofplates: {
      type: Number,
      required: true,
      trim: true,
    },
    noofspoons: {
      type: Number,
      required: true,
      trim: true,
    },
    noofglass: {
      type: Number,
      required: true,
      trim: true,
    },
    weighingmachine: {
      type: String,
      required: true,
      trim: true,
    },
    heightmeastool: {
      type: String,
      required: true,
      trim: true,
    },
    yearofprocurement: {
      type: Number,
      required: true,
      trim: true,
    },
    badminton: {
      type: String,
      required: true,
      trim: true,
    },
    basketball: {
      type: String,
      required: true,
      trim: true,
    },
    carrom: {
      type: String,
      required: true,
      trim: true,
    },
    yoga: {
      type: String,
      required: true,
      trim: true,
    },
    football: {
      type: String,
      required: true,
      trim: true,
    },
    meterrun: {
      type: String,
      required: true,
      trim: true,
    },
    allequipments: {
      type: Number,
      required: true,
      trim: true,
    },
    seatingarrang: {
      type: String,
      required: true,
      trim: true,
    },
    seatingarrangava: {
      type: String,
      required: true,
      trim: true,
    },
    seatingarrangereq: {
      type: String,
      required: true,
      trim: true,
    },
    transportprovider: {
      type: String,
      required: true,
      trim: true,
    },
    vehicaltype: {
      type: String,
      required: true,
      trim: true,
    },
    contractorowner: {
      type: String,
      required: true,
      trim: true,
    },
    rtoregistration: {
      type: String,
      required: true,
      trim: true,
    },
    drivername: {
      type: String,
      required: true,
      trim: true,
    },
    driverlicenseno: {
      type: String,
      required: true,
      trim: true,
    },
    driveraadharno: {
      type: String,
      required: true,
      trim: true,
    },
    helpername: {
      type: String,
      required: true,
      trim: true,
    },
    teacherresearch: {
      type: Number,
      required: true,
      trim: true,
    },
    teacherarticlepublish: {
      type: String,
      required: true,
      trim: true,
    },
    curriculumdetails: {
      type: String,
      required: true,
      trim: true,
    },
    typeofactivity: {
      type: String,
      required: true,
      trim: true,
    },
    ptaexecutive: {
      type: String,
      required: true,
      trim: true,
    },
    dateofapproval: {
      type: String,
      required: true,
      trim: true,
    },
    feestructapprove: {
      type: String,
      required: true,
      trim: true,
    },
    feerevisionpendstatelev: {
      type: String,
      required: true,
      trim: true,
    },
    committeesmc: {
      type: String,
      required: true,
      trim: true,
    },
    smcacademicyear: {
      type: Number,
      required: true,
      trim: true,
    },
    smccommitteplan: {
      type: String,
      required: true,
      trim: true,
    },
    committedetail1: {
      type: String,
      required: true,
      trim: true,
    },
    committeeconstitute: {
      type: String,
      required: true,
      trim: true,
    },
    smcsmdccommitte: {
      type: String,
      required: true,
      trim: true,
    },
    smdcpreviousyear: {
      type: Number,
      required: true,
      trim: true,
    },
    smdccommitteimprove: {
      type: String,
      required: true,
      trim: true,
    },
    committedetail: {
      type: String,
      required: true,
      trim: true,
    },
    committeeconstitutepta: {
      type: String,
      required: true,
      trim: true,
    },
    noofmeetingpta: {
      type: Number,
      required: true,
      trim: true,
    },
    committedetailpta: {
      type: String,
      required: true,
      trim: true,
    },
    committeeconstitutemta: {
      type: String,
      required: true,
      trim: true,
    },
    committedetailmta: {
      type: String,
      required: true,
      trim: true,
    },
    committeeconstituteac: {
      type: String,
      required: true,
      trim: true,
    },
    committedetailac: {
      type: String,
      required: true,
      trim: true,
    },
    committeeconstitutetc: {
      type: String,
      required: true,
      trim: true,
    },
    committedetailtc: {
      type: String,
      required: true,
      trim: true,
    },
    committeeconstitutesc: {
      type: String,
      required: true,
      trim: true,
    },
    committedetailsc: {
      type: String,
      required: true,
      trim: true,
    },
    committeeconstitutemdmc: {
      type: String,
      required: true,
      trim: true,
    },
    committedetailmdmc: {
      type: String,
      required: true,
      trim: true,
    },
    progress_count: String,
    progress_count1: String,
    progress_count2: String,
    progress_count3: String,
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
saralSchema.plugin(toJSON);
saralSchema.plugin(paginate);

saralSchema.index({ scode: 1 }, { unique: true });
const SaralInfo = mongoose.model('Saral', saralSchema);
SaralInfo.createIndexes();

module.exports = SaralInfo;
