interface TextCountSearchResultProps {
    countFilteredRamais: number;
}

export function TextCountSearchResult({countFilteredRamais}: TextCountSearchResultProps) {
    return (
        <h2 className='mb-4'> {`Sua pesquisa retornou ${countFilteredRamais} resultado${countFilteredRamais > 1 ? 's' : ''}.`}  </h2>
    )
}