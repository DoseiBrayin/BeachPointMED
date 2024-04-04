import { CardUser } from '../components/cardUser'
import { useUser } from '../hooks/userHook'

export function UserMain() {
    const user = useUser()
    return (
        <>
            <h1 className='text-3xl font-bold underline p-4'>User Main</h1>
            <section className='grid grid-cols-2 gap-4 p-6'>
                {
                    user.map((user) => {
                        return (
                            <div key={user.name} >
                                <CardUser
                                    name={user.name}
                                    description={user.description}
                                    price={user.price}
                                />
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}