export function Header() {
    return (
        <header className='bg-white'>
            <div className='container px-6'>
                <div className='flex justify-between items-center'>
                    <h1 className='sm:py-0 py-4 opacity-70 text-3xl'>Ramais<span>.</span><strong>SI</strong></h1>
                    <img className='hidden sm:block' src="/logo-ifbaiano.svg" alt="IF Baiano Santa Inês" />
                </div>
            </div>
            <div className='h-[8.125rem] bg-primary-500' />
      </header>
    )
}