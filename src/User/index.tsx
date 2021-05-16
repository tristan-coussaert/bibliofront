import React, { Component } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import './index.css';


interface IMyComponentState {
  items: Array<User>;
  setShow: boolean;
  date: Date;
  startDate: Date;
  auteur: Array<Auteur>;
  titre: string;
  aut?: any;
  emprunte: boolean;
  setShowEmprunt: boolean;
}

interface User {
  id: number;
  nom: string;
  age: number;
  livres: Array<Livre>;
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

class User extends Component<any,IMyComponentState> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: [],
      setShow: false,
      date: new Date(),
      startDate: new Date(),
      auteur: [],
      titre: "",
      aut: "",
      emprunte: false,
      setShowEmprunt: false,
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

  handleCloseEmprunt () {
    this.setState({
      setShowEmprunt: false
  })}

  handleShowEmprunt () {
    this.setState({
      setShowEmprunt: true
  })}

  emprunter(id:number) {
    console.log(id);
  }
  
  newLivre() {
    console.log(this.state.aut)
  }
    componentDidMount() {
        console.log("coucou");
        fetch("http://192.168.0.21:1234/micheline", {
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
    }

    deleteCrud(id:number){
      console.log("coucou")
      fetch(`http://192.168.0.21:1234/micheline/delete/${id}`, {
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
      fetch(`http://192.168.0.21:1234/micheline/add`, {
        'method': 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImhEQVFuNmV1OWtEN2VULU1BRXA0VyJ9.eyJpc3MiOiJodHRwczovL2Rldi1wcnBvM2J0aS5ldS5hdXRoMC5jb20vIiwic3ViIjoibm1MNWFxMzZCWnNDUTliS05ocWdmN3BUc0J2VE5qb2pAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vdHBiaWJsaW8uY29tIiwiaWF0IjoxNjIxMTE5MDU4LCJleHAiOjE2MjEyMDU0NTgsImF6cCI6Im5tTDVhcTM2QlpzQ1E5YktOaHFnZjdwVHNCdlROam9qIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.h_ucUIKRSd1bQGHGkqYmfkmx2F51WILXS5ITIQFq7KMxWRcq4OB6lodyrnmfC4FP-92cXYeDwXGoDAsBskFRFUjqh2P50uXNjAsSEOVtwA8svct5nUYjj-9Qf-4Ms3v2Ydjv27ZJLRobW-09BezEmhhfImWeSohRLAGV2X8HaQ-4jEgjxQa696aVX0RFpZAHJNqHi8Do3qSLYs9fh35nxoZpWNb4DCfWK8oZGyNphKmnxc8B7I8VSVZ9RZJzWGIKqiIdoBtlJ3yPYHZObuaEoL9RYF2mgBtSuN3m26Dj7MrG5j8clxcZpMh6SorgIclFbCz0lRjmAXvr0MhfjdI6Yw',
      }, 
      body: JSON.stringify({
        nom: target.nom.value,
        age: target.age.value,
      })
    })
    window.location.reload();
    }
  render() {
    const items = this.state
    console.log(items)
    return (
        <div className="container">
          <h1>Users</h1>
          <Button onClick={(event:any) => {this.handleShow()}}>Ajouter</Button>
          <Modal show={this.state.setShow} onHide={(event:any) => {this.handleClose()}}>
            <Modal.Header closeButton>
              <Modal.Title>Ajouter un User</Modal.Title>
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
                  Nom:
                  <input type="text" name="nom"/>
                </label>
                <br/>
                <label>
                  Age:
                  <input type="number" name="age"/>
                </label>
                <br/>
                <input type="submit"/>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={(event:any) => {this.handleClose()}}>Fermer</Button>
              <Button>Enregister</Button>
            </Modal.Footer>
          </Modal>
          <Modal show={this.state.setShowEmprunt} onHide={(event:any) => {this.handleCloseEmprunt()}}>
            <Modal.Header closeButton>
              <Modal.Title>Emprunter un livre</Modal.Title>
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
                  Nom:
                  <input type="text" name="nom"/>
                </label>
                <br/>
                <label>
                  Age:
                  <input type="number" name="age"/>
                </label>
                <br/>
                <input type="submit"/>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={(event:any) => {this.handleClose()}}>Fermer</Button>
              <Button>Enregister</Button>
            </Modal.Footer>
          </Modal>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nom</th>
                <th>Age</th>
                <th>Livres</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {items.items.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.nom}</td>
                  <td>{item.age}</td>
                  <td>{item.livres.map((livre) => (
                    livre.titre
                  ))}</td>
                  <td>
                    <Button onClick={(event: any) => {
                      this.deleteCrud(item.id)
                    }} >Supprimer</Button>
                    <Button>Modifier</Button>
                    <Button onClick={(event: any) => {
                      this.emprunter(item.id)
                    }} >Emprunter</Button>
                  </td>
                </tr>
              ))} 
            </tbody>
          </Table>
        </div>
    );
  }
}

export default User;