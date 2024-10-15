import { Button } from "@mui/material";
import { IoMdSearch } from "react-icons/io";
const SearchBox = () => {
    return (
        <div className='headerSearch ml-3 mr-3'>
            <input type='text' placeholder='Search for products...' />
            <Button> <IoMdSearch /></Button>
        </div>
    )
}

export default SearchBox;