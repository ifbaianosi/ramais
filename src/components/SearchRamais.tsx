import React, { useState } from "react";
import { RamalResponse } from "../pages";
import { RamaisList } from "./RamaisList";

import { SearchInput } from "./SearchInput";
import { SearchTextHelper } from "./SearchTextHelper";

interface Props {
    ramais: RamalResponse[]
}

export function SearchRamais({ramais}: Props) {
    const [search, setSearch] = useState('')

    let filter = [...ramais]

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
            <div className='sm:mt-0 -mt-[10.5rem] container px-6'>
                <div className='flex gap-5 my-20'>
                    <SearchInput
                        search={search}
                        onChangeSearch={setSearch}
                        label="Digite o nome do setor, servidor ou número do ramal"
                    />

                    <SearchTextHelper 
                        text="Encontre o ramal que procura de forma rápida, organizada e eficiente"
                    />
                </div>
            </div>

            <div className='container px-6'>
              <RamaisList
                  ramalList={filter}
                  emptyListTitle="Ops...!"
                  emptyListMessage="Sua pesquisa não retornou nehum resultado."
              />
            </div>
        </React.Fragment>
    )
}