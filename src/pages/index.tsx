import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { FiFrown } from "react-icons/fi";

import { api } from '../lib/api'

interface Employee {
  id: string;
  name: string;
}

interface Departament {
  id: string;
  name: string;
  initials: string;
  employees: Employee[];
  ramais: { ramal: {numero: string }}[];
}

interface Ramall {
  id: string;
  numero: number
}

interface RamalResponse {
  id: string;
  ramal: Ramall;
  departament: Departament;
}

interface Sumary {
  ramaisCount: number,
  departmentsCount: number,
  employeesCount: number,
}

interface HomeProps {
  ramaisCount: number;
  departmentsCount: number,
  employeesCount: number,
  ramais: RamalResponse[]
}

const Home: NextPage<HomeProps> = (props) => {
  const [ramais, setRamais] = useState<RamalResponse[]>(props.ramais)

  const [search, setSearch] = useState('')
  // let filter = [...ramais]

  async function fetchRamais() {
    const response = await api.get('/ramais')

    setRamais(response.data)
  }


  // useEffect(() => {
  //   fetchRamais()
  // }, [])

  
  const sumary: Sumary = {
    ramaisCount: props.ramaisCount,
    departmentsCount: props.departmentsCount,
    employeesCount: props.employeesCount
  } 

  let filter: RamalResponse[]

  if (search.length > 0) {
    filter = searchBySetor()
    
    if (filter.length === 0) {
      filter = searchByServidor()
      
      if (filter.length === 0) {
        filter = searchByNumberRamal()
      }
    } 
    
  } else {
    filter = [...ramais]
  }
  
  function searchByNumberRamal() {
    return ramais.filter(ram => ram.ramal.numero.toString().startsWith(search))
  }

  function searchBySetor() {
    let resultFilterBySetor = ramais.filter(ram => ram.departament.initials.toLowerCase().includes(search.toLowerCase()))

    if (resultFilterBySetor.length === 0) {
      resultFilterBySetor = ramais.filter(ram => ram.departament.name.toLowerCase().includes(search.toLowerCase().normalize()))
    }

    return resultFilterBySetor
  }

  function searchByServidor() {
    let ramaisByEmployee: RamalResponse[] = []

    ramais.forEach(ramal => {
      ramal.departament.employees
        .map((employee) => {
          if (employee.name.toLowerCase().includes(search.toLowerCase())) {
            ramaisByEmployee.push(ramal)
          }
        })
    })

    return ramaisByEmployee
  }

  return (
    <React.Fragment>
      <Head>
        <title>Ramais.SI | Lista de ramais</title>
        <meta name="description" content="Lista de Ramais do IF Baiano campus Santa Inês" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='bg-white'>
        <div className='container px-6'>
          <div className='flex justify-between items-center'>
            <h1 className='sm:py-0 py-4 opacity-70 text-3xl'>Ramais<span>.</span><strong>SI</strong></h1>
            <img className='hidden sm:block' src="/logo-ifbaiano.svg" alt="IF Baiano Santa Inês" />
          </div>
        </div>
        <div className='h-[8.125rem] bg-primary-500' />
      </header>

      <main className='-mt-[3.5rem]'>

        {/* SUMARY COMPONENT */}
        <div className='hidden sm:block container px-6'>

          <div className='flex gap-5 flex-wrap'>
            <div className='flex-1 pt-4 px-5 pb-5 bg-white rounded-lg shadow'>
              <strong className='text-3xl font-semibold text-primary-500'>{sumary.ramaisCount}</strong>
              <p className='mt-3 text-lg font-medium text-gray-800'>Ramais</p>
            </div>

            
            <div className='flex-1 pt-4 px-5 pb-5 bg-white rounded-lg shadow'>
              <strong className='text-3xl font-semibold text-primary-500'>{sumary.departmentsCount}</strong>
              <p className='mt-3 text-lg font-medium text-gray-800'>Setores</p>
            </div>

            
            <div className='flex-1 pt-4 px-5 pb-5 bg-white rounded-lg shadow'>
              <strong className='text-3xl font-semibold text-primary-500'>{sumary.employeesCount}</strong>
              <p className='mt-3 text-lg font-medium text-gray-800'>Servidores</p>
            </div>
          </div>

        </div>

        {/* RAMAIS LIST COMPONENT */}
        <div className='sm:mt-0 -mt-[10.5rem] container px-6'>
          <div className='flex gap-5 my-20'>
            <div className='flex-1'>
              <label htmlFor="searchRamal" className='block text-lg font-medium mb-2 sm:w-[15rem] w-[20rem] sm:text-gray-800 text-white'>Digite o nome do setor, servidor ou número do ramal</label>
              <input 
                className='px-4 h-14 w-full rounded-lg shadow border border-gray-300 ring-offset-2 focus:ring-2 focus:outline-none focus:ring-primary-500 text-xl placeholder:text-zinc-300 placeholder:text-xl'
                placeholder=''
                type="text" 
                autoComplete='off'
                name="search" 
                id="searchRamal"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <span className='mt-2 block text-gray-500 font-normal'>Ex: núcleo de gestão da tecnologia da informação</span>
            </div>
            <div className='hidden md:flex-1 md:flex justify-center items-center px-6'>
              <p className='text-2xl leading-8 w-[21rem] text-gray-800'>
                Encontre o ramal que procura
                de forma rápida, organizada
                e eficiente
              </p>
            </div>
          </div>
        </div>

        {/* RAMAIS TABLE COMPONENT */}
        <div className='container px-6'>

          {
            filter.length > 0 && (
              <h2 className='mb-4'> {`Sua pesquisa retornou ${filter.length} resultado${filter.length > 1 ? 's' : ''}.`}  </h2>
            )
          }

          {
            filter.length > 0 ? (
              <table className='w-full border-collapse border-spacing-1'>

            <thead className='bg-primary-200'>
              <tr className='text-left text-sm font-semibold border-b-4 border-secundary-50 text-primary-500'>
                <th className=' pl-4'>SETOR</th>
                <th className=''>SERVIDORES</th>
                <th className=' text-right py-2 pr-4'>NÚMERO DO RAMAL</th>
              </tr>
            </thead>

            <tbody>
              
              {filter.map(ramais => {
                  const employees = ramais.departament.employees.length > 0 
                    ? ramais.departament.employees
                        .map(employee => employee.name)
                        .reduce((anterior, atual) => anterior.concat(", " + atual))
                    : "__"

                  const ramaisOfDepartment = ramais.departament.ramais.map(item => item.ramal.numero).reduce((anterior, atual) => String(atual).concat(", " + String(anterior)))

                  return(
                    <tr key={ramais.id} className='bg-white border-b-2 border-b-2-transparent'>
                      <td className='py-4 pl-4 opacity-70'>{` ${ramais.departament.initials} - ${ramais.departament.name}`}</td>
                      <td className='py-4 pl-4 font-medium'>{employees}</td>
                      <td className='text-right text-3xl  font-bold pr-4'>{ramaisOfDepartment}</td>
                    </tr>
                  )
              })}
              
            </tbody>

          </table>
            ) : (
              <div className='flex flex-col items-center gap-2 bg-white py-8'>
                <div className='flex gap-2 items-center text-orange-400'>
                  <FiFrown className='text-5xl' />
                  <strong className='text-xl'>Ops...!</strong>
                </div>
                <p className='text-center text-lg text-gray-700'>Sua pesquisa não retornou nehum resultado. </p>
              </div>
            )
          }
          
        </div>

      </main>

      <footer className='bg-primary-500 w-full mt-20 text-white border-t-4 border-secundary-500'>
        <div className='container px-6'>
          <div className='flex flex-wrap gap-4 justify-between pt-12 pb-10'>
            <div>
              <span className='text-sm opacity-70'>Lista de ramais</span>
              <p className='text-sm font-semibold'>IF Baiano Santa Inês</p>
            </div>
            <div>
              <span className='text-sm opacity-70'>Desenvolvimento</span>
              <p className='text-sm font-semibold'>Núcleo de Gestão da Tecnologia da Informação</p>
              <span className='text-sm opacity-70'>ngti@si.ifbaiano.edu.br</span>
            </div>
            <div className='flex items-center'>
              <h1 className='text-3xl'>Ramais<span>.</span><strong>SI</strong></h1>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const [ramaisCountResponse, departmentsCountResponse, employeesCountResponse, ramaisResponse] = await Promise.all([
    api.get('/ramais/count'),
    api.get('/departments/count'),
    api.get('/employees/count'),
    api.get('/ramais')
  ]);

  console.log(ramaisResponse.data)

  // const ramais = ramaisResponse.data

  return {
    props: {
      ramaisCount: ramaisCountResponse.data.count,
      departmentsCount: departmentsCountResponse.data.count,
      employeesCount: employeesCountResponse.data.count,
      ramais: ramaisResponse.data
    },
    revalidate: 10 * 60, // 10 minutes
  };
};
