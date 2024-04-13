import React from 'react';
import './Personalform.css';
import Profile from '../../Assets/profile.svg'
import save from '../../Assets/save.svg'
import Nextwhite from '../../Assets/Nextwhite.svg'
import { Link} from 'react-router-dom';
import Formtitle from '../../Components/Formtitle/Formtitle';
import Allbuttons from '../../Components/Allbuttons/Allbuttons';
import Allfields from '../../Components/Allfields/Allfields';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Personalform() {
  const navigate = useNavigate();

  const goToAcademicform = () => {
    navigate('/academic-form');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();   

    const formData = new FormData(e.target);
    const url = 'http://localhost:8080/api/student';

    const data = {
      first_Name: formData.get('first_Name'),
      last_Name: formData.get('last_Name'), 
      date_Of_Birth: formData.get('date_Of_Birth'),
      gender: formData.get('gender'),
      aadhar_Number: formData.get('aadhar_Number'),
      nationality: formData.get('nationality'),
      religion: formData.get('religion'),
      community: formData.get('community'),
      caste: formData.get('caste'),
      fathers_Name: formData.get('fathers_Name'),
      fathers_Occupation: formData.get('fathers_Occupation'),
      mothers_Name: formData.get('mothers_Name'),
      mothers_Occupation: formData.get('mothers_Occupation'),
      guardians_Name: formData.get('guardians_Name'),
      guardians_Occupation: formData.get('guardians_Occupation'),
      parents_Status: formData.get('parents_Status'),
      income: formData.get('income'),
      marital_Status: formData.get('marital_Status'),
      // profile_Photo:formData.get('profile_Photo'),
      mobile_Number: formData.get('mobile_Number'),
      email_Id: formData.get('email_id'),
      residential_Address: formData.get('residential_Address'),
      communication_Address: formData.get('communication_Address'),
      hosteller: formData.get('hosteller'),
      hostel_Type: formData.get('hostel_Type'),
      bank_Name: formData.get('bank_Name'),
      ifsc_Code: formData.get('ifsc_Code'),
      branch_Name: formData.get('branch_Name'),
      account_Number: formData.get('account_Number'),
      sslc: formData.get('sslc'),
      hsc_1_Year: formData.get('hsc_1_Year'),
      hsc_2_Year: formData.get('hsc_2_Year'),
      diploma: formData.get('diploma'),
      emis_Number: formData.get('emis_Number'),
      first_Graduate: formData.get('first_Graduate'),
      special_Category: formData.get('special_Category')
    };

    try {
      const response = await axios.post(url, data);
      console.log(response.data);
    } catch (error) {
      console.error('Error saving student:', error);
    }
  };
  return (
    <div>
      <div className="registration-background">
        <div className='form-content'>
          <Formtitle></Formtitle>
        </div>
        <form id='registration_form' onSubmit={handleSubmit}>

          <div className="personal-container">
            <div className="first_name">
              <Allfields fieldtype="text" value="First Name" inputname="first_Name"fieldpattern="" req_flag=""/>
            </div>
            <div className="last_name">
            <Allfields fieldtype="text" value="Last Name" inputname="last_Name"fieldpattern=""/>
            </div>

            <div className="date_Of_Birth">
            <Allfields fieldtype="date" value="Date of Birth" inputname="date_Of_Birth"fieldpattern="" req_flag=""/>
            </div>
         
            <div className="gender">
              <label htmlFor="Gender">Gender</label>
              <div className="radio" >
                <div className="radio-spacing"><input type="radio" name="gender" value="Male" required /> Male</div>
                <div className="radio-spacing"><input type="radio" name="gender" value="Female" /> Female</div>
                <div className="radio-spacing"><input type="radio" name="gender" value="Others" /> Others</div>

            </div>


            </div>
            <div className="aadhar_number">
            <Allfields fieldtype="text" value="Aadhar Number" inputname="aadhar_Number"fieldpattern="" req_flag=""/>
              {/* <label htmlFor="Aadhar">Aadhar Number</label>
              <input type="text" name="aadhar_Number" pattern="[0-9]{12}" required /> */}
            </div>
          
            <div className="nationality">
            <Allfields fieldtype="text" value="Nationality" inputname="nationality"fieldpattern="" req_flag=""/>
              {/* <label htmlFor="Nationality">Nationality</label>
              <input type="text" name="nationality" pattern="[A-Za-z]+" required /> */}
            </div>

            <div className="religion"> 
            <Allfields fieldtype="text" value="Religion" inputname="religion"fieldpattern="" req_flag=""/>
              {/* <label htmlFor="Religion">Religion</label>
              <input type="text" name="religion" pattern="[A-Za-z]+" required /> */}
            </div>

            <div className="community">
              <label htmlFor="Community">Community</label>
              <select className='community-dropdown' name="community" required>
                <option value="Select">Select</option>
                <option value="OC">OC</option>
                <option value="BC">BC</option>
                <option value="MBC">MBC</option>
                <option value="SC">SC</option>
                <option value="DNC">DNC</option>
                <option value="BCM">BCM</option>
              </select>
            </div>
            <div className="caste">
            <Allfields fieldtype="text" value="Caste" inputname="caste"fieldpattern="" req_flag=""/>
              {/* <label htmlFor="Caste">Caste</label>
              <input type="text" name="caste" pattern="[A-Za-z]+" required /> */}
            </div>
            <div className="fathers_Name">
            <Allfields fieldtype="text" value="Father's Name" inputname="fathers_Name"fieldpattern="" req_flag=""/>
              {/* <label htmlFor="FatherName">Father's Name</label>
              <input type="text" name="fathers_Name" pattern="[A-Za-z]+" required /> */}
            </div>

            <div className="fathers_Occupation">
            <Allfields fieldtype="text" value="Father's Occupation" inputname="fathers_Occupation"fieldpattern="" req_flag=""/>
              {/* <label htmlFor="Occupation">Father's Occupation</label>
              <input type="text" name="fathers_Occupation" pattern="[A-Za-z]+" /> */}
            </div>

            <div className="fathetrs_Mobile_Number">
            <Allfields fieldtype="text" value="Father's Mobile Number" inputname="fathetrs_Mobile_Number"fieldpattern="" req_flag=""/>
              {/* <label htmlFor="MobileNo">Father's Mobile Number</label>
              <input type="text" name="fathetrs_Mobile_Number" pattern="[0-9]{10}" /> */}
            </div>
            
            <div className="mothers_Name">
            <Allfields fieldtype="text" value="Mother's Name" inputname="mothers_Name"fieldpattern="" req_flag=""/>
              {/* <label htmlFor="MotherName">Mother's Name</label>
              <input type="text" name="mothers_Name" pattern="[A-Za-z]+" required/> */}
            </div>

            <div className="mothers_Occupation">
            <Allfields fieldtype="text" value="Mother's Occupation" inputname="mothers_Occupation"fieldpattern="" req_flag=""/>
              {/* <label htmlFor="Occupation">Mother's Occupation</label>
              <input type="text" name="mothers_Occupation" pattern="[A-Za-z]+" /> */}
            </div>

            <div className="Mothers_Mobile_Number">
            <Allfields fieldtype="text" value="Mother's Mobile Number" inputname="Mothers_Mobile_Number"fieldpattern="" req_flag=""/>
              {/* <label htmlFor="MobileNo">Mother's Mobile Number</label>
              <input type="text" name="Mothers_Mobile_Number" pattern="[0-9]{10}" /> */}
            </div>

            <div className="guardians_name">
            <Allfields fieldtype="text" value="Guardian Name" inputname="guardians_name"fieldpattern="" req_flag=""/>
              {/* <label htmlFor="GuardianName">Guardian Name</label>
              <input type="text" name="guardians_Name" pattern="[A-Za-z]+" /> */}
            </div>

            <div className="guardians_occupation">
            <Allfields fieldtype="text" value="Guardian Occupation" inputname="guardians_occupation"fieldpattern="" req_flag=""/>
              {/* <label htmlFor="Occupation">Guardian Occupation</label>
              <input type="text" name="guardians_Occupation" pattern="[A-Za-z]+" /> */}
            </div>

            <div className=" guardians_mobile_number">
            <Allfields fieldtype="text" value="Guardian Mobile Number" inputname="guardians_mobile_number"fieldpattern="" req_flag=""/>
              {/* <label htmlFor="MobileNo">Guardian Mobile Number</label>
              <input type="text" name="guardians_Mobile_Number" pattern="[0-9]{10}" /> */}
            </div>
            <div className="marital_status">
              <label htmlFor="MaritalStatus">Marital Status</label>
              <select className='community-dropdown' >
                <option>Select</option>
                <option value="Unmarried">Unmarried</option>
                <option value="Married">Married</option>
              </select>
            </div>

            <div className="income">
            <Allfields fieldtype="text" value="Income" inputname="income"fieldpattern="" req_flag=""/>
              {/* <label htmlFor="Income">Income</label>
              <input type="text" name="income" pattern="[0-9]+" required /> */}
            </div>

            <div className="parents_status">
              <label htmlFor="ParentsStatus">Parents Status</label>
              <select className='community-dropdown' name="parents_Status" >
                <option >Select</option>
                <option value="Both are alive">Both are alive</option>
                <option value="Father alive">Father alive</option>
                <option value="Mother alive">Mother alive</option>
                <option value="Both are not alive">Both are not alive</option>
              </select>
            </div>
          </div>
          <div className="registration1-levels">
            <div className="field">
              <label htmlFor="GuardianName">Guardian Name</label>
              <input type="text" name="guardians_Name" pattern="[A-Za-z\s]+" />
            </div>
            <div className="field">
              <label htmlFor="Occupation">Guardian Occupation</label>
              <input type="text" name="guardians_Occupation" pattern="[A-Za-z\s]+" />
            </div>
            <div className=" field">
              <label htmlFor="MobileNo">Guardian Mobile Number</label>
              <input type="text" name="guardians_Mobile_Number" pattern="[0-9]{10}" />
            </div>
            
          </div>        
          <div className="profile_photo">
            <img className="photo" src={Profile} alt="Photopreview"/>
            <div className='get_photo'>
              <input type="file" name="profile_Photo" />
              <br />
              <br />
              <p style={{ color: 'red' }}>File should be less than 1 Mb</p>
              <p style={{ color: 'red' }}>File may be pdf, jpeg, or jpg</p>

            </div>
          </div>

<hr id='registration-seperator' />

            <div className="mobile_no">
            <Allfields fieldtype="text" value="Mobile Number" inputname="MobileNo"fieldpattern="" req_flag=""/>
              {/* <label htmlFor="MobileNo">Mobile Number</label>
              <input id='mobilenumber' type="text" name="MobileNo" pattern="[0-9]{10}" required /> */}
            </div>

            <div className="mail_id">
            <Allfields fieldtype="text" value="Email ID" inputname="email_id"fieldpattern="" req_flag=""/>
              {/* <label htmlFor="Emailid">Email ID</label>
              <input id='mailid' type="text" name="email_id" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required /> */}
            </div>

           <div className="communication_address">
              <label htmlFor="CommunicationAddress">Communication Address</label><br />
              <textarea name="communication_Address" cols="40" rows="6" placeholder="Enter your address here" pattern="[\s\S]+" required></textarea>
            </div>

            <div className=" residential_address">
              <label htmlFor="ResidentialAddress">Residential Address</label><br />
              <textarea name="residential_Address" cols="40" rows="6" placeholder="Enter your address here" pattern="[\s\S]+" required></textarea>
            </div>
            
            <div className="hosteller">
              <label htmlFor="Hosteller">Hosteller</label>
              <div className="radio">
                <div className="radio-spacing"><input type="radio" name="hosteller" value="Yes" required /> Yes</div>
                <div className="radio-spacing"> <input type="radio" name="hosteller" value="No" /> No</div>
              </div>
            </div>

            <div className="hostel_type">
              <label htmlFor="Hostel Type">Hostel Type</label>
              <div className="radio">
                <div className="radio-spacing"><input type="radio" name="hostel_Type" value="Free" required /> Free</div>
                <div className="radio-spacing"><input type="radio" name="hostel_Type" value="Paid" /> Paid</div>
              </div>
            </div>
        
<hr id='registration-seperator' />
         
            <div className=" bank_name">
            <Allfields fieldtype="text" value="Bank Name" inputname="bank_Name"fieldpattern="" req_flag=""/>
              {/* <label htmlFor="Bank name">Bank Name</label>
              <input id='bank' type="text" name="bank_Name" pattern="[A-Za-z]+" required /> */}
            </div>

            <div className="branch_Name">
            <Allfields fieldtype="text" value="Branch Name" inputname="branch_Name"fieldpattern="" req_flag=""/>
              {/* <label htmlFor="branch_Name">Branch Name</label>
              <input id='branch' type="text" name="branch_Name" pattern="[A-Za-z]+" required /> */}
            </div>
         
            <div className="account_Number ">
            <Allfields fieldtype="text" value="Account Number" inputname="account_Number"fieldpattern="" req_flag=""/>
              {/* <label htmlFor="account_Number">Account Number</label>
              <input id='accno' type="text" name="account_Number" pattern="[0-9]{11,16}" required /> */}
            </div>

            <div className="ifsc_Code ">
            <Allfields fieldtype="text" value="IFSC Code" inputname="ifsc_Code"fieldpattern="" req_flag=""/>
              {/* <label htmlFor="ifsccode">IFSC Code</label>
              <input id='ifsc' type="text" name="ifsc_Code" pattern="[A-Za-z0-9]+" required /> */}
            </div>
        

<hr id='registration-seperator' />
          
            <div className="sslc">
            <Allfields fieldtype="text" value="SSLC %" inputname="sslc"fieldpattern="" req_flag=""/>
              {/* <label htmlFor="SSLC">SSLC %</label>
              <input type="text" name="sslc" className="" pattern="\d+\.\d+" required /> */}
            </div>

            <div className="hsc_1_Year">
            <Allfields fieldtype="text" value="HSC 1st YEAR" inputname="hsc_1_Year"fieldpattern="" req_flag=""/>
              {/* <label htmlFor="HSC 1st YEAR">HSC 1st YEAR %</label>
              <input type="text" name="hsc_1_Year" className="" pattern="\d+\.\d+" /> */}
            </div>

            <div className="hsc_2_Year">
            <Allfields fieldtype="text" value="HSC 2nd YEAR" inputname="hsc_2_Year"fieldpattern="" req_flag=""/>
              {/* <label htmlFor="HSC 2nd YEAR">HSC 2nd YEAR %</label>
              <input type="text" name="hsc_2_Year" className="" pattern="\d+\.\d+" /> */}
            </div>

            <div className="diploma">
            <Allfields fieldtype="text" value="Diploma %" inputname="diploma"fieldpattern="" req_flag=""/>
              {/* <label htmlFor="Diploma">Diploma %</label>
              <input type="text" name="diploma" className="" pattern="\d+\.\d+" /> */}
            </div>
         
            <div className="field">
              <input type="file" name="sslcfile" className="educational-document"  />
            </div>

            <div className="field">
              <input type="file" name="hscIfile" className="educational-document" />
            </div>

            <div className="field">
              <input type="file" name="hscIIfile" className="educational-document" />
            </div>

            <div className="field">
              <input type="file" name="diplomafile" className="educational-document" />
            </div>

            <div className="emis_Number">
            <Allfields fieldtype="text" value="Emis Number" inputname="emis_Number"fieldpattern="" req_flag=""/>
              {/* <label htmlFor="EmisNumber">Emis Number</label>
              <input type="text" name="emis_Number" pattern="[0-9]{10,20}" required /> */}
            </div>
            
            <div className="first_graduate">
              <label htmlFor="First Graduate">First Graduate</label>
              <div className="radio">
                <div className="radio-spacing"><input type="radio" name="first_Graduate" value="Yes" required /> Yes</div>
                <div className="radio-spacing"><input type="radio" name="first_Graduate" value="No" /> No</div>
              </div>
            </div>

            <div className="special_category">
              <label htmlFor="Special Category">Special Category</label>
              <select className='community-dropdown' name="special_Category"  >
                <option>Select</option>
                <option value="Ex-Service Man">Ex-Service Man</option>
                <option value="Eminent sports man">Eminent Sports man</option>
                <option value="Differently Abled">Differently Abled</option>
                <option value="Not applicable">Not Applicable</option>
              </select>
            </div>
       
          <div className='personal-form-buttons'>
              <Allbuttons type="submit" value="Save" image={save} />
              <Allbuttons target={goToAcademicform} value="Next" image={Nextwhite} />
          </div>
          </form>  
        </div>
       
        
      </div>
      

    
  )
}

export default Personalform