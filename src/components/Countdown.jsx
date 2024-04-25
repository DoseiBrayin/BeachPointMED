import { useCountdown } from '../Hooks/useCountdown'

export const Countdown = () => {
  const { countdown, countValue } = useCountdown(5)

  return (
    <div>
        <p className={`text-[#2e2e2e] ${countValue <= 180 ? 'text-[#FF001C]' : 'text-[#2e2e2e]'}`}>{countdown}</p>
    </div>
  )
}
