interface Servidor {
    id: number,
    nome: string
}

export interface Ramal {
    id: number,
    ramal: number,
    setor: string,
    servidores: Servidor[]
}

export const ramais: Ramal[] = [
    {
        "id": 1,
        "ramal": 40,
        "setor": "Direção Geral - DG",
        "servidores": [{
            "id": 1,
            "nome": "Genilda de Souza Lima"
        }]
    }, {
        "id": 2,
        "ramal": 48,
        "setor": "Gabinete do Diretor - GAB",
        "servidores": [{
            "id": 2,
            "nome": "Mara"
        }]
    }, {
        "id": 3,
        "ramal": 11,
        "setor": "Recepção",
        "servidores": [{
            "id": 3,
            "nome": "Gizele"
        }]
    }, {
        "id": 4,
        "ramal": 9,
        "setor": "Recepção",
        "servidores": [{
            "id": 3,
            "nome": "Gizele"
        }]
    }, {
        "id": 5,
        "ramal": 13,
        "setor": "Núcleo de Apoio á Gestão de Pessoas - NAGP",
        "servidores": [
            {
                "id": 4,
                "nome": "Rosana"
            },
            {
                "id": 5,
                "nome": "Dalila"
            }
        ]
    }, {
        "id": 6,
        "ramal": 106,
        "setor": "Núcleo de Comunicação e Eventos - NCE",
        "servidores": [{
            "id": 6,
            "nome": "Tânia Santana"
        }]
    }, {
        "id": 7,
        "ramal": 32,
        "setor": "Núcleo de Gestão da Tecnologia da Informação - NGTI",
        "servidores": [
            {
                "id": 7,
                "nome": "Aijalon"
            },
            {
                "id": 8,
                "nome": "Glauber"
            },
            {
                "id": 9,
                "nome": "Gil Christiano"
            },
            {
                "id": 10,
                "nome": "Leandro"
            }
        ]
    }, {
        "id": 8,
        "ramal": 31,
        "setor": "Diretoria Administrativa – DADM",
        "servidores": [{
            "id": 11,
            "nome": "Daniele Matos"
        }]
    }, {
        "id": 9,
        "ramal": 73,
        "setor": "Diretoria Administrativa – DADM",
        "servidores": [{
            "id": 12,
            "nome": "Ozeias"
        }]
    }, {
        "id": 10,
        "ramal": 57,
        "setor": "Coordenação Financeira Contábil – CFC, Núcleo de Execução Orçamentária e Financeira - NEOF",
        "servidores": [{
            "id": 13,
            "nome": "Gilberto Muniz"
        }, {
            "id": 14,
            "nome": "Carla"
        }, {
            "id": 15,
            "nome": "Antonio Souza"
        }]
    }, {
        "id": 11,
        "ramal": 43,
        "setor": "Núcleo de Licitação – NL",
        "servidores": [{
            "id": 15,
            "nome": "Simone Carvalho"
        }, {
            "id": 16,
            "nome": "Rafael Andrade"
        }]
    }, {
        "id": 12,
        "ramal": 105,
        "setor": "Núcleo de Contratos – NC",
        "servidores": [{
            "id": 17,
            "nome": "Tâmara Monteiro"
        }]
    }, {
        "id": 13,
        "ramal": 18,
        "setor": "Setor de Almoxarifado – STA, Setor de Patrimônio – STP",
        "servidores": [{
            "id": 18,
            "nome": "Emerson"
        }, {
            "id": 19,
            "nome": "Luiz Ricardo"
        }, {
            "id": 20,
            "nome": "Hugo"
        }]
    }, {
        "id": 14,
        "ramal": 20,
        "setor": "Coordenação de Suprimentos e Logística- CSL",
        "servidores": [{
            "id": 21,
            "nome": "Gilvan Muniz"
        }]
    }, {
        "id": 15,
        "ramal": 39,
        "setor": "Setor de Oficina – STO",
        "servidores": [{
            "id": 22,
            "nome": "Romilson"
        }]
    }, {
        "id": 16,
        "ramal": 72,
        "setor": "Setor de Oficina – STO",
        "servidores": [{
            "id": 23,
            "nome": "João Paulo"
        }, {
            "id": 24,
            "nome": "Jailson"
        }, {
            "id": 25,
            "nome": "Estevam"
        }, {
            "id": 26,
            "nome": "Weliton (Nem Pedreiro)"
        }, {
            "id": 27,
            "nome": "Josenildo (Nem Eletricista)"
        }]
    }, {
        "id": 17,
        "ramal": 15,
        "setor": "Diretoria Acadêmica – DA, Coordenação de Ensino – CE",
        "servidores": [{
            "id": 28,
            "nome": "Guilherme Rodrigues"
        }, {
            "id": 29,
            "nome": "Tarcila Pessoa"
        }]
    }, {
        "id": 18,
        "ramal": 25,
        "setor": "Coordenações dos Cursos Superiores: Geografia, Ciências Biológicas, Zootecnia",
        "servidores": []
    }, {
        "id": 19,
        "ramal": 25,
        "setor": "Núcleo de Apoio ao Processo de ensino Aprendizagem Permanecia e Êxito do Educando – NAPEA, Cursos de Graduação (Módulo Novo)",
        "servidores": [{
            "id": 30,
            "nome": "Rosangela Rodrigues"
        }]
    }, {
        "id": 20,
        "ramal": 65,
        "setor": "Coordenação de Pesquisa – CP",
        "servidores": [{
            "id": 31,
            "nome": "Wezer"
        }]
    }, {
        "id": 21,
        "ramal": 65,
        "setor": "Coordenação de Pesquisa – CP, Coordenação de Extensão – CE",
        "servidores": [{
            "id": 31,
            "nome": "Wezer"
        }, {
            "id": 32,
            "nome": "Patrícia Pena"
        }]
    }, {
        "id": 22,
        "ramal": 49,
        "setor": "Sala de Audiovisual",
        "servidores": [{
            "id": 33,
            "nome": "Andrei"
        }, {
            "id": 34,
            "nome": "Noel"
        }]
    }, {
        "id": 23,
        "ramal": 27,
        "setor": "Coordenações dos Cursos Técnicos Integrados ao Ensino Médio: Agropecuária, Alimentos, Zootecnia, PROEJA",
        "servidores": [{
            "id": 35,
            "nome": "Ana Angálica"
        }, {
            "id": 36,
            "nome": "Lucidalva Andrade"
        }, {
            "id": 37,
            "nome": "Marilete Candido"
        }, {
            "id": 38,
            "nome": "Viviane Correia"
        }, {
            "id": 39,
            "nome": "André Leonardo"
        }]
    }, {
        "id": 24,
        "ramal": 98,
        "setor": "Núcleo de Apoio ao Processo de Ensino-Aprendizagem, Permanência e Êxito do Educando – NAPEA Coordenação Pedagógica",
        "servidores": [{
            "id": 40,
            "nome": "Arlene Luttigards"
        }, {
            "id": 41,
            "nome": "Meirilande Eloi"
        }, {
            "id": 42,
            "nome": "Carrilho"
        }, {
            "id": 43,
            "nome": "Rita"
        }, {
            "id": 44,
            "nome": "Anderson Correira"
        }]
    }, {
        "id": 25,
        "ramal": 41,
        "setor": "Setor de Biblioteca – STB",
        "servidores": [{
            "id": 45,
            "nome": "Jéssica"
        }, {
            "id": 46,
            "nome": "Mônica"
        }]
    }, {
        "id": 26,
        "ramal": 34,
        "setor": "Setor de Biblioteca (Acervo) – STB",
        "servidores": [{
            "id": 47,
            "nome": "Pedro"
        }, {
            "id": 48,
            "nome": "Claudineia"
        }, {
            "id": 49,
            "nome": "Ozzyries"
        }, {
            "id": 50,
            "nome": "Diego"
        }]
    }, {
        "id": 27,
        "ramal": 58,
        "setor": "Coordenação de Relações Institucionais - NRI Estágio",
        "servidores": [{
            "id": 51,
            "nome": "William"
        }, {
            "id": 52,
            "nome": "Fabio Barreto"
        }]
    }, {
        "id": 28,
        "ramal": 66,
        "setor": "Sala dos professores",
        "servidores": []
    }, {
        "id": 29,
        "ramal": 22,
        "setor": "Sala de reuniões",
        "servidores": []
    }, {
        "id": 30,
        "ramal": 81,
        "setor": "Ramal Corredor da Administração",
        "servidores": []
    }, {
        "id": 31,
        "ramal": 19,
        "setor": "Secretaria de Registros Acadêmicos - SRA",
        "servidores": [{
            "id": 53,
            "nome": "Diogo de Jesus"
        }]
    }, {
        "id": 32,
        "ramal": 107,
        "setor": "Secretaria de Registros Acadêmicos - SRA",
        "servidores": [{
            "id": 54,
            "nome": "Marta"
        }, {
            "id": 55,
            "nome": "Renata"
        }, {
            "id": 56,
            "nome": "Bartolomeu"
        }]
    }, {
        "id": 33,
        "ramal": 17,
        "setor": "Coordenação de Assuntos Estudantis - CAE",
        "servidores": [{
            "id": 57,
            "nome": "Ângelo Francisco (Fran)"
        }, {
            "id": 58,
            "nome": "Cinara"
        }]
    }, {
        "id": 34,
        "ramal": 71,
        "setor": "Coordenação de Assuntos Estudantis - CAE",
        "servidores": [{
            "id": 59,
            "nome": "Evylin"
        }, {
            "id": 60,
            "nome": "Lucas"
        }, {
            "id": 61,
            "nome": "Jocredson"
        }]
    }, {
        "id": 35,
        "ramal": 109,
        "setor": "Núcleo de Apoio Pedagógico e Psicossocial - NAPSI",
        "servidores": [{
            "id": 62,
            "nome": "Tailan"
        }, {
            "id": 63,
            "nome": "Nelian"
        }]
    }, {
        "id": 36,
        "ramal": 28,
        "setor": "Coordenação de Nutrição e Sáude - NNS (Sala de Enfermagem)",
        "servidores": [{
            "id": 64,
            "nome": "Suomi"
        }, {
            "id": 65,
            "nome": "Éder"
        }]
    }, {
        "id": 37,
        "ramal": 111,
        "setor": "Coordenação de Nutrição e Sáude - NNS (Refeitório)",
        "servidores": [{
            "id": 66,
            "nome": "Andreia Carvalho"
        }, {
            "id": 67,
            "nome": "Valter"
        }]
    }, {
        "id": 38,
        "ramal": 36,
        "setor": "Coordenação de Nutrição e Sáude - NNS (Consultório Odontológico)",
        "servidores": [{
            "id": 68,
            "nome": "Anderson Jambeiro"
        }, {
            "id": 69,
            "nome": "Juliana"
        }]
    }, {
        "id": 39,
        "ramal": 25,
        "setor": "Núcleo de Atendimento às Pessoas com Necessidades Específicas – NAPNE",
        "servidores": [{
            "id": 70,
            "nome": "Marisa"
        }, {
            "id": 71,
            "nome": "Edson"
        }, {
            "id": 72,
            "nome": "Heide"
        }, {
            "id": 73,
            "nome": "Joseline (Ninha)"
        }]
    }, {
        "id": 40,
        "ramal": 42,
        "setor": "Coordenação de Unidade Educativa de Campo - CUEC",
        "servidores": [{
            "id": 74,
            "nome": "Clovis Vaz"
        }]
    }, {
        "id": 41,
        "ramal": 77,
        "setor": "Horta",
        "servidores": []
    }, {
        "id": 42,
        "ramal": 68,
        "setor": "Bovinocultura",
        "servidores": [{
            "id": 75,
            "nome": "Júlio Cesar (Vaqueirinho)"
        }]
    }, {
        "id": 43,
        "ramal": 52,
        "setor": "Caprinocultura",
        "servidores": [{
            "id": 76,
            "nome": "Diógenes"
        },{
            "id": 77,
            "nome": "Cícero"
        }]
    }, {
        "id": 44,
        "ramal": 75,
        "setor": "Suinocultura",
        "servidores": [{
            "id": 78,
            "nome": "André Queiroz"
        }]
    }, {
        "id": 45,
        "ramal": 55,
        "setor": "Pavilhão Agroindustria",
        "servidores": []
    }, {
        "id": 46,
        "ramal": 62,
        "setor": "Laboratório de Biologia",
        "servidores": [{
            "id": 79,
            "nome": "Fabiane"
        }]
    }, {
        "id": 47,
        "ramal": 61,
        "setor": "Laboratório de Química",
        "servidores": [{
            "id": 80,
            "nome": "Geisiane"
        }]
    }, {
        "id": 48,
        "ramal": 25,
        "setor": "Laboratório de Informática",
        "servidores": [{
            "id": 81,
            "nome": "Allan"
        },{
            "id": 82,
            "nome": "Cláudia"
        },{
            "id": 83,
            "nome": "Fernando Kiffer"
        },{
            "id": 84,
            "nome": "Jadson"
        },{
            "id": 85,
            "nome": "Willian Melo"
        }]
    }, {
        "id": 49,
        "ramal": 23,
        "setor": "Laboratório de Informática 2",
        "servidores": []
    }, {
        "id": 50,
        "ramal": 12,
        "setor": "Portaria - Vigilantes de Plantão",
        "servidores": []
    }, {
        "id": 51,
        "ramal": 45,
        "setor": "Portaria (1º Andar) - Vigilantes de Plantão",
        "servidores": []
    }, {
        "id": 52,
        "ramal": 46,
        "setor": "Sala da Vigilância (Alojamento Feminino) - Vigilante de Plantão",
        "servidores": []
    }, {
        "id": 53,
        "ramal": 67,
        "setor": "Sala do preposto da GR3",
        "servidores": [{
            "id": 86,
            "nome": "Valdemir (Bardu)"
        }]
    }, {
        "id": 54,
        "ramal": 74,
        "setor": "Sala do preposto da Atitude",
        "servidores": [{
            "id": 87,
            "nome": "Horácio Neto"
        }]
    }
]