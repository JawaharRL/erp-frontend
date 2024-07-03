import React, { useEffect, useState } from 'react';
import './Personalform.css';
import Nextwhite from '../../Assets/Nextwhite.svg';
import Upload from '../../Assets/upload.svg';
import Formtitle from '../../Components/Formtitle/Formtitle';
import Allbuttons from '../../Components/Allbuttons/Allbuttons';
import Allfields from '../../Components/Allfields/Allfields';
import Fileupload from '../../Components/Fileupload/Fileupload';
import axios from 'axios';
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Personalform() {

  const navigate = useNavigate();
  const location=useLocation();
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem('formData');
    return storedData ? JSON.parse(storedData) : {};
  });

  const [fileNames, setFileNames] = useState({});
 
  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }

    const storedFileNames = localStorage.getItem('fileNames');
    if (storedFileNames) {
      setFileNames(JSON.parse(storedFileNames));
    }
  }, []);

  const handleFileUpload = (fileKey) => (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData({ ...formData, [fileKey]: file });
      setFileNames({ ...fileNames, [fileKey]: file.name }); // Update fileNames state with the uploaded file name
      localStorage.setItem('formData', JSON.stringify({ ...formData, [fileKey]: file }));
      localStorage.setItem('fileNames', JSON.stringify({ ...fileNames, [fileKey]: file.name }));
    }
  };
  // const handleOtherField=(event) => setFormData({...formData, [event.target.name]: event.target.value});
  const handleOtherField = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    localStorage.setItem('formData', JSON.stringify(updatedFormData));
  }
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'http://localhost:8080/api/student';

    const formData = new FormData();
    formData.append('registerNo', location.state.registerNo);
    formData.append('firstName', e.target.elements.firstName.value);
    formData.append('lastName', e.target.elements.lastName.value);
    formData.append('dateOfBirth', e.target.elements.dateOfBirth.value);
    formData.append('gender', e.target.elements.gender.value);
    formData.append('aadharNumber', e.target.elements.aadharNumber.value);
    formData.append('nationality', e.target.elements.nationality.value);
    formData.append('religion', e.target.elements.religion.value);
    formData.append('community', e.target.elements.community.value);
    formData.append('caste', e.target.elements.caste.value);
    formData.append('fathersName', e.target.elements.fathersName.value);
    formData.append('fathersOccupation', e.target.elements.fathersOccupation.value);
    formData.append('fathersMobileNumber', e.target.elements.fathersMobileNumber.value);
    formData.append('mothersName', e.target.elements.mothersName.value);
    formData.append('mothersOccupation', e.target.elements.mothersOccupation.value);
    formData.append('mothersMobileNumber', e.target.elements.mothersMobileNumber.value);
    formData.append('guardiansName', e.target.elements.guardiansName.value);
    formData.append('guardiansOccupation', e.target.elements.guardiansOccupation.value);
    formData.append('guardiansMobileNumber', e.target.elements.guardiansMobileNumber.value);
    formData.append('parentsStatus', e.target.elements.parentsStatus.value);
    formData.append('income', e.target.elements.income.value);
    formData.append('maritalStatus', e.target.elements.maritalStatus.value);
    formData.append('profilePhoto', e.target.elements.profilePhoto.files[0]);
    formData.append('mobileNumber', e.target.elements.mobileNumber.value);
    formData.append('emailid', e.target.elements.emailid.value);
    formData.append('residentialAddress', e.target.elements.residentialAddress.value);
    formData.append('communicationAddress', e.target.elements.communicationAddress.value);
    formData.append('hosteller', e.target.elements.hosteller.value);
    formData.append('hostelType', e.target.elements.hostelType.value);
    formData.append('bankName', e.target.elements.bankName.value);
    formData.append('ifscCode', e.target.elements.ifscCode.value);
    formData.append('branchName', e.target.elements.branchName.value);
    formData.append('accountNumber', e.target.elements.accountNumber.value);
    formData.append('passbook', e.target.elements.passbook.files[0]);
    formData.append('sslc', e.target.elements.sslc.value);
    formData.append('hsc1Year', e.target.elements.hsc1Year.value);
    formData.append('hsc2Year', e.target.elements.hsc2Year.value);
    formData.append('diploma', e.target.elements.diploma.value);
    formData.append('sslcFile', e.target.elements.sslcFile.files[0]);
    formData.append('hsc1YearFile', e.target.elements.hsc1YearFile.files[0]);
    formData.append('hsc2YearFile', e.target.elements.hsc2YearFile.files[0]);
    formData.append('diplomaFile', e.target.elements.diplomaFile.files[0]);
    formData.append('emisNumber', e.target.elements.emisNumber.value);
    formData.append('firstGraduate', e.target.elements.firstGraduate.value);
    formData.append('specialCategory', e.target.elements.specialCategory.value);
    
    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      localStorage.removeItem('formData');
      navigate('/academic-form');
      console.log(response.data);
    } catch (error) {
      console.error('Error saving student:', error);
      toast('EmailId already exists');
    }

  };
  return (
    <div>
      <div className="registration-background">
        <div className='form-content'>
          <Formtitle></Formtitle>
        </div>
        <form id='registration_form' onSubmit={handleSubmit} encType="multipart/form-data" >
          <div className="personal-container">
            <div className="first_name">
            <Allfields fieldtype="text" value="First Name" inputname="firstName"  fieldpattern="[A-Za-z]+" req_flag={true} format={/[^A-Za-z\s]/g} formData={formData} setFormData={setFormData} />

            </div>


            <div className="last_name">
              <Allfields fieldtype="text" value="Last Name" inputname="lastName"  fieldpattern="[A-Za-z]+" format={/[^A-Za-z\s]/g} formData={formData} setFormData={setFormData}/>
            </div>

            <div className="date_Of_Birth">
              <Allfields fieldtype="date" value="Date of Birth" inputname="dateOfBirth"   fieldpattern="" req_flag={true} format="" formData={formData} setFormData={setFormData} />
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
              <Allfields fieldtype="text" value="Aadhar Number" inputname="aadharNumber"   fieldpattern="[0-9]{12}" req_flag={true} format={/[^0-9]/g} formData={formData} setFormData={setFormData}/>
            </div>

            <div className="nationality">
              <Allfields fieldtype="text" value="Nationality" inputname="nationality"  fieldpattern="[A-Za-z]+" req_flag={true} format={/[^A-Za-z\s]/g} formData={formData} setFormData={setFormData}/>
            </div>

            <div className="religion">
              <Allfields fieldtype="text" value="Religion" inputname="religion"  fieldpattern="[A-Za-z]+" req_flag={true} format={/[^A-Za-z\s]/g} formData={formData} setFormData={setFormData}  />
            </div>

            <div className="community">
              <label htmlFor="Community">Community</label>
              <select className='community-dropdown' name="community" value={formData.community || ''} onChange={handleOtherField} required>
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
              <Allfields fieldtype="text" value="Caste" inputname="caste"  fieldpattern="[A-Za-z]+" req_flag={true} format={/[^A-Za-z\s]/g} formData={formData} setFormData={setFormData}/>
            </div>

            <div className="fathers_Name">
              <Allfields fieldtype="text" value="Father's Name" inputname="fathersName"  fieldpattern="[A-Za-z]+" req_flag={true} format={/[^A-Za-z\s]/g} formData={formData} setFormData={setFormData}/>
            </div>

            <div className="fathers_Occupation">
              <Allfields fieldtype="text" value="Father's Occupation" inputname="fathersOccupation"  fieldpattern="[A-Za-z]+" req_flag={true} format={/[^A-Za-z\s]/g} formData={formData} setFormData={setFormData}/>
            </div>

            <div className="fathers_Mobile_Number">
              <Allfields fieldtype="text" value="Father's Mobile Number" inputname="fathersMobileNumber"  fieldpattern="[0-9]{10}" req_flag={true} format={/[^0-9]/g} formData={formData} setFormData={setFormData} />
            </div>

            <div className="mothers_Name">
              <Allfields fieldtype="text" value="Mother's Name" inputname="mothersName"  fieldpattern="[A-Za-z]+" req_flag={true} format={/[^A-Za-z\s]/g} formData={formData} setFormData={setFormData} />
            </div>

            <div className="mothers_Occupation">
              <Allfields fieldtype="text" value="Mother's Occupation" inputname="mothersOccupation"  fieldpattern="[A-Za-z]+" req_flag={true} format={/[^A-Za-z\s]/g} formData={formData} setFormData={setFormData}/>
            </div>

            <div className="Mothers_Mobile_Number">
              <Allfields fieldtype="text" value="Mother's Mobile Number" inputname="mothersMobileNumber"  fieldpattern="[0-9]{10}" req_flag={true} format={/[^0-9]/g} formData={formData} setFormData={setFormData}/>
            </div>

            <div className="guardians_name">
              <Allfields fieldtype="text" value="Guardian Name" inputname="guardiansName"  fieldpattern="[A-Za-z]+" req_flag={false} format={/[^A-Za-z\s]/g} formData={formData} setFormData={setFormData}/>
            </div>

            <div className="guardians_occupation">
              <Allfields fieldtype="text" value="Guardian Occupation" inputname="guardiansOccupation"   fieldpattern="[A-Za-z]+" req_flag={false} format={/[^A-Za-z\s]/g} formData={formData} setFormData={setFormData} />
            </div>

            <div className=" guardians_mobile_number">
              <Allfields fieldtype="text" value="Guardian Mobile Number" inputname="guardiansMobileNumber"  fieldpattern="[0-9]{10}" req_flag={false} format={/[^0-9]/g} formData={formData} setFormData={setFormData}/>
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
              <Allfields fieldtype="text" value="Income" inputname="income"  fieldpattern="[0-9]+" req_flag={true} formData={formData} setFormData={setFormData} />
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

            <div className="profile_photo">
              <Fileupload input_name="profilePhoto"  />
            </div>
            <hr id='registration-seperator' />

            <div className="mobile_no">
              <Allfields fieldtype="text" value="Mobile Number" inputname="mobileNumber"  fieldpattern="[0-9]{10}" req_flag={true} format={/[^0-9]/g} formData={formData} setFormData={setFormData}/>
            </div>
            <div className="mail_id">
              <label htmlFor="Emailid">Email ID</label>
              <input id='mailid' type="text" name="emailid" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required  value={formData.emailid || ''}  onChange={handleOtherField}  />
            </div>

            <div className="communication_address">
              <label htmlFor="CommunicationAddress">Communication Address</label><br />
              <textarea name="communicationAddress" cols="40" rows="6" placeholder="Enter your address here" value={formData.communicationAddress || ''} onChange={handleOtherField} required></textarea>
            </div>

            <div className=" residential_address">
              <label htmlFor="ResidentialAddress">Residential Address</label><br />
              <textarea name="residentialAddress" cols="40" rows="6" placeholder="  Enter your address here" value={formData.residentialAddress || ''} onChange={handleOtherField} required></textarea>
            </div>

            <div className="hosteller">
              <label htmlFor="Hosteller">Hosteller</label>
              <div className="radio" required>
                <div className="radio-spacing"><input type="radio" name="hosteller" value="Yes"  onChange={handleOtherField} checked={formData.hosteller === 'Yes'}/> Yes</div>
                <div className="radio-spacing"> <input type="radio" name="hosteller" value="No"  onChange={handleOtherField} checked={formData.hosteller === 'No'}/> No</div>
              </div>
            </div>

            <div className="hostel_type" required>
              <label htmlFor="Hostel Type">Hostel Type</label>
              <div className="radio">
                <div className="radio-spacing"><input type="radio" name="hostelType" value="Free" onChange={handleOtherField} checked={formData.hostelType === 'Free'}/> Free</div>
                <div className="radio-spacing"><input type="radio" name="hostelType" value="Paid" onChange={handleOtherField} checked={formData.hostelType === 'Paid'}/> Paid</div>
              </div>
            </div>

            <hr id='registration-seperator' />

            <div className=" bank_name">
              <Allfields fieldtype="text" value="Bank Name" inputname="bankName"  fieldpattern="[A-Za-z]+" req_flag={true} format={/[^A-Za-z\s]/g} formData={formData} setFormData={setFormData} />
            </div>

            <div className="branch_Name">
              <Allfields fieldtype="text" value="Branch Name" inputname="branchName"  fieldpattern="[A-Za-z]+" req_flag={true} format={/[^A-Za-z\s]/g} formData={formData} setFormData={setFormData} />
            </div>

            <div className="account_Number ">
              <Allfields fieldtype="text" value="Account Number" inputname="accountNumber"  fieldpattern="[0-9]{11,16}" req_flag={true} format={/[^0-9]/g} formData={formData} setFormData={setFormData}/>
            </div>

            <div className="ifsc_Code ">
              <Allfields fieldtype="text" value="IFSC Code" inputname="ifscCode"  fieldpattern="[A-Za-z0-9]+" req_flag={true} formData={formData} setFormData={setFormData}/>
            </div>
            <div className="field">
                <input type="file" id="passbook" name="passbook" className="educational-document" style={{ display: 'none' }} onChange={handleFileUpload('passbook')} />
                <p className="marksheet_label">Bank Passbook</p>
                <label htmlFor="passbook" className="File-upload-button" style={{ justifyContent: 'center' }} >
                  <img className='icon' src={Upload} alt='' />
                  <p>Upload</p>
                </label>
                {fileNames['passbook'] && <p className="uploaded_file_name">{fileNames['passbook']} Uploaded</p>}
              </div>

            <hr id='registration-seperator' />

            <div className="sslc">
              <Allfields fieldtype="text" value="SSLC %" inputname="sslc"  fieldpattern="\d+\.\d+" req_flag={true} format={/[^0-9.]/g} formData={formData} setFormData={setFormData} />
              <div className="field">
                <input type="file" id="sslc-input" name="sslcFile" className="educational-document" style={{ display: 'none' }} onChange={handleFileUpload('sslcFile')} />
                <p className="marksheet_label">SSLC Marksheet</p>
                <label htmlFor="sslc-input" className="File-upload-button" style={{ justifyContent: 'center' }} >
                  <img className='icon' src={Upload} alt='' />
                  <p>Upload</p>
                </label>
                {fileNames['sslcFile'] && <p className="uploaded_file_name">{fileNames['sslcFile']} Uploaded</p>}
            </div>
            </div>

            <div className="hsc_1_Year">
              <Allfields fieldtype="text" value="HSC 1st YEAR" inputname="hsc1Year" fieldpattern="\d+\.\d+" req_flag={false} format={/[^0-9.]/g} formData={formData} setFormData={setFormData} />

              <div className="field">
                <p className="marksheet_label">HSC I-year Marksheet</p>
                <input type="file" id="hsc1-input" name="hsc1YearFile" className="educational-document" style={{ display: 'none' }} onChange={handleFileUpload('hsc1YearFile')} />
                <label htmlFor="hsc1-input" className="File-upload-button" style={{ justifyContent: 'center' }}  >
                  <img className='icon' src={Upload} alt=''/>
                  <p>Upload</p>
                </label>

                {fileNames['hsc1YearFile'] && <p className="uploaded_file_name">{fileNames['hsc1YearFile']} Uploaded</p>}
              </div>
            </div>

            <div className="hsc2Year">
              <Allfields fieldtype="text" value="HSC 2nd YEAR" inputname="hsc2Year"   fieldpattern="\d+\.\d+" req_flag={false} format={/[^0-9.]/g} formData={formData} setFormData={setFormData}/>

              <div className="field">
                <p className="marksheet_label">HSC II-year Marksheet</p>
                <input type="file" id="hsc2-input" name="hsc2YearFile" className="educational-document" style={{ display: 'none' }} onChange={handleFileUpload('hsc2YearFile')} />
                <label htmlFor="hsc2-input" className="File-upload-button" style={{ justifyContent: 'center' }}  >
                  <img className='icon' src={Upload} alt=''/>
                  <p>Upload</p>
                </label>
                {fileNames['hsc2YearFile'] && <p className="uploaded_file_name">{fileNames['hsc2YearFile']} Uploaded</p>}
              </div>
            </div>

            <div className="diploma">
              <Allfields fieldtype="text" value="Diploma %" inputname="diploma"   fieldpattern="\d+\.\d+" req_flag={false} format={/[^0-9.]/g} formData={formData} setFormData={setFormData} />
              <div className="field">
                <p className="marksheet_label">Diploma Marksheet</p>
                <input type="file" id="diploma-input" name="diplomaFile" className="educational-document" style={{ display: 'none' }}  onChange={handleFileUpload('diplomaFile')} />
                <label htmlFor="diploma-input" className="File-upload-button" style={{ justifyContent: 'center' }} >
                  <img className='icon' src={Upload} alt=''/>
                  <p>Upload</p>
                </label>
                {fileNames['diplomaFile'] && <p className="uploaded_file_name">{fileNames['diplomaFile']} Uploaded</p>}
              </div>
            </div>
            <div className="emis_Number">
              <Allfields fieldtype="text" value="Emis Number" inputname="emisNumber"   fieldpattern="[0-9]{10,20}" req_flag={true} format={/[^0-9]/g} formData={formData} setFormData={setFormData}/>
            </div>

            <div className="first_graduate">
              <label htmlFor="First Graduate">First Graduate</label>
              <div className="radio" required>
                <div className="radio-spacing"><input type="radio" name="firstGraduate" value="Yes" onChange={handleOtherField} checked={formData.firstGraduate === 'Yes'}/> Yes</div>
                <div className="radio-spacing"><input type="radio" name="firstGraduate" value="No" onChange={handleOtherField} checked={formData.firstGraduate === 'No'} /> No</div>
              </div>
            </div>

            <div className="special_category">
              <label htmlFor="Special Category">Special Category</label>
              <select className='community-dropdown' name="specialCategory" value={formData.specialCategory || ''} required onChange={handleOtherField} >
                <option>Select</option>
                <option value="Ex-Service Man">Ex-Service Man</option>
                <option value="Eminent sports man" >Eminent sports man</option>
                <option value="Differently Abled" >Differently Abled</option>
                <option value="Not applicable" >Not applicable</option>
              </select>
            </div>

            <div className='personal-form-buttons'>
              <Allbuttons type="submit" value="Next" image={Nextwhite} />
              <ToastContainer />
            </div>

          </div>
        </form>

      </div>

    </div>
  )
}

export default Personalform