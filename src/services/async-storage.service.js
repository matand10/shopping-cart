import { utilService } from "./util.service.js"

export const storageService = {
    query,
    get,
    post,
    put,
    remove,
}

function query(entityType, filterBy = { name: '', status: '', labels: [] }, delay = 1500) {
    return JSON.parse(localStorage.getItem(entityType)) || []
}


async function get(entityType, entityId) {
    try {
        const entities = await query(entityType)
        return entities.find(entity => entity._id === entityId)
    } catch (err) {
        console.log(err)
    }
}

async function post(entityType, newEntity) {
    // console.log('entityType', entityType)
    // console.log('newEntity', newEntity)
    try {
        newEntity._id = utilService.makeId()
        const entities = await query(entityType)
        entities.push(newEntity)
        _save(entityType, entities)
        return newEntity
    } catch (err) {
        console.log(err)
    }
}

async function put(entityType, updatedEntity) {
    try {
        const entities = await query(entityType)
        const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
        entities.splice(idx, 1, updatedEntity)
        _save(entityType, entities)
        return updatedEntity
    } catch (err) {
        console.log(err)
    }
}

async function remove(entityType, entityId) {
    try {
        const entities = await query(entityType)
        const idx = entities.findIndex(entity => entity._id === entityId)
        entities.splice(idx, 1)
        _save(entityType, entities)

    } catch (err) {
        console.log(err)
    }
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}