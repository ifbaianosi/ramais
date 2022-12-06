import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { FiFrown } from "react-icons/fi";
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { SearchRamais } from '../components/SearchRamais';
import { Summary } from '../components/Summary';

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
  numero: number;
}

export interface RamalResponse {
  id: string;
  ramal: Ramall;
  departament: Departament;
}

interface HomeProps {
  ramaisCount: number;
  departmentsCount: number,
  employeesCount: number,
  ramais: RamalResponse[]
}

const Home: NextPage<HomeProps> = (props) => {
  const { ramais, ramaisCount, departmentsCount, employeesCount } = props

  const sumary = {
    ramaisCount,
    departmentsCount,
    employeesCount
  } 

  return (
    <React.Fragment>
      <Head>
        <title>Ramais.SI | Lista de ramais</title>
        <meta name="description" content="Lista de Ramais do IF Baiano campus Santa Inês" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className='-mt-[3.5rem]'>
        <Summary sumary={sumary} />
        <SearchRamais ramais={ramais} />
      </main>

      <Footer />
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
