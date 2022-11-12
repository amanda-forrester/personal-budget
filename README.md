# personal-budget
An API to accomplish envelope budgeting


To use this API, use the following format:

1. **GET** - *endpoint* /envelopes gets all, *endpoint* /envelopes/:id gets specific envelope based on the id
2. **POST** for new envelope - *endpoint* envelopes/ - {"budget":number,"title":string}
3. **PUT** - same as above, but you can add a key/value pair "spent":amount to subtract from total envelope budget
4. **POST** transfer for envelope - *endpoint* envelopes/transfer/:from/:to  Put transferAmount in a header, will transfer from envelope of id "from" to envelope of id "to"
5. **DELETE** - *endpoint* /envelopes/:id, deletes the envelope with the given id
