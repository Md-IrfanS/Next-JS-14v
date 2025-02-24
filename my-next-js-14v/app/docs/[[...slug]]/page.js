const DocsPage = ({params}) => {
    const {slug} = params;
    const lists = slug;
    console.log(lists,'lists')
    if (!lists) {
        return "Doc Home Page"
    }
    return (
        <div>
            <h1>Doc Home Page</h1>
            <div className="flex gap-3">
        {
            lists?.map((item)=> {
                return <p>{item}</p>
            })
        }
        </div>
        <div>
        {
            lists?.length == 2 ? `feature - ${lists[0]} Concept - ${lists[1]}` : lists.length == 1 ? `feature - ${lists[0]} ` : "Doc Home Page"
        }
        </div>
        </div>
    )
}

export default DocsPage