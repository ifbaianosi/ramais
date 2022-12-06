export function Footer() {
    return (
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
    )
}