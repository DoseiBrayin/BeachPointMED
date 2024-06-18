import React from 'react'
import { AdminHeader } from '../../components/AdminHeader'
import { Filters } from '../components/Filters'
import { UsersTable } from '../components/UsersTable'

const users = [
  {
    cedula: '10000002',
    phone_number: '321-654-0987',
    email: 'jane.doe@example.com',
    name: 'Jane Doe',
    password: 'securepass2',
    is_employee: false,
    type_rol: 'Usuario'
  },
  {
    cedula: '10000003',
    phone_number: '234-567-8901',
    email: 'john.smith@example.com',
    name: 'John Smith',
    password: 'mypassword3',
    is_employee: true,
    type_rol: 'Empleado'
  },
  {
    cedula: '10000004',
    phone_number: '456-789-0123',
    email: 'emily.johnson@example.com',
    name: 'Emily Johnson',
    password: 'password4',
    is_employee: true,
    type_rol: 'Admin'
  },
  {
    cedula: '10000005',
    phone_number: '567-890-1234',
    email: 'michael.brown@example.com',
    name: 'Michael Brown',
    password: 'brownmike5',
    is_employee: false,
    type_rol: 'Usuario'
  },
  {
    cedula: '10000006',
    phone_number: '678-901-2345',
    email: 'sarah.davis@example.com',
    name: 'Sarah Davis',
    password: 'davis_sarah6',
    is_employee: true,
    type_rol: 'Temporal'
  },
  {
    cedula: '10000007',
    phone_number: '789-012-3456',
    email: 'david.wilson@example.com',
    name: 'David Wilson',
    password: 'wilson7',
    is_employee: true,
    type_rol: 'Admin'
  },
  {
    cedula: '10000008',
    phone_number: '890-123-4567',
    email: 'laura.moore@example.com',
    name: 'Laura Moore',
    password: 'moorelaura8',
    is_employee: false,
    type_rol: 'Usuario'
  },
  {
    cedula: '10000009',
    phone_number: '901-234-5678',
    email: 'daniel.taylor@example.com',
    name: 'Daniel Taylor',
    password: 'taylor9',
    is_employee: true,
    type_rol: 'Empleado'
  },
  {
    cedula: '10000010',
    phone_number: '012-345-6789',
    email: 'jessica.lee@example.com',
    name: 'Jessica Lee',
    password: 'jessicalee10',
    is_employee: true,
    type_rol: 'Temporal'
  },
  {
    cedula: '10000011',
    phone_number: '123-456-7891',
    email: 'robert.clark@example.com',
    name: 'Robert Clark',
    password: 'clarkrobert11',
    is_employee: false,
    type_rol: 'Usuario'
  },
  {
    cedula: '10000012',
    phone_number: '234-567-8902',
    email: 'patricia.lewis@example.com',
    name: 'Patricia Lewis',
    password: 'lewis12',
    is_employee: true,
    type_rol: 'Empleado'
  },
  {
    cedula: '10000013',
    phone_number: '345-678-9012',
    email: 'christopher.walker@example.com',
    name: 'Christopher Walker',
    password: 'walkerchris13',
    is_employee: true,
    type_rol: 'Admin'
  },
  {
    cedula: '10000014',
    phone_number: '456-789-0124',
    email: 'amanda.hall@example.com',
    name: 'Amanda Hall',
    password: 'hallamanda14',
    is_employee: false,
    type_rol: 'Usuario'
  },
  {
    cedula: '10000015',
    phone_number: '567-890-1235',
    email: 'joshua.young@example.com',
    name: 'Joshua Young',
    password: 'young15',
    is_employee: true,
    type_rol: 'Empleado'
  },
  {
    cedula: '10000016',
    phone_number: '678-901-2346',
    email: 'melissa.hernandez@example.com',
    name: 'Melissa Hernandez',
    password: 'hernandezmel16',
    is_employee: true,
    type_rol: 'Temporal'
  }, {
    cedula: '10000017',
    phone_number: '345-678-9013',
    email: 'oliver.martinez@example.com',
    name: 'Oliver Martinez',
    password: 'martinezoliver17',
    is_employee: true,
    type_rol: 'Empleado'
  },
  {
    cedula: '10000018',
    phone_number: '456-789-0125',
    email: 'chloe.king@example.com',
    name: 'Chloe King',
    password: 'kingchloe18',
    is_employee: false,
    type_rol: 'Usuario'
  },
  {
    cedula: '10000019',
    phone_number: '567-890-1236',
    email: 'liam.wright@example.com',
    name: 'Liam Wright',
    password: 'wrightliam19',
    is_employee: true,
    type_rol: 'Admin'
  },
  {
    cedula: '10000020',
    phone_number: '678-901-2347',
    email: 'mia.green@example.com',
    name: 'Mia Green',
    password: 'greenmia20',
    is_employee: true,
    type_rol: 'Temporal'
  },
  {
    cedula: '10000021',
    phone_number: '789-012-3457',
    email: 'noah.carter@example.com',
    name: 'Noah Carter',
    password: 'carternoa21',
    is_employee: false,
    type_rol: 'Usuario'
  },
  {
    cedula: '10000022',
    phone_number: '890-123-4568',
    email: 'ava.collins@example.com',
    name: 'Ava Collins',
    password: 'collinsava22',
    is_employee: true,
    type_rol: 'Empleado'
  },
  {
    cedula: '10000023',
    phone_number: '901-234-5679',
    email: 'jackson.morris@example.com',
    name: 'Jackson Morris',
    password: 'morrisjackson23',
    is_employee: true,
    type_rol: 'Admin'
  },
  {
    cedula: '10000024',
    phone_number: '012-345-6780',
    email: 'sophia.lee@example.com',
    name: 'Sophia Lee',
    password: 'leesophia24',
    is_employee: false,
    type_rol: 'Usuario'
  },
  {
    cedula: '10000025',
    phone_number: '123-456-7892',
    email: 'aiden.turner@example.com',
    name: 'Aiden Turner',
    password: 'turneraiden25',
    is_employee: true,
    type_rol: 'Temporal'
  },
  {
    cedula: '10000026',
    phone_number: '234-567-8903',
    email: 'isabella.baker@example.com',
    name: 'Isabella Baker',
    password: 'bakerisabella26',
    is_employee: false,
    type_rol: 'Usuario'
  },
  {
    cedula: '10000027',
    phone_number: '345-678-9014',
    email: 'james.jenkins@example.com',
    name: 'James Jenkins',
    password: 'jenkinsjames27',
    is_employee: true,
    type_rol: 'Empleado'
  },
  {
    cedula: '10000028',
    phone_number: '456-789-0126',
    email: 'emma.rogers@example.com',
    name: 'Emma Rogers',
    password: 'rogersemma28',
    is_employee: true,
    type_rol: 'Admin'
  },
  {
    cedula: '10000029',
    phone_number: '567-890-1237',
    email: 'lucas.harris@example.com',
    name: 'Lucas Harris',
    password: 'harris29',
    is_employee: true,
    type_rol: 'Temporal'
  },
  {
    cedula: '10000030',
    phone_number: '678-901-2348',
    email: 'sophia.walker@example.com',
    name: 'Sophia Walker',
    password: 'walker30',
    is_employee: false,
    type_rol: 'Usuario'
  },
  {
    cedula: '10000031',
    phone_number: '789-012-3458',
    email: 'mason.anderson@example.com',
    name: 'Mason Anderson',
    password: 'anderson31',
    is_employee: true,
    type_rol: 'Empleado'
  },
  {
    cedula: '10000032',
    phone_number: '890-123-4569',
    email: 'ella.thompson@example.com',
    name: 'Ella Thompson',
    password: 'thompson32',
    is_employee: true,
    type_rol: 'Admin'
  },
  {
    cedula: '10000033',
    phone_number: '901-234-5680',
    email: 'daniel.johnson@example.com',
    name: 'Daniel Johnson',
    password: 'johnsondaniel33',
    is_employee: true,
    type_rol: 'Temporal'
  },
  {
    cedula: '10000034',
    phone_number: '012-345-6791',
    email: 'ava.mitchell@example.com',
    name: 'Ava Mitchell',
    password: 'mitchellava34',
    is_employee: false,
    type_rol: 'Usuario'
  },
  {
    cedula: '10000035',
    phone_number: '123-456-7802',
    email: 'benjamin.taylor@example.com',
    name: 'Benjamin Taylor',
    password: 'taylorbenjamin35',
    is_employee: true,
    type_rol: 'Empleado'
  },
  {
    cedula: '10000036',
    phone_number: '234-567-8913',
    email: 'mia.clark@example.com',
    name: 'Mia Clark',
    password: 'clarkmia36',
    is_employee: true,
    type_rol: 'Admin'
  },
  {
    cedula: '10000037',
    phone_number: '345-678-9024',
    email: 'lucas.lewis@example.com',
    name: 'Lucas Lewis',
    password: 'lewislucas37',
    is_employee: true,
    type_rol: 'Temporal'
  },
  {
    cedula: '10000038',
    phone_number: '456-789-0135',
    email: 'sophia.robinson@example.com',
    name: 'Sophia Robinson',
    password: 'robinsonsophia38',
    is_employee: false,
    type_rol: 'Usuario'
  },
  {
    cedula: '10000039',
    phone_number: '567-890-1246',
    email: 'oliver.lee@example.com',
    name: 'Oliver Lee',
    password: 'leeoliver39',
    is_employee: true,
    type_rol: 'Empleado'
  },
  {
    cedula: '10000040',
    phone_number: '678-901-2357',
    email: 'emma.white@example.com',
    name: 'Emma White',
    password: 'whiteemma40',
    is_employee: true,
    type_rol: 'Admin'
  },
  {
    cedula: '10000041',
    phone_number: '789-012-3468',
    email: 'jackson.hall@example.com',
    name: 'Jackson Hall',
    password: 'halljackson41',
    is_employee: true,
    type_rol: 'Temporal'
  },
  {
    cedula: '10000042',
    phone_number: '890-123-4579',
    email: 'isabella.young@example.com',
    name: 'Isabella Young',
    password: 'youngisabella42',
    is_employee: false,
    type_rol: 'Usuario'
  },
  {
    cedula: '10000043',
    phone_number: '901-234-5681',
    email: 'liam.allen@example.com',
    name: 'Liam Allen',
    password: 'allenliam43',
    is_employee: true,
    type_rol: 'Empleado'
  },
  {
    cedula: '10000044',
    phone_number: '012-345-6792',
    email: 'ava.king@example.com',
    name: 'Ava King',
    password: 'kingava44',
    is_employee: true,
    type_rol: 'Admin'
  },
  {
    cedula: '10000045',
    phone_number: '123-456-7803',
    email: 'benjamin.scott@example.com',
    name: 'Benjamin Scott',
    password: 'scottbenjamin45',
    is_employee: true,
    type_rol: 'Temporal'
  },
  {
    cedula: '10000046',
    phone_number: '234-567-8914',
    email: 'mia.campbell@example.com',
    name: 'Mia Campbell',
    password: 'campbellmia46',
    is_employee: false,
    type_rol: 'Usuario'
  },
  {
    cedula: '10000047',
    phone_number: '345-678-9025',
    email: 'lucas.edwards@example.com',
    name: 'Lucas Edwards',
    password: 'edwardslucas47',
    is_employee: true,
    type_rol: 'Empleado'
  },
  {
    cedula: '10000048',
    phone_number: '456-789-0136',
    email: 'sophia.collins@example.com',
    name: 'Sophia Collins',
    password: 'collinssophia48',
    is_employee: true,
    type_rol: 'Admin'
  },
  {
    cedula: '10000049',
    phone_number: '567-890-1247',
    email: 'oliver.stewart@example.com',
    name: 'Oliver Stewart',
    password: 'stewartoliver49',
    is_employee: true,
    type_rol: 'Temporal'
  },
  {
    cedula: '10000050',
    phone_number: '678-901-2358',
    email: 'emma.sanchez@example.com',
    name: 'Emma Sanchez',
    password: 'sanchezemma50',
    is_employee: false,
    type_rol: 'Usuario'
  }
]

export const AdminUsers = () => {
  return (
    <div>
      <AdminHeader />
      <div className='flex px-5 mt-10'>
        <div className='flex w-full justify-between'>
        <Filters />
          <div className='flex gap-3'>
          <button className='bg-[#1570EF] text-white text-[14px] px-6 py-2 rounded-lg'>Create User</button>
          <div className='border-2 flex items-center rounded-md px-2 gap-1'>
            <img src="/Search.svg" className='w-[24p] h-[24px]' alt="" />
            <input className='focus:outline-none' type="text" placeholder='Search by name'/>
          </div>
          </div>
        </div>
        {/* Aquí renderizas tu tabla de usuarios */}
      </div>
        <UsersTable users={users} itemsPerPage={10} />
    </div>
  )
}
