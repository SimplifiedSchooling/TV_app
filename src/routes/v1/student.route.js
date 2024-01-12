const express = require('express');
const multer = require('multer');
const validate = require('../../middlewares/validate');
const StudentValidation = require('../../validations/student.validation');
const StudentController = require('../../controllers/student.controller');

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
  .route('/bulkupload/:sessionId/:classId/:sectionId')
  .post(uploads.single('file'), validate(StudentValidation.studentSchema), StudentController.bulkUploadFile);

router
  .route('/')
  .post(validate(StudentValidation.createStudent), StudentController.createStudent)
  .get(validate(StudentValidation.getAllStudents), StudentController.getStudents);

router
  .route('/:studentId')
  .get(StudentController.getStudent)
  .patch(validate(StudentValidation.updateStudentById), StudentController.updateStudent)
  .delete(validate(StudentValidation.deleteStudentById), StudentController.deleteStudent);

router
  .route('/getStudentByscode/:scode')
  .get(validate(StudentValidation.getStudentByScode), StudentController.getStudentByScode);

router
  .route('/get-student/applyed-for-leave')
  .get(validate(StudentValidation.getAllStudents), StudentController.getStudents);

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: Students
 *   description:   Students Management System
 */

/**
 * @swagger
 * /student/bulkupload/{sessionId}/{classId}/{sectionId}:
 *   post:
 *     summary: Upload a CSV file for bulk student upload with session, class, and section
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: sessionId
 *         schema:
 *           type: string
 *         required: true
 *         description: Session ID
 *       - in: path
 *         name: classId
 *         schema:
 *           type: string
 *         required: true
 *         description: Class ID
 *       - in: path
 *         name: sectionId
 *         schema:
 *           type: string
 *         required: true
 *         description: Section ID
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
 *         description: Successfully added CSV file with session, class, and section
 *       404:
 *         description: Missing file
 */

/**
 * @swagger
 * /student:
 *   post:
 *     summary: Create a new Student
 *     tags: [Students]
 *     requestBody:
 *       description: Student object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudentInput'
 *     responses:
 *       200:
 *         description: Student created successfully
 *   get:
 *     summary: Get list of Students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: List of Student retrieved successfully
 *
 * /student/{studentId}:
 *   patch:
 *     summary: Update a single student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: number
 *         description: ID of the Student
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudentUpdateInput'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: Chapter not found
 *   delete:
 *     summary: Delete a single Student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: number
 *         description: ID of the Student
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Student not found
 *   get:
 *     summary: Get a single Student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: number
 *         description: ID of the Student
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Student not found
 */

/**
 * @swagger
 * /student/getStudentByscode/{scode}:
 *   get:
 *     summary: Get a  Student by scode
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: scode
 *         required: true
 *         schema:
 *           type: string
 *         description: scode of the Student
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Student not found
 */

