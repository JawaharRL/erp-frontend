import React from 'react';
import './Registrationpage1.css';
import Profile from '../../Assets/profile.svg'

function Registrationpage1() {
  return (
    <div>
        <div class="regbackground">
            <div class="header-fixed ">
             <div class="title">
              <h1 >ERP Registration form</h1>
            </div>
            <div class="links">
                <button class="forms">Personal Details</button>
                <button class="forms">Academic Details</button>
            </div>
            </div>
          
            <div class="container">
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
           
            <div class="container">
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
            
            <div class="container">
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
                 <input type="text" name="Community"/>
               </div>
               <div class="field">
                <label htmlFor="Caste">Caste</label>
                <input type="text" name="Caste"/>
              </div>
                
             </div>
           
            <div class="container ">
                <div class="field">
                 <label htmlFor="FatherName">Father's Name</label>
                 <input type="text" name="FatherName" />
               </div>
               <div class="field">
                 <label htmlFor="Occupation">Occupation</label>
                 <input type="text" name="Occupation"  />
               </div>
               <div class="field">
                <label htmlFor="MotherName">Mother's Name</label>
                <input type="text" name="MotherName"  />
              </div>
               <div class="form-group field">
                <label htmlFor="Occupation">Occupation</label>
                <input type="text" name="Occupation"  />
              </div>
            </div>
            
            <div class="container">
                <div class="field">
                 <label htmlFor="GuardianName">Guardian Name</label>
                 <input type="text" name="GuardianName"/>
               </div>
               <div class="field">
                 <label htmlFor="Occupation">Occupation</label>
                 <input type="text" name="Occupation" />
               </div>
               <div class="field">
                <label htmlFor="ParentsStatus">Parents Status</label>
                <input type="text" name="ParentsStatus"  />
              </div>
               <div class="field">
                <label htmlFor="Income">Income</label>
                <input type="text" name="Income"  class="field" />
              </div>
            </div>
            
            <div class="container">
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
            <hr/>
            
            <div class="container">
                <div class=" b4 field">
                 <label htmlFor="MobileNo">Mobile Number</label>
                 <input id='mobilenumber' type="text" name="MobileNo"  />
               </div>
              
               <div class="field mailid">
                <label htmlFor="Emailid">Email ID</label>
                <input id='mailid' type="text" name="Emailid" />
              </div>
            </div>
            <div class="container g1">
              <div class=" b4 field">
                <label htmlFor="ResidentialAddress">Residential Address</label><br/>
                <textarea  name="ResidentialAddress" cols="40" rows="6" placeholder="  Enter your address here"></textarea>
              </div>
              <div class="field">
                <label htmlFor="CommunicationAddress">Communication Address</label><br/>
                <textarea   name="CommunicationAddress" cols="40" rows="6" placeholder="Enter your address here"></textarea>
              </div>
            </div>
            
            <div class="container">
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
           
           <hr/>
           
           <div class="container">
            <div class="field">
             <label  htmlFor="SSLC">SSLC %</label>
             <input type="text" name="sslc"class="b2" />
             <br/><br/>
             <input type="file" name="file" class="b3" />
           </div>
           <div class="field">
             <label htmlFor="HSC 1st YEAR">HSC 1st YEAR %</label>
             <input type="text" name="HSC 1st YEAR" class="b2"  />
             <br/><br/>
             <input type="file" name="file" class="b3"/>
           </div>
           <div class="field">
             <label htmlFor="HSC 2nd YEAR">HSC 2nd YEAR %</label>
             <input type="text" name="HSC 2nd YEAR"class="b2" />
             <br/><br/>
             <input type="file" name="file" class="b3"/>
           </div>
           <div class="field">
            <label htmlFor="Diploma">Diploma %</label>
            <input type="text" name="Diploma"class="b2" />
            <br/><br/>
            <input type="file" name="file" class="b2"/>
          </div>
         </div>
      
         <div class="container">
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
       <div class="container container1">
        <button class="link1">Next</button>
       </div>
    </div>
    </div>
  )
}

export default Registrationpage1