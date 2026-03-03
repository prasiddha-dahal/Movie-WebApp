const PaginationButton = ({ page, setPage }) => {

    const previous = () => {
        setPage(prev => Math.max(prev - 1, 1));
    }

    const next = () => {
        setPage(prev => prev + 1)
    }

    return (
        <div className="flex justify-center gap-6 m-4 items-center">
            <div className="leftbtn">
                <button onClick={previous} className="px-4 py-2 rounded bg-slate-300 text-slate-900 dark:bg-slate-700 dark:bg-white active:scale-95">Previous</button>
            </div>
            <p className="text-slate-900 dark:text-white">{page}</p>
            <div className="rightbtn">
                <button onClick={next} className="px-4 py-2 rounded bg-slate-300 text-slate-900 dark:bg-slate-700 dark:bg-white active:scale-95">Next</button>
            </div>
        </div>
    );
}

export default PaginationButton
