import { Schema, SchemaFactory } from "@nestjs/mongoose";
import BaseDocument from "src/infrastructure/database/mongo/models/base";
export enum CourseLevel {
    "BEGINNER" = "Beginner",
    "INTERMEDIATE" = "Intermediate",
    "ADVANCED" = "Advanced"
}
@Schema({timestamps: true})
export class Course extends BaseDocument {
    title: string;
    releaseDate: string;
    level: CourseLevel;
    shortDescription: string;
    description: string;
    durationInMilliseconds: number;
    hasTranscript: boolean;
    authorsFullnames: string;
    imageUrl: string;
    defaultImageUrl: string;
    isStale: boolean;
    cachedOn: string;
    urlSlug: string;
}

export class CourseProgress extends BaseDocument {
    viewedModules: string;
    lastViewedModule: string;
    lastViewedModuleAuthor: string;
    lastViewedClip: string;
    lastViewTime: string;
}

export class CourseAccess extends BaseDocument {
    courseName: string;
    mayDownload: string;
    lastChecked: string;
}
export class Module extends BaseDocument {
    name: string;
    title: string;
    authorHandle: string;
    description: string;
    durationInMilliseconds: number;
    moduleIndex: number;
    courseName: string;
}

export class Clip extends BaseDocument {
    name: string;
    title: string;
    clipIndex: number;
    durationInMilliseconds: number;
    moduleId: number; 
}

export class ClipTranscript extends BaseDocument {
    startTime: string;
    endTime: string;
    text: string;
    clipId: string;
}

export class ClipView extends BaseDocument {
    courseName: string;
    authorHandle: string;
    moduleName: string;
    clipIndex: string;
    startViewTime: string;
}

export class Setting {
    name: string;
    value: string;
}

export class Analytics {
    eventName: string;
    properties: string;
    timestamp: string;
    failerCount: string;
    send: string;
}

export class User {
    jwt: string;
    jwtExpiration: string;
    deviceId: string;
    refreshToken: string;
    userHandle: string;
}
export class UserProfile {
    name: string;
    email: string;
}
export default SchemaFactory.createForClass(Course);