interface SearchTextHelperProps {
    text: string;
}

export function SearchTextHelper({text}: SearchTextHelperProps) {
    return (
        <div className='hidden md:flex-1 md:flex justify-center items-center px-6'>
            <p className='text-2xl leading-8 w-[21rem] text-gray-800'>
                {text}
            </p>
        </div>
    )
}