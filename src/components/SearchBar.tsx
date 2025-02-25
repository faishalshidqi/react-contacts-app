import {LocaleConsumer} from "../contexts/LocaleContext.ts";

export default function SearchBar({keyword, keywordChange}: {keyword: string, keywordChange: (keyword: string) => void}) {
    return (
        <LocaleConsumer>
            {
                ({locale}) => {
                    return (
                        <input className='search-bar'
                               type='text' placeholder={locale === 'id' ? 'Cari berdasarkan nama': 'Search by name'}
                               value={keyword}
                               onChange={(event) => keywordChange(event.target.value)}
                        />
                    )
                }
            }
        </LocaleConsumer>
    )
}