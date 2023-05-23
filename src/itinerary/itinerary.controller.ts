import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ItineraryRequest } from './dto/itinerary.dto';
import { ItineraryService } from './itinerary.service';

@Controller('itinerary')
export class ItineraryController {
  constructor(private itineraryService: ItineraryService) {}

  @Post('/generate')
  @UsePipes(ValidationPipe)
  async generate(@Body() itinerartRequest: ItineraryRequest) {
    const { days, destination, interests } = itinerartRequest;
    const prompt = `Write an itinerary for a ${days} day trip to ${destination} for a traveller that is interested in: ${interests}`;
    return this.itineraryService.generateItinerary(prompt);
  }
}
