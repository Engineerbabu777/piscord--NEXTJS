import {InitialModal} from '@/components/modals/initial-model'
import { db } from '@/lib/db'
import { initialProfile } from '@/lib/initial-profile'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

export default async function page ({}: Props) {
  const profile = await initialProfile() // FINDING USER PROFILE FROM CLERK DATA!
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id
        }
      }
    }
  }) // FINDING SERVER IF EXISTS ASSOCIATED WITH USER PROFILE!

  
  if (server) {
    return redirect(`/servers/${server.id}`)
  }

  return (
  <>
  <InitialModal /> 
  </>
)}
