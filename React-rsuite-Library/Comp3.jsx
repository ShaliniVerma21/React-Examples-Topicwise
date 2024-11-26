import { Table, Button } from 'rsuite';
import 'rsuite/Table/styles/index.css';

const mockUsers = [
    {
        id: '0',
        firstName: 'Shalini',
        lastName: 'Verma',
        gender: 'Female',
        age: 40,
        postcode: 220051,
        email: 'Shaliniv532@gmail.com',
    },
    {
        id: '1',
        firstName: 'Shalini',
        lastName: 'Verma',
        gender: 'Female',
        age: 40,
        postcode: 220051,
        email: 'Shaliniv532@gmail.com',
    },
    {
        id: '2',
        firstName: 'Shalini',
        lastName: 'Verma',
        gender: 'Female',
        age: 40,
        postcode: 220051,
        email: 'Shaliniv532@gmail.com',
    },
    {
        id: '3',
        firstName: 'Shalini',
        lastName: 'Verma',
        gender: 'Female',
        age: 40,
        postcode: 220051,
        email: 'Shaliniv532@gmail.com',
    },
    {
        id: '4',
        firstName: 'Shalini',
        lastName: 'Verma',
        gender: 'Female',
        age: 40,
        postcode: 220051,
        email: 'Shaliniv532@gmail.com',
    },
];

const { Column, HeaderCell, Cell } = Table;

const Comp3 = () => {
    return (
        <Table
            height={400}
            data={mockUsers} // Directly use mockUsers
            onRowClick={rowData => {
                console.log(rowData);
            }}
        >
            <Column width={60} align="center" fixed>
                <HeaderCell>Id</HeaderCell>
                <Cell dataKey="id" />
            </Column>

            <Column width={150}>
                <HeaderCell>First Name</HeaderCell>
                <Cell dataKey="firstName" />
            </Column>

            <Column width={150}>
                <HeaderCell>Last Name</HeaderCell>
                <Cell dataKey="lastName" />
            </Column>

            <Column width={100}>
                <HeaderCell>Gender</HeaderCell>
                <Cell dataKey="gender" />
            </Column>

            <Column width={100}>
                <HeaderCell>Age</HeaderCell>
                <Cell dataKey="age" />
            </Column>

            <Column width={150}>
                <HeaderCell>Postcode</HeaderCell>
                <Cell dataKey="postcode" />
            </Column>

            <Column width={300}>
                <HeaderCell>Email</HeaderCell>
                <Cell dataKey="email" />
            </Column>

            <Column width={80} fixed="right">
                <HeaderCell>Actions</HeaderCell>
                <Cell style={{ padding: '6px' }}>
                    {rowData => (
                        <Button appearance="link" onClick={() => alert(`id: ${rowData.id}`)}>
                            Edit
                        </Button>
                    )}
                </Cell>
            </Column>
        </Table>
    );
};

export default Comp3;