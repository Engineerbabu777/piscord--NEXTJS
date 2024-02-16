import { currentUser, redirectToSignIn } from '@clerk/nextjs'
import { db } from './db'

export const initialProfile = async () => {
  // GETTING USER OBJECT FROM THE (currentUser method) from clerk-package!
  const user = await currentUser()

  // IF USER NOT EXISTS REDIRECT USER TO SIGN-IN PAGE!
  if (!user) {
    return redirectToSignIn()
  }

  // FINDING FOR THE LOGGED USER PROFILE!
  const profile = await db.profile.findUnique({
    where: {
      userId: user.id
    }
  })

  // IF USER PROFILE EXISTS!
  if (profile) {
    return profile
  }

  // IF USER PROFILE NOT EXISTS CREATE A NEW PROFILE!
  const newProfile = await db.profile.create({
    data: {
      userId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress
    }
  })
  return newProfile
}
