import { IUser } from 'src/app/user/Models/IUser.model';

export interface ITrip{
    id: number; 
    destination: string;
    startDate: Date;  
    endDate: Date;
    totalDays: number; 
    travelers: IUser[];   
}