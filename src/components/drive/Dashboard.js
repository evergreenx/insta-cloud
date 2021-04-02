import React from 'react'
import NavbarComponent from './Navbar'
import AddFolderButton from './AddFolderButton'
import Folder from '../drive/folder'
import {useFolder} from '../hooks/useFolder'

export default function Dashboard() {

  const {folder , childFolders} = useFolder('s0JFn4F2HKqwiWa6iypX');


  console.log(childFolders)
  return (
  
      <>


   <NavbarComponent/>

  
     


   <div className="container-fluid mt-3">

  
     
   <AddFolderButton  currentFolder = {folder}/>

 {childFolders.length  > 0 && (
   <div className="d-flex flex-wrap">
     {childFolders.map(childFolder =>(
<div key={childFolder.id}
style={{maxWidth:'250px'}}
className='p-2'>

  <Folder folder={childFolder}/>
  </div>

     ))}
     </div>
 )}


   </div>



  </>
  )
}
