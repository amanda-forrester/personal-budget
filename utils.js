let envelopeIdCounter = 0;

const createElement = (queryArgs) => {
    if (queryArgs.hasOwnProperty('budget') && queryArgs.hasOwnProperty('title')) {
        let currentId;
        envelopeIdCounter += 1;
        currentId = envelopeIdCounter;
        return {
            'id': currentId,
            'budget': queryArgs.budget,
            'title': queryArgs.title
        };
    } else {
        return false;
    }
};

const getElementById = (id, listElements) => {
    return listElements.find((element) => {
        return element.id === Number(id);
    });
};

const getIndexById = (id, listElements) => {
    return listElements.findIndex((element) => {
        return element.id === Number(id);
    })
}

const updateElement = (id, queryArgs, listElements) => {
    const indexElement = getIndexById(id, listElements);
    if (indexElement === -1){
        throw new Error('updateElement requires a valid id');
    }
    if (queryArgs.id) {
        queryArgs.id = Number(queryArgs.id);
    }
    Object.assign(listElements[indexElement], queryArgs);
    return listElements[indexElement];
}



module.exports = {createElement: createElement, getElementById: getElementById,
                getIndexById:getIndexById, updateElement:updateElement};