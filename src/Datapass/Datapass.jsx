import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    
} from 'mdb-react-ui-kit';


function Datapass({ cards }) {
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>{
            cards.map(item => (
                <MDBCard style={{width:'400px',margin:'20px'}}>
                    <MDBCardImage style={{width:'370px',height:'250px'}} src={item.images[0]} position='top' alt='...' />
                    <MDBCardBody>
                        <p><b>ID:{item.id}</b></p>
                        <p><b>Category:{item.category}</b></p>
                        <MDBCardTitle><b>{item.title}</b></MDBCardTitle>
                        <MDBCardText>
                           {item.description} 
                        </MDBCardText>
                        <p>Price : <b>${item.price}</b></p>
                        <p>Rating : {item.rating}</p>
                        
                    </MDBCardBody>
                </MDBCard>
            ))
        }</div>
    )
}

export default Datapass