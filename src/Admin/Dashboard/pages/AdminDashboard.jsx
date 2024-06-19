import { AdminHeader } from '../../components/AdminHeader'
import { OverviewComponent } from '../components/OverviewComponent'
import { CourtRevenue } from '../components/CourtRevenue'
import { BarChart, Bar, Rectangle, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import MockReservations from '../../mocks/reserveData.json'
import GaugeChart from '../components/gaugeChart'

const data = [
  {
    month: 'january',
    sells: 64000
  },
  {
    month: 'febrero',
    sells: 6000
  },
  {
    month: 'marzo',
    sells: 7000
  },
  {
    month: 'abril',
    sells: 10000
  },
  {
    month: 'mayo',
    sells: 43000
  },
  {
    month: 'junio',
    sells: 8000
  }
]

export const AdminDashboard = () => {
  const availableCourts = 7 // Ejemplo de canchas disponibles
  const totalCourts = 10
  return (
    <section className='h-[100vh] flex flex-col'>
      <header>
      <AdminHeader title='Dashboard' />
      </header>
      <main className='w-full h-fit flex-grow flex flex-col bg-[#eef0f2] gap-4'>
          <div className="h-[17%] p-3 flex flex-col bg-white rounded-lg mx-3 mt-3 ">
            <h1 className='font-inter text-[#383E49] font-[500] text-xl'>Overview</h1>
            <div className='flex justify-between items-center flex-grow'>
             <OverviewComponent date={"Today's"} text={'Courts reserved'} />
             <OverviewComponent date={"Today's"} text={'Courts available'} />
             <OverviewComponent date={'Made today'} text={'One-time reservations'} />
             <OverviewComponent date={'Made today'} text={'Recurring Reservations'} />
            </div>

          </div>

          <div className="h-[30%] bg-white rounded-lg mx-3 flex flex-col p-3">
            <h1 className='font-inter text-[#383E49] font-[500] text-xl'>Court Revenue</h1>
            <div className='flex flex-grow justify-between items-center gap-4'>
              <CourtRevenue location={'Ciudad del río'} courtNumber={'Court #1'} price={'2.042.059 '} />
              <CourtRevenue location={'Belen'} courtNumber={'Court #2'} price={'22.042.059 '} />
              <CourtRevenue location={'Bogota'} courtNumber={'Court #1'} price={'2.042.059 '} />
              <CourtRevenue location={'Llerales'} courtNumber={'Court #2'} price={'2.042.059 '} />
            </div>
          </div>

          <div className="h-[45%] flex ">
            <div className='h-full w-full bg-white rounded-lg mx-3'>
                <div>
                <h1>booking Status</h1>
                </div>
                <ResponsiveContainer width="100%" height="100%" aspect={5} >
                  <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5
                    }}
                  >
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sells" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                  </BarChart>
              </ResponsiveContainer>
              </div>
              <div className='h-full w-1/2 flex flex-col justify-around items-center  bg-center bg-white rounded-lg mx-3'>
                <h1>booking Status</h1>
                  <GaugeChart value={availableCourts} maxValue={totalCourts} />
              </div>
            </div>
      </main>
    </section>
  )
}
