import { SetStateAction } from "react"

type Sort = {
    sortBy: string,
    setSortBy: React.Dispatch<React.SetStateAction<string>>,
    onOptionChangeHandler: (event:any) => void
}

const SortBy = ({sortBy, setSortBy, onOptionChangeHandler}: Sort) => {
    return (
        <div>
            <h3>Sort porducts by:</h3>
            <select onChange={onOptionChangeHandler}>
                <option value="higher">Higher Price</option>
                <option value="lower">Lower Price</option>
                <option value="alphabetically">Alphabetically</option>
            </select>
        </div>
    )
}

export default SortBy;