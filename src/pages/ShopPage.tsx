import { ArrowUpRight, HeartHandshake, ShoppingBag } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const trendNestUrl = 'https://trendnest99.in';

const ShopPage = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-2 text-sm text-primary shadow-sm backdrop-blur">
              <ShoppingBag size={16} />
              Official shopping partner
            </div>

            <h1 className="font-display text-4xl font-bold text-gradient-gold md:text-6xl">
              Shop on TrendNest99
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              Our products are now available on <span className="font-semibold text-foreground">TrendNest99</span>.
              Browse T-shirts, gifts, and special picks by clicking below to head straight to the official store.
            </p>
          </div>

          <Card className="mx-auto mt-10 max-w-4xl overflow-hidden border-primary/15 bg-white/80 shadow-xl backdrop-blur">
            <CardContent className="grid gap-8 p-8 md:grid-cols-[1.3fr_0.9fr] md:p-10">
              <div className="space-y-6 text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <HeartHandshake size={16} />
                  Simple and direct shopping
                </div>

                <div className="space-y-4">
                  <h2 className="font-display text-3xl font-semibold text-foreground">
                    Your favorites are just one click away
                  </h2>
                  <p className="text-muted-foreground">
                    If you want to buy products inspired by Zindagi Gulzar, you will find the complete
                    collection on TrendNest99. Explore the latest items there and place your order with ease.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-secondary/60 p-4">
                  <p className="text-sm text-muted-foreground">Visit our shopping destination</p>
                  <a
                    href={trendNestUrl}
                    className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-primary transition-opacity hover:opacity-80"
                  >
                    trendnest99.in
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6 rounded-3xl bg-gradient-to-br from-primary/10 via-background to-accent/10 p-6">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.25em] text-primary/70">Ready to explore?</p>
                  <p className="font-display text-2xl font-semibold text-foreground">
                    Head over to TrendNest99 and start shopping now.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Click the button below to go directly to the TrendNest99 website.
                  </p>
                </div>

                <Button asChild size="lg" className="h-12 rounded-full text-base">
                  <a href={trendNestUrl} className="gap-2">
                    Visit TrendNest99
                    <ArrowUpRight size={18} />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default ShopPage;
