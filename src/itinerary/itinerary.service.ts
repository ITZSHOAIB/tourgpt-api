import { Injectable } from '@nestjs/common';
import { OpenAIService } from 'src/shared/openai/openai.service';
import { IItineraryRequest } from './interface/itineraryRequest.interface';

@Injectable()
export class ItineraryService {
  constructor(private openAIService: OpenAIService) {}
  generateItinerary(query: IItineraryRequest) {
    const { days, origin, destination, interests } = query;
    const prompt = `Write an itinerary for a ${days} days trip to ${destination} from ${origin} for a traveller that is interested in: ${interests}. Also include multiple options to reach the destination at the beginning`;
    return this.openAIService.completions(prompt);
  }
}
