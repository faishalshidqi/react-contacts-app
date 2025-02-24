export default function SearchBar({keyword, keywordChange}: {keyword: string, keywordChange: (keyword: string) => void}) {
    return (
        <input className='search-bar'
               type='text' placeholder='Search by keyword'
               value={keyword}
               onChange={(event) => keywordChange(event.target.value)}
        />
    )
}