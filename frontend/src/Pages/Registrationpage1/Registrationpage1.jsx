import React from 'react';
import './Registrationpage1.css';
import Profile from '../../Assets/profile.svg'
import Nextwhite from '../../Assets/Nextwhite.svg'
import { Link } from 'react-router-dom';
import Formtitle from '../../Components/Formtitle/Formtitle';

function Registrationpage1() {
  return (
    <div>
        <div class="registration-background">
            {/* <div class="registration-header ">
             <div class="title">
              <h1 >ERP Registration form</h1>
            </div>
            <div class="links">
                <button class="forms">Personal Details</button>
                <button class="forms">Academic Details</button>
            </div>
            </div> */}
           <div className='form-content'>
           <Formtitle></Formtitle>
           </div>
         
            <div class="registration1-levels">
               <div class="field">
                <label htmlFor="Name">First Name</label>
                <input type="text" name="Name" />
               
              </div>
              <div class="field">
                <label htmlFor="Name" >Last Name</label>
                <input type="text" name="Name"   />
               
              </div>
              <div class="field">
                <label htmlFor="DateOfBirth" >Date of Birth</label><br/>
                <input type="date" name="DateOfBirth"/>
              </div>
            </div>
           
            <div class="registration1-levels">
               <div class="field">
                <label htmlFor="Gender">Gender</label><br/>
               <div class="radio" >
                <div class="radio-spacing"><input type="radio" name="Gender" value="Male"/> Male</div>
                <div class="radio-spacing"><input type="radio" name="Gender" value="Female"/> Female</div>
                <div class="radio-spacing"><input type="radio" name="Gender" value="Others"/> Others</div>
              </div>
                
                

              </div>
              <div class="field">
                <label htmlFor="Aadhar">Aadhar Number</label>
                <input type="text" name="Aadhar" />
              </div>
            </div>
            
            <div class="registration1-levels">
                <div class="field">
                 <label htmlFor="Nationality">Nationality</label>
                 <input type="text" name="Nationality" />
               </div>
               <div class="field">
                 <label htmlFor="Religion">Religion</label>
                 <input type="text" name="Religion" />
               </div>
               <div class="field">
                 <label htmlFor="Community">Community</label>
                 <select name="Community">
                  <option value="OC">OC</option>
                  <option value="BC">BC</option>
                  <option value="MBC">MBC</option>
                  <option value="SC">SC</option>
                  <option value="DNC">DNC</option>
                  </select>
               </div>
               <div class="field">
                <label htmlFor="Caste">Caste</label>
                <input type="text" name="Caste"/>
              </div>
                
             </div>
           
            <div class="registration1-levels ">
                <div class="field">
                 <label htmlFor="FatherName">Father's Name</label>
                 <input type="text" name="FatherName" />
               </div>
               <div class="field">
                 <label htmlFor="Occupation">Father's Occupation</label>
                 <input type="text" name="Occupation"  />
               </div>
               <div class="field">
                <label htmlFor="MotherName">Mother's Name</label>
                <input type="text" name="MotherName"  />
              </div>
               <div class="form-group field">
                <label htmlFor="Occupation">Mother's Occupation</label>
                <input type="text" name="Occupation"  />
              </div>
            </div>
            
            <div class="registration1-levels">
                <div class="field">
                 <label htmlFor="GuardianName">Guardian Name</label>
                 <input type="text" name="GuardianName"/>
               </div>
               <div class="field">
                 <label htmlFor="Occupation">Guardian Occupation</label>
                 <input type="text" name="Occupation" />
               </div>
               <div class="field">
                <label htmlFor="ParentsStatus">Parents Status</label>
                <select name="ParentsStatus">
                  <option value="Both are alive">Both are alive</option>
                  <option value="Father alive">Father alive</option>
                  <option value="Mother alive">Mother alive</option>
                  </select>
              </div>
               <div class="field">
                <label htmlFor="Income">Income</label>
                <input type="text" name="Income"  class="field" />
              </div>
            </div>
            
            <div class="registration1-levels">
                <div class="form-group field">
                 <label htmlFor="MaritalStatus">Marital Status</label>
                 <input type="text" name="Marital Staus"  id='maritalstatus' />
               </div>
            </div>
            
            <div class="profilephoto">
                <img class="photo" src={Profile} alt="Photo"/>
                <div className='getphoto'>
                    <input type="file" name="file"/>
                    <br />
                    <p style={{ color: 'red' }}>File should be less than 1 Mb</p>
                    <p style={{ color: 'red' }}>File may be pdf, jpeg, or jpg</p>

                </div>  
            </div>
            <hr id='registration-seperator'/>
            
            <div class="registration1-levels">
                <div class=" field">
                 <label htmlFor="MobileNo">Mobile Number</label>
                 <input id='mobilenumber' type="text" name="MobileNo"  />
               </div>
              
               <div class="field mailid">
                <label htmlFor="Emailid">Email ID</label>
                <input id='mailid' type="text" name="Emailid" />
              </div>
            </div>
            <div class="registration1-levels">
              <div class=" field">
                <label htmlFor="ResidentialAddress">Residential Address</label><br/>
                <textarea  name="ResidentialAddress" cols="40" rows="6" placeholder="  Enter your address here"></textarea>
              </div>
              <div class="field">
                <label htmlFor="CommunicationAddress">Communication Address</label><br/>
                <textarea   name="CommunicationAddress" cols="40" rows="6" placeholder="Enter your address here"></textarea>
              </div>
            </div>
            
            <div class="registration1-levels">
              <div class="field">
               <label htmlFor="Hosteller">Hosteller</label>
               <div class="radio">
               <div class="radio-spacing"><input type="radio" name="Hosteller"value="Yes"/> Yes</div>
               <div class="radio-spacing"> <input type="radio" name="Hosteller" value="No"/> No</div>
              </div>
             </div>
             <div class="field">
               <label htmlFor="Hostel Type">Hostel Type</label>
               <div class="radio">
                <div class="radio-spacing"><input type="radio" name="Hostel Type"value="Free"/> Free</div>
                <div class="radio-spacing"><input type="radio" name="Hostel Type" value="Paid"/> Paid</div>
               </div>
             </div>
           </div>
           
           <hr id='registration-seperator'/>
           <div class="registration1-levels">
                <div class=" field">
                 <label htmlFor="Bank name">Bank Name</label>
                 <input id='bank' type="text" name="Bank Name"  />
               </div>
              
               <div class="field ">
                <label htmlFor="ifsccode">IFSC Code</label>
                <input id='ifsc' type="text" name="IFSC Code" />
              </div>
            </div>
            <div class="registration1-levels">
            <div class=" field">
                 <label htmlFor="MobileNo">Branch Name</label>
                 <input id='branch' type="text" name="Branch Name"  />
               </div>
              
               <div class="field ">
                <label htmlFor="Emailid">Account Number</label>
                <input id='accno' type="text" name="Account Number" />
              </div>
            </div>

            <hr id='registration-seperator'/>
           <div class="registration1-levels">
            <div class="field">
             <label  htmlFor="SSLC">SSLC %</label>
             <input type="text" name="sslc"class="" />
             
             {/* <br/>
             <input type="file" name="file" class="" /> */}
           </div>
           <div class="field">
             <label htmlFor="HSC 1st YEAR">HSC 1st YEAR %</label>
             <input type="text" name="HSC 1st YEAR" class=""  />
             {/* <br/>
             <input type="file" name="file" class=""/> */}
           </div>
           <div class="field">
             <label htmlFor="HSC 2nd YEAR">HSC 2nd YEAR %</label>
             <input type="text" name="HSC 2nd YEAR"class="" />
             {/* <br/>
             <input type="file" name="file" class=""/> */}
           </div>
           <div class="field">
            <label htmlFor="Diploma">Diploma %</label>
            <input type="text" name="Diploma"class="" />
            {/* <br/>
            <input type="file" name="file" class=""/> */}
          </div>
         </div>
      
         <div class="registration1-levels upload-files">
            <div class="field">
          <input type="file" name="file" class="" />
            </div>
            <div class="field">
          <input type="file" name="file" class="" />
            </div>
            <div class="field">
          <input type="file" name="file" class="" />
            </div>
            <div class="field">
          <input type="file" name="file" class="" />
            </div>
          </div>
          
         <div class="registration1-levels">
          <div class="field">
           <label htmlFor="EmisNumber">Emis Number</label>
           <input type="text" name="EmisNumber"/>
         </div>
         <div class="field">
           <label htmlFor="First Graduate">First Graduate</label>
           <div class="radio">
           <div class="radio-spacing"><input type="radio" name="First Graduate" value="Yes"/> Yes</div>
           <div class="radio-spacing"><input type="radio" name="First Graduate"value="No"/> No</div>
           </div>
         </div>
         <div class="field">
           <label htmlFor="Special Category">Special Category</label>
           <input type="text" name="Special Category" />
         </div>
       </div>
       <div className='registration1-levels next-button'>
       <Link to={'/register-page-academic'} class="register-page-button" >
                    <img class="icon" src={Nextwhite} alt=""/>
                    <p>Next</p>
                </Link>
       </div>
       

    </div>
    
    </div>
  )
}

export default Registrationpage1