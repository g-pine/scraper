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
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonProductUrl(searchPrompt);

    alert(isValidLink ? 'Valid Link' : 'Invalid Link')
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
        <button type="submit" className="searchbar-btn">
            Search
        </button>
    </form>
  )  
}

export default SearchBar
