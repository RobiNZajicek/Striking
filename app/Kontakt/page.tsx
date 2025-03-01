import KontaktAbove from '@/components/Kontakt/KontaktAbove/KontaktAbove'
import KontaktForm from '@/components/Kontakt/KontaktForm/KontaktForm'

import GoogleMap from '@/components/Kontakt/KontaktMaps/GoogleMap'
import React from 'react'

const Kontakt = () => {
  return (
    <div>
      <KontaktAbove/>
      <KontaktForm/>
      <GoogleMap/>
    </div>
  )
}

export default Kontakt