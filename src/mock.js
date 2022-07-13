import { faker } from '@faker-js/faker';

export const mockData =  [
    {
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        checked: faker.datatype.boolean(),
        children: [
            {
                id: faker.datatype.uuid(),
                name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                checked: faker.datatype.boolean(),
                children: []
            },
            {
                id: faker.datatype.uuid(),
                name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                checked: faker.datatype.boolean(),
                children: []
            },
            {
                id: faker.datatype.uuid(),
                name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                checked: faker.datatype.boolean(),
                children: []
            }
        ]
    },
    {
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        checked: faker.datatype.boolean(),
        children: [
            {
                id: faker.datatype.uuid(),
                name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                checked: faker.datatype.boolean(),
                children: []
            },
            {
                id: faker.datatype.uuid(),
                name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                checked: faker.datatype.boolean(),
                children: []
            },
            {
                id: faker.datatype.uuid(),
                name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                checked: faker.datatype.boolean(),
                children: [
                    {
                        id: faker.datatype.uuid(),
                        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                        checked: faker.datatype.boolean(),
                        children: []
                    },
                    {
                        id: faker.datatype.uuid(),
                        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                        checked: faker.datatype.boolean(),
                        children: []
                    },
                    {
                        id: faker.datatype.uuid(),
                        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                        checked: faker.datatype.boolean(),
                        children: []
                    }
                ]
            }
        ]
    },
    {
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        checked: faker.datatype.boolean(),
        children: []
    },
    {
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        checked: faker.datatype.boolean(),
        children: []
    },
    {
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,   
        checked: faker.datatype.boolean(),             
        children: []
    },
    {
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        checked: faker.datatype.boolean(),
        children: []
    },
    {
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        checked: faker.datatype.boolean(),
        children: []
    },
    {
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        checked: faker.datatype.boolean(),
        children: []
    },
    {
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        checked: faker.datatype.boolean(),
        children: []
    },
    {
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        checked: faker.datatype.boolean(),
        children: []
    },
    {
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        checked: faker.datatype.boolean(),
        children: []
    },
    {
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        checked: faker.datatype.boolean(),
        children: []
    },
    {
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,                
        checked: faker.datatype.boolean(),
        children: []
    },

]