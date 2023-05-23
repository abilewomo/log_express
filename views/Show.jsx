const React = require('react')

class Show extends React.Component{
    render(){
        return (
            <div>
                <h1>{ this.props.log.title }</h1>
                <p>{ this.props.log.entry }</p>
                <p>{ (this.props.log.shipIsBroken==true)?"The ship is broken":"The ship is not broken" }</p>
                <a href="/">Back</a>
            </div>
        )
    }
}
module.exports = Show