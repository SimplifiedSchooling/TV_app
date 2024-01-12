const express = require('express');
const validate = require('../../../middlewares/validate');
const Section1A53Controller = require('../../../controllers/masterControllers/section1A(1.51 to 1.53).controller');
const Section1A53Validation = require('../../../validations/masterValidations/section1A(1.51 to 1.53).validation');

const router = express.Router();

router
  .route('/')
  .post(validate(Section1A53Validation.createSection1A53), Section1A53Controller.createSection1A53)
  .get(validate(Section1A53Validation.getAllSection1A53), Section1A53Controller.getAllSection1A53);

router
  .route('/:Section1A53Id')
  .get(validate(Section1A53Validation.getSection1A53), Section1A53Controller.getSection1A53ById)
  .patch(validate(Section1A53Validation.updateSection1A53), Section1A53Controller.updateSection1A53)
  .delete(validate(Section1A53Validation.deleteSection1A53), Section1A53Controller.deleteSection1A53);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Section1A53
 *   description: section1A(1.41 to 1.50)  form - 5
 */

/**
 * @swagger
 * /Section1A53:
 *   post:
 *     summary: Create a Section1A53
 *     tags: [Section1A53]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - EBSBActivity
 *               - textbookreceivedpreprimary
 *               - textbookreceivedprimary
 *               - textbookreceivedupperprimary
 *               - textbookreceivedsecondary
 *               - textbookreceivedhighersecondary
 *               - txtrecacayearpreprimary
 *               - txtrecacayearprimary
 *               - txtrecacayearupperprimary
 *               - txtrecacayearsecondary
 *               - txtrecacayearhighersecondary
 *               - TMLpreprimary
 *               - TMLprimary
 *               - TMLupperprimary
 *               - TMLsecondary
 *               - TMLhighersecondary
 *               - noofchildTMLpreprimary
 *               - noofchildTMLprimary
 *               - noofchildTMLupperprimary
 *               - noofchildTMLsecondary
 *               - noofchildTMLhighersecondary
 *               - TMLformathpreprimary
 *               - TMLformathprimary
 *               - TMLformathupperprimary
 *               - TMLformathsecondary
 *               - TMLformathhighersecondary
 *               - gradedmatpreprimary
 *               - gradedmatprimary
 *               - gradedmatupperprimary
 *               - gradedmatsecondary
 *               - gradedmathighersecondary
 *               - noofgradedmatpreprimary
 *               - noofgradedmatprimary
 *               - noofgradedmatupperprimary
 *               - noofgradedmatsecondary
 *               - noofgradedmathighersecondary
 *               - noofaccessgradedmatpreprimary
 *               - noofaccessgradedmatprimary
 *               - noofaccessgradedmatupperprimary
 *               - noofaccessgradedmatsecondary
 *               - noofaccessgradedmathighersecondary
 *               - noofbookspreprimary
 *               - noofbooksprimary
 *               - noofbooksupperprimary
 *               - noofbookssecondary
 *               - noofbookshighersecondary
 *               - noofbooksborpreprimary
 *               - noofbooksborprimary
 *               - noofbooksborupperprimary
 *               - noofbooksborsecondary
 *               - noofbooksborhighersecondary
 *               - noofparentalcompreprimary
 *               - noofparentalcomprimary
 *               - noofparentalcomupperprimary
 *               - noofparentalcomsecondary
 *               - noofparentalcomhighersecondary
 *               - FLNperprimary
 *               - FLNprimary
 *               - FLNupperprimary
 *               - FLNsecondary
 *               - FLNhighersecondary
 *               - peerlerpreprimary
 *               - peerlerprimary
 *               - peerlerupperprimary
 *               - peerlersecondary
 *               - peerlerhighersecondary
 *               - playmatavaipreprimary
 *               - playmatavaiprimary
 *               - playmatavaiupperprimary
 *               - playmatavaisecondary
 *               - playmatavaihighersecondary
 *               - freeuniformpreprimary
 *               - freeuniformprimary
 *               - freeuniformupperprimary
 *               - freeuniformsecondary
 *               - freeuniformhighersecondary
 *               - uniformpromonthpreprimary
 *               - uniformpromonthprimary
 *               - uniformpromonthupperprimary
 *               - uniformpromonthsecondary
 *               - uniformpromonthhigersecondary
 *               - learnoutcome1
 *               - learnoutcome2
 *               - learnoutcome3
 *               - learnoutcome4
 *               - learnoutcome5
 *               - learnoutcome6
 *               - learnoutcome7
 *               - learnoutcome8
 *               - learnoutcome9
 *               - learnoutcome10
 *               - learnoutcome11
 *               - learnoutcome12
 *               - noofcriterion1
 *               - noofcriterion2
 *               - noofcriterion3
 *               - noofcriterion4
 *               - noofcriterion5
 *               - noofcriterion6
 *               - noofcriterion7
 *               - noofcriterion8
 *               - noofcriterion9
 *               - noofcriterion10
 *               - noofcriterion11
 *               - noofcriterion12
 *               - teachingaids1
 *               - teachingaids2
 *               - teachingaids3
 *               - teachingaids4
 *               - teachingaids5
 *               - teachingaids6
 *               - teachingaids7
 *               - teachingaids8
 *               - teachingaids9
 *               - teachingaids10
 *               - teachingaids11
 *               - teachingaids12
 *               - activities1
 *               - activities2
 *               - activities3
 *               - activities4
 *               - activities5
 *               - activities6
 *               - activities7
 *               - activities8
 *               - activities9
 *               - activities10
 *               - activities11
 *               - activities12
 *               - hardsport1
 *               - hardsport2
 *               - hardsport3
 *               - hardsport4
 *               - hardsport5
 *               - hardsport6
 *               - hardsport7
 *               - hardsport8
 *               - hardsport9
 *               - hardsport10
 *               - hardsport11
 *               - hardsport12
 *               - orientationcybersafety1
 *               - orientationcybersafety2
 *               - orientationcybersafety3
 *               - orientationcybersafety4
 *               - orientationcybersafety5
 *               - orientationcybersafety6
 *               - orientationcybersafety7
 *               - orientationcybersafety8
 *               - orientationcybersafety9
 *               - orientationcybersafety10
 *               - orientationcybersafety11
 *               - orientationcybersafety12
 *               - trainingsocial1
 *               - trainingsocial2
 *               - trainingsocial3
 *               - trainingsocial4
 *               - trainingsocial5
 *               - trainingsocial6
 *               - trainingsocial7
 *               - trainingsocial8
 *               - trainingsocial9
 *               - trainingsocial10
 *               - trainingsocial11
 *               - trainingsocial12
 *               - scode
 *             example:
 *               EBSBActivity: Some EBSB Activity
 *               textbookreceivedpreprimary: Received textbooks for preprimary
 *               textbookreceivedprimary: Received textbooks for primary
 *               textbookreceivedupperprimary: Received textbooks for upper primary
 *               textbookreceivedsecondary: Received textbooks for secondary
 *               textbookreceivedhighersecondary: Received textbooks for higher secondary
 *               txtrecacayearpreprimary: "2023"
 *               txtrecacayearprimary: "2023"
 *               txtrecacayearupperprimary: "2023"
 *               txtrecacayearsecondary: "2023"
 *               txtrecacayearhighersecondary: "2023"
 *               TMLpreprimary: TML preprimary data
 *               TMLprimary: TML primary data
 *               TMLupperprimary: TML upper primary data
 *               TMLsecondary: TML secondary data
 *               TMLhighersecondary: TML higher secondary data
 *               noofchildTMLpreprimary: "100"
 *               noofchildTMLprimary: "12"
 *               noofchildTMLupperprimary: "16"
 *               noofchildTMLsecondary: "300"
 *               noofchildTMLhighersecondary: "30"
 *               TMLformathpreprimary: TML formath preprimary data
 *               TMLformathprimary: TML formath primary data
 *               TMLformathupperprimary: TML formath upper primary data
 *               TMLformathsecondary: TML formath secondary data
 *               TMLformathhighersecondary: TML formath higher secondary data
 *               gradedmatpreprimary: Graded material preprimary data
 *               gradedmatprimary: Graded material primary data
 *               gradedmatupperprimary: Graded material upper primary data
 *               gradedmatsecondary: Graded material secondary data
 *               gradedmathighersecondary: Graded material higher secondary data
 *               noofgradedmatpreprimary: "30"
 *               noofgradedmatprimary: "23"
 *               noofgradedmatupperprimary: "35"
 *               noofgradedmatsecondary: "21"
 *               noofgradedmathighersecondary: "40"
 *               noofaccessgradedmatpreprimary: "40"
 *               noofaccessgradedmatprimary: "23"
 *               noofaccessgradedmatupperprimary: "2"
 *               noofaccessgradedmatsecondary: "3"
 *               noofaccessgradedmathighersecondary: "1"
 *               noofbookspreprimary: "3"
 *               noofbooksprimary: "2"
 *               noofbooksupperprimary: "3"
 *               noofbookssecondary: "32"
 *               noofbookshighersecondary: "100"
 *               noofbooksborpreprimary: "200"
 *               noofbooksborprimary: "230"
 *               noofbooksborupperprimary: "500"
 *               noofbooksborsecondary: "32"
 *               noofbooksborhighersecondary: "420"
 *               noofparentalcompreprimary: "300"
 *               noofparentalcomprimary: "300"
 *               noofparentalcomupperprimary: "1000"
 *               noofparentalcomsecondary: "43"
 *               noofparentalcomhighersecondary: "54"
 *               FLNperprimary: FLN perprimary data
 *               FLNprimary: FLN primary data
 *               FLNupperprimary: FLN upper primary data
 *               FLNsecondary: FLN secondary data
 *               FLNhighersecondary: FLN higher secondary data
 *               peerlerpreprimary: Peerler preprimary data
 *               peerlerprimary: Peerler primary data
 *               peerlerupperprimary: Peerler upper primary data
 *               peerlersecondary: Peerler secondary data
 *               peerlerhighersecondary: Peerler higher secondary data
 *               playmatavaipreprimary: Playmat avai preprimary data
 *               playmatavaiprimary: Playmat avai primary data
 *               playmatavaiupperprimary: Playmat avai upper primary data
 *               playmatavaisecondary: Playmat avai secondary data
 *               playmatavaihighersecondary: Playmat avai higher secondary data
 *               freeuniformpreprimary: Free uniform preprimary data
 *               freeuniformprimary: Free uniform primary data
 *               freeuniformupperprimary: Free uniform upper primary data
 *               freeuniformsecondary: Free uniform secondary data
 *               freeuniformhighersecondary: Free uniform higher secondary data
 *               uniformpromonthpreprimary: Uniform promotion month preprimary data
 *               uniformpromonthprimary: Uniform promotion month primary data
 *               uniformpromonthupperprimary: Uniform promotion month upper primary data
 *               uniformpromonthsecondary: Uniform promotion month secondary data
 *               uniformpromonthhigersecondary: Uniform promotion month higher secondary data
 *               learnoutcome1: "1"
 *               learnoutcome2: "2"
 *               learnoutcome3: "3"
 *               learnoutcome4: "1"
 *               learnoutcome5: "3"
 *               learnoutcome6: "2"
 *               learnoutcome7: "3"
 *               learnoutcome8: "32"
 *               learnoutcome9: "10"
 *               learnoutcome10: "20"
 *               learnoutcome11: "23"
 *               learnoutcome12: "57"
 *               noofcriterion1: "1"
 *               noofcriterion2: "2"
 *               noofcriterion3: "3"
 *               noofcriterion4: "1"
 *               noofcriterion5: "3"
 *               noofcriterion6: "2"
 *               noofcriterion7: "3"
 *               noofcriterion8: "32"
 *               noofcriterion9: "10"
 *               noofcriterion10: "20"
 *               noofcriterion11: "23"
 *               noofcriterion12: "57"
 *               teachingaids1: "1"
 *               teachingaids2: "2"
 *               teachingaids3: "3"
 *               teachingaids4: "1"
 *               teachingaids5: "3"
 *               teachingaids6: "2"
 *               teachingaids7: "3"
 *               teachingaids8: "32"
 *               teachingaids9: "10"
 *               teachingaids10: "20"
 *               teachingaids11: "23"
 *               teachingaids12: "57"
 *               activities1: "1"
 *               activities2: "2"
 *               activities3: "3"
 *               activities4: "1"
 *               activities5: "3"
 *               activities6: "2"
 *               activities7: "3"
 *               activities8: "32"
 *               activities9: "10"
 *               activities10: "20"
 *               activities11: "23"
 *               activities12: "5"
 *               orientationcybersafety1: Orientation Cyber Safety data
 *               orientationcybersafety2: Orientation Cyber Safety data
 *               orientationcybersafety3: Orientation Cyber Safety data
 *               orientationcybersafety4: Orientation Cyber Safety data
 *               orientationcybersafety5: Orientation Cyber Safety data
 *               orientationcybersafety6: Orientation Cyber Safety data
 *               orientationcybersafety7: Orientation Cyber Safety data
 *               orientationcybersafety8: Orientation Cyber Safety data
 *               orientationcybersafety9: Orientation Cyber Safety data
 *               orientationcybersafety10: Orientation Cyber Safety data
 *               orientationcybersafety11: Orientation Cyber Safety data
 *               orientationcybersafety12: Orientation Cyber Safety data
 *               trainingsocial1: Training Social data
 *               trainingsocial2: Training Social data
 *               trainingsocial3: Training Social data
 *               trainingsocial4: Training Social data
 *               trainingsocial5: Training Social data
 *               trainingsocial6: Training Social data
 *               trainingsocial7: Training Social data
 *               trainingsocial8: Training Social data
 *               trainingsocial9: Training Social data
 *               trainingsocial10: Training Social data
 *               trainingsocial11: Training Social data
 *               trainingsocial12: Training Social data
 *               scode: SCODE_VALUE
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section1A53'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Section1A53
 *     tags: [Section1A53]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: Residential
 *         schema:
 *           type: string
 *         description: Residential name
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of users
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Section1A53'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /Section1A53/{Section1A53Id}:
 *   get:
 *     summary: Get a Section1A53
 *     tags: [Section1A53]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1A53Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1A53Id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section1A53'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Section1A53
 *     tags: [Section1A53]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1A53Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1A53Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - EBSBActivity
 *               - textbookreceivedpreprimary
 *               - textbookreceivedprimary
 *               - textbookreceivedupperprimary
 *               - textbookreceivedsecondary
 *               - textbookreceivedhighersecondary
 *               - txtrecacayearpreprimary
 *               - txtrecacayearprimary
 *               - txtrecacayearupperprimary
 *               - txtrecacayearsecondary
 *               - txtrecacayearhighersecondary
 *               - TMLpreprimary
 *               - TMLprimary
 *               - TMLupperprimary
 *               - TMLsecondary
 *               - TMLhighersecondary
 *               - noofchildTMLpreprimary
 *               - noofchildTMLprimary
 *               - noofchildTMLupperprimary
 *               - noofchildTMLsecondary
 *               - noofchildTMLhighersecondary
 *               - TMLformathpreprimary
 *               - TMLformathprimary
 *               - TMLformathupperprimary
 *               - TMLformathsecondary
 *               - TMLformathhighersecondary
 *               - gradedmatpreprimary
 *               - gradedmatprimary
 *               - gradedmatupperprimary
 *               - gradedmatsecondary
 *               - gradedmathighersecondary
 *               - noofgradedmatpreprimary
 *               - noofgradedmatprimary
 *               - noofgradedmatupperprimary
 *               - noofgradedmatsecondary
 *               - noofgradedmathighersecondary
 *               - noofaccessgradedmatpreprimary
 *               - noofaccessgradedmatprimary
 *               - noofaccessgradedmatupperprimary
 *               - noofaccessgradedmatsecondary
 *               - noofaccessgradedmathighersecondary
 *               - noofbookspreprimary
 *               - noofbooksprimary
 *               - noofbooksupperprimary
 *               - noofbookssecondary
 *               - noofbookshighersecondary
 *               - noofbooksborpreprimary
 *               - noofbooksborprimary
 *               - noofbooksborupperprimary
 *               - noofbooksborsecondary
 *               - noofbooksborhighersecondary
 *               - noofparentalcompreprimary
 *               - noofparentalcomprimary
 *               - noofparentalcomupperprimary
 *               - noofparentalcomsecondary
 *               - noofparentalcomhighersecondary
 *               - FLNperprimary
 *               - FLNprimary
 *               - FLNupperprimary
 *               - FLNsecondary
 *               - FLNhighersecondary
 *               - peerlerpreprimary
 *               - peerlerprimary
 *               - peerlerupperprimary
 *               - peerlersecondary
 *               - peerlerhighersecondary
 *               - playmatavaipreprimary
 *               - playmatavaiprimary
 *               - playmatavaiupperprimary
 *               - playmatavaisecondary
 *               - playmatavaihighersecondary
 *               - freeuniformpreprimary
 *               - freeuniformprimary
 *               - freeuniformupperprimary
 *               - freeuniformsecondary
 *               - freeuniformhighersecondary
 *               - uniformpromonthpreprimary
 *               - uniformpromonthprimary
 *               - uniformpromonthupperprimary
 *               - uniformpromonthsecondary
 *               - uniformpromonthhigersecondary
 *               - learnoutcome1
 *               - learnoutcome2
 *               - learnoutcome3
 *               - learnoutcome4
 *               - learnoutcome5
 *               - learnoutcome6
 *               - learnoutcome7
 *               - learnoutcome8
 *               - learnoutcome9
 *               - learnoutcome10
 *               - learnoutcome11
 *               - learnoutcome12
 *               - noofcriterion1
 *               - noofcriterion2
 *               - noofcriterion3
 *               - noofcriterion4
 *               - noofcriterion5
 *               - noofcriterion6
 *               - noofcriterion7
 *               - noofcriterion8
 *               - noofcriterion9
 *               - noofcriterion10
 *               - noofcriterion11
 *               - noofcriterion12
 *               - teachingaids1
 *               - teachingaids2
 *               - teachingaids3
 *               - teachingaids4
 *               - teachingaids5
 *               - teachingaids6
 *               - teachingaids7
 *               - teachingaids8
 *               - teachingaids9
 *               - teachingaids10
 *               - teachingaids11
 *               - teachingaids12
 *               - activities1
 *               - activities2
 *               - activities3
 *               - activities4
 *               - activities5
 *               - activities6
 *               - activities7
 *               - activities8
 *               - activities9
 *               - activities10
 *               - activities11
 *               - activities12
 *               - hardsport1
 *               - hardsport2
 *               - hardsport3
 *               - hardsport4
 *               - hardsport5
 *               - hardsport6
 *               - hardsport7
 *               - hardsport8
 *               - hardsport9
 *               - hardsport10
 *               - hardsport11
 *               - hardsport12
 *               - orientationcybersafety1
 *               - orientationcybersafety2
 *               - orientationcybersafety3
 *               - orientationcybersafety4
 *               - orientationcybersafety5
 *               - orientationcybersafety6
 *               - orientationcybersafety7
 *               - orientationcybersafety8
 *               - orientationcybersafety9
 *               - orientationcybersafety10
 *               - orientationcybersafety11
 *               - orientationcybersafety12
 *               - trainingsocial1
 *               - trainingsocial2
 *               - trainingsocial3
 *               - trainingsocial4
 *               - trainingsocial5
 *               - trainingsocial6
 *               - trainingsocial7
 *               - trainingsocial8
 *               - trainingsocial9
 *               - trainingsocial10
 *               - trainingsocial11
 *               - trainingsocial12
 *             example:
 *               EBSBActivity: Some EBSB Activity
 *               textbookreceivedpreprimary: Received textbooks for preprimary
 *               textbookreceivedprimary: Received textbooks for primary
 *               textbookreceivedupperprimary: Received textbooks for upper primary
 *               textbookreceivedsecondary: Received textbooks for secondary
 *               textbookreceivedhighersecondary: Received textbooks for higher secondary
 *               txtrecacayearpreprimary: "2023"
 *               txtrecacayearprimary: "2023"
 *               txtrecacayearupperprimary: "2023"
 *               txtrecacayearsecondary: "2023"
 *               txtrecacayearhighersecondary: "2023"
 *               TMLpreprimary: TML preprimary data
 *               TMLprimary: TML primary data
 *               TMLupperprimary: TML upper primary data
 *               TMLsecondary: TML secondary data
 *               TMLhighersecondary: TML higher secondary data
 *               noofchildTMLpreprimary: "100"
 *               noofchildTMLprimary: "12"
 *               noofchildTMLupperprimary: "16"
 *               noofchildTMLsecondary: "300"
 *               noofchildTMLhighersecondary: "30"
 *               TMLformathpreprimary: TML formath preprimary data
 *               TMLformathprimary: TML formath primary data
 *               TMLformathupperprimary: TML formath upper primary data
 *               TMLformathsecondary: TML formath secondary data
 *               TMLformathhighersecondary: TML formath higher secondary data
 *               gradedmatpreprimary: Graded material preprimary data
 *               gradedmatprimary: Graded material primary data
 *               gradedmatupperprimary: Graded material upper primary data
 *               gradedmatsecondary: Graded material secondary data
 *               gradedmathighersecondary: Graded material higher secondary data
 *               noofgradedmatpreprimary: "30"
 *               noofgradedmatprimary: "23"
 *               noofgradedmatupperprimary: "35"
 *               noofgradedmatsecondary: "21"
 *               noofgradedmathighersecondary: "40"
 *               noofaccessgradedmatpreprimary: "40"
 *               noofaccessgradedmatprimary: "23"
 *               noofaccessgradedmatupperprimary: "2"
 *               noofaccessgradedmatsecondary: "3"
 *               noofaccessgradedmathighersecondary: "1"
 *               noofbookspreprimary: "3"
 *               noofbooksprimary: "2"
 *               noofbooksupperprimary: "3"
 *               noofbookssecondary: "32"
 *               noofbookshighersecondary: "100"
 *               noofbooksborpreprimary: "200"
 *               noofbooksborprimary: "230"
 *               noofbooksborupperprimary: "500"
 *               noofbooksborsecondary: "32"
 *               noofbooksborhighersecondary: "420"
 *               noofparentalcompreprimary: "300"
 *               noofparentalcomprimary: "300"
 *               noofparentalcomupperprimary: "1000"
 *               noofparentalcomsecondary: "43"
 *               noofparentalcomhighersecondary: "54"
 *               FLNperprimary: FLN perprimary data
 *               FLNprimary: FLN primary data
 *               FLNupperprimary: FLN upper primary data
 *               FLNsecondary: FLN secondary data
 *               FLNhighersecondary: FLN higher secondary data
 *               peerlerpreprimary: Peerler preprimary data
 *               peerlerprimary: Peerler primary data
 *               peerlerupperprimary: Peerler upper primary data
 *               peerlersecondary: Peerler secondary data
 *               peerlerhighersecondary: Peerler higher secondary data
 *               playmatavaipreprimary: Playmat avai preprimary data
 *               playmatavaiprimary: Playmat avai primary data
 *               playmatavaiupperprimary: Playmat avai upper primary data
 *               playmatavaisecondary: Playmat avai secondary data
 *               playmatavaihighersecondary: Playmat avai higher secondary data
 *               freeuniformpreprimary: Free uniform preprimary data
 *               freeuniformprimary: Free uniform primary data
 *               freeuniformupperprimary: Free uniform upper primary data
 *               freeuniformsecondary: Free uniform secondary data
 *               freeuniformhighersecondary: Free uniform higher secondary data
 *               uniformpromonthpreprimary: Uniform promotion month preprimary data
 *               uniformpromonthprimary: Uniform promotion month primary data
 *               uniformpromonthupperprimary: Uniform promotion month upper primary data
 *               uniformpromonthsecondary: Uniform promotion month secondary data
 *               uniformpromonthhigersecondary: Uniform promotion month higher secondary data
 *               learnoutcome1: "1"
 *               learnoutcome2: "2"
 *               learnoutcome3: "3"
 *               learnoutcome4: "1"
 *               learnoutcome5: "3"
 *               learnoutcome6: "2"
 *               learnoutcome7: "3"
 *               learnoutcome8: "32"
 *               learnoutcome9: "10"
 *               learnoutcome10: "20"
 *               learnoutcome11: "23"
 *               learnoutcome12: "57"
 *               noofcriterion1: "1"
 *               noofcriterion2: "2"
 *               noofcriterion3: "3"
 *               noofcriterion4: "1"
 *               noofcriterion5: "3"
 *               noofcriterion6: "2"
 *               noofcriterion7: "3"
 *               noofcriterion8: "32"
 *               noofcriterion9: "10"
 *               noofcriterion10: "20"
 *               noofcriterion11: "23"
 *               noofcriterion12: "57"
 *               teachingaids1: "1"
 *               teachingaids2: "2"
 *               teachingaids3: "3"
 *               teachingaids4: "1"
 *               teachingaids5: "3"
 *               teachingaids6: "2"
 *               teachingaids7: "3"
 *               teachingaids8: "32"
 *               teachingaids9: "10"
 *               teachingaids10: "20"
 *               teachingaids11: "23"
 *               teachingaids12: "57"
 *               activities1: "1"
 *               activities2: "2"
 *               activities3: "3"
 *               activities4: "1"
 *               activities5: "3"
 *               activities6: "2"
 *               activities7: "3"
 *               activities8: "32"
 *               activities9: "10"
 *               activities10: "20"
 *               activities11: "23"
 *               activities12: "5"
 *               orientationcybersafety1: Orientation Cyber Safety data
 *               orientationcybersafety2: Orientation Cyber Safety data
 *               orientationcybersafety3: Orientation Cyber Safety data
 *               orientationcybersafety4: Orientation Cyber Safety data
 *               orientationcybersafety5: Orientation Cyber Safety data
 *               orientationcybersafety6: Orientation Cyber Safety data
 *               orientationcybersafety7: Orientation Cyber Safety data
 *               orientationcybersafety8: Orientation Cyber Safety data
 *               orientationcybersafety9: Orientation Cyber Safety data
 *               orientationcybersafety10: Orientation Cyber Safety data
 *               orientationcybersafety11: Orientation Cyber Safety data
 *               orientationcybersafety12: Orientation Cyber Safety data
 *               trainingsocial1: Training Social data
 *               trainingsocial2: Training Social data
 *               trainingsocial3: Training Social data
 *               trainingsocial4: Training Social data
 *               trainingsocial5: Training Social data
 *               trainingsocial6: Training Social data
 *               trainingsocial7: Training Social data
 *               trainingsocial8: Training Social data
 *               trainingsocial9: Training Social data
 *               trainingsocial10: Training Social data
 *               trainingsocial11: Training Social data
 *               trainingsocial12: Training Social data
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section1A53'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a type Section1A53
 *     tags: [Section1A53]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1A53Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1A53Id
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
