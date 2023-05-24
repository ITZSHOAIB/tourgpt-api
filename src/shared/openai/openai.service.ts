import { Injectable, Logger } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class OpenAIService {
  openAIApi: OpenAIApi;
  constructor() {
    const config = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.openAIApi = new OpenAIApi(config);
  }
  public async completions(prompt: string) {
    const response = await this.openAIApi.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 500,
      temperature: 0,
    });

    if (response.status !== 200) {
      return { success: false, message: 'OpenAI Error' };
    }
    Logger.log(JSON.stringify(response.data.usage));
    return { success: true, message: response.data.choices[0].text };
  }
}
