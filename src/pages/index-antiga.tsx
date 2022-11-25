import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'

import { ramais, Ramal } from '../../ramais.mockdata'

interface Sumary {
  totalRamais: number,
  totalSetores: number,
  totalServidores: number,
}

const Home: NextPage = () => {
  const [search, setSearch] = useState('')
  const listaRamais: Ramal[] = ramais

  let setores: string[] = []
  let servidores: {id: number, nome: string}[] = []

  ramais.forEach(ramal => {
    ramal.servidores.forEach((servidor, index) => {
      if (servidores.length == 0) {
        servidores.push(servidor)

      } else {

        if (!servidores.includes(servidor)) {
          servidores.push(servidor)
        }

      }
    })
  })


  const summaryRamais = {
    totalRamais: listaRamais.length,
    tatalSetores: listaRamais.filter((ramal) => {
      if (!setores.includes(ramal.setor)){
        setores.push(ramal.setor)
        return ramal.setor
      }
    }).length,
    totalServidores: servidores.length
  }

  
  let filteredRamais: Ramal[] = []
  
  if (search.length > 0) {
    filteredRamais = searchBySetor()
    
    if (filteredRamais.length === 0) {
      filteredRamais = searchByServidor()
      
      if (filteredRamais.length === 0) {
        filteredRamais = searchByNumberRamal()
      }
    } 
    
  } else {
    filteredRamais = ramais
  }
  
  function searchByNumberRamal() {
    return ramais.filter(ram => ram.ramal.toString().startsWith(search))
  }

  function searchBySetor() {
    return ramais.filter(ram => ram.setor.toLowerCase().includes(search.toLowerCase()))
  }

  function searchByServidor() {
    let ramaisFiltrador: Ramal[] = []
    
    ramais.forEach(ramal => {
      ramal.servidores.map(servidor => {
        if (servidor.nome.toLowerCase().includes(search.toLowerCase())) {
          ramaisFiltrador.push(ramal)
        }
      })
    })

    return ramaisFiltrador
  }

  function searchByServidor2() {
    let ramaisFiltrados: Ramal[] = []

    ramais.forEach(ramal => {
      const servidores = ramal.servidores

      let servidoresFiltrados = servidores.filter(servidor => {
        if (servidor.nome.toLowerCase().includes(search.toLowerCase())) {
          ramaisFiltrados.push(ramal)
        }
      })

    })
    
    return ramaisFiltrados
  }

  return (
    <React.Fragment>
      <Head>
        <title>Ramais.SI | Lista de ramais</title>
        <meta name="description" content="Lista de Ramais do IF Baiano campus Santa Inês" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='bg-white'>
        <div className='container'>
          <div className='flex justify-between items-center'>
            <h1 className='opacity-70 text-3xl'>Ramais<span>.</span><strong>SI</strong></h1>
            <img src="/logo-ifbaiano.svg" alt="IF Baiano Santa Inês" />
          </div>
        </div>
        <div className='h-[8.125rem] bg-primary-500' />
      </header>

      <main className='-mt-[3.5rem]'>

        {/* SUMARY COMPONENT */}
        <div className='container'>

          <div className='flex gap-5'>
            <div className='flex-1 pt-4 px-5 pb-5 bg-white rounded-lg shadow'>
              <strong className='text-3xl font-semibold text-primary-500'>{summaryRamais.totalRamais}</strong>
              <p className='mt-3 text-lg font-medium opacity-50'>Ramais</p>
            </div>

            
            <div className='flex-1 pt-4 px-5 pb-5 bg-white rounded-lg shadow'>
              <strong className='text-3xl font-semibold text-primary-500'>{summaryRamais.tatalSetores}</strong>
              <p className='mt-3 text-lg font-medium opacity-50'>Setores</p>
            </div>

            
            <div className='flex-1 pt-4 px-5 pb-5 bg-white rounded-lg shadow'>
              <strong className='text-3xl font-semibold text-primary-500'>{summaryRamais.totalServidores}</strong>
              <p className='mt-3 text-lg font-medium opacity-50'>Servidores</p>
            </div>
          </div>

        </div>

        {/* RAMAIS LIST COMPONENT */}
        <div className='container'>
          <div className='flex gap-5 my-20'>
            <div className='flex-1'>
              <label htmlFor="searchRamal" className='block text-base font-medium opacity-70 mb-2'>Digite o nome do setor, servidor ou número do ramal</label>
              <input 
                className='px-4 h-14 w-full rounded-lg shadow border border-gray-300 ring-offset-2 focus:ring-2 focus:outline-none focus:ring-primary-500 text-xl placeholder:text-zinc-300 placeholder:text-xl'
                placeholder='Procurar ramal'
                type="text" 
                autoComplete='off'
                name="search" 
                id="searchRamal"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className='flex-1 flex justify-center items-center px-6'>
              <p className='text-2xl leading-8 w-[21rem]'>
                Encontre o ramal que procura
                de forma rápida, organizada
                e eficiente
              </p>
            </div>
          </div>
        </div>

        {/* RAMAIS TABLE COMPONENT */}
        <div className='container'>
          <h2 className='mb-4'>{filteredRamais.length} rama{filteredRamais.length > 1 ? 'is' : 'l'} encontrado{filteredRamais.length > 1 ? 's' : ''}</h2>

          <table className='w-full border-collapse border-spacing-1'>

            <thead className='bg-primary-200'>
              <tr className='text-left text-sm font-semibold border-b-4 border-secundary-50 text-primary-500'>
                <th className=' pl-4'>SETOR</th>
                <th className=''>SERVIDORES</th>
                <th className=' text-right py-2 pr-4'>NÚMERO DO RAMAL</th>
              </tr>
            </thead>

            <tbody>
              
              {filteredRamais.map(ramal => {
                  const servidores = ramal.servidores.length > 0 
                    ? ramal.servidores
                        .map(servidor => servidor.nome)
                        .reduce((anterior, atual) => anterior.concat(", " + atual))
                    : "__"
  
                  return(
                    <tr key={ramal.id} className='bg-white border-b-2 border-b-2-transparent'>
                      <td className='py-4 pl-4 opacity-70'>{ramal.setor}</td>
                      <td className='py-4 pl-4 font-medium'>{servidores}</td>
                      <td className='text-right text-2xl font-bold pr-4'>{ramal.ramal}</td>
                    </tr>
                  )
              })}
              
            </tbody>

          </table>
        </div>

      </main>

      <footer className='bg-primary-500 w-full mt-20 text-white border-t-4 border-secundary-500'>
        <div className='container'>
          <div className='flex justify-between pt-12 pb-10'>
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
