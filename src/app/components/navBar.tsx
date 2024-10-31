
import Link from 'next/link'
import React from 'react'
import NavBarUser from './navBarUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag, faHouseChimney, faFile, faFileLines, faGear } from '@fortawesome/free-solid-svg-icons'


function navBar() {
  return (
    

    <nav className='flex flex-col nColor ms-8 me-24 ps-8 rounded-3xl  justify-between' style={{height:"800px", width:"300px"}}>
    <div className='flex flex-col '>
        <NavBarUser/>
        
      <Link href={"/"} className='pb-4 font-medium'><FontAwesomeIcon className='me-4' size='sm' icon={faHouseChimney}/>Home</Link>
      <Link href={"/recently-added"} className=' pb-4 font-medium'><FontAwesomeIcon className='me-4' size='sm' icon={faHashtag} />Recently Added</Link>
      <Link href={"/create-report"} className='pb-4 font-medium'><FontAwesomeIcon className='me-4'  icon={faFile} />Create A Report</Link>
      <Link href={"/submitted-reports"} className='pb-4 font-medium'><FontAwesomeIcon className='me-4' icon={faFileLines} />Submitted Reports</Link>

    </div>

      <div className='flex'>

      <Link href={"/login"} className='pb-8 font-medium'><FontAwesomeIcon className='me-4' icon={faGear} />Account Settings</Link>
      </div>
    </nav>
  )
}

export default navBar
