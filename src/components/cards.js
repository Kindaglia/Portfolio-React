import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (

    <div className="container  text-center">
        <div className="row">
            

            <div className="col mb-4">
            <Card  style={{ width: '18rem' }}>
                <Card.Body className='bg-info rounded'>
                    <Card.Title className='text-warning'>Wordle solution</Card.Title>
                    <Card.Text className='text-white'>
                    Progetto realizzato durante il corso nel quale ho sviluppato l'interfaccia web
                    </Card.Text>

                    <a href="https://github.com/PaulJic/Learning-by-project" target="_blank" style={{width: 70, height: 'auto'}} rel="noreferrer" >
                    <Button variant="primary">Visualizza</Button>
                    </a>
                </Card.Body>
                </Card>
            </div>

            <div className="col mb-4 mb-4">
                <Card  style={{ width: '18rem' }}>
                <Card.Body className='bg-info rounded'>
                    <Card.Title className='text-warning'>Esercizi Hmtl-css-js</Card.Title>
                    <Card.Text className='text-white'>
                    Degli esercizi di Front-end
                    </Card.Text>
                    <a href="https://github.com/Kindaglia/Programmazione-WEB---HTML-CSS-Javascript" target="_blank" style={{width: 70, height: 'auto'}} rel="noreferrer" >
                    <Button variant="primary">Visualizza</Button>
                    </a>
                    <a className='ms-2' href="https://kindaglia.github.io/Demo-WebPage/" target="_blank" style={{width: 70, height: 'auto'}} rel="noreferrer" >
                    <Button variant="primary">Demo</Button>
                    </a>
                </Card.Body>
                </Card>
            </div>
            <div className="col mb-4">
            <Card  style={{ width: '18rem' }}>
                <Card.Body className='bg-info rounded'>
                    <Card.Title className='text-warning'>Portfolio React</Card.Title>
                    <Card.Text className='text-white'>
                    Portfolio presentaziione 
                    </Card.Text>

                    <a href="https://github.com/Kindaglia/Portfolio-React" target="_blank" style={{width: 70, height: 'auto'}} rel="noreferrer" >
                    <Button variant="primary">Visualizza</Button>
                    </a>
                </Card.Body>
                </Card>

            </div>

        </div>

    </div>
  );
}

export default BasicExample;