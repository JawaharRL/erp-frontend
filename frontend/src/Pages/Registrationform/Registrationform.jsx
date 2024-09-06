import React, { useEffect, useState } from 'react'; 
import './Registrationform.css'; 
import Nextwhite from '../../Assets/Nextwhite.svg'; 
import Upload from '../../Assets/upload.svg'; 
import Formtitle from '../../Components/Formtitle/Formtitle'; 
import Allbuttons from '../../Components/Allbuttons/Allbuttons'; 
import Allfields from '../../Components/Allfields/Allfields'; 
import Fileupload from '../../Components/Fileupload/Fileupload'; 
import Modal from '../../Components/Modal/Modal.jsx';
import axios from 'axios'; 
import { useLocation } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom'; 
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const PersonalForm = () => { 
    const navigate = useNavigate(); 
    const location = useLocation(); 
    
    const handleSectionClick = (section) => { 
        setDisplaySection(section); 
    }; 
    const [selectedOption, setSelectedOption] = useState('');
    const [displaySection, setDisplaySection] = useState("personal"); 
    const [showModal, setShowModal] = useState(false);
    const [fileNames, setFileNames] = useState({}); 
    const [profilePhoto, setProfilePhoto] = useState(null); 
    const [formData, setFormData] = useState({ 
        firstName: '', 
        lastName: '', 
        dateOfBirth: '', 
        gender: '', 
        aadharNumber: '', 
        bloodGroup: '', 
        nationality: '', 
        religion: '', 
        community: '', 
        caste: '', 
        fathersName: '', 
        fathersOccupation: '', 
        fathersMobileNumber: '', 
        mothersName: '', 
        mothersOccupation: '', 
        mothersMobileNumber: '', 
        guardiansName: '', 
        guardiansOccupation: '', 
        guardiansMobileNumber: '', 
        parentsStatus: '', 
        income: '', 
        maritalStatus: '',
        communityCertificate:null, 
        profilePhoto: null, 
        mobileNumber: '', 
        emailid: '', 
        residentialAddress: '', 
        communicationAddress: '', 
        hosteller: '', 
        hostelType: '', 
        bankName: '', 
        ifscCode: '', 
        branchName: '', 
        accountNumber: '', 
        passbook: null, 
        sslc: '', 
        hsc1Year: '', 
        hsc2Year: '', 
        diploma: '', 
        emisNumber: '', 
        firstGraduate: '', 
        specialCategory: '',
        specialCategoryFile:null,
        registerNo : '', 
        programme: '', 
        discipline: '', 
        academicYear: '', 
        admissionNumber: '', 
        regulation: '', 
        semester: '', 
        umisId: '', 
        abcId: '', 
        dateOfAdmission: '', 
        courseJoinedDate: '', 
        courseType: '', 
        fastTrack: '', 
        cgpa: '', 
        studentStatus: '',
        firstGraduateFile:null 
    }); 
    useEffect(() => {
      // Load form data from localStorage
      const storedFormData = localStorage.getItem('formData');
      if (storedFormData) {
          setFormData(JSON.parse(storedFormData));
      }

      // Load file names from localStorage
      const filesToLoad = ['profilePhoto', 'passbook','communityCertificate','specialCategoryFile','firstGraduateFile']; // Add other file keys as needed
      filesToLoad.forEach(fileKey => {
          const fileName = localStorage.getItem(`${fileKey}FileName`);
          const fileBase64 = localStorage.getItem(fileKey);
          if (fileName && fileBase64) {
              setFormData(prevData => ({ ...prevData, [fileKey]: fileBase64 }));
              setFileNames(prevNames => ({ ...prevNames, [fileKey]: fileName }));
          }
      });
  }, []);

  const validatePersonalInfo = () => {
    const validateAlphabets = (value) => /^[A-Za-z]+$/.test(value);
    const validateNames = (value) => /^[A-Za-z]+( [A-Za-z]+)*$/.test(value);

  
    const requiredFields = [
      { field: formData.firstName, name: "First Name", validate: validateNames, errorMessage: "should contain only alphabets" },
      { field: formData.lastName, name: "Last Name", validate: validateNames, errorMessage: "should contain only alphabets" },
      { field: formData.caste, name: "Caste", validate: validateAlphabets, errorMessage: "should contain only alphabets" },
      { field: formData.dateOfBirth, name: "Date of Birth" },
      { field: formData.aadharNumber, name: "Aadhar Number" },
      { field: formData.fathersName, name: "Father's Name" },
      { field: formData.mothersName, name: "Mother's Name" },
      { field: formData.nationality, name: "Nationality" },
      { field: formData.religion, name: "Religion" },
      { field: formData.bloodGroup, name: "Blood Group" },
      { field: formData.community, name: "Community" },
      { field: formData.profilePhoto, name: "Profile Photo" },
      { field: formData.communityCertificate, name: "Community Certificate" },
    ];
  
    for (let { field, name, validate, errorMessage } of requiredFields) {
      if (!field) {
        toast.error(`${name} is required.`);
        return false;
      }
  
      // Validation for fields that require alphabetic input
      if (validate && !validate(field)) {
        toast.error(`${name} is required and ${errorMessage}.`);
        return false;
      }
    }
  
    // Aadhar Number validation
    if (!isValidAadharNumber(formData.aadharNumber)) {
      toast.error("Aadhar Number should be 12 digits.");
      return false;
    }
  
    // Income validation
    if (!formData.income.match(/^[0-9]+$/)) {
      toast.error("Income is required and should contain only numbers.");
      return false;
    }
  
    return true;
  };
  
  const isValidAadharNumber = (number) => /^\d{12}$/.test(number);
  
 
  
  const validateAcademic =()=>{}
 
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
    const handleRadioChange = (event) => {
      setSelectedOption(event.target.value);
    };

    const handleSubmit = async (e) => { 
        e.preventDefault();
        if(validateAcademic()){
          const registerNumber = location.state.userId;
          const updatedFormData = { ...formData, ['registerNo']: registerNumber };
          setFormData(updatedFormData);
          localStorage.setItem('formData', JSON.stringify(updatedFormData));
          setShowModal(true);
        }
    }; 

    return (
      <div>
      <form onSubmit={handleSubmit}>
        <Formtitle/>
        {displaySection === "personal" && (
             
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
               <select className='community-dropdown' name="bloodGroup" value={formData.bloodGroup || ''} onChange={handleOtherField} >
                 <option value="Select" >Select</option>
                 <option value="A+" >A+</option>
                 <option value="A-" >A-</option>
                 <option value="B+" >B+</option>
                 <option value="B-" >B-</option>
                 <option value="AB+" >AB+</option>
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
               <select className='community-dropdown' name="community" value={formData.community || ''} onChange={handleOtherField} >
                 <option value="Select" >Select</option>
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
  
             <div className="fathers_Name">
               <Allfields fieldtype="text" value="Father's Name" inputname="fathersName" formData={formData} setFormData={setFormData}/>
             </div>
  
             <div className="fathers_Occupation">
               <Allfields fieldtype="text" value="Father's Occupation" inputname="fathersOccupation"  formData={formData} setFormData={setFormData}/>
             </div>
  
             <div className="fathers_Mobile_Number">
               <Allfields fieldtype="text" value="Father's Mobile Number" inputname="fathersMobileNumber"   formData={formData} setFormData={setFormData} />
             </div>
  
             <div className="mothers_Name">
               <Allfields fieldtype="text" value="Mother's Name" inputname="mothersName" formData={formData} setFormData={setFormData} />
             </div>
  
             <div className="mothers_Occupation">
               <Allfields fieldtype="text" value="Mother's Occupation" inputname="mothersOccupation" formData={formData} setFormData={setFormData}/>
             </div>
  
             <div className="Mothers_Mobile_Number">
               <Allfields fieldtype="text" value="Mother's Mobile Number" inputname="mothersMobileNumber"   formData={formData} setFormData={setFormData}/>
             </div>
  
             <div className="guardians_name">
               <Allfields fieldtype="text" value="Guardian Name" inputname="guardiansName"  formData={formData} setFormData={setFormData}/>
             </div>
  
             <div className="guardians_occupation">
               <Allfields fieldtype="text" value="Guardian Occupation" inputname="guardiansOccupation"   formData={formData} setFormData={setFormData} />
             </div>
  
             <div className=" guardians_mobile_number">
               <Allfields fieldtype="text" value="Guardian Mobile Number" inputname="guardiansMobileNumber"   formData={formData} setFormData={setFormData}/>
             </div>
             <div className="marital_status">
               <label htmlFor="MaritalStatus">Marital Status</label>
               <select className='community-dropdown' name='maritalStatus'value={formData.maritalStatus || ''}  onChange={handleOtherField} >
                 <option>Select</option>
                 <option value="Unmarried" >Unmarried</option>
                 <option value="Married" >Married</option>
               </select>
             </div>
  
             <div className="income">
               <Allfields fieldtype="text" value="Income" inputname="income"  formData={formData} setFormData={setFormData} />
             </div>
  
             <div className="parents_status">
               <label htmlFor="ParentsStatus">Parents Status</label>
               <select className='community-dropdown' name="parentsStatus" value={formData.parentsStatus || ''} onChange={handleOtherField} >
                 <option >Select</option>
                 <option value="Both are alive" >Both are alive</option>
                 <option value="Father alive" >Father alive</option>
                 <option value="Mother alive">Mother alive</option>
                 <option value="Both are not alive">Both are not alive</option>
               </select>
             </div>
  
             {/* <div className="profile_photo">
               <Fileupload input_name="profilePhoto"  onFileSelect={handleFileSelect}/> */}
                <div className="field">
                  <input type="file" id="communityCertificate" name="communityCertificate" className="educational-document" style={{ display: 'none' }} onChange={handleFileChange('communityCertificate')} />
                  <p className="marksheet_label">Community Certificate</p>
                  <label htmlFor="communityCertificate" className="File-upload-button" style={{ justifyContent: 'center' }} >
                    <img className='icon' src={Upload} alt='' />
                    <p>Upload</p>
                  </label>
                  {fileNames['communityCertificate'] && <p className="uploaded_file_name">{fileNames['communityCertificate']} Uploaded</p>}
             </div>
               <div className="profile-photo">
                  <input type="file" id="profilePhoto" name="profilePhoto" className="educational-document" style={{ display: 'none' }} onChange={handleFileChange('profilePhoto')} />
                  <p className="marksheet_label">Profile Photo</p>
                  <label htmlFor="profilePhoto" className="File-upload-button" style={{ justifyContent: 'center' }} >
                    <img className='icon' src={Upload} alt='' />
                    <p>Upload</p>
                  </label>
                  {fileNames['profilePhoto'] && <p className="uploaded_file_name">{fileNames['profilePhoto']} Uploaded</p>}
             </div>
            <br />
            <div>
            
            </div>
            <button
  className="navigate_buttons"
  id="navigate_button_next_personal"
  onClick={() => {
    if (validatePersonalInfo()) {
      handleSectionClick("communication");
    }
  }}>
  Next
</button>

            <ToastContainer />
          </div>
          
          
          
  )}  
  {displaySection === "communication" && (
            
            <div className="communication-data personal-container">
              
             <div className="mobile_no">
                <Allfields fieldtype="text" value="Mobile Number" inputname="mobileNumber"   formData={formData} setFormData={setFormData}/>
              </div>
              <div className="mail_id">
                <label htmlFor="Emailid">Email ID</label>
                <input id='mailid' type="email" name="emailid"  value={formData.emailid || ''}  onChange={handleOtherField}  />
              </div>
  
              <div className="communication_address">
                <label htmlFor="CommunicationAddress">Communication Address</label><br />
                <textarea name="communicationAddress" cols="40" rows="6" placeholder="Enter your address here" value={formData.communicationAddress || ''} onChange={handleOtherField} ></textarea>
              </div>
  
              <div className=" residential_address">
                <label htmlFor="ResidentialAddress">Residential Address</label><br />
                <textarea name="residentialAddress" cols="40" rows="6" placeholder="  Enter your address here" value={formData.residentialAddress || ''} onChange={handleOtherField} ></textarea>
              </div>
  
              <div className="hosteller">
                <label htmlFor="Hosteller">Hosteller</label>
                <div className="radio" >
                  <div className="radio-spacing"><input type="radio" name="hosteller" value="Yes"  onChange={handleOtherField} checked={formData.hosteller === 'Yes'}/> Yes</div>
                  <div className="radio-spacing"> <input type="radio" name="hosteller" value="No"  onChange={handleOtherField} checked={formData.hosteller === 'No'}/> No</div>
                </div>
              </div>
  
              <div className="hostel_type" >
                <label htmlFor="Hostel Type">Hostel Type</label>
                <div className="radio">
                  <div className="radio-spacing"><input type="radio" name="hostelType" value="Free" onChange={handleOtherField} checked={formData.hostelType === 'Free'}/> Free</div>
                  <div className="radio-spacing"><input type="radio" name="hostelType" value="Paid" onChange={handleOtherField} checked={formData.hostelType === 'Paid'}/> Paid</div>
                </div>
              </div>
              <br />
              <button
              className="navigate_buttons"
                id="navigate_buttons_previous_communication"
                onClick={() => handleSectionClick("personal")}
              >Previous</button>
               <button
               className="navigate_buttons"
                id="navigate_buttons_next_communication"
                onClick={() => handleSectionClick("bank")}
              >Next</button>
             </div>
            
             )}
            
              
             
  
              {displaySection === "bank" && (
             <div className="bank-data personal-container">
             <div className=" bank_name">
                <Allfields fieldtype="text" value="Bank Name" inputname="bankName" formData={formData} setFormData={setFormData} />
              </div>
  
              <div className="branch_Name">
                <Allfields fieldtype="text" value="Branch Name" inputname="branchName" formData={formData} setFormData={setFormData} />
              </div>
  
              <div className="account_Number ">
                <Allfields fieldtype="text" value="Account Number" inputname="accountNumber"   formData={formData} setFormData={setFormData}/>
              </div>
  
              <div className="ifsc_Code ">
                <Allfields fieldtype="text" value="IFSC Code" inputname="ifscCode"  formData={formData} setFormData={setFormData}/>
              </div>
              <div className="field">
                  <input type="file" id="passbook" name="passbook" className="educational-document" style={{ display: 'none' }} onChange={handleFileChange('passbook')} />
                  <p className="marksheet_label">Bank Passbook</p>
                  <label htmlFor="passbook" className="File-upload-button" style={{ justifyContent: 'center' }} >
                    <img className='icon' src={Upload} alt='' />
                    <p>Upload</p>
                  </label>
                  {fileNames['passbook'] && <p className="uploaded_file_name">{fileNames['passbook']} Uploaded</p>}
                </div>
                
               <button
               className="navigate_buttons"
                id="navigate_buttons_previous_bank"
                onClick={() => handleSectionClick("communication")}
              >Previous</button>
               <button
               className="navigate_buttons"
                id="navigate_buttons_next_bank"
                onClick={() => handleSectionClick("educational")}
              >Next</button>
               
                
                </div>
            
             )}
             
  
              
              {displaySection === "educational" && (
                
              <div className="educational-data personal-container">
             <div >
                  <label htmlFor="flowofstudy">Flow of Study</label>
                    <div className="flowofstudy">
                        <label>
                          <input type="radio" value="diploma" checked={selectedOption === 'diploma'} onChange={handleRadioChange}/>
                          Diploma
                        </label>
                        <label>
                          <input  type="radio"  value="hsc"   checked={selectedOption === 'hsc'}   onChange={handleRadioChange}  />
                          HSC
                        </label>
                        <label>
                          <input  type="radio"  value="hsc,diploma"  checked={selectedOption === 'hsc,diploma'}   onChange={handleRadioChange} />
                          HSC, Diploma
                        </label>
                      </div>
                </div>


              <div className="sslc">
                <Allfields fieldtype="text" value="SSLC %" inputname="sslc"  formData={formData} setFormData={setFormData} />
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




      {selectedOption === 'hsc' || selectedOption === 'hsc,diploma' ? (
        <div className="hsc_1_Year">
          <Allfields
            fieldtype="text"
            value="HSC 1st YEAR"
            inputname="hsc1Year"
           
            formData={formData}
            setFormData={setFormData}
          />
          <div className="field">
            <p className="marksheet_label">HSC I-year Marksheet</p>
            <input
              type="file"
              id="hsc1-input"
              name="hsc1YearFile"
              className="educational-document"
              style={{ display: 'none' }}
              onChange={handleFileChange('hsc1YearFile')}
            />
            <label htmlFor="hsc1-input" className="File-upload-button" style={{ justifyContent: 'center' }}>
              <img className='icon' src={Upload} alt='' />
              <p>Upload</p>
            </label>
            {fileNames['hsc1YearFile'] && <p className="uploaded_file_name">{fileNames['hsc1YearFile']} Uploaded</p>}
          </div>
        </div>
      ) : null}

      {selectedOption === 'hsc' || selectedOption === 'hsc,diploma' ? (
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

      {selectedOption === 'diploma' || selectedOption === 'hsc,diploma' ? (
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
              <div className="emis_Number">
                <Allfields fieldtype="text" value="Emis Number" inputname="emisNumber"   formData={formData} setFormData={setFormData}/>
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
                <select className='community-dropdown' name="specialCategory" value={formData.specialCategory || ''}  onChange={handleOtherField} >
                  <option>Select</option>
                  <option value="7.5 Quota">7.5 Quota</option>
                  <option value="Ex-Service Man">Ex-Service Man</option>
                  <option value="Eminent sports man" >Eminent sports man</option>
                  <option value="Differently Abled" >Differently Abled</option>
                  <option value="Not applicable" >Not applicable</option>
                </select>
              </div>
              <div className="field">
                  <input type="file" id="firstGraduateFile" name="firstGraduateFile" className="educational-document" style={{ display: 'none' }} onChange={handleFileChange('firstGraduateFile')} />
                  <p className="marksheet_label">First Graduate File</p>
                  <label htmlFor="firstGraduateFile" className="File-upload-button" style={{ justifyContent: 'center' }} >
                    <img className='icon' src={Upload} alt='' />
                    <p>Upload</p>
                  </label>
                  {fileNames['firstGraduateFile'] && <p className="uploaded_file_name">{fileNames['firstGraduateFile']} Uploaded</p>}
             </div>
              <div className="field">
                  <input type="file" id="specialCategoryFile" name="specialCategoryFile" className="educational-document" style={{ display: 'none' }} onChange={handleFileChange('specialCategoryFile')} />
                  <p className="marksheet_label">Special Category File</p>
                  <label htmlFor="specialCategoryFile" className="File-upload-button" style={{ justifyContent: 'center' }} >
                    <img className='icon' src={Upload} alt='' />
                    <p>Upload</p>
                  </label>
                  {fileNames['specialCategoryFile'] && <p className="uploaded_file_name">{fileNames['specialCategoryFile']} Uploaded</p>}
             </div>
              <br />
              <button
                className="navigate_buttons"
                id="navigate_buttons_previous_educational"
                onClick={() => handleSectionClick("bank")}
              >Previous</button>
               <button
               className="navigate_buttons"
                id="navigate_buttons_next_educational"
                onClick={() => handleSectionClick("academic")}
              >Next</button>
              </div>
              )}
  
  
  
       
  
            {displaySection === "academic" && (
              
              
            <div className="academic-data personal-container">
            <div className="programme">
              <label htmlFor="programme">Programme</label>
              <select className='programme-dropdown' name="programme"  value={formData.programme || ''} onChange={handleOtherField}>
                <option>Select</option>
                <option value="BE (Fulltime)" >BE (Full time)</option>
                <option value="BE (part time)" >BE (part time)</option>
                <option value="ME">ME</option>
              </select>
            </div>
            <div className="discipline">
              <label htmlFor="discipline">Discipline</label>
              <select className='discipline-dropdown' name="discipline"  value={formData.discipline || ''} onChange={handleOtherField}>
                <option >Select</option>
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
            <div className="aca-year">
              <Allfields fieldtype="text" value="Academic Year" inputname="academicYear"  formData={formData} setFormData={setFormData} />
            </div>
            <div className="adm-no">
              <Allfields fieldtype="text" value="Admission Number" inputname="admissionNumber"  formData={formData} setFormData={setFormData} />
            </div>
            <div className="regulation">
              <Allfields fieldtype="text" value="Regulation" inputname="regulation" formData={formData} setFormData={setFormData} />
            </div>
            <div className="sem">
              <label htmlFor="semester">Semester</label>
              <select className='community-dropdown' name="semester"  value={formData.semester || ''} onChange={handleOtherField}>
                <option>Select</option>
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
            <div className="abc-id">
              <Allfields fieldtype="text" value="ABC Id" inputname="abcId" formData={formData} setFormData={setFormData} />
            </div>
            <div className="umis-id">
              <Allfields fieldtype="text" value="UMIS Id" inputname="umisId" formData={formData} setFormData={setFormData} />
            </div>
            <div className="date-of-adm">
              <Allfields fieldtype="date" value="Date of Admission" inputname="dateOfAdmission" formData={formData} setFormData={setFormData} />
            </div>
            <div className="join-date">
              <Allfields fieldtype="date" value="Course Joined Date" inputname="courseJoinedDate" formData={formData} setFormData={setFormData} />
            </div>
            <div className="course-type">
              <label htmlFor="course_Type">Course Type</label>
              <div className="radio">
                <div className="radio-spacing"><input type="radio" name="courseType" value="Regular" onChange={handleOtherField} checked={formData.courseType === 'Regular'} /> Regular</div>
                <div className="radio-spacing"><input type="radio" name="courseType" value="Lateral" onChange={handleOtherField} checked={formData.courseType === 'Lateral'} /> Lateral</div>
              </div>
            </div>
            <div className="fasttrack">
              <label htmlFor="fast_Track">Fasttrack</label>
              <div className="radio">
                <div className="radio-spacing"><input type="radio" name="fastTrack" value="Yes" onChange={handleOtherField} checked={formData.fastTrack === 'Yes'} /> Yes</div>
                <div className="radio-spacing"><input type="radio" name="fastTrack" value="No"  onChange={handleOtherField}checked={formData.fastTrack === 'No'} /> No</div>
              </div>
            </div>
            <div className="cgpa">
              <Allfields fieldtype="text" value="CGPA" inputname="cgpa" formData={formData} setFormData={setFormData} />
            </div>
            <div className="student-status">
              <label htmlFor="student_Status">Student Status</label>
              <select className='community-dropdown' name="studentStatus"  value={formData.studentStatus || ''} onChange={handleOtherField}>
                <option>Select</option>
                <option value="Pursuing" >Pursuing</option>
                <option value="Terminated" >Terminated</option>
                <option value="Discontinued">Discontinued</option>
                <option value="Passed Out" >Passed Out</option>
              </select>
            </div>
           
            <br />
            <p
                className="navigate_buttons"
                id="navigate_buttons_previous_academic"
                onClick={() => handleSectionClick("educational")}
              >Previous</p>
              <div className='academic-buttons'>
           <div id="submit_button">
           <Allbuttons   value="submit" image={Nextwhite} />
           </div>
            <ToastContainer />
          </div>
          
          </div>
          
          
            )}
          
         
      </form>
      {showModal && <Modal student={formData} onClose={() => setShowModal(false)} />}
      </div>
    );
};

export default PersonalForm;