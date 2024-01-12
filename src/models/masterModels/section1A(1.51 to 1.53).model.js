const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const section1A53Schema = mongoose.Schema(
  {
    EBSBActivity: {
      type: String,
      trim: true,
    },
    textbookreceivedpreprimary: {
      type: String,
      trim: true,
    },
    textbookreceivedprimary: {
      type: String,
      trim: true,
    },
    textbookreceivedupperprimary: {
      type: String,
      trim: true,
    },
    textbookreceivedsecondary: {
      type: String,
      trim: true,
    },
    textbookreceivedhighersecondary: {
      type: String,
      trim: true,
    },
    txtrecacayearpreprimary: {
      type: String,
      trim: true,
    },
    txtrecacayearprimary: {
      type: String,
      trim: true,
    },
    txtrecacayearupperprimary: {
      type: String,
      trim: true,
    },
    txtrecacayearsecondary: {
      type: String,
      trim: true,
    },
    txtrecacayearhighersecondary: {
      type: String,
      trim: true,
    },
    TMLpreprimary: {
      type: String,
      trim: true,
    },
    TMLprimary: {
      type: String,
      trim: true,
    },
    TMLupperprimary: {
      type: String,
      trim: true,
    },
    TMLsecondary: {
      type: String,
      trim: true,
    },
    TMLhighersecondary: {
      type: String,
      trim: true,
    },
    noofchildTMLpreprimary: {
      type: String,
      trim: true,
    },
    noofchildTMLprimary: {
      type: String,
      trim: true,
    },
    noofchildTMLupperprimary: {
      type: String,
      trim: true,
    },
    noofchildTMLsecondary: {
      type: String,
      trim: true,
    },
    noofchildTMLhighersecondary: {
      type: String,
      trim: true,
    },
    TMLformathpreprimary: {
      type: String,
      trim: true,
    },
    TMLformathprimary: {
      type: String,
      trim: true,
    },
    TMLformathupperprimary: {
      type: String,
      trim: true,
    },
    TMLformathsecondary: {
      type: String,
      trim: true,
    },
    TMLformathhighersecondary: {
      type: String,
      trim: true,
    },
    gradedmatpreprimary: {
      type: String,
      trim: true,
    },
    gradedmatprimary: {
      type: String,
      trim: true,
    },
    gradedmatupperprimary: {
      type: String,
      trim: true,
    },
    gradedmatsecondary: {
      type: String,
      trim: true,
    },
    gradedmathighersecondary: {
      type: String,
      trim: true,
    },
    noofgradedmatpreprimary: {
      type: String,
      trim: true,
    },
    noofgradedmatprimary: {
      type: String,
      trim: true,
    },
    noofgradedmatupperprimary: {
      type: String,
      trim: true,
    },
    noofgradedmatsecondary: {
      type: String,
      trim: true,
    },
    noofgradedmathighersecondary: {
      type: String,
      trim: true,
    },
    noofaccessgradedmatpreprimary: {
      type: String,
      trim: true,
    },
    noofaccessgradedmatprimary: {
      type: String,
      trim: true,
    },
    noofaccessgradedmatupperprimary: {
      type: String,
      trim: true,
    },
    noofaccessgradedmatsecondary: {
      type: String,
      trim: true,
    },
    noofaccessgradedmathighersecondary: {
      type: String,
      trim: true,
    },

    noofbookspreprimary: {
      type: String,
      trim: true,
    },
    noofbooksprimary: {
      type: String,
      trim: true,
    },
    noofbooksupperprimary: {
      type: String,
      trim: true,
    },
    noofbookssecondary: {
      type: String,
      trim: true,
    },
    noofbookshighersecondary: {
      type: String,
      trim: true,
    },
    noofbooksborpreprimary: {
      type: String,
      trim: true,
    },
    noofbooksborprimary: {
      type: String,
      trim: true,
    },
    noofbooksborupperprimary: {
      type: String,
      trim: true,
    },
    noofbooksborsecondary: {
      type: String,
      trim: true,
    },
    noofbooksborhighersecondary: {
      type: String,
      trim: true,
    },
    noofparentalcompreprimary: {
      type: String,
      trim: true,
    },
    noofparentalcomprimary: {
      type: String,
      trim: true,
    },
    noofparentalcomupperprimary: {
      type: String,
      trim: true,
    },
    noofparentalcomsecondary: {
      type: String,
      trim: true,
    },
    noofparentalcomhighersecondary: {
      type: String,
      trim: true,
    },
    FLNperprimary: {
      type: String,
      trim: true,
    },
    FLNprimary: {
      type: String,
      trim: true,
    },
    FLNupperprimary: {
      type: String,
      trim: true,
    },
    FLNsecondary: {
      type: String,
      trim: true,
    },
    FLNhighersecondary: {
      type: String,
      trim: true,
    },
    peerlerpreprimary: {
      type: String,
      trim: true,
    },
    peerlerprimary: {
      type: String,
      trim: true,
    },
    peerlerupperprimary: {
      type: String,
      trim: true,
    },
    peerlersecondary: {
      type: String,
      trim: true,
    },
    peerlerhighersecondary: {
      type: String,
      trim: true,
    },
    playmatavaipreprimary: {
      type: String,
      trim: true,
    },
    playmatavaiprimary: {
      type: String,
      trim: true,
    },
    playmatavaiupperprimary: {
      type: String,
      trim: true,
    },
    playmatavaisecondary: {
      type: String,
      trim: true,
    },
    playmatavaihighersecondary: {
      type: String,
      trim: true,
    },
    freeuniformpreprimary: {
      type: String,
      trim: true,
    },
    freeuniformprimary: {
      type: String,
      trim: true,
    },
    freeuniformupperprimary: {
      type: String,
      trim: true,
    },
    freeuniformsecondary: {
      type: String,
      trim: true,
    },
    freeuniformhighersecondary: {
      type: String,
      trim: true,
    },
    uniformpromonthpreprimary: {
      type: String,
      trim: true,
    },
    uniformpromonthprimary: {
      type: String,
      trim: true,
    },
    uniformpromonthupperprimary: {
      type: String,
      trim: true,
    },
    uniformpromonthsecondary: {
      type: String,
      trim: true,
    },
    uniformpromonthhigersecondary: {
      type: String,
      trim: true,
    },
    learnoutcome1: {
      type: String,
      trim: true,
    },
    learnoutcome2: {
      type: String,
      trim: true,
    },
    learnoutcome3: {
      type: String,
      trim: true,
    },
    learnoutcome4: {
      type: String,
      trim: true,
    },
    learnoutcome5: {
      type: String,
      trim: true,
    },
    learnoutcome6: {
      type: String,
      trim: true,
    },
    learnoutcome7: {
      type: String,
      trim: true,
    },
    learnoutcome8: {
      type: String,
      trim: true,
    },
    learnoutcome9: {
      type: String,
      trim: true,
    },
    learnoutcome10: {
      type: String,
      trim: true,
    },
    learnoutcome11: {
      type: String,
      trim: true,
    },
    learnoutcome12: {
      type: String,
      trim: true,
    },
    noofcriterion1: {
      type: String,
      trim: true,
    },
    noofcriterion2: {
      type: String,
      trim: true,
    },
    noofcriterion3: {
      type: String,
      trim: true,
    },
    noofcriterion4: {
      type: String,
      trim: true,
    },
    noofcriterion5: {
      type: String,
      trim: true,
    },
    noofcriterion6: {
      type: String,
      trim: true,
    },
    noofcriterion7: {
      type: String,
      trim: true,
    },
    noofcriterion8: {
      type: String,
      trim: true,
    },
    noofcriterion9: {
      type: String,
      trim: true,
    },
    noofcriterion10: {
      type: String,
      trim: true,
    },
    noofcriterion11: {
      type: String,
      trim: true,
    },
    noofcriterion12: {
      type: String,
      trim: true,
    },
    teachingaids1: {
      type: String,
      trim: true,
    },
    teachingaids2: {
      type: String,
      trim: true,
    },
    teachingaids3: {
      type: String,
      trim: true,
    },
    teachingaids4: {
      type: String,
      trim: true,
    },
    teachingaids5: {
      type: String,
      trim: true,
    },
    teachingaids6: {
      type: String,
      trim: true,
    },
    teachingaids7: {
      type: String,
      trim: true,
    },
    teachingaids8: {
      type: String,
      trim: true,
    },
    teachingaids9: {
      type: String,
      trim: true,
    },
    teachingaids10: {
      type: String,
      trim: true,
    },
    teachingaids11: {
      type: String,
      trim: true,
    },
    teachingaids12: {
      type: String,
      trim: true,
    },

    activities1: {
      type: String,
      trim: true,
    },
    activities2: {
      type: String,
      trim: true,
    },
    activities3: {
      type: String,
      trim: true,
    },
    activities4: {
      type: String,
      trim: true,
    },
    activities5: {
      type: String,
      trim: true,
    },
    activities6: {
      type: String,
      trim: true,
    },
    activities7: {
      type: String,
      trim: true,
    },
    activities8: {
      type: String,
      trim: true,
    },
    activities9: {
      type: String,
      trim: true,
    },
    activities10: {
      type: String,
      trim: true,
    },
    activities11: {
      type: String,
      trim: true,
    },
    activities12: {
      type: String,
      trim: true,
    },

    hardsport1: {
      type: String,
      trim: true,
    },
    hardsport2: {
      type: String,
      trim: true,
    },
    hardsport3: {
      type: String,
      trim: true,
    },
    hardsport4: {
      type: String,
      trim: true,
    },
    hardsport5: {
      type: String,
      trim: true,
    },
    hardsport6: {
      type: String,
      trim: true,
    },
    hardsport7: {
      type: String,
      trim: true,
    },
    hardsport8: {
      type: String,
      trim: true,
    },
    hardsport9: {
      type: String,
      trim: true,
    },
    hardsport10: {
      type: String,
      trim: true,
    },
    hardsport11: {
      type: String,
      trim: true,
    },
    hardsport12: {
      type: String,
      trim: true,
    },

    orientationcybersafety1: {
      type: String,
      trim: true,
    },
    orientationcybersafety2: {
      type: String,
      trim: true,
    },
    orientationcybersafety3: {
      type: String,
      trim: true,
    },
    orientationcybersafety4: {
      type: String,
      trim: true,
    },
    orientationcybersafety5: {
      type: String,
      trim: true,
    },
    orientationcybersafety6: {
      type: String,
      trim: true,
    },
    orientationcybersafety7: {
      type: String,
      trim: true,
    },
    orientationcybersafety8: {
      type: String,
      trim: true,
    },
    orientationcybersafety9: {
      type: String,
      trim: true,
    },
    orientationcybersafety10: {
      type: String,
      trim: true,
    },
    orientationcybersafety11: {
      type: String,
      trim: true,
    },
    orientationcybersafety12: {
      type: String,
      trim: true,
    },

    trainingsocial1: {
      type: String,
      trim: true,
    },
    trainingsocial2: {
      type: String,
      trim: true,
    },
    trainingsocial3: {
      type: String,
      trim: true,
    },
    trainingsocial4: {
      type: String,
      trim: true,
    },
    trainingsocial5: {
      type: String,
      trim: true,
    },
    trainingsocial6: {
      type: String,
      trim: true,
    },
    trainingsocial7: {
      type: String,
      trim: true,
    },
    trainingsocial8: {
      type: String,
      trim: true,
    },
    trainingsocial9: {
      type: String,
      trim: true,
    },
    trainingsocial10: {
      type: String,
      trim: true,
    },
    trainingsocial11: {
      type: String,
      trim: true,
    },
    trainingsocial12: {
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
section1A53Schema.plugin(toJSON);
section1A53Schema.plugin(paginate);

const Section1A53Schema = mongoose.model('section1A53Schema', section1A53Schema);

module.exports = Section1A53Schema;
