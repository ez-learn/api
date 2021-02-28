import { Document } from 'mongoose';
export default class BaseDocument extends Document {
    _id: string;
    createdAt: string;
    updatedAt: string;
}