import { gql } from "@apollo/client";

export const GET_CUSTOMERS = gql`
query GetCustomers {
    getCustomers {
        value {
            email
            name
        }
    }
}
`;
export const GET_ORDERS = gql `
    query GetOrders {
        getOrders {
            value{
                carrier
                createdAt
                trackingID
                shippingCost
                Address
                City
                Lng
                Lat
                trackingItems {
                    customer_id
                    customer{
                        email
                        name

items {
    item_id
    nameprice
    quantity
}           

         }
                }
            }
        }
    }

`;