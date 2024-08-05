import React from 'react'
import ReagentFunctions from '../components/Reagent/ReagentFunctions'
import ReagentTableComponent from '../components/Reagent/ReagentTableComponent'

const ReagentTable = () => {
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