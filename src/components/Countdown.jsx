import { useCountdown } from '../Hooks/useCountdown'

export const Countdown = () => {
  const { countdown, countValue, countVisible } = useCountdown(600)

  return (
    <div>
        <p className={`text-[#2e2e2e] ${countVisible ? '' : 'hidden'} ${countValue <= 180 ? 'text-[#FF001C]' : 'text-[#2e2e2e]'}`}>{countdown}</p>
    </div>
  )
}
