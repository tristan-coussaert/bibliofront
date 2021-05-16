import React, { Component } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import './index.css';


interface IMyComponentState {
  items: Array<Livre>;
  setShow: boolean;
  date: Date;
  startDate: Date;
  auteur: Array<Auteur>;
  titre: string;
  aut?: any;
  emprunte: boolean;
  setShowUpdate: boolean;
  edit: null |Livre;
}

interface Livre {
  id: number;
  titre: string;
  dateofpublication: Date;
  isBorrowed: string;
  auteurs: Auteur;
  categorie: string;
}

interface Auteur {
  id: number;
  dateofbirth: Date;
  nom: string;
}

class Livre extends Component<any,IMyComponentState> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: [],
      setShow: false,
      setShowUpdate: false,
      date: new Date(),
      startDate: new Date(),
      auteur: [],
      titre: "",
      aut: "",
      emprunte: false,
      edit:null ,
    }
  }

  handleClose () {
    this.setState({
      setShow: false
  })}

  handleShow () {
    this.setState({
      setShow: true
  })}

  
  handleCloseUpdate () {
    this.setState({
      setShowUpdate: false
  })}

  handleShowUpdate (id:any) {
    this.setState({
      edit: id,
  })
   this.setState({
    setShowUpdate: true,
})}


  newLivre() {
    console.log(this.state.aut)
  }
    componentDidMount() {
        console.log("coucou");
        fetch("http://192.168.0.21:1234/livre", {
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImhEQVFuNmV1OWtEN2VULU1BRXA0VyJ9.eyJpc3MiOiJodHRwczovL2Rldi1wcnBvM2J0aS5ldS5hdXRoMC5jb20vIiwic3ViIjoibm1MNWFxMzZCWnNDUTliS05ocWdmN3BUc0J2VE5qb2pAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vdHBiaWJsaW8uY29tIiwiaWF0IjoxNjIxMTE5MDU4LCJleHAiOjE2MjEyMDU0NTgsImF6cCI6Im5tTDVhcTM2QlpzQ1E5YktOaHFnZjdwVHNCdlROam9qIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.h_ucUIKRSd1bQGHGkqYmfkmx2F51WILXS5ITIQFq7KMxWRcq4OB6lodyrnmfC4FP-92cXYeDwXGoDAsBskFRFUjqh2P50uXNjAsSEOVtwA8svct5nUYjj-9Qf-4Ms3v2Ydjv27ZJLRobW-09BezEmhhfImWeSohRLAGV2X8HaQ-4jEgjxQa696aVX0RFpZAHJNqHi8Do3qSLYs9fh35nxoZpWNb4DCfWK8oZGyNphKmnxc8B7I8VSVZ9RZJzWGIKqiIdoBtlJ3yPYHZObuaEoL9RYF2mgBtSuN3m26Dj7MrG5j8clxcZpMh6SorgIclFbCz0lRjmAXvr0MhfjdI6Yw',
            }
        })
            .then(res => res.json())
            .then((result) => {
              console.log(result)
              this.setState({
                items: result
              })
            })
            fetch("http://192.168.0.21:1234/auteur", {
              headers: {
                  Accept: 'application/json',
                  'Content-type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                  'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImhEQVFuNmV1OWtEN2VULU1BRXA0VyJ9.eyJpc3MiOiJodHRwczovL2Rldi1wcnBvM2J0aS5ldS5hdXRoMC5jb20vIiwic3ViIjoibm1MNWFxMzZCWnNDUTliS05ocWdmN3BUc0J2VE5qb2pAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vdHBiaWJsaW8uY29tIiwiaWF0IjoxNjIxMTE5MDU4LCJleHAiOjE2MjEyMDU0NTgsImF6cCI6Im5tTDVhcTM2QlpzQ1E5YktOaHFnZjdwVHNCdlROam9qIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.h_ucUIKRSd1bQGHGkqYmfkmx2F51WILXS5ITIQFq7KMxWRcq4OB6lodyrnmfC4FP-92cXYeDwXGoDAsBskFRFUjqh2P50uXNjAsSEOVtwA8svct5nUYjj-9Qf-4Ms3v2Ydjv27ZJLRobW-09BezEmhhfImWeSohRLAGV2X8HaQ-4jEgjxQa696aVX0RFpZAHJNqHi8Do3qSLYs9fh35nxoZpWNb4DCfWK8oZGyNphKmnxc8B7I8VSVZ9RZJzWGIKqiIdoBtlJ3yPYHZObuaEoL9RYF2mgBtSuN3m26Dj7MrG5j8clxcZpMh6SorgIclFbCz0lRjmAXvr0MhfjdI6Yw',
              }
          })
              .then(res => res.json())
              .then((result) => {
                console.log(result)
                this.setState({
                  auteur: result
                })
              })
    }

    deleteCrud(id:number){
      console.log("coucou")
      fetch(`http://192.168.0.21:1234/livre/delete/${id}`, {
        'method': 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImhEQVFuNmV1OWtEN2VULU1BRXA0VyJ9.eyJpc3MiOiJodHRwczovL2Rldi1wcnBvM2J0aS5ldS5hdXRoMC5jb20vIiwic3ViIjoibm1MNWFxMzZCWnNDUTliS05ocWdmN3BUc0J2VE5qb2pAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vdHBiaWJsaW8uY29tIiwiaWF0IjoxNjIxMTE5MDU4LCJleHAiOjE2MjEyMDU0NTgsImF6cCI6Im5tTDVhcTM2QlpzQ1E5YktOaHFnZjdwVHNCdlROam9qIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.h_ucUIKRSd1bQGHGkqYmfkmx2F51WILXS5ITIQFq7KMxWRcq4OB6lodyrnmfC4FP-92cXYeDwXGoDAsBskFRFUjqh2P50uXNjAsSEOVtwA8svct5nUYjj-9Qf-4Ms3v2Ydjv27ZJLRobW-09BezEmhhfImWeSohRLAGV2X8HaQ-4jEgjxQa696aVX0RFpZAHJNqHi8Do3qSLYs9fh35nxoZpWNb4DCfWK8oZGyNphKmnxc8B7I8VSVZ9RZJzWGIKqiIdoBtlJ3yPYHZObuaEoL9RYF2mgBtSuN3m26Dj7MrG5j8clxcZpMh6SorgIclFbCz0lRjmAXvr0MhfjdI6Yw',
      }
      })
      window.location.reload();
    }
    addLivre(target:any) {
      console.log(target.emprunte.checked);
      fetch(`http://192.168.0.21:1234/livre/add`, {
        'method': 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImhEQVFuNmV1OWtEN2VULU1BRXA0VyJ9.eyJpc3MiOiJodHRwczovL2Rldi1wcnBvM2J0aS5ldS5hdXRoMC5jb20vIiwic3ViIjoibm1MNWFxMzZCWnNDUTliS05ocWdmN3BUc0J2VE5qb2pAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vdHBiaWJsaW8uY29tIiwiaWF0IjoxNjIxMTE5MDU4LCJleHAiOjE2MjEyMDU0NTgsImF6cCI6Im5tTDVhcTM2QlpzQ1E5YktOaHFnZjdwVHNCdlROam9qIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.h_ucUIKRSd1bQGHGkqYmfkmx2F51WILXS5ITIQFq7KMxWRcq4OB6lodyrnmfC4FP-92cXYeDwXGoDAsBskFRFUjqh2P50uXNjAsSEOVtwA8svct5nUYjj-9Qf-4Ms3v2Ydjv27ZJLRobW-09BezEmhhfImWeSohRLAGV2X8HaQ-4jEgjxQa696aVX0RFpZAHJNqHi8Do3qSLYs9fh35nxoZpWNb4DCfWK8oZGyNphKmnxc8B7I8VSVZ9RZJzWGIKqiIdoBtlJ3yPYHZObuaEoL9RYF2mgBtSuN3m26Dj7MrG5j8clxcZpMh6SorgIclFbCz0lRjmAXvr0MhfjdI6Yw',
      }, 
      body: JSON.stringify({
        titre: target.titre.value,
        dateofpublication: target.date.value,
        auteurs: [this.state.auteur[target.auteur.value]],
        categorie: target.categorie.value,
        isBorrowed: target.emprunte.checked,
      })
    })
    window.location.reload();
    }
  render() {
    const items = this.state
    console.log(items)
    return (
        <div className="container">
          <h1>Livres</h1>
          <Button onClick={(event:any) => {this.handleShow()}}>Ajouter</Button>
          <Modal show={this.state.setShow} onHide={(event:any) => {this.handleClose()}}>
            <Modal.Header closeButton>
              <Modal.Title>Ajouter un Livre</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form
                onSubmit={(e:any) => {
                  console.log("wesh")
                  e.preventDefault();
                  const target = e.target;
                  this.addLivre(target);
                }}>
                <label>
                  Titre:
                  <input type="text" name="titre"/>
                </label>
                <br/>
                <label>
                  Date:
                  <input type="date" name="date"/>
                </label>
                <br/>
                <label>
                  Auteur:
                  <select name="auteur">
                    {this.state.auteur.map((aut, i) =>(
                      <option key={aut.id} value={i}>{aut.nom}</option>
                    ))}
                  </select>
                </label>
                <br/>
                <label>
                  Categorie:
                  <select name="categorie">
                      <option key="ENFANT">ENFANT</option>
                      <option key="ADO">ADO</option>
                      <option key="ADULTE">ADULTE</option>
                  </select>
                </label>
                <br/>
                <label>
                  Disponible:
                  <input type="checkbox" name="emprunte"/>
                </label>
                <br/>
                <input type="submit"/>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={(event:any) => {this.handleClose()}}>Fermer</Button>
            </Modal.Footer>
          </Modal>
          <Modal show={this.state.setShowUpdate} onHide={(event:any) => {this.handleCloseUpdate()}}>
            <Modal.Header closeButton>
              <Modal.Title>Modifier un Livre</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form
                onSubmit={(e:any) => {
                  console.log("wesh")
                  e.preventDefault();
                  const target = e.target;
                  this.addLivre(target);
                }}>
                <label>
                  Titre:
                  <input type="text" name="titre" defaultValue="2"/>
                </label>
                <br/>
                <label>
                  Date:
                  <input type="date" name="date"/>
                </label>
                <br/>
                <label>
                  Auteur:
                  <select name="auteur">
                    {this.state.auteur.map((aut, i) =>(
                      <option key={aut.id} value={i}>{aut.nom}</option>
                    ))}
                  </select>
                </label>
                <br/>
                <label>
                  Categorie:
                  <select name="categorie">
                      <option key="ENFANT">ENFANT</option>
                      <option key="ADO">ADO</option>
                      <option key="ADULTE">ADULTE</option>
                  </select>
                </label>
                <br/>
                <label>
                  Disponible:
                  <input type="checkbox" name="emprunte"/>
                </label>
                <br/>
                <input type="submit"/>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={(event:any) => {this.handleCloseUpdate()}}>Fermer</Button>
            </Modal.Footer>
          </Modal>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Titre</th>
                <th>Date de publication</th>
                <th>Auteur</th>
                <th>Disponible</th>
                <th>Categorie</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.items.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.titre}</td>
                  <td>{item.dateofpublication}</td>
                  <td>{item.auteurs[0].nom}</td>
                  <td>{item.isBorrowed.toString()}</td>
                  <td>{item.categorie}</td>
                  <td>
                    <Button onClick={(event: any) => {
                      this.deleteCrud(item.id)
                    }} >Supprimer</Button>
                    <Button onClick={(event:any) => {this.handleShowUpdate(item.id)}}>Modifier</Button>
                  </td>
                </tr>
              ))} 
            </tbody>
          </Table>
        </div>
    );
  }
}

export default Livre;