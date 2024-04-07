import fakeData from "../MOCK_DATA.json";

export const Main = () => {

  return (
    <section className="flex justify-center items-center">
      <div className="w-[80%]">
        <header>
          <div className="flex w-full justify-between mb-5">
            <h2 className="text-3xl font-semibold">Progress</h2>
            <h3 className="text-2xl font-semibold">4:59</h3>
          </div>
          <img
            className="w-full"
            src="OneTimeCourReservation/progress.svg"
            alt=""
          />
        </header>
        <main className="flex flex-col items-center">
          <h1 className="text-xl font-inter font-bold mt-5">Select Playing Time</h1>
          <table className="m-5 ">
            <thead >
              <tr>
                <th>Time</th>
                <th>Cost</th>
                <th>Court #1</th>
                <th>Court #2</th>
              </tr>
            </thead>
            <tbody >
              {fakeData.map((row) => (
                <tr>
                  <td className="text-sm">{row.time}</td>
                  <td className="text-sm">{`${row.price}COP`}</td>
                  <td className="text-sm">{row.court}</td>
                  <td className="text-sm">{row.court2}</td>
                </tr>
              ))}
            </tbody>
            <tfoot></tfoot>
          </table>
          <div></div>
        </main>
      </div>
    </section>
  );
};
