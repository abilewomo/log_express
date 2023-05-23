const React = require('react')

class Index extends React.Component{
    render(){
        return (
            <div>
                <h1>View all logs</h1>
                <nav>
          <a href="/logs/new">Make a new entry </a>
        </nav>
                <ul>
                {
                   this.props.logs.map((log, i) => {
                    return (
                        <li key={i}><form action={`/logs/${ log.id }?_method=DELETE`} method='post'>
                       <a href={`/logs/${ log.id }`}> { log.title }</a>&nbsp; &nbsp;<a href={`/logs/${ log.id }/edit`}>Edit </a>&nbsp; &nbsp;
                       <input type="submit" value="Delete"/><br /><br /></form>
                        </li>
                        
                        )
                    })
                }
            </ul>
            </div>
        )
    }
}
module.exports = Index