# personal-budget
An API to accomplish envelope budgeting

##Usage
To use this API, use the following endpoints:

1. **GET** - 1. **/envelopes** gets all 2. **/envelopes/:id** gets specific envelope based on the id
2. **POST**- **envelopes/** Use this format in body: {"budget":number,"title":string}
3. **PUT** - same as above, but you can add a key/value pair "spent":amount to subtract from total envelope budget
4. **POST** transfer for envelope - **envelopes/transfer/:from/:to** : Put transferAmount in a header, will transfer from envelope of id "from" to envelope of id "to"
5. **DELETE** - **/envelopes/:id** :  deletes the envelope with the given id
