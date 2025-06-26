"use client";

import { useState } from 'react';
import { suggestGreeting } from '@/ai/flows/suggest-greeting';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const customerReviews = [
  "Absolutely divine! The chocolate cake was a dream come true.",
  "SweetSlice never disappoints. Their pastries are fresh and flavorful.",
  "The custom cake for my birthday was stunning and delicious! Highly recommend.",
  "A must-visit bakery! Every item is a work of art and tastes even better.",
  "My go-to place for all things sweet. The staff are lovely too!",
];

export function MessageGenerator() {
  const [greeting, setGreeting] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateGreeting = async () => {
    setIsLoading(true);
    setGreeting('');
    try {
      const result = await suggestGreeting({ customerReviews });
      setGreeting(result.greeting);
    } catch (error) {
      console.error("Failed to generate greeting:", error);
      toast({
        title: "Oh no! Something went wrong.",
        description: "We couldn't generate a greeting. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="mb-24 mt-8">
      <Card className="max-w-2xl mx-auto bg-background/70 border-primary/50 shadow-lg backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-cute text-4xl text-foreground">A Special Welcome</CardTitle>
          <CardDescription className="text-foreground/70 pt-2">
            Let our AI craft a warm greeting for our customers based on their lovely reviews!
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6">
          <Button onClick={handleGenerateGreeting} disabled={isLoading} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6 px-8 rounded-full shadow-md transition-transform hover:scale-105">
            <Wand2 className="mr-3 h-6 w-6" />
            {isLoading ? 'Crafting a message...' : 'Generate Welcome Message'}
          </Button>
          {isLoading && <Skeleton className="h-12 w-full rounded-md bg-muted" />}
          {greeting && !isLoading && (
            <blockquote className="text-2xl font-cute text-center text-foreground p-4 bg-primary/20 rounded-lg border-l-4 border-primary">
             <p>"{greeting}"</p>
            </blockquote>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
