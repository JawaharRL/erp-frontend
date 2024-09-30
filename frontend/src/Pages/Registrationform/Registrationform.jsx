import React, { useEffect, useState } from 'react'; 
import './Registrationform.css'; 
import Nextwhite from '../../Assets/Nextwhite.svg'; 
import Previouswhite from '../../Assets/Previouswhite.svg'; 
import Upload from '../../Assets/upload.svg'; 
import Formtitle from '../../Components/Formtitle/Formtitle'; 
import FileUpload from '../../Components/Fileupload/Fileupload';
import Allbuttons from '../../Components/Allbuttons/Allbuttons'; 
import Allfields from '../../Components/Allfields/Allfields'; 
import Modal from '../../Components/Modal/Modal.jsx';
import { useLocation } from 'react-router-dom'; 
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const PersonalForm = () => { 
    const location = useLocation(); 
    const MAX_FILE_SIZE = 20 * 1024;
    const handleSectionClick = (section) => { 
        setDisplaySection(section); 
    }; 
    const [displaySection, setDisplaySection] = useState("personal"); 
    const [showModal, setShowModal] = useState(false);
    const [fileNames, setFileNames] = useState({}); 
    const [formData, setFormData] = useState({ 
        firstName: null, 
        lastName: null, 
        dateOfBirth: null, 
        gender: null, 
        aadharNumber: null, 
        bloodGroup: null, 
        nationality: null, 
        religion: null, 
        community: null, 
        caste: null, 
        fathersName: null, 
        fathersOccupation: null, 
        fathersMobileNumber: null, 
        mothersName: null, 
        mothersOccupation: null, 
        mothersMobileNumber: null, 
        guardiansName: null, 
        guardiansOccupation: null, 
        guardiansMobileNumber: null, 
        parentsStatus: null, 
        income: null, 
        maritalStatus: null,
        communityCertificate: null, 
        profilePhoto: null, 
        mobileNumber: null, 
        emailid: null, 
        residentialAddress: null, 
        communicationAddress: null, 
        hosteller: null, 
        hostelType: null, 
        bankName: null, 
        ifscCode: null, 
        branchName: null, 
        accountNumber: null, 
        passbook: null, 
        sslc: null, 
        hsc1Year: null, 
        hsc2Year: null, 
        diploma: null, 
        emisNumber: null, 
        firstGraduate: null, 
        specialCategory: null,
        specialCategoryFile:null,
        registerNo : location.state.userId, 
        programme: null, 
        discipline: null, 
        batch: null, 
        admissionNumber: null, 
        regulation: null, 
        semester: null, 
        umisId: null, 
        abcId: null, 
        dateOfAdmission: null, 
        courseJoinedDate: null, 
        courseType: null, 
        fastTrack: null, 
        cgpa: null, 
        studentStatus: null,
        firstGraduateFile: null 
    });
     
    useEffect(() => {
      const storedFormData = localStorage.getItem('formData');
      if (storedFormData) {
          setFormData(JSON.parse(storedFormData));
      }

      const filesToLoad = ['profilePhoto', 'passbook','communityCertificate','sslcFile','hsc1YearFile','hsc2YearFile','diploma','specialCategoryFile','firstGraduateFile'];
      filesToLoad.forEach(fileKey => {
          const fileName = localStorage.getItem(`${fileKey}FileName`);
          const fileBase64 = localStorage.getItem(fileKey);
          if (fileName && fileBase64) {
              setFormData(prevData => ({ ...prevData, [fileKey]: fileBase64 }));
              setFileNames(prevNames => ({ ...prevNames, [fileKey]: fileName }));
          }
      });
  }, []);
  
  const isValidAlphabets = (value) => /^[A-Za-z\s]+$/.test(value);
  const isValidNumbers = (value) => /^[0-9]+$/.test(value);
  const isValidDecimal = (value) => /^\d\.\d+$/.test(value);
  const isValidMark = (value) => /^(5[0-9]|[6-9][0-9]|[1-9][0-9]{1})(\.[0-9]{1,2})?$/.test(value);
  const isValidAadharNumber = (value) => /^\d{12}$/.test(value);
  const isValidMobileNumber = (value) => /^[6-9]\d{9}$/.test(value);
  const isValidEmail = (value) => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
  const isValidAlphaNumeric = (value) => /^[A-Za-z0-9]+$/.test(value);

  const validateFields = (fields) => {
    for (let { field, name, validate, errorMessage } of fields) {
      if (!field) {
        toast.error(`${name} is required.`);
        return false;
      }

      if (validate && !validate(field)) {
        toast.error(`${name} ${errorMessage}.`);
        return false;
      }
    }
    return true;
  };

  const validatePersonalInfo = () => {
    const requiredFields = [
      { field: formData.firstName, name: "First Name", validate: isValidAlphabets, errorMessage: "should contain only alphabets" },
      { field: formData.lastName, name: "Last Name", validate: isValidAlphabets, errorMessage: "should contain only alphabets" },
      { field: formData.dateOfBirth, name: "Date of Birth" },
      { field: formData.gender, name: "Gender" },
      { field: formData.aadharNumber, name: "Aadhar Number" ,validate: isValidAadharNumber, errorMessage: "should contain 12 digits " },
      { field: formData.bloodGroup, name: "Blood Group" },
      { field: formData.nationality, name: "Nationality" , validate: isValidAlphabets, errorMessage: "should contain only alphabets"},
      { field: formData.religion, name: "Religion", validate: isValidAlphabets, errorMessage: "should contain only alphabets"},
      { field: formData.community, name: "Community" },
      { field: formData.caste, name: "Caste", validate: isValidAlphabets, errorMessage: "should contain only alphabets" },
      { field: formData.fathersName, name: "Father's Name" ,  validate: isValidAlphabets, errorMessage: "should contain only alphabets"},
      { field: formData.mothersName, name: "Mother's Name" , validate: isValidAlphabets, errorMessage: "should contain only alphabets" },
      { field: formData.parentsStatus, name: "Parents Status" },
      { field: formData.income, name: "Parents income" , validate: isValidNumbers, errorMessage: "should contain only digits"},
      { field: formData.maritalStatus, name: "Marital Status" },
      { field: formData.profilePhoto, name: "Profile Photo" },
      { field: formData.communityCertificate, name: "Community Certificate" }
    ];

    if (!validateFields(requiredFields)) {
      return false;
    }


    const father = [
      { field: formData.fathersOccupation, name: "Father's Occupation", validate: isValidAlphabets, errorMessage: "should contain only alphabets or be null" },
      { field: formData.fathersMobileNumber, name: "Father's Mobile Number", validate: isValidMobileNumber, errorMessage: "should contain only 10 digits or be null" }
    ];

    const mother = [
      
      { field: formData.mothersOccupation, name: "Mother's Occupation", validate: isValidAlphabets, errorMessage: "should contain only alphabets or be null" },
      { field: formData.mothersMobileNumber, name: "Mother's Mobile Number", validate: isValidMobileNumber, errorMessage: "should contain only 10 digits or be null" }
    ];

    const guardian = [
      { field: formData.guardiansName, name: "Guardian's Name", validate: isValidAlphabets, errorMessage: "should contain only alphabets or be null" },
      { field: formData.guardiansOccupation, name: "Guardian's Occupation", validate: isValidAlphabets, errorMessage: "should contain only alphabets or be null" },
      { field: formData.guardiansMobileNumber, name: "Guardian's Mobile Number", validate: isValidMobileNumber, errorMessage: "should contain only 10 digits or be null" }
    ];

    if (formData.parentsStatus==="Both are alive"){
      if (!validateFields(father)){
        return false;
      }
      if (!validateFields(mother)) {
        return false;
      }
    }

    if (formData.parentsStatus==="Father alive"){
      if (!validateFields(father)) {
        return false;
      }
    }

    if (formData.parentsStatus==="Mother alive"){
      if (!validateFields(mother)) {
        return false;
      }
    }

    if (formData.parentsStatus==="Both are not alive"){
      if (!validateFields(guardian)) {
        return false;
      }
    }

    return true;
  };

  const validateCommunicationBankInfo = () => {
    const requiredFields = [
      { field: formData.mobileNumber, name: "Mobile Number" ,validate:isValidMobileNumber , errorMessage: "should contain only 10 digits" },
      { field: formData.emailid, name: "Email ID", validate: isValidEmail, errorMessage: "should be a valid email address" },
      { field: formData.residentialAddress, name: "Residential Address" },
      { field: formData.communicationAddress, name: "Communication Address" },
      { field: formData.hosteller, name: "Hosteller" },
      { field: formData.bankName, name: "Bank Name" ,validate:isValidAlphabets , errorMessage: "should contain only alphabets"},
      { field: formData.branchName, name: "Branch Name", validate: isValidAlphabets, errorMessage: "should contain only alphabets" },
      { field: formData.accountNumber, name: "Account Number" , validate: isValidNumbers, errorMessage: "should contain only digits"},
      { field: formData.ifscCode, name: "IFSC Code",validate: isValidAlphaNumeric, errorMessage: "should contain only alphabets and digits only" },
      { field: formData.passbook, name: "PassBook" }
    ];

    if (!validateFields(requiredFields)) {
      return false;
    }

    if (formData.hosteller === "Yes" && (!formData.hostelType||formData.hostelType==='')) {
      toast.error("Hostel Type is required");
      return false;
    }

    return true;
  };

  const validateEducationalInfo = () => {
    const requiredFields = [
      { field: formData.flowofstudy, name: "Flow of Study"},
      { field: formData.sslc, name: "SSLC" ,validate: isValidMark , errorMessage: "should be a valid decimal upto two digits"},
      { field: formData.sslcFile, name: "SSLC File" },
      { field: formData.emisNumber, name: "EMIS Number" , validate: isValidNumbers, errorMessage: "should contain only digits"},
      { field: formData.firstGraduate, name: "First Graduate" },
      { field: formData.specialCategory, name: "Special Category" }
    ];

    if (!validateFields(requiredFields)) {
      return false;
    }

    if (formData.flowofstudy.includes("hsc")) {
      const hscFields = [
        { field: formData.hsc1Year, name: "HSC First Year" ,validate:isValidMark , errorMessage: "should be a valid decimal upto two digits"},
        { field: formData.hsc1YearFile, name: "HSC First Year File" },
        { field: formData.hsc2Year, name: "HSC Second Year" , validate: isValidMark, errorMessage: "should be a valid decimal upto two digits"},
        { field: formData.hsc2YearFile, name: "HSC Second Year File" }
      ];

      if (!validateFields(hscFields)) {
        return false;
      }
    }

    if (formData.flowofstudy.includes("diploma")) {
      const diplomaFields = [
        { field: formData.diploma, name: "Diploma" ,validate:isValidMark , errorMessage: "should be a valid decimal upto two digits"},
        { field: formData.diplomaFile, name: "Diploma File" }
      ];

      if (!validateFields(diplomaFields)) {
        return false;
      }
    }

    if (formData.firstGraduate === "Yes" && !formData.firstGraduateFile) {
      toast.error("First Graduate File is required");
      return false;
    }

    if (formData.specialCategory !== "Not applicable" && !formData.specialCategoryFile) {
      toast.error("Special Category File is required");
      return false;
    }

    return true;
  };

  const validateAcademicInfo = () => {
    const requiredFields = [
      { field: formData.programme, name: "Programme" },
      { field: formData.discipline, name: "Discipline" },
      { field: formData.regulation, name: "Regulation" },
      { field: formData.batch, name: "Course Completion Year" },
      { field: formData.admissionNumber, name: "Admission Number" , validate: isValidNumbers, errorMessage: "should contain only digits"},
      { field: formData.abcId, name: "ABC Id", validate: isValidNumbers, errorMessage: "should contain only digits" },
      { field: formData.courseType, name: "Course type" },
      { field: formData.umisId, name: "UMIS Id" , validate: isValidNumbers, errorMessage: "should contain only digits"},
      { field: formData.dateOfAdmission, name: "Date of Admission" },
      { field: formData.courseJoinedDate, name: "Course Joined Date" },
      { field: formData.semester, name: "Semester" },
      { field: formData.cgpa, name: "CGPA" , validate: isValidDecimal, errorMessage: "should be a valid decimal upto two digits"},
      { field: formData.fastTrack, name: "FastTrack" },
      { field: formData.studentStatus, name: "Student Status" }
    ];

    if (!validateFields(requiredFields)) {
      return false;
    }

    return true;
  };

 
  const handleOtherField = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    localStorage.setItem('formData', JSON.stringify(updatedFormData));
  };
  const handleFileChange = (name) => async (e) => {
    const { target: { files } } = e;
    const file = files[0];
  
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        toast.error("File size exceeds 20 KB. Please upload a smaller file.");
        return; 
      }
  
      const base64 = await convertFileToBase64(file);
      setFormData(prevData => ({ ...prevData, [name]: base64 }));
      setFileNames(prevNames => ({ ...prevNames, [name]: file.name }));
      localStorage.setItem(`${name}FileName`, file.name);
      localStorage.setItem(name, base64);
    }
  };
    const convertFileToBase64 = (file) => { 
        return new Promise((resolve, reject) => { 
            const reader = new FileReader(); 
            reader.readAsDataURL(file); 
            reader.onload = () => resolve(reader.result); 
            reader.onerror = error => reject(error); 
        }); 
    }; 

    const handleSubmit =  (e) => {
      e.preventDefault();
      if (displaySection!=="academic"){
        return;
      }

      if (!validateAcademicInfo()) {
        return;
      }

      const { userId: registerNumber } = location.state;
      const updatedFormData = { ...formData, registerNo: registerNumber };

      setFormData(updatedFormData);
      localStorage.setItem('formData', JSON.stringify(updatedFormData));

      setShowModal(true);
  };

    return (
      <div>
      <form onSubmit={handleSubmit}>
        <Formtitle/>
        {displaySection === "personal" && (
             <div>
             <div className="personal-data personal-container">
             <div className="first_name">
             <Allfields fieldtype="text" value="First Name" inputname="firstName"  formData={formData} setFormData={setFormData} />
             </div>
          
  
             <div className="last_name">
               <Allfields fieldtype="text" value="Last Name" inputname="lastName"  formData={formData} setFormData={setFormData}/>
             </div>
  
             <div className="date_Of_Birth">
               <Allfields fieldtype="date" value="Date of Birth" inputname="dateOfBirth"  formData={formData} setFormData={setFormData} />
             </div>
  
             <div className="gender">
               <label htmlFor="Gender">Gender</label>
               <div className="radio" >
                 <div className="radio-spacing"><input type="radio" name="gender" value="Male" onChange={handleOtherField} checked={formData.gender === 'Male'}/> Male</div>
                 <div className="radio-spacing"><input type="radio" name="gender" value="Female" onChange={handleOtherField} checked={formData.gender === 'Female'} /> Female</div>
                 <div className="radio-spacing"><input type="radio" name="gender" value="Others" onChange={handleOtherField} checked={formData.gender === 'Others'}/> Others</div>
               </div>
             </div>
  
             <div className="aadhar_number">
               <Allfields fieldtype="text" value="Aadhar Number" inputname="aadharNumber"    formData={formData} setFormData={setFormData}/>
             </div>
             <div className="blood_group" >
               <label htmlFor="Bloodgroup">Blood Group</label>
               <select className='dropdown' name="bloodGroup" value={formData.bloodGroup || ''} onChange={handleOtherField} >
                 <option value=''>Select</option>
                 <option value="A+" >A+</option>
                 <option value="A-" >A-</option>
                 <option value="B+" >B+</option>
                 <option value="B-" >B-</option>
                 <option value="AB+" >AB+</option>
                 <option value="A1B+" >A1B+</option>
                 <option value="AB-" >AB-</option>
                 <option value="O+" >O+</option>
                 <option value="O-" >O-</option>
               </select>
             </div>
  
             <div className="nationality">
               <Allfields fieldtype="text" value="Nationality" inputname="nationality" formData={formData} setFormData={setFormData}/>
             </div>
  
             <div className="religion">
               <Allfields fieldtype="text" value="Religion" inputname="religion" formData={formData} setFormData={setFormData}  />
             </div>
  
             <div className="community" >
               <label htmlFor="Community">Community</label>
               <select className="dropdown" name="community" value={formData.community || ''} onChange={handleOtherField} >
                 <option value=''>Select</option>
                 <option value="OC" >OC</option>
                 <option value="BC" >BC</option>
                 <option value="MBC" >MBC</option>
                 <option value="SC" >SC</option>
                 <option value="DNC" >DNC</option>
                 <option value="BCM" >BCM</option>
               </select>
             </div>
  
             <div className="caste">
               <Allfields fieldtype="text" value="Caste" inputname="caste" formData={formData} setFormData={setFormData}/>
             </div>

            
             <div className="income">
               <Allfields fieldtype="text" value="Parent / Guardian Income" inputname="income"  formData={formData} setFormData={setFormData} />
             </div>
  
             <div className="parents_status">
               <label htmlFor="ParentsStatus">Parents Status</label>
               <select className="dropdown" name="parentsStatus" value={formData.parentsStatus || ''} onChange={handleOtherField} >
                 <option value=''>Select</option>
                 <option value="Both are alive" >Both are alive</option>
                 <option value="Father alive" >Father alive</option>
                 <option value="Mother alive">Mother alive</option>
                 <option value="Both are not alive">Both are not alive</option>
               </select>
             </div>

             <div className="fathers_name">
               <Allfields fieldtype="text" value="Father's Name" inputname="fathersName" formData={formData} setFormData={setFormData}/>
             </div>
  
             {(formData.parentsStatus === "Both are alive" ||formData.parentsStatus === "Father alive" ) && (
        <>
        <div className="fathers_occupation">
               <Allfields fieldtype="text" value="Father's Occupation" inputname="fathersOccupation"  formData={formData} setFormData={setFormData}/>
             </div>
  
             <div className="fathers_mobile_number">
               <Allfields fieldtype="text" value="Father's Mobile Number" inputname="fathersMobileNumber"   formData={formData} setFormData={setFormData} />
             </div>
        </>
      )}
  
             <div className="mothers_name">
               <Allfields fieldtype="text" value="Mother's Name" inputname="mothersName" formData={formData} setFormData={setFormData} />
             </div>

             {(formData.parentsStatus === "Both are alive" ||formData.parentsStatus === "Mother alive" ) && (
        <>
        <div className="mothers_occupation">
               <Allfields fieldtype="text" value="Mother's Occupation" inputname="mothersOccupation" formData={formData} setFormData={setFormData}/>
             </div>
  
             <div className="mothers_mobile_number">
               <Allfields fieldtype="text" value="Mother's Mobile Number" inputname="mothersMobileNumber"   formData={formData} setFormData={setFormData}/>
             </div>
        </>
      )}
  
             {formData.parentsStatus === "Both are not alive" && (
        <>
          <div className="guardians_name">
            <Allfields  fieldtype="text"  value="Guardian Name"  inputname="guardiansName"  formData={formData}  setFormData={setFormData}/>
          </div>

          <div className="guardians_occupation">
            <Allfields  fieldtype="text"  value="Guardian Occupation"  inputname="guardiansOccupation"  formData={formData}  setFormData={setFormData}  />
          </div>

          <div className="guardians_mobile_number">
            <Allfields fieldtype="text" value="Guardian Mobile Number" inputname="guardiansMobileNumber" formData={formData} setFormData={setFormData} />
          </div>
        </>
      )}

             
             <div className="marital_status">
               <label htmlFor="MaritalStatus">Marital Status</label>
               <select className="dropdown" name='maritalStatus'value={formData.maritalStatus || ''}  onChange={handleOtherField} >
                 <option value=''>Select</option>
                 <option value="Unmarried" >Unmarried</option>
                 <option value="Married" >Married</option>
               </select>
             </div>
  
  
                <div className="community_certificate" id="community_certificate">
                  <input type="file" id="communityCertificate" name="communityCertificate" className="educational-document" style={{ display: 'none' }} onChange={handleFileChange('communityCertificate')} />
                  <p className="marksheet_label">Community Certificate</p>
                  <label htmlFor="communityCertificate" className="File-upload-button" style={{ justifyContent: 'center' }} >
                    <img className='icon' src={Upload} alt='' />
                    <p>Upload</p>
                  </label>
                  {fileNames['communityCertificate'] && <p className="uploaded_file_name">{fileNames['communityCertificate']} Uploaded</p>}
             </div>
             <div className="profile-photo">
             <FileUpload input_name={"profilePhoto"} onFileSelect={handleFileChange('profilePhoto')} formData={formData} setFormData={setFormData} />
             </div>
            </div>
          <div className="registration_form_buttons">
         <div id="navigate_buttons_next_personal">
    <Allbuttons value="Next" image={Nextwhite} target={() => {
        if (validatePersonalInfo()) {
            handleSectionClick("communication_bank");
        }
    }} />
    
</div>
         </div>
<ToastContainer />
          </div>
        
          
  )}  
  
{displaySection === "communication_bank" && (
  <div>
    <div className="communication-data personal-container">
        <div className="mobile_no">
            <Allfields fieldtype="text" value="Mobile Number" inputname="mobileNumber" formData={formData} setFormData={setFormData} />
        </div>
        <div className="mail_id">
            <label htmlFor="Emailid">Email ID</label>
            <input id='mailid' type="email" name="emailid" value={formData.emailid || ''} onChange={handleOtherField} />
        </div>

        <div className="communication_address">
            <label htmlFor="CommunicationAddress">Communication Address</label><br />
            <textarea name="communicationAddress" cols="40" rows="6" placeholder="Enter your address here" value={formData.communicationAddress || ''} onChange={handleOtherField}></textarea>
        </div>

        <div className="residential_address">
            <label htmlFor="ResidentialAddress">Residential Address</label><br />
            <textarea name="residentialAddress" cols="40" rows="6" placeholder="Enter your address here" value={formData.residentialAddress || ''} onChange={handleOtherField}></textarea>
        </div>

        <div className="hosteller">
            <label htmlFor="Hosteller">Hosteller</label>
            <div className="radio">
                <div className="radio-spacing"><input type="radio" name="hosteller" value="Yes" onChange={handleOtherField} checked={formData.hosteller === 'Yes'} /> Yes</div>
                <div className="radio-spacing"><input type="radio" name="hosteller" value="No" onChange={handleOtherField} checked={formData.hosteller === 'No'} /> No</div>
            </div>
        </div>

        {formData.hosteller === "Yes" && (
            <div className="hostel_type">
                <label htmlFor="Hostel Type">Hostel Type</label>
                <div className="radio">
                    <div className="radio-spacing"><input type="radio" name="hostelType" value="Free" onChange={handleOtherField} checked={formData.hostelType === 'Free'} /> Free</div>
                    <div className="radio-spacing"><input type="radio" name="hostelType" value="Paid" onChange={handleOtherField} checked={formData.hostelType === 'Paid'} /> Paid</div>
                </div>
            </div>
        )}
        
        <div className="bank_name">
            <Allfields fieldtype="text" value="Bank Name" inputname="bankName" formData={formData} setFormData={setFormData} />
        </div>

        <div className="branch_Name">
            <Allfields fieldtype="text" value="Branch Name" inputname="branchName" formData={formData} setFormData={setFormData} />
        </div>

        <div className="account_Number">
            <Allfields fieldtype="text" value="Account Number" inputname="accountNumber" formData={formData} setFormData={setFormData} />
        </div>

        <div className="ifsc_Code">
            <Allfields fieldtype="text" value="IFSC Code" inputname="ifscCode" formData={formData} setFormData={setFormData} />
        </div>

        <div className="passbook">
            <input type="file" id="passbook" name="passbook" className="educational-document" style={{ display: 'none' }} onChange={handleFileChange('passbook')} />
            <p className="marksheet_label">Bank Passbook</p>
            <label htmlFor="passbook" className="File-upload-button" style={{ justifyContent: 'center' }}>
                <img className='icon' src={Upload} alt='' />
                <p>Upload</p>
            </label>
            {fileNames['passbook'] && <p className="uploaded_file_name">{fileNames['passbook']} Uploaded</p>}
        </div>
       

       
       
    </div>
    <div className="registration_form_buttons">
    <div id="navigate_buttons_previous_communication_bank">
    <Allbuttons value="Previous" image={Previouswhite} target={() => handleSectionClick("personal")} />
</div>
<div id="navigate_buttons_next_communication_bank">
    <Allbuttons value="Next" image={Nextwhite} target={() => {
        if (validateCommunicationBankInfo()) {
            handleSectionClick("educational");
        }
    }} />
</div>
    </div>
<ToastContainer />
    </div>

)}

              
              {displaySection === "educational" && (
                <div>
              <div className="educational-data personal-container">      
                <div className="flowofstudy" >
                <label htmlFor="flowofstudy">Flow of Study</label>
                <div className="radio">
                  <div className="radio-spacing"><input type="radio" name="flowofstudy" value="hsc" onChange={handleOtherField} checked={formData.flowofstudy === 'hsc'}/> HSC </div>
                  <div className="radio-spacing"><input type="radio" name="flowofstudy" value="diploma" onChange={handleOtherField} checked={formData.flowofstudy === 'diploma'}/> Diploma</div>
                  <div className="radio-spacing"><input type="radio" name="flowofstudy" value="hsc,diploma" onChange={handleOtherField} checked={formData.flowofstudy === 'hsc,diploma'}/> HSC, Diploma</div>
                </div>
              </div>  

              <div className="first_graduate">
                <label htmlFor="First Graduate">First Graduate</label>
                <div className="radio" >
                  <div className="radio-spacing"><input type="radio" name="firstGraduate" value="Yes" onChange={handleOtherField} checked={formData.firstGraduate === 'Yes'}/> Yes</div>
                  <div className="radio-spacing"><input type="radio" name="firstGraduate" value="No" onChange={handleOtherField} checked={formData.firstGraduate === 'No'} /> No</div>
                </div>
              </div>

              <div className="special_category">
                <label htmlFor="Special Category">Special Category</label>
                <select className="dropdown" name="specialCategory" value={formData.specialCategory || ''}  onChange={handleOtherField} >
                  <option value=''>Select</option>
                  <option value="7.5 Quota">7.5 Quota</option>
                  <option value="Ex-Service Man">Ex-Service Man</option>
                  <option value="Eminent sports man" >Eminent sports man</option>
                  <option value="Differently Abled" >Differently Abled</option>
                  <option value="Not applicable" >Not applicable</option>
                </select>
              </div>

              <div className="sslc">
                <div>
                <Allfields fieldtype="text" value="SSLC %" inputname="sslc"  formData={formData} setFormData={setFormData} />
                </div>
                <div className="field">
                  <input type="file" id="sslc-input" name="sslcFile" className="educational-document" style={{ display: 'none' }} onChange={handleFileChange('sslcFile')} />
                  <p className="marksheet_label">SSLC Marksheet</p>
                  <label htmlFor="sslc-input" className="File-upload-button" style={{ justifyContent: 'center' }} >
                    <img className='icon' src={Upload} alt='' />
                    <p>Upload</p>
                  </label>
                  {fileNames['sslcFile'] && <p className="uploaded_file_name">{fileNames['sslcFile']} Uploaded</p>}
              </div>
              </div>


      {formData.flowofstudy === 'hsc' || formData.flowofstudy === 'hsc,diploma' ? (
        <div className="hsc_1_Year">
          <Allfields fieldtype="text" value="HSC 1st YEAR" inputname="hsc1Year" formData={formData} setFormData={setFormData} />
          <div className="field">
            <p className="marksheet_label">HSC I-year Marksheet</p>
            <input type="file" id="hsc1-input" name="hsc1YearFile" className="educational-document" style={{ display: 'none' }} onChange={handleFileChange('hsc1YearFile')} />
            <label htmlFor="hsc1-input" className="File-upload-button" style={{ justifyContent: 'center' }}>
              <img className='icon' src={Upload} alt='' />
              <p>Upload</p>
            </label>
            {fileNames['hsc1YearFile'] && <p className="uploaded_file_name">{fileNames['hsc1YearFile']} Uploaded</p>}
          </div>
        </div>
      ) : null}

      {formData.flowofstudy === 'hsc' || formData.flowofstudy === 'hsc,diploma' ? (
        <div className="hsc_2_Year">
          <Allfields fieldtype="text" value="HSC 2nd YEAR"  inputname="hsc2Year"  formData={formData} setFormData={setFormData}/>
          <div className="field">
            <p className="marksheet_label">HSC II-year Marksheet</p>
            <input type="file" id="hsc2-input"  name="hsc2YearFile"  className="educational-document" style={{ display: 'none' }} onChange={handleFileChange('hsc2YearFile')}/>
            <label htmlFor="hsc2-input" className="File-upload-button" style={{ justifyContent: 'center' }}>
              <img className='icon' src={Upload} alt='' />
              <p>Upload</p>
            </label>
            {fileNames['hsc2YearFile'] && <p className="uploaded_file_name">{fileNames['hsc2YearFile']} Uploaded</p>}
          </div>
        </div>
      ) : null}

      {formData.flowofstudy === 'diploma' || formData.flowofstudy === 'hsc,diploma' ? (
        <div className="diploma">
          <Allfields fieldtype="text" value="Diploma %"  inputname="diploma" 
            formData={formData}  setFormData={setFormData}  />
          <div className="field">
            <p className="marksheet_label">Diploma Marksheet</p>
            <input  type="file"  id="diploma-input"   name="diplomaFile"   className="educational-document"
              style={{ display: 'none' }}   onChange={handleFileChange('diplomaFile')}/>
            <label htmlFor="diploma-input" className="File-upload-button" style={{ justifyContent: 'center' }}>
              <img className='icon' src={Upload} alt='' />
              <p>Upload</p>
            </label>
            {fileNames['diplomaFile'] && <p className="uploaded_file_name">{fileNames['diplomaFile']} Uploaded</p>}
          </div>
        </div>
      ) : null}
              
              {formData.firstGraduate==="Yes"  && (
                <div className="first_graduate_file">
                <input type="file" id="firstGraduateFile" name="firstGraduateFile" className="educational-document" style={{ display: 'none' }} onChange={handleFileChange('firstGraduateFile')} />
                <p className="marksheet_label">First Graduate File</p>
                <label htmlFor="firstGraduateFile" className="File-upload-button" style={{ justifyContent: 'center' }} >
                  <img className='icon' src={Upload} alt='' />
                  <p>Upload</p>
                </label>
                {fileNames['firstGraduateFile'] && <p className="uploaded_file_name">{fileNames['firstGraduateFile']} Uploaded</p>}
           </div>
              )}
              {formData.specialCategory!=="Not applicable" && (
                <div className="specialCategory_file">
                <input type="file" id="specialCategoryFile" name="specialCategoryFile" className="educational-document" style={{ display: 'none' }} onChange={handleFileChange('specialCategoryFile')} />
                <p className="marksheet_label">Special Category File</p>
                <label htmlFor="specialCategoryFile" className="File-upload-button" style={{ justifyContent: 'center' }} >
                  <img className='icon' src={Upload} alt='' />
                  <p>Upload</p>
                </label>
                {fileNames['specialCategoryFile'] && <p className="uploaded_file_name">{fileNames['specialCategoryFile']} Uploaded</p>}
           </div>
              )}
              <div className="emis_Number">
                <Allfields fieldtype="text" value="Emis Number" inputname="emisNumber"   formData={formData} setFormData={setFormData}/>
              </div>

             
           
          
              
              </div>
              <div className="registration_form_buttons">
              <div  id="navigate_buttons_previous_educational">
              <Allbuttons   value="Previous" image={Previouswhite} target={() => handleSectionClick("communication_bank")}/>
              </div>
              <div  id="navigate_buttons_next_educational" >
              <Allbuttons  value="Next" image={Nextwhite} target={() => {
                  if (validateEducationalInfo()) {
                    handleSectionClick("academic");
                  }
                }}/>
              </div>
              </div>
              <ToastContainer />
              </div>
              )}
 
            {displaySection === "academic" && (
            <div>
            <div className="academic-data personal-container">
            <div className="programme">
              <label htmlFor="programme">Programme</label>
              <select className="dropdown" name="programme"  value={formData.programme || ''} onChange={handleOtherField}>
                <option value=''>Select</option>
                <option value="BE (Fulltime)" >BE (Full time)</option>
                <option value="BE (part time)" >BE (part time)</option>
                <option value="ME">ME</option>
              </select>
            </div>
            <div className="discipline">
              <label htmlFor="discipline">Discipline</label>
              <select className="dropdown" name="discipline"  value={formData.discipline || ''} onChange={handleOtherField}>
                <option value=''>Select</option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Mechanical Engineering" >Mechanical Engineering</option>
                <option value="Electrical and Electronics Engineering" >Electrical and Electronics Engineering</option>
                <option value="Electronics and communication Engineering" >Electronics and communication Engineering</option>
                <option value="Computer Science and Engineering" >Computer Science and Engineering</option>
                <option value="Structural Engineering" >Structural Engineering</option>
                <option value="Environmental Engineering" >Environmental Engineering</option>
                <option value="Manufacturing Engineering" >Manufacturing Engineering</option>
                <option value="Computer Aided Design" >Computer Aided Design</option>
                <option value="Power Electronics and Drives" >Power Electronics and Drives</option>
                <option value="Microwave and Optical Communication" >Microwave and Optical Communication</option>
              </select>
            </div>
            <div className="regulation" >
               <label htmlFor="regulation">Regulation</label>
               <select className="dropdown" name="regulation" value={formData.regulation || ''} onChange={handleOtherField} >
                 <option value=''>Select</option>
                 <option value="2019A" >2019A</option>
                 <option value="2022" >2022</option>
               </select>
             </div>
            <div className="batch">
              <Allfields fieldtype="text" value="Course Completion Year" inputname="batch"  formData={formData} setFormData={setFormData} />
            </div>
            <div className="admission_no">
              <Allfields fieldtype="text" value="Admission Number" inputname="admissionNumber"  formData={formData} setFormData={setFormData} />
            </div>
           
           
            <div className="abc_id">
              <Allfields fieldtype="text" value="ABC Id" inputname="abcId" formData={formData} setFormData={setFormData} />
            </div>
            <div className="course_type">
              <label htmlFor="course_Type">Course Type</label>
              <div className="radio">
                <div className="radio-spacing"><input type="radio" name="courseType" value="Regular" onChange={handleOtherField} checked={formData.courseType === 'Regular'} /> Regular</div>
                <div className="radio-spacing"><input type="radio" name="courseType" value="Lateral" onChange={handleOtherField} checked={formData.courseType === 'Lateral'} /> Lateral</div>
                <div className="radio-spacing"><input type="radio" name="courseType" value="Regular-Transfer" onChange={handleOtherField} checked={formData.courseType === 'Regular-Transfer'} /> Regular-Transfer</div>
              </div>
            </div>
            <div className="umis_id">
              <Allfields fieldtype="text" value="UMIS Id" inputname="umisId" formData={formData} setFormData={setFormData} />
            </div>
            <div className="date_of_admission">
              <Allfields fieldtype="date" value="Date of Admission" inputname="dateOfAdmission" formData={formData} setFormData={setFormData} />
            </div>
            <div className="join_date">
              <Allfields fieldtype="date" value="Course Joined Date" inputname="courseJoinedDate" formData={formData} setFormData={setFormData} />
            </div>
            <div className="semester">
              <label htmlFor="semester">Semester</label>
              <select className="dropdown" name="semester"  value={formData.semester || ''} onChange={handleOtherField}>
                <option value=''>Select</option>
                <option value="I" >I</option>
                <option value="II" >II</option>
                <option value="III" >III</option>
                <option value="IV" >IV</option>
                <option value="V" >V</option>
                <option value="VI" >VI</option>
                <option value="VII" >VII</option>
                <option value="VIII" >VIII</option>
              </select>
            </div>
            <div className="cgpa">
              <Allfields fieldtype="text" value="CGPA" inputname="cgpa" formData={formData} setFormData={setFormData} />
            </div>
         
            <div className="fasttrack">
              <label htmlFor="fast_Track">Fasttrack</label>
              <div className="radio">
                <div className="radio-spacing"><input type="radio" name="fastTrack" value="Yes" onChange={handleOtherField} checked={formData.fastTrack === 'Yes'} /> Yes</div>
                <div className="radio-spacing"><input type="radio" name="fastTrack" value="No"  onChange={handleOtherField}checked={formData.fastTrack === 'No'} /> No</div>
              </div>
            </div>
           
            <div className="student_status">
              <label htmlFor="student_Status">Student Status</label>
              <select className="dropdown" name="studentStatus"  value={formData.studentStatus || ''} onChange={handleOtherField}>
                <option value=''>Select</option>
                <option value="Pursuing" >Pursuing</option>
                <option value="Terminated" >Terminated</option>
                <option value="Discontinued">Discontinued</option>
                <option value="Passed Out" >Passed Out</option>
              </select>
            </div>
           
         
          
          </div>
          <div className="registration_form_buttons">
          <div id="navigate_buttons_previous_academic">
              <Allbuttons   value="Previous" image={Previouswhite} target={() => handleSectionClick("educational")}/>
            </div>
            <div id="form_submit_button">
              <Allbuttons   value="submit" image={Nextwhite} />
           </div>
          </div>
       
            <ToastContainer />
          </div>
            )}
  
      </form>
      {showModal && <Modal student={formData} onClose={() => setShowModal(false)} />}
      </div>
    );
};

export default PersonalForm;