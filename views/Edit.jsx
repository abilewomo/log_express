const React = require('react')


class Edit extends React.Component{
    render(){
        return(
            <div>
                <h1>Edit log</h1>
                <a href="/">Back</a>
                <form action = {`/logs/${this.props.log._id}?_method=PUT`}  method='POST'>
                    Title: <input type='text' name='title' defaultValue={ this.props.log.title } /><br /><br />
                    Comment: <textarea name='entry' defaultValue={this.props.log.entry}></textarea><br /><br />
                    Is Ship Broken: { this.props.log.shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked />: <input type="checkbox" name="shipIsBroken"/> }<br/><br />
                 <input type="submit" name="" value="Submit"/>
                </form>
            </div>
        )
    }
}
module.exports = Edit