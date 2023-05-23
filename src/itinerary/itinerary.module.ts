import { Module } from '@nestjs/common';
import { OpenAIService } from 'src/shared/openai/openai.service';
import { ItineraryController } from './itinerary.controller';
import { ItineraryService } from './itinerary.service';

@Module({
  controllers: [ItineraryController],
  providers: [ItineraryService, OpenAIService],
})
export class ItineraryModule {}
