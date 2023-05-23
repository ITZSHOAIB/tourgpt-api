import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { IItineraryRequest } from '../interface/itineraryRequest.interface';

export class ItineraryRequest implements IItineraryRequest {
  @IsNotEmpty()
  @IsNumber()
  days: number;
  @IsNotEmpty()
  @IsString()
  destination: string;
  @IsNotEmpty()
  @IsString()
  interests: string;
}
