const express = require('express');
const multer = require('multer');
const validate = require('../../../middlewares/validate');
const { staffController } = require('../../../controllers');
const { staffValidation } = require('../../../validations');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const uploads = multer({ storage });

router
  .route('/bulkupload')
  .post(uploads.single('file'), validate(staffValidation.staffSchema), staffController.bulkUploadFile);

router
  .route('/')
  .post(validate(staffValidation.staffSchema), staffController.createStaff)
  .get(validate(staffValidation.getAllStaff), staffController.getAllStaff);

router
  .route('/:staffId')
  .get(validate(staffValidation.getStaff), staffController.getStaff)
  .patch(validate(staffValidation.updateStaff), staffController.updateStaffById)
  .delete(validate(staffValidation.deleteStaff), staffController.deleteStaffById);

router.route('/get-by-scode/:scode').get(validate(staffValidation.getStaffByScode), staffController.getStaffByScode);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Staff
 *   description: Staff management
 */

/**
 * @swagger
 * /staff/bulkupload:
 *   post:
 *     summary: Upload a CSV file for bulk staff upload
 *     tags: [Staff]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Successfully added CSV file
 *       404:
 *         description: Missing file
 */

/**
 * @swagger
 * /staff:
 *   post:
 *     summary: Create a new staff member
 *     tags: [Staff]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               saral_id:
 *                 type: string
 *               scode:
 *                 type: string
 *               role:
 *                 type: string
 *               campusId:
 *                 type: string
 *               employee_id:
 *                 type: number
 *               designation:
 *                 type: string
 *               qualification:
 *                 type: string
 *               work_exp:
 *                 type: number
 *               name:
 *                 type: string
 *               middlename:
 *                 type: string
 *               father_name:
 *                 type: string
 *               mobNumber:
 *                 type: string
 *               emergency_contact_no:
 *                 type: string
 *               dob:
 *                 type: string
 *                 format: date
 *               marital_status:
 *                 type: string
 *               String_of_joining:
 *                 type: string
 *               String_of_leaving:
 *                 type: string
 *               local_address:
 *                 type: string
 *               permanent_address:
 *                 type: string
 *               note:
 *                 type: string
 *               image:
 *                 type: string
 *               gender:
 *                 type: string
 *               account_title:
 *                 type: string
 *               bank_account_no:
 *                 type: number
 *               bank_name:
 *                 type: string
 *               ifsc_code:
 *                 type: string
 *               bank_branch:
 *                 type: string
 *               payscale:
 *                 type: string
 *               basic_salary:
 *                 type: number
 *               epf_no:
 *                 type: number
 *               contract_type:
 *                 type: string
 *               shift:
 *                 type: string
 *               location:
 *                 type: string
 *               facebook:
 *                 type: string
 *               twitter:
 *                 type: string
 *               linkedin:
 *                 type: string
 *               instagram:
 *                 type: string
 *               resume:
 *                 type: string
 *               joining_letter:
 *                 type: string
 *               resignation_letter:
 *                 type: string
 *               other_document_name:
 *                 type: string
 *               other_document_file:
 *                 type: string
 *               aadharno:
 *                 type: string
 *               levelupsub:
 *                 type: string
 *               levelupsubsci:
 *                 type: string
 *               levelupsubeng:
 *                 type: string
 *               levelupsubSoc:
 *                 type: string
 *               levelupsublang:
 *                 type: string
 *               academicquali:
 *                 type: string
 *               academicdegree:
 *                 type: string
 *               academicgraduatedegree:
 *                 type: string
 *               academicpostdegree:
 *                 type: string
 *               professsionalquali:
 *                 type: string
 *               disabilityifany:
 *                 type: string
 *               teachercodeut:
 *                 type: string
 *               user_id:
 *                 type: string
 *               is_active:
 *                 type: string
 *               verification_code:
 *                 type: string
 *               Social_Category:
 *                 type: string
 *               religion:
 *                 type: string
 *               Highest_Prof_Qua:
 *                 type: string
 *               Classes_Taught:
 *                 type: string
 *               Appointed_for_Subject:
 *                 type: string
 *               upper_pri_subject:
 *                 type: string
 *               secondary_subject:
 *                 type: string
 *               Main_Subject_Taught_1:
 *                 type: string
 *               Main_Subject_Taught_2:
 *                 type: string
 *               BRC:
 *                 type: string
 *               CRC:
 *                 type: string
 *               DIET:
 *                 type: string
 *               Others:
 *                 type: string
 *               Training_Recieved:
 *                 type: string
 *               Training_Need:
 *                 type: string
 *               Non_Teaching_Ass:
 *                 type: string
 *               Maths_Studied_UpTo:
 *                 type: string
 *               Science_Studied_UpTo:
 *                 type: string
 *               English_Studied_UpTo:
 *                 type: string
 *               Language_Studied_UpTo:
 *                 type: string
 *               ss_Studied_UpTo:
 *                 type: string
 *               Work_SincepresentSchool:
 *                 type: string
 *               TypeofDisabilityifAny:
 *                 type: string
 *               Trained_for_CWSN:
 *                 type: string
 *               Trained_in_Computer:
 *                 type: string
 *               natureappointment:
 *                 type: string
 *               typeofteacher:
 *                 type: string
 *               String_of_joiningss:
 *                 type: string
 *               String_of_joiningpresentschool:
 *                 type: string
 *               appointedlevel:
 *                 type: string
 *               teacherdeput:
 *                 type: string
 *               Guest:
 *                 type: string
 *               language1:
 *                 type: string
 *               language2:
 *                 type: string
 *               language3:
 *                 type: string
 *               trainedteachercwsn:
 *                 type: string
 *               trainedteacher:
 *                 type: string
 *               cwsneducation:
 *                 type: string
 *               safety_security:
 *                 type: string
 *               psycho_social:
 *                 type: string
 *               earlycwsn:
 *                 type: string
 *               remoteclasses:
 *                 type: string
 *               remotesession:
 *                 type: string
 *               avgict:
 *                 type: string
 *               lang_id:
 *                 type: string
 *             example:
 *               saral_id: "ABC123"
 *               scode: "S001"
 *               role: "teacher"
 *               campusId: 650d85819005aaa084dc2efb
 *               employee_id: 12345
 *               designation: "Teacher"
 *               qualification: "Master's Degree"
 *               work_exp: 5
 *               name: "John Doe"
 *               middlename: "M"
 *               father_name: "Doe Sr."
 *               mobNumber: "1234567890"
 *               emergency_contact_no: "9876543210"
 *               dob: "1990-01-01"
 *               marital_status: "Single"
 *               String_of_joining: "2023-08-01"
 *               String_of_leaving: "2023-12-31"
 *               local_address: "123 Main St, City"
 *               permanent_address: "456 Elm St, Town"
 *               note: "Additional notes"
 *               image: "image.jpg"
 *               gender: "Male"
 *               account_title: "Account Title"
 *               bank_account_no: 9876543210
 *               bank_name: "Bank Name"
 *               ifsc_code: "IFSC1234"
 *               bank_branch: "Bank Branch"
 *               payscale: "Scale 5"
 *               basic_salary: 50000
 *               epf_no: 1234567890
 *               contract_type: "Permanent"
 *               shift: "Morning"
 *               location: "Location"
 *               facebook: "https://www.facebook.com/johndoe"
 *               twitter: "https://twitter.com/johndoe"
 *               linkedin: "https://www.linkedin.com/in/johndoe"
 *               instagram: "https://www.instagram.com/johndoe"
 *               resume: "resume.pdf"
 *               joining_letter: "joining.pdf"
 *               resignation_letter: "resignation.pdf"
 *               other_document_name: "Other Document"
 *               other_document_file: "other_document.pdf"
 *               aadharno: "123456789012"
 *               levelupsub: "Subject Level"
 *               levelupsubsci: "Science Level"
 *               levelupsubeng: "English Level"
 *               levelupsubSoc: "Social Science Level"
 *               levelupsublang: "Language Level"
 *               academicquali: "Academic Qualification"
 *               academicdegree: "Academic Degree"
 *               academicgraduatedegree: "Graduate Degree"
 *               academicpostdegree: "Postgraduate Degree"
 *               professsionalquali: "Professional Qualification"
 *               disabilityifany: "No"
 *               teachercodeut: "Teacher Code UT"
 *               user_id: "user123"
 *               is_active: "Active"
 *               verification_code: "123456"
 *               Social_Category: "Social Category"
 *               religion: "Religion"
 *               Highest_Prof_Qua: "Highest Professional Qualification"
 *               Classes_Taught: "Classes Taught"
 *               Appointed_for_Subject: "Appointed for Subject"
 *               upper_pri_subject: "Upper Primary Subject"
 *               secondary_subject: "Secondary Subject"
 *               Main_Subject_Taught_1: "Subject 1"
 *               Main_Subject_Taught_2: "Subject 2"
 *               BRC: "BRC"
 *               CRC: "CRC"
 *               DIET: "DIET"
 *               Others: "Others"
 *               Training_Recieved: "Training Received"
 *               Training_Need: "Training Need"
 *               Non_Teaching_Ass: "Non-Teaching Assignment"
 *               Maths_Studied_UpTo: "Maths Studied Up To"
 *               Science_Studied_UpTo: "Science Studied Up To"
 *               English_Studied_UpTo: "English Studied Up To"
 *               Language_Studied_UpTo: "Language Studied Up To"
 *               ss_Studied_UpTo: "Social Studies Studied Up To"
 *               Work_SincepresentSchool: "Work Since Present School"
 *               TypeofDisabilityifAny: "Type of Disability (if any)"
 *               Trained_for_CWSN: "Trained for CWSN"
 *               Trained_in_Computer: "Trained in Computer"
 *               natureappointment: "Nature of Appointment"
 *               typeofteacher: "Type of Teacher"
 *               String_of_joiningss: "2023-08-01"
 *               String_of_joiningpresentschool: "2023-08-01"
 *               appointedlevel: "Appointed Level"
 *               teacherdeput: "Teacher Deputation"
 *               Guest: "Guest"
 *               language1: "Language 1"
 *               language2: "Language 2"
 *               language3: "Language 3"
 *               trainedteachercwsn: "Trained Teacher CWSN"
 *               trainedteacher: "Trained Teacher"
 *               cwsneducation: "CWSN Education"
 *               safety_security: "Safety and Security"
 *               psycho_social: "Psycho-Social"
 *               earlycwsn: "Early CWSN"
 *               remoteclasses: "Remote Classes"
 *               remotesession: "Remote Session"
 *               avgict: "Average ICT"
 *               lang_id: "Language ID"
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Staff'
 *       "400":
 *         description: Bad Request
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *   get:
 *     summary: Get all staffs
 *     tags: [Staff]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *       - in: query
 *         name: userName
 *         schema:
 *           type: string
 *         description: staff name *
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
 *                     $ref: '#/components/schemas/Staff'
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
 * /staff/get-by-scode/{scode}:
 *   get:
 *     summary: Get a satff
 *     tags: [Staff]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: scode
 *         required: true
 *         schema:
 *           type: string
 *         description: scode
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Staff'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 */

