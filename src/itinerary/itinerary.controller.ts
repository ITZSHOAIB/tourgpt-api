import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ItineraryRequest, ItineraryResponse } from './dto/itinerary.dto';
import { ItineraryService } from './itinerary.service';

@Controller('itinerary')
@ApiTags('Itinerary')
export class ItineraryController {
  constructor(private itineraryService: ItineraryService) {}

  @Post('/generate')
  @ApiOperation({
    summary: "Generate Your Trip's Itinerary",
    description:
      "Returns your trip's itinerary based on the provided input data",
  })
  @ApiBody({ type: ItineraryRequest })
  @ApiResponse({
    status: 201,
    description: 'Itinerary Response',
    type: ItineraryResponse,
  })
  @UsePipes(ValidationPipe)
  async generate(
    @Body() itinerartRequest: ItineraryRequest,
  ): Promise<ItineraryResponse> {
    const { days, destination, interests } = itinerartRequest;
    const prompt = `Write an itinerary for a ${days} day trip to ${destination} for a traveller that is interested in: ${interests}`;
    return this.itineraryService.generateItinerary(prompt);
  }
}
