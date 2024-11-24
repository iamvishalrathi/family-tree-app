import { SignIn } from '@clerk/nextjs'

const Page = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full glassmorphism-auth">
      <SignIn/>
    </div>
  )
}

export default Page