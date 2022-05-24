import { faker } from '@faker-js/faker';

export const mockData =  [
    {
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        children: [
            {
                id: faker.datatype.uuid(),
                name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                children: []
            },
            {
                id: faker.datatype.uuid(),
                name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                children: []
            },
            {
                id: faker.datatype.uuid(),
                name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                children: []
            }
        ]
    },
    {
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        children: [
            {
                id: faker.datatype.uuid(),
                name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                children: []
            },
            {
                id: faker.datatype.uuid(),
                name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                children: []
            },
            {
                id: faker.datatype.uuid(),
                name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                children: [
                    {
                        id: faker.datatype.uuid(),
                        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                        children: []
                    },
                    {
                        id: faker.datatype.uuid(),
                        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                        children: []
                    },
                    {
                        id: faker.datatype.uuid(),
                        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                        children: []
                    }
                ]
            }
        ]
    },
    {
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        children: []
    },
    {
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        children: []
    },
    {
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,                
        children: []
    },
    {
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        children: []
    },
    {
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        children: []
    },
    {
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        children: []
    },
    {
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        children: []
    },
    {
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        children: []
    },
    {
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        children: []
    },
    {
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        children: []
    },
    {
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        children: []
    },

]