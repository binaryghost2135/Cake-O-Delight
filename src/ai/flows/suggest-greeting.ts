// src/ai/flows/suggest-greeting.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting customized greetings based on customer reviews.
 *
 * - suggestGreeting - A function that takes customer reviews as input and returns a suggested greeting.
 * - SuggestGreetingInput - The input type for the suggestGreeting function.
 * - SuggestGreetingOutput - The return type for the suggestGreeting function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestGreetingInputSchema = z.object({
  customerReviews: z.array(z.string()).describe('An array of customer review texts.'),
});
export type SuggestGreetingInput = z.infer<typeof SuggestGreetingInputSchema>;

const SuggestGreetingOutputSchema = z.object({
  greeting: z.string().describe('A customized greeting suggested based on the customer reviews.'),
});
export type SuggestGreetingOutput = z.infer<typeof SuggestGreetingOutputSchema>;

export async function suggestGreeting(input: SuggestGreetingInput): Promise<SuggestGreetingOutput> {
  return suggestGreetingFlow(input);
}

const suggestGreetingPrompt = ai.definePrompt({
  name: 'suggestGreetingPrompt',
  input: {schema: SuggestGreetingInputSchema},
  output: {schema: SuggestGreetingOutputSchema},
  prompt: `You are a marketing expert specializing in crafting personalized greetings for bakery customers.

  Based on the following customer reviews, generate a warm and inviting greeting that resonates with the customers' feedback.
  The greeting should be concise, friendly, and reflect the positive sentiments expressed in the reviews.

  Customer Reviews:
  {{#each customerReviews}}
  - {{{this}}}
  {{/each}}
  `,
});

const suggestGreetingFlow = ai.defineFlow(
  {
    name: 'suggestGreetingFlow',
    inputSchema: SuggestGreetingInputSchema,
    outputSchema: SuggestGreetingOutputSchema,
  },
  async input => {
    const {output} = await suggestGreetingPrompt(input);
    return output!;
  }
);
