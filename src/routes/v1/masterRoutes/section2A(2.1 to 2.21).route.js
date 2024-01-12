const express = require('express');
const validate = require('../../../middlewares/validate');
const Section2A21Controller = require('../../../controllers/masterControllers/section2A(2.1 to 2.21).controller');
const Section2A21Validation = require('../../../validations/masterValidations/section2A(2.1 to 2.21).validation');

const router = express.Router();

router
  .route('/')
  .post(validate(Section2A21Validation.createSection2A21), Section2A21Controller.createSection2A21)
  .get(validate(Section2A21Validation.getAllSection2A21), Section2A21Controller.getAllSection2A21);

router
  .route('/:Section2A21Id')
  .get(validate(Section2A21Validation.getSection2A21), Section2A21Controller.getSection2A21ById)
  .patch(validate(Section2A21Validation.updateSection2A21), Section2A21Controller.updateSection2A21)
  .delete(validate(Section2A21Validation.deleteSection2A21), Section2A21Controller.deleteSection2A21);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Section2A21
 *   description: Section2A21(2.22-2.27) form-12
 */

/**
 * @swagger
 * /Section2A21:
 *   post:
 *     summary: Create a Section2A21
 *     tags: [Section2A21]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - statusofschoolbuilding
 *               - noofbuildingblocks
 *               - noofpuccabuilding
 *               - noofpartiallypuccabuilding
 *               - noofkuchchabuilding
 *               - nooftent
 *               - noofdilapidatedbuilding
 *               - noofbuildingunderconst
 *               - typeofboundarywall
 *               - noofclassrooms
 *               - noofpreprimaryclassroom
 *               - noofprimaryclassroom
 *               - noofupperprimaryclassroom
 *               - noofsecondaryclassroom
 *               - noofhighersecondaryclassroom
 *               - noofnotinuseclassroom
 *               - noofclassroomforinstructpurpose
 *               - noofclassrommsunderconstruct
 *               - noofclassroomdilapidated
 *               - noofpuccagoodconclassroom
 *               - noofpuccaminorrepairclassroom
 *               - noofpuccamajorrepairclassroom
 *               - noofpartialpuccagoodconclassroom
 *               - noofpartialpuccaminorrepairclassroom
 *               - noofpartialpuccamajorrepairclassroom
 *               - noofkuchchagoodconclassroom
 *               - noofkuchchaminorrepairclassroom
 *               - noofkuchchamajorrepairclassroom
 *               - nooftentgoodconclassroom
 *               - nooftentminorrepairclassroom
 *               - nooftentmajorrepairclassroom
 *               - otherroomcount
 *               - schooltoilet
 *               - nooftoiletseatsboys
 *               - nooftoiletseatsboysfuctional
 *               - nooftoiletseatsgirls
 *               - nooftoiletseatsgirlsfuctional
 *               - nooftoiletseatstotal
 *               - nooftoiletseatsfuctionaltotal
 *               - nooftoiletseatsboysCWSN
 *               - nooftoiletseatsboysfuctionalCWSN
 *               - nooftoiletseatsgirlsCWSN
 *               - nooftoiletseatsgirlsfuctionalCWSN
 *               - nooftoiletseatstotalCWSN
 *               - nooftoiletseatsfuctionaltotalCWSN
 *               - nooftoiletseatsboystotalCWSN
 *               - nooftoiletseatsboysfuctionaltotalCWSN
 *               - nooftoiletseatsgirlstotalCWSN
 *               - nooftoiletseatsgirlsfuctionaltotalCWSN
 *               - nooftoiletseatstotalCWSNfinal
 *               - nooftoiletseatsfuctionaltotalCWSNfinal
 *               - noofurinalsboys
 *               - noofurinalboysfuctional
 *               - noofurinalgirls
 *               - noofurinalgirlsfuctional
 *               - noofurinaltotal
 *               - noofurinalfuctionaltotal
 *               - nooftoiletsrunningwatersboys
 *               - nooftoiletsrunningwatergirls
 *               - noofurinalrunningwaterboys
 *               - noofurinalrunningwatergirls
 *               - soapavailable
 *               - incineratoravailingrilstoilet
 *               - drinkingwater
 *               - handpump
 *               - handpumpfuctional
 *               - protectedwell
 *               - protectedwellfuctional
 *               - unprotectedwell
 *               - functsmartclassavai
 *               - unprotectedwellfuctional
 *               - tapwarter
 *               - tapwarterfuctional
 *               - packgedwarter
 *               - packgedwarterfuctional
 *               - othersourcename
 *               - otherresorce
 *               - otherresorcefuctional
 *               - waterpurifierRO
 *               - waterqualitytested
 *               - rainwaterharvesting
 *               - handwashfacility
 *               - noofwashpoints
 *               - electricityavai
 *               - solarpanelavai
 *               - libraryavai
 *               - noofbooklibrary
 *               - noofNCERTbooklibrary
 *               - noofbookbank
 *               - noofNCERTbookbank
 *               - noofbookreadingcorner
 *               - noofNCERTbookreadingcorner
 *               - fulltimelibrary
 *               - schoolnewsnewspaper
 *               - landavaiforexpansionofschool
 *               - noofadditionalclassroom
 *               - playgroundavai
 *               - adequatearrangforchildpaly
 *               - healthcheckup
 *               - noofhealthcheckups
 *               - healthcheckupheight
 *               - healthcheckupweight
 *               - healthcheckupeyes
 *               - healthcheckupDental
 *               - healthcheckupThroat
 *               - healthwarmingtab
 *               - healthironandfobictab
 *               - annualhealthrecord
 *               - thermalscanneravai
 *               - rampfordisabledchild
 *               - handrailavai
 *               - specialeducator
 *               - kitchengarden
 *               - kitchenshed
 *               - dustbinforcalssroom
 *               - dustbintoilets
 *               - dustbinforkiten
 *               - furnitureforstduent
 *               - noofstudenthavefurniture
 *               - separateroomforhead
 *               - separateroomforlibrary
 *               - separateroomforassihead
 *               - separateroomforgirls
 *               - staffroomforteacher
 *               - activityroom
 *               - staffquarter
 *               - tinkeringlab
 *               - saniterypadvendingmachine
 *               - integratedsciencelab
 *               - physicslab
 *               - physicsroom
 *               - chemistrylab
 *               - chemistryroom
 *               - biologylab
 *               - biologyroom
 *               - mathematicslab
 *               - mathematicsroom
 *               - languagelab
 *               - languageroom
 *               - geographylab
 *               - geographyroom
 *               - homesciencelab
 *               - homescienceroom
 *               - psychologylab
 *               - phychologyroom
 *               - audiovisualsystem
 *               - sciencekit
 *               - mathkit
 *               - biometrickit
 *               - essentialmedicineavai
 *               - firstaidavai
 *               - scode
 *             example:
 *               statusofschoolbuilding: Good
 *               noofbuildingblocks: "3"
 *               noofpuccabuilding: "2"
 *               noofpartiallypuccabuilding: "1"
 *               noofkuchchabuilding: "0"
 *               nooftent: "0"
 *               noofdilapidatedbuilding: "0"
 *               noofbuildingunderconst: "0"
 *               typeofboundarywall: Concrete
 *               noofclassrooms: "20"
 *               noofpreprimaryclassroom: "4"
 *               noofprimaryclassroom: "12"
 *               noofsecondaryclassroom: "2"
 *               noofhighersecondaryclassroom: "7"
 *               noofnotinuseclassroom: "0"
 *               noofclassroomforinstructpurpose: "2"
 *               noofclassrommsunderconstruct: "5"
 *               noofclassroomdilapidated: "0"
 *               noofpuccagoodconclassroom: "12"
 *               noofpuccaminorrepairclassroom: "1"
 *               noofpuccamajorrepairclassroom: "1"
 *               noofpartialpuccagoodconclassroom: "32"
 *               noofpartialpuccaminorrepairclassroom: "0"
 *               noofpartialpuccamajorrepairclassroom: "0"
 *               noofkuchchagoodconclassroom: "12"
 *               noofkuchchaminorrepairclassroom: "3"
 *               noofkuchchamajorrepairclassroom: "2"
 *               nooftentgoodconclassroom: "22"
 *               nooftentminorrepairclassroom: "0"
 *               nooftentmajorrepairclassroom: "0"
 *               otherroomcount: "5"
 *               schooltoilet: "Yes"
 *               nooftoiletseatsboys: "10"
 *               nooftoiletseatsboysfuctional: "3"
 *               nooftoiletseatsgirls: "6"
 *               nooftoiletseatsgirlsfuctional: "10"
 *               nooftoiletseatstotal: "22"
 *               nooftoiletseatsfuctionaltotal: "18"
 *               nooftoiletseatsboysCWSN: "2"
 *               nooftoiletseatsboysfuctionalCWSN: "2"
 *               nooftoiletseatsgirlsCWSN: "3"
 *               nooftoiletseatsgirlsfuctionalCWSN: "2"
 *               nooftoiletseatstotalCWSN: "5"
 *               nooftoiletseatsfuctionaltotalCWSN: "5"
 *               nooftoiletseatsboystotalCWSN: "12"
 *               nooftoiletseatsboysfuctionaltotalCWSN: "10"
 *               nooftoiletseatsgirlstotalCWSN: "32"
 *               nooftoiletseatsgirlsfuctionaltotalCWSN: "22"
 *               nooftoiletseatstotalCWSNfinal: "21"
 *               nooftoiletseatsfuctionaltotalCWSNfinal: "22"
 *               noofurinalsboys: "32"
 *               noofurinalboysfuctional: "32"
 *               noofurinalgirls: "54"
 *               noofurinalgirlsfuctional: "22"
 *               noofurinaltotal: "2"
 *               noofurinalfuctionaltotal: "54"
 *               nooftoiletsrunningwatersboys: "12"
 *               nooftoiletsrunningwatergirls: "32"
 *               noofurinalrunningwaterboys: "7"
 *               noofurinalrunningwatergirls: "3"
 *               soapavailable: Yes
 *               incineratoravailingrilstoilet: No
 *               drinkingwater: Yes
 *               handpump: No
 *               handpumpfuctional: N/A
 *               protectedwell: Yes
 *               protectedwellfuctional: Yes
 *               unprotectedwell: No
 *               unprotectedwellfuctional: N/A
 *               tapwarter: Yes
 *               tapwarterfuctional: Yes
 *               packgedwarter: No
 *               packgedwarterfuctional: N/A
 *               othersourcename: Rainwater Harvesting
 *               otherresorce: No
 *               otherresorcefuctional: Yes
 *               waterpurifierRO: No
 *               waterqualitytested: N/A
 *               rainwaterharvesting: Yes
 *               handwashfacility: Yes
 *               noofwashpoints: "5"
 *               electricityavai: No
 *               libraryavai: Yes
 *               noofbooklibrary: "500"
 *               noofNCERTbooklibrary: "200"
 *               bookbankavai: "Yes"
 *               noofbookbank: "101"
 *               noofNCERTbookbank: "20"
 *               readingcorneravai: Yes
 *               noofbookreadingcorner: "2"
 *               noofNCERTbookreadingcorner: "1"
 *               fulltimelibrary: No
 *               schoolnewsnewspaper: Yes
 *               landavaiforexpansionofschool: Yes
 *               noofadditionalclassroom: "21"
 *               playgroundavai: Yes
 *               adequatearrangforchildpaly: Yes
 *               healthcheckup: Yes
 *               noofhealthcheckups: "2"
 *               healthcheckupheight: Yes
 *               healthcheckupweight: Yes
 *               healthcheckupeyes: Yes
 *               healthcheckupDental: Yes
 *               healthcheckupThroat: Yes
 *               healthwarmingtab: Yes
 *               healthironandfobictab: Yes
 *               annualhealthrecord: Yes
 *               thermalscanneravai: Yes
 *               rampfordisabledchild: Yes
 *               handrailavai: Yes
 *               specialeducator: Yes
 *               kitchengarden: Yes
 *               kitchenshed: Yes
 *               dustbinforcalssroom: Yes
 *               dustbintoilets: Yes
 *               dustbinforkiten: Yes
 *               furnitureforstduent: Yes
 *               noofstudenthavefurniture: "100"
 *               separateroomforhead: Yes
 *               separateroomforlibrary: Yes
 *               separateroomforassihead: Yes
 *               separateroomforgirls: Yes
 *               staffroomforteacher: Yes
 *               activityroom: Yes
 *               staffquarter: Yes
 *               tinkeringlab: Yes
 *               saniterypadvendingmachine: Yes
 *               integratedsciencelab: No
 *               physicslab: Yes
 *               physicsroom: Yes
 *               chemistrylab: Yes
 *               chemistryroom: Yes
 *               biologylab: Yes
 *               biologyroom: Yes
 *               mathematicslab: Yes
 *               mathematicsroom: Yes
 *               languagelab: Yes
 *               languageroom: Yes
 *               geographylab: Yes
 *               geographyroom: Yes
 *               homesciencelab: Yes
 *               homescienceroom: Yes
 *               psychologylab: Yes
 *               phychologyroom: Yes
 *               audiovisualsystem: Yes
 *               sciencekit: Yes
 *               mathkit: Yes
 *               biometrickit: Yes
 *               essentialmedicineavai: Yes
 *               firstaidavai: Yes
 *               scode: SCODE_VALUE
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section2A21'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Section2A21
 *     tags: [Section2A21]
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
 *                     $ref: '#/components/schemas/Section2A21'
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
 * /Section2A21/{Section2A21Id}:
 *   get:
 *     summary: Get a Section2A21
 *     tags: [Section2A21]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section2A21Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section2A21Id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section2A21'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Section2A21
 *     tags: [Section2A21]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section2A21Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section2A21Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - statusofschoolbuilding
 *               - noofbuildingblocks
 *               - noofpuccabuilding
 *               - noofpartiallypuccabuilding
 *               - noofkuchchabuilding
 *               - nooftent
 *               - noofdilapidatedbuilding
 *               - noofbuildingunderconst
 *               - typeofboundarywall
 *               - noofclassrooms
 *               - noofpreprimaryclassroom
 *               - noofprimaryclassroom
 *               - noofupperprimaryclassroom
 *               - noofsecondaryclassroom
 *               - noofhighersecondaryclassroom
 *               - noofnotinuseclassroom
 *               - noofclassroomforinstructpurpose
 *               - noofclassrommsunderconstruct
 *               - noofclassroomdilapidated
 *               - noofpuccagoodconclassroom
 *               - noofpuccaminorrepairclassroom
 *               - noofpuccamajorrepairclassroom
 *               - noofpartialpuccagoodconclassroom
 *               - noofpartialpuccaminorrepairclassroom
 *               - noofpartialpuccamajorrepairclassroom
 *               - noofkuchchagoodconclassroom
 *               - noofkuchchaminorrepairclassroom
 *               - noofkuchchamajorrepairclassroom
 *               - nooftentgoodconclassroom
 *               - nooftentminorrepairclassroom
 *               - nooftentmajorrepairclassroom
 *               - otherroomcount
 *               - schooltoilet
 *               - nooftoiletseatsboys
 *               - nooftoiletseatsboysfuctional
 *               - nooftoiletseatsgirls
 *               - nooftoiletseatsgirlsfuctional
 *               - nooftoiletseatstotal
 *               - nooftoiletseatsfuctionaltotal
 *               - nooftoiletseatsboysCWSN
 *               - nooftoiletseatsboysfuctionalCWSN
 *               - nooftoiletseatsgirlsCWSN
 *               - nooftoiletseatsgirlsfuctionalCWSN
 *               - nooftoiletseatstotalCWSN
 *               - nooftoiletseatsfuctionaltotalCWSN
 *               - nooftoiletseatsboystotalCWSN
 *               - nooftoiletseatsboysfuctionaltotalCWSN
 *               - nooftoiletseatsgirlstotalCWSN
 *               - nooftoiletseatsgirlsfuctionaltotalCWSN
 *               - nooftoiletseatstotalCWSNfinal
 *               - nooftoiletseatsfuctionaltotalCWSNfinal
 *               - noofurinalsboys
 *               - noofurinalboysfuctional
 *               - noofurinalgirls
 *               - noofurinalgirlsfuctional
 *               - noofurinaltotal
 *               - noofurinalfuctionaltotal
 *               - nooftoiletsrunningwatersboys
 *               - nooftoiletsrunningwatergirls
 *               - noofurinalrunningwaterboys
 *               - noofurinalrunningwatergirls
 *               - soapavailable
 *               - incineratoravailingrilstoilet
 *               - drinkingwater
 *               - handpump
 *               - handpumpfuctional
 *               - protectedwell
 *               - protectedwellfuctional
 *               - unprotectedwell
 *               - functsmartclassavai
 *               - unprotectedwellfuctional
 *               - tapwarter
 *               - tapwarterfuctional
 *               - packgedwarter
 *               - packgedwarterfuctional
 *               - othersourcename
 *               - otherresorce
 *               - otherresorcefuctional
 *               - waterpurifierRO
 *               - waterqualitytested
 *               - rainwaterharvesting
 *               - handwashfacility
 *               - noofwashpoints
 *               - electricityavai
 *               - solarpanelavai
 *               - libraryavai
 *               - noofbooklibrary
 *               - noofNCERTbooklibrary
 *               - noofbookbank
 *               - noofNCERTbookbank
 *               - noofbookreadingcorner
 *               - noofNCERTbookreadingcorner
 *               - fulltimelibrary
 *               - schoolnewsnewspaper
 *               - landavaiforexpansionofschool
 *               - noofadditionalclassroom
 *               - playgroundavai
 *               - adequatearrangforchildpaly
 *               - healthcheckup
 *               - noofhealthcheckups
 *               - healthcheckupheight
 *               - healthcheckupweight
 *               - healthcheckupeyes
 *               - healthcheckupDental
 *               - healthcheckupThroat
 *               - healthwarmingtab
 *               - healthironandfobictab
 *               - annualhealthrecord
 *               - thermalscanneravai
 *               - rampfordisabledchild
 *               - handrailavai
 *               - specialeducator
 *               - kitchengarden
 *               - kitchenshed
 *               - dustbinforcalssroom
 *               - dustbintoilets
 *               - dustbinforkiten
 *               - furnitureforstduent
 *               - noofstudenthavefurniture
 *               - separateroomforhead
 *               - separateroomforlibrary
 *               - separateroomforassihead
 *               - separateroomforgirls
 *               - staffroomforteacher
 *               - activityroom
 *               - staffquarter
 *               - tinkeringlab
 *               - saniterypadvendingmachine
 *               - integratedsciencelab
 *               - physicslab
 *               - physicsroom
 *               - chemistrylab
 *               - chemistryroom
 *               - biologylab
 *               - biologyroom
 *               - mathematicslab
 *               - mathematicsroom
 *               - languagelab
 *               - languageroom
 *               - geographylab
 *               - geographyroom
 *               - homesciencelab
 *               - homescienceroom
 *               - psychologylab
 *               - phychologyroom
 *               - audiovisualsystem
 *               - sciencekit
 *               - mathkit
 *               - biometrickit
 *               - essentialmedicineavai
 *               - firstaidavai
 *             example:
 *               statusofschoolbuilding: Good
 *               noofbuildingblocks: "3"
 *               noofpuccabuilding: "2"
 *               noofpartiallypuccabuilding: "1"
 *               noofkuchchabuilding: "0"
 *               nooftent: "0"
 *               noofdilapidatedbuilding: "0"
 *               noofbuildingunderconst: "0"
 *               typeofboundarywall: Concrete
 *               noofclassrooms: "20"
 *               noofpreprimaryclassroom: "4"
 *               noofprimaryclassroom: "12"
 *               noofsecondaryclassroom: "2"
 *               noofhighersecondaryclassroom: "7"
 *               noofnotinuseclassroom: "0"
 *               noofclassroomforinstructpurpose: "2"
 *               noofclassrommsunderconstruct: "5"
 *               noofclassroomdilapidated: "0"
 *               noofpuccagoodconclassroom: "12"
 *               noofpuccaminorrepairclassroom: "1"
 *               noofpuccamajorrepairclassroom: "1"
 *               noofpartialpuccagoodconclassroom: "32"
 *               noofpartialpuccaminorrepairclassroom: "0"
 *               noofpartialpuccamajorrepairclassroom: "0"
 *               noofkuchchagoodconclassroom: "12"
 *               noofkuchchaminorrepairclassroom: "3"
 *               noofkuchchamajorrepairclassroom: "2"
 *               nooftentgoodconclassroom: "22"
 *               nooftentminorrepairclassroom: "0"
 *               nooftentmajorrepairclassroom: "0"
 *               otherroomcount: "5"
 *               schooltoilet: "Yes"
 *               nooftoiletseatsboys: "10"
 *               nooftoiletseatsboysfuctional: "3"
 *               nooftoiletseatsgirls: "6"
 *               nooftoiletseatsgirlsfuctional: "10"
 *               nooftoiletseatstotal: "22"
 *               nooftoiletseatsfuctionaltotal: "18"
 *               nooftoiletseatsboysCWSN: "2"
 *               nooftoiletseatsboysfuctionalCWSN: "2"
 *               nooftoiletseatsgirlsCWSN: "3"
 *               nooftoiletseatsgirlsfuctionalCWSN: "2"
 *               nooftoiletseatstotalCWSN: "5"
 *               nooftoiletseatsfuctionaltotalCWSN: "5"
 *               nooftoiletseatsboystotalCWSN: "12"
 *               nooftoiletseatsboysfuctionaltotalCWSN: "10"
 *               nooftoiletseatsgirlstotalCWSN: "32"
 *               nooftoiletseatsgirlsfuctionaltotalCWSN: "22"
 *               nooftoiletseatstotalCWSNfinal: "21"
 *               nooftoiletseatsfuctionaltotalCWSNfinal: "22"
 *               noofurinalsboys: "32"
 *               noofurinalboysfuctional: "32"
 *               noofurinalgirls: "54"
 *               noofurinalgirlsfuctional: "22"
 *               noofurinaltotal: "2"
 *               noofurinalfuctionaltotal: "54"
 *               nooftoiletsrunningwatersboys: "12"
 *               nooftoiletsrunningwatergirls: "32"
 *               noofurinalrunningwaterboys: "7"
 *               noofurinalrunningwatergirls: "3"
 *               soapavailable: Yes
 *               incineratoravailingrilstoilet: No
 *               drinkingwater: Yes
 *               handpump: No
 *               handpumpfuctional: N/A
 *               protectedwell: Yes
 *               protectedwellfuctional: Yes
 *               unprotectedwell: No
 *               unprotectedwellfuctional: N/A
 *               tapwarter: Yes
 *               tapwarterfuctional: Yes
 *               packgedwarter: No
 *               packgedwarterfuctional: N/A
 *               othersourcename: Rainwater Harvesting
 *               otherresorce: No
 *               otherresorcefuctional: Yes
 *               waterpurifierRO: No
 *               waterqualitytested: N/A
 *               rainwaterharvesting: Yes
 *               handwashfacility: Yes
 *               noofwashpoints: "5"
 *               electricityavai: No
 *               libraryavai: Yes
 *               noofbooklibrary: "500"
 *               noofNCERTbooklibrary: "200"
 *               bookbankavai: "Yes"
 *               noofbookbank: "101"
 *               noofNCERTbookbank: "20"
 *               readingcorneravai: Yes
 *               noofbookreadingcorner: "2"
 *               noofNCERTbookreadingcorner: "1"
 *               fulltimelibrary: No
 *               schoolnewsnewspaper: Yes
 *               landavaiforexpansionofschool: Yes
 *               noofadditionalclassroom: "21"
 *               playgroundavai: Yes
 *               adequatearrangforchildpaly: Yes
 *               healthcheckup: Yes
 *               noofhealthcheckups: "2"
 *               healthcheckupheight: Yes
 *               healthcheckupweight: Yes
 *               healthcheckupeyes: Yes
 *               healthcheckupDental: Yes
 *               healthcheckupThroat: Yes
 *               healthwarmingtab: Yes
 *               healthironandfobictab: Yes
 *               annualhealthrecord: Yes
 *               thermalscanneravai: Yes
 *               rampfordisabledchild: Yes
 *               handrailavai: Yes
 *               specialeducator: Yes
 *               kitchengarden: Yes
 *               kitchenshed: Yes
 *               dustbinforcalssroom: Yes
 *               dustbintoilets: Yes
 *               dustbinforkiten: Yes
 *               furnitureforstduent: Yes
 *               noofstudenthavefurniture: "100"
 *               separateroomforhead: Yes
 *               separateroomforlibrary: Yes
 *               separateroomforassihead: Yes
 *               separateroomforgirls: Yes
 *               staffroomforteacher: Yes
 *               activityroom: Yes
 *               staffquarter: Yes
 *               tinkeringlab: Yes
 *               saniterypadvendingmachine: Yes
 *               integratedsciencelab: No
 *               physicslab: Yes
 *               physicsroom: Yes
 *               chemistrylab: Yes
 *               chemistryroom: Yes
 *               biologylab: Yes
 *               biologyroom: Yes
 *               mathematicslab: Yes
 *               mathematicsroom: Yes
 *               languagelab: Yes
 *               languageroom: Yes
 *               geographylab: Yes
 *               geographyroom: Yes
 *               homesciencelab: Yes
 *               homescienceroom: Yes
 *               psychologylab: Yes
 *               phychologyroom: Yes
 *               audiovisualsystem: Yes
 *               sciencekit: Yes
 *               mathkit: Yes
 *               biometrickit: Yes
 *               essentialmedicineavai: Yes
 *               firstaidavai: Yes
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section2A21'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a type Section2A21
 *     tags: [Section2A21]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section2A21Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section2A21Id
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
