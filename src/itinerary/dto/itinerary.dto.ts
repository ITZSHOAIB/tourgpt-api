import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { IItineraryRequest } from '../interface/itineraryRequest.interface';
import { IItineraryResponse } from '../interface/itineraryResponse.interface';

export class ItineraryRequest implements IItineraryRequest {
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  @Min(1)
  @Max(30)
  @ApiProperty()
  days: number;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  destination: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  interests: string;
}

export class ItineraryResponse implements IItineraryResponse {
  @ApiProperty()
  success: boolean;
  @ApiProperty()
  message: string;
}
