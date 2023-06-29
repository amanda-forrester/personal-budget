# personal-budget
An API to accomplish envelope budgeting

## Usage
To use this API, you can utilize the following endpoints:

1. **GET** - **/envelopes**: Retrieves all envelopes.
2. **GET** - **/envelopes/:id**: Retrieves a specific envelope based on its id.

For the following endpoints, you need to send a **POST** request:

**POST** - **/envelopes/**: Creates a new envelope. Include the following JSON format in the request body: {"budget":number, "title":string}.

For the following endpoints, you need to send a **PUT** request:

**PUT** - **/envelopes/:id**: Updates a specific envelope based on its id. You can also include a key/value pair "spent":amount to subtract from the total envelope budget.

For the following endpoint, you need to send a **POST** request with additional information:

**POST** - **/envelopes/transfer/:from/:to**: Transfers a specific amount (transferAmount) from the envelope with id from to the envelope with id to. Include the transferAmount value in the request header.

For the following endpoint, you need to send a **DELETE** request:

**DELETE** - **/envelopes/:id**: Deletes the envelope with the given id.

Please note that when sending requests, replace **:id** in the endpoint with the actual id of the envelope, and **:from** and **:to** with the respective envelope ids for the transfer operation.
