
import { Auth } from '../components/Auth'
import Quote from '../components/Quote'

export default function Signup() {
  return (
    <div className='grid grid-cols-2'>
        <div>
            <Auth />
        </div>
        <div className='invisible lg:visible'>
            <Quote />
        </div>
    </div>
  )
}