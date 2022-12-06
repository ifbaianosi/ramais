interface SearchInputProps {
    label: string;
    helperText?: string;
    search: string;
    onChangeSearch: (value: string) => void;
}

export function SearchInput({label, helperText, search, onChangeSearch}: SearchInputProps) {
    return (
        <div className='flex-1'>
            <label htmlFor="searchRamal" className='block text-lg font-medium mb-2 sm:w-[15rem] w-[20rem] sm:text-gray-800 text-white'>{label}</label>
            <input 
                className='px-4 h-14 w-full rounded-lg shadow border border-gray-300 ring-offset-2 focus:ring-2 focus:outline-none focus:ring-primary-500 text-xl placeholder:text-zinc-300 placeholder:text-xl'
                placeholder=''
                type="text" 
                autoComplete='off'
                name="search" 
                id="searchRamal"
                value={search}
                onChange={(e) => onChangeSearch(e.target.value)}
            />
            <span className='mt-2 block text-gray-500 font-normal'>{helperText ? helperText : "Ex: núcleo de gestão da tecnologia da informação"}</span>
        </div>
    )
}