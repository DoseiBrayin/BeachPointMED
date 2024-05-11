import { useCountdown } from '../Hooks/useCountdown'

export const Countdown = () => {
  const { countdown, countValue } = useCountdown()

  return (
    <p className={`text-[#2e2e2e] text-[30px] font-bold ${countValue <= 180 ? 'text-[#FF001C]' : 'text-[#2e2e2e]'}`}>{countdown}</p>
  )
}
