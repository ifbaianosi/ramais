import React from "react";
import { RamalResponse } from "../pages";

import { FiFrown } from "react-icons/fi";
import { TextCountSearchResult } from "./TextCountSearchResult";

interface RamaisListProps {
    emptyListTitle: string;
    emptyListMessage: string;
    ramalList: RamalResponse[]
}

export function RamaisList({emptyListMessage, emptyListTitle, ramalList}: RamaisListProps) {
    return (
        <React.Fragment>
            { ramalList.length > 0 ? (
                    <>
                        <TextCountSearchResult countFilteredRamais={ramalList.length} />

                        <table className='w-full border-collapse border-spacing-1'>
                            <thead className='bg-primary-200'>
                            <tr className='text-left text-sm font-semibold border-b-4 border-secundary-50 text-primary-500'>
                                <th className=' pl-4'>SETOR</th>
                                <th className=''>SERVIDORES</th>
                                <th className=' text-right py-2 pr-4'>NÚMERO DO RAMAL</th>
                            </tr>
                            </thead>

                            <tbody>
                            {ramalList.map(ramais => {
                                const employees = ramais.departament.employees.length > 0 
                                    ? ramais.departament.employees
                                        .map(employee => employee.name)
                                        .reduce((anterior, atual) => anterior.concat(", " + atual))
                                    : "__"

                                const ramaisOfDepartment = ramais.departament.ramais.map(item => item.ramal.numero).reduce((anterior, atual) => String(anterior).concat(", " + String(atual)))

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
                    </>
                ) : (
                    <div className='flex flex-col items-center gap-2 bg-white py-8 rounded-lg shadow'>
                        <div className='flex gap-2 items-center text-orange-400'>
                            <FiFrown className='text-5xl' />
                            <strong className='text-xl'>
                                {emptyListTitle}
                            </strong>
                        </div>
                        <p className='text-center text-lg text-gray-700'>
                            {emptyListMessage}
                        </p>
                    </div>
                )
            }
        </React.Fragment>
    )
}