// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListView from './listView';
import Create from './Create';
import Update from './Update';
import Guest from './Guest';

function Display(props) {
    console.log(props)
    if (props.currentView === "ListView") {
        return (
            <Card style={{ margin: 'auto'}}>
              <Card.Body>
                <ListView {...props}/>
              </Card.Body>
            </Card>
          );
    } else if (props.currentView === "Guest") {
        return (
            <Card style={{ margin: 'auto'}}>
              <Card.Body>
                <Guest {...props}/>
              </Card.Body>
            </Card>
          );
    }
}

export default Display;