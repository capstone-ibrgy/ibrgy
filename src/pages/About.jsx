import React from 'react'

function About() {
  return (
    <div>
        <div className='flex flex-col items-center h-screen justify-center font-arimo text-[#1F2F3D] m-10'>
            <div><h6>Home</h6></div>
            <div><h1>iBRGY: Barangay Management System</h1></div>
            <div>
              <p>iBRGY is a Barangay Management System, a computer-based software that streamlines the 
                  management of barangays, the smallest administrative divisions in the Philippines. 
                  For now, this system automates resident information management and certificate issuance 
                  tasks. Complaint handling, financial management, legislative tracking, and inventory 
                  management will be catered soon. The system helps maintain a comprehensive resident 
                  database and generate various certificates. Soon, it will track complaints, manage 
                  finances, monitor legislative processes, and track assets. The developers aim to also 
                  provide reporting and analytics features. The goal is to improve governance and service 
                  delivery by enhancing efficiency, transparency, and accountability at the barangay level.
              </p>
            </div>
        </div>
    </div>
  )
}

export default About