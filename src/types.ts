export type StudentType = {
    name:string,
    avatar?: string,
    id?: number,
    gpa:number,
    specialty:string,
    lastOnline?: Date,
    description: string,
    socialMedia:{
        githubLink?:string,
        linkerInLink?:string,
        instagramLink?:string,
        telegramLink?:string,
        behanceLink?:string,
    }
}
