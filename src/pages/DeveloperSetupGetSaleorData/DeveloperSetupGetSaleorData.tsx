import { useActor } from "@xstate/react";
import React, { useContext } from "react";
import { StateContext } from "../../components/StateProvider";
import * as S from "./styles";

const DeveloperSetupGetSaleorData: React.FC = () => {
  const globalServices = useContext(StateContext);
  const [developerState] = useActor(globalServices.developerStateService);

  return (
    <S.Root>
      <S.Title>Development guide - Get data from Saleor</S.Title>
      <S.Options>
        <p>
          Saleor uses GraphQL to communicate with your store. In order to fetch
          data from Saleor in your frontend code, you need to:
        </p>
        <ul>
          <li>Setup GraphQL client in your frontend code.</li>
          <li>
            Create queries and mutations by which you will exchange data between
            Saleor and your frontend.
          </li>
        </ul>
        {!developerState.context.knowledge?.includes("graphql") && (
          <>
            <S.SubTitle>What is GraphQL?</S.SubTitle>
            <p>
              GraphQL is a query language for APIs with which you can define
              data you want in your queries and then API that implements GraphQL
              will return that data. In our case that API is a Saleor instance.
            </p>
            <S.SubTitle>What are GraphQL queries?</S.SubTitle>
            <p>
              For example, let's say you have a store with products and you want
              to fetch all products. So, you can create the following query:
            </p>
            <pre>
              <code>
                {`query GetProducts {
  products {
    id
    name
    price
    description
    image {
      url
    }
  }
}`}
              </code>
            </pre>
            <p>
              And running this query against API that implements GraphQL will
              return the following data:
            </p>
            <pre>
              <code>
                {`{
  "data": {
    "products": [
      {
        "id": "1",
        "name": "Product 1",
        "price": "10.00",
        "description": "Product 1 description",
        "image": {
          "url": "https://example.com/image-1.png"
        }
      },
      {
        "id": "2",
        "name": "Product 2",
        "price": "20.00",
        "description": "Product 2 description",
        "image": {
          "url": "https://example.com/image-2.png"
        }
      }
    ]
  }
}`}
              </code>
            </pre>
            <S.SubTitle>What are GraphQL mutations?</S.SubTitle>
            <p>
              Besides the queries, the GraphQL also allows to modify data in
              API. To do this, you create mutations. For example, let's say you
              want to create a new product. So, you can create the following
              mutation:
            </p>
            <pre>
              <code>
                {`mutation CreateProduct($input: ProductInput!) {
  productCreate(input: $input) {
    product {
      id
      name
      price
      description
      image {
        url
      }
    }
  }
}`}
              </code>
            </pre>
            <p>
              And this mutaation you can run against API with the following
              input:
            </p>
            <pre>
              <code>
                {`{
  "input": {
    "name": "Product 3",
    "price": "30.00",
    "description": "Product 3 description",
    "image": {
      "url": "https://example.com/image-3.png"
    }
  }
}`}
              </code>
            </pre>
            <p>
              The mutation result will be newly created product with the
              following data (you will see the data in the response):
            </p>
            <pre>
              <code>
                {`{
  "data": {
    "productCreate": {
      "product": {
        "id": "3",
        "name": "Product 3"
        "price": "30.00",
        "description": "Product 3 description",
        "image": {
          "url": "https://example.com/image-3.png"
        }
      }
    }
  }
}`}
              </code>
            </pre>
            <S.SubTitle>The purpose of GraphQL in Saleor</S.SubTitle>
            <p>
              The aim is define such queries and mutations on the frontend,
              which will fetch data you wish to show on the particular web
              pages.
            </p>
          </>
        )}
      </S.Options>
      <S.Actions>
        <S.LeftActions>
          <S.LeftActionItem to="/developer/setup">
            <h2>&larr; Back</h2>
          </S.LeftActionItem>
        </S.LeftActions>
        <S.RightActions></S.RightActions>
      </S.Actions>
    </S.Root>
  );
};
export default DeveloperSetupGetSaleorData;