/**
 * @swagger
 * /staff/{staffId}:
 *   get:
 *     summary: Get a satff
 *     tags: [Staff]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: staffId
 *         required: true
 *         schema:
 *           type: string
 *         description: staffId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Staff'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a satff
 *     tags: [Staff]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: staffId
 *         required: true
 *         schema:
 *           type: string
 *         description: staffId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               saral_id:
 *                 type: string
 *               scode:
 *                 type: string
 *               role:
 *                 type: string
 *               campusId:
 *                 type: string
 *               employee_id:
 *                 type: number
 *               designation:
 *                 type: string
 *               qualification:
 *                 type: string
 *               work_exp:
 *                 type: number
 *               name:
 *                 type: string
 *               middlename:
 *                 type: string
 *               father_name:
 *                 type: string
 *               mobNumber:
 *                 type: string
 *               emergency_contact_no:
 *                 type: string
 *               dob:
 *                 type: string
 *                 format: date
 *               marital_status:
 *                 type: string
 *               String_of_joining:
 *                 type: string
 *               String_of_leaving:
 *                 type: string
 *               local_address:
 *                 type: string
 *               permanent_address:
 *                 type: string
 *               note:
 *                 type: string
 *               image:
 *                 type: string
 *               gender:
 *                 type: string
 *               account_title:
 *                 type: string
 *               bank_account_no:
 *                 type: number
 *               bank_name:
 *                 type: string
 *               ifsc_code:
 *                 type: string
 *               bank_branch:
 *                 type: string
 *               payscale:
 *                 type: string
 *               basic_salary:
 *                 type: number
 *               epf_no:
 *                 type: number
 *               contract_type:
 *                 type: string
 *               shift:
 *                 type: string
 *               location:
 *                 type: string
 *               facebook:
 *                 type: string
 *               twitter:
 *                 type: string
 *               linkedin:
 *                 type: string
 *               instagram:
 *                 type: string
 *               resume:
 *                 type: string
 *               joining_letter:
 *                 type: string
 *               resignation_letter:
 *                 type: string
 *               other_document_name:
 *                 type: string
 *               other_document_file:
 *                 type: string
 *               aadharno:
 *                 type: string
 *               levelupsub:
 *                 type: string
 *               levelupsubsci:
 *                 type: string
 *               levelupsubeng:
 *                 type: string
 *               levelupsubSoc:
 *                 type: string
 *               levelupsublang:
 *                 type: string
 *               academicquali:
 *                 type: string
 *               academicdegree:
 *                 type: string
 *               academicgraduatedegree:
 *                 type: string
 *               academicpostdegree:
 *                 type: string
 *               professsionalquali:
 *                 type: string
 *               disabilityifany:
 *                 type: string
 *               teachercodeut:
 *                 type: string
 *               user_id:
 *                 type: string
 *               is_active:
 *                 type: string
 *               verification_code:
 *                 type: string
 *               Social_Category:
 *                 type: string
 *               religion:
 *                 type: string
 *               Highest_Prof_Qua:
 *                 type: string
 *               Classes_Taught:
 *                 type: string
 *               Appointed_for_Subject:
 *                 type: string
 *               upper_pri_subject:
 *                 type: string
 *               secondary_subject:
 *                 type: string
 *               Main_Subject_Taught_1:
 *                 type: string
 *               Main_Subject_Taught_2:
 *                 type: string
 *               BRC:
 *                 type: string
 *               CRC:
 *                 type: string
 *               DIET:
 *                 type: string
 *               Others:
 *                 type: string
 *               Training_Recieved:
 *                 type: string
 *               Training_Need:
 *                 type: string
 *               Non_Teaching_Ass:
 *                 type: string
 *               Maths_Studied_UpTo:
 *                 type: string
 *               Science_Studied_UpTo:
 *                 type: string
 *               English_Studied_UpTo:
 *                 type: string
 *               Language_Studied_UpTo:
 *                 type: string
 *               ss_Studied_UpTo:
 *                 type: string
 *               Work_SincepresentSchool:
 *                 type: string
 *               TypeofDisabilityifAny:
 *                 type: string
 *               Trained_for_CWSN:
 *                 type: string
 *               Trained_in_Computer:
 *                 type: string
 *               natureappointment:
 *                 type: string
 *               typeofteacher:
 *                 type: string
 *               String_of_joiningss:
 *                 type: string
 *               String_of_joiningpresentschool:
 *                 type: string
 *               appointedlevel:
 *                 type: string
 *               teacherdeput:
 *                 type: string
 *               Guest:
 *                 type: string
 *               language1:
 *                 type: string
 *               language2:
 *                 type: string
 *               language3:
 *                 type: string
 *               trainedteachercwsn:
 *                 type: string
 *               trainedteacher:
 *                 type: string
 *               cwsneducation:
 *                 type: string
 *               safety_security:
 *                 type: string
 *               psycho_social:
 *                 type: string
 *               earlycwsn:
 *                 type: string
 *               remoteclasses:
 *                 type: string
 *               remotesession:
 *                 type: string
 *               avgict:
 *                 type: string
 *               lang_id:
 *                 type: string
 *             example:
 *               saral_id: "ABC123"
 *               scode: "S001"
 *               role: "teacher"
 *               campusId: 650d85819005aaa084dc2efb
 *               employee_id: 12345
 *               designation: "Teacher"
 *               qualification: "Master's Degree"
 *               work_exp: 5
 *               name: "John Doe"
 *               middlename: "M"
 *               father_name: "Doe Sr."
 *               mobNumber: "1234567890"
 *               emergency_contact_no: "9876543210"
 *               dob: "1990-01-01"
 *               marital_status: "Single"
 *               String_of_joining: "2023-08-01"
 *               String_of_leaving: "2023-12-31"
 *               local_address: "123 Main St, City"
 *               permanent_address: "456 Elm St, Town"
 *               note: "Additional notes"
 *               image: "image.jpg"
 *               gender: "Male"
 *               account_title: "Account Title"
 *               bank_account_no: 9876543210
 *               bank_name: "Bank Name"
 *               ifsc_code: "IFSC1234"
 *               bank_branch: "Bank Branch"
 *               payscale: "Scale 5"
 *               basic_salary: 50000
 *               epf_no: 1234567890
 *               contract_type: "Permanent"
 *               shift: "Morning"
 *               location: "Location"
 *               facebook: "https://www.facebook.com/johndoe"
 *               twitter: "https://twitter.com/johndoe"
 *               linkedin: "https://www.linkedin.com/in/johndoe"
 *               instagram: "https://www.instagram.com/johndoe"
 *               resume: "resume.pdf"
 *               joining_letter: "joining.pdf"
 *               resignation_letter: "resignation.pdf"
 *               other_document_name: "Other Document"
 *               other_document_file: "other_document.pdf"
 *               aadharno: "123456789012"
 *               levelupsub: "Subject Level"
 *               levelupsubsci: "Science Level"
 *               levelupsubeng: "English Level"
 *               levelupsubSoc: "Social Science Level"
 *               levelupsublang: "Language Level"
 *               academicquali: "Academic Qualification"
 *               academicdegree: "Academic Degree"
 *               academicgraduatedegree: "Graduate Degree"
 *               academicpostdegree: "Postgraduate Degree"
 *               professsionalquali: "Professional Qualification"
 *               disabilityifany: "No"
 *               teachercodeut: "Teacher Code UT"
 *               user_id: "user123"
 *               is_active: "Active"
 *               verification_code: "123456"
 *               Social_Category: "Social Category"
 *               religion: "Religion"
 *               Highest_Prof_Qua: "Highest Professional Qualification"
 *               Classes_Taught: "Classes Taught"
 *               Appointed_for_Subject: "Appointed for Subject"
 *               upper_pri_subject: "Upper Primary Subject"
 *               secondary_subject: "Secondary Subject"
 *               Main_Subject_Taught_1: "Subject 1"
 *               Main_Subject_Taught_2: "Subject 2"
 *               BRC: "BRC"
 *               CRC: "CRC"
 *               DIET: "DIET"
 *               Others: "Others"
 *               Training_Recieved: "Training Received"
 *               Training_Need: "Training Need"
 *               Non_Teaching_Ass: "Non-Teaching Assignment"
 *               Maths_Studied_UpTo: "Maths Studied Up To"
 *               Science_Studied_UpTo: "Science Studied Up To"
 *               English_Studied_UpTo: "English Studied Up To"
 *               Language_Studied_UpTo: "Language Studied Up To"
 *               ss_Studied_UpTo: "Social Studies Studied Up To"
 *               Work_SincepresentSchool: "Work Since Present School"
 *               TypeofDisabilityifAny: "Type of Disability (if any)"
 *               Trained_for_CWSN: "Trained for CWSN"
 *               Trained_in_Computer: "Trained in Computer"
 *               natureappointment: "Nature of Appointment"
 *               typeofteacher: "Type of Teacher"
 *               String_of_joiningss: "2023-08-01"
 *               String_of_joiningpresentschool: "2023-08-01"
 *               appointedlevel: "Appointed Level"
 *               teacherdeput: "Teacher Deputation"
 *               Guest: "Guest"
 *               language1: "Language 1"
 *               language2: "Language 2"
 *               language3: "Language 3"
 *               trainedteachercwsn: "Trained Teacher CWSN"
 *               trainedteacher: "Trained Teacher"
 *               cwsneducation: "CWSN Education"
 *               safety_security: "Safety and Security"
 *               psycho_social: "Psycho-Social"
 *               earlycwsn: "Early CWSN"
 *               remoteclasses: "Remote Classes"
 *               remotesession: "Remote Session"
 *               avgict: "Average ICT"
 *               lang_id: "Language ID"
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Staff'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a staff
 *     tags: [Staff]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: staffId
 *         required: true
 *         schema:
 *           type: string
 *         description: staffId
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
