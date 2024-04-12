import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Academicform.css'
import Previouswhite from '../../Assets/Previouswhite.svg'
import Nextwhite from '../../Assets/Nextwhite.svg'
import { Link } from 'react-router-dom'
import Formtitle from '../../Components/Formtitle/Formtitle'
import Allbuttons from '../../Components/Allbuttons/Allbuttons'

function Academicform() {
  const navigate = useNavigate();

  const goToPersonalform = () => {
    navigate('/personal-form');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const url = 'http://localhost:8080/api/academics';

    const data = {
      register_No: formData.get('register_No'),
      programme: formData.get('programme'),
      discipline: formData.get('discipline'),
      admission_Number: formData.get('admission_Number'),
      academic_Year: formData.get('academic_Year'),
      semester: formData.get('semester'),
      abc_Id: formData.get('abc_Id'),
      umis_Id: formData.get('umis_Id'),
      date_Of_Admission: formData.get('date_Of_Admission'),
      course_Joined_Date: formData.get('course_Joined_Date'),
      course_Type: formData.get('course_Type'),
      regulation: formData.get('regulation'),
      fast_Track: formData.get('fast_Track'),
      cgpa:  formData.get('cgpa'),
      student_Status: formData.get('student_Status')
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
        <div class="registration-background">

            <div className='form-content'>
           <Formtitle></Formtitle>
           </div>
            <br/>
            <form id='registration-form' onSubmit={handleSubmit}>
            <div class="registrationtwo-levels">
                <div class="field">
                 <label htmlFor="RegisterNo">RegisterNo</label>
                 <input type="text" name="register_No" />
               </div>
               <div class="field">
                 <label htmlFor="Programme">Programme</label>
                 <input type="text" name="programme"  />
               </div>
               <div class="field">
                 <label htmlFor="Discipline">Discipline</label>
                 <input type="text" name="discipline" />
               </div> 
               <div class="field">
                <label htmlFor="Regulation">Regulation</label>
                <input type="text" name="regulation"/>
              </div>
             </div>
             <br/>
             <div class="registrationtwo-levels">
                <div class="field">
                 <label htmlFor="AdmissionNo">AdmissionNo</label>
                 <input type="text" name="admission_No" />
               </div>
               <div class="field">
                 <label htmlFor="Academic Year">Academic Year</label>
                 <input type="text" name="academic_Year"/>
               </div>
               <div class="field">
                 <label htmlFor="Semester">Semester</label>
                 <select className='community-dropdown' name='semester'>
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
                <input type="text" name="abc_Id" />
              </div>
             </div>
             <br/>
             <div class="registrationtwo-levels">
                <div class="field">
                 <label htmlFor="UMIS Id">UMIS Id</label>
                 <input type="text" name="umis_Id"   />
               </div>
               <div class="field">
                 <label htmlFor="Date of Admission">Date of Admission</label>
                 <input type="date" name="date_of_Admission"  />
               </div>
               <div class="field">
                 <label htmlFor="Course joined">Course joined</label>
                 <input type="date" name="course_Joined_Date"  />
               </div> 
              
              
             </div>
             <br/>
             <div class="registrationtwo-levels">
             <div class="field">
               <label htmlFor="Coursetype">Course Type</label>
               <div class="radio">
               <div class="radio-spacing"><input type="radio" name="hosteller"value="Regular"/> Regular</div>
               <div class="radio-spacing"> <input type="radio" name="hosteller" value="Lateral"/> Lateral</div>
              </div>
             </div>
              <div class="field">
               <label htmlFor="Fasttrack">Fasttrack</label>
               <div class="radio">
               <div class="radio-spacing"><input type="radio" name="fast_Track"value="Yes"/> Yes</div>
               <div class="radio-spacing"> <input type="radio" name="fast_Track" value="No"/> No</div>
              </div>
             </div>
               <div class="field" >
                 <label htmlFor="CGPA">CGPA</label>
                 <input type="text" name="cgpa" />
               </div> 
               <div class="field">
                <label htmlFor="Student status">Student status</label>
                <input type="text" name="student_Status" />
              </div>
             </div>
             <br/>
             <div className='registration1-levels next-button'>
            <button onClick={goToPersonalform} class="register-page-button">Previous</button>
            <button type="submit" class="register-page-button">Submit</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Academicform