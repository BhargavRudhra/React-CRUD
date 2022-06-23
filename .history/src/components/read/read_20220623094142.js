import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

fetch("https://crudcrud.com/api/0b203ba95d36412caeb920596fffa8f4/empdata")
.then((data) => {
    return data.json();
})

// export default function Read() {
//     const [apiData, setApiData] = useState([]);
//     useEffect(() => {
//         axios.get(`https://crudcrud.com/api/660e2d69d3404452b7fba8ef14badc82/empdata`)
//             .then((getData) => {
//                 setApiData(getData.data);
//             })
//     }, [])

//     const setData = (id, firstName, lastName) => {
//         localStorage.setItem('ID', id)
//         localStorage.setItem('firstName', firstName)
//         localStorage.setItem('lastName', lastName)
//     }

//     const getData = () => {
//         axios.get(`https://crudcrud.com/api/660e2d69d3404452b7fba8ef14badc82/empdata`)
//             .then((getData) => {
//                 setApiData(getData.data);
//             })
//     }

//     const onDelete = (id) => {
//         axios.delete(`https://crudcrud.com/api/660e2d69d3404452b7fba8ef14badc82/empdata${id}`)
//         .then(() => {
//             getData();
//         })
//     }

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>
                                    <Link to='/update'>
                                        <Button
                                            color="green"
                                            onClick={() => setData(data.id, data.firstName, data.lastName)}>
                                            Update
                                        </Button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button color="red" onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table>
        </div>
    )
}
