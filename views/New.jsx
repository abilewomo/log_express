const React = require('react')


class New extends React.Component{
    render(){
        return(
            <div>
                <h1>Make a new log entry</h1>
                <form action = '/logs' method='POST'>
                    Title: <input type='text' name='title'/><br /><br />
                    Comment: <textarea name='entry'></textarea><br /><br />
                    Is Ship Broken: <input type="checkbox" name="shipIsBroken" /><br/><br />
                 <input type="submit" name="" value="Submit"/>
                </form>
            </div>
        )
    }
}
module.exports = New