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
        <div className="registration-background">
            <div className='form-content'>
           <Formtitle></Formtitle>
           </div>
            <br/>
            <div className="academic-container">
                <div className="reg-no">
                 <label htmlFor="RegisterNo">RegisterNo</label>
                 <input type="text" name="RegisterNo"/>
               </div>
               <div className="programme">
                 <label htmlFor="Programme">Programme</label>
                 <input type="text" name="Programme" />
               </div>
               <div className="discipline">
                 <label htmlFor="Discipline">Discipline</label>
                 <input type="text" name="Discipline" />
               </div> 
               <div className="aca-year">
                 <label htmlFor="Academic Year">Academic Year</label>
                 <input type="text" name="Academic Year"/>
               </div>
               
                <div className="adm-no">
                 <label htmlFor="AdmissionNo">AdmissionNo</label>
                 <input type="text" name="AdmissionNo" />
               </div>
               <div className="regulation">
                <label htmlFor="Regulation">Regulation</label>
                <input type="text" name="Regulation"/>
              </div>
              
               <div className="sem">
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
               <div className="abc-id">
                <label htmlFor="ABC Id">ABC Id</label>
                <input type="text" name="ABC Id" />
              </div>
                <div className="umis-id">
                 <label htmlFor="UMIS Id">UMIS Id</label>
                 <input type="text" name="UMIS Id"   />
               </div>
               <div className="date-of-adm">
                 <label htmlFor="Date of Admission">Date of Admission</label>
                 <input type="date" name="Date of Admission"  />
               </div>
               <div className="join-date">
                 <label htmlFor="Course joined">Course joined</label>
                 <input type="date" name="Course joined"  />
               </div> 

             <div className="course-type">
               <label htmlFor="Coursetype">Course Type</label>
               <div className="radio">
               <div className="radio-spacing"><input type="radio" name="Hosteller"value="Regular"/> Regular</div>
               <div className="radio-spacing"> <input type="radio" name="Hosteller" value="Lateral"/> Lateral</div>
              </div>
             </div>
              <div className="fasttrack">
               <label htmlFor="Fasttrack">Fasttrack</label>
               <div className="radio">
               <div className="radio-spacing"><input type="radio" name="Hosteller"value="Yes"/> Yes</div>
               <div className="radio-spacing"> <input type="radio" name="Hosteller" value="No"/> No</div>
              </div>
             </div>
               <div className="cgpa" >
                 <label htmlFor="CGPA">CGPA</label>
                 <input type="text" name="CGPA" />
               </div> 
               <div className="student-status">
                <label htmlFor="Student status">Student status</label>
                <input type="text" name="Student status" />
              </div>
             
    </div>
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