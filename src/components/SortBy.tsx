

type Sort = {
    // sortBy: string,
    // setSortBy: React.Dispatch<React.SetStateAction<string>>,
    onOptionChangeHandler: (event:any) => void
}

const SortBy = ({onOptionChangeHandler}: Sort) => {
    return (
        <div className="sort">
            <h4>Sort porducts by:</h4>
            <select name="select-sort" onChange={onOptionChangeHandler}>
                <option>Choose..</option>
                <option value="higher">Higher Price</option>
                <option value="lower">Lower Price</option>
                <option value="alphabetically">Alphabetically</option>
            </select>
        </div>
    )
}

export default SortBy;