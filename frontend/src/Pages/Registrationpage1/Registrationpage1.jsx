
import React from 'react';
import './Registrationpage1.css';
import Profile from '../../Assets/profile.svg'
import Nextwhite from '../../Assets/Nextwhite.svg'
import { Link } from 'react-router-dom';
import Formtitle from '../../Components/Formtitle/Formtitle';
import axios from 'axios';


function Registrationpage1() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const url = 'http://localhost:8080/api/student';
    
    const data = {
        first_Name:formData.get('first_Name'),
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
        guardians_Name:formData.get('guardians_Name'),
        guardians_Occupation:formData.get('guardians_Occupation'),
        parents_Status:formData.get('parents_Status'),
        income:formData.get('income'),
        marital_Status:formData.get('marital_Status'),
        profile_Photo:formData.get('profile_Photo'),
        mobile_Number:formData.get('mobile_Number'),
        email_Id:formData.get('email_id'),
        residential_Address:formData.get('residential_Address'),
        communication_Address:formData.get('communication_Address'),
        hosteller:formData.get('hosteller'),
        hostel_Type:formData.get('hostel_Type'),
        bank_Name:formData.get('bank_Name'),
        ifsc_Code:formData.get('ifsc_Code'),
        branch_Name:formData.get('branch_Name'),
        account_Number:formData.get('account_Number'),
        sslc:formData.get('sslc'),
        hsc_1_Year:formData.get('hsc_1_Year'),
        hsc_2_Year:formData.get('hsc_2_Year'),
        diploma:formData.get('diploma'),
        emis_Number:formData.get('emis_Number'),
        first_Graduate:formData.get('first_Graduate'),
        special_Category:formData.get('special_Category')

    };
    console.log(data.date_Of_Birth);

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
           <div className="registration1-levels">
               <div className="field">
                <label htmlFor="Name">First Name</label>
                <input type="text" name="first_Name" />
               
              </div>
              <div className="field">
                <label htmlFor="Name" >Last Name</label>
                <input type="text" name="last_Name"   />
               
              </div>
              <div className="field">
                 <label htmlFor="Date of Birth">Date of Birth</label>
                 <input type="date" name="date_Of_Birth"  />
               </div>
            </div>
           
            <div className="registration1-levels">
               <div className="field">
                <label htmlFor="Gender">Gender</label>
               <div className="radio" >
                <div className="radio-spacing"><input type="radio" name="gender" value="Male"/> Male</div>
                <div className="radio-spacing"><input type="radio" name="gender" value="Female"/> Female</div>
                <div className="radio-spacing"><input type="radio" name="gender" value="Others"/> Others</div>
              </div>
                
                

              </div>
              <div className="field">
                <label htmlFor="Aadhar">Aadhar Number</label>
                <input type="text" name="aadhar_Number" />
              </div>
            </div>
            
            <div className="registration1-levels">
                <div className="field">
                 <label htmlFor="Nationality">Nationality</label>
                 <input type="text" name="nationality" />
               </div>
               <div className="field">
                 <label htmlFor="Religion">Religion</label>
                 <input type="text" name="religion" />
               </div>
               <div className="field">
                 <label htmlFor="Community">Community</label>
                 <select className='community-dropdown' name="community">
                  <option value="Select">Select</option>
                  <option value="OC">OC</option>
                  <option value="BC">BC</option>
                  <option value="MBC">MBC</option>
                  <option value="SC">SC</option>
                  <option value="DNC">DNC</option>
                  </select>
               </div>
               <div className="field">
                <label htmlFor="Caste">Caste</label>
                <input type="text" name="caste"/>
              </div>
                
             </div>
           
            <div className="registration1-levels ">
                <div className="field">
                 <label htmlFor="FatherName">Father's Name</label>
                 <input type="text" name="fathers_Name" />
               </div>
               <div className="field">
                 <label htmlFor="Occupation">Father's Occupation</label>
                 <input type="text" name="fathers_Occupation"  />
               </div>
               <div className="field">
                <label htmlFor="MotherName">Mother's Name</label>
                <input type="text" name="mothers_Name"  />
              </div>
               <div className="form-group field">
                <label htmlFor="Occupation">Mother's Occupation</label>
                <input type="text" name="mothers_Occupation"  />
              </div>
            </div>
            
            <div className="registration1-levels">
                <div className="field">
                 <label htmlFor="GuardianName">Guardian Name</label>
                 <input type="text" name="guardians_Name"/>
               </div>
               <div className="field">
                 <label htmlFor="Occupation">Guardian Occupation</label>
                 <input type="text" name="guardians_Occupation" />
               </div>
               <div className="field">
                <label htmlFor="ParentsStatus">Parents Status</label>
                <select  className='community-dropdown' name="parents_Status">
                  <option value="Both are alive">Select</option>
                  <option value="Both are alive">Both are alive</option>
                  <option value="Father alive">Father alive</option>
                  <option value="Mother alive">Mother alive</option>
                  </select>
              </div>
              <div className="form-group field">
                <label htmlFor="Income">Income</label>
                <input type="text" name="income" />
              </div>
            </div>
            
            <div className="registration1-levels">
                <div className="form-group field">
                 <label htmlFor="MaritalStatus">Marital Status</label>
                 <input type="text" name="marital_Status"  id='maritalstatus' />
               </div>
            </div>
            
             <div className="profilephoto">
                <img className="photo" src={Profile}  alt="Photopreview"/>
                <div className='getphoto'>
                    <input type="file" name="profile_Photo"/>
                    <br />
                    <br />
                    <p style={{ color: 'red' }}>File should be less than 1 Mb</p>
                    <p style={{ color: 'red' }}>File may be pdf, jpeg, or jpg</p>

                </div>  
            </div> 
            <hr id='registration-seperator'/>
            
            <div className="registration1-levels">
                <div className=" field">
                 <label htmlFor="MobileNo">Mobile Number</label>
                 <input id='mobilenumber' type="text" name="mobile_Number"  />
               </div>
              
               <div className="field mailid">
                <label htmlFor="Emailid">Email ID</label>
                <input id='mailid' type="text" name="email_id" />
              </div>
            </div>
            <div className="registration1-levels">
              <div className=" field">
                <label htmlFor="ResidentialAddress">Residential Address</label><br/>
                <textarea  name="residential_Address" cols="40" rows="6" placeholder="  Enter your address here"></textarea>
              </div>
              <div className="field">
                <label htmlFor="CommunicationAddress">Communication Address</label><br/>
                <textarea   name="communication_Address" cols="40" rows="6" placeholder="Enter your address here"></textarea>
              </div>
            </div>
            
            <div className="registration1-levels">
              <div className="field">
               <label htmlFor="Hosteller">Hosteller</label>
               <div className="radio">
               <div className="radio-spacing"><input type="radio" name="hosteller"value="Yes"/> Yes</div>
               <div className="radio-spacing"> <input type="radio" name="hosteller" value="No"/> No</div>
              </div>
             </div>
             <div className="field">
               <label htmlFor="Hostel Type">Hostel Type</label>
               <div className="radio">
                <div className="radio-spacing"><input type="radio" name="hostel_Type"value="Free"/> Free</div>
                <div className="radio-spacing"><input type="radio" name="hostel_Type" value="Paid"/> Paid</div>
               </div>
             </div>
           </div>
           
           <hr id='registration-seperator'/>
           <div className="registration1-levels">
                <div className=" field">
                 <label htmlFor="Bank name">Bank Name</label>
                 <input id='bank' type="text" name="bank_Name"  />
               </div>
              
               <div className="field ">
                <label htmlFor="ifsccode">IFSC Code</label>
                <input id='ifsc' type="text" name="ifsc_Code" />
              </div>
            </div>
            <div className="registration1-levels">
            <div className=" field">
                 <label htmlFor="MobileNo">Branch Name</label>
                 <input id='branch' type="text" name="branch_Name"  />
               </div>
              
               <div className="field ">
                <label htmlFor="Emailid">Account Number</label>
                <input id='accno' type="text" name="account_Number" />

              </div>
            </div>
          </div>

          <hr id="registration-seperator" />
          <div className="registration1-levels">
            <div className=" field">
              <label htmlFor="Bank name">Bank Name</label>
              <input id="bank" type="text" name="bank_Name" />
            </div>

            <hr id='registration-seperator'/>
           <div className="registration1-levels">
            <div className="field">
             <label  htmlFor="SSLC">SSLC %</label>
             <input type="text" name="sslc"className="" />
             
           </div>
           <div className="field">
             <label htmlFor="HSC 1st YEAR">HSC 1st YEAR %</label>
             <input type="text" name="hsc_1_Year" className=""  />
             
           </div>
           <div className="field">
             <label htmlFor="HSC 2nd YEAR">HSC 2nd YEAR %</label>
             <input type="text" name="hsc_2_Year"className="" />

           </div>
           <div className="field">
            <label htmlFor="Diploma">Diploma %</label>
            <input type="text" name="diploma"className="" />
            
          </div>
         </div>
      
         {/* <div className="registration1-levels upload-files">
            <div className="field">
          <input type="file" name="sslcfile" className="" />
            </div>
            <div className="field">
          <input type="file" name="hscIfile" className="" />
            </div>
            <div className="field">
          <input type="file" name="hscIIfile" className="" />
            </div>
            <div className="field">
          <input type="file" name="diplomafile" className="" />
            </div>
          </div> */}
          
         <div className="registration1-levels">
          <div className="field">
           <label htmlFor="EmisNumber">Emis Number</label>
           <input type="text" name="emis_Number"/>
         </div>
         <div className="field">
           <label htmlFor="First Graduate">First Graduate</label>
           <div className="radio">
           <div className="radio-spacing"><input type="radio" name="first_Graduate" value="Yes"/> Yes</div>
           <div className="radio-spacing"><input type="radio" name="first_Graduate"value="No"/> No</div>
           </div>
         </div>
         <div className="field">
           <label htmlFor="Special Category">Special Category</label>
           <input type="text" name="special_Category" />
         </div>
       </div>
       {/* <div className='registration1-levels next-button'>
       <Link to={'/register-page-academic'} className="register-page-button" >
                    <img className="icon" src={Nextwhite} alt=""/>
                    <p>Next</p>
                </Link>
       </div> */}
       <button type="submit">Submit</button>

           </form>
                  

          {/* <div className="registration1-levels upload-files">
            <div className="field">
          <input type="file" name="sslcfile" className="" />
            </div>
            <div className="field">
          <input type="file" name="hsc1file" className="" />
            </div>
            <div className="field">
          <input type="file" name="hsc2file" className="" />
            </div>
            <div className="field">
          <input type="file" name="diplomafile" className="" />
            </div>
          </div> */}

          <div className="registration1-levels">
            <div className="field">
              <label htmlFor="EmisNumber">Emis Number</label>
              <input type="text" name="emis_Number" />
            </div>
            <div className="field">
              <label htmlFor="First Graduate">First Graduate</label>
              <div className="radio">
                <div className="radio-spacing">
                  <input type="radio" name="first_Graduate" value="Yes" /> Yes
                </div>
                <div className="radio-spacing">
                  <input type="radio" name="first_Graduate" value="No" /> No
                </div>
              </div>
            </div>
            <div className="field">
              <label htmlFor="Special Category">Special Category</label>
              <input type="text" name="special_Category" />
            </div>
          </div>
          <div className="registration1-levels next-button">
            <Link
              to={"/register-page-academic"}
              className="register-page-button"
            >
              <img className="icon" src={Nextwhite} alt="" />
              <p>Next</p>
            </Link>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Registrationpage1;
