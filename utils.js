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

module.exports = {createElement: createElement, getElementById: getElementById};