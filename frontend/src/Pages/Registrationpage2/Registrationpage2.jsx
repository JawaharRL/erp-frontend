import React from 'react'
import './Registrationpage2.css'

function Registrationpage2() {
  return (
    <div>

           
            <div class="header-fixed ">
                <div class="title">
                 <h1 >ERP Registration form</h1>
                </div>
                <div class="container">
                  <button class="field"><a href="erp.html" class="link1">Personal Details</a> </button>
                  <button class="field"><a href="#" class="link1">Academic Details</a></button>
                </div>
            </div>
            <br/>
            <div class="container">
                <div class="field">
                 <label htmlFor="RegisterNo"><strong>RegisterNo</strong></label>
                 <input type="text" name="RegisterNo" />
               </div>
               <div class="field">
                 <label htmlFor="Programme"><strong>Programme</strong></label>
                 <input type="text" name="Programme"  />
               </div>
               <div class="field">
                 <label htmlFor="Discipline"><strong>Discipline</strong></label>
                 <input type="text" name="Discipline" />
               </div> 
               <div class="field">
                <label htmlFor="Regulation"><strong>Regulation</strong></label>
                <input type="text" name="Regulation"/>
              </div>
             </div>
             <br/>
             <div class="container">
                <div class="field">
                 <label htmlFor="AdmissionNo"><strong>AdmissionNo</strong></label>
                 <input type="text" name="AdmissionNo" />
               </div>
               <div class="field">
                 <label htmlFor="Academic Year"><strong>Academic Year</strong></label>
                 <input type="text" name="Academic Year"/>
               </div>
               <div class="field">
                 <label htmlFor="Semester"><strong>Semester</strong></label>
                 <input type="text" name="Semester"/>
               </div> 
               <div class="field">
                <label htmlFor="ABC Id"><strong>ABC Id</strong></label>
                <input type="text" name="ABC Id" />
              </div>
             </div>
             <br/>
             <div class="container">
                <div class="field">
                 <label htmlFor="UMIS Id"><strong>UMIS Id</strong></label>
                 <input type="text" name="UMIS Id"   />
               </div>
               <div class="field">
                 <label htmlFor="Date of Admission"><strong>Date of Admission</strong></label>
                 <input type="date" name="Date of Admission"  />
               </div>
               <div class="field">
                 <label htmlFor="Course joined"><strong>Course joined</strong></label>
                 <input type="date" name="Course joined"  />
               </div> 
               <div class="field">
                <label htmlFor="Course Type"><strong>Course Type</strong></label>
                <input type="radio" name="Fastrack" value="Regular"/>Regular
                <input type="radio" name="Fastrack" value="Lateral"/>Lateral
              </div>
              
             </div>
             <br/>
             <div class="container">
                <div class="field">
                    <label htmlFor="Fastrack"><strong>Fastrack</strong></label>
                    <input type="radio" name="Fastrack" value ="Yes"/>Yes
                    <input type="radio" name="Fastrack" value="No"/>No
                  </div> 
               <div class="field" >
                 <label htmlFor="CGPA"><strong>CGPA</strong></label>
                 <input type="text" name="CGPA" />
               </div> 
               <div class="field">
                <label htmlFor="Student status"><strong>Student status</strong></label>
                <input type="text" name="Student status" />
              </div>
             </div>
             <br/>
             <div class="container container1">
                <button>Previous</button>
                <button>Save</button>
               </div>
    </div>
  )
}

export default Registrationpage2