import React, { useContext } from 'react'
import ReagentFunctions from '../components/Reagent/ReagentFunctions'
import ReagentTableComponent from '../components/Reagent/ReagentTableComponent'
import ReagentOperations from '../components/Reagent/ReagentOperations'
import { DataContext } from '../DataContext/DataProvider'

const ReagentTable = () => {
  const {ReagentTableRowNo,setReagentTableRowNo} = useContext(DataContext)
  console.log(ReagentTableRowNo)
  return (
    <div className='flex flex-col gap-5'>
     <div>
      <ReagentFunctions/>
     </div>
     <div>
      <ReagentTableComponent/>
     </div>
    </div>
  )
}

export default ReagentTable