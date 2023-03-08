import { FastifyInstance } from "fastify";

export class BaseRepository { 
    fastify: FastifyInstance;
    constructor(fastify: FastifyInstance) { 
        this.fastify = fastify;
    }

    async getCollection(collectionName: string): Promise<any> {
        return this.fastify.mongo.db!.collection(collectionName);
    }
    
    async getObjectId(id: string) {
        return new this.fastify.mongo.ObjectId(id);
    }

    
    async getAllObjects(collectionName: string): Promise<any[]> {
        const collection = await this.getCollection(collectionName);
        return collection.find({}).toArray();
    }
    
    async getObjectById(collectionName: string, id: string): Promise<any> {
        const collection = await this.getCollection(collectionName);
        return collection.findOne({ _id: await this.getObjectId(id) });
    }
    
    async insertObject(collectionName: string, object: any): Promise<any> {
        const collection = await this.getCollection(collectionName);
        return collection.insertOne(object, { updated: new Date() }, { created: new Date() });
    }
    
    async updateObject(collectionName: string, id: string, object: any): Promise<any> {
        const collection = await this.getCollection(collectionName);
        return collection.updateOne({ _id: await this.getObjectId(id) }, { $set: object }, { updated: new Date() });
    }
    
    async deleteObject(collectionName: string, id: string): Promise<any> {
        const collection = await this.getCollection(collectionName);
        return collection.deleteOne({ _id: await this.getObjectId(id) });
    }
    
    async deleteAllObjects(collectionName: string): Promise<any> {
        const collection = await this.getCollection(collectionName);
        return collection.deleteMany({});
    }
    
    async deleteObjectsByQuery(collectionName: string, query: any): Promise<any> {
        const collection = await this.getCollection(collectionName);
        return collection.deleteMany(query);
    }
    
    async getObjectsByQuery(collectionName: string, query: any): Promise<any[]> {
        const collection = await this.getCollection(collectionName);
        return collection.find(query).toArray();
    }
    
    async getObjectByQuery(collectionName: string, query: any): Promise<any> {
        const collection = await this.getCollection(collectionName);
        return collection.findOne(query);
    }
    
    async updateObjectsByQuery(collectionName: string, query: any, object: any): Promise<any> {
        const collection = await this.getCollection(collectionName);
        return collection.updateMany(query, { $set: object });
    }
    
    async updateObjectByQuery(collectionName: string, query: any, object: any): Promise<any> {
        const collection = await this.getCollection(collectionName);
        return collection.updateOne(query, { $set: object }, { updated: new Date() });
    }
    
    async countObjects(collectionName: string): Promise<number> {
        const collection = await this.getCollection(collectionName);
        return collection.countDocuments();
    }
    
    async countObjectsByQuery(collectionName: string, query: any): Promise<number> {
        const collection = await this.getCollection(collectionName);
        return collection.countDocuments(query);
    }
    
    async getObjectsByQueryWithPagination(collectionName: string, query: any, page: number, pageSize: number): Promise<any[]> {
        const collection = await this.getCollection(collectionName);
        return collection.find(query).skip(page * pageSize).limit(pageSize).toArray();
    }
    
    async getObjectsByQueryWithSort(collectionName: string, query: any, sort: any): Promise<any[]> {
        const collection = await this.getCollection(collectionName);
        return collection.find(query).sort(sort).toArray();
    }
    
    async getObjectsByQueryWithSortAndPagination(collectionName: string, query: any, sort: any, page: number, pageSize: number): Promise<any[]> {
        const collection = await this.getCollection(collectionName);
        return collection.find(query).sort(sort).skip(page * pageSize).limit(pageSize).toArray();
    }
}
