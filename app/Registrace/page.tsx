'use client'
import RegistrationForm from '@/components/Registrace/RegistraceForm'
import React from 'react'
import { Suspense } from "react";
const Registrace = () => {
  return (
    <div>
         <Suspense fallback={<div>Loading...</div>}>
      <RegistrationForm />
    </Suspense>
    </div>
  )
}

export default Registrace