/**
 * @swagger
 * /student/get-student/applyed-for-leave:
 *   get:
 *     summary: Get all subjects
 *     tags: [Subject]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Student  name *
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of subject
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
 *                     $ref: '#/components/schemas/StudentInput'
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
 * components:
 *   schemas:
 *     StudentInput:
 *       type: object
 *       properties:
 *         sessionId:
 *           type: string
 *         classId:
 *           type: string
 *         sectionId:
 *           type: string
 *         role:
 *           type: string
 *         saral_id:
 *           type: string
 *           description: SARAL ID for the student
 *         scode:
 *           type: string
 *           description: School code for the student
 *         parent_id:
 *           type: string
 *           description: ID of the parent associated with the student
 *         admission_no:
 *           type: string
 *           description: Admission number of the student
 *         roll_no:
 *           type: string
 *           description: Roll number of the student
 *         admission_date:
 *           type: string
 *           description: Admission date of the student
 *         firstname:
 *           type: string
 *           description: First name of the student
 *         middlename:
 *           type: string
 *           description: Middle name of the student
 *         lastname:
 *           type: string
 *           description: Last name of the student
 *         rte:
 *           type: string
 *           description: RTE (Right to Education) status of the student
 *         image:
 *           type: string
 *           description: URL to the student's image
 *         mobNumber:
 *           type: number
 *           description: Mobile number of the student
 *         email:
 *           type: string
 *           description: Email address of the student
 *         state:
 *           type: string
 *           description: State where the student resides
 *         city:
 *           type: string
 *           description: City where the student resides
 *         pincode:
 *           type: string
 *           description: PIN code of the student's location
 *         religion:
 *           type: string
 *           description: Religion of the student
 *         cast:
 *           type: string
 *           description: Caste of the student
 *         dob:
 *           type: string
 *           description: Date of birth of the student
 *         gender:
 *           type: string
 *           description: Gender of the student
 *         current_address:
 *           type: string
 *           description: Current address of the student
 *         permanent_address:
 *           type: string
 *           description: Permanent address of the student
 *         category_id:
 *           type: string
 *           description: ID of the category to which the student belongs
 *         route_id:
 *           type: string
 *           description: ID of the route associated with the student
 *         school_house_id:
 *           type: string
 *           description: ID of the school house where the student belongs
 *         blood_group:
 *           type: string
 *           description: Blood group of the student
 *         vehroute_id:
 *           type: string
 *           description: ID of the vehicle route for transportation
 *         hostel_room_id:
 *           type: string
 *           description: ID of the hostel room if applicable
 *         adhar_no:
 *           type: string
 *           description: Aadhar number of the student
 *         nameadhar_no:
 *           type: string
 *           description: Name as on Aadhar card
 *         samagra_id:
 *           type: string
 *           description: Samagra ID of the student
 *         aadhar_back:
 *           type: string
 *           description: URL to the backside of Aadhar card
 *         bank_account_no:
 *           type: string
 *           description: Bank account number of the student
 *         bank_name:
 *           type: string
 *           description: Name of the bank where the student has an account
 *         ifsc_code:
 *           type: string
 *           description: IFSC code of the bank
 *         guardian_is:
 *           type: string
 *           description: Relationship of the guardian with the student
 *         father_name:
 *           type: string
 *           description: Father's name
 *         father_phone:
 *           type: string
 *           description: Father's phone number
 *         father_occupation:
 *           type: string
 *           description: Father's occupation
 *         mother_name:
 *           type: string
 *           description: Mother's name
 *         mother_phone:
 *           type: string
 *           description: Mother's phone number
 *         mother_occupation:
 *           type: string
 *           description: Mother's occupation
 *         guardian_name:
 *           type: string
 *           description: Guardian's name
 *         guardian_relation:
 *           type: string
 *           description: Relationship of the guardian with the student
 *         guardian_phone:
 *           type: string
 *           description: Guardian's phone number
 *         guardian_occupation:
 *           type: string
 *           description: Guardian's occupation
 *         guardian_address:
 *           type: string
 *           description: Address of the guardian
 *         guardian_email:
 *           type: string
 *           description: Email address of the guardian
 *         father_pic:
 *           type: string
 *           description: URL to the father's picture
 *         mother_pic:
 *           type: string
 *           description: URL to the mother's picture
 *         guardian_pic:
 *           type: string
 *           description: URL to the guardian's picture
 *         is_active:
 *           type: string
 *           description: Active status of the student
 *         previous_school:
 *           type: string
 *           description: Name of the previous school
 *         height:
 *           type: string
 *           description: Height of the student
 *         weight:
 *           type: string
 *           description: Weight of the student
 *         student_health_check1:
 *           type: string
 *           description: Health check information 1
 *         student_health_check2:
 *           type: string
 *           description: Health check information 2
 *         disability:
 *           type: string
 *           description: Disability status of the student
 *         certifi_disability_avai:
 *           type: string
 *           description: Availability of disability certificate
 *         disability1:
 *           type: string
 *           description: Specific type of disability
 *         disability_type:
 *           type: string
 *           description: Type of disability
 *         percentage:
 *           type: string
 *           description: Percentage of disability
 *         certifi_number:
 *           type: string
 *           description: Certificate number for disability
 *         certifi_date:
 *           type: string
 *           description: Date of disability certificate issuance
 *         certifi_auth:
 *           type: string
 *           description: Authority that issued the certificate
 *         certificate_up:
 *           type: string
 *           description: URL to upload the disability certificate
 *         orphan:
 *           type: string
 *           description: Orphan status of the student
 *         orphanname:
 *           type: string
 *           description: Name of the orphanage if applicable
 *         bpl:
 *           type: string
 *           description: BPL (Below Poverty Line) status of the student
 *         bplyear:
 *           type: string
 *           description: Year of BPL certification
 *         bplnumber:
 *           type: string
 *           description: BPL certificate number
 *         stdincome:
 *           type: string
 *           description: Annual family income
 *         initialadmistand:
 *           type: string
 *           description: Initial admission standard
 *         admissiontype:
 *           type: string
 *           description: Type of admission
 *         mothertongue:
 *           type: string
 *           description: Mother tongue of the student
 *         hivparent:
 *           type: string
 *           description: HIV status of parents
 *         childinfected:
 *           type: string
 *           description: Child infected with HIV status
 *         studtype:
 *           type: string
 *           description: Student type
 *         mirc_code:
 *           type: string
 *           description: MIRC (Management Information Resource Center) code
 *         measurement_date:
 *           type: string
 *           description: Date of measurement
 *         dis_reason:
 *           type: string
 *           description: Disability reason
 *         note:
 *           type: string
 *           description: General note
 *         dis_note:
 *           type: string
 *           description: Note related to disability
 *         app_key:
 *           type: string
 *           description: Application key
 *         parent_app_key:
 *           type: string
 *           description: Parent's application key
 *         disable_at:
 *           type: string
 *           description: Date of disability
 *         created_at:
 *           type: string
 *           description: Date of creation
 *         updated_at:
 *           type: string
 *           description: Date of last update
 *         relaxAgeLimit:
 *           type: string
 *           description: Relaxation of age limit for the student
 *         studentnationality:
 *           type: string
 *           description: Nationality of the student
 *         identificationMark1:
 *           type: string
 *           description: First identification mark of the student
 *         identificationMark2:
 *           type: string
 *           description: Second identification mark of the student
 *         agerelaxation:
 *           type: string
 *           description: Age relaxation information
 *         hostel_id:
 *           type: string
 *           description: ID of the hostel where the student resides
 *         academicstreamopt:
 *           type: string
 *           description: Academic stream option chosen by the student
 *         statustudprevyear:
 *           type: string
 *           description: Status of the student in the previous academic year
 *         admitunderpvt:
 *           type: string
 *           description: Admission under private institution information
 *         prevclassstudiedappe:
 *           type: string
 *           description: Class studied in the previous academic year (appearing)
 *         prevclassstudiedres:
 *           type: string
 *           description: Class studied in the previous academic year (result declared)
 *         facilitiesprov:
 *           type: string
 *           description: Facilities provided to the student
 *         schstudent:
 *           type: string
 *           description: Scholarship information for the student
 *         centralsch:
 *           type: string
 *           description: Central scholarship information
 *         stateschol:
 *           type: string
 *           description: State scholarship information
 *         otherschol:
 *           type: string
 *           description: Other scholarship information
 *         scholamout:
 *           type: string
 *           description: Scholarship amount
 *         sldchild:
 *           type: string
 *           description: Specific learning disability status of the student
 *         cwsnfacilitie1:
 *           type: string
 *           description: CWSN (Children with Special Needs) facility 1
 *         asdchild:
 *           type: string
 *           description: Autism spectrum disorder status of the student
 *         adhdchild:
 *           type: string
 *           description: Attention deficit hyperactivity disorder status of the student
 *         stdinvextacurricularact:
 *           type: string
 *           description: Student involvement in extracurricular activities
 *         cwsnfacilitie:
 *           type: string
 *           description: CWSN facility information
 *         math:
 *           type: string
 *           description: Mathematics proficiency of the student
 *         technical:
 *           type: string
 *           description: Technical proficiency of the student
 *         language:
 *           type: string
 *           description: Language proficiency of the student
 *         sport:
 *           type: string
 *           description: Sports proficiency of the student
 *         science:
 *           type: string
 *           description: Science proficiency of the student
 *         art:
 *           type: string
 *           description: Art proficiency of the student
 *         mentorprovid:
 *           type: string
 *           description: Mentor provided to the student
 *         nurturance:
 *           type: string
 *           description: Nurturance information
 *         nurturancestate:
 *           type: string
 *           description: Nurturance state information
 *         nurturancenational:
 *           type: string
 *           description: Nurturance national information
 *         appeareslc:
 *           type: string
 *           description: Appearance in SSLC (Secondary School Leaving Certificate) examination
 *         participncc:
 *           type: string
 *           description: Participation in NCC (National Cadet Corps)
 *         vocationalcourse:
 *           type: string
 *           description: Vocational course information
 *         classstudprev:
 *           type: string
 *           description: Class studied in the previous academic year
 *         free_Text_Book:
 *           type: boolean
 *           description: free_Text_Book information
 *         free_Uniforms:
 *           type: boolean
 *           description: free_Uniforms information
 *         free_Transport_Facility:
 *           type: boolean
 *           description: free_Transport_Facility information
 *         free_Escort:
 *           type: boolean
 *           description: free_Escort information
 *         free_By_Cycle:
 *           type: boolean
 *           description: free_By_Cycle information
 *         free_Mobile_Tablet_Computer:
 *           type: boolean
 *           description: free_Mobile_Tablet_Computer information
 *         free_Hostel:
 *           type: boolean
 *           description: free_Hostel information
 *         braille_Book:
 *           type: boolean
 *           description: braille_Book information
 *         braille_Kit:
 *           type: boolean
 *           description: braille_Kit information
 *         low_Vision_Kit:
 *           type: boolean
 *           description: low_Vision_Kit information
 *         hearing_Aid:
 *           type: boolean
 *           description: hearing_Aid information
 *         braces:
 *           type: boolean
 *           description: braces information
 *         crutches:
 *           type: string
 *           description: crutches information
 *         wheel_Chair:
 *           type: boolean
 *           description: wheel_Chair information
 *         tri_cycle:
 *           type: boolean
 *           description: tri_cycle information
 *         caliper:
 *          type: boolean
 *          description: caliper information
 *         escort:
 *          type: boolean
 *          description: escort information
 *         stipend:
 *          type: boolean
 *          description: stipend information
 *         other:
 *          type: boolean
 *          description: other information
 *         trade:
 *          type: string
 *          description: Trade information
 *         jobrole:
 *          type: string
 *          description: Job role information
 *       theoryhrs:
 *          type: string
 *          description: Number of theory hours
 *       practicalhrs:
 *          type: string
 *          description: Number of practical hours
 *       traininghrs:
 *          type: string
 *          description: Number of training hours
 *       fieldvisit:
 *          type: string
 *          description: Field visit information
 *       examprevclasvocsub:
 *          type: string
 *          description: Examination of the previous class in vocational subjects
 *       marksobtain:
 *          type: string
 *          description: Marks obtained by the student
 *       studappliedforplacemant:
 *          type: string
 *          description: Student applied for placement information
 *       studeappliedforapprentice:
 *          type: string
 *          description: Student applied for apprentice information
 *       example:
 *         sectionId: 651cf2fc2c054218ddd660c5
 *         classId: 651cf2fc2c054218ddd660c5
 *         sessionId: 651cf2fc2c054218ddd660c5
 *         saral_id: "ABC12345"
 *         scode: "XYZ456"
 *         age: 23
 *         role: student
 *         admission_no: "A12345"
 *         roll_no: "R67890"
 *         admission_date: "2023-09-01"
 *         firstname: "John"
 *         middlename: "doe"
 *         lastname: "Smith"
 *         rte: "Yes"
 *         image: "https://example.com/student-image.jpg"
 *         mobNumber: 12332434
 *         email: "abc@gmail.com"
 *         state: "maharashtra"
 *         city: "Pune"
 *         pincode: "123455"
 *         religion: "Hindu"
 *         cast: "General"
 *         dob: "2005-05-15"
 *         gender: "Male"
 *         current_address: "123 Main St"
 *         permanent_address: "456 Oak St"
 *         category_id: "CAT123"
 *         route_id: "ROUTE456"
 *         school_house_id: "HOUSE789"
 *         blood_group: "A+"
 *         vehroute_id: "VEHICLE123"
 *         hostel_room_id: "ROOM456"
 *         adhar_no: "1234-5678-9012"
 *         nameadhar_no: "John Doe Smith"
 *         samagra_id: "SAMAGRA123"
 *         aadhar_back: "https://example.com/aadhar-back.jpg"
 *         bank_account_no: "9876-5432-1098"
 *         bank_name: "Example Bank"
 *         ifsc_code: "EXMP1234567"
 *         guardian_is: "Father"
 *         father_name: "John Doe Sr."
 *         father_phone: "987-654-3210"
 *         father_occupation: "Engineer"
 *         mother_name: "Jane Doe"
 *         mother_phone: "987-654-3211"
 *         mother_occupation: "Doctor"
 *         guardian_name: "Guardian Name"
 *         guardian_relation: "Guardian Relation"
 *         guardian_phone: "987-654-3212"
 *         guardian_occupation: "Guardian Occupation"
 *         guardian_address: "789 Elm St"
 *         guardian_email: "guardian@example.com"
 *         father_pic: "https://example.com/father-pic.jpg"
 *         mother_pic: "https://example.com/mother-pic.jpg"
 *         guardian_pic: "https://example.com/guardian-pic.jpg"
 *         is_active: "Yes"
 *         previous_school: "Previous School Name"
 *         height: "160 cm"
 *         weight: "50 kg"
 *         student_health_check1: "Health check information 1"
 *         student_health_check2: "Health check information 2"
 *         disability: "No"
 *         certifi_disability_avai: "Yes"
 *         disability1: "Specific type of disability"
 *         disability_type: "Type of disability"
 *         percentage: "10%"
 *         certifi_number: "CERT12345"
 *         certifi_date: "2023-08-01"
 *         certifi_auth: "Certifying Authority"
 *         certificate_up: "https://example.com/disability-certificate.jpg"
 *         orphan: "No"
 *         orphanname: "Orphanage Name"
 *         bpl: "Yes"
 *         bplyear: "2022"
 *         bplnumber: "BPL12345"
 *         stdincome: "50000"
 *         initialadmistand: "Grade 5"
 *         admissiontype: "New Admission"
 *         mothertongue: "English"
 *         hivparent: "No"
 *         childinfected: "No"
 *         studtype: "Regular"
 *         mirc_code: "MIRC123"
 *         measurement_date: "2023-09-05"
 *         dis_reason: "No disability reason"
 *         note: "General note"
 *         dis_note: "Note related to disability"
 *         app_key: "APPKEY123"
 *         parent_app_key: "PARENTAPPKEY123"
 *         disable_at: "2023-08-15"
 *         relaxAgeLimit: "2 years"
 *         studentnationality: "Indian"
 *         identificationMark1: "Mole on the left cheek"
 *         identificationMark2: "Scar on the right hand"
 *         agerelaxation: "Yes, for specified categories"
 *         hostel_id: "H123"
 *         academicstreamopt: "Science"
 *         statustudprevyear: "Pass"
 *         admitunderpvt: "No"
 *         prevclassstudiedappe: "10th Standard"
 *         prevclassstudiedres: "11th Standard"
 *         facilitiesprov: "Library, Sports Ground"
 *         schstudent: "Yes"
 *         centralsch: "No"
 *         stateschol: "Yes, Maharashtra State Scholarship"
 *         otherschol: "No"
 *         scholamout: "5000 INR"
 *         sldchild: "No"
 *         cwsnfacilitie1: "Special teaching assistant"
 *         asdchild: "No"
 *         adhdchild: "No"
 *         stdinvextacurricularact: "Active participant in debate club"
 *         cwsnfacilitie: "Ramp for wheelchair access"
 *         math: "A"
 *         technical: "B+"
 *         language: "A-"
 *         sport: "Football - Intermediate"
 *         science: "A"
 *         art: "C"
 *         mentorprovid: "Yes"
 *         nurturance: "Regular counseling sessions"
 *         nurturancestate: "Satisfactory"
 *         nurturancenational: "Excellent"
 *         appeareslc: "Yes"
 *         participncc: "No"
 *         vocationalcourse: "Yes, Computer Programming"
 *         classstudprev: "11th Standard"
 *         free_Text_Book: true
 *         free_Uniforms: true
 *         free_Transport_Facility: true
 *         free_Escort: true
 *         free_By_Cycle: true
 *         free_Mobile_Tablet_Computer: true
 *         free_Hostel: true
 *         braille_Book: true
 *         braille_Kit: true
 *         low_Vision_Kit: true
 *         hearing_Aid: true
 *         braces: true
 *         crutches: true
 *         wheel_Chair: true
 *         tri_cycle: true
 *         caliper: true
 *         escort: true
 *         stipend: true
 *         other: true
 *         trade: "Information Technology"
 *         jobrole: "Software Developer"
 *         theoryhrs: "120 hours"
 *         practicalhrs: "80 hours"
 *         traininghrs: "100 hours"
 *         fieldvisit: "Industry visit to IT companies"
 *         examprevclasvocsub: "Yes, in Computer Programming"
 *         marksobtain: "85%"
 *         studappliedforplacemant: "Yes"
 *         studeappliedforapprentice: "No"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     StudentUpdateInput:
 *       type: object
 *       properties:
 *         studentId:
 *           type: string
 *         classId:
 *           type: string
 *         sectionId:
 *           type: string
 *         role:
 *           type: string
 *         saral_id:
 *           type: string
 *           description: SARAL ID for the student
 *         scode:
 *           type: string
 *           description: School code for the student
 *         parent_id:
 *           type: string
 *           description: ID of the parent associated with the student
 *         admission_no:
 *           type: string
 *           description: Admission number of the student
 *         roll_no:
 *           type: string
 *           description: Roll number of the student
 *         admission_date:
 *           type: string
 *           description: Admission date of the student
 *         firstname:
 *           type: string
 *           description: First name of the student
 *         middlename:
 *           type: string
 *           description: Middle name of the student
 *         lastname:
 *           type: string
 *           description: Last name of the student
 *         rte:
 *           type: string
 *           description: RTE (Right to Education) status of the student
 *         image:
 *           type: string
 *           description: URL to the student's image
 *         mobNumber:
 *           type: number
 *           description: Mobile number of the student
 *         email:
 *           type: string
 *           description: Email address of the student
 *         state:
 *           type: string
 *           description: State where the student resides
 *         city:
 *           type: string
 *           description: City where the student resides
 *         pincode:
 *           type: string
 *           description: PIN code of the student's location
 *         religion:
 *           type: string
 *           description: Religion of the student
 *         cast:
 *           type: string
 *           description: Caste of the student
 *         dob:
 *           type: string
 *           description: Date of birth of the student
 *         gender:
 *           type: string
 *           description: Gender of the student
 *         current_address:
 *           type: string
 *           description: Current address of the student
 *         permanent_address:
 *           type: string
 *           description: Permanent address of the student
 *         category_id:
 *           type: string
 *           description: ID of the category to which the student belongs
 *         route_id:
 *           type: string
 *           description: ID of the route associated with the student
 *         school_house_id:
 *           type: string
 *           description: ID of the school house where the student belongs
 *         blood_group:
 *           type: string
 *           description: Blood group of the student
 *         vehroute_id:
 *           type: string
 *           description: ID of the vehicle route for transportation
 *         hostel_room_id:
 *           type: string
 *           description: ID of the hostel room if applicable
 *         adhar_no:
 *           type: string
 *           description: Aadhar number of the student
 *         nameadhar_no:
 *           type: string
 *           description: Name as on Aadhar card
 *         samagra_id:
 *           type: string
 *           description: Samagra ID of the student
 *         aadhar_back:
 *           type: string
 *           description: URL to the backside of Aadhar card
 *         bank_account_no:
 *           type: string
 *           description: Bank account number of the student
 *         bank_name:
 *           type: string
 *           description: Name of the bank where the student has an account
 *         ifsc_code:
 *           type: string
 *           description: IFSC code of the bank
 *         guardian_is:
 *           type: string
 *           description: Relationship of the guardian with the student
 *         father_name:
 *           type: string
 *           description: Father's name
 *         father_phone:
 *           type: string
 *           description: Father's phone number
 *         father_occupation:
 *           type: string
 *           description: Father's occupation
 *         mother_name:
 *           type: string
 *           description: Mother's name
 *         mother_phone:
 *           type: string
 *           description: Mother's phone number
 *         mother_occupation:
 *           type: string
 *           description: Mother's occupation
 *         guardian_name:
 *           type: string
 *           description: Guardian's name
 *         guardian_relation:
 *           type: string
 *           description: Relationship of the guardian with the student
 *         guardian_phone:
 *           type: string
 *           description: Guardian's phone number
 *         guardian_occupation:
 *           type: string
 *           description: Guardian's occupation
 *         guardian_address:
 *           type: string
 *           description: Address of the guardian
 *         guardian_email:
 *           type: string
 *           description: Email address of the guardian
 *         father_pic:
 *           type: string
 *           description: URL to the father's picture
 *         mother_pic:
 *           type: string
 *           description: URL to the mother's picture
 *         guardian_pic:
 *           type: string
 *           description: URL to the guardian's picture
 *         is_active:
 *           type: string
 *           description: Active status of the student
 *         previous_school:
 *           type: string
 *           description: Name of the previous school
 *         height:
 *           type: string
 *           description: Height of the student
 *         weight:
 *           type: string
 *           description: Weight of the student
 *         student_health_check1:
 *           type: string
 *           description: Health check information 1
 *         student_health_check2:
 *           type: string
 *           description: Health check information 2
 *         disability:
 *           type: string
 *           description: Disability status of the student
 *         certifi_disability_avai:
 *           type: string
 *           description: Availability of disability certificate
 *         disability1:
 *           type: string
 *           description: Specific type of disability
 *         disability_type:
 *           type: string
 *           description: Type of disability
 *         percentage:
 *           type: string
 *           description: Percentage of disability
 *         certifi_number:
 *           type: string
 *           description: Certificate number for disability
 *         certifi_date:
 *           type: string
 *           description: Date of disability certificate issuance
 *         certifi_auth:
 *           type: string
 *           description: Authority that issued the certificate
 *         certificate_up:
 *           type: string
 *           description: URL to upload the disability certificate
 *         orphan:
 *           type: string
 *           description: Orphan status of the student
 *         orphanname:
 *           type: string
 *           description: Name of the orphanage if applicable
 *         bpl:
 *           type: string
 *           description: BPL (Below Poverty Line) status of the student
 *         bplyear:
 *           type: string
 *           description: Year of BPL certification
 *         bplnumber:
 *           type: string
 *           description: BPL certificate number
 *         stdincome:
 *           type: string
 *           description: Annual family income
 *         initialadmistand:
 *           type: string
 *           description: Initial admission standard
 *         admissiontype:
 *           type: string
 *           description: Type of admission
 *         mothertongue:
 *           type: string
 *           description: Mother tongue of the student
 *         hivparent:
 *           type: string
 *           description: HIV status of parents
 *         childinfected:
 *           type: string
 *           description: Child infected with HIV status
 *         studtype:
 *           type: string
 *           description: Student type
 *         mirc_code:
 *           type: string
 *           description: MIRC (Management Information Resource Center) code
 *         measurement_date:
 *           type: string
 *           description: Date of measurement
 *         dis_reason:
 *           type: string
 *           description: Disability reason
 *         note:
 *           type: string
 *           description: General note
 *         dis_note:
 *           type: string
 *           description: Note related to disability
 *         app_key:
 *           type: string
 *           description: Application key
 *         parent_app_key:
 *           type: string
 *           description: Parent's application key
 *         disable_at:
 *           type: string
 *           description: Date of disability
 *         created_at:
 *           type: string
 *           description: Date of creation
 *         updated_at:
 *           type: string
 *           description: Date of last update
 *       example:
 *         saral_id: "ABC12345"
 *         scode: "XYZ456"
 *         age: 23
 *         role: student
 *         admission_no: "A12345"
 *         roll_no: "R67890"
 *         admission_date: "2023-09-01"
 *         firstname: "John"
 *         middlename: "doe"
 *         lastname: "Smith"
 *         rte: "Yes"
 *         image: "https://example.com/student-image.jpg"
 *         mobNumber: 12332434
 *         email: "abc@gmail.com"
 *         state: "maharashtra"
 *         city: "Pune"
 *         pincode: "123455"
 *         religion: "Hindu"
 *         cast: "General"
 *         dob: "2005-05-15"
 *         gender: "Male"
 *         current_address: "123 Main St"
 *         permanent_address: "456 Oak St"
 *         category_id: "CAT123"
 *         route_id: "ROUTE456"
 *         school_house_id: "HOUSE789"
 *         blood_group: "A+"
 *         vehroute_id: "VEHICLE123"
 *         hostel_room_id: "ROOM456"
 *         adhar_no: "1234-5678-9012"
 *         nameadhar_no: "John Doe Smith"
 *         samagra_id: "SAMAGRA123"
 *         aadhar_back: "https://example.com/aadhar-back.jpg"
 *         bank_account_no: "9876-5432-1098"
 *         bank_name: "Example Bank"
 *         ifsc_code: "EXMP1234567"
 *         guardian_is: "Father"
 *         father_name: "John Doe Sr."
 *         father_phone: "987-654-3210"
 *         father_occupation: "Engineer"
 *         mother_name: "Jane Doe"
 *         mother_phone: "987-654-3211"
 *         mother_occupation: "Doctor"
 *         guardian_name: "Guardian Name"
 *         guardian_relation: "Guardian Relation"
 *         guardian_phone: "987-654-3212"
 *         guardian_occupation: "Guardian Occupation"
 *         guardian_address: "789 Elm St"
 *         guardian_email: "guardian@example.com"
 *         father_pic: "https://example.com/father-pic.jpg"
 *         mother_pic: "https://example.com/mother-pic.jpg"
 *         guardian_pic: "https://example.com/guardian-pic.jpg"
 *         is_active: "Yes"
 *         previous_school: "Previous School Name"
 *         height: "160 cm"
 *         weight: "50 kg"
 *         student_health_check1: "Health check information 1"
 *         student_health_check2: "Health check information 2"
 *         disability: "No"
 *         certifi_disability_avai: "Yes"
 *         disability1: "Specific type of disability"
 *         disability_type: "Type of disability"
 *         percentage: "10%"
 *         certifi_number: "CERT12345"
 *         certifi_date: "2023-08-01"
 *         certifi_auth: "Certifying Authority"
 *         certificate_up: "https://example.com/disability-certificate.jpg"
 *         orphan: "No"
 *         orphanname: "Orphanage Name"
 *         bpl: "Yes"
 *         bplyear: "2022"
 *         bplnumber: "BPL12345"
 *         stdincome: "50000"
 *         initialadmistand: "Grade 5"
 *         admissiontype: "New Admission"
 *         mothertongue: "English"
 *         hivparent: "No"
 *         childinfected: "No"
 *         studtype: "Regular"
 *         mirc_code: "MIRC123"
 *         measurement_date: "2023-09-05"
 *         dis_reason: "No disability reason"
 *         note: "General note"
 *         dis_note: "Note related to disability"
 *         app_key: "APPKEY123"
 *         parent_app_key: "PARENTAPPKEY123"
 */
