import React from 'react'
import './Academicform.css'
import Previouswhite from '../../Assets/Previouswhite.svg'
import Nextwhite from '../../Assets/Nextwhite.svg'
import { Link } from 'react-router-dom'
import Formtitle from '../../Components/Formtitle/Formtitle'
import Allbuttons from '../../Components/Allbuttons/Allbuttons'

function Academicform() {
  return (
    <div>
        <div class="registration-background">

            <div className='form-content'>
           <Formtitle></Formtitle>
           </div>
            <br/>
            <div class="registrationtwo-levels">
                <div class="field">
                 <label htmlFor="RegisterNo">RegisterNo</label>
                 <input type="text" name="RegisterNo" />
               </div>
               <div class="field">
                 <label htmlFor="Programme">Programme</label>
                 <input type="text" name="Programme"  />
               </div>
               <div class="field">
                 <label htmlFor="Discipline">Discipline</label>
                 <input type="text" name="Discipline" />
               </div> 
               <div class="field">
                <label htmlFor="Regulation">Regulation</label>
                <input type="text" name="Regulation"/>
              </div>
             </div>
             <br/>
             <div class="registrationtwo-levels">
                <div class="field">
                 <label htmlFor="AdmissionNo">AdmissionNo</label>
                 <input type="text" name="AdmissionNo" />
               </div>
               <div class="field">
                 <label htmlFor="Academic Year">Academic Year</label>
                 <input type="text" name="Academic Year"/>
               </div>
               <div class="field">
                 <label htmlFor="Semester">Semester</label>
                 <select className='community-dropdown'>
                  <option>Select</option>
                  <option value="I">I</option>
                  <option value="II">II</option>
                  <option value="III">III</option>
                  <option value="IV">IV</option>
                  <option value="V">V</option>
                  <option value="VI">VI</option>
                  <option value="VII">VII</option>
                  <option value="VIII">VIII</option>
                 </select>
               </div> 
               <div class="field">
                <label htmlFor="ABC Id">ABC Id</label>
                <input type="text" name="ABC Id" />
              </div>
             </div>
             <br/>
             <div class="registrationtwo-levels">
                <div class="field">
                 <label htmlFor="UMIS Id">UMIS Id</label>
                 <input type="text" name="UMIS Id"   />
               </div>
               <div class="field">
                 <label htmlFor="Date of Admission">Date of Admission</label>
                 <input type="date" name="Date of Admission"  />
               </div>
               <div class="field">
                 <label htmlFor="Course joined">Course joined</label>
                 <input type="date" name="Course joined"  />
               </div> 
              
              
             </div>
             <br/>
             <div class="registrationtwo-levels">
             <div class="field">
               <label htmlFor="Coursetype">Course Type</label>
               <div class="radio">
               <div class="radio-spacing"><input type="radio" name="Hosteller"value="Regular"/> Regular</div>
               <div class="radio-spacing"> <input type="radio" name="Hosteller" value="Lateral"/> Lateral</div>
              </div>
             </div>
              <div class="field">
               <label htmlFor="Fasttrack">Fasttrack</label>
               <div class="radio">
               <div class="radio-spacing"><input type="radio" name="Hosteller"value="Yes"/> Yes</div>
               <div class="radio-spacing"> <input type="radio" name="Hosteller" value="No"/> No</div>
              </div>
             </div>
               <div class="field" >
                 <label htmlFor="CGPA">CGPA</label>
                 <input type="text" name="CGPA" />
               </div> 
               <div class="field">
                <label htmlFor="Student status">Student status</label>
                <input type="text" name="Student status" />
              </div>
             </div>
             <br/>
             <div className='academic-buttons'>
                <Link to={'/register-page-personal'} >
                    <Allbuttons value="Previous" image={Previouswhite}/>
                </Link>
                <Link to={'#'}>
                <Allbuttons value="Submit" image={Nextwhite} />
                </Link>
             </div>
    </div>

    </div>
  )
}

export default Academicform