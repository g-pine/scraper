"use client"
import { FormEvent, useState } from "react"

const isValidAmazonProductUrl = (url: string) => {
    try {
        const parsedUrl = new URL(url)
        const hostname = parsedUrl.hostname

        if
        (hostname.includes('amazon.com') || 
        (hostname.includes('amazon.')) || 
        hostname.endsWith('amazon'))
        {
            return true;
        }
    } catch (error) {
        return false;
    }
}

const SearchBar = () => {

  const [searchPrompt, setSearchPrompt] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonProductUrl(searchPrompt);

    if (!isValidLink) return alert('Please provide a valid amazon link');
    try {
        setIsLoading(true);
    } catch (error) {
        
    } finally {
        setIsLoading(false)
    }

  }  
  return (
    <form className='flex flex-wrap gap-4 mt-12'
        onSubmit={handleSubmit}>
        <input 
            type="text"
            value={searchPrompt}
            onChange={(e) => setSearchPrompt(e.target.value)}
            placeholder="Enter product link"
            className="searchbar-input"
        />
        <button 
            type="submit" 
            className="searchbar-btn"
            disabled={searchPrompt === ''}
        >
            {isLoading ? 'Searching...' : 'Search'}
        </button>
    </form>
  )  
}

export default SearchBar
