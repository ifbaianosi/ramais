
interface Sumary {
    ramaisCount: number,
    departmentsCount: number,
    employeesCount: number,
}

interface Props {
    sumary: Sumary
}

export function Summary({sumary}: Props) {
    const { ramaisCount, departmentsCount, employeesCount } = sumary

    return (
        <div className='hidden sm:block container px-6'>

          <div className='flex gap-5 flex-wrap'>
            <div className='flex-1 pt-4 px-5 pb-5 bg-white rounded-lg shadow'>
              <strong className='text-3xl font-semibold text-primary-500'>{ramaisCount}</strong>
              <p className='mt-3 text-lg font-medium text-gray-800'>Ramais</p>
            </div>

            
            <div className='flex-1 pt-4 px-5 pb-5 bg-white rounded-lg shadow'>
              <strong className='text-3xl font-semibold text-primary-500'>{departmentsCount}</strong>
              <p className='mt-3 text-lg font-medium text-gray-800'>Setores</p>
            </div>

            
            <div className='flex-1 pt-4 px-5 pb-5 bg-white rounded-lg shadow'>
              <strong className='text-3xl font-semibold text-primary-500'>{employeesCount}</strong>
              <p className='mt-3 text-lg font-medium text-gray-800'>Servidores</p>
            </div>
          </div>

        </div>
    )
}