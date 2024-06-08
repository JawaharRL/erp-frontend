import React, { useEffect, useState } from 'react';
import './Personalform.css';
import Nextwhite from '../../Assets/Nextwhite.svg';
import Upload from '../../Assets/upload.svg';
import Formtitle from '../../Components/Formtitle/Formtitle';
import Allbuttons from '../../Components/Allbuttons/Allbuttons';
import Allfields from '../../Components/Allfields/Allfields';
import Fileupload from '../../Components/Fileupload/Fileupload';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Personalform() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem('formData');
    return storedData ? JSON.parse(storedData) : {};
  });
  const [Uname, setUname] = useState('');

  const [fileName1, setFileName1] = useState('');
  const [fileName2, setFileName2] = useState('');
  const [fileName3, setFileName3] = useState('');
  const [fileName4, setFileName4] = useState('');

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleFileUpload1 = (event) => {
    // setFileName1(event.target.files[0].name);
    // setFormData({ ...formData, sslc_File: event.target.files[0] });
    const file = event.target.files[0];
    if (file) {
      setFileName1(file.name);
      setFormData({ ...formData, [fileName1]: file });

      // Store the file name in localStorage
      localStorage.setItem(formData, file.name);
    }
  };
  const handleFileUpload2 = (event) => {
    // setFileName2(event.target.files[0].name);
    // setFormData({ ...formData, sslc_File: event.target.files[0] });
    const file = event.target.files[0];
    if (file) {
      setFileName2(file.name);
      setFormData({ ...formData, [fileName2]: file });

      // Store the file name in localStorage
      localStorage.setItem(formData, file.name);
    }
  };
  const handleFileUpload3 = (event) => {
    // setFileName3(event.target.files[0].name);
    // setFormData({ ...formData, sslc_File: event.target.files[0] });
    const file = event.target.files[0];
    if (file) {
      setFileName3(file.name);
      setFormData({ ...formData, [fileName3]: file });

      // Store the file name in localStorage
      localStorage.setItem(formData, file.name);
    }
  };
  const handleFileUpload4 = (event) => {
    // setFileName4(event.target.files[0].name);
    // setFormData({ ...formData, sslc_File: event.target.files[0] });
    const file = event.target.files[0];
    if (file) {
      setFileName4(file.name);
      setFormData({ ...formData, [fileName4]: file });

      // Store the file name in localStorage
      localStorage.setItem(formData, file.name);
    }
  };

  // const handleOtherField=(event) => setFormData({...formData, [event.target.name]: event.target.value});
  const handleOtherField = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'http://localhost:8080/api/student';

    const formData = new FormData();
    formData.append('first_Name', e.target.elements.first_Name.value);
    formData.append('last_Name', e.target.elements.last_Name.value);
    formData.append('date_Of_Birth', e.target.elements.date_Of_Birth.value);
    formData.append('gender', e.target.elements.gender.value);
    formData.append('aadhar_Number', e.target.elements.aadhar_Number.value);
    formData.append('nationality', e.target.elements.nationality.value);
    formData.append('religion', e.target.elements.religion.value);
    formData.append('community', e.target.elements.community.value);
    formData.append('caste', e.target.elements.caste.value);
    formData.append('fathers_Name', e.target.elements.fathers_Name.value);
    formData.append('fathers_Occupation', e.target.elements.fathers_Occupation.value);
    formData.append('fathers_Mobile_Number', e.target.elements.fathers_Mobile_Number.value);
    formData.append('mothers_Name', e.target.elements.mothers_Name.value);
    formData.append('mothers_Occupation', e.target.elements.mothers_Occupation.value);
    formData.append('mothers_Mobile_Number', e.target.elements.mothers_Mobile_Number.value);
    formData.append('guardians_Name', e.target.elements.guardians_Name.value);
    formData.append('guardians_Occupation', e.target.elements.guardians_Occupation.value);
    formData.append('guardians_Mobile_Number', e.target.elements.guardians_Mobile_Number.value);
    formData.append('parents_Status', e.target.elements.parents_Status.value);
    formData.append('income', e.target.elements.income.value);
    formData.append('marital_Status', e.target.elements.marital_Status.value);
    formData.append('profile_Photo', e.target.elements.profile_Photo.files[0]);
    formData.append('mobile_Number', e.target.elements.mobile_Number.value);
    formData.append('emailid', e.target.elements.emailid.value);
    formData.append('residential_Address', e.target.elements.residential_Address.value);
    formData.append('communication_Address', e.target.elements.communication_Address.value);
    formData.append('hosteller', e.target.elements.hosteller.value);
    formData.append('hostel_Type', e.target.elements.hostel_Type.value);
    formData.append('bank_Name', e.target.elements.bank_Name.value);
    formData.append('ifsc_Code', e.target.elements.ifsc_Code.value);
    formData.append('branch_Name', e.target.elements.branch_Name.value);
    formData.append('account_Number', e.target.elements.account_Number.value);
    formData.append('sslc', e.target.elements.sslc.value);
    formData.append('hsc_1_Year', e.target.elements.hsc_1_Year.value);
    formData.append('hsc_2_Year', e.target.elements.hsc_2_Year.value);
    formData.append('diploma', e.target.elements.diploma.value);
    formData.append('sslc_File', e.target.elements.sslc_File.files[0]);
    formData.append('hsc_1_Year_File', e.target.elements.hsc_1_Year_File.files[0]);
    formData.append('hsc_2_Year_File', e.target.elements.hsc_2_Year_File.files[0]);
    formData.append('diploma_File', e.target.elements.diploma_File.files[0]);
    formData.append('emis_Number', e.target.elements.emis_Number.value);
    formData.append('first_Graduate', e.target.elements.first_Graduate.value);
    formData.append('special_Category', e.target.elements.diploma.value);
    
    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // localStorage.removeItem('formData');
      navigate('/academic-form', { state: { Uname: formData.get('first_Name') } });
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
            <Allfields fieldtype="text" value="First Name" inputname="first_Name"  fieldpattern="[A-Za-z]+" req_flag={true} format={/[^A-Za-z\s]/g} formData={formData} setFormData={setFormData} />

            </div>


            <div className="last_name">
              <Allfields fieldtype="text" value="Last Name" inputname="last_Name"  fieldpattern="[A-Za-z]+" format={/[^A-Za-z\s]/g} formData={formData} setFormData={setFormData}/>
            </div>

            <div className="date_Of_Birth">
              <Allfields fieldtype="date" value="Date of Birth" inputname="date_Of_Birth"   fieldpattern="" req_flag={true} format="" formData={formData} setFormData={setFormData} />
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
              <Allfields fieldtype="text" value="Aadhar Number" inputname="aadhar_Number"   fieldpattern="[0-9]{12}" req_flag={true} format={/[^0-9]/g} formData={formData} setFormData={setFormData}/>
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
              <Allfields fieldtype="text" value="Father's Name" inputname="fathers_Name"  fieldpattern="[A-Za-z]+" req_flag={true} format={/[^A-Za-z\s]/g} formData={formData} setFormData={setFormData}/>
            </div>

            <div className="fathers_Occupation">
              <Allfields fieldtype="text" value="Father's Occupation" inputname="fathers_Occupation"  fieldpattern="[A-Za-z]+" req_flag={true} format={/[^A-Za-z\s]/g} formData={formData} setFormData={setFormData}/>
            </div>

            <div className="fathers_Mobile_Number">
              <Allfields fieldtype="text" value="Father's Mobile Number" inputname="fathers_Mobile_Number"  fieldpattern="[0-9]{10}" req_flag={true} format={/[^0-9]/g} formData={formData} setFormData={setFormData} />
            </div>

            <div className="mothers_Name">
              <Allfields fieldtype="text" value="Mother's Name" inputname="mothers_Name"  fieldpattern="[A-Za-z]+" req_flag={true} format={/[^A-Za-z\s]/g} formData={formData} setFormData={setFormData} />
            </div>

            <div className="mothers_Occupation">
              <Allfields fieldtype="text" value="Mother's Occupation" inputname="mothers_Occupation"  fieldpattern="[A-Za-z]+" req_flag={true} format={/[^A-Za-z\s]/g} formData={formData} setFormData={setFormData}/>
            </div>

            <div className="Mothers_Mobile_Number">
              <Allfields fieldtype="text" value="Mother's Mobile Number" inputname="mothers_Mobile_Number"  fieldpattern="[0-9]{10}" req_flag={true} format={/[^0-9]/g} formData={formData} setFormData={setFormData}/>
            </div>

            <div className="guardians_name">
              <Allfields fieldtype="text" value="Guardian Name" inputname="guardians_Name"  fieldpattern="[A-Za-z]+" req_flag={false} format={/[^A-Za-z\s]/g} formData={formData} setFormData={setFormData}/>
            </div>

            <div className="guardians_occupation">
              <Allfields fieldtype="text" value="Guardian Occupation" inputname="guardians_Occupation"   fieldpattern="[A-Za-z]+" req_flag={false} format={/[^A-Za-z\s]/g} formData={formData} setFormData={setFormData} />
            </div>

            <div className=" guardians_mobile_number">
              <Allfields fieldtype="text" value="Guardian Mobile Number" inputname="guardians_Mobile_Number"  fieldpattern="[0-9]{10}" req_flag={false} format={/[^0-9]/g} formData={formData} setFormData={setFormData}/>
            </div>
            <div className="marital_status">
              <label htmlFor="MaritalStatus">Marital Status</label>
              <select className='community-dropdown' name='marital_Status'value={formData.marital_Status || ''}  onChange={handleOtherField} >
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
              <select className='community-dropdown' name="parents_Status" value={formData.parents_Status || ''} onChange={handleOtherField} >
                <option >Select</option>
                <option value="Both are alive" >Both are alive</option>
                <option value="Father alive" >Father alive</option>
                <option value="Mother alive">Mother alive</option>
                <option value="Both are not alive">Both are not alive</option>
              </select>
            </div>

            <div className="profile_photo">
              <Fileupload input_name="profile_Photo"  />
            </div>
            <hr id='registration-seperator' />

            <div className="mobile_no">
              <Allfields fieldtype="text" value="Mobile Number" inputname="mobile_Number"  fieldpattern="[0-9]{10}" req_flag={true} format={/[^0-9]/g} formData={formData} setFormData={setFormData}/>
            </div>
            <div className="mail_id">
              <label htmlFor="Emailid">Email ID</label>
              <input id='mailid' type="text" name="emailid" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required onChange={(event) => setUname(event.target.value)} />
            </div>

            <div className="communication_address">
              <label htmlFor="CommunicationAddress">Communication Address</label><br />
              <textarea name="communication_Address" cols="40" rows="6" placeholder="Enter your address here" value={formData.communication_Address || ''} onChange={handleOtherField} required></textarea>
            </div>

            <div className=" residential_address">
              <label htmlFor="ResidentialAddress">Residential Address</label><br />
              <textarea name="residential_Address" cols="40" rows="6" placeholder="  Enter your address here" value={formData.residential_Address || ''} onChange={handleOtherField} required></textarea>
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
                <div className="radio-spacing"><input type="radio" name="hostel_Type" value="Free" onChange={handleOtherField} checked={formData.hostel_Type === 'Free'}/> Free</div>
                <div className="radio-spacing"><input type="radio" name="hostel_Type" value="Paid" onChange={handleOtherField} checked={formData.hostel_Type === 'Paid'}/> Paid</div>
              </div>
            </div>

            <hr id='registration-seperator' />

            <div className=" bank_name">
              <Allfields fieldtype="text" value="Bank Name" inputname="bank_Name"  fieldpattern="[A-Za-z]+" req_flag={true} format={/[^A-Za-z\s]/g} formData={formData} setFormData={setFormData} />
            </div>

            <div className="branch_Name">
              <Allfields fieldtype="text" value="Branch Name" inputname="branch_Name"  fieldpattern="[A-Za-z]+" req_flag={true} format={/[^A-Za-z\s]/g} formData={formData} setFormData={setFormData} />
            </div>

            <div className="account_Number ">
              <Allfields fieldtype="text" value="Account Number" inputname="account_Number"  fieldpattern="[0-9]{11,16}" req_flag={true} format={/[^0-9]/g} formData={formData} setFormData={setFormData}/>
            </div>

            <div className="ifsc_Code ">
              <Allfields fieldtype="text" value="IFSC Code" inputname="ifsc_Code"  fieldpattern="[A-Za-z0-9]+" req_flag={true} formData={formData} setFormData={setFormData}/>
            </div>


            <hr id='registration-seperator' />

            <div className="sslc">
              <Allfields fieldtype="text" value="SSLC %" inputname="sslc"  fieldpattern="\d+\.\d+" req_flag={true} format={/[^0-9.]/g} formData={formData} setFormData={setFormData} />
              <div className="field">
                <input type="file" id="sslc-input" name="sslc_File" className="educational-document" style={{ display: 'none' }} onChange={handleFileUpload1} />
                <p className="marksheet_label">SSLC Marksheet</p>
                <label htmlFor="sslc-input" className="File-upload-button" style={{ justifyContent: 'center' }} >
                  <img className='icon' src={Upload} />
                  <p>Upload</p>
                </label>
                {fileName1 && <p className="uploaded_file_name">{fileName1} Uploaded</p>}

              </div>
            </div>

            <div className="hsc_1_Year">
              <Allfields fieldtype="text" value="HSC 1st YEAR" inputname="hsc_1_Year" fieldpattern="\d+\.\d+" req_flag={false} format={/[^0-9.]/g} formData={formData} setFormData={setFormData} />

              <div className="field">
                <p className="marksheet_label">HSC I-year Marksheet</p>
                <input type="file" id="hsc1-input" name="hsc_1_Year_File" className="educational-document" style={{ display: 'none' }} onChange={handleFileUpload2} />
                <label htmlFor="hsc1-input" className="File-upload-button" style={{ justifyContent: 'center' }}  >
                  <img className='icon' src={Upload} />
                  <p>Upload</p>
                </label>
                {fileName2 && <p className="uploaded_file_name">{fileName2} Uploaded</p>}
              </div>
            </div>

            <div className="hsc_2_Year">
              <Allfields fieldtype="text" value="HSC 2nd YEAR" inputname="hsc_2_Year"   fieldpattern="\d+\.\d+" req_flag={false} format={/[^0-9.]/g} formData={formData} setFormData={setFormData}/>

              <div className="field">
                <p className="marksheet_label">HSC II-year Marksheet</p>
                <input type="file" id="hsc2-input" name="hsc_2_Year_File" className="educational-document" style={{ display: 'none' }} onChange={handleFileUpload3} />
                <label htmlFor="hsc2-input" className="File-upload-button" style={{ justifyContent: 'center' }}  >
                  <img className='icon' src={Upload} />
                  <p>Upload</p>
                </label>
                {fileName3 && <p className="uploaded_file_name">{fileName3} Uploaded</p>}
              </div>
            </div>

            <div className="diploma">
              <Allfields fieldtype="text" value="Diploma %" inputname="diploma"   fieldpattern="\d+\.\d+" req_flag={false} format={/[^0-9.]/g} formData={formData} setFormData={setFormData} />
              <div className="field">
                <p className="marksheet_label">Diploma Marksheet</p>
                <input type="file" id="diploma-input" name="diploma_File" className="educational-document" style={{ display: 'none' }}  onChange={handleFileUpload4} />
                <label htmlFor="diploma-input" className="File-upload-button" style={{ justifyContent: 'center' }} >
                  <img className='icon' src={Upload} />
                  <p>Upload</p>
                </label>
                {fileName4 && <p className="uploaded_file_name">{fileName4} Uploaded</p>}
              </div>
            </div>
            <div className="emis_Number">
              <Allfields fieldtype="text" value="Emis Number" inputname="emis_Number"   fieldpattern="[0-9]{10,20}" req_flag={true} format={/[^0-9]/g} formData={formData} setFormData={setFormData}/>
            </div>

            <div className="first_graduate">
              <label htmlFor="First Graduate">First Graduate</label>
              <div className="radio" required>
                <div className="radio-spacing"><input type="radio" name="first_Graduate" value="Yes" onChange={handleOtherField} checked={formData.first_Graduate === 'Yes'}/> Yes</div>
                <div className="radio-spacing"><input type="radio" name="first_Graduate" value="No" onChange={handleOtherField} checked={formData.first_Graduate === 'No'} /> No</div>
              </div>
            </div>

            <div className="special_category">
              <label htmlFor="Special Category">Special Category</label>
              <select className='community-dropdown' name="special_Category" value={formData.special_Category || ''} required onChange={handleOtherField} >
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