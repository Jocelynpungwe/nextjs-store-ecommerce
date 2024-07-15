import Link from 'next/link'
import { Button } from '../ui/button'
import { LuArmchair } from 'react-icons/lu'

const Logo = () => {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <LuArmchair className="w-6 h-6" />
      </Link>
    </Button>
  )
}

export default Logo
