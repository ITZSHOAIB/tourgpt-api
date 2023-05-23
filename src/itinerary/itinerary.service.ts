import { Injectable } from '@nestjs/common';
import { OpenAIService } from 'src/shared/openai/openai.service';

@Injectable()
export class ItineraryService {
  constructor(private openAIService: OpenAIService) {}
  generateItinerary(prompt: string) {
    return this.openAIService.completions(prompt);
  }
}
