import { useCountdownContext } from '../context/CountdownContext'

export const Countdown = () => {
  const { countdown, countValue } = useCountdownContext()

  return (
    <div>
        <p className={`text-[#2e2e2e] ${countValue <= 180 ? 'text-[#FF001C]' : 'text-[#2e2e2e]'}`}>{countdown}</p>
    </div>
  )
}
